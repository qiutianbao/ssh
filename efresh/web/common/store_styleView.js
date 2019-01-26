
var querystore_styleStore;			
var querystore_styleGrid;
var addstore_style;
var addstore_styleForm;
var addstore_styleWin;
var updatestore_style;
var updatestore_styleWin;
var updatestore_styleForm;
var updatestore_styleReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/store_styleView.jsp');
	 querystore_styleStore = new Ext.data.JsonStore({
		url : 'store_style_findAll.action',
		root : 'store_styleList',
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
name : 'idStore',
mapping : 'idStore'
}
,{
name : 'frofile',
mapping : 'frofile'
}
,{
name : 'ts',
mapping : 'ts'
}
,{
name : 'dr',
mapping : 'dr'
}
,{
name : 'back1',
mapping : 'back1'
}
,{
name : 'back2',
mapping : 'back2'
}
,{
name : 'back3',
mapping : 'back3'
}
,{
name : 'back4',
mapping : 'back4'
}
,{
name : 'back5',
mapping : 'back5'
}
],
		autoLoad : false
		
	});
	
	
	
	
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地风采表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'store_style.idNumber',
width : '80%'
}
,{
fieldLabel : '简介',
id : 'select_frofile',
xtype : 'textfield',
name : 'store_style.frofile',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'store_style.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'store_style.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'store_style.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '店铺表主键',
id : 'select_idStore',
xtype : 'numberfield',
name : 'store_style.idStore',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'store_style.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'store_style.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'store_style.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'store_style.back5',
width : '80%'
}
,{
layout : 'column',
items : [{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '重置',
width : 100,
iconCls : 'icon-reset',
handler : function() {
selectUnitForm.form.reset();
}}]
},{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '查询',
width : 100,
iconCls : 'icon-select',
handler : function() {
querystore_styleStore.proxy = new Ext.data.HttpProxy({
url : 'store_style_findInfoByConditions.action?'
+'store_style.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&store_style.idStore='
+ Ext.getCmp('select_idStore').getValue()
+'&store_style.frofile='
+ Ext.getCmp('select_frofile').getValue()
+'&store_style.ts='
+ Ext.getCmp('select_ts').getValue()
+'&store_style.dr='
+ Ext.getCmp('select_dr').getValue()
+'&store_style.back1='
+ Ext.getCmp('select_back1').getValue()
+'&store_style.back2='
+ Ext.getCmp('select_back2').getValue()
+'&store_style.back3='
+ Ext.getCmp('select_back3').getValue()
+'&store_style.back4='
+ Ext.getCmp('select_back4').getValue()
+'&store_style.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querystore_styleStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querystore_styleStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querystore_styleGrid = new Ext.grid.GridPanel({
		store : querystore_styleStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '产地风采表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '店铺表主键',
dataIndex : 'idStore',
width : 120 
}
,{
header : '简介',
dataIndex : 'frofile',
width : 120 
}
,{
header : '时间戳',
dataIndex : 'ts',
width : 120 
}
,{
header : '删除标识',
dataIndex : 'dr',
width : 120 
}
,{
header : '预留字段1',
dataIndex : 'back1',
width : 120 
}
,{
header : '预留字段2',
dataIndex : 'back2',
width : 120 
}
,{
header : '预留字段3',
dataIndex : 'back3',
width : 120 
}
,{
header : '预留字段4',
dataIndex : 'back4',
width : 120 
}
,{
header : '预留字段5',
dataIndex : 'back5',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addstore_style();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querystore_styleGrid, querystore_styleStore, "store_style_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querystore_styleStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'store_styleGrid',
		items : [selectUnitForm, querystore_styleGrid]
	});
	var divHeight = document.getElementById('store_styleGrid').offsetHeight;
	var divWidth = document.getElementById('store_styleGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querystore_styleGrid.setWidth(showQueryPanel.getWidth());
	querystore_styleGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addstore_styleForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 320, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地风采表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'store_style.idNumber',
width : '80%'
}
,{
fieldLabel : '简介',
id : 'add_frofile',
xtype : 'textfield',
name : 'store_style.frofile',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'store_style.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'store_style.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'store_style.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '店铺表主键',
id : 'add_idStore',
xtype : 'numberfield',
name : 'store_style.idStore',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'store_style.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'store_style.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'store_style.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'store_style.back5',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addstore_styleForm, "store_style_addNewInfo.action", querystore_styleStore, "添加信息")
				addstore_styleWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addstore_styleWin.hide();
				addstore_styleForm.form.reset();
			}
		}]

	});

	addstore_styleWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addstore_styleForm
	});

	addstore_style = function() {
		addstore_styleWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatestore_styleReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'store_style.idNumber',
mapping : 'idNumber'
}
,{
name : 'store_style.idStore',
mapping : 'idStore'
}
,{
name : 'store_style.frofile',
mapping : 'frofile'
}
,{
name : 'store_style.ts',
mapping : 'ts'
}
,{
name : 'store_style.dr',
mapping : 'dr'
}
,{
name : 'store_style.back1',
mapping : 'back1'
}
,{
name : 'store_style.back2',
mapping : 'back2'
}
,{
name : 'store_style.back3',
mapping : 'back3'
}
,{
name : 'store_style.back4',
mapping : 'back4'
}
,{
name : 'store_style.back5',
mapping : 'back5'
}
]
	);
		
	updatestore_styleForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatestore_styleReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地风采表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'store_style.idNumber',
width : '80%'
}
,{
fieldLabel : '简介',
id : 'uppdate_frofile',
xtype : 'textfield',
name : 'store_style.frofile',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'store_style.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'store_style.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'store_style.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '店铺表主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'store_style.idStore',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'store_style.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'store_style.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'store_style.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'store_style.back5',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatestore_styleForm, "store_style_update.action", querystore_styleStore, "修改信息")
				updatestore_styleWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatestore_styleWin.hide();
				updatestore_styleForm.form.reset();
			}
		}]
	});

	updatestore_styleWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatestore_styleForm
	});

	update = function() {
		_record = querystore_styleGrid.getSelectionModel().getSelected();
		flag = querystore_styleGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatestore_styleWin.show();
					
			updatestore_styleForm.getForm().load({
				url : 'store_style_findById.action?store_style.idNumber='+ _record.get('idNumber'),
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






	
	// 加载页面后默认焦点
	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
