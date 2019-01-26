
	addt_available_noForm = new Ext.FormPanel({
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
fieldLabel : '标识号',
id : 'add_idNumber',
xtype : 'textfield',
name : 't_available_no.idnumber',
width : '80%'
}
,{
fieldLabel : '名称',
id : 'add_name',
xtype : 'textfield',
name : 't_available_no.name',
width : '80%'
}
,{
fieldLabel : '起始编号',
id : 'add_bgn_no',
xtype : 'textfield',
name : 't_available_no.bgn_no',
width : '80%'
}
,{
fieldLabel : '最大编号',
id : 'add_max_no',
xtype : 'textfield',
name : 't_available_no.max_no',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构码',
id : 'add_inst_no',
xtype : 'textfield',
name : 't_available_no.inst_no',
width : '80%'
}
,{
fieldLabel : '当前可用编号',
id : 'add_crt_no',
xtype : 'textfield',
name : 't_available_no.crt_no',
width : '80%'
}
,{
fieldLabel : '间隔',
id : 'add_inv',
xtype : 'textfield',
name : 't_available_no.inv',
width : '80%'
}
,{
fieldLabel : '预警比例',
id : 'add_warn_rate',
xtype : 'textfield',
name : 't_available_no.warn_rate',
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
				check(addt_available_noForm, "t_available_no_addNewInfo.action", queryt_available_noStore, "添加信息")
				addt_available_noWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_available_noWin.hide();
				addt_available_noForm.form.reset();
			}
		}]

	});

	addt_available_noWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_available_noForm
	});

	addt_available_no = function() {
		addt_available_noWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};