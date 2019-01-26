
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
fieldLabel : '商品管理-商品图文描述表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'commoditydescribe.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称1',
id : 'select_imagename1',
xtype : 'textfield',
name : 'commoditydescribe.imagename1',
width : '80%'
}
,{
fieldLabel : '图片名称2',
id : 'select_imagename2',
xtype : 'textfield',
name : 'commoditydescribe.imagename2',
width : '80%'
}
,{
fieldLabel : '图片名称3',
id : 'select_imagename3',
xtype : 'textfield',
name : 'commoditydescribe.imagename3',
width : '80%'
}
,{
fieldLabel : '图片名称4',
id : 'select_imagename4',
xtype : 'textfield',
name : 'commoditydescribe.imagename4',
width : '80%'
}
,{
fieldLabel : '图片名称5',
id : 'select_imagename5',
xtype : 'textfield',
name : 'commoditydescribe.imagename5',
width : '80%'
}
,{
fieldLabel : '图片名称6',
id : 'select_imagename6',
xtype : 'textfield',
name : 'commoditydescribe.imagename6',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'commoditydescribe.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'commoditydescribe.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'commoditydescribe.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'commoditydescribe.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'commoditydescribe.idCommodity',
width : '80%'
}
,{
fieldLabel : '描述1',
id : 'select_describe1',
xtype : 'textfield',
name : 'commoditydescribe.describe1',
width : '80%'
}
,{
fieldLabel : '描述2',
id : 'select_describe2',
xtype : 'textfield',
name : 'commoditydescribe.describe2',
width : '80%'
}
,{
fieldLabel : '描述3',
id : 'select_describe3',
xtype : 'textfield',
name : 'commoditydescribe.describe3',
width : '80%'
}
,{
fieldLabel : '描述4',
id : 'select_describe4',
xtype : 'textfield',
name : 'commoditydescribe.describe4',
width : '80%'
}
,{
fieldLabel : '描述5',
id : 'select_describe5',
xtype : 'textfield',
name : 'commoditydescribe.describe5',
width : '80%'
}
,{
fieldLabel : '描述5',
id : 'select_describe6',
xtype : 'textfield',
name : 'commoditydescribe.describe6',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'commoditydescribe.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'commoditydescribe.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'commoditydescribe.back4',
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
querycommoditydescribeStore.proxy = new Ext.data.HttpProxy({
url : 'commoditydescribe_findInfoByConditions.action?'
+'commoditydescribe.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&commoditydescribe.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&commoditydescribe.imagename1='
+ Ext.getCmp('select_imagename1').getValue()
+'&commoditydescribe.describe1='
+ Ext.getCmp('select_describe1').getValue()
+'&commoditydescribe.imagename2='
+ Ext.getCmp('select_imagename2').getValue()
+'&commoditydescribe.describe2='
+ Ext.getCmp('select_describe2').getValue()
+'&commoditydescribe.imagename3='
+ Ext.getCmp('select_imagename3').getValue()
+'&commoditydescribe.describe3='
+ Ext.getCmp('select_describe3').getValue()
+'&commoditydescribe.imagename4='
+ Ext.getCmp('select_imagename4').getValue()
+'&commoditydescribe.describe4='
+ Ext.getCmp('select_describe4').getValue()
+'&commoditydescribe.imagename5='
+ Ext.getCmp('select_imagename5').getValue()
+'&commoditydescribe.describe5='
+ Ext.getCmp('select_describe5').getValue()
+'&commoditydescribe.imagename6='
+ Ext.getCmp('select_imagename6').getValue()
+'&commoditydescribe.describe6='
+ Ext.getCmp('select_describe6').getValue()
+'&commoditydescribe.ts='
+ Ext.getCmp('select_ts').getValue()
+'&commoditydescribe.dr='
+ Ext.getCmp('select_dr').getValue()
+'&commoditydescribe.back1='
+ Ext.getCmp('select_back1').getValue()
+'&commoditydescribe.back2='
+ Ext.getCmp('select_back2').getValue()
+'&commoditydescribe.back3='
+ Ext.getCmp('select_back3').getValue()
+'&commoditydescribe.back4='
+ Ext.getCmp('select_back4').getValue()
+'&commoditydescribe.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querycommoditydescribeStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});