
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
fieldLabel : '产地风采图片表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'store_images.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'select_imagename',
xtype : 'textfield',
name : 'store_images.imagename',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'store_images.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'store_images.back2',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '风采表主键',
id : 'select_idStoreStyle',
xtype : 'numberfield',
name : 'store_images.idStoreStyle',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'store_images.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'store_images.back1',
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
querystore_imagesStore.proxy = new Ext.data.HttpProxy({
url : 'store_images_findInfoByConditions.action?'
+'store_images.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&store_images.idStoreStyle='
+ Ext.getCmp('select_idStoreStyle').getValue()
+'&store_images.imagename='
+ Ext.getCmp('select_imagename').getValue()
+'&store_images.ts='
+ Ext.getCmp('select_ts').getValue()
+'&store_images.dr='
+ Ext.getCmp('select_dr').getValue()
+'&store_images.back1='
+ Ext.getCmp('select_back1').getValue()
+'&store_images.back2='
+ Ext.getCmp('select_back2').getValue()
});
	querystore_imagesStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});