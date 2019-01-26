
var queryfristlevelorderStore;			
var queryfristlevelorderGrid;
var addfristlevelorder;
var addfristlevelorderForm;
var addfristlevelorderWin;
var updatefristlevelorder;
var updatefristlevelorderWin;
var updatefristlevelorderForm;
var updatefristlevelorderReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/fristlevelorderView.jsp');
	 queryfristlevelorderStore = new Ext.data.JsonStore({
		url : 'fristlevelorder_findAll.action',
		root : 'fristlevelorderList',
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
name : 'firstlevelorderNo',
mapping : 'firstlevelorderNo'
}
,{
name : 'orderstatus',
mapping : 'orderstatus'
}
,{
name : 'idStore',
mapping : 'idStore'
}
,{
name : 'idUser',
mapping : 'idUser'
}
,{
name : 'creationordertime',
mapping : 'creationordertime'
}
,{
name : 'arrivaltime',
mapping : 'arrivaltime'
}
,{
name : 'paytime',
mapping : 'paytime'
}
,{
name : 'canceltime',
mapping : 'canceltime'
}
,{
name : 'deliverytime',
mapping : 'deliverytime'
}
,{
name : 'signtime',
mapping : 'signtime'
}
,{
name : 'arrivaladdress',
mapping : 'arrivaladdress'
}
,{
name : 'arrivalpeople',
mapping : 'arrivalpeople'
}
,{
name : 'arrivalpeopletel',
mapping : 'arrivalpeopletel'
}
,{
name : 'collectionstarttime',
mapping : 'collectionstarttime'
}
,{
name : 'collectionendtime',
mapping : 'collectionendtime'
}
,{
name : 'orderprice',
mapping : 'orderprice'
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
fieldLabel : '订单管理-一级订单表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'fristlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'select_orderstatus',
xtype : 'numberfield',
name : 'fristlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'fristlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '到货时间',
id : 'select_arrivaltime',
xtype : 'datetimefield',
name : 'fristlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '取消订单时间',
id : 'select_canceltime',
xtype : 'datetimefield',
name : 'fristlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'select_signtime',
xtype : 'datetimefield',
name : 'fristlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '收货人',
id : 'select_arrivalpeople',
xtype : 'textfield',
name : 'fristlevelorder.arrivalpeople',
width : '80%'
}
,{
fieldLabel : '归集开始时间',
id : 'select_collectionstarttime',
xtype : 'datetimefield',
name : 'fristlevelorder.collectionstarttime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'select_orderprice',
xtype : 'numberfield',
name : 'fristlevelorder.orderprice',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'fristlevelorder.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'fristlevelorder.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'fristlevelorder.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单编号',
id : 'select_firstlevelorderNo',
xtype : 'textfield',
name : 'fristlevelorder.firstlevelorderNo',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'select_idStore',
xtype : 'numberfield',
name : 'fristlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'select_creationordertime',
xtype : 'datetimefield',
name : 'fristlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '支付时间',
id : 'select_paytime',
xtype : 'datetimefield',
name : 'fristlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'select_deliverytime',
xtype : 'datetimefield',
name : 'fristlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '收货地址',
id : 'select_arrivaladdress',
xtype : 'textfield',
name : 'fristlevelorder.arrivaladdress',
width : '80%'
}
,{
fieldLabel : '收货人电话',
id : 'select_arrivalpeopletel',
xtype : 'textfield',
name : 'fristlevelorder.arrivalpeopletel',
width : '80%'
}
,{
fieldLabel : '归集结束时间',
id : 'select_collectionendtime',
xtype : 'datetimefield',
name : 'fristlevelorder.collectionendtime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'fristlevelorder.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'fristlevelorder.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'fristlevelorder.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'fristlevelorder.back5',
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
queryfristlevelorderStore.proxy = new Ext.data.HttpProxy({
url : 'fristlevelorder_findInfoByConditions.action?'
+'fristlevelorder.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&fristlevelorder.firstlevelorderNo='
+ Ext.getCmp('select_firstlevelorderNo').getValue()
+'&fristlevelorder.orderstatus='
+ Ext.getCmp('select_orderstatus').getValue()
+'&fristlevelorder.idStore='
+ Ext.getCmp('select_idStore').getValue()
+'&fristlevelorder.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&fristlevelorder.creationordertime='
+ Ext.getCmp('select_creationordertime').getValue()
+'&fristlevelorder.arrivaltime='
+ Ext.getCmp('select_arrivaltime').getValue()
+'&fristlevelorder.paytime='
+ Ext.getCmp('select_paytime').getValue()
+'&fristlevelorder.canceltime='
+ Ext.getCmp('select_canceltime').getValue()
+'&fristlevelorder.deliverytime='
+ Ext.getCmp('select_deliverytime').getValue()
+'&fristlevelorder.signtime='
+ Ext.getCmp('select_signtime').getValue()
+'&fristlevelorder.arrivaladdress='
+ Ext.getCmp('select_arrivaladdress').getValue()
+'&fristlevelorder.arrivalpeople='
+ Ext.getCmp('select_arrivalpeople').getValue()
+'&fristlevelorder.arrivalpeopletel='
+ Ext.getCmp('select_arrivalpeopletel').getValue()
+'&fristlevelorder.collectionstarttime='
+ Ext.getCmp('select_collectionstarttime').getValue()
+'&fristlevelorder.collectionendtime='
+ Ext.getCmp('select_collectionendtime').getValue()
+'&fristlevelorder.orderprice='
+ Ext.getCmp('select_orderprice').getValue()
+'&fristlevelorder.ts='
+ Ext.getCmp('select_ts').getValue()
+'&fristlevelorder.dr='
+ Ext.getCmp('select_dr').getValue()
+'&fristlevelorder.back1='
+ Ext.getCmp('select_back1').getValue()
+'&fristlevelorder.back2='
+ Ext.getCmp('select_back2').getValue()
+'&fristlevelorder.back3='
+ Ext.getCmp('select_back3').getValue()
+'&fristlevelorder.back4='
+ Ext.getCmp('select_back4').getValue()
+'&fristlevelorder.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryfristlevelorderStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryfristlevelorderStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryfristlevelorderGrid = new Ext.grid.GridPanel({
		store : queryfristlevelorderStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '订单管理-一级订单表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '一级订单编号',
dataIndex : 'firstlevelorderNo',
width : 120 
}
,{
header : '订单状态',
dataIndex : 'orderstatus',
width : 120 
}
,{
header : '店铺主键',
dataIndex : 'idStore',
width : 120 
}
,{
header : '下单人主键',
dataIndex : 'idUser',
width : 120 
}
,{
header : '下单时间',
dataIndex : 'creationordertime',
width : 120 
}
,{
header : '到货时间',
dataIndex : 'arrivaltime',
width : 120 
}
,{
header : '支付时间',
dataIndex : 'paytime',
width : 120 
}
,{
header : '取消订单时间',
dataIndex : 'canceltime',
width : 120 
}
,{
header : '发货时间',
dataIndex : 'deliverytime',
width : 120 
}
,{
header : '签收时间',
dataIndex : 'signtime',
width : 120 
}
,{
header : '收货地址',
dataIndex : 'arrivaladdress',
width : 120 
}
,{
header : '收货人',
dataIndex : 'arrivalpeople',
width : 120 
}
,{
header : '收货人电话',
dataIndex : 'arrivalpeopletel',
width : 120 
}
,{
header : '归集开始时间',
dataIndex : 'collectionstarttime',
width : 120 
}
,{
header : '归集结束时间',
dataIndex : 'collectionendtime',
width : 120 
}
,{
header : '订单总价',
dataIndex : 'orderprice',
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
				addfristlevelorder();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryfristlevelorderGrid, queryfristlevelorderStore, "fristlevelorder_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryfristlevelorderStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'fristlevelorderGrid',
		items : [selectUnitForm, queryfristlevelorderGrid]
	});
	var divHeight = document.getElementById('fristlevelorderGrid').offsetHeight;
	var divWidth = document.getElementById('fristlevelorderGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryfristlevelorderGrid.setWidth(showQueryPanel.getWidth());
	queryfristlevelorderGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addfristlevelorderForm = new Ext.FormPanel({
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
fieldLabel : '订单管理-一级订单表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'fristlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'add_orderstatus',
xtype : 'numberfield',
name : 'fristlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'add_idUser',
xtype : 'numberfield',
name : 'fristlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '到货时间',
id : 'add_arrivaltime',
xtype : 'datetimefield',
name : 'fristlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '取消订单时间',
id : 'add_canceltime',
xtype : 'datetimefield',
name : 'fristlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'add_signtime',
xtype : 'datetimefield',
name : 'fristlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '收货人',
id : 'add_arrivalpeople',
xtype : 'textfield',
name : 'fristlevelorder.arrivalpeople',
width : '80%'
}
,{
fieldLabel : '归集开始时间',
id : 'add_collectionstarttime',
xtype : 'datetimefield',
name : 'fristlevelorder.collectionstarttime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'add_orderprice',
xtype : 'numberfield',
name : 'fristlevelorder.orderprice',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'fristlevelorder.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'fristlevelorder.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'fristlevelorder.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单编号',
id : 'add_firstlevelorderNo',
xtype : 'textfield',
name : 'fristlevelorder.firstlevelorderNo',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'add_idStore',
xtype : 'numberfield',
name : 'fristlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'add_creationordertime',
xtype : 'datetimefield',
name : 'fristlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '支付时间',
id : 'add_paytime',
xtype : 'datetimefield',
name : 'fristlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'add_deliverytime',
xtype : 'datetimefield',
name : 'fristlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '收货地址',
id : 'add_arrivaladdress',
xtype : 'textfield',
name : 'fristlevelorder.arrivaladdress',
width : '80%'
}
,{
fieldLabel : '收货人电话',
id : 'add_arrivalpeopletel',
xtype : 'textfield',
name : 'fristlevelorder.arrivalpeopletel',
width : '80%'
}
,{
fieldLabel : '归集结束时间',
id : 'add_collectionendtime',
xtype : 'datetimefield',
name : 'fristlevelorder.collectionendtime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'fristlevelorder.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'fristlevelorder.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'fristlevelorder.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'fristlevelorder.back5',
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
				check(addfristlevelorderForm, "fristlevelorder_addNewInfo.action", queryfristlevelorderStore, "添加信息")
				addfristlevelorderWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addfristlevelorderWin.hide();
				addfristlevelorderForm.form.reset();
			}
		}]

	});

	addfristlevelorderWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addfristlevelorderForm
	});

	addfristlevelorder = function() {
		addfristlevelorderWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatefristlevelorderReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'fristlevelorder.idNumber',
mapping : 'idNumber'
}
,{
name : 'fristlevelorder.firstlevelorderNo',
mapping : 'firstlevelorderNo'
}
,{
name : 'fristlevelorder.orderstatus',
mapping : 'orderstatus'
}
,{
name : 'fristlevelorder.idStore',
mapping : 'idStore'
}
,{
name : 'fristlevelorder.idUser',
mapping : 'idUser'
}
,{
name : 'fristlevelorder.creationordertime',
mapping : 'creationordertime'
}
,{
name : 'fristlevelorder.arrivaltime',
mapping : 'arrivaltime'
}
,{
name : 'fristlevelorder.paytime',
mapping : 'paytime'
}
,{
name : 'fristlevelorder.canceltime',
mapping : 'canceltime'
}
,{
name : 'fristlevelorder.deliverytime',
mapping : 'deliverytime'
}
,{
name : 'fristlevelorder.signtime',
mapping : 'signtime'
}
,{
name : 'fristlevelorder.arrivaladdress',
mapping : 'arrivaladdress'
}
,{
name : 'fristlevelorder.arrivalpeople',
mapping : 'arrivalpeople'
}
,{
name : 'fristlevelorder.arrivalpeopletel',
mapping : 'arrivalpeopletel'
}
,{
name : 'fristlevelorder.collectionstarttime',
mapping : 'collectionstarttime'
}
,{
name : 'fristlevelorder.collectionendtime',
mapping : 'collectionendtime'
}
,{
name : 'fristlevelorder.orderprice',
mapping : 'orderprice'
}
,{
name : 'fristlevelorder.ts',
mapping : 'ts'
}
,{
name : 'fristlevelorder.dr',
mapping : 'dr'
}
,{
name : 'fristlevelorder.back1',
mapping : 'back1'
}
,{
name : 'fristlevelorder.back2',
mapping : 'back2'
}
,{
name : 'fristlevelorder.back3',
mapping : 'back3'
}
,{
name : 'fristlevelorder.back4',
mapping : 'back4'
}
,{
name : 'fristlevelorder.back5',
mapping : 'back5'
}
]
	);
		
	updatefristlevelorderForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatefristlevelorderReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单管理-一级订单表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'fristlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'uppdate_orderstatus',
