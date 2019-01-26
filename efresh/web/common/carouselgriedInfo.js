

	querycarouselStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycarouselGrid = new Ext.grid.GridPanel({
		store : querycarouselStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '首页轮播图表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '序号',
dataIndex : 'serialnumber',
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
,{
header : '预留字段3',
dataIndex : 'back3',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addcarousel();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycarouselGrid, querycarouselStore, "carousel_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycarouselStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'carouselGrid',
		items : [selectUnitForm, querycarouselGrid]
	});
	var divHeight = document.getElementById('carouselGrid').offsetHeight;
	var divWidth = document.getElementById('carouselGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycarouselGrid.setWidth(showQueryPanel.getWidth());
	querycarouselGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	