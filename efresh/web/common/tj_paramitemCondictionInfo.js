
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
fieldLabel : '',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'tj_paramitem.idNumber',
width : '80%'
}
,{
fieldLabel : '参数标识',
id : 'select_PARAMETERID',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERID',
width : '80%'
}
,{
fieldLabel : '参数简称',
id : 'select_ABNAME',
xtype : 'textfield',
name : 'tj_paramitem.ABNAME',
width : '80%'
}
,{
fieldLabel : '参数说明',
id : 'select_PARAMETERMEMO',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERMEMO',
width : '80%'
}
,{
fieldLabel : '上级参数值',
id : 'select_SP_PARAMVALUE',
xtype : 'textfield',
name : 'tj_paramitem.SP_PARAMVALUE',
width : '80%'
}
,{
fieldLabel : '是否叶子节点',
id : 'select_IF_NODE',
xtype : 'textfield',
name : 'tj_paramitem.IF_NODE',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '参数值',
id : 'select_PARA',
xtype : 'textfield',
name : 'tj_paramitem.PARA',
width : '80%'
}
,{
fieldLabel : '参数名称',
id : 'select_PARAMETERNAME',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERNAME',
width : '80%'
}
,{
fieldLabel : '参数级别',
id : 'select_PARAMLEVEL',
xtype : 'textfield',
name : 'tj_paramitem.PARAMLEVEL',
width : '80%'
}
,{
fieldLabel : '排序编号',
id : 'select_SORTNUM',
xtype : 'numberfield',
name : 'tj_paramitem.SORTNUM',
width : '80%'
}
,{
fieldLabel : '上级参数标识',
id : 'select_SP_PARAMID',
xtype : 'textfield',
name : 'tj_paramitem.SP_PARAMID',
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
querytj_paramitemStore.proxy = new Ext.data.HttpProxy({
url : 'tj_paramitem_findInfoByConditions.action?'
+'tj_paramitem.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&tj_paramitem.PARA='
+ Ext.getCmp('select_PARA').getValue()
+'&tj_paramitem.PARAMETERID='
+ Ext.getCmp('select_PARAMETERID').getValue()
+'&tj_paramitem.PARAMETERNAME='
+ Ext.getCmp('select_PARAMETERNAME').getValue()
+'&tj_paramitem.ABNAME='
+ Ext.getCmp('select_ABNAME').getValue()
+'&tj_paramitem.PARAMLEVEL='
+ Ext.getCmp('select_PARAMLEVEL').getValue()
+'&tj_paramitem.PARAMETERMEMO='
+ Ext.getCmp('select_PARAMETERMEMO').getValue()
+'&tj_paramitem.SORTNUM='
+ Ext.getCmp('select_SORTNUM').getValue()
+'&tj_paramitem.SP_PARAMVALUE='
+ Ext.getCmp('select_SP_PARAMVALUE').getValue()
+'&tj_paramitem.SP_PARAMID='
+ Ext.getCmp('select_SP_PARAMID').getValue()
+'&tj_paramitem.IF_NODE='
+ Ext.getCmp('select_IF_NODE').getValue()
});
	querytj_paramitemStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});