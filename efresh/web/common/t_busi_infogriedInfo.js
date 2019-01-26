

	queryt_busi_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_busi_infoGrid = new Ext.grid.GridPanel({
		store : queryt_busi_infoStore,
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
header : '业务类型',
dataIndex : 'busi_type',
width : 120 
}
,{
header : '序号',
dataIndex : 'ser_no',
width : 120 
}
,{
header : '主题',
dataIndex : 'busi_head',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_busi_info();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_busi_infoGrid, queryt_busi_infoStore, "t_busi_info_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_busi_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_busi_infoGrid',
		items : [selectUnitForm, queryt_busi_infoGrid]
	});
	var divHeight = document.getElementById('t_busi_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_busi_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_busi_infoGrid.setWidth(showQueryPanel.getWidth());
	queryt_busi_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	