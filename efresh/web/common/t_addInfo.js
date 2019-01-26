	add##tableName##Form = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 320, 
		items : [##add_field##],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(add##tableName##Form, "##tableName##_addNewInfo.action", query##tableName##Store, "添加信息")
				add##tableName##Win.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				add##tableName##Win.hide();
				add##tableName##Form.form.reset();
			}
		}]

	});

	add##tableName##Win = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : add##tableName##Form
	});

	add##tableName## = function() {
		add##tableName##Win.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};