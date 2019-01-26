
var querystore_productStore;			
var querystore_productGrid;
var addstore_product;
var addstore_productForm;
var addstore_productWin;
var updatestore_product;
var updatestore_productWin;
var updatestore_productForm;
var updatestore_productReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/store_productView.jsp');
	 querystore_productStore = new Ext.data.JsonStore({
		url : 'store_product_findAll.action',
		root : 'store_productList',
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
name : 'idStoreStyle',
mapping : 'idStoreStyle'
}
,{
name : 'productname',
mapping : 'productname'
}
,{
name : 'imgname',
mapping : 'imgname'
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
fieldLabel : '产地主营产品表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'store_product.idNumber',
width : '80%'
}
,{
fieldLabel : '主营产品名称',
id : 'select_productname',
xtype : 'textfield',
name : 'store_product.productname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'store_product.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'store_product.back1',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地风采表主键',
id : 'select_idStoreStyle',
xtype : 'numberfield',
name : 'store_product.idStoreStyle',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'select_imgname',
xtype : 'textfield',
name : 'store_product.imgname',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'store_product.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'store_product.back2',
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
querystore_productStore.proxy = new Ext.data.HttpProxy({
url : 'store_product_findInfoByConditions.action?'
+'store_product.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&store_product.idStoreStyle='
+ Ext.getCmp('select_idStoreStyle').getValue()
+'&store_product.productname='
+ Ext.getCmp('select_productname').getValue()
+'&store_product.imgname='
+ Ext.getCmp('select_imgname').getValue()
+'&store_product.ts='
+ Ext.getCmp('select_ts').getValue()
+'&store_product.dr='
+ Ext.getCmp('select_dr').getValue()
+'&store_product.back1='
+ Ext.getCmp('select_back1').getValue()
+'&store_product.back2='
+ Ext.getCmp('select_back2').getValue()
});
	querystore_productStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querystore_productStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querystore_productGrid = new Ext.grid.GridPanel({
		store : querystore_productStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '产地主营产品表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '产地风采表主键',
dataIndex : 'idStoreStyle',
width : 120 
}
,{
header : '主营产品名称',
dataIndex : 'productname',
width : 120 
}
,{
header : '图片名称',
dataIndex : 'imgname',
width : 120 
}
,{
header : '时间戳',
dataIndex : 'ts',
width : 120 
}
,{
header : '删除标志',
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
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addstore_product();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querystore_productGrid, querystore_productStore, "store_product_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querystore_productStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'store_productGrid',
		items : [selectUnitForm, querystore_productGrid]
	});
	var divHeight = document.getElementById('store_productGrid').offsetHeight;
	var divWidth = document.getElementById('store_productGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querystore_productGrid.setWidth(showQueryPanel.getWidth());
	querystore_productGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addstore_productForm = new Ext.FormPanel({
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
fieldLabel : '产地主营产品表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'store_product.idNumber',
width : '80%'
}
,{
fieldLabel : '主营产品名称',
id : 'add_productname',
xtype : 'textfield',
name : 'store_product.productname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'store_product.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'store_product.back1',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地风采表主键',
id : 'add_idStoreStyle',
xtype : 'numberfield',
name : 'store_product.idStoreStyle',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'add_imgname',
xtype : 'textfield',
name : 'store_product.imgname',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'add_dr',
xtype : 'numberfield',
name : 'store_product.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'store_product.back2',
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
				check(addstore_productForm, "store_product_addNewInfo.action", querystore_productStore, "添加信息")
				addstore_productWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addstore_productWin.hide();
				addstore_productForm.form.reset();
			}
		}]

	});

	addstore_productWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addstore_productForm
	});

	addstore_product = function() {
		addstore_productWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatestore_productReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'store_product.idNumber',
mapping : 'idNumber'
}
,{
name : 'store_product.idStoreStyle',
mapping : 'idStoreStyle'
}
,{
name : 'store_product.productname',
mapping : 'productname'
}
,{
name : 'store_product.imgname',
mapping : 'imgname'
}
,{
name : 'store_product.ts',
mapping : 'ts'
}
,{
name : 'store_product.dr',
mapping : 'dr'
}
,{
name : 'store_product.back1',
mapping : 'back1'
}
,{
name : 'store_product.back2',
mapping : 'back2'
}
]
	);
		
	updatestore_productForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatestore_productReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地主营产品表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'store_product.idNumber',
width : '80%'
}
,{
fieldLabel : '主营产品名称',
id : 'uppdate_productname',
xtype : 'textfield',
name : 'store_product.productname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'store_product.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'store_product.back1',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地风采表主键',
id : 'uppdate_idStoreStyle',
xtype : 'numberfield',
name : 'store_product.idStoreStyle',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'uppdate_imgname',
xtype : 'textfield',
name : 'store_product.imgname',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'store_product.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'store_product.back2',
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
				check(updatestore_productForm, "store_product_update.action", querystore_productStore, "修改信息")
				updatestore_productWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatestore_productWin.hide();
				updatestore_productForm.form.reset();
			}
		}]
	});

	updatestore_productWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatestore_productForm
	});

	update = function() {
		_record = querystore_productGrid.getSelectionModel().getSelected();
		flag = querystore_productGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatestore_productWin.show();
					
			updatestore_productForm.getForm().load({
				url : 'store_product_findById.action?store_product.idNumber='+ _record.get('idNumber'),
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
 
