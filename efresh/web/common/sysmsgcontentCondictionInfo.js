
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
fieldLabel : '系统管理-系统消息内容表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'sysmsgcontent.idNumber',
width : '80%'
}
,{
fieldLabel : '消息内容',
id : 'select_msgcontent',
xtype : 'textfield',
name : 'sysmsgcontent.msgcontent',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'sysmsgcontent.dr',
width : '80%'
}
,{
fieldLabel : '子标题',
id : 'select_subTitle',
xtype : 'textfield',
name : 'sysmsgcontent.subTitle',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统消息主键',
id : 'select_idSysmessge',
xtype : 'numberfield',
name : 'sysmsgcontent.idSysmessge',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'sysmsgcontent.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'sysmsgcontent.back1',
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
querysysmsgcontentStore.proxy = new Ext.data.HttpProxy({
url : 'sysmsgcontent_findInfoByConditions.action?'
+'sysmsgcontent.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&sysmsgcontent.idSysmessge='
+ Ext.getCmp('select_idSysmessge').getValue()
+'&sysmsgcontent.msgcontent='
+ Ext.getCmp('select_msgcontent').getValue()
+'&sysmsgcontent.ts='
+ Ext.getCmp('select_ts').getValue()
+'&sysmsgcontent.dr='
+ Ext.getCmp('select_dr').getValue()
+'&sysmsgcontent.back1='
+ Ext.getCmp('select_back1').getValue()
+'&sysmsgcontent.subTitle='
+ Ext.getCmp('select_subTitle').getValue()
});
	querysysmsgcontentStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});