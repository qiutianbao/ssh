
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
fieldLabel : '订单管理-商品清单表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'orderdetailed.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'orderdetailed.idCommodity',
width : '80%'
}
,{
fieldLabel : '购买级别主键',
id : 'select_idLevel',
xtype : 'numberfield',
name : 'orderdetailed.idLevel',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'orderdetailed.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'orderdetailed.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'orderdetailed.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'orderdetailed.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单表主键',
id : 'select_idOrderNo',
xtype : 'numberfield',
name : 'orderdetailed.idOrderNo',
width : '80%'
}
,{
fieldLabel : '购买数量',
id : 'select_buynumber',
xtype : 'numberfield',
name : 'orderdetailed.buynumber',
width : '80%'
}
,{
fieldLabel : '商品单价',
id : 'select_buyprice',
xtype : 'numberfield',
name : 'orderdetailed.buyprice',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'orderdetailed.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'orderdetailed.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'orderdetailed.back4',
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
queryorderdetailedStore.proxy = new Ext.data.HttpProxy({
url : 'orderdetailed_findInfoByConditions.action?'
+'orderdetailed.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&orderdetailed.idOrderNo='
+ Ext.getCmp('select_idOrderNo').getValue()
+'&orderdetailed.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&orderdetailed.buynumber='
+ Ext.getCmp('select_buynumber').getValue()
+'&orderdetailed.idLevel='
+ Ext.getCmp('select_idLevel').getValue()
+'&orderdetailed.buyprice='
+ Ext.getCmp('select_buyprice').getValue()
+'&orderdetailed.ts='
+ Ext.getCmp('select_ts').getValue()
+'&orderdetailed.dr='
+ Ext.getCmp('select_dr').getValue()
+'&orderdetailed.back1='
+ Ext.getCmp('select_back1').getValue()
+'&orderdetailed.back2='
+ Ext.getCmp('select_back2').getValue()
+'&orderdetailed.back3='
+ Ext.getCmp('select_back3').getValue()
+'&orderdetailed.back4='
+ Ext.getCmp('select_back4').getValue()
+'&orderdetailed.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryorderdetailedStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});