

	queryt_inst_mgmtStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_inst_mgmtGrid = new Ext.grid.GridPanel({
		store : queryt_inst_mgmtStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '机构码',
dataIndex : 'idnumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '机构种类',
dataIndex : 'inst_type',
width : 120 
}
,{
header : '机构名称',
dataIndex : 'inst_name',
width : 120 
}
,{
header : '所属上级机构',
dataIndex : 'up_inst_no',
width : 120 
}
,{
header : '地址',
dataIndex : 'address ',
width : 120 
}
,{
header : '电话',
dataIndex : 'phone',
width : 120 
}
,{
header : '联系人',
dataIndex : 'contact_psn',
width : 120 
}
,{
header : '机构状态',
dataIndex : 'inst_busn_stat',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_inst_mgmt();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_inst_mgmtGrid, queryt_inst_mgmtStore, "t_inst_mgmt_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_inst_mgmtStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_inst_mgmtGrid',
		items : [selectUnitForm, queryt_inst_mgmtGrid]
	});
	var divHeight = document.getElementById('t_inst_mgmtGrid').offsetHeight;
	var divWidth = document.getElementById('t_inst_mgmtGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_inst_mgmtGrid.setWidth(showQueryPanel.getWidth());
	queryt_inst_mgmtGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	