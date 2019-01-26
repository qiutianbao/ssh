
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
fieldLabel : '支付管理',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'rebateway.idNumber',
width : '80%'
}
,{
fieldLabel : '返利方式',
id : 'select_rebateway',
xtype : 'numberfield',
name : 'rebateway.rebateway',
width : '80%'
}
,{
fieldLabel : '返利比例上限',
id : 'select_proportionEnd',
xtype : 'numberfield',
name : 'rebateway.proportionEnd',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'rebateway.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'rebateway.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'rebateway.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'rebateway.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '充值金额',
id : 'select_suppMoney',
xtype : 'numberfield',
name : 'rebateway.suppMoney',
width : '80%'
}
,{
fieldLabel : '返利比例下限',
id : 'select_proportionStart',
xtype : 'numberfield',
name : 'rebateway.proportionStart',
width : '80%'
}
,{
fieldLabel : '返利金额上限',
id : 'select_upperlimit',
xtype : 'numberfield',
name : 'rebateway.upperlimit',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'rebateway.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'rebateway.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'rebateway.back4',
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
queryrebatewayStore.proxy = new Ext.data.HttpProxy({
url : 'rebateway_findInfoByConditions.action?'
+'rebateway.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&rebateway.suppMoney='
+ Ext.getCmp('select_suppMoney').getValue()
+'&rebateway.rebateway='
+ Ext.getCmp('select_rebateway').getValue()
+'&rebateway.proportionStart='
+ Ext.getCmp('select_proportionStart').getValue()
+'&rebateway.proportionEnd='
+ Ext.getCmp('select_proportionEnd').getValue()
+'&rebateway.upperlimit='
+ Ext.getCmp('select_upperlimit').getValue()
+'&rebateway.ts='
+ Ext.getCmp('select_ts').getValue()
+'&rebateway.dr='
+ Ext.getCmp('select_dr').getValue()
+'&rebateway.back1='
+ Ext.getCmp('select_back1').getValue()
+'&rebateway.back2='
+ Ext.getCmp('select_back2').getValue()
+'&rebateway.back3='
+ Ext.getCmp('select_back3').getValue()
+'&rebateway.back4='
+ Ext.getCmp('select_back4').getValue()
+'&rebateway.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryrebatewayStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});