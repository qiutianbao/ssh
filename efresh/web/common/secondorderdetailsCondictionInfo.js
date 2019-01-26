
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
fieldLabel : '订单管理-归集后的二级订单详情表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'secondorderdetails.idNumber',
width : '80%'
}
,{
fieldLabel : '二级订单主键',
id : 'select_idSecondorder',
xtype : 'numberfield',
name : 'secondorderdetails.idSecondorder',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'secondorderdetails.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'secondorderdetails.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'secondorderdetails.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'secondorderdetails.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单主键',
id : 'select_idFirstorder',
xtype : 'numberfield',
name : 'secondorderdetails.idFirstorder',
width : '80%'
}
,{
fieldLabel : '二级订单编号',
id : 'select_secondorderNo',
xtype : 'textfield',
name : 'secondorderdetails.secondorderNo',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'secondorderdetails.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'secondorderdetails.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'secondorderdetails.back4',
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
querysecondorderdetailsStore.proxy = new Ext.data.HttpProxy({
url : 'secondorderdetails_findInfoByConditions.action?'
+'secondorderdetails.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&secondorderdetails.idFirstorder='
+ Ext.getCmp('select_idFirstorder').getValue()
+'&secondorderdetails.idSecondorder='
+ Ext.getCmp('select_idSecondorder').getValue()
+'&secondorderdetails.secondorderNo='
+ Ext.getCmp('select_secondorderNo').getValue()
+'&secondorderdetails.ts='
+ Ext.getCmp('select_ts').getValue()
+'&secondorderdetails.dr='
+ Ext.getCmp('select_dr').getValue()
+'&secondorderdetails.back1='
+ Ext.getCmp('select_back1').getValue()
+'&secondorderdetails.back2='
+ Ext.getCmp('select_back2').getValue()
+'&secondorderdetails.back3='
+ Ext.getCmp('select_back3').getValue()
+'&secondorderdetails.back4='
+ Ext.getCmp('select_back4').getValue()
+'&secondorderdetails.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querysecondorderdetailsStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});