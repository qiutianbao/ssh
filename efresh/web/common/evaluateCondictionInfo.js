
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
fieldLabel : '系统管理-用户评价表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'evaluate.idNumber',
width : '80%'
}
,{
fieldLabel : '订单编号',
id : 'select_orderNo',
xtype : 'textfield',
name : 'evaluate.orderNo',
width : '80%'
}
,{
fieldLabel : '评价时间',
id : 'select_evaluatetime',
xtype : 'datetimefield',
name : 'evaluate.evaluatetime',
anchor : '95%'
}
,{
fieldLabel : '回复内容',
id : 'select_replycontent',
xtype : 'textfield',
name : 'evaluate.replycontent',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'evaluate.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'evaluate.back1',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '评价人主键，就是用户主键',
id : 'select_idEvaluate',
xtype : 'numberfield',
name : 'evaluate.idEvaluate',
width : '80%'
}
,{
fieldLabel : '评价内容',
id : 'select_evaluatecontent',
xtype : 'textfield',
name : 'evaluate.evaluatecontent',
width : '80%'
}
,{
fieldLabel : '回复人',
id : 'select_idReply',
xtype : 'numberfield',
name : 'evaluate.idReply',
width : '80%'
}
,{
fieldLabel : '回复时间',
id : 'select_replytime',
xtype : 'datetimefield',
name : 'evaluate.replytime',
anchor : '95%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'evaluate.dr',
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
queryevaluateStore.proxy = new Ext.data.HttpProxy({
url : 'evaluate_findInfoByConditions.action?'
+'evaluate.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&evaluate.idEvaluate='
+ Ext.getCmp('select_idEvaluate').getValue()
+'&evaluate.orderNo='
+ Ext.getCmp('select_orderNo').getValue()
+'&evaluate.evaluatecontent='
+ Ext.getCmp('select_evaluatecontent').getValue()
+'&evaluate.evaluatetime='
+ Ext.getCmp('select_evaluatetime').getValue()
+'&evaluate.idReply='
+ Ext.getCmp('select_idReply').getValue()
+'&evaluate.replycontent='
+ Ext.getCmp('select_replycontent').getValue()
+'&evaluate.replytime='
+ Ext.getCmp('select_replytime').getValue()
+'&evaluate.ts='
+ Ext.getCmp('select_ts').getValue()
+'&evaluate.dr='
+ Ext.getCmp('select_dr').getValue()
+'&evaluate.back1='
+ Ext.getCmp('select_back1').getValue()
});
	queryevaluateStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});