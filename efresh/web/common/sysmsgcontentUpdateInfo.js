
	updatesysmsgcontentReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'sysmsgcontent.idNumber',
mapping : 'idNumber'
}
,{
name : 'sysmsgcontent.idSysmessge',
mapping : 'idSysmessge'
}
,{
name : 'sysmsgcontent.msgcontent',
mapping : 'msgcontent'
}
,{
name : 'sysmsgcontent.ts',
mapping : 'ts'
}
,{
name : 'sysmsgcontent.dr',
mapping : 'dr'
}
,{
name : 'sysmsgcontent.back1',
mapping : 'back1'
}
,{
name : 'sysmsgcontent.subTitle',
mapping : 'subTitle'
}
]
	);
		
	updatesysmsgcontentForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesysmsgcontentReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-系统消息内容表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'sysmsgcontent.idNumber',
width : '80%'
}
,{
fieldLabel : '消息内容',
id : 'uppdate_msgcontent',
xtype : 'textfield',
name : 'sysmsgcontent.msgcontent',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'sysmsgcontent.dr',
width : '80%'
}
,{
fieldLabel : '子标题',
id : 'uppdate_subTitle',
xtype : 'textfield',
name : 'sysmsgcontent.subTitle',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统消息主键',
id : 'uppdate_idSysmessge',
xtype : 'numberfield',
name : 'sysmsgcontent.idSysmessge',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'sysmsgcontent.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'sysmsgcontent.back1',
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
				check(updatesysmsgcontentForm, "sysmsgcontent_update.action", querysysmsgcontentStore, "修改信息")
				updatesysmsgcontentWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesysmsgcontentWin.hide();
				updatesysmsgcontentForm.form.reset();
			}
		}]
	});

	updatesysmsgcontentWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesysmsgcontentForm
	});

	update = function() {
		_record = querysysmsgcontentGrid.getSelectionModel().getSelected();
		flag = querysysmsgcontentGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesysmsgcontentWin.show();
					
			updatesysmsgcontentForm.getForm().load({
				url : 'sysmsgcontent_findById.action?sysmsgcontent.idNumber='+ _record.get('idNumber'),
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

