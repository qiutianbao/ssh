	update##tableName##Reader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [##mapping##]
	);
		
	update##tableName##Form = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : update##tableName##Reader,
		items : [##update_field##],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(update##tableName##Form, "##tableName##_update.action", query##tableName##Store, "修改信息")
				update##tableName##Win.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				update##tableName##Win.hide();
				update##tableName##Form.form.reset();
			}
		}]
	});

	update##tableName##Win = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : update##tableName##Form
	});

	update = function() {
		_record = query##tableName##Grid.getSelectionModel().getSelected();
		flag = query##tableName##Grid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			update##tableName##Win.show();
					
			update##tableName##Form.getForm().load({
				url : '##tableName##_findById.action?##tableName##.idNumber='+ _record.get('idNumber'),
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


