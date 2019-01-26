
	updatesysmsgimagesReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'sysmsgimages.idNumber',
mapping : 'idNumber'
}
,{
name : 'sysmsgimages.idSysmsgconent',
mapping : 'idSysmsgconent'
}
,{
name : 'sysmsgimages.msgimgname',
mapping : 'msgimgname'
}
,{
name : 'sysmsgimages.ts',
mapping : 'ts'
}
,{
name : 'sysmsgimages.dr',
mapping : 'dr'
}
,{
name : 'sysmsgimages.back1',
mapping : 'back1'
}
]
	);
		
	updatesysmsgimagesForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesysmsgimagesReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-系统消息图片表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'sysmsgimages.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'uppdate_msgimgname',
xtype : 'textfield',
name : 'sysmsgimages.msgimgname',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'sysmsgimages.dr',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '消息内容表主键',
id : 'uppdate_idSysmsgconent',
xtype : 'numberfield',
name : 'sysmsgimages.idSysmsgconent',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'sysmsgimages.ts',
width : '80%'
}
,{
fieldLabel : '预留字段',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'sysmsgimages.back1',
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
				check(updatesysmsgimagesForm, "sysmsgimages_update.action", querysysmsgimagesStore, "修改信息")
				updatesysmsgimagesWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesysmsgimagesWin.hide();
				updatesysmsgimagesForm.form.reset();
			}
		}]
	});

	updatesysmsgimagesWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesysmsgimagesForm
	});

	update = function() {
		_record = querysysmsgimagesGrid.getSelectionModel().getSelected();
		flag = querysysmsgimagesGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesysmsgimagesWin.show();
					
			updatesysmsgimagesForm.getForm().load({
				url : 'sysmsgimages_findById.action?sysmsgimages.idNumber='+ _record.get('idNumber'),
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

