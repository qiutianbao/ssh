
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
fieldLabel : '系统管理-系统消息图片表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'sysmsgimages.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'select_msgimgname',
xtype : 'textfield',
name : 'sysmsgimages.msgimgname',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'sysmsgimages.dr',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '消息内容表主键',
id : 'select_idSysmsgconent',
xtype : 'numberfield',
name : 'sysmsgimages.idSysmsgconent',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'sysmsgimages.ts',
width : '80%'
}
,{
fieldLabel : '预留字段',
id : 'select_back1',
xtype : 'textfield',
name : 'sysmsgimages.back1',
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
querysysmsgimagesStore.proxy = new Ext.data.HttpProxy({
url : 'sysmsgimages_findInfoByConditions.action?'
+'sysmsgimages.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&sysmsgimages.idSysmsgconent='
+ Ext.getCmp('select_idSysmsgconent').getValue()
+'&sysmsgimages.msgimgname='
+ Ext.getCmp('select_msgimgname').getValue()
+'&sysmsgimages.ts='
+ Ext.getCmp('select_ts').getValue()
+'&sysmsgimages.dr='
+ Ext.getCmp('select_dr').getValue()
+'&sysmsgimages.back1='
+ Ext.getCmp('select_back1').getValue()
});
	querysysmsgimagesStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});