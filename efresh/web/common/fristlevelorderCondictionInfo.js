
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
fieldLabel : '订单管理-一级订单表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'fristlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'select_orderstatus',
xtype : 'numberfield',
name : 'fristlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'fristlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '到货时间',
id : 'select_arrivaltime',
xtype : 'datetimefield',
name : 'fristlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '取消订单时间',
id : 'select_canceltime',
xtype : 'datetimefield',
name : 'fristlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'select_signtime',
xtype : 'datetimefield',
name : 'fristlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '收货人',
id : 'select_arrivalpeople',
xtype : 'textfield',
name : 'fristlevelorder.arrivalpeople',
width : '80%'
}
,{
fieldLabel : '归集开始时间',
id : 'select_collectionstarttime',
xtype : 'datetimefield',
name : 'fristlevelorder.collectionstarttime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'select_orderprice',
xtype : 'numberfield',
name : 'fristlevelorder.orderprice',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'fristlevelorder.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'fristlevelorder.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'fristlevelorder.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单编号',
id : 'select_firstlevelorderNo',
xtype : 'textfield',
name : 'fristlevelorder.firstlevelorderNo',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'select_idStore',
xtype : 'numberfield',
name : 'fristlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'select_creationordertime',
xtype : 'datetimefield',
name : 'fristlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '支付时间',
id : 'select_paytime',
xtype : 'datetimefield',
name : 'fristlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'select_deliverytime',
xtype : 'datetimefield',
name : 'fristlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '收货地址',
id : 'select_arrivaladdress',
xtype : 'textfield',
name : 'fristlevelorder.arrivaladdress',
width : '80%'
}
,{
fieldLabel : '收货人电话',
id : 'select_arrivalpeopletel',
xtype : 'textfield',
name : 'fristlevelorder.arrivalpeopletel',
width : '80%'
}
,{
fieldLabel : '归集结束时间',
id : 'select_collectionendtime',
xtype : 'datetimefield',
name : 'fristlevelorder.collectionendtime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'fristlevelorder.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'fristlevelorder.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'fristlevelorder.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'fristlevelorder.back5',
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
queryfristlevelorderStore.proxy = new Ext.data.HttpProxy({
url : 'fristlevelorder_findInfoByConditions.action?'
+'fristlevelorder.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&fristlevelorder.firstlevelorderNo='
+ Ext.getCmp('select_firstlevelorderNo').getValue()
+'&fristlevelorder.orderstatus='
+ Ext.getCmp('select_orderstatus').getValue()
+'&fristlevelorder.idStore='
+ Ext.getCmp('select_idStore').getValue()
+'&fristlevelorder.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&fristlevelorder.creationordertime='
+ Ext.getCmp('select_creationordertime').getValue()
+'&fristlevelorder.arrivaltime='
+ Ext.getCmp('select_arrivaltime').getValue()
+'&fristlevelorder.paytime='
+ Ext.getCmp('select_paytime').getValue()
+'&fristlevelorder.canceltime='
+ Ext.getCmp('select_canceltime').getValue()
+'&fristlevelorder.deliverytime='
+ Ext.getCmp('select_deliverytime').getValue()
+'&fristlevelorder.signtime='
+ Ext.getCmp('select_signtime').getValue()
+'&fristlevelorder.arrivaladdress='
+ Ext.getCmp('select_arrivaladdress').getValue()
+'&fristlevelorder.arrivalpeople='
+ Ext.getCmp('select_arrivalpeople').getValue()
+'&fristlevelorder.arrivalpeopletel='
+ Ext.getCmp('select_arrivalpeopletel').getValue()
+'&fristlevelorder.collectionstarttime='
+ Ext.getCmp('select_collectionstarttime').getValue()
+'&fristlevelorder.collectionendtime='
+ Ext.getCmp('select_collectionendtime').getValue()
+'&fristlevelorder.orderprice='
+ Ext.getCmp('select_orderprice').getValue()
+'&fristlevelorder.ts='
+ Ext.getCmp('select_ts').getValue()
+'&fristlevelorder.dr='
+ Ext.getCmp('select_dr').getValue()
+'&fristlevelorder.back1='
+ Ext.getCmp('select_back1').getValue()
+'&fristlevelorder.back2='
+ Ext.getCmp('select_back2').getValue()
+'&fristlevelorder.back3='
+ Ext.getCmp('select_back3').getValue()
+'&fristlevelorder.back4='
+ Ext.getCmp('select_back4').getValue()
+'&fristlevelorder.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryfristlevelorderStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});