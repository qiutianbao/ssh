
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
fieldLabel : '商品管理-商品级别表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'commoditylevel.idNumber',
width : '80%'
}
,{
fieldLabel : '毛重',
id : 'select_grossweight',
xtype : 'numberfield',
name : 'commoditylevel.grossweight',
width : '80%'
}
,{
fieldLabel : '包装规格',
id : 'select_outerpacking',
xtype : 'textfield',
name : 'commoditylevel.outerpacking',
width : '80%'
}
,{
fieldLabel : '自定义属性名1',
id : 'select_customproperty1',
xtype : 'textfield',
name : 'commoditylevel.customproperty1',
width : '80%'
}
,{
fieldLabel : '自定义属性名2',
id : 'select_customproperty2',
xtype : 'textfield',
name : 'commoditylevel.customproperty2',
width : '80%'
}
,{
fieldLabel : '自定义属性名3',
id : 'select_customproperty3',
xtype : 'textfield',
name : 'commoditylevel.customproperty3',
width : '80%'
}
,{
fieldLabel : '自定义属性名4',
id : 'select_customproperty4',
xtype : 'textfield',
name : 'commoditylevel.customproperty4',
width : '80%'
}
,{
fieldLabel : '自定义属性名5',
id : 'select_customproperty5',
xtype : 'textfield',
name : 'commoditylevel.customproperty5',
width : '80%'
}
,{
fieldLabel : '重量单位主键',
id : 'select_idCompany',
xtype : 'textfield',
name : 'commoditylevel.idCompany',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'commoditylevel.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'commoditylevel.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'commoditylevel.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '级别名称',
id : 'select_levelname',
xtype : 'textfield',
name : 'commoditylevel.levelname',
width : '80%'
}
,{
fieldLabel : '净重',
id : 'select_cleanweight',
xtype : 'numberfield',
name : 'commoditylevel.cleanweight',
width : '80%'
}
,{
fieldLabel : '库存量',
id : 'select_stock',
xtype : 'numberfield',
name : 'commoditylevel.stock',
width : '80%'
}
,{
fieldLabel : '自定义属性值1',
id : 'select_customvalue1',
xtype : 'textfield',
name : 'commoditylevel.customvalue1',
width : '80%'
}
,{
fieldLabel : '自定义属性值2',
id : 'select_customvalue2',
xtype : 'textfield',
name : 'commoditylevel.customvalue2',
width : '80%'
}
,{
fieldLabel : '自定义属性值3',
id : 'select_customvalue3',
xtype : 'textfield',
name : 'commoditylevel.customvalue3',
width : '80%'
}
,{
fieldLabel : '自定义属性值4',
id : 'select_customvalue4',
xtype : 'textfield',
name : 'commoditylevel.customvalue4',
width : '80%'
}
,{
fieldLabel : '自定义属性值5',
id : 'select_customvalue5',
xtype : 'textfield',
name : 'commoditylevel.customvalue5',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'commoditylevel.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'commoditylevel.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'commoditylevel.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'commoditylevel.back5',
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
querycommoditylevelStore.proxy = new Ext.data.HttpProxy({
url : 'commoditylevel_findInfoByConditions.action?'
+'commoditylevel.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&commoditylevel.levelname='
+ Ext.getCmp('select_levelname').getValue()
+'&commoditylevel.grossweight='
+ Ext.getCmp('select_grossweight').getValue()
+'&commoditylevel.cleanweight='
+ Ext.getCmp('select_cleanweight').getValue()
+'&commoditylevel.outerpacking='
+ Ext.getCmp('select_outerpacking').getValue()
+'&commoditylevel.stock='
+ Ext.getCmp('select_stock').getValue()
+'&commoditylevel.customproperty1='
+ Ext.getCmp('select_customproperty1').getValue()
+'&commoditylevel.customvalue1='
+ Ext.getCmp('select_customvalue1').getValue()
+'&commoditylevel.customproperty2='
+ Ext.getCmp('select_customproperty2').getValue()
+'&commoditylevel.customvalue2='
+ Ext.getCmp('select_customvalue2').getValue()
+'&commoditylevel.customproperty3='
+ Ext.getCmp('select_customproperty3').getValue()
+'&commoditylevel.customvalue3='
+ Ext.getCmp('select_customvalue3').getValue()
+'&commoditylevel.customproperty4='
+ Ext.getCmp('select_customproperty4').getValue()
+'&commoditylevel.customvalue4='
+ Ext.getCmp('select_customvalue4').getValue()
+'&commoditylevel.customproperty5='
+ Ext.getCmp('select_customproperty5').getValue()
+'&commoditylevel.customvalue5='
+ Ext.getCmp('select_customvalue5').getValue()
+'&commoditylevel.idCompany='
+ Ext.getCmp('select_idCompany').getValue()
+'&commoditylevel.ts='
+ Ext.getCmp('select_ts').getValue()
+'&commoditylevel.dr='
+ Ext.getCmp('select_dr').getValue()
+'&commoditylevel.back1='
+ Ext.getCmp('select_back1').getValue()
+'&commoditylevel.back2='
+ Ext.getCmp('select_back2').getValue()
+'&commoditylevel.back3='
+ Ext.getCmp('select_back3').getValue()
+'&commoditylevel.back4='
+ Ext.getCmp('select_back4').getValue()
+'&commoditylevel.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querycommoditylevelStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});