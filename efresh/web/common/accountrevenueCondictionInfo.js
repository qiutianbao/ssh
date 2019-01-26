
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
fieldLabel : '支付管理-收益表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'accountrevenue.idNumber',
width : '80%'
}
,{
fieldLabel : '收益来源，0=下订单并成功支付，1=充值虚拟货币',
id : 'select_revenueaource',
xtype : 'numberfield',
name : 'accountrevenue.revenueaource',
width : '80%'
}
,{
fieldLabel : '账户主键',
id : 'select_idUseraccount',
xtype : 'numberfield',
name : 'accountrevenue.idUseraccount',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'accountrevenue.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'accountrevenue.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'accountrevenue.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'accountrevenue.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '收益金额',
id : 'select_revenueamount',
xtype : 'numberfield',
name : 'accountrevenue.revenueamount',
width : '80%'
}
,{
fieldLabel : '用户主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'accountrevenue.idUser',
width : '80%'
}
,{
fieldLabel : '用户交易记录表主键',
id : 'select_idTradingrecords',
xtype : 'numberfield',
name : 'accountrevenue.idTradingrecords',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'accountrevenue.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'accountrevenue.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'accountrevenue.back4',
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
queryaccountrevenueStore.proxy = new Ext.data.HttpProxy({
url : 'accountrevenue_findInfoByConditions.action?'
+'accountrevenue.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&accountrevenue.revenueamount='
+ Ext.getCmp('select_revenueamount').getValue()
+'&accountrevenue.revenueaource='
+ Ext.getCmp('select_revenueaource').getValue()
+'&accountrevenue.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&accountrevenue.idUseraccount='
+ Ext.getCmp('select_idUseraccount').getValue()
+'&accountrevenue.idTradingrecords='
+ Ext.getCmp('select_idTradingrecords').getValue()
+'&accountrevenue.ts='
+ Ext.getCmp('select_ts').getValue()
+'&accountrevenue.dr='
+ Ext.getCmp('select_dr').getValue()
+'&accountrevenue.back1='
+ Ext.getCmp('select_back1').getValue()
+'&accountrevenue.back2='
+ Ext.getCmp('select_back2').getValue()
+'&accountrevenue.back3='
+ Ext.getCmp('select_back3').getValue()
+'&accountrevenue.back4='
+ Ext.getCmp('select_back4').getValue()
+'&accountrevenue.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryaccountrevenueStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});