
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
fieldLabel : '商品管理-商品价格表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'commodityprice.idNumber',
width : '80%'
}
,{
fieldLabel : '结束时间',
id : 'select_endtime',
xtype : 'datetimefield',
name : 'commodityprice.endtime',
anchor : '95%'
}
,{
fieldLabel : '商品表主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'commodityprice.idCommodity',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'commodityprice.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'commodityprice.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'commodityprice.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'commodityprice.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '开始时间',
id : 'select_starttime',
xtype : 'datetimefield',
name : 'commodityprice.starttime',
anchor : '95%'
}
,{
fieldLabel : '单价',
id : 'select_price',
xtype : 'numberfield',
name : 'commodityprice.price',
width : '80%'
}
,{
fieldLabel : '商品级别表主键',
id : 'select_idLevel',
xtype : 'numberfield',
name : 'commodityprice.idLevel',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'commodityprice.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'commodityprice.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'commodityprice.back4',
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
querycommoditypriceStore.proxy = new Ext.data.HttpProxy({
url : 'commodityprice_findInfoByConditions.action?'
+'commodityprice.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&commodityprice.starttime='
+ Ext.getCmp('select_starttime').getValue()
+'&commodityprice.endtime='
+ Ext.getCmp('select_endtime').getValue()
+'&commodityprice.price='
+ Ext.getCmp('select_price').getValue()
+'&commodityprice.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&commodityprice.idLevel='
+ Ext.getCmp('select_idLevel').getValue()
+'&commodityprice.ts='
+ Ext.getCmp('select_ts').getValue()
+'&commodityprice.dr='
+ Ext.getCmp('select_dr').getValue()
+'&commodityprice.back1='
+ Ext.getCmp('select_back1').getValue()
+'&commodityprice.back2='
+ Ext.getCmp('select_back2').getValue()
+'&commodityprice.back3='
+ Ext.getCmp('select_back3').getValue()
+'&commodityprice.back4='
+ Ext.getCmp('select_back4').getValue()
+'&commodityprice.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querycommoditypriceStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});