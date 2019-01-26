

	queryt_excel_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_excel_infoGrid = new Ext.grid.GridPanel({
		store : queryt_excel_infoStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '主键',
dataIndex : 'idnumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '产品编号',
dataIndex : 'product_no',
width : 120 
}
,{
header : '产品名称',
dataIndex : 'para_name',
width : 120 
}
,{
header : 'Y坐标',
dataIndex : 'y_site',
width : 120 
}
,{
header : 'X坐标',
dataIndex : 'x_site',
width : 120 
}
,{
header : '第几格',
dataIndex : 'x_tab',
width : 120 
}
,{
header : '字段类型',
dataIndex : 'type',
width : 120 
}
,{
header : '字段数值',
dataIndex : 'exc_value',
width : 120 
}
,{
header : '备注说明',
dataIndex : 'back1',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_excel_info();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_excel_infoGrid, queryt_excel_infoStore, "t_excel_info_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_excel_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_excel_infoGrid',
		items : [selectUnitForm, queryt_excel_infoGrid]
	});
	var divHeight = document.getElementById('t_excel_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_excel_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_excel_infoGrid.setWidth(showQueryPanel.getWidth());
	queryt_excel_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	