
var queryright_menuStore;			
var queryright_menuGrid;
var addright_menu;
var addright_menuForm;
var addright_menuWin;
var updateright_menu;
var updateright_menuWin;
var updateright_menuForm;
var updateright_menuReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/right_menuView.jsp');
	 queryright_menuStore = new Ext.data.JsonStore({
		url : 'right_menu_findAll.action',
		root : 'right_menuList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
name : 'id',
mapping : 'id'
}
,{
name : 'resource_id',
mapping : 'resource_id'
}
,{
name : 'the_sort',
mapping : 'the_sort'
}
,{
name : 'qtip',
mapping : 'qtip'
}
,{
name : 'descn',
mapping : 'descn'
}
,{
name : 'name',
mapping : 'name'
}
,{
name : 'image',
mapping : 'image'
}
,{
name : 'parent_id',
mapping : 'parent_id'
}
],
		autoLoad : false
		
	});
	
	
	
	
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
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '资源id',
id : 'select_resource_id',
xtype : 'textfield',
name : 'right_menu.resource_id',
width : '80%'
}
,{
fieldLabel : '菜单名称',
id : 'select_name',
xtype : 'textfield',
name : 'right_menu.name',
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
url : 'right_menu_findInfoByConditions.action?right_menu.resource_id='
+ Ext.getCmp('select_resource_id').getValue()
+'&right_menu.name='
+ Ext.getCmp('select_name').getValue()
});
	queryright_menuStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryright_menuStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryright_menuGrid = new Ext.grid.GridPanel({
		store : queryright_menuStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '主键',
dataIndex : 'id',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '资源id',
dataIndex : 'resource_id',
width : 120 
}
,{
header : '序号',
dataIndex : 'the_sort',
width : 120 
}
,{
header : '菜单url',
dataIndex : 'qtip',
width : 120 
}
,{
header : '说明',
dataIndex : 'descn',
width : 120 
}
,{
header : '菜单名称',
dataIndex : 'name',
width : 120 
}
,{
header : '图片url',
dataIndex : 'image',
width : 120 
}
,{
header : '父节点',
dataIndex : 'parent_id',
width : 120 
}
,{
header : '是否删除',
dataIndex : 'deletestate',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addright_menu();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryright_menuGrid, queryright_menuStore, "right_menu_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryright_menuStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'right_menuGrid',
		items : [selectUnitForm, queryright_menuGrid]
	});
	var divHeight = document.getElementById('right_menuGrid').offsetHeight;
	var divWidth = document.getElementById('right_menuGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryright_menuGrid.setWidth(showQueryPanel.getWidth());
	queryright_menuGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addright_menuForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 320, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '主键',
id : 'add_ID',
xtype : 'textfield',
name : 'right_menu.id',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'add_THE_SORT',
xtype : 'textfield',
name : 'right_menu.the_sort',
width : '80%'
}
,{
fieldLabel : '说明',
id : 'add_DESCN',
xtype : 'textfield',
name : 'right_menu.descn',
width : '80%'
}
,{
fieldLabel : '图片url',
id : 'add_IMAGE',
xtype : 'textfield',
name : 'right_menu.image',
width : '80%'
}
,{
fieldLabel : '是否删除',
id : 'add_DELETESTATE',
xtype : 'textfield',
name : 'right_menu.deletestate',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '资源id<font color="red">*</font>',
id : 'add_RESOURCE_ID',
xtype : 'textfield',
name : 'right_menu.resource_id',
width : '80%'
}
,{
fieldLabel : '菜单url<font color="red">*</font>',
id : 'add_QTIP',
xtype : 'textfield',
name : 'right_menu.qtip',
width : '80%'
}
,{
fieldLabel : '菜单名称<font color="red">*</font>',
id : 'add_NAME',
xtype : 'textfield',
name : 'right_menu.name',
width : '80%'
}
,{
fieldLabel : '父节点',
id : 'add_PARENT_ID',
xtype : 'textfield',
name : 'right_menu.parent_id',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addright_menuForm, "right_menu_addNewInfo.action", queryright_menuStore, "添加信息")
				addright_menuWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addright_menuWin.hide();
				addright_menuForm.form.reset();
			}
		}]

	});

	addright_menuWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addright_menuForm
	});

	addright_menu = function() {
		addright_menuWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updateright_menuReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'right_menu.ID',
mapping : 'ID'
}
,{
name : 'right_menu.RESOURCE_ID',
mapping : 'RESOURCE_ID'
}
,{
name : 'right_menu.THE_SORT',
mapping : 'THE_SORT'
}
,{
name : 'right_menu.QTIP',
mapping : 'QTIP'
}
,{
name : 'right_menu.DESCN',
mapping : 'DESCN'
}
,{
name : 'right_menu.NAME',
mapping : 'NAME'
}
,{
name : 'right_menu.IMAGE',
mapping : 'IMAGE'
}
,{
name : 'right_menu.PARENT_ID',
mapping : 'PARENT_ID'
}
,{
name : 'right_menu.DELETESTATE',
mapping : 'DELETESTATE'
}
]
	);
		
	updateright_menuForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateright_menuReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '主键',
id : 'uppdate_ID',
xtype : 'textfield',
name : 'right_menu.id',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'uppdate_THE_SORT',
xtype : 'textfield',
name : 'right_menu.the_sort',
width : '80%'
}
,{
fieldLabel : '说明',
id : 'uppdate_DESCN',
xtype : 'textfield',
name : 'right_menu.descn',
width : '80%'
}
,{
fieldLabel : '图片url',
id : 'uppdate_IMAGE',
xtype : 'textfield',
name : 'right_menu.image',
width : '80%'
}
,{
fieldLabel : '是否删除',
id : 'uppdate_DELETESTATE',
xtype : 'textfield',
name : 'right_menu.deletestate',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '资源id',
id : 'uppdate_RESOURCE_ID',
xtype : 'textfield',
name : 'right_menu.resource_id',
width : '80%'
}
,{
fieldLabel : '菜单url',
id : 'uppdate_QTIP',
xtype : 'textfield',
name : 'right_menu.qtip',
width : '80%'
}
,{
fieldLabel : '菜单名称',
id : 'uppdate_NAME',
xtype : 'textfield',
name : 'right_menu.name',
width : '80%'
}
,{
fieldLabel : '父节点',
id : 'uppdate_PARENT_ID',
xtype : 'textfield',
name : 'right_menu.parent_id',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updateright_menuForm, "right_menu_update.action", queryright_menuStore, "修改信息")
				updateright_menuWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateright_menuWin.hide();
				updateright_menuForm.form.reset();
			}
		}]
	});

	updateright_menuWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateright_menuForm
	});

	update = function() {
		_record = queryright_menuGrid.getSelectionModel().getSelected();
		flag = queryright_menuGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateright_menuWin.show();
					
			updateright_menuForm.getForm().load({
				url : 'right_menu_findById.action?right_menu.idNumber='+ _record.get('idNumber'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
	};






	
	// 加载页面后默认焦点
 });
 
