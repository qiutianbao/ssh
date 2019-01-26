
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
fieldLabel : '商品管理-商品分类表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'category.idNumber',
width : '80%'
}
,{
fieldLabel : '分类名称',
id : 'select_categoryname',
xtype : 'textfield',
name : 'category.categoryname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'category.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'category.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'category.back3',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '上级分类编码',
id : 'select_superiorcode',
xtype : 'textfield',
name : 'category.superiorcode',
width : '80%'
}
,{
fieldLabel : '自身分类编码',
id : 'select_seflcode',
xtype : 'textfield',
name : 'category.seflcode',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'category.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'category.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'category.back4',
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
querycategoryStore.proxy = new Ext.data.HttpProxy({
url : 'category_findInfoByConditions.action?'
+'category.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&category.superiorcode='
+ Ext.getCmp('select_superiorcode').getValue()
+'&category.categoryname='
+ Ext.getCmp('select_categoryname').getValue()
+'&category.seflcode='
+ Ext.getCmp('select_seflcode').getValue()
+'&category.ts='
+ Ext.getCmp('select_ts').getValue()
+'&category.dr='
+ Ext.getCmp('select_dr').getValue()
+'&category.back1='
+ Ext.getCmp('select_back1').getValue()
+'&category.back2='
+ Ext.getCmp('select_back2').getValue()
+'&category.back3='
+ Ext.getCmp('select_back3').getValue()
+'&category.back4='
+ Ext.getCmp('select_back4').getValue()
});
	querycategoryStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});