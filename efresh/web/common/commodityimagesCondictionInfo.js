
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
fieldLabel : '商品管理-商品图片表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'commodityimages.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'commodityimages.idCommodity',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'commodityimages.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'commodityimages.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'commodityimages.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '图片名称',
id : 'select_imagename',
xtype : 'textfield',
name : 'commodityimages.imagename',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'commodityimages.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'commodityimages.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'commodityimages.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'commodityimages.back5',
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
querycommodityimagesStore.proxy = new Ext.data.HttpProxy({
url : 'commodityimages_findInfoByConditions.action?'
+'commodityimages.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&commodityimages.imagename='
+ Ext.getCmp('select_imagename').getValue()
+'&commodityimages.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&commodityimages.ts='
+ Ext.getCmp('select_ts').getValue()
+'&commodityimages.dr='
+ Ext.getCmp('select_dr').getValue()
+'&commodityimages.back1='
+ Ext.getCmp('select_back1').getValue()
+'&commodityimages.back2='
+ Ext.getCmp('select_back2').getValue()
+'&commodityimages.back3='
+ Ext.getCmp('select_back3').getValue()
+'&commodityimages.back4='
+ Ext.getCmp('select_back4').getValue()
+'&commodityimages.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querycommodityimagesStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});