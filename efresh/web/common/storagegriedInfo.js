

	querystorageStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querystorageGrid = new Ext.grid.GridPanel({
		store : querystorageStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '仓储物流-入库表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '入库时间',
dataIndex : 'storagetime',
width : 120 
}
,{
header : '商品主键',
dataIndex : 'idCommodity',
width : 120 
}
,{
header : '店铺主键',
dataIndex : 'idStore',
width : 120 
}
,{
header : '入库人主键',
dataIndex : 'idUser',
width : 120 
}
,{
header : '入库数量',
dataIndex : 'storagenum',
width : 120 
}
,{
header : '规格',
dataIndex : 'specifications',
width : 120 
}
,{
header : '单价',
dataIndex : 'price',
width : 120 
}
,{
header : '重量',
dataIndex : 'weight',
width : 120 
}
,{
header : '单位',
dataIndex : 'company',
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
				addstorage();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querystorageGrid, querystorageStore, "storage_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querystorageStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'storageGrid',
		items : [selectUnitForm, querystorageGrid]
	});
	var divHeight = document.getElementById('storageGrid').offsetHeight;
	var divWidth = document.getElementById('storageGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querystorageGrid.setWidth(showQueryPanel.getWidth());
	querystorageGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	