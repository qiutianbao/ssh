var querylogisticsStore;			
var querylogisticsGrid;
var addlogistics;
var addlogisticsForm;
var addlogisticsWin;
var updatelogistics;
var updatelogisticsWin;
var updatelogisticsForm;
var updatelogisticsReader;
var showQueryPanel;
 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
//	haveRight('common/logisticsView.jsp');
	 querylogisticsStore = new Ext.data.JsonStore({
		url : 'logistics_findAll.action',
		root : 'logisticsList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
		name : 'idNumber',
		mapping : 'idNumber'
		}
		,{
		name : 'corpname',
		mapping : 'corpname'
		}
		,{
		name : 'corptel',
		mapping : 'corptel'
		}
		],
		autoLoad : false
		
	});
	querylogisticsStore.load();
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querylogisticsGrid = new Ext.grid.GridPanel({
		store : querylogisticsStore,
		sm : sm,
		columns : [ sm, rowNum,{
			header : '主键',
			dataIndex : 'idNumber',
			width : 120, 
			renderer : function(value, meta, record) {
			var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
			return tempString;
		}},{
		header : '物流公司名称',
		dataIndex : 'corpname',
		width : 350 
		}
		,{
		header : '公司电话',
		dataIndex : 'corptel',
		width : 350 
		}],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addlogistics();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querylogisticsGrid, querylogisticsStore, "logistics_delete.action", "idNumber", "删除信息");
			}
		},'-',{
			text : '修改',
			iconCls:'icon-del',
			handler : function() {
				update();
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querylogisticsStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'logisticsGrid',
		items : [querylogisticsGrid]
	});
	var divHeight = document.getElementById('logisticsGrid').offsetHeight;
	var divWidth = document.getElementById('logisticsGrid').offsetWidth;
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querylogisticsGrid.setWidth(showQueryPanel.getWidth());
	querylogisticsGrid.setHeight(showQueryPanel.getHeight());
	
	addlogisticsForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 220, 
		items : [{
		layout : 'column',
		items : [
		{
		columnWidth: .5,
		layout : 'form',
		items : [
		{
			
		fieldLabel : '公司名称',
		id : 'add_corpname',
		xtype : 'textfield',
		name : 'logistics.corpname',
		width : '100%'
				
		},{
			fieldLabel : '公司电话',
			id : 'add_corptel',
			xtype : 'textfield',
			name : 'logistics.corptel',
			width : '100%'
			}]
		}]}
		],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addlogisticsForm, "logistics_addNewInfo.action", querylogisticsStore, "添加信息")
				addlogisticsWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addlogisticsWin.hide();
				addlogisticsForm.form.reset();
			}
		}]

	});

	addlogisticsWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 240,
		plain : true,
		closable : false,
		items : addlogisticsForm
	});

	addlogistics = function() {
		addlogisticsWin.show();
	};
	
	updatelogisticsReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
	name : 'logistics.idNumber',
	mapping : 'idNumber'
	}
	,{
	name : 'logistics.corpname',
	mapping : 'corpname'
	}
	,{
	name : 'logistics.corptel',
	mapping : 'corptel'
	}]);
		
	updatelogisticsForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		height : 220,
		reader : updatelogisticsReader,
		items : [{
		layout : 'column',
		items : [
		{
		columnWidth: .5,
		layout : 'form',
		items : [
		{
		fieldLabel : '档案管理-物流商管理表',
		id : 'uppdate_idNumber',
		xtype : 'hidden',
		name : 'logistics.idNumber',
		width : '100%'
		}
		,{
		fieldLabel : '公司名称',
		id : 'uppdate_corpname',
		xtype : 'textfield',
		name : 'logistics.corpname',
		width : '100%'
		},{
		fieldLabel : '公司电话',
		id : 'uppdate_corptel',
		xtype : 'textfield',
		name : 'logistics.corptel',
		width : '100%'
		}]
		}]}
		],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatelogisticsForm, "logistics_update.action", querylogisticsStore, "修改信息")
				updatelogisticsWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatelogisticsWin.hide();
				updatelogisticsForm.form.reset();
			}
		}]
	});

	updatelogisticsWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 240,
		plain : true,
		closable : false,
		items : updatelogisticsForm
	});

	update = function() {
		_record = querylogisticsGrid.getSelectionModel().getSelected();
		flag = querylogisticsGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatelogisticsWin.show();
					
			updatelogisticsForm.getForm().load({
				url : 'logistics_findById.action?logistics.idNumber='+ _record.get('idNumber'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
	};
 });
 
