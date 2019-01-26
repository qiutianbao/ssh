/**
 *@author xdsh 2010年9月21日1:24:59
 *功能：职称管理 
 **/
 
 var queryPositionInfoStore;
 var queryPositionInfoGrid;
 var addPositionInfo;
 var addPositionInfoForm;
 var addPositionInfoWin;
 var updatePositionInfo;
 var updatePositionInfoForm;
 var updatePositionInfoWin;
 var updatePositionInfoReader;
 var showQueryPanel;

 var showHistoryInfo;	//触发函数--显示个人职称信息；
 var showHistoryStore;	//存储个人职称信息；
 var showHistoryWin;	//个人职称信息展示窗口
 var showHistoryGrid;	//个人职称信息展示
 
 Ext.onReady(function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('Person/ShowAllBaseInfoView.jsp');
	
	queryPositionInfoStore = new Ext.data.JsonStore({
		url : 'position_findAll.action',
		root : 'positionInfoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 20
		},
		fields : [{
			name : 'positionsn',
			mapping : 'positionsn'
		},{
			name : 'starttime',
			mapping : 'starttime'
		},{
			name : 'endtime',
			mapping : 'endtime'
		},{
			name : 'remark',
			mapping : 'remark'
		},{
			name : 'delstate',
			mapping : 'delstate'
		},{
			name : 'idnumber',
			mapping : 'personelinfo.idnumber'
		},{
			name : 'name',
			mapping : 'personelinfo.name'
		},{
			name : 'positionnameid',
			mapping : 'positionnameinfo.nameid'
		},{
			name : 'positionname',
			mapping : 'positionnameinfo.name'
		},{
			name : 'appointmentdate',
			mapping : 'appointmentdate'
		}],
		autoLoad : false
	});
	
	queryPositionInfoStore.load();
	var sm = new Ext.grid.CheckboxSelectionModel();
	queryPositionInfoGrid = new Ext.grid.GridPanel({
		store : queryPositionInfoStore,
		sm : sm,
		columns : [ sm, rowNum, {
			header : '身份证号',
			dataIndex : 'idnumber',
			width : 150
		},{
			header : '人员名称',
			dataIndex : 'name',
			width : 100,
			renderer : function(value, meta, record) {
				var tempString = '<div><a href=javascript:showHistoryInfo()><font color="red">'+ value +'</font></a></div>';
				return tempString;
			}
		},{
			header : '职称名称',
			dataIndex : 'positionname',
			width : 100
		},{
			header : '聘任日期',
			dataIndex : 'appointmentdate',
			renderer : getStringTime,
			width : 100
		},{
			header : '开始时间',
			dataIndex : 'starttime',
			renderer : getStringTime,
			width : 100
		},{
			header : '结束时间',
			dataIndex : 'endtime',
			renderer : getStringTime,
			width : 100
		},{
			header : '备注',
			dataIndex : 'remark',
			width : 100
		}],
		width : 300,
		height : 100,
		tbar : [{
			text : '添加人员职称信息 ',
			tooltip : '新建',
			iconCls : 'icon-add',
			handler : function() {
				addPositionInfo();
			}
		}, '-', {
			text : '删除',
			tooltip : '删除',
			iconCls : 'icon-del',
			handler : function() {
				del (queryPositionInfoGrid, queryPositionInfoStore, "position_delete.action", "positionsn", "删除该职称");
			}
		}],
		bbar : [{
			xtype : 'paging',
			pageSize : 15,
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			store : queryPositionInfoStore,
//			displayInfo : true,
//			displayMsg : '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'positionInfoGrid',
		items : [queryPositionInfoGrid]
	});
	var divHeight = document.getElementById('positionInfoGrid').offsetHeight;
	var divWidth = document.getElementById('positionInfoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryPositionInfoGrid.setWidth(showQueryPanel.getWidth());
	queryPositionInfoGrid.setHeight(showQueryPanel.getHeight());
		
	
	personelInfoStore.load();
	positionNameInfoStore.load();
	//////////////////////////////////////////
	addPositionInfoForm = new Ext.form.FormPanel({
		title :  '添加新信息',
		frame : true,
		waitMsgTarget : true,
		width : '100%',
		height : 310, 
		labelAlign : 'right',
		items : [{
			fieldLabel : '人员姓名*',
			xtype : 'combo',
			allowBlank : false,
			store : personelInfoStore,
			valueField : 'idnumber',
			displayField : 'name',
			mode : 'local',
			forceSelection : true,
			emptyText : '请选用户名...',
			editable : false,
			triggerAction : 'all',
			anchor : '95%',
			hiddenName : 'positionInfo.personelinfo.idnumber',
			pageSize : 5
		},{
			fieldLabel : '职称名称*',
			xtype : 'combo',
			allowBlank : false,
			store : positionNameInfoStore,
			valueField : 'nameid',
			displayField : 'name',
			mode : 'local',
			forceSelection : true,
			emptyText : '请选职称名称...',
			editable : false,
			triggerAction : 'all',
			anchor : '95%',
			hiddenName : 'positionInfo.positionnameinfo.nameid',
			pageSize : 5
		},{
			fieldLabel : '聘任日期*',
			name : 'positionInfo.appointmentdate',
			xtype : 'datefield',
			allowBlank : false,
			anchor : '95%',
			format : 'Y-m-d'
		},{
			fieldLabel : '开始时间*',
			name : 'positionInfo.starttime',
			xtype : 'datefield',
			allowBlank : false,
			anchor : '95%',
			format : 'Y-m-d'
		},{
			fieldLabel : '结束时间*',
			name : 'positionInfo.endtime',
			allowBlank : false,
			xtype : 'datefield',
			anchor : '95%',
			format : 'Y-m-d'
		},{
			fieldLabel : '备注',
			name : 'positionInfo.remark',
			xtype : 'textarea',
			height : 80,
			width : '95%'
		}],
		buttons : [{
			text : '保存',
			disabled : false,
			iconCls:'icon-save',
			handler : function() {
				check(addPositionInfoForm, "position_addNewInfo.action", queryPositionInfoStore, "保存新的人员职称信息")
				addPositionInfoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addPositionInfoWin.hide();
				addPositionInfoForm.form.reset();
			}
		}]
	});
	
	addPositionInfoWin = new Ext.Window({
		layout : 'form',
		width : 400,
		height : 320,
		plain : true,
		closable : false,
		items : addPositionInfoForm
	});
	
	addPositionInfo = function(){
		addPositionInfoWin.show();
	}
	
	///////////////////////////////////////////
	updatePositionInfoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	},[{
		name : 'positionInfo.positionsn',
		mapping : 'positionsn'
	},{
		name : 'positionInfo.starttime',
		mapping : 'starttime'
	},{
		name : 'positionInfo.endtime',
		mapping : 'endtime'
	},{
		name : 'positionInfo.remark',
		mapping : 'remark'
	},{
		name : 'positionInfo.delstate',
		mapping : 'delstate'
	},{
		name : 'positionInfo.personelinfo.idnumber',
		mapping : 'personelinfo.idnumber'
	},{
		name : 'positionInfo.personelinfo.name',
		mapping : 'personelinfo.name'
	},{
		name : 'positionInfo.positionnameinfo.nameid',
		mapping : 'positionnameinfo.nameid'
	},{
		name : 'positionInfo.positionnameinfo.name',
		mapping : 'positionnameinfo.name'
	},{
		name : 'positionInfo.appointmentdate',
		mapping : 'appointmentdate'
	}]
	);
	
	updatePositionInfoForm = new Ext.FormPanel({
		title : '请输入您要修改的车辆信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatePositionInfoReader,
		width : '100%',
		height : 310, 
		items : [{
			xtype : 'hidden',
			fieldLabel : '信息编号',
			name : 'positionInfo.positionsn'
		},{
			fieldLabel : '人员姓名',
			xtype : 'combo',
			allowBlank : false,
			store : personelInfoStore,
			valueField : 'idnumber',
			displayField : 'name',
			mode : 'local',
			forceSelection : true,
			emptyText : '请选用户名...',
			editable : false,
			triggerAction : 'all',
			anchor : '95%',
			hiddenName : 'positionInfo.personelinfo.idnumber',
			pageSize : 5
		},{
			fieldLabel : '职称名称',
			xtype : 'combo',
			allowBlank : false,
			store : positionNameInfoStore,
			valueField : 'nameid',
			displayField : 'name',
			mode : 'local',
			forceSelection : true,
			emptyText : '请选职称名称...',
			editable : false,
			triggerAction : 'all',
			anchor : '95%',
			hiddenName : 'positionInfo.positionnameinfo.nameid',
			pageSize : 5
		},{
			fieldLabel : '聘任日期',
			name : 'positionInfo.appointmentdate',
			xtype : 'datefield',
			anchor : '95%',
			format : 'Y-m-d'
		},{
			fieldLabel : '开始时间',
			name : 'positionInfo.starttime',
			xtype : 'datefield',
			anchor : '95%',
			format : 'Y-m-d'
		},{
			fieldLabel : '结束时间',
			name : 'positionInfo.endtime',
			xtype : 'datefield',
			anchor : '95%',
			format : 'Y-m-d'
		},{
			fieldLabel : '备注',
			name : 'positionInfo.remark',
			xtype : 'textarea',
			height : 80,
			anchor : '95%'
		},{
			fieldLabel : '信息状态',
			name : 'positionInfo.delstate',
			xtype : 'hidden'
		},{
			fieldLabel : '信息创建时间',
			name : 'positionInfo.appointment',
			xtype : 'hidden'
		}],
		buttons : [{
			text : '修改',
			disabled : false,
			iconCls:'icon-save',
			handler : function() {
				check(updatePositionInfoForm, "position_update.action", queryPositionInfoStore, "保存更改的职称信息")
				updatePositionInfoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatePositionInfoWin.hide();
				updatePositionInfoForm.form.reset();
				}
		}]
	});
	
	updatePositionInfoWin = new Ext.Window({
		layout : 'form',
		width : 400,
		height : 320,
		plain : true,
		closable : false,
		items : updatePositionInfoForm
	});
	
	updata = function(){
		_record = showHistoryGrid.getSelectionModel().getSelected();
		flag = showHistoryGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatePositionInfoWin.show();
					
			updatePositionInfoForm.getForm().load({
				url : 'position_findById.action?positionInfo.positionsn='+ _record.get('positionsn'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('编辑', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('错误', '请选择一条需要修改的信息！');
	};
	
	//存储个人学历信息；
	showHistoryStore = new Ext.data.JsonStore({
		url : 'position_findByPerson.action',
		root : 'positionInfoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 20
		},
		fields : [{
			name : 'positionsn',
			mapping : 'positionsn'
		},{
			name : 'starttime',
			mapping : 'starttime'
		},{
			name : 'endtime',
			mapping : 'endtime'
		},{
			name : 'remark',
			mapping : 'remark'
		},{
			name : 'delstate',
			mapping : 'delstate'
		},{
			name : 'idnumber',
			mapping : 'personelinfo.idnumber'
		},{
			name : 'name',
			mapping : 'personelinfo.name'
		},{
			name : 'positionnameid',
			mapping : 'positionnameinfo.nameid'
		},{
			name : 'positionname',
			mapping : 'positionnameinfo.name'
		},{
			name : 'appointmentdate',
			mapping : 'appointmentdate'
		}],
		autoLoad : false
	});
	showHistoryStore.load();
		
	//个人学历信息展示
	showHistoryGrid = new Ext.grid.GridPanel({
		store : showHistoryStore,
		columns : [ rowNum, {
//			header : '身份证号',
//			dataIndex : 'idnumber',
//			width : 100
//		},{
//			header : '人员名称',
//			dataIndex : 'name',
//			width : 100,
//			renderer : function(value, meta, record) {
//				var tempString = '<div><a href=javascript:updata()><font color="red">'+ value +'</font></a></div>';
//				return tempString;
//			}
//		},{
			header : '职称名称',
			dataIndex : 'positionname',
			width : 100,
			renderer : function(value, meta, record) {
				var tempString = '<div><a href=javascript:updata()><font color="red">'+ value +'</font></a></div>';
				return tempString;
			}
		},{
			header : '聘任日期',
			dataIndex : 'appointmentdate',
			renderer : getStringTime,
			width : 100
		},{
			header : '开始时间',
			dataIndex : 'starttime',
			renderer : getStringTime,
			width : 100
		},{
			header : '结束时间',
			dataIndex : 'endtime',
			renderer : getStringTime,
			width : 100
		},{
			header : '备注',
			dataIndex : 'remark',
			width : 100
		}],
		height : 270,
		width : '100%',
		bbar : [{
			xtype : 'paging',
			pageSize : 10,
			store : showHistoryStore,
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			emptyMsg : "没有记录"
		}, new Ext.Toolbar.Fill(), {
			xtype : 'button',
			text : '关闭',
			iconCls : 'icon-close',
			handler : function() {
				showHistoryWin.hide();
			}
		}]
	});
		
		//个人学历信息展示窗口
 	showHistoryWin = new Ext.Window({
 		layout : 'form',
		width : 600,
		height : 300,
		plain : true,
		closable : false,
		items : showHistoryGrid
 	});	
 		
 	//触发函数--显示个人学历信息；
	showHistoryInfo = function(){
		_record = queryPositionInfoGrid.getSelectionModel().getSelected();
		flag = queryPositionInfoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			var showIdnumber = _record.get('idnumber');
			showHistoryWin.setTitle("[个人职称]================》姓名："+_record.get('name'));
			showHistoryStore.load({
				params : {
					flag : showIdnumber
				}
			});
			showHistoryWin.show();
		} else{
			Ext.Msg.alert('错误', '请选择一条需要修改的信息！');
		}
	}
 });