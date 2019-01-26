
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
fieldLabel : '主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'rechargerules.idNumber',
width : '80%'
}
,{
fieldLabel : '小标题',
id : 'select_title',
xtype : 'textfield',
name : 'rechargerules.title',
width : '80%'
}
,{
fieldLabel : '规则类型',
id : 'select_ruleType',
xtype : 'textfield',
name : 'rechargerules.ruleType',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'rechargerules.ts',
width : '80%'
}
,{
fieldLabel : '备用字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'rechargerules.back1',
width : '80%'
}
,{
fieldLabel : '备用字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'rechargerules.back3',
width : '80%'
}
,{
fieldLabel : '备用字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'rechargerules.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '概述',
id : 'select_summary',
xtype : 'textfield',
name : 'rechargerules.summary',
width : '80%'
}
,{
fieldLabel : '内容',
id : 'select_content',
xtype : 'textfield',
name : 'rechargerules.content',
width : '80%'
}
,{
fieldLabel : '状态',
id : 'select_stats',
xtype : 'textfield',
name : 'rechargerules.stats',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'rechargerules.dr',
width : '80%'
}
,{
fieldLabel : '备用字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'rechargerules.back2',
width : '80%'
}
,{
fieldLabel : '备用字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'rechargerules.back4',
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
queryrechargerulesStore.proxy = new Ext.data.HttpProxy({
url : 'rechargerules_findInfoByConditions.action?'
+'rechargerules.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&rechargerules.summary='
+ Ext.getCmp('select_summary').getValue()
+'&rechargerules.title='
+ Ext.getCmp('select_title').getValue()
+'&rechargerules.content='
+ Ext.getCmp('select_content').getValue()
+'&rechargerules.ruleType='
+ Ext.getCmp('select_ruleType').getValue()
+'&rechargerules.stats='
+ Ext.getCmp('select_stats').getValue()
+'&rechargerules.ts='
+ Ext.getCmp('select_ts').getValue()
+'&rechargerules.dr='
+ Ext.getCmp('select_dr').getValue()
+'&rechargerules.back1='
+ Ext.getCmp('select_back1').getValue()
+'&rechargerules.back2='
+ Ext.getCmp('select_back2').getValue()
+'&rechargerules.back3='
+ Ext.getCmp('select_back3').getValue()
+'&rechargerules.back4='
+ Ext.getCmp('select_back4').getValue()
+'&rechargerules.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryrechargerulesStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});