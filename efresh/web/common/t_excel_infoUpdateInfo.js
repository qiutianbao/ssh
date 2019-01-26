
	updatet_excel_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_excel_info.idNumber',
mapping : 'idNumber'
}
,{
name : 't_excel_info.product_no',
mapping : 'product_no'
}
,{
name : 't_excel_info.Para_name',
mapping : 'Para_name'
}
,{
name : 't_excel_info.Y_site',
mapping : 'Y_site'
}
,{
name : 't_excel_info.X_site',
mapping : 'X_site'
}
,{
name : 't_excel_info.X_tab',
mapping : 'X_tab'
}
,{
name : 't_excel_info.type',
mapping : 'type'
}
,{
name : 't_excel_info.Exc_value',
mapping : 'Exc_value'
}
,{
name : 't_excel_info.back1',
mapping : 'back1'
}
]
	);
		
	updatet_excel_infoForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_excel_infoReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '主键',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_excel_info.idnumber',
width : '80%'
}
,{
fieldLabel : '产品名称',
id : 'uppdate_Para_name',
xtype : 'textfield',
name : 't_excel_info.para_name',
width : '80%'
}
,{
fieldLabel : 'X坐标',
id : 'uppdate_X_site',
xtype : 'textfield',
name : 't_excel_info.x_site',
width : '80%'
}
,{
fieldLabel : '字段类型',
id : 'uppdate_type',
xtype : 'textfield',
name : 't_excel_info.type',
width : '80%'
}
,{
fieldLabel : '备注说明',
id : 'uppdate_back1',
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
id : 'uppdate_product_no',
xtype : 'textfield',
name : 't_excel_info.product_no',
width : '80%'
}
,{
fieldLabel : 'Y坐标',
id : 'uppdate_Y_site',
xtype : 'textfield',
name : 't_excel_info.y_site',
width : '80%'
}
,{
fieldLabel : '第几格',
id : 'uppdate_X_tab',
xtype : 'textfield',
name : 't_excel_info.x_tab',
width : '80%'
}
,{
fieldLabel : '字段数值',
id : 'uppdate_Exc_value',
xtype : 'textfield',
name : 't_excel_info.exc_value',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatet_excel_infoForm, "t_excel_info_update.action", queryt_excel_infoStore, "修改信息")
				updatet_excel_infoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_excel_infoWin.hide();
				updatet_excel_infoForm.form.reset();
			}
		}]
	});

	updatet_excel_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_excel_infoForm
	});

	update = function() {
		_record = queryt_excel_infoGrid.getSelectionModel().getSelected();
		flag = queryt_excel_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_excel_infoWin.show();
					
			updatet_excel_infoForm.getForm().load({
				url : 't_excel_info_findById.action?t_excel_info.idNumber='+ _record.get('idNumber'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
	};

