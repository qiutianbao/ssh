
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
fieldLabel : '首页轮播图表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'carousel.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'select_imagename',
xtype : 'textfield',
name : 'carousel.imagename',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'carousel.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'carousel.back2',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '序号',
id : 'select_serialnumber',
xtype : 'numberfield',
name : 'carousel.serialnumber',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'carousel.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'carousel.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'carousel.back3',
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
querycarouselStore.proxy = new Ext.data.HttpProxy({
url : 'carousel_findInfoByConditions.action?'
+'carousel.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&carousel.serialnumber='
+ Ext.getCmp('select_serialnumber').getValue()
+'&carousel.imagename='
+ Ext.getCmp('select_imagename').getValue()
+'&carousel.ts='
+ Ext.getCmp('select_ts').getValue()
+'&carousel.dr='
+ Ext.getCmp('select_dr').getValue()
+'&carousel.back1='
+ Ext.getCmp('select_back1').getValue()
+'&carousel.back2='
+ Ext.getCmp('select_back2').getValue()
+'&carousel.back3='
+ Ext.getCmp('select_back3').getValue()
});
	querycarouselStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});