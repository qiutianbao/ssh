

	queryintegralStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryintegralGrid = new Ext.grid.GridPanel({
		store : queryintegralStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '档案管理-积分表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '用户主键',
dataIndex : 'idUser',
width : 120 
}
,{
header : '获得积分',
dataIndex : 'integral',
width : 120 
}
,{
header : '获得时间',
dataIndex : 'gettime',
width : 120 
}
,{
header : '清除时间',
dataIndex : 'cleartime',
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
,{
header : '有效期结束时间',
dataIndex : 'validtime',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addintegral();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryintegralGrid, queryintegralStore, "integral_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryintegralStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'integralGrid',
		items : [selectUnitForm, queryintegralGrid]
	});
	var divHeight = document.getElementById('integralGrid').offsetHeight;
	var divWidth = document.getElementById('integralGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryintegralGrid.setWidth(showQueryPanel.getWidth());
	queryintegralGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	