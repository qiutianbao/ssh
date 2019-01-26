

	queryt_info_mgmtStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_info_mgmtGrid = new Ext.grid.GridPanel({
		store : queryt_info_mgmtStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '信息编码',
dataIndex : 'idnumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '信息类型',
dataIndex : 'info_type',
width : 120 
}
,{
header : '信息标题',
dataIndex : 'info_head',
width : 120 
}
,{
header : '信息内容',
dataIndex : 'info_body',
width : 120 
}
,{
header : '附件存储路径',
dataIndex : 'info_path',
width : 120 
}
,{
header : '附件名称',
dataIndex : 'info_name',
width : 120 
}
,{
header : '发布日期',
dataIndex : 'reas_date',
width : 120 
}
,{
header : '发布用户',
dataIndex : 'tlr_no',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_info_mgmt();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_info_mgmtGrid, queryt_info_mgmtStore, "t_info_mgmt_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_info_mgmtStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_info_mgmtGrid',
		items : [selectUnitForm, queryt_info_mgmtGrid]
	});
	var divHeight = document.getElementById('t_info_mgmtGrid').offsetHeight;
	var divWidth = document.getElementById('t_info_mgmtGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_info_mgmtGrid.setWidth(showQueryPanel.getWidth());
	queryt_info_mgmtGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	