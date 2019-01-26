var queryPositionNameInfoStore;
var queryPositionNameInfoGrid;
var addPositionNameInfo;
var addPositionNameInfoForm;
var addPositionNameInfoWin;
var updatePositionNameInfo;
var updatePositionNameInfoWin;
var updatePositionNameInfoForm;
var updatePositionNameInfoReader;
var showQueryPanel;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('Person/ShowAllBaseInfoView.jsp');
	
	queryPositionNameInfoStore = new Ext.data.JsonStore({
		url : 'positionNameInfo_findAll.action',
		root : 'positionNameInfoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 20
		},
		fields : [{
			name : 'nameid',
			mapping : 'nameid'
		},{
			name : 'name',
			mapping : 'name'
		}],
		autoLoad : false
		
	});
	
	queryPositionNameInfoStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	queryPositionNameInfoGrid = new Ext.grid.GridPanel({
//		renderTo : 'PositionNameInfoGrid',
		store : queryPositionNameInfoStore,
		sm : sm,
		columns : [ sm, rowNum, {
			header : '职称名称',
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
			text : '添加职称',
			iconCls : 'icon-add',
			handler : function() {
				addPositionNameInfo();
			}
		}, '-', {
			text : '删除',
			tooltip : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryPositionNameInfoGrid, queryPositionNameInfoStore, "positionNameInfo_delete.action", "nameid", "删除职称信息");
				}
		}],
		bbar : [{
			xtype : 'paging',
			pageSize : 15,
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			store : queryPositionNameInfoStore,
//			displayInfo : true,
//			displayMsg : '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'PositionNameInfoGrid',
		items : [queryPositionNameInfoGrid]
	});
	var divHeight = document.getElementById('PositionNameInfoGrid').offsetHeight;
	var divWidth = document.getElementById('PositionNameInfoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryPositionNameInfoGrid.setWidth(showQueryPanel.getWidth());
	queryPositionNameInfoGrid.setHeight(showQueryPanel.getHeight());
	
	
	addPositionNameInfoForm = new Ext.FormPanel({
		title :  '添加新职称',
		frame : true,
		waitMsgTarget : true,
		width : 285,
		height : 90, 
		items : [{
			name : 'positionNameInfo.name',
			xtype : 'field',
			allowBlank : false,
			fieldLabel : '职称名称*'
		}],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addPositionNameInfoForm, "positionNameInfo_addNewInfo.action", queryPositionNameInfoStore, "新的职称信息")
				addPositionNameInfoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addPositionNameInfoWin.hide();
				addPositionNameInfoForm.form.reset();
			}
		}]

	});

	addPositionNameInfoWin = new Ext.Window({
		layout : 'form',
		width : 300,
		height : 100,
		plain : true,
		closable : false,
		items : addPositionNameInfoForm
	});

	addPositionNameInfo = function() {
		addPositionNameInfoWin.show();
	};
	
	updatePositionNameInfoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [{
		name : 'positionNameInfo.nameid',
		mapping : 'nameid'
	},{
		name : 'positionNameInfo.name',
		mapping : 'name'
	},{
		name : 'positionNameInfo.delstate',
		mapping : 'delstate'
	}]
	);
		
	updatePositionNameInfoForm = new Ext.FormPanel({
		title : '请输入您要修改的职称名称',
		frame : true,
		waitMsgTarget : true,
		reader : updatePositionNameInfoReader,
		items : [{
			xtype : 'hidden',
			fieldLabel : '类型编号',
			name : 'positionNameInfo.nameid'
		},{
			xtype : 'field',
			fieldLabel : '类型名称',
			name : 'positionNameInfo.name'
		},{
			xtype : 'hidden',
			fieldLabel : '是否删除',
			name : 'positionNameInfo.delstate'
		}],
		buttons : [{
			text : '修改',
			disabled : false,
			iconCls:'icon-save',
			handler : function() {
				check(updatePositionNameInfoForm, "positionNameInfo_update.action", queryPositionNameInfoStore, "修改该职称信息")
				updatePositionNameInfoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatePositionNameInfoWin.hide();
				updatePositionNameInfoForm.form.reset();
			}
		}]
	});

	updatePositionNameInfoWin = new Ext.Window({
		layout : 'form',
		width : 300,
		height : 100,
		plain : true,
		closable : false,
		items : updatePositionNameInfoForm
	});

	updata = function() {
		_record = queryPositionNameInfoGrid.getSelectionModel().getSelected();
		flag = queryPositionNameInfoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatePositionNameInfoWin.show();
					
			updatePositionNameInfoForm.getForm().load({
				url : 'positionNameInfo_findById.action?positionNameInfo.nameid='+ _record.get('nameid'),
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
 

