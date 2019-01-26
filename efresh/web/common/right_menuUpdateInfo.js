
	updateright_menuReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'right_menu.ID',
mapping : 'ID'
}
,{
name : 'right_menu.RESOURCE_ID',
mapping : 'RESOURCE_ID'
}
,{
name : 'right_menu.THE_SORT',
mapping : 'THE_SORT'
}
,{
name : 'right_menu.QTIP',
mapping : 'QTIP'
}
,{
name : 'right_menu.DESCN',
mapping : 'DESCN'
}
,{
name : 'right_menu.NAME',
mapping : 'NAME'
}
,{
name : 'right_menu.IMAGE',
mapping : 'IMAGE'
}
,{
name : 'right_menu.PARENT_ID',
mapping : 'PARENT_ID'
}
,{
name : 'right_menu.DELETESTATE',
mapping : 'DELETESTATE'
}
]
	);
		
	updateright_menuForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateright_menuReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '主键',
id : 'uppdate_ID',
xtype : 'textfield',
name : 'right_menu.ID',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'uppdate_THE_SORT',
xtype : 'textfield',
name : 'right_menu.THE_SORT',
width : '80%'
}
,{
fieldLabel : '说明',
id : 'uppdate_DESCN',
xtype : 'textfield',
name : 'right_menu.DESCN',
width : '80%'
}
,{
fieldLabel : '图片url',
id : 'uppdate_IMAGE',
xtype : 'textfield',
name : 'right_menu.IMAGE',
width : '80%'
}
,{
fieldLabel : '是否删除',
id : 'uppdate_DELETESTATE',
xtype : 'textfield',
name : 'right_menu.DELETESTATE',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '资源id',
id : 'uppdate_RESOURCE_ID',
xtype : 'textfield',
name : 'right_menu.RESOURCE_ID',
width : '80%'
}
,{
fieldLabel : '菜单url',
id : 'uppdate_QTIP',
xtype : 'textfield',
name : 'right_menu.QTIP',
width : '80%'
}
,{
fieldLabel : '菜单名称',
id : 'uppdate_NAME',
xtype : 'textfield',
name : 'right_menu.NAME',
width : '80%'
}
,{
fieldLabel : '父节点',
id : 'uppdate_PARENT_ID',
xtype : 'textfield',
name : 'right_menu.PARENT_ID',
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
				check(updateright_menuForm, "right_menu_update.action", queryright_menuStore, "修改信息")
				updateright_menuWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateright_menuWin.hide();
				updateright_menuForm.form.reset();
			}
		}]
	});

	updateright_menuWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateright_menuForm
	});

	update = function() {
		_record = queryright_menuGrid.getSelectionModel().getSelected();
		flag = queryright_menuGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateright_menuWin.show();
					
			updateright_menuForm.getForm().load({
				url : 'right_menu_findById.action?right_menu.idNumber='+ _record.get('idNumber'),
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

