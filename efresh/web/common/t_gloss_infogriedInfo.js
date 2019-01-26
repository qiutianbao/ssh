

	queryt_gloss_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_gloss_infoGrid = new Ext.grid.GridPanel({
		store : queryt_gloss_infoStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '术语编码',
dataIndex : 'idnumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '术语类型',
dataIndex : 'gloss_type',
width : 120 
}
,{
header : '序号',
dataIndex : 'ser_no',
width : 120 
}
,{
header : '术语内容',
dataIndex : 'gloss_body',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_gloss_info();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_gloss_infoGrid, queryt_gloss_infoStore, "t_gloss_info_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_gloss_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_gloss_infoGrid',
		items : [selectUnitForm, queryt_gloss_infoGrid]
	});
	var divHeight = document.getElementById('t_gloss_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_gloss_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_gloss_infoGrid.setWidth(showQueryPanel.getWidth());
	queryt_gloss_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	