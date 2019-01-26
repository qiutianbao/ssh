

	querycommodityimagesStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommodityimagesGrid = new Ext.grid.GridPanel({
		store : querycommodityimagesStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品管理-商品图片表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '图片名称',
dataIndex : 'imagename',
width : 120 
}
,{
header : '商品主键',
dataIndex : 'idCommodity',
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
,{
header : '预留字段3',
dataIndex : 'back3',
width : 120 
}
,{
header : '预留字段4',
dataIndex : 'back4',
width : 120 
}
,{
header : '预留字段5',
dataIndex : 'back5',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addcommodityimages();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommodityimagesGrid, querycommodityimagesStore, "commodityimages_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycommodityimagesStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commodityimagesGrid',
		items : [selectUnitForm, querycommodityimagesGrid]
	});
	var divHeight = document.getElementById('commodityimagesGrid').offsetHeight;
	var divWidth = document.getElementById('commodityimagesGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommodityimagesGrid.setWidth(showQueryPanel.getWidth());
	querycommodityimagesGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	