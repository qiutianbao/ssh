

	querysysmsgcontentStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysysmsgcontentGrid = new Ext.grid.GridPanel({
		store : querysysmsgcontentStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '系统管理-系统消息内容表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '系统消息主键',
dataIndex : 'idSysmessge',
width : 120 
}
,{
header : '消息内容',
dataIndex : 'msgcontent',
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
header : '子标题',
dataIndex : 'subTitle',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addsysmsgcontent();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysysmsgcontentGrid, querysysmsgcontentStore, "sysmsgcontent_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysysmsgcontentStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'sysmsgcontentGrid',
		items : [selectUnitForm, querysysmsgcontentGrid]
	});
	var divHeight = document.getElementById('sysmsgcontentGrid').offsetHeight;
	var divWidth = document.getElementById('sysmsgcontentGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysysmsgcontentGrid.setWidth(showQueryPanel.getWidth());
	querysysmsgcontentGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	