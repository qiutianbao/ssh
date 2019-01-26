
	updatesysmessageReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'sysmessage.idNumber',
mapping : 'idNumber'
}
,{
name : 'sysmessage.msgtitle',
mapping : 'msgtitle'
}
,{
name : 'sysmessage.releasetime',
mapping : 'releasetime'
}
,{
name : 'sysmessage.msgtype',
mapping : 'msgtype'
}
,{
name : 'sysmessage.ts',
mapping : 'ts'
}
,{
name : 'sysmessage.dr',
mapping : 'dr'
}
,{
name : 'sysmessage.back1',
mapping : 'back1'
}
,{
name : 'sysmessage.back2',
mapping : 'back2'
}
,{
name : 'sysmessage.back3',
mapping : 'back3'
}
]
	);
		
	updatesysmessageForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesysmessageReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-系统消息表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'sysmessage.idNumber',
width : '80%'
}
,{
fieldLabel : '发布时间',
id : 'uppdate_releasetime',
xtype : 'datetimefield',
name : 'sysmessage.releasetime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'sysmessage.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'sysmessage.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'numberfield',
name : 'sysmessage.back3',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '标题',
id : 'uppdate_msgtitle',
xtype : 'textfield',
name : 'sysmessage.msgtitle',
width : '80%'
}
,{
fieldLabel : '公告类型',
id : 'uppdate_msgtype',
xtype : 'textfield',
name : 'sysmessage.msgtype',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'sysmessage.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'sysmessage.back2',
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
				check(updatesysmessageForm, "sysmessage_update.action", querysysmessageStore, "修改信息")
				updatesysmessageWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesysmessageWin.hide();
				updatesysmessageForm.form.reset();
			}
		}]
	});

	updatesysmessageWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesysmessageForm
	});

	update = function() {
		_record = querysysmessageGrid.getSelectionModel().getSelected();
		flag = querysysmessageGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesysmessageWin.show();
					
			updatesysmessageForm.getForm().load({
				url : 'sysmessage_findById.action?sysmessage.idNumber='+ _record.get('idNumber'),
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

