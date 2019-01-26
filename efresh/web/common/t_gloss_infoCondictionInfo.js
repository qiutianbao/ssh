
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
fieldLabel : '术语编码',
id : 'select_idnumber',
xtype : 'textfield',
name : 't_gloss_info.idnumber',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'select_ser_no',
xtype : 'textfield',
name : 't_gloss_info.ser_no',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '术语类型',
id : 'select_gloss_type',
width : 100,
xtype : 'combo',
store : gloss_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_gloss_info.gloss_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '术语内容',
id : 'select_gloss_body',
xtype : 'htmleditor',
name : 't_gloss_info.gloss_body',
anchor : '95%'
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
queryt_gloss_infoStore.proxy = new Ext.data.HttpProxy({
url : 't_gloss_info_findInfoByConditions.action?'
+'t_gloss_info.idnumber='
+ Ext.getCmp('select_idnumber').getValue()
+'&t_gloss_info.gloss_type='
+ Ext.getCmp('select_gloss_type').getValue()
+'&t_gloss_info.ser_no='
+ Ext.getCmp('select_ser_no').getValue()
+'&t_gloss_info.gloss_body='
+ Ext.getCmp('select_gloss_body').getValue()
});
	queryt_gloss_infoStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});