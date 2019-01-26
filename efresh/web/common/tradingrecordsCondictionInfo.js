
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
fieldLabel : '支付管理-用户账户交易记录表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'tradingrecords.idNumber',
width : '80%'
}
,{
fieldLabel : '账户主键',
id : 'select_idUseraccount',
xtype : 'numberfield',
name : 'tradingrecords.idUseraccount',
width : '80%'
}
,{
fieldLabel : '支付方式表主键',
id : 'select_idPayway',
xtype : 'numberfield',
name : 'tradingrecords.idPayway',
width : '80%'
}
,{
fieldLabel : '交易类型，0=充值，1=支出，2=退款，3=转出',
id : 'select_tradingtype',
xtype : 'numberfield',
name : 'tradingrecords.tradingtype',
width : '80%'
}
,{
fieldLabel : '交易单号',
id : 'select_tradingNo',
xtype : 'textfield',
name : 'tradingrecords.tradingNo',
width : '80%'
}
,{
fieldLabel : '交易状态，0=待审核，1=支付成功，2=支付失败',
id : 'select_tradingstatus',
xtype : 'numberfield',
name : 'tradingrecords.tradingstatus',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'tradingrecords.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'tradingrecords.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'tradingrecords.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'tradingrecords.idUser',
width : '80%'
}
,{
fieldLabel : '订单主键，充值也是订单，购买商品也是订单，',
id : 'select_idOrder',
xtype : 'numberfield',
name : 'tradingrecords.idOrder',
width : '80%'
}
,{
fieldLabel : '交易金额',
id : 'select_tradingamount',
xtype : 'numberfield',
name : 'tradingrecords.tradingamount',
width : '80%'
}
,{
fieldLabel : '交易时间',
id : 'select_tradingtime',
xtype : 'datetimefield',
name : 'tradingrecords.tradingtime',
anchor : '95%'
}
,{
fieldLabel : '备注',
id : 'select_note',
xtype : 'textfield',
name : 'tradingrecords.note',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'tradingrecords.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'tradingrecords.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'tradingrecords.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'tradingrecords.back5',
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
querytradingrecordsStore.proxy = new Ext.data.HttpProxy({
url : 'tradingrecords_findInfoByConditions.action?'
+'tradingrecords.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&tradingrecords.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&tradingrecords.idUseraccount='
+ Ext.getCmp('select_idUseraccount').getValue()
+'&tradingrecords.idOrder='
+ Ext.getCmp('select_idOrder').getValue()
+'&tradingrecords.idPayway='
+ Ext.getCmp('select_idPayway').getValue()
+'&tradingrecords.tradingamount='
+ Ext.getCmp('select_tradingamount').getValue()
+'&tradingrecords.tradingtype='
+ Ext.getCmp('select_tradingtype').getValue()
+'&tradingrecords.tradingtime='
+ Ext.getCmp('select_tradingtime').getValue()
+'&tradingrecords.tradingNo='
+ Ext.getCmp('select_tradingNo').getValue()
+'&tradingrecords.note='
+ Ext.getCmp('select_note').getValue()
+'&tradingrecords.tradingstatus='
+ Ext.getCmp('select_tradingstatus').getValue()
+'&tradingrecords.ts='
+ Ext.getCmp('select_ts').getValue()
+'&tradingrecords.dr='
+ Ext.getCmp('select_dr').getValue()
+'&tradingrecords.back1='
+ Ext.getCmp('select_back1').getValue()
+'&tradingrecords.back2='
+ Ext.getCmp('select_back2').getValue()
+'&tradingrecords.back3='
+ Ext.getCmp('select_back3').getValue()
+'&tradingrecords.back4='
+ Ext.getCmp('select_back4').getValue()
+'&tradingrecords.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querytradingrecordsStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});