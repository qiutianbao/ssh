
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
fieldLabel : '商品管理-商品表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'commodity.idNumber',
width : '80%'
}
,{
fieldLabel : '商品编号',
id : 'select_commoditycode',
xtype : 'textfield',
name : 'commodity.commoditycode',
width : '80%'
}
,{
fieldLabel : '商品展示图片名称',
id : 'select_imagename',
xtype : 'textfield',
name : 'commodity.imagename',
width : '80%'
}
,{
fieldLabel : '商品状态，0=上架，1=下架',
id : 'select_status',
xtype : 'numberfield',
name : 'commodity.status',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'commodity.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'commodity.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'commodity.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'commodity.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品名称',
id : 'select_commodityname',
xtype : 'textfield',
name : 'commodity.commodityname',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'select_idStore',
xtype : 'numberfield',
name : 'commodity.idStore',
width : '80%'
}
,{
fieldLabel : '商品类别主键',
id : 'select_idCategory',
xtype : 'numberfield',
name : 'commodity.idCategory',
width : '80%'
}
,{
fieldLabel : '商品品牌表主键',
id : 'select_idBrand',
xtype : 'numberfield',
name : 'commodity.idBrand',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'commodity.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'commodity.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'commodity.back4',
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
querycommodityStore.proxy = new Ext.data.HttpProxy({
url : 'commodity_findInfoByConditions.action?'
+'commodity.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&commodity.commodityname='
+ Ext.getCmp('select_commodityname').getValue()
+'&commodity.commoditycode='
+ Ext.getCmp('select_commoditycode').getValue()
+'&commodity.idStore='
+ Ext.getCmp('select_idStore').getValue()
+'&commodity.imagename='
+ Ext.getCmp('select_imagename').getValue()
+'&commodity.idCategory='
+ Ext.getCmp('select_idCategory').getValue()
+'&commodity.status='
+ Ext.getCmp('select_status').getValue()
+'&commodity.idBrand='
+ Ext.getCmp('select_idBrand').getValue()
+'&commodity.ts='
+ Ext.getCmp('select_ts').getValue()
+'&commodity.dr='
+ Ext.getCmp('select_dr').getValue()
+'&commodity.back1='
+ Ext.getCmp('select_back1').getValue()
+'&commodity.back2='
+ Ext.getCmp('select_back2').getValue()
+'&commodity.back3='
+ Ext.getCmp('select_back3').getValue()
+'&commodity.back4='
+ Ext.getCmp('select_back4').getValue()
+'&commodity.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querycommodityStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});