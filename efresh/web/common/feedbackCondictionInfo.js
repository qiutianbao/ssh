
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-用户反馈表',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'feedback.idNumber',
width : '80%'
}
,{
fieldLabel : '反馈时间',
id : 'select_feedbacktime',
xtype : 'datetimefield',
name : 'feedback.feedbacktime',
anchor : '95%'
}
,{
fieldLabel : '回复内容',
id : 'select_replycontent',
xtype : 'textfield',
name : 'feedback.replycontent',
width : '80%'
}
,{
fieldLabel : '回复时间',
id : 'select_replytime',
xtype : 'datetimefield',
name : 'feedback.replytime',
anchor : '95%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'feedback.dr',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '反馈人主键，就是用户主键',
id : 'select_idFeedback',
xtype : 'numberfield',
name : 'feedback.idFeedback',
width : '80%'
}
,{
fieldLabel : '反馈内容',
id : 'select_feedcontent',
xtype : 'textfield',
name : 'feedback.feedcontent',
width : '80%'
}
,{
fieldLabel : '回复人主键，就是用户主键',
id : 'select_idReply',
xtype : 'numberfield',
name : 'feedback.idReply',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'feedback.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'feedback.back1',
width : '80%'
}
,{
layout : 'column',
items : [{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '重置',
width : 100,
iconCls : 'icon-reset',
handler : function() {
selectUnitForm.form.reset();
}}]
},{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '查询',
width : 100,
iconCls : 'icon-select',
handler : function() {
queryfeedbackStore.proxy = new Ext.data.HttpProxy({
url : 'feedback_findInfoByConditions.action?'
+'feedback.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&feedback.idFeedback='
+ Ext.getCmp('select_idFeedback').getValue()
+'&feedback.feedbacktime='
+ Ext.getCmp('select_feedbacktime').getValue()
+'&feedback.feedcontent='
+ Ext.getCmp('select_feedcontent').getValue()
+'&feedback.replycontent='
+ Ext.getCmp('select_replycontent').getValue()
+'&feedback.idReply='
+ Ext.getCmp('select_idReply').getValue()
+'&feedback.replytime='
+ Ext.getCmp('select_replytime').getValue()
+'&feedback.ts='
+ Ext.getCmp('select_ts').getValue()
+'&feedback.dr='
+ Ext.getCmp('select_dr').getValue()
+'&feedback.back1='
+ Ext.getCmp('select_back1').getValue()
});
	queryfeedbackStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});