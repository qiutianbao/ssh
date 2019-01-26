

	queryadvisoryStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryadvisoryGrid = new Ext.grid.GridPanel({
		store : queryadvisoryStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '系统管理-留言咨询表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '咨询人主键',
dataIndex : 'idAdvisory',
width : 120 
}
,{
header : '咨询时间',
dataIndex : 'advtime',
width : 120 
}
,{
header : '咨询内容',
dataIndex : 'advcontent',
width : 120 
}
,{
header : '回复人主键',
dataIndex : 'idReply',
width : 120 
}
,{
header : '回复内容',
dataIndex : 'replycontent',
width : 120 
}
,{
header : '回复时间',
dataIndex : 'replytime',
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
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addadvisory();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryadvisoryGrid, queryadvisoryStore, "advisory_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryadvisoryStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'advisoryGrid',
		items : [selectUnitForm, queryadvisoryGrid]
	});
	var divHeight = document.getElementById('advisoryGrid').offsetHeight;
	var divWidth = document.getElementById('advisoryGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryadvisoryGrid.setWidth(showQueryPanel.getWidth());
	queryadvisoryGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	