
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
fieldLabel : '支付管理-支付方式表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'payway.idNumber',
width : '80%'
}
,{
fieldLabel : '支付方式名称',
id : 'select_wayname',
xtype : 'textfield',
name : 'payway.wayname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'payway.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'payway.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'payway.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'payway.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付方式编码，0=e币支付，1=支付宝支付，2=银联支付，3=微信支付',
id : 'select_waycode',
xtype : 'numberfield',
name : 'payway.waycode',
width : '80%'
}
,{
fieldLabel : '支付方式状态，0=开通，1=关闭',
id : 'select_status',
xtype : 'numberfield',
name : 'payway.status',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'payway.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'payway.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'payway.back4',
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
querypaywayStore.proxy = new Ext.data.HttpProxy({
url : 'payway_findInfoByConditions.action?'
+'payway.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&payway.waycode='
+ Ext.getCmp('select_waycode').getValue()
+'&payway.wayname='
+ Ext.getCmp('select_wayname').getValue()
+'&payway.status='
+ Ext.getCmp('select_status').getValue()
+'&payway.ts='
+ Ext.getCmp('select_ts').getValue()
+'&payway.dr='
+ Ext.getCmp('select_dr').getValue()
+'&payway.back1='
+ Ext.getCmp('select_back1').getValue()
+'&payway.back2='
+ Ext.getCmp('select_back2').getValue()
+'&payway.back3='
+ Ext.getCmp('select_back3').getValue()
+'&payway.back4='
+ Ext.getCmp('select_back4').getValue()
+'&payway.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querypaywayStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});