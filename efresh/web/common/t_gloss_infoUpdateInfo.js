
	updatet_gloss_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_gloss_info.idNumber',
mapping : 'idNumber'
}
,{
name : 't_gloss_info.gloss_type',
mapping : 'gloss_type'
}
,{
name : 't_gloss_info.ser_no',
mapping : 'ser_no'
}
,{
name : 't_gloss_info.gloss_body',
mapping : 'gloss_body'
}
]
	);
		
	updatet_gloss_infoForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_gloss_infoReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '术语编码',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_gloss_info.idnumber',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'uppdate_ser_no',
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
id : 'uppdate_gloss_type',
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
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatet_gloss_infoForm, "t_gloss_info_update.action", queryt_gloss_infoStore, "修改信息")
				updatet_gloss_infoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_gloss_infoWin.hide();
				updatet_gloss_infoForm.form.reset();
			}
		}]
	});

	updatet_gloss_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_gloss_infoForm
	});

	update = function() {
		_record = queryt_gloss_infoGrid.getSelectionModel().getSelected();
		flag = queryt_gloss_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_gloss_infoWin.show();
					
			updatet_gloss_infoForm.getForm().load({
				url : 't_gloss_info_findById.action?t_gloss_info.idNumber='+ _record.get('idNumber'),
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

