
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
fieldLabel : '档案管理-积分规则主表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'integralrule.idNumber',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'integralrule.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'integralrule.back1',
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
name : 'integralrule.summary',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'integralrule.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'integralrule.back2',
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
queryintegralruleStore.proxy = new Ext.data.HttpProxy({
url : 'integralrule_findInfoByConditions.action?'
+'integralrule.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&integralrule.summary='
+ Ext.getCmp('select_summary').getValue()
+'&integralrule.ts='
+ Ext.getCmp('select_ts').getValue()
+'&integralrule.dr='
+ Ext.getCmp('select_dr').getValue()
+'&integralrule.back1='
+ Ext.getCmp('select_back1').getValue()
+'&integralrule.back2='
+ Ext.getCmp('select_back2').getValue()
});
	queryintegralruleStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});