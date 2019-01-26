/**
 *@author xdsh 2010年9月21日15:34:35
 *功能： (1)获取操作员个人请假申请信息
 *		(2)新增请假申请信息
 **/
 
var queryApplyPersonalStore;	
var queryApplyPersonalGrid;

var leaveApplyForm;	//请假申请单
var leaveApplyWin;	//显示窗口
var addLeaveApply;	//创建函数
var showQueryPanel;

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
//	alert(userGrade+"======");
	queryApplyPersonalStore = new Ext.data.JsonStore({
		url : 'applicationInfo_findAll.action',
		root : 'applicationInfoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 20
		},
		fields : [{
			name : 'applicasn',
			mapping : 'applicasn'
		},{
			name : 'applymanname',
			mapping : 'applymanname'
		},{
			name : 'applicareason',
			mapping : 'applicareason.name'
		},{
			name : 'applyman',
			mapping : 'applyman'
		},{
			name : 'starttime',
			mapping : 'starttime'
		},{
			name : 'endtime',
			mapping : 'endtime'
		},{
			name : 'content',
			mapping : 'content'
		},{
			name : 'applicacanceltime',
			mapping : 'applicacanceltime'
		},{
			name : 'delstate',
			mapping : 'showstate'
		}]
	});
	
	queryApplyPersonalStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	queryApplyPersonalGrid = new Ext.grid.GridPanel({
//		renderTo : 'applyListGrid',
		store : queryApplyPersonalStore,
		sm : sm,
		columns : [ sm, rowNum, {
			header : '申请人',
			dataIndex : 'applymanname',
			width : 100
		},{
			header : '信息状态',
			dataIndex : 'delstate',
			width : 100,
			renderer : function(value, meta, record) {
				var tempString = '<div><a href=javascript:updata()><font color="red">'+ value +'</font></a></div>';
				return tempString;
			}
		},{
			header : '申请原因',
			dataIndex : 'applicareason',
			width : 100 
		},{
			header : '开始时间',
			dataIndex : 'starttime',
			width : 150,
			renderer : getMoreTime
		},{
			header : '结束时间',
			dataIndex : 'endtime',
			width : 150,
			renderer : getMoreTime
		},{
			header : '详细理由',
			dataIndex : 'content',
			width : 100
		}],
		width : 100,
		height : 300,
		tbar : [{
			text : ' 请假 ',
			tooltip : '新建',
			iconCls : 'icon-add',
			handler : function() {
				addLeaveApply();
			}
		}, '-', {
			text : '销假',
			iconCls : '',
			handler : function(){
				cancelLeaveApply(queryApplyPersonalGrid, queryApplyPersonalStore, "applicationAudit_cancelLeaveApply.action?selectFlag=160409&userRole="+userRole, "applicasn","delstate", "销假");
			}
		}, '-', {
			text : '删除',
			tooltip : '删除',
			iconCls : 'icon-del',
			handler : function() {
//				alert(delstate+"=======");
				del (queryApplyPersonalGrid, queryApplyPersonalStore, "applicationInfo_delete.action", "applicasn", "删除该申请");
				}
		}],
		bbar : [{
			xtype : 'paging',
			pageSize : 15,
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			store : queryApplyPersonalStore,
//			displayInfo : true,
//			displayMsg : '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		height :'100%',
		renderTo : 'applyListGrid',
		items : [queryApplyPersonalGrid]
	});
	var divHeight = document.getElementById('applyListGrid').offsetHeight;
	var divWidth = document.getElementById('applyListGrid').offsetWidth;
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryApplyPersonalGrid.setWidth(showQueryPanel.getWidth());
	queryApplyPersonalGrid.setHeight(showQueryPanel.getHeight());
	
	//////////////////////////////////////////
	/**
	 * 新建请假申请
	 **/
	personelInfoStore.load();
	applicationReasonStore.load();
	
	leaveApplyForm = new Ext.FormPanel({
		title :  '请假申请',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 385,
		height : 240, 
		items : [{
//			fieldLabel : '请假人',
//			xtype : 'combo',
//			allowBlank : false,
//			store : personelInfoStore,
//			valueField : 'idnumber',
//			displayField : 'name',
//			mode : 'local',
//			forceSelection : true,
//			emptyText : '请选请假人...',
//			editable : false,
//			triggerAction : 'all',
//			hiddenName : 'applicationInfo.personelinfo.idnumber',
//			pageSize : 5
//		},{
			fieldLabel : '请假类型*',
			xtype : 'combo',
			allowBlank : false,
			store : applicationReasonStore,
			valueField : 'reasonid',
			displayField : 'name',
			mode : 'local',
			forceSelection : true,
			emptyText : '请选请假类型...',
			editable : false,
			triggerAction : 'all',
			hiddenName : 'applicationInfo.applicareason.reasonid',
			anchor : '95%',
			pageSize : 5	
		},{
			name : 'applicationInfo.starttime',
			xtype : 'textfield',
			allowBlank : false,
			fieldLabel : '开始时间*',
			listeners: {
               'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})}},
	        anchor : '90%'
		},{
			name : 'applicationInfo.endtime',
			xtype : 'textfield',
			allowBlank : false,
			fieldLabel : '结束时间*',
			listeners: {
               'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})}},
	        anchor : '90%'
		},{
			name : 'applicationInfo.content',
			xtype : 'textarea',
			fieldLabel : '申请正文*',
			allowBlank : false,
			width : '100%',
			height : 70
		}],
		buttons : [{
			text : '保存',
			iconCls : 'icon-save',
			disabled : false,
			handler : function() {
				check(leaveApplyForm, "applicationInfo_addNewInfo.action", queryApplyPersonalStore, "保存请假申请")
				leaveApplyWin.hide();
			}
		}, {
			text : '保存并提交',
			iconCls : 'icon-accept',
			disabled : false,
			handler : function() {
//				alert(userRole+"=====userrole")
				check(leaveApplyForm, "applicationAudit_saveAndSubmitApply.action?userRole="+userRole, queryApplyPersonalStore, "保存并提交请假申请")
				leaveApplyWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				leaveApplyWin.hide();
				leaveApplyForm.form.reset();
			}
		}]
	});

	leaveApplyWin = new Ext.Window({
		layout : 'form',
		width : 400,
		height : 250,
		plain : true,
		closable : false,
		items : leaveApplyForm
	});

	addLeaveApply = function(){
		leaveApplyWin.show();
	};
	
	updateLeaveApplyForm  = new Ext.form.FormPanel({
		title : '修改请假申请信息',
		frame : true,
		waitMsgTarget : true,
		reader : auditApplyInfoReader,
		width : 400,
		height : 250,
		items : [{
			fieldLabel : '申请编号',
			xtype : 'hidden',
			name : 'applicationInfo.applicasn'
		},{
//			fieldLabel : '请假人',
//			xtype : 'combo',
//			allowBlank : false,
//			store : personelInfoStore,
//			valueField : 'idnumber',
//			displayField : 'name',
//			mode : 'local',
//			forceSelection : true,
//			emptyText : '请选请假人...',
//			editable : false,
//			triggerAction : 'all',
//			hiddenName : 'applicationInfo.personelinfo.idnumber',
//			pageSize : 5
			fieldLabel : '请假人',
			xtype : 'textfield',
			name : 'applicationInfo.applymanname',
			editable : false
		},{
			fieldLabel : '请假类型',
			xtype : 'combo',
			allowBlank : false,
			store : applicationReasonStore,
			valueField : 'reasonid',
			displayField : 'name',
			mode : 'local',
			forceSelection : true,
			emptyText : '请选请假类型...',
			editable : false,
			triggerAction : 'all',
			hiddenName : 'applicationInfo.applicareason.reasonid',
			pageSize : 5	
		},{
			name : 'applicationInfo.starttime',
			xtype : 'textfield',
			fieldLabel : '开始时间',
			listeners: {
               'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})}},
	        anchor : '90%'
		},{
			name : 'applicationInfo.endtime',
			xtype : 'textfield',
			fieldLabel : '结束时间',
			listeners: {
               'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})}},
	        anchor : '90%'
		},{
			name : 'applicationInfo.content',
			xtype : 'textarea',
			fieldLabel : '申请正文',
			width : '100%',
			height : 70
		},{
			name : 'applicationInfo.delstate',
			xtype : 'hidden',
			fieldLabel : '信息状态(数字)'
		},{
			name : 'applicationInfo.showstate',
			xtype : 'hidden',
			id : 'applyInfoState',
			fieldLabel : '信息状态(中文)'
		}],
		buttons : [{
			text : '保存',
			iconCls : 'icon-save',
			disabled : false,
			handler : function() {
				var delflag = Ext.getCmp('applyInfoState').getValue();
				if(delflag == '有效申请' || delflag == '驳回'){
					check(updateLeaveApplyForm, "applicationInfo_update.action", queryApplyPersonalStore, "保存请假申请")
					updateLeaveApplyWin.hide();
				}else {
					Ext.Msg.alert('提示', '信息已提交，不能修改');
				}
			}
		}, {
			text : '保存并提交',
			iconCls : 'icon-accept',
			disabled : false,
			handler : function() {
				var delflag = Ext.getCmp('applyInfoState').getValue();
				if(delflag == '有效申请' || delflag == '驳回'){
					check(updateLeaveApplyForm, "applicationAudit_updateAndSubmitApply.action?userRole="+userRole, queryApplyPersonalStore, "保存并提交请假申请")
					updateLeaveApplyWin.hide();
				}else {
					Ext.Msg.alert('提示', '信息已提交，不能修改');
				}
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateLeaveApplyWin.hide();
				updateLeaveApplyForm.form.reset();
			}
		}]
	});
	
	updateLeaveApplyWin = new Ext.Window({
		layout : 'form',
		width : 420,
		height : 270,
		plain : true,
		closable : false,
		items : updateLeaveApplyForm
	});
	
	updata = function(){
		_record = queryApplyPersonalGrid.getSelectionModel().getSelected();
		flag = queryApplyPersonalGrid.getSelectionModel().getSelections();
		
		if (flag.length == 1) {
			var delflag = _record.get('delstate');
//			if(delflag == '有效申请' || delflag == '驳回'){
				updateLeaveApplyWin.show();
						
				updateLeaveApplyForm.getForm().load({
					url : 'applicationInfo_findById.action?applicationInfo.applicasn='+ _record.get('applicasn'),
					waitMsg : '正在载入数据...',
					failure : function() {
						Ext.Msg.alert('编辑', '载入失败');
					},
					success : function() {
					}
				});
//			}else {
//				Ext.Msg.alert('提示', '信息已提交，不能修改');
//			}
		} else
			Ext.Msg.alert('错误', '请选择一条需要修改的信息！');
	};
	
	cancelLeaveApply = function(grid, store, urlTemp, id, delstate, tag) {
		_record = grid.getSelectionModel().getSelected();
		flag = grid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			infoDel = _record.get(delstate);
			if(infoDel == "休假中"){
				Ext.MessageBox.confirm('确认'+tag, '你确认要'+tag+'吗？',
				function(btn) {
					if (btn == "yes") {
						infoid = _record.get(id);
						// 向Action中传输需要删除的记录的pkId的拼接字符串
						Ext.Ajax.request({
							url : urlTemp,
							params : {
								delData : infoid
							},
							success : function(response) {	
								var res = response.responseText;
								var flag = Ext.util.JSON.decode(res).success;
								if(flag == true){
									store.load();
									Ext.Msg.alert('友情提示', tag+'成功');
								}else if(flag == false){
									Ext.Msg.alert('友情提示', tag+'失败');
								}
							},
							failure : function(result, request) {
								Ext.Msg.alert('友情提示', tag+'失败');
							}
						});
					}
				});
			}else{
				Ext.MessageBox.alert('提示', '该申请的状态不是"休假中",请重新选择要销假的申请！');
			}
		} else {
			Ext.Msg.alert('友情提示', '请选择一条您要确认销假的信息！');
		}
	};
});