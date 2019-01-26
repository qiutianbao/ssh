

	querystore_imagesStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querystore_imagesGrid = new Ext.grid.GridPanel({
		store : querystore_imagesStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '产地风采图片表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '风采表主键',
dataIndex : 'idStoreStyle',
width : 120 
}
,{
header : '图片名称',
dataIndex : 'imagename',
width : 120 
}
,{
header : '时间戳',
dataIndex : 'ts',
width : 120 
}
,{
header : '删除标识',
dataIndex : 'dr',
width : 120 
}
,{
header : '预留字段1',
dataIndex : 'back1',
width : 120 
}
,{
header : '预留字段2',
dataIndex : 'back2',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addstore_images();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querystore_imagesGrid, querystore_imagesStore, "store_images_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querystore_imagesStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'store_imagesGrid',
		items : [selectUnitForm, querystore_imagesGrid]
	});
	var divHeight = document.getElementById('store_imagesGrid').offsetHeight;
	var divWidth = document.getElementById('store_imagesGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querystore_imagesGrid.setWidth(showQueryPanel.getWidth());
	querystore_imagesGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	