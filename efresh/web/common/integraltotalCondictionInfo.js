
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
fieldLabel : '档案管理-积分总表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'integraltotal.idNumber',
width : '80%'
}
,{
fieldLabel : '积分总数',
id : 'select_integralSum',
xtype : 'numberfield',
name : 'integraltotal.integralSum',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'integraltotal.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'integraltotal.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'integraltotal.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'textfield',
name : 'integraltotal.back5',
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
name : 'integraltotal.idUser',
width : '80%'
}
,{
fieldLabel : '可用积分',
id : 'select_usableIntegral',
xtype : 'numberfield',
name : 'integraltotal.usableIntegral',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'integraltotal.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'integraltotal.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'integraltotal.back4',
width : '80%'
}
,{
fieldLabel : '有效期结束时间',
id : 'select_validtime',
xtype : 'datetimefield',
name : 'integraltotal.validtime',
anchor : '95%'
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
queryintegraltotalStore.proxy = new Ext.data.HttpProxy({
url : 'integraltotal_findInfoByConditions.action?'
+'integraltotal.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&integraltotal.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&integraltotal.integralSum='
+ Ext.getCmp('select_integralSum').getValue()
+'&integraltotal.usableIntegral='
+ Ext.getCmp('select_usableIntegral').getValue()
+'&integraltotal.ts='
+ Ext.getCmp('select_ts').getValue()
+'&integraltotal.dr='
+ Ext.getCmp('select_dr').getValue()
+'&integraltotal.back1='
+ Ext.getCmp('select_back1').getValue()
+'&integraltotal.back2='
+ Ext.getCmp('select_back2').getValue()
+'&integraltotal.back3='
+ Ext.getCmp('select_back3').getValue()
+'&integraltotal.back4='
+ Ext.getCmp('select_back4').getValue()
+'&integraltotal.back5='
+ Ext.getCmp('select_back5').getValue()
+'&integraltotal.validtime='
+ Ext.getCmp('select_validtime').getValue()
});
	queryintegraltotalStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});