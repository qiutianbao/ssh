
	addt_gloss_infoForm = new Ext.FormPanel({
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
fieldLabel : '术语编码',
id : 'add_idNumber',
xtype : 'textfield',
name : 't_gloss_info.idnumber',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'add_ser_no',
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
id : 'add_gloss_type',
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
]}
]}
,{
name : 't_gloss_info.gloss_body',
xtype : 'field',
fieldLabel : '术语内容',
anchor : '95%'
}
,],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addt_gloss_infoForm, "t_gloss_info_addNewInfo.action", queryt_gloss_infoStore, "添加信息")
				addt_gloss_infoWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_gloss_infoWin.hide();
				addt_gloss_infoForm.form.reset();
			}
		}]

	});

	addt_gloss_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_gloss_infoForm
	});

	addt_gloss_info = function() {
		addt_gloss_infoWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};