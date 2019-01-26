
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
fieldLabel : '档案管理-积分兑换表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'integralexchange.idNumber',
width : '80%'
}
,{
fieldLabel : '兑换积分',
id : 'select_spendintegral',
xtype : 'numberfield',
name : 'integralexchange.spendintegral',
width : '80%'
}
,{
fieldLabel : '兑换物品主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'integralexchange.idCommodity',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'integralexchange.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'integralexchange.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'integralexchange.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '兑换人主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'integralexchange.idUser',
width : '80%'
}
,{
fieldLabel : '兑换时间',
id : 'select_exchangetime',
xtype : 'datetimefield',
name : 'integralexchange.exchangetime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'integralexchange.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'integralexchange.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'integralexchange.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'integralexchange.back5',
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
queryintegralexchangeStore.proxy = new Ext.data.HttpProxy({
url : 'integralexchange_findInfoByConditions.action?'
+'integralexchange.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&integralexchange.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&integralexchange.spendintegral='
+ Ext.getCmp('select_spendintegral').getValue()
+'&integralexchange.exchangetime='
+ Ext.getCmp('select_exchangetime').getValue()
+'&integralexchange.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&integralexchange.ts='
+ Ext.getCmp('select_ts').getValue()
+'&integralexchange.dr='
+ Ext.getCmp('select_dr').getValue()
+'&integralexchange.back1='
+ Ext.getCmp('select_back1').getValue()
+'&integralexchange.back2='
+ Ext.getCmp('select_back2').getValue()
+'&integralexchange.back3='
+ Ext.getCmp('select_back3').getValue()
+'&integralexchange.back4='
+ Ext.getCmp('select_back4').getValue()
+'&integralexchange.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryintegralexchangeStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});