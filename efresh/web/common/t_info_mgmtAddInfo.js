
	addt_info_mgmtForm = new Ext.FormPanel({
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
fieldLabel : '信息编码',
id : 'add_idNumber',
xtype : 'textfield',
name : 't_info_mgmt.idnumber',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '信息类型',
id : 'add_info_type',
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
]}
]}
,{
name : 't_info_mgmt.info_head',
xtype : 'field',
fieldLabel : '信息标题',
anchor : '95%'
}
,{
name : 't_info_mgmt.info_body',
xtype : 'field',
fieldLabel : '信息内容',
anchor : '95%'
}
,{
name : 't_info_mgmt.info_path',
xtype : 'field',
fieldLabel : '附件存储路径',
anchor : '95%'
}
,{
name : 't_info_mgmt.info_name',
xtype : 'field',
fieldLabel : '附件名称',
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
fieldLabel : '发布日期',
id : 'add_reas_date',
xtype : 'datefield',
name : 't_info_mgmt.reas_date',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '发布用户',
id : 'add_tlr_no',
xtype : 'textfield',
name : 't_info_mgmt.tlr_no',
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
				check(addt_info_mgmtForm, "t_info_mgmt_addNewInfo.action", queryt_info_mgmtStore, "添加信息")
				addt_info_mgmtWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_info_mgmtWin.hide();
				addt_info_mgmtForm.form.reset();
			}
		}]

	});

	addt_info_mgmtWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_info_mgmtForm
	});

	addt_info_mgmt = function() {
		addt_info_mgmtWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};