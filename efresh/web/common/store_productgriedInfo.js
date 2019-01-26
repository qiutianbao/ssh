

	querystore_productStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querystore_productGrid = new Ext.grid.GridPanel({
		store : querystore_productStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '产地主营产品表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '产地风采表主键',
dataIndex : 'idStoreStyle',
width : 120 
}
,{
header : '主营产品名称',
dataIndex : 'productname',
width : 120 
}
,{
header : '图片名称',
dataIndex : 'imgname',
width : 120 
}
,{
header : '时间戳',
dataIndex : 'ts',
width : 120 
}
,{
header : '删除标志',
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
				addstore_product();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querystore_productGrid, querystore_productStore, "store_product_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querystore_productStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'store_productGrid',
		items : [selectUnitForm, querystore_productGrid]
	});
	var divHeight = document.getElementById('store_productGrid').offsetHeight;
	var divWidth = document.getElementById('store_productGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querystore_productGrid.setWidth(showQueryPanel.getWidth());
	querystore_productGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	