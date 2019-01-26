
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
name : 't_info_mgmt.idnumber',
width : '80%'
}
,{
fieldLabel : '信息标题',
id : 'select_info_head',
xtype : 'field',
name : 't_info_mgmt.info_head',
anchor : '95%'
}
,{
fieldLabel : '附件存储路径',
id : 'select_info_path',
xtype : 'field',
name : 't_info_mgmt.info_path',
anchor : '95%'
}
,{
fieldLabel : '发布日期',
id : 'select_reas_date',
xtype : 'datefield',
name : 't_info_mgmt.reas_date',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '信息类型',
id : 'select_info_type',
width : 100,
xtype : 'combo',
store : info_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_info_mgmt.info_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '信息内容',
id : 'select_info_body',
xtype : 'textarea',
name : 't_info_mgmt.info_body',
anchor : '95%'
}
,{
fieldLabel : '附件名称',
id : 'select_info_name',
xtype : 'field',
name : 't_info_mgmt.info_name',
anchor : '95%'
}
,{
fieldLabel : '发布用户',
id : 'select_tlr_no',
xtype : 'textfield',
name : 't_info_mgmt.tlr_no',
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
queryt_info_mgmtStore.proxy = new Ext.data.HttpProxy({
url : 't_info_mgmt_findInfoByConditions.action?'
+'t_info_mgmt.idnumber='
+ Ext.getCmp('select_idnumber').getValue()
+'&t_info_mgmt.info_type='
+ Ext.getCmp('select_info_type').getValue()
+'&t_info_mgmt.info_head='
+ Ext.getCmp('select_info_head').getValue()
+'&t_info_mgmt.info_body='
+ Ext.getCmp('select_info_body').getValue()
+'&t_info_mgmt.info_path='
+ Ext.getCmp('select_info_path').getValue()
+'&t_info_mgmt.info_name='
+ Ext.getCmp('select_info_name').getValue()
+'&t_info_mgmt.reas_date='
+ Ext.getCmp('select_reas_date').getValue()
+'&t_info_mgmt.tlr_no='
+ Ext.getCmp('select_tlr_no').getValue()
});
	queryt_info_mgmtStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});