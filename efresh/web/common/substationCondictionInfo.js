
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
fieldLabel : '系统管理-分站表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'substation.idNumber',
width : '80%'
}
,{
fieldLabel : '数据库名称',
id : 'select_dbname',
xtype : 'textfield',
name : 'substation.dbname',
width : '80%'
}
,{
fieldLabel : '用户名',
id : 'select_username',
xtype : 'textfield',
name : 'substation.username',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'substation.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'substation.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'numberfield',
name : 'substation.back3',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : 'ip地址',
id : 'select_ipaddress',
xtype : 'textfield',
name : 'substation.ipaddress',
width : '80%'
}
,{
fieldLabel : '端口号',
id : 'select_portNo',
xtype : 'textfield',
name : 'substation.portNo',
width : '80%'
}
,{
fieldLabel : '密码',
id : 'select_password',
xtype : 'textfield',
name : 'substation.password',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'substation.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'substation.back2',
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
querysubstationStore.proxy = new Ext.data.HttpProxy({
url : 'substation_findInfoByConditions.action?'
+'substation.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&substation.ipaddress='
+ Ext.getCmp('select_ipaddress').getValue()
+'&substation.dbname='
+ Ext.getCmp('select_dbname').getValue()
+'&substation.portNo='
+ Ext.getCmp('select_portNo').getValue()
+'&substation.username='
+ Ext.getCmp('select_username').getValue()
+'&substation.password='
+ Ext.getCmp('select_password').getValue()
+'&substation.ts='
+ Ext.getCmp('select_ts').getValue()
+'&substation.dr='
+ Ext.getCmp('select_dr').getValue()
+'&substation.back1='
+ Ext.getCmp('select_back1').getValue()
+'&substation.back2='
+ Ext.getCmp('select_back2').getValue()
+'&substation.back3='
+ Ext.getCmp('select_back3').getValue()
});
	querysubstationStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});