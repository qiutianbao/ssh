
Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	
	var loginform = new Ext.FormPanel( {
		//title:'用户登录',
		labelWidth : 50,
		frame : false,
		height:200,
		bodyStyle : 'padding:5px 50px 50px,100px',
		width : 350,
		waitMsgTarget : true,
		renderTo:'loginDiv',
		baseCls:"panel",
		//panel背景
		buttonAlign:'right',
		defaults : {
			width : 230
		},
		defaultType : 'textfield',
		items : [ {
			fieldLabel : '用户名',
			name : 't_tlr_mgmt.idNumber',
			allowBlank : false,
			id:'userNameId'
		}, {
			fieldLabel : '密码',
			name : 't_tlr_mgmt.tlr_pwd',
			inputType : 'password',
			allowBlank : false
		} ],
		buttons : [ {
			text : '登陆',
			disabled : false,
			align : 'center',
			handler : function() {
				if (loginform.form.isValid()) {
					loginform.form.submit( {
						url : 'login.action',
						success : function(form, action) {
						loginform.getForm().reset();	
						var woiwo=window.open(basePath+'index.jsp','_self','fullscreen=yes');
						if(!woiwo){
							alert('CMS4J管理窗口被您系统中的拦截器拦截，如果您使用了窗口拦截器，请尝试关闭它，以便打开该窗口。');
						}else{
							woiwo.moveTo(0,0);
							woiwo.resizeTo(screen.availWidth,screen.availHeight);
							woiwo.outerWidth=screen.availWidth;
							woiwo.outerHeight=screen.availHeight;
							//	window.opener=null;
							//	window.close();
						}
					},
					failure : function(form, action) {
						alert(123);
					Ext.Msg.alert('输入信息错误',action.result.msg);
						
					},
					waitMsg : '正在登陆，稍后...'
					});
				} else {
					Ext.Msg.alert('信息', '请填写完成再提交!');
				}
			}
		}, {
			text : '重置',
			handler : function() {
				loginform.getForm().reset();
			}
		} ]
	});
	Ext.getCmp("userNameId").focus(true,true);
});