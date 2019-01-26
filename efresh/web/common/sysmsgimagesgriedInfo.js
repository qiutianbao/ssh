

	querysysmsgimagesStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysysmsgimagesGrid = new Ext.grid.GridPanel({
		store : querysysmsgimagesStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '系统管理-系统消息图片表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '消息内容表主键',
dataIndex : 'idSysmsgconent',
width : 120 
}
,{
header : '图片名称',
dataIndex : 'msgimgname',
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
header : '预留字段',
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
				addsysmsgimages();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysysmsgimagesGrid, querysysmsgimagesStore, "sysmsgimages_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysysmsgimagesStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'sysmsgimagesGrid',
		items : [selectUnitForm, querysysmsgimagesGrid]
	});
	var divHeight = document.getElementById('sysmsgimagesGrid').offsetHeight;
	var divWidth = document.getElementById('sysmsgimagesGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysysmsgimagesGrid.setWidth(showQueryPanel.getWidth());
	querysysmsgimagesGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	