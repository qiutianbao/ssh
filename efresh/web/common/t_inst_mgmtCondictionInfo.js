
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
fieldLabel : '机构码',
id : 'select_idnumber',
xtype : 'textfield',
name : 't_inst_mgmt.idnumber',
width : '80%'
}
,{
fieldLabel : '机构名称',
id : 'select_inst_name',
xtype : 'textfield',
name : 't_inst_mgmt.inst_name',
width : '80%'
}
,{
fieldLabel : '地址',
id : 'select_address ',
xtype : 'field',
name : 't_inst_mgmt.address ',
anchor : '95%'
}
,{
fieldLabel : '联系人',
id : 'select_contact_psn',
xtype : 'textfield',
name : 't_inst_mgmt.contact_psn',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构种类',
id : 'select_inst_type',
width : 100,
xtype : 'combo',
store : inst_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_inst_mgmt.inst_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '所属上级机构',
id : 'select_up_inst_no',
xtype : 'textfield',
name : 't_inst_mgmt.up_inst_no',
width : '80%'
}
,{
fieldLabel : '电话',
id : 'select_phone',
xtype : 'textfield',
name : 't_inst_mgmt.phone',
width : '80%'
}
,{
fieldLabel : '机构状态',
id : 'select_inst_busn_stat',
width : 100,
xtype : 'combo',
store : inst_busn_statStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_inst_mgmt.inst_busn_stat',
pageSize : 5,
anchor : '90%'
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
queryt_inst_mgmtStore.proxy = new Ext.data.HttpProxy({
url : 't_inst_mgmt_findInfoByConditions.action?'
+'t_inst_mgmt.idnumber='
+ Ext.getCmp('select_idnumber').getValue()
+'&t_inst_mgmt.inst_type='
+ Ext.getCmp('select_inst_type').getValue()
+'&t_inst_mgmt.inst_name='
+ Ext.getCmp('select_inst_name').getValue()
+'&t_inst_mgmt.up_inst_no='
+ Ext.getCmp('select_up_inst_no').getValue()
+'&t_inst_mgmt.address ='
+ Ext.getCmp('select_address ').getValue()
+'&t_inst_mgmt.phone='
+ Ext.getCmp('select_phone').getValue()
+'&t_inst_mgmt.contact_psn='
+ Ext.getCmp('select_contact_psn').getValue()
+'&t_inst_mgmt.inst_busn_stat='
+ Ext.getCmp('select_inst_busn_stat').getValue()
});
	queryt_inst_mgmtStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});