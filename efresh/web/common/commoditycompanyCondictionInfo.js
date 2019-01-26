
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
fieldLabel : '商品管理-商品单位表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'commoditycompany.idNumber',
width : '80%'
}
,{
fieldLabel : '单位缩写',
id : 'select_company',
xtype : 'textfield',
name : 'commoditycompany.company',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'commoditycompany.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'commoditycompany.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'commoditycompany.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '单位名称',
id : 'select_companyname',
xtype : 'textfield',
name : 'commoditycompany.companyname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'commoditycompany.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'commoditycompany.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'commoditycompany.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'commoditycompany.back5',
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
querycommoditycompanyStore.proxy = new Ext.data.HttpProxy({
url : 'commoditycompany_findInfoByConditions.action?'
+'commoditycompany.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&commoditycompany.companyname='
+ Ext.getCmp('select_companyname').getValue()
+'&commoditycompany.company='
+ Ext.getCmp('select_company').getValue()
+'&commoditycompany.ts='
+ Ext.getCmp('select_ts').getValue()
+'&commoditycompany.dr='
+ Ext.getCmp('select_dr').getValue()
+'&commoditycompany.back1='
+ Ext.getCmp('select_back1').getValue()
+'&commoditycompany.back2='
+ Ext.getCmp('select_back2').getValue()
+'&commoditycompany.back3='
+ Ext.getCmp('select_back3').getValue()
+'&commoditycompany.back4='
+ Ext.getCmp('select_back4').getValue()
+'&commoditycompany.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querycommoditycompanyStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});