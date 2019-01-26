Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	var loginform = new Ext.FormPanel( {

		labelWidth : 75,
		frame : true,
		bodyStyle : 'padding:5px 5px 0',
		width : 350,
		waitMsgTarget : true,
		defaults : {
			width : 230
		},
		defaultType : 'textfield',
		items : [ {
			fieldLabel : '用户名',
			name : 'rightUser.username',
			allowBlank : false,
			id:'userNameId'
		}, {
			fieldLabel : '密码',
			name : 'rightUser.password',
			inputType : 'password',
			allowBlank : false
		} ],
		buttons : [ {
			text : '登陆',
			disabled : false,
			handler : function() {
				if (loginform.form.isValid()) {
					loginform.form.submit( {
						url : 'login.action',
						success : function(form, action) {
							// store.reload();
						loginform.getForm().reset();
						win.hide();
						window.location.href=basePath+"index2.jsp"; 
//						window.parent.open('index2.jsp', '_self');
//						Ext.Msg.alert('提示','登陆成功');
					},
					failure : function(form, action) {
						Ext.Msg.alert('登陆失败', '用户名或密码错误！');
					},
					waitMsg : '正在登陆，稍后...'
					});
				} else {
					Ext.Msg.alert('信息', '请填写完成再提交!');
				}
			}
		}, {
			text : '取消',
			handler : function() {
				win.hide();
			}
		} ]
	});
	
	var win = new Ext.Window( {
		title : '用户登录',
		layout : 'form',
		width : 360,
		height : 140,
		plain : true,
		resizable : false,
		items : loginform
	}).show();
	Ext.getCmp("userNameId").focus(true,true);
});