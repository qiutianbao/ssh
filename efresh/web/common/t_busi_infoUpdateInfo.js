
	updatet_busi_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_busi_info.idNumber',
mapping : 'idNumber'
}
,{
name : 't_busi_info.busi_type',
mapping : 'busi_type'
}
,{
name : 't_busi_info.ser_no',
mapping : 'ser_no'
}
,{
name : 't_busi_info.busi_head',
mapping : 'busi_head'
}
]
	);
		
	updatet_busi_infoForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_busi_infoReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '信息编码',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_busi_info.idnumber',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'uppdate_ser_no',
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
id : 'uppdate_busi_type',
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
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatet_busi_infoForm, "t_busi_info_update.action", queryt_busi_infoStore, "修改信息")
				updatet_busi_infoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_busi_infoWin.hide();
				updatet_busi_infoForm.form.reset();
			}
		}]
	});

	updatet_busi_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_busi_infoForm
	});

	update = function() {
		_record = queryt_busi_infoGrid.getSelectionModel().getSelected();
		flag = queryt_busi_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_busi_infoWin.show();
					
			updatet_busi_infoForm.getForm().load({
				url : 't_busi_info_findById.action?t_busi_info.idNumber='+ _record.get('idNumber'),
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

