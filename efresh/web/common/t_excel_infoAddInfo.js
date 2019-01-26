
	addt_excel_infoForm = new Ext.FormPanel({
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
fieldLabel : '主键',
id : 'add_idNumber',
xtype : 'textfield',
name : 't_excel_info.idnumber',
width : '80%'
}
,{
fieldLabel : '产品名称',
id : 'add_Para_name',
xtype : 'textfield',
name : 't_excel_info.para_name',
width : '80%'
}
,{
fieldLabel : 'X坐标',
id : 'add_X_site',
xtype : 'textfield',
name : 't_excel_info.x_site',
width : '80%'
}
,{
fieldLabel : '字段类型',
id : 'add_type',
xtype : 'textfield',
name : 't_excel_info.type',
width : '80%'
}
,{
fieldLabel : '备注说明',
id : 'add_back1',
xtype : 'textfield',
name : 't_excel_info.back1',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产品编号',
id : 'add_product_no',
xtype : 'textfield',
name : 't_excel_info.product_no',
width : '80%'
}
,{
fieldLabel : 'Y坐标',
id : 'add_Y_site',
xtype : 'textfield',
name : 't_excel_info.y_site',
width : '80%'
}
,{
fieldLabel : '第几格',
id : 'add_X_tab',
xtype : 'textfield',
name : 't_excel_info.x_tab',
width : '80%'
}
,{
fieldLabel : '字段数值',
id : 'add_Exc_value',
xtype : 'textfield',
name : 't_excel_info.exc_value',
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
				check(addt_excel_infoForm, "t_excel_info_addNewInfo.action", queryt_excel_infoStore, "添加信息")
				addt_excel_infoWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_excel_infoWin.hide();
				addt_excel_infoForm.form.reset();
			}
		}]

	});

	addt_excel_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_excel_infoForm
	});

	addt_excel_info = function() {
		addt_excel_infoWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};