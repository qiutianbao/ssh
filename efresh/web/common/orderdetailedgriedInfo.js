

	queryorderdetailedStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryorderdetailedGrid = new Ext.grid.GridPanel({
		store : queryorderdetailedStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '订单管理-商品清单表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '订单表主键',
dataIndex : 'idOrderNo',
width : 120 
}
,{
header : '商品主键',
dataIndex : 'idCommodity',
width : 120 
}
,{
header : '购买数量',
dataIndex : 'buynumber',
width : 120 
}
,{
header : '购买级别主键',
dataIndex : 'idLevel',
width : 120 
}
,{
header : '商品单价',
dataIndex : 'buyprice',
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
				addorderdetailed();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryorderdetailedGrid, queryorderdetailedStore, "orderdetailed_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryorderdetailedStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'orderdetailedGrid',
		items : [selectUnitForm, queryorderdetailedGrid]
	});
	var divHeight = document.getElementById('orderdetailedGrid').offsetHeight;
	var divWidth = document.getElementById('orderdetailedGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryorderdetailedGrid.setWidth(showQueryPanel.getWidth());
	queryorderdetailedGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	