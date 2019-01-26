

	queryrebatewayStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryrebatewayGrid = new Ext.grid.GridPanel({
		store : queryrebatewayStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '支付管理',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '充值金额',
dataIndex : 'suppMoney',
width : 120 
}
,{
header : '返利方式',
dataIndex : 'rebateway',
width : 120 
}
,{
header : '返利比例下限',
dataIndex : 'proportionStart',
width : 120 
}
,{
header : '返利比例上限',
dataIndex : 'proportionEnd',
width : 120 
}
,{
header : '返利金额上限',
dataIndex : 'upperlimit',
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
				addrebateway();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryrebatewayGrid, queryrebatewayStore, "rebateway_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryrebatewayStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'rebatewayGrid',
		items : [selectUnitForm, queryrebatewayGrid]
	});
	var divHeight = document.getElementById('rebatewayGrid').offsetHeight;
	var divWidth = document.getElementById('rebatewayGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryrebatewayGrid.setWidth(showQueryPanel.getWidth());
	queryrebatewayGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	