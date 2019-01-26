
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
fieldLabel : '主键',
id : 'select_ID',
xtype : 'textfield',
name : 'right_menu.ID',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'select_THE_SORT',
xtype : 'textfield',
name : 'right_menu.THE_SORT',
width : '80%'
}
,{
fieldLabel : '说明',
id : 'select_DESCN',
xtype : 'textfield',
name : 'right_menu.DESCN',
width : '80%'
}
,{
fieldLabel : '图片url',
id : 'select_IMAGE',
xtype : 'textfield',
name : 'right_menu.IMAGE',
width : '80%'
}
,{
fieldLabel : '是否删除',
id : 'select_DELETESTATE',
xtype : 'textfield',
name : 'right_menu.DELETESTATE',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '资源id',
id : 'select_RESOURCE_ID',
xtype : 'textfield',
name : 'right_menu.RESOURCE_ID',
width : '80%'
}
,{
fieldLabel : '菜单url',
id : 'select_QTIP',
xtype : 'textfield',
name : 'right_menu.QTIP',
width : '80%'
}
,{
fieldLabel : '菜单名称',
id : 'select_NAME',
xtype : 'textfield',
name : 'right_menu.NAME',
width : '80%'
}
,{
fieldLabel : '父节点',
id : 'select_PARENT_ID',
xtype : 'textfield',
name : 'right_menu.PARENT_ID',
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
queryright_menuStore.proxy = new Ext.data.HttpProxy({
url : 'right_menu_findInfoByConditions.action?'
+'right_menu.ID='
+ Ext.getCmp('select_ID').getValue()
+'&right_menu.RESOURCE_ID='
+ Ext.getCmp('select_RESOURCE_ID').getValue()
+'&right_menu.THE_SORT='
+ Ext.getCmp('select_THE_SORT').getValue()
+'&right_menu.QTIP='
+ Ext.getCmp('select_QTIP').getValue()
+'&right_menu.DESCN='
+ Ext.getCmp('select_DESCN').getValue()
+'&right_menu.NAME='
+ Ext.getCmp('select_NAME').getValue()
+'&right_menu.IMAGE='
+ Ext.getCmp('select_IMAGE').getValue()
+'&right_menu.PARENT_ID='
+ Ext.getCmp('select_PARENT_ID').getValue()
+'&right_menu.DELETESTATE='
+ Ext.getCmp('select_DELETESTATE').getValue()
});
	queryright_menuStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});