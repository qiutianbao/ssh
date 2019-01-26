

	querycommoditypriceStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommoditypriceGrid = new Ext.grid.GridPanel({
		store : querycommoditypriceStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品管理-商品价格表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '开始时间',
dataIndex : 'starttime',
width : 120 
}
,{
header : '结束时间',
dataIndex : 'endtime',
width : 120 
}
,{
header : '单价',
dataIndex : 'price',
width : 120 
}
,{
header : '商品表主键',
dataIndex : 'idCommodity',
width : 120 
}
,{
header : '商品级别表主键',
dataIndex : 'idLevel',
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
				addcommodityprice();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommoditypriceGrid, querycommoditypriceStore, "commodityprice_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycommoditypriceStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commoditypriceGrid',
		items : [selectUnitForm, querycommoditypriceGrid]
	});
	var divHeight = document.getElementById('commoditypriceGrid').offsetHeight;
	var divWidth = document.getElementById('commoditypriceGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommoditypriceGrid.setWidth(showQueryPanel.getWidth());
	querycommoditypriceGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	