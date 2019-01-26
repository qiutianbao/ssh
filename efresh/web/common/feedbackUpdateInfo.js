
	updatefeedbackReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'feedback.idNumber',
mapping : 'idNumber'
}
,{
name : 'feedback.idFeedback',
mapping : 'idFeedback'
}
,{
name : 'feedback.feedbacktime',
mapping : 'feedbacktime'
}
,{
name : 'feedback.feedcontent',
mapping : 'feedcontent'
}
,{
name : 'feedback.replycontent',
mapping : 'replycontent'
}
,{
name : 'feedback.idReply',
mapping : 'idReply'
}
,{
name : 'feedback.replytime',
mapping : 'replytime'
}
,{
name : 'feedback.ts',
mapping : 'ts'
}
,{
name : 'feedback.dr',
mapping : 'dr'
}
,{
name : 'feedback.back1',
mapping : 'back1'
}
]
	);
		
	updatefeedbackForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatefeedbackReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-用户反馈表',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'feedback.idNumber',
width : '80%'
}
,{
fieldLabel : '反馈时间',
id : 'uppdate_feedbacktime',
xtype : 'datetimefield',
name : 'feedback.feedbacktime',
anchor : '95%'
}
,{
fieldLabel : '回复内容',
id : 'uppdate_replycontent',
xtype : 'textfield',
name : 'feedback.replycontent',
width : '80%'
}
,{
fieldLabel : '回复时间',
id : 'uppdate_replytime',
xtype : 'datetimefield',
name : 'feedback.replytime',
anchor : '95%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'feedback.dr',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '反馈人主键，就是用户主键',
id : 'uppdate_idFeedback',
xtype : 'numberfield',
name : 'feedback.idFeedback',
width : '80%'
}
,{
fieldLabel : '反馈内容',
id : 'uppdate_feedcontent',
xtype : 'textfield',
name : 'feedback.feedcontent',
width : '80%'
}
,{
fieldLabel : '回复人主键，就是用户主键',
id : 'uppdate_idReply',
xtype : 'numberfield',
name : 'feedback.idReply',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'feedback.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'feedback.back1',
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
				check(updatefeedbackForm, "feedback_update.action", queryfeedbackStore, "修改信息")
				updatefeedbackWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatefeedbackWin.hide();
				updatefeedbackForm.form.reset();
			}
		}]
	});

	updatefeedbackWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatefeedbackForm
	});

	update = function() {
		_record = queryfeedbackGrid.getSelectionModel().getSelected();
		flag = queryfeedbackGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatefeedbackWin.show();
					
			updatefeedbackForm.getForm().load({
				url : 'feedback_findById.action?feedback.idNumber='+ _record.get('idNumber'),
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

