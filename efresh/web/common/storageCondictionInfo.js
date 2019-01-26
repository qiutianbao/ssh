
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
fieldLabel : '仓储物流-入库表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'storage.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'storage.idCommodity',
width : '80%'
}
,{
fieldLabel : '入库人主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'storage.idUser',
width : '80%'
}
,{
fieldLabel : '规格',
id : 'select_specifications',
xtype : 'textfield',
name : 'storage.specifications',
width : '80%'
}
,{
fieldLabel : '重量',
id : 'select_weight',
xtype : 'numberfield',
name : 'storage.weight',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'storage.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'storage.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'storage.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'storage.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '入库时间',
id : 'select_storagetime',
xtype : 'datetimefield',
name : 'storage.storagetime',
anchor : '95%'
}
,{
fieldLabel : '店铺主键',
id : 'select_idStore',
xtype : 'numberfield',
name : 'storage.idStore',
width : '80%'
}
,{
fieldLabel : '入库数量',
id : 'select_storagenum',
xtype : 'numberfield',
name : 'storage.storagenum',
width : '80%'
}
,{
fieldLabel : '单价',
id : 'select_price',
xtype : 'numberfield',
name : 'storage.price',
width : '80%'
}
,{
fieldLabel : '单位',
id : 'select_company',
xtype : 'textfield',
name : 'storage.company',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'storage.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'storage.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'storage.back4',
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
querystorageStore.proxy = new Ext.data.HttpProxy({
url : 'storage_findInfoByConditions.action?'
+'storage.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&storage.storagetime='
+ Ext.getCmp('select_storagetime').getValue()
+'&storage.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&storage.idStore='
+ Ext.getCmp('select_idStore').getValue()
+'&storage.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&storage.storagenum='
+ Ext.getCmp('select_storagenum').getValue()
+'&storage.specifications='
+ Ext.getCmp('select_specifications').getValue()
+'&storage.price='
+ Ext.getCmp('select_price').getValue()
+'&storage.weight='
+ Ext.getCmp('select_weight').getValue()
+'&storage.company='
+ Ext.getCmp('select_company').getValue()
+'&storage.ts='
+ Ext.getCmp('select_ts').getValue()
+'&storage.dr='
+ Ext.getCmp('select_dr').getValue()
+'&storage.back1='
+ Ext.getCmp('select_back1').getValue()
+'&storage.back2='
+ Ext.getCmp('select_back2').getValue()
+'&storage.back3='
+ Ext.getCmp('select_back3').getValue()
+'&storage.back4='
+ Ext.getCmp('select_back4').getValue()
+'&storage.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querystorageStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});