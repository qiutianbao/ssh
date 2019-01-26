
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
fieldLabel : '系统管理-系统消息表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'sysmessage.idNumber',
width : '80%'
}
,{
fieldLabel : '发布时间',
id : 'select_releasetime',
xtype : 'datetimefield',
name : 'sysmessage.releasetime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'sysmessage.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'sysmessage.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'numberfield',
name : 'sysmessage.back3',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '标题',
id : 'select_msgtitle',
xtype : 'textfield',
name : 'sysmessage.msgtitle',
width : '80%'
}
,{
fieldLabel : '公告类型',
id : 'select_msgtype',
xtype : 'textfield',
name : 'sysmessage.msgtype',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'sysmessage.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'sysmessage.back2',
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
querysysmessageStore.proxy = new Ext.data.HttpProxy({
url : 'sysmessage_findInfoByConditions.action?'
+'sysmessage.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&sysmessage.msgtitle='
+ Ext.getCmp('select_msgtitle').getValue()
+'&sysmessage.releasetime='
+ Ext.getCmp('select_releasetime').getValue()
+'&sysmessage.msgtype='
+ Ext.getCmp('select_msgtype').getValue()
+'&sysmessage.ts='
+ Ext.getCmp('select_ts').getValue()
+'&sysmessage.dr='
+ Ext.getCmp('select_dr').getValue()
+'&sysmessage.back1='
+ Ext.getCmp('select_back1').getValue()
+'&sysmessage.back2='
+ Ext.getCmp('select_back2').getValue()
+'&sysmessage.back3='
+ Ext.getCmp('select_back3').getValue()
});
	querysysmessageStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});