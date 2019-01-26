
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
fieldLabel : '信息编码',
id : 'select_idnumber',
xtype : 'textfield',
name : 't_busi_info.idnumber',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'select_ser_no',
xtype : 'textfield',
name : 't_busi_info.ser_no',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '业务类型',
id : 'select_busi_type',
width : 100,
xtype : 'combo',
store : busi_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_busi_info.busi_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '主题',
id : 'select_busi_head',
xtype : 'htmleditor',
name : 't_busi_info.busi_head',
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
queryt_busi_infoStore.proxy = new Ext.data.HttpProxy({
url : 't_busi_info_findInfoByConditions.action?'
+'t_busi_info.idnumber='
+ Ext.getCmp('select_idnumber').getValue()
+'&t_busi_info.busi_type='
+ Ext.getCmp('select_busi_type').getValue()
+'&t_busi_info.ser_no='
+ Ext.getCmp('select_ser_no').getValue()
+'&t_busi_info.busi_head='
+ Ext.getCmp('select_busi_head').getValue()
});
	queryt_busi_infoStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});