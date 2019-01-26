

	querysubstationStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysubstationGrid = new Ext.grid.GridPanel({
		store : querysubstationStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '系统管理-分站表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : 'ip地址',
dataIndex : 'ipaddress',
width : 120 
}
,{
header : '数据库名称',
dataIndex : 'dbname',
width : 120 
}
,{
header : '端口号',
dataIndex : 'portNo',
width : 120 
}
,{
header : '用户名',
dataIndex : 'username',
width : 120 
}
,{
header : '密码',
dataIndex : 'password',
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
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addsubstation();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysubstationGrid, querysubstationStore, "substation_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysubstationStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'substationGrid',
		items : [selectUnitForm, querysubstationGrid]
	});
	var divHeight = document.getElementById('substationGrid').offsetHeight;
	var divWidth = document.getElementById('substationGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysubstationGrid.setWidth(showQueryPanel.getWidth());
	querysubstationGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	