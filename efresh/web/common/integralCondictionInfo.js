
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
fieldLabel : '档案管理-积分表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'integral.idNumber',
width : '80%'
}
,{
fieldLabel : '获得积分',
id : 'select_integral',
xtype : 'numberfield',
name : 'integral.integral',
width : '80%'
}
,{
fieldLabel : '清除时间',
id : 'select_cleartime',
xtype : 'datetimefield',
name : 'integral.cleartime',
anchor : '95%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'integral.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'integral.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'integral.back4',
width : '80%'
}
,{
fieldLabel : '有效期结束时间',
id : 'select_validtime',
xtype : 'datetimefield',
name : 'integral.validtime',
anchor : '95%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'integral.idUser',
width : '80%'
}
,{
fieldLabel : '获得时间',
id : 'select_gettime',
xtype : 'datetimefield',
name : 'integral.gettime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'integral.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'integral.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'integral.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'textfield',
name : 'integral.back5',
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
queryintegralStore.proxy = new Ext.data.HttpProxy({
url : 'integral_findInfoByConditions.action?'
+'integral.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&integral.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&integral.integral='
+ Ext.getCmp('select_integral').getValue()
+'&integral.gettime='
+ Ext.getCmp('select_gettime').getValue()
+'&integral.cleartime='
+ Ext.getCmp('select_cleartime').getValue()
+'&integral.ts='
+ Ext.getCmp('select_ts').getValue()
+'&integral.dr='
+ Ext.getCmp('select_dr').getValue()
+'&integral.back1='
+ Ext.getCmp('select_back1').getValue()
+'&integral.back2='
+ Ext.getCmp('select_back2').getValue()
+'&integral.back3='
+ Ext.getCmp('select_back3').getValue()
+'&integral.back4='
+ Ext.getCmp('select_back4').getValue()
+'&integral.back5='
+ Ext.getCmp('select_back5').getValue()
+'&integral.validtime='
+ Ext.getCmp('select_validtime').getValue()
});
	queryintegralStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});