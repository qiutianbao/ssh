
var queryorderdetailedStore;			
var queryorderdetailedGrid;
var addorderdetailed;
var addorderdetailedForm;
var addorderdetailedWin;
var updateorderdetailed;
var updateorderdetailedWin;
var updateorderdetailedForm;
var updateorderdetailedReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/orderdetailedView.jsp');
	 queryorderdetailedStore = new Ext.data.JsonStore({
		url : 'orderdetailed_findAll.action',
		root : 'orderdetailedList',
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
name : 'idOrderNo',
mapping : 'idOrderNo'
}
,{
name : 'idCommodity',
mapping : 'idCommodity'
}
,{
name : 'buynumber',
mapping : 'buynumber'
}
,{
name : 'idLevel',
mapping : 'idLevel'
}
,{
name : 'buyprice',
mapping : 'buyprice'
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
fieldLabel : '订单管理-商品清单表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'orderdetailed.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'orderdetailed.idCommodity',
width : '80%'
}
,{
fieldLabel : '购买级别主键',
id : 'select_idLevel',
xtype : 'numberfield',
name : 'orderdetailed.idLevel',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'orderdetailed.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'orderdetailed.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'orderdetailed.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'orderdetailed.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单表主键',
id : 'select_idOrderNo',
xtype : 'numberfield',
name : 'orderdetailed.idOrderNo',
width : '80%'
}
,{
fieldLabel : '购买数量',
id : 'select_buynumber',
xtype : 'numberfield',
name : 'orderdetailed.buynumber',
width : '80%'
}
,{
fieldLabel : '商品单价',
id : 'select_buyprice',
xtype : 'numberfield',
name : 'orderdetailed.buyprice',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'orderdetailed.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'orderdetailed.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'orderdetailed.back4',
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
queryorderdetailedStore.proxy = new Ext.data.HttpProxy({
url : 'orderdetailed_findInfoByConditions.action?'
+'orderdetailed.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&orderdetailed.idOrderNo='
+ Ext.getCmp('select_idOrderNo').getValue()
+'&orderdetailed.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&orderdetailed.buynumber='
+ Ext.getCmp('select_buynumber').getValue()
+'&orderdetailed.idLevel='
+ Ext.getCmp('select_idLevel').getValue()
+'&orderdetailed.buyprice='
+ Ext.getCmp('select_buyprice').getValue()
+'&orderdetailed.ts='
+ Ext.getCmp('select_ts').getValue()
+'&orderdetailed.dr='
+ Ext.getCmp('select_dr').getValue()
+'&orderdetailed.back1='
+ Ext.getCmp('select_back1').getValue()
+'&orderdetailed.back2='
+ Ext.getCmp('select_back2').getValue()
+'&orderdetailed.back3='
+ Ext.getCmp('select_back3').getValue()
+'&orderdetailed.back4='
+ Ext.getCmp('select_back4').getValue()
+'&orderdetailed.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryorderdetailedStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryorderdetailedStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryorderdetailedGrid = new Ext.grid.GridPanel({
		store : queryorderdetailedStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '订单管理-商品清单表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '订单表主键',
dataIndex : 'idOrderNo',
width : 120 
}
,{
header : '商品主键',
dataIndex : 'idCommodity',
width : 120 
}
,{
header : '购买数量',
dataIndex : 'buynumber',
width : 120 
}
,{
header : '购买级别主键',
dataIndex : 'idLevel',
width : 120 
}
,{
header : '商品单价',
dataIndex : 'buyprice',
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
				addorderdetailed();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryorderdetailedGrid, queryorderdetailedStore, "orderdetailed_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryorderdetailedStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'orderdetailedGrid',
		items : [selectUnitForm, queryorderdetailedGrid]
	});
	var divHeight = document.getElementById('orderdetailedGrid').offsetHeight;
	var divWidth = document.getElementById('orderdetailedGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryorderdetailedGrid.setWidth(showQueryPanel.getWidth());
	queryorderdetailedGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addorderdetailedForm = new Ext.FormPanel({
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
fieldLabel : '订单管理-商品清单表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'orderdetailed.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'add_idCommodity',
xtype : 'numberfield',
name : 'orderdetailed.idCommodity',
width : '80%'
}
,{
fieldLabel : '购买级别主键',
id : 'add_idLevel',
xtype : 'numberfield',
name : 'orderdetailed.idLevel',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'orderdetailed.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'orderdetailed.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'orderdetailed.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'orderdetailed.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单表主键',
id : 'add_idOrderNo',
xtype : 'numberfield',
name : 'orderdetailed.idOrderNo',
width : '80%'
}
,{
fieldLabel : '购买数量',
id : 'add_buynumber',
xtype : 'numberfield',
name : 'orderdetailed.buynumber',
width : '80%'
}
,{
fieldLabel : '商品单价',
id : 'add_buyprice',
xtype : 'numberfield',
name : 'orderdetailed.buyprice',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'orderdetailed.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'orderdetailed.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'orderdetailed.back4',
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
				check(addorderdetailedForm, "orderdetailed_addNewInfo.action", queryorderdetailedStore, "添加信息")
				addorderdetailedWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addorderdetailedWin.hide();
				addorderdetailedForm.form.reset();
			}
		}]

	});

	addorderdetailedWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addorderdetailedForm
	});

	addorderdetailed = function() {
		addorderdetailedWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updateorderdetailedReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'orderdetailed.idNumber',
mapping : 'idNumber'
}
,{
name : 'orderdetailed.idOrderNo',
mapping : 'idOrderNo'
}
,{
name : 'orderdetailed.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'orderdetailed.buynumber',
mapping : 'buynumber'
}
,{
name : 'orderdetailed.idLevel',
mapping : 'idLevel'
}
,{
name : 'orderdetailed.buyprice',
mapping : 'buyprice'
}
,{
name : 'orderdetailed.ts',
mapping : 'ts'
}
,{
name : 'orderdetailed.dr',
mapping : 'dr'
}
,{
name : 'orderdetailed.back1',
mapping : 'back1'
}
,{
name : 'orderdetailed.back2',
mapping : 'back2'
}
,{
name : 'orderdetailed.back3',
mapping : 'back3'
}
,{
name : 'orderdetailed.back4',
mapping : 'back4'
}
,{
name : 'orderdetailed.back5',
mapping : 'back5'
}
]
	);
		
	updateorderdetailedForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateorderdetailedReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单管理-商品清单表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'orderdetailed.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'orderdetailed.idCommodity',
