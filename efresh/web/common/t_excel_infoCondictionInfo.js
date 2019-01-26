
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
id : 'select_idnumber',
xtype : 'textfield',
name : 't_excel_info.idnumber',
width : '80%'
}
,{
fieldLabel : '产品名称',
id : 'select_para_name',
xtype : 'textfield',
name : 't_excel_info.para_name',
width : '80%'
}
,{
fieldLabel : 'X坐标',
id : 'select_x_site',
xtype : 'textfield',
name : 't_excel_info.x_site',
width : '80%'
}
,{
fieldLabel : '字段类型',
id : 'select_type',
xtype : 'textfield',
name : 't_excel_info.type',
width : '80%'
}
,{
fieldLabel : '备注说明',
id : 'select_back1',
xtype : 'textfield',
name : 't_excel_info.back1',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产品编号',
id : 'select_product_no',
xtype : 'textfield',
name : 't_excel_info.product_no',
width : '80%'
}
,{
fieldLabel : 'Y坐标',
id : 'select_y_site',
xtype : 'textfield',
name : 't_excel_info.y_site',
width : '80%'
}
,{
fieldLabel : '第几格',
id : 'select_x_tab',
xtype : 'textfield',
name : 't_excel_info.x_tab',
width : '80%'
}
,{
fieldLabel : '字段数值',
id : 'select_exc_value',
xtype : 'textfield',
name : 't_excel_info.exc_value',
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
queryt_excel_infoStore.proxy = new Ext.data.HttpProxy({
url : 't_excel_info_findInfoByConditions.action?'
+'t_excel_info.idnumber='
+ Ext.getCmp('select_idnumber').getValue()
+'&t_excel_info.product_no='
+ Ext.getCmp('select_product_no').getValue()
+'&t_excel_info.para_name='
+ Ext.getCmp('select_para_name').getValue()
+'&t_excel_info.y_site='
+ Ext.getCmp('select_y_site').getValue()
+'&t_excel_info.x_site='
+ Ext.getCmp('select_x_site').getValue()
+'&t_excel_info.x_tab='
+ Ext.getCmp('select_x_tab').getValue()
+'&t_excel_info.type='
+ Ext.getCmp('select_type').getValue()
+'&t_excel_info.exc_value='
+ Ext.getCmp('select_exc_value').getValue()
+'&t_excel_info.back1='
+ Ext.getCmp('select_back1').getValue()
});
	queryt_excel_infoStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});