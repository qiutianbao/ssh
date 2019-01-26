var queryApplicaReasonStore;
var queryApplicaReasonGrid;
var addApplicaReason;
var addApplicaReasonForm;
var addApplicaReasonWin;
var updateApplicaReason;
var updateApplicaReasonWin;
var updateApplicaReasonForm;
var updateApplicaReasonReader;
var showQueryPanel;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	queryApplicaReasonStore = new Ext.data.JsonStore({
		url : 'applicaReason_findAll.action',
		root : 'applicaReasonList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 15
		},
		fields : [{
			name : 'reasonid',
			mapping : 'reasonid'
		},{
			name : 'name',
			mapping : 'name'
		}],
		autoLoad : false
		
	});
	
	queryApplicaReasonStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	queryApplicaReasonGrid = new Ext.grid.GridPanel({
		renderTo : 'ApplicaReasonGrid',
		store : queryApplicaReasonStore,
		sm : sm,
		columns : [ sm, rowNum, {
			header : '原因名称',
			dataIndex : 'name',
			width : 100,
			renderer : function(value, meta, record) {
				var tempString = '<div><a href=javascript:updata()><font color="red">'+ value +'</font></a></div>';
				return tempString;
			}
		}],
		width : 300,
		height : 100,
		tbar : [{
			text : ' 新建 ',
			iconCls : 'icon-add',
			handler : function() {
				addApplicaReason();
			}
		}, '-', {
			text : '删除',
			tooltip : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryApplicaReasonGrid, queryApplicaReasonStore, "applicaReason_delete.action", "reasonid", "删除该请假原因");
			}
		}],
		bbar : [{
			xtype : 'paging',
			pageSize : 15,
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			store : queryApplicaReasonStore,
//			displayInfo : true,
//			displayMsg : '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'ApplicaReasonGrid',
		items : [queryApplicaReasonGrid]
	});
	var divHeight = document.getElementById('ApplicaReasonGrid').offsetHeight;
	var divWidth = document.getElementById('ApplicaReasonGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryApplicaReasonGrid.setWidth(showQueryPanel.getWidth());
	queryApplicaReasonGrid.setHeight(showQueryPanel.getHeight());
	
	
	addApplicaReasonForm = new Ext.FormPanel({
		title :  '添加新的请假类型',
		frame : true,
		waitMsgTarget : true,
		width : 285,
		height : 90, 
		items : [{
			name : 'applicaReason.name',
			xtype : 'field',
			allowBlank : false,
			fieldLabel : '类型名称*'
		}],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addApplicaReasonForm, "applicaReason_addNewInfo.action", queryApplicaReasonStore, "添加新的请假原因")
				addApplicaReasonWin.hide();	
			}
		}, {
			text : '取消',
			handler : function() {
				addApplicaReasonWin.hide();
				addApplicaReasonForm.form.reset();
			}
		}]

	});

	addApplicaReasonWin = new Ext.Window({
		layout : 'form',
		width : 300,
		height : 110,
		plain : true,
		closable : false,
		items : addApplicaReasonForm
	});

	addApplicaReason = function() {
		addApplicaReasonWin.show();
	};
	
	updateApplicaReasonReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [{
		name : 'applicaReason.reasonid',
		mapping : 'reasonid'
	},{
		name : 'applicaReason.name',
		mapping : 'name'
	},{
		name : 'applicaReason.delstate',
		mapping : 'delstate'
	}]
	);
		
	updateApplicaReasonForm = new Ext.FormPanel({
		title : '请输入您要修改的类型名称',
		frame : true,
		waitMsgTarget : true,
		reader : updateApplicaReasonReader,
		items : [{
			xtype : 'hidden',
			fieldLabel : '类型编号',
			name : 'applicaReason.reasonid'
		},{
			xtype : 'field',
			fieldLabel : '类型名称',
			name : 'applicaReason.name'
		},{
			xtype : 'hidden',
			fieldLabel : '是否删除',
			name : 'applicaReason.delstate'
		}],
		buttons : [{
			text : '修改',
			disabled : false,
			iconCls : 'icon-save',
			handler : function() {
				check(updateApplicaReasonForm, "applicaReason_update.action", queryApplicaReasonStore, "修改该请假类型")
				updateApplicaReasonWin.hide();
			}
		}, {
			text : '取消',
			handler : function() {
				updateApplicaReasonWin.hide();
				updateApplicaReasonForm.form.reset();
				}
		}]
	});

	updateApplicaReasonWin = new Ext.Window({
		layout : 'form',
		width : 300,
		height : 110,
		plain : true,
		closable : false,
		items : updateApplicaReasonForm
	});

	updata = function() {
		_record = queryApplicaReasonGrid.getSelectionModel().getSelected();
		flag = queryApplicaReasonGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateApplicaReasonWin.show();
					
			updateApplicaReasonForm.getForm().load({
				url : 'applicaReason_findById.action?applicaReason.reasonid='+ _record.get('reasonid'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('错误', '请选择一条需要修改的信息！');
	};
 });
 

