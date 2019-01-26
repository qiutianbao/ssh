

	queryright_menuStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryright_menuGrid = new Ext.grid.GridPanel({
		store : queryright_menuStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '主键',
dataIndex : 'ID',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '资源id',
dataIndex : 'RESOURCE_ID',
width : 120 
}
,{
header : '序号',
dataIndex : 'THE_SORT',
width : 120 
}
,{
header : '菜单url',
dataIndex : 'QTIP',
width : 120 
}
,{
header : '说明',
dataIndex : 'DESCN',
width : 120 
}
,{
header : '菜单名称',
dataIndex : 'NAME',
width : 120 
}
,{
header : '图片url',
dataIndex : 'IMAGE',
width : 120 
}
,{
header : '父节点',
dataIndex : 'PARENT_ID',
width : 120 
}
,{
header : '是否删除',
dataIndex : 'DELETESTATE',
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
	