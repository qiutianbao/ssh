
	addt_busi_infoForm = new Ext.FormPanel({
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
name : 't_busi_info.idnumber',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'add_ser_no',
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
id : 'add_busi_type',
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
]}
]}
,{
name : 't_busi_info.busi_head',
xtype : 'field',
fieldLabel : '主题',
anchor : '95%'
}
,],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addt_busi_infoForm, "t_busi_info_addNewInfo.action", queryt_busi_infoStore, "添加信息")
				addt_busi_infoWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_busi_infoWin.hide();
				addt_busi_infoForm.form.reset();
			}
		}]

	});

	addt_busi_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_busi_infoForm
	});

	addt_busi_info = function() {
		addt_busi_infoWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};