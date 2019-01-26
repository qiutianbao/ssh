

	querycommodityStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommodityGrid = new Ext.grid.GridPanel({
		store : querycommodityStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品管理-商品表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '商品名称',
dataIndex : 'commodityname',
width : 120 
}
,{
header : '商品编号',
dataIndex : 'commoditycode',
width : 120 
}
,{
header : '店铺主键',
dataIndex : 'idStore',
width : 120 
}
,{
header : '商品展示图片名称',
dataIndex : 'imagename',
width : 120 
}
,{
header : '商品类别主键',
dataIndex : 'idCategory',
width : 120 
}
,{
header : '商品状态，0=上架，1=下架',
dataIndex : 'status',
width : 120 
}
,{
header : '商品品牌表主键',
dataIndex : 'idBrand',
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
				addcommodity();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommodityGrid, querycommodityStore, "commodity_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycommodityStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commodityGrid',
		items : [selectUnitForm, querycommodityGrid]
	});
	var divHeight = document.getElementById('commodityGrid').offsetHeight;
	var divWidth = document.getElementById('commodityGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommodityGrid.setWidth(showQueryPanel.getWidth());
	querycommodityGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	