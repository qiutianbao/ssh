

	querystorebrandStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querystorebrandGrid = new Ext.grid.GridPanel({
		store : querystorebrandStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '店铺品牌表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '品牌名称',
dataIndex : 'brandname',
width : 120 
}
,{
header : '店铺表主键',
dataIndex : 'idStore',
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
				addstorebrand();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querystorebrandGrid, querystorebrandStore, "storebrand_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querystorebrandStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'storebrandGrid',
		items : [selectUnitForm, querystorebrandGrid]
	});
	var divHeight = document.getElementById('storebrandGrid').offsetHeight;
	var divWidth = document.getElementById('storebrandGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querystorebrandGrid.setWidth(showQueryPanel.getWidth());
	querystorebrandGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	