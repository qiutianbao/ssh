
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
fieldLabel : '支行编码',
id : 'select_inst_no',
xtype : 'textfield',
name : 't_serviceCondition.inst_no',
width : '80%'
}
,{
fieldLabel : '网点编码',
id : 'select_brno',
xtype : 'textfield',
name : 't_serviceCondition.brno',
width : '80%'
}
,{
fieldLabel : '点击次数',
id : 'select_cn',
xtype : 'textfield',
name : 't_serviceCondition.cn',
width : '80%'
}
,{
fieldLabel : '结束日期',
id : 'select_endday',
xtype : 'textfield',
name : 't_serviceCondition.endday',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支行名称',
id : 'select_inst_name',
xtype : 'textfield',
name : 't_serviceCondition.inst_name',
width : '80%'
}
,{
fieldLabel : '网点名称',
id : 'select_brno_name',
xtype : 'textfield',
name : 't_serviceCondition.brno_name',
width : '80%'
}
,{
fieldLabel : '开始日期',
id : 'select_startday',
xtype : 'textfield',
name : 't_serviceCondition.startday',
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
queryt_serviceConditionStore.proxy = new Ext.data.HttpProxy({
url : 't_serviceCondition_findInfoByConditions.action?'
+'t_serviceCondition.inst_no='
+ Ext.getCmp('select_inst_no').getValue()
+'&t_serviceCondition.inst_name='
+ Ext.getCmp('select_inst_name').getValue()
+'&t_serviceCondition.brno='
+ Ext.getCmp('select_brno').getValue()
+'&t_serviceCondition.brno_name='
+ Ext.getCmp('select_brno_name').getValue()
+'&t_serviceCondition.cn='
+ Ext.getCmp('select_cn').getValue()
+'&t_serviceCondition.startday='
+ Ext.getCmp('select_startday').getValue()
+'&t_serviceCondition.endday='
+ Ext.getCmp('select_endday').getValue()
});
	queryt_serviceConditionStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});