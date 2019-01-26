
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
name : 'tj_parameter.idNumber',
width : '80%'
}
,{
fieldLabel : '参数说明',
id : 'select_PARAMETERMEMO',
xtype : 'textfield',
name : 'tj_parameter.PARAMETERMEMO',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '参数标识',
id : 'select_PARAMETERID',
xtype : 'textfield',
name : 'tj_parameter.PARAMETERID',
width : '80%'
}
,{
fieldLabel : '参数类型',
id : 'select_PARAMETYPE',
xtype : 'textfield',
name : 'tj_parameter.PARAMETYPE',
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
querytj_parameterStore.proxy = new Ext.data.HttpProxy({
url : 'tj_parameter_findInfoByConditions.action?'
+'tj_parameter.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&tj_parameter.PARAMETERID='
+ Ext.getCmp('select_PARAMETERID').getValue()
+'&tj_parameter.PARAMETERMEMO='
+ Ext.getCmp('select_PARAMETERMEMO').getValue()
+'&tj_parameter.PARAMETYPE='
+ Ext.getCmp('select_PARAMETYPE').getValue()
});
	querytj_parameterStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});