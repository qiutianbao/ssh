

	querysysmessageStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysysmessageGrid = new Ext.grid.GridPanel({
		store : querysysmessageStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '系统管理-系统消息表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '标题',
dataIndex : 'msgtitle',
width : 120 
}
,{
header : '发布时间',
dataIndex : 'releasetime',
width : 120 
}
,{
header : '公告类型',
dataIndex : 'msgtype',
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
				addsysmessage();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysysmessageGrid, querysysmessageStore, "sysmessage_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysysmessageStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'sysmessageGrid',
		items : [selectUnitForm, querysysmessageGrid]
	});
	var divHeight = document.getElementById('sysmessageGrid').offsetHeight;
	var divWidth = document.getElementById('sysmessageGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysysmessageGrid.setWidth(showQueryPanel.getWidth());
	querysysmessageGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	