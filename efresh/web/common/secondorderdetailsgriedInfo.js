

	querysecondorderdetailsStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysecondorderdetailsGrid = new Ext.grid.GridPanel({
		store : querysecondorderdetailsStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '订单管理-归集后的二级订单详情表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '一级订单主键',
dataIndex : 'idFirstorder',
width : 120 
}
,{
header : '二级订单主键',
dataIndex : 'idSecondorder',
width : 120 
}
,{
header : '二级订单编号',
dataIndex : 'secondorderNo',
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
				addsecondorderdetails();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysecondorderdetailsGrid, querysecondorderdetailsStore, "secondorderdetails_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysecondorderdetailsStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'secondorderdetailsGrid',
		items : [selectUnitForm, querysecondorderdetailsGrid]
	});
	var divHeight = document.getElementById('secondorderdetailsGrid').offsetHeight;
	var divWidth = document.getElementById('secondorderdetailsGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysecondorderdetailsGrid.setWidth(showQueryPanel.getWidth());
	querysecondorderdetailsGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	