
	updatetj_parameterReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'tj_parameter.idNumber',
mapping : 'idNumber'
}
,{
name : 'tj_parameter.PARAMETERID',
mapping : 'PARAMETERID'
}
,{
name : 'tj_parameter.PARAMETERMEMO',
mapping : 'PARAMETERMEMO'
}
,{
name : 'tj_parameter.PARAMETYPE',
mapping : 'PARAMETYPE'
}
]
	);
		
	updatetj_parameterForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatetj_parameterReader,
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
xtype : 'numberfield',
name : 'tj_parameter.idNumber',
width : '80%'
}
,{
fieldLabel : '参数说明',
id : 'uppdate_PARAMETERMEMO',
xtype : 'textfield',
name : 'tj_parameter.PARAMETERMEMO',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '参数标识',
id : 'uppdate_PARAMETERID',
xtype : 'textfield',
name : 'tj_parameter.PARAMETERID',
width : '80%'
}
,{
fieldLabel : '参数类型',
id : 'uppdate_PARAMETYPE',
xtype : 'textfield',
name : 'tj_parameter.PARAMETYPE',
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
				check(updatetj_parameterForm, "tj_parameter_update.action", querytj_parameterStore, "修改信息")
				updatetj_parameterWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatetj_parameterWin.hide();
				updatetj_parameterForm.form.reset();
			}
		}]
	});

	updatetj_parameterWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatetj_parameterForm
	});

	update = function() {
		_record = querytj_parameterGrid.getSelectionModel().getSelected();
		flag = querytj_parameterGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatetj_parameterWin.show();
					
			updatetj_parameterForm.getForm().load({
				url : 'tj_parameter_findById.action?tj_parameter.idNumber='+ _record.get('idNumber'),
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

