
	addt_inst_mgmtForm = new Ext.FormPanel({
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
fieldLabel : '机构码',
id : 'add_idNumber',
xtype : 'textfield',
name : 't_inst_mgmt.idnumber',
width : '80%'
}
,{
fieldLabel : '机构名称',
id : 'add_inst_name',
xtype : 'textfield',
name : 't_inst_mgmt.inst_name',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构种类',
id : 'add_inst_type',
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
id : 'add_up_inst_no',
xtype : 'textfield',
name : 't_inst_mgmt.up_inst_no',
width : '80%'
}
]}
]}
,{
name : 't_inst_mgmt.address ',
xtype : 'field',
fieldLabel : '地址',
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
fieldLabel : '电话',
id : 'add_phone',
xtype : 'textfield',
name : 't_inst_mgmt.phone',
width : '80%'
}
,{
fieldLabel : '机构状态',
id : 'add_inst_busn_stat',
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
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '联系人',
id : 'add_contact_psn',
xtype : 'textfield',
name : 't_inst_mgmt.contact_psn',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addt_inst_mgmtForm, "t_inst_mgmt_addNewInfo.action", queryt_inst_mgmtStore, "添加信息")
				addt_inst_mgmtWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_inst_mgmtWin.hide();
				addt_inst_mgmtForm.form.reset();
			}
		}]

	});

	addt_inst_mgmtWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_inst_mgmtForm
	});

	addt_inst_mgmt = function() {
		addt_inst_mgmtWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};