
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
fieldLabel : '档案管理-物流商管理表',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'logistics.idNumber',
width : '80%'
}
,{
fieldLabel : '公司电话',
id : 'select_corptel',
xtype : 'textfield',
name : 'logistics.corptel',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'logistics.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'logistics.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'logistics.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '公司名称',
id : 'select_corpname',
xtype : 'textfield',
name : 'logistics.corpname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'logistics.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'logistics.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'logistics.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'logistics.back5',
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
querylogisticsStore.proxy = new Ext.data.HttpProxy({
url : 'logistics_findInfoByConditions.action?'
+'logistics.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&logistics.corpname='
+ Ext.getCmp('select_corpname').getValue()
+'&logistics.corptel='
+ Ext.getCmp('select_corptel').getValue()
+'&logistics.ts='
+ Ext.getCmp('select_ts').getValue()
+'&logistics.dr='
+ Ext.getCmp('select_dr').getValue()
+'&logistics.back1='
+ Ext.getCmp('select_back1').getValue()
+'&logistics.back2='
+ Ext.getCmp('select_back2').getValue()
+'&logistics.back3='
+ Ext.getCmp('select_back3').getValue()
+'&logistics.back4='
+ Ext.getCmp('select_back4').getValue()
+'&logistics.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querylogisticsStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});