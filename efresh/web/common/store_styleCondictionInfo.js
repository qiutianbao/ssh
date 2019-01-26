
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
fieldLabel : '产地风采表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'store_style.idNumber',
width : '80%'
}
,{
fieldLabel : '简介',
id : 'select_frofile',
xtype : 'textfield',
name : 'store_style.frofile',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'store_style.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'store_style.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'store_style.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '店铺表主键',
id : 'select_idStore',
xtype : 'numberfield',
name : 'store_style.idStore',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'store_style.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'store_style.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'store_style.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'store_style.back5',
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
querystore_styleStore.proxy = new Ext.data.HttpProxy({
url : 'store_style_findInfoByConditions.action?'
+'store_style.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&store_style.idStore='
+ Ext.getCmp('select_idStore').getValue()
+'&store_style.frofile='
+ Ext.getCmp('select_frofile').getValue()
+'&store_style.ts='
+ Ext.getCmp('select_ts').getValue()
+'&store_style.dr='
+ Ext.getCmp('select_dr').getValue()
+'&store_style.back1='
+ Ext.getCmp('select_back1').getValue()
+'&store_style.back2='
+ Ext.getCmp('select_back2').getValue()
+'&store_style.back3='
+ Ext.getCmp('select_back3').getValue()
+'&store_style.back4='
+ Ext.getCmp('select_back4').getValue()
+'&store_style.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querystore_styleStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});