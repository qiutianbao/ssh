
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
fieldLabel : '标识号',
id : 'select_idnumber',
xtype : 'textfield',
name : 't_available_no.idnumber',
width : '80%'
}
,{
fieldLabel : '名称',
id : 'select_name',
xtype : 'textfield',
name : 't_available_no.name',
width : '80%'
}
,{
fieldLabel : '起始编号',
id : 'select_bgn_no',
xtype : 'textfield',
name : 't_available_no.bgn_no',
width : '80%'
}
,{
fieldLabel : '最大编号',
id : 'select_max_no',
xtype : 'textfield',
name : 't_available_no.max_no',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构码',
id : 'select_inst_no',
xtype : 'textfield',
name : 't_available_no.inst_no',
width : '80%'
}
,{
fieldLabel : '当前可用编号',
id : 'select_crt_no',
xtype : 'textfield',
name : 't_available_no.crt_no',
width : '80%'
}
,{
fieldLabel : '间隔',
id : 'select_inv',
xtype : 'textfield',
name : 't_available_no.inv',
width : '80%'
}
,{
fieldLabel : '预警比例',
id : 'select_warn_rate',
xtype : 'textfield',
name : 't_available_no.warn_rate',
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
queryt_available_noStore.proxy = new Ext.data.HttpProxy({
url : 't_available_no_findInfoByConditions.action?'
+'t_available_no.idnumber='
+ Ext.getCmp('select_idnumber').getValue()
+'&t_available_no.inst_no='
+ Ext.getCmp('select_inst_no').getValue()
+'&t_available_no.name='
+ Ext.getCmp('select_name').getValue()
+'&t_available_no.crt_no='
+ Ext.getCmp('select_crt_no').getValue()
+'&t_available_no.bgn_no='
+ Ext.getCmp('select_bgn_no').getValue()
+'&t_available_no.inv='
+ Ext.getCmp('select_inv').getValue()
+'&t_available_no.max_no='
+ Ext.getCmp('select_max_no').getValue()
+'&t_available_no.warn_rate='
+ Ext.getCmp('select_warn_rate').getValue()
});
	queryt_available_noStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});