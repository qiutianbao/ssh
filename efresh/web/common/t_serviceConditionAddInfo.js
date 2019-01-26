
	addt_serviceConditionForm = new Ext.FormPanel({
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
fieldLabel : '支行编码',
id : 'add_inst_no',
xtype : 'textfield',
name : 't_serviceCondition.inst_no',
width : '80%'
}
,{
fieldLabel : '网点编码',
id : 'add_brno',
xtype : 'textfield',
name : 't_serviceCondition.brno',
width : '80%'
}
,{
fieldLabel : '点击次数',
id : 'add_cn',
xtype : 'textfield',
name : 't_serviceCondition.cn',
width : '80%'
}
,{
fieldLabel : '结束日期',
id : 'add_endDay',
xtype : 'textfield',
name : 't_serviceCondition.endday',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支行名称',
id : 'add_inst_name',
xtype : 'textfield',
name : 't_serviceCondition.inst_name',
width : '80%'
}
,{
fieldLabel : '网点名称',
id : 'add_brno_name',
xtype : 'textfield',
name : 't_serviceCondition.brno_name',
width : '80%'
}
,{
fieldLabel : '开始日期',
id : 'add_startDay',
xtype : 'textfield',
name : 't_serviceCondition.startday',
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
				check(addt_serviceConditionForm, "t_serviceCondition_addNewInfo.action", queryt_serviceConditionStore, "添加信息")
				addt_serviceConditionWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_serviceConditionWin.hide();
				addt_serviceConditionForm.form.reset();
			}
		}]

	});

	addt_serviceConditionWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_serviceConditionForm
	});

	addt_serviceCondition = function() {
		addt_serviceConditionWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};