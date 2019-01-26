
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
fieldLabel : '店铺品牌表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'storebrand.idNumber',
width : '80%'
}
,{
fieldLabel : '店铺表主键',
id : 'select_idStore',
xtype : 'numberfield',
name : 'storebrand.idStore',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'storebrand.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'storebrand.back2',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '品牌名称',
id : 'select_brandname',
xtype : 'textfield',
name : 'storebrand.brandname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'storebrand.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'storebrand.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'numberfield',
name : 'storebrand.back3',
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
querystorebrandStore.proxy = new Ext.data.HttpProxy({
url : 'storebrand_findInfoByConditions.action?'
+'storebrand.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&storebrand.brandname='
+ Ext.getCmp('select_brandname').getValue()
+'&storebrand.idStore='
+ Ext.getCmp('select_idStore').getValue()
+'&storebrand.ts='
+ Ext.getCmp('select_ts').getValue()
+'&storebrand.dr='
+ Ext.getCmp('select_dr').getValue()
+'&storebrand.back1='
+ Ext.getCmp('select_back1').getValue()
+'&storebrand.back2='
+ Ext.getCmp('select_back2').getValue()
+'&storebrand.back3='
+ Ext.getCmp('select_back3').getValue()
});
	querystorebrandStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});