width : '80%'
}
,{
fieldLabel : '购买级别主键',
id : 'uppdate_idLevel',
xtype : 'numberfield',
name : 'orderdetailed.idLevel',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'orderdetailed.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'orderdetailed.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'orderdetailed.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'orderdetailed.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单表主键',
id : 'uppdate_idOrderNo',
xtype : 'numberfield',
name : 'orderdetailed.idOrderNo',
width : '80%'
}
,{
fieldLabel : '购买数量',
id : 'uppdate_buynumber',
xtype : 'numberfield',
name : 'orderdetailed.buynumber',
width : '80%'
}
,{
fieldLabel : '商品单价',
id : 'uppdate_buyprice',
xtype : 'numberfield',
name : 'orderdetailed.buyprice',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'orderdetailed.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'orderdetailed.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'orderdetailed.back4',
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
				check(updateorderdetailedForm, "orderdetailed_update.action", queryorderdetailedStore, "修改信息")
				updateorderdetailedWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateorderdetailedWin.hide();
				updateorderdetailedForm.form.reset();
			}
		}]
	});

	updateorderdetailedWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateorderdetailedForm
	});

	update = function() {
		_record = queryorderdetailedGrid.getSelectionModel().getSelected();
		flag = queryorderdetailedGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateorderdetailedWin.show();
					
			updateorderdetailedForm.getForm().load({
				url : 'orderdetailed_findById.action?orderdetailed.idNumber='+ _record.get('idNumber'),
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
 
