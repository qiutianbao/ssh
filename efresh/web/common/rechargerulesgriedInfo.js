

	queryrechargerulesStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryrechargerulesGrid = new Ext.grid.GridPanel({
		store : queryrechargerulesStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '概述',
dataIndex : 'summary',
width : 120 
}
,{
header : '小标题',
dataIndex : 'title',
width : 120 
}
,{
header : '内容',
dataIndex : 'content',
width : 120 
}
,{
header : '规则类型',
dataIndex : 'ruleType',
width : 120 
}
,{
header : '状态',
dataIndex : 'stats',
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
header : '备用字段1',
dataIndex : 'back1',
width : 120 
}
,{
header : '备用字段2',
dataIndex : 'back2',
width : 120 
}
,{
header : '备用字段3',
dataIndex : 'back3',
width : 120 
}
,{
header : '备用字段4',
dataIndex : 'back4',
width : 120 
}
,{
header : '备用字段5',
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
				addrechargerules();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryrechargerulesGrid, queryrechargerulesStore, "rechargerules_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryrechargerulesStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'rechargerulesGrid',
		items : [selectUnitForm, queryrechargerulesGrid]
	});
	var divHeight = document.getElementById('rechargerulesGrid').offsetHeight;
	var divWidth = document.getElementById('rechargerulesGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryrechargerulesGrid.setWidth(showQueryPanel.getWidth());
	queryrechargerulesGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	