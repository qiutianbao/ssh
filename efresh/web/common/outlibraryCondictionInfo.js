
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
fieldLabel : '仓储物流-出库表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'outlibrary.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'outlibrary.idCommodity',
width : '80%'
}
,{
fieldLabel : '出库人主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'outlibrary.idUser',
width : '80%'
}
,{
fieldLabel : '规格',
id : 'select_specifications',
xtype : 'textfield',
name : 'outlibrary.specifications',
width : '80%'
}
,{
fieldLabel : '重量',
id : 'select_weight',
xtype : 'numberfield',
name : 'outlibrary.weight',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'outlibrary.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'outlibrary.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'outlibrary.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'outlibrary.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '出库时间',
id : 'select_outlibtime',
xtype : 'datetimefield',
name : 'outlibrary.outlibtime',
anchor : '95%'
}
,{
fieldLabel : '店铺主键',
id : 'select_idStore',
xtype : 'numberfield',
name : 'outlibrary.idStore',
width : '80%'
}
,{
fieldLabel : '出库数量',
id : 'select_outlibnumber',
xtype : 'numberfield',
name : 'outlibrary.outlibnumber',
width : '80%'
}
,{
fieldLabel : '单价',
id : 'select_price',
xtype : 'numberfield',
name : 'outlibrary.price',
width : '80%'
}
,{
fieldLabel : '单位',
id : 'select_company',
xtype : 'textfield',
name : 'outlibrary.company',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'outlibrary.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'outlibrary.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'outlibrary.back4',
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
queryoutlibraryStore.proxy = new Ext.data.HttpProxy({
url : 'outlibrary_findInfoByConditions.action?'
+'outlibrary.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&outlibrary.outlibtime='
+ Ext.getCmp('select_outlibtime').getValue()
+'&outlibrary.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&outlibrary.idStore='
+ Ext.getCmp('select_idStore').getValue()
+'&outlibrary.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&outlibrary.outlibnumber='
+ Ext.getCmp('select_outlibnumber').getValue()
+'&outlibrary.specifications='
+ Ext.getCmp('select_specifications').getValue()
+'&outlibrary.price='
+ Ext.getCmp('select_price').getValue()
+'&outlibrary.weight='
+ Ext.getCmp('select_weight').getValue()
+'&outlibrary.company='
+ Ext.getCmp('select_company').getValue()
+'&outlibrary.ts='
+ Ext.getCmp('select_ts').getValue()
+'&outlibrary.dr='
+ Ext.getCmp('select_dr').getValue()
+'&outlibrary.back1='
+ Ext.getCmp('select_back1').getValue()
+'&outlibrary.back2='
+ Ext.getCmp('select_back2').getValue()
+'&outlibrary.back3='
+ Ext.getCmp('select_back3').getValue()
+'&outlibrary.back4='
+ Ext.getCmp('select_back4').getValue()
+'&outlibrary.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryoutlibraryStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});