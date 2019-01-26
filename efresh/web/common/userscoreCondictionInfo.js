
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
fieldLabel : '系统管理-用户评分表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'userscore.idNumber',
width : '80%'
}
,{
fieldLabel : '订单编号',
id : 'select_orderNo',
xtype : 'textfield',
name : 'userscore.orderNo',
width : '80%'
}
,{
fieldLabel : '产地',
id : 'select_originaddress',
xtype : 'textfield',
name : 'userscore.originaddress',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'userscore.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'userscore.back1',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '评分人主键',
id : 'select_idScore',
xtype : 'numberfield',
name : 'userscore.idScore',
width : '80%'
}
,{
fieldLabel : '商品名称',
id : 'select_commodity',
xtype : 'textfield',
name : 'userscore.commodity',
width : '80%'
}
,{
fieldLabel : '评分',
id : 'select_score',
xtype : 'numberfield',
name : 'userscore.score',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'userscore.dr',
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
queryuserscoreStore.proxy = new Ext.data.HttpProxy({
url : 'userscore_findInfoByConditions.action?'
+'userscore.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&userscore.idScore='
+ Ext.getCmp('select_idScore').getValue()
+'&userscore.orderNo='
+ Ext.getCmp('select_orderNo').getValue()
+'&userscore.commodity='
+ Ext.getCmp('select_commodity').getValue()
+'&userscore.originaddress='
+ Ext.getCmp('select_originaddress').getValue()
+'&userscore.score='
+ Ext.getCmp('select_score').getValue()
+'&userscore.ts='
+ Ext.getCmp('select_ts').getValue()
+'&userscore.dr='
+ Ext.getCmp('select_dr').getValue()
+'&userscore.back1='
+ Ext.getCmp('select_back1').getValue()
});
	queryuserscoreStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});