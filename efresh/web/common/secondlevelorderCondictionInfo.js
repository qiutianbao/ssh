
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
fieldLabel : '二级订单表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'secondlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'select_idStore',
xtype : 'numberfield',
name : 'secondlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'select_creationordertime',
xtype : 'datetimefield',
name : 'secondlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '到货时间',
id : 'select_arrivaltime',
xtype : 'datetimefield',
name : 'secondlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'secondlevelorder.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'secondlevelorder.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'secondlevelorder.back4',
width : '80%'
}
,{
fieldLabel : '取消订单时间',
id : 'select_canceltime',
xtype : 'datetimefield',
name : 'secondlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'select_deliverytime',
xtype : 'datetimefield',
name : 'secondlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'select_orderprice',
xtype : 'numberfield',
name : 'secondlevelorder.orderprice',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '二级订单编号',
id : 'select_secondlevelorderNo',
xtype : 'textfield',
name : 'secondlevelorder.secondlevelorderNo',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'secondlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'select_orderstatus',
xtype : 'numberfield',
name : 'secondlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'secondlevelorder.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'secondlevelorder.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'secondlevelorder.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'secondlevelorder.back5',
width : '80%'
}
,{
fieldLabel : '支付时间',
id : 'select_paytime',
xtype : 'datetimefield',
name : 'secondlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'select_signtime',
xtype : 'datetimefield',
name : 'secondlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '签收人名称',
id : 'select_signname',
xtype : 'textfield',
name : 'secondlevelorder.signname',
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
querysecondlevelorderStore.proxy = new Ext.data.HttpProxy({
url : 'secondlevelorder_findInfoByConditions.action?'
+'secondlevelorder.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&secondlevelorder.secondlevelorderNo='
+ Ext.getCmp('select_secondlevelorderNo').getValue()
+'&secondlevelorder.idStore='
+ Ext.getCmp('select_idStore').getValue()
+'&secondlevelorder.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&secondlevelorder.creationordertime='
+ Ext.getCmp('select_creationordertime').getValue()
+'&secondlevelorder.orderstatus='
+ Ext.getCmp('select_orderstatus').getValue()
+'&secondlevelorder.arrivaltime='
+ Ext.getCmp('select_arrivaltime').getValue()
+'&secondlevelorder.ts='
+ Ext.getCmp('select_ts').getValue()
+'&secondlevelorder.dr='
+ Ext.getCmp('select_dr').getValue()
+'&secondlevelorder.back1='
+ Ext.getCmp('select_back1').getValue()
+'&secondlevelorder.back2='
+ Ext.getCmp('select_back2').getValue()
+'&secondlevelorder.back3='
+ Ext.getCmp('select_back3').getValue()
+'&secondlevelorder.back4='
+ Ext.getCmp('select_back4').getValue()
+'&secondlevelorder.back5='
+ Ext.getCmp('select_back5').getValue()
+'&secondlevelorder.canceltime='
+ Ext.getCmp('select_canceltime').getValue()
+'&secondlevelorder.paytime='
+ Ext.getCmp('select_paytime').getValue()
+'&secondlevelorder.deliverytime='
+ Ext.getCmp('select_deliverytime').getValue()
+'&secondlevelorder.signtime='
+ Ext.getCmp('select_signtime').getValue()
+'&secondlevelorder.orderprice='
+ Ext.getCmp('select_orderprice').getValue()
+'&secondlevelorder.signname='
+ Ext.getCmp('select_signname').getValue()
});
	querysecondlevelorderStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});