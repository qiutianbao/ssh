
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
fieldLabel : '保险公司编号',
id : 'select_idnumber',
xtype : 'textfield',
name : 't_comp_info.idnumber',
width : '80%'
}
,{
fieldLabel : '股东构成及比例',
id : 'select_partner_info',
xtype : 'htmleditor',
name : 't_comp_info.partner_info',
anchor : '95%'
}
,{
fieldLabel : '公司成立时间',
id : 'select_found_date',
xtype : 'datefield',
name : 't_comp_info.found_date',
width : '80%'
}
,{
fieldLabel : '总部所在城市',
id : 'select_hq_city',
xtype : 'textfield',
name : 't_comp_info.hq_city',
width : '80%'
}
,{
fieldLabel : '公司网址',
id : 'select_comp_url',
xtype : 'textfield',
name : 't_comp_info.comp_url',
width : '80%'
}
,{
fieldLabel : '本部地址',
id : 'select_loc_address',
xtype : 'textfield',
name : 't_comp_info.loc_address',
width : '80%'
}
,{
fieldLabel : '服务人员联系电话',
id : 'select_con_phone',
xtype : 'textfield',
name : 't_comp_info.con_phone',
width : '80%'
}
,{
fieldLabel : '获奖荣誉',
id : 'select_glory_info',
xtype : 'htmleditor',
name : 't_comp_info.glory_info',
anchor : '95%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '保险公司简称',
id : 'select_comp_abbr_name',
xtype : 'textfield',
name : 't_comp_info.comp_abbr_name',
width : '80%'
}
,{
fieldLabel : '保险公司全称',
id : 'select_comp_name',
xtype : 'textfield',
name : 't_comp_info.comp_name',
width : '80%'
}
,{
fieldLabel : '注册资本',
id : 'select_reg_bal',
xtype : 'textfield',
name : 't_comp_info.reg_bal',
width : '80%'
}
,{
fieldLabel : '总部地址',
id : 'select_hq_address',
xtype : 'textfield',
name : 't_comp_info.hq_address',
width : '80%'
}
,{
fieldLabel : '客服电话',
id : 'select_serv_phone',
xtype : 'textfield',
name : 't_comp_info.serv_phone',
width : '80%'
}
,{
fieldLabel : '联系人姓名',
id : 'select_con_name',
xtype : 'textfield',
name : 't_comp_info.con_name',
width : '80%'
}
,{
fieldLabel : '公司简介',
id : 'select_comp_abbr',
xtype : 'htmleditor',
name : 't_comp_info.comp_abbr',
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
queryt_comp_infoStore.proxy = new Ext.data.HttpProxy({
url : 't_comp_info_findInfoByConditions.action?'
+'t_comp_info.idnumber='
+ Ext.getCmp('select_idnumber').getValue()
+'&t_comp_info.comp_abbr_name='
+ Ext.getCmp('select_comp_abbr_name').getValue()
+'&t_comp_info.partner_info='
+ Ext.getCmp('select_partner_info').getValue()
+'&t_comp_info.comp_name='
+ Ext.getCmp('select_comp_name').getValue()
+'&t_comp_info.found_date='
+ Ext.getCmp('select_found_date').getValue()
+'&t_comp_info.reg_bal='
+ Ext.getCmp('select_reg_bal').getValue()
+'&t_comp_info.hq_city='
+ Ext.getCmp('select_hq_city').getValue()
+'&t_comp_info.hq_address='
+ Ext.getCmp('select_hq_address').getValue()
+'&t_comp_info.comp_url='
+ Ext.getCmp('select_comp_url').getValue()
+'&t_comp_info.serv_phone='
+ Ext.getCmp('select_serv_phone').getValue()
+'&t_comp_info.loc_address='
+ Ext.getCmp('select_loc_address').getValue()
+'&t_comp_info.con_name='
+ Ext.getCmp('select_con_name').getValue()
+'&t_comp_info.con_phone='
+ Ext.getCmp('select_con_phone').getValue()
+'&t_comp_info.comp_abbr='
+ Ext.getCmp('select_comp_abbr').getValue()
+'&t_comp_info.glory_info='
+ Ext.getCmp('select_glory_info').getValue()
});
	queryt_comp_infoStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});