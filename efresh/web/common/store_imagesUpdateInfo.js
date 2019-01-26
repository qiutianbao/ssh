
	updatestore_imagesReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'store_images.idNumber',
mapping : 'idNumber'
}
,{
name : 'store_images.idStoreStyle',
mapping : 'idStoreStyle'
}
,{
name : 'store_images.imagename',
mapping : 'imagename'
}
,{
name : 'store_images.ts',
mapping : 'ts'
}
,{
name : 'store_images.dr',
mapping : 'dr'
}
,{
name : 'store_images.back1',
mapping : 'back1'
}
,{
name : 'store_images.back2',
mapping : 'back2'
}
]
	);
		
	updatestore_imagesForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatestore_imagesReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地风采图片表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'store_images.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'uppdate_imagename',
xtype : 'textfield',
name : 'store_images.imagename',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'store_images.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'store_images.back2',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '风采表主键',
id : 'uppdate_idStoreStyle',
xtype : 'numberfield',
name : 'store_images.idStoreStyle',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'store_images.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'store_images.back1',
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
				check(updatestore_imagesForm, "store_images_update.action", querystore_imagesStore, "修改信息")
				updatestore_imagesWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatestore_imagesWin.hide();
				updatestore_imagesForm.form.reset();
			}
		}]
	});

	updatestore_imagesWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatestore_imagesForm
	});

	update = function() {
		_record = querystore_imagesGrid.getSelectionModel().getSelected();
		flag = querystore_imagesGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatestore_imagesWin.show();
					
			updatestore_imagesForm.getForm().load({
				url : 'store_images_findById.action?store_images.idNumber='+ _record.get('idNumber'),
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

