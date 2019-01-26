
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
fieldLabel : '系统管理-留言咨询表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'advisory.idNumber',
width : '80%'
}
,{
fieldLabel : '咨询时间',
id : 'select_advtime',
xtype : 'datetimefield',
name : 'advisory.advtime',
anchor : '95%'
}
,{
fieldLabel : '回复人主键',
id : 'select_idReply',
xtype : 'numberfield',
name : 'advisory.idReply',
width : '80%'
}
,{
fieldLabel : '回复时间',
id : 'select_replytime',
xtype : 'datetimefield',
name : 'advisory.replytime',
anchor : '95%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'advisory.dr',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '咨询人主键',
id : 'select_idAdvisory',
xtype : 'numberfield',
name : 'advisory.idAdvisory',
width : '80%'
}
,{
fieldLabel : '咨询内容',
id : 'select_advcontent',
xtype : 'textfield',
name : 'advisory.advcontent',
width : '80%'
}
,{
fieldLabel : '回复内容',
id : 'select_replycontent',
xtype : 'textfield',
name : 'advisory.replycontent',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'advisory.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'advisory.back1',
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
queryadvisoryStore.proxy = new Ext.data.HttpProxy({
url : 'advisory_findInfoByConditions.action?'
+'advisory.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&advisory.idAdvisory='
+ Ext.getCmp('select_idAdvisory').getValue()
+'&advisory.advtime='
+ Ext.getCmp('select_advtime').getValue()
+'&advisory.advcontent='
+ Ext.getCmp('select_advcontent').getValue()
+'&advisory.idReply='
+ Ext.getCmp('select_idReply').getValue()
+'&advisory.replycontent='
+ Ext.getCmp('select_replycontent').getValue()
+'&advisory.replytime='
+ Ext.getCmp('select_replytime').getValue()
+'&advisory.ts='
+ Ext.getCmp('select_ts').getValue()
+'&advisory.dr='
+ Ext.getCmp('select_dr').getValue()
+'&advisory.back1='
+ Ext.getCmp('select_back1').getValue()
});
	queryadvisoryStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});