xtype : 'numberfield',
name : 'fristlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'fristlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '到货时间',
id : 'uppdate_arrivaltime',
xtype : 'datetimefield',
name : 'fristlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '取消订单时间',
id : 'uppdate_canceltime',
xtype : 'datetimefield',
name : 'fristlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'uppdate_signtime',
xtype : 'datetimefield',
name : 'fristlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '收货人',
id : 'uppdate_arrivalpeople',
xtype : 'textfield',
name : 'fristlevelorder.arrivalpeople',
width : '80%'
}
,{
fieldLabel : '归集开始时间',
id : 'uppdate_collectionstarttime',
xtype : 'datetimefield',
name : 'fristlevelorder.collectionstarttime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'uppdate_orderprice',
xtype : 'numberfield',
name : 'fristlevelorder.orderprice',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'fristlevelorder.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'fristlevelorder.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'fristlevelorder.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单编号',
id : 'uppdate_firstlevelorderNo',
xtype : 'textfield',
name : 'fristlevelorder.firstlevelorderNo',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'fristlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'uppdate_creationordertime',
xtype : 'datetimefield',
name : 'fristlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '支付时间',
id : 'uppdate_paytime',
xtype : 'datetimefield',
name : 'fristlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'uppdate_deliverytime',
xtype : 'datetimefield',
name : 'fristlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '收货地址',
id : 'uppdate_arrivaladdress',
xtype : 'textfield',
name : 'fristlevelorder.arrivaladdress',
width : '80%'
}
,{
fieldLabel : '收货人电话',
id : 'uppdate_arrivalpeopletel',
xtype : 'textfield',
name : 'fristlevelorder.arrivalpeopletel',
width : '80%'
}
,{
fieldLabel : '归集结束时间',
id : 'uppdate_collectionendtime',
xtype : 'datetimefield',
name : 'fristlevelorder.collectionendtime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'fristlevelorder.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'fristlevelorder.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'fristlevelorder.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'fristlevelorder.back5',
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
				check(updatefristlevelorderForm, "fristlevelorder_update.action", queryfristlevelorderStore, "修改信息")
				updatefristlevelorderWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatefristlevelorderWin.hide();
				updatefristlevelorderForm.form.reset();
			}
		}]
	});

	updatefristlevelorderWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatefristlevelorderForm
	});

	update = function() {
		_record = queryfristlevelorderGrid.getSelectionModel().getSelected();
		flag = queryfristlevelorderGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatefristlevelorderWin.show();
					
			updatefristlevelorderForm.getForm().load({
				url : 'fristlevelorder_findById.action?fristlevelorder.idNumber='+ _record.get('idNumber'),
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
 
