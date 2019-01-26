
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
fieldLabel : '档案管理-积分规则子表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'sub_integralrule.idNumber',
width : '80%'
}
,{
fieldLabel : '标题',
id : 'select_title',
xtype : 'textfield',
name : 'sub_integralrule.title',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'select_serial',
xtype : 'numberfield',
name : 'sub_integralrule.serial',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'sub_integralrule.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'sub_integralrule.back2',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '积分规则主表主键',
id : 'select_idIntegralrule',
xtype : 'numberfield',
name : 'sub_integralrule.idIntegralrule',
width : '80%'
}
,{
fieldLabel : '描述',
id : 'select_note',
xtype : 'textfield',
name : 'sub_integralrule.note',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'sub_integralrule.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'sub_integralrule.back1',
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
querysub_integralruleStore.proxy = new Ext.data.HttpProxy({
url : 'sub_integralrule_findInfoByConditions.action?'
+'sub_integralrule.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&sub_integralrule.idIntegralrule='
+ Ext.getCmp('select_idIntegralrule').getValue()
+'&sub_integralrule.title='
+ Ext.getCmp('select_title').getValue()
+'&sub_integralrule.note='
+ Ext.getCmp('select_note').getValue()
+'&sub_integralrule.serial='
+ Ext.getCmp('select_serial').getValue()
+'&sub_integralrule.ts='
+ Ext.getCmp('select_ts').getValue()
+'&sub_integralrule.dr='
+ Ext.getCmp('select_dr').getValue()
+'&sub_integralrule.back1='
+ Ext.getCmp('select_back1').getValue()
+'&sub_integralrule.back2='
+ Ext.getCmp('select_back2').getValue()
});
	querysub_integralruleStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});