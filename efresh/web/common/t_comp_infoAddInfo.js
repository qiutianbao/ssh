
	addt_comp_infoForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 320, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '保险公司编号',
id : 'add_idNumber',
xtype : 'textfield',
name : 't_comp_info.idnumber',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '保险公司简称',
id : 'add_comp_abbr_name',
xtype : 'textfield',
name : 't_comp_info.comp_abbr_name',
width : '80%'
}
]}
]}
,{
name : 't_comp_info.partner_info',
xtype : 'field',
fieldLabel : '股东构成及比例',
anchor : '95%'
}
,{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '保险公司全称',
id : 'add_comp_name',
xtype : 'textfield',
name : 't_comp_info.comp_name',
width : '80%'
}
,{
fieldLabel : '注册资本',
id : 'add_reg_bal',
xtype : 'textfield',
name : 't_comp_info.reg_bal',
width : '80%'
}
,{
fieldLabel : '总部地址',
id : 'add_hq_address',
xtype : 'textfield',
name : 't_comp_info.hq_address',
width : '80%'
}
,{
fieldLabel : '客服电话',
id : 'add_serv_phone',
xtype : 'textfield',
name : 't_comp_info.serv_phone',
width : '80%'
}
,{
fieldLabel : '联系人姓名',
id : 'add_con_name',
xtype : 'textfield',
name : 't_comp_info.con_name',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '公司成立时间',
id : 'add_found_date',
xtype : 'datefield',
name : 't_comp_info.found_date',
width : '80%'
}
,{
fieldLabel : '总部所在城市',
id : 'add_hq_city',
xtype : 'textfield',
name : 't_comp_info.hq_city',
width : '80%'
}
,{
fieldLabel : '公司网址',
id : 'add_comp_url',
xtype : 'textfield',
name : 't_comp_info.comp_url',
width : '80%'
}
,{
fieldLabel : '本部地址',
id : 'add_loc_address',
xtype : 'textfield',
name : 't_comp_info.loc_address',
width : '80%'
}
,{
fieldLabel : '服务人员联系电话',
id : 'add_con_phone',
xtype : 'textfield',
name : 't_comp_info.con_phone',
width : '80%'
}
]}
]}
,{
name : 't_comp_info.comp_abbr',
xtype : 'field',
fieldLabel : '公司简介',
anchor : '95%'
}
,{
name : 't_comp_info.glory_info',
xtype : 'field',
fieldLabel : '获奖荣誉',
anchor : '95%'
}
,],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addt_comp_infoForm, "t_comp_info_addNewInfo.action", queryt_comp_infoStore, "添加信息")
				addt_comp_infoWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_comp_infoWin.hide();
				addt_comp_infoForm.form.reset();
			}
		}]

	});

	addt_comp_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_comp_infoForm
	});

	addt_comp_info = function() {
		addt_comp_infoWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};