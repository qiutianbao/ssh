
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

		         
	});