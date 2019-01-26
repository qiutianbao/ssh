

	queryt_available_noStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_available_noGrid = new Ext.grid.GridPanel({
		store : queryt_available_noStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '标识号',
dataIndex : 'idnumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '机构码',
dataIndex : 'inst_no',
width : 120 
}
,{
header : '名称',
dataIndex : 'name',
width : 120 
}
,{
header : '当前可用编号',
dataIndex : 'crt_no',
width : 120 
}
,{
header : '起始编号',
dataIndex : 'bgn_no',
width : 120 
}
,{
header : '间隔',
dataIndex : 'inv',
width : 120 
}
,{
header : '最大编号',
dataIndex : 'max_no',
width : 120 
}
,{
header : '预警比例',
dataIndex : 'warn_rate',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_available_no();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_available_noGrid, queryt_available_noStore, "t_available_no_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_available_noStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_available_noGrid',
		items : [selectUnitForm, queryt_available_noGrid]
	});
	var divHeight = document.getElementById('t_available_noGrid').offsetHeight;
	var divWidth = document.getElementById('t_available_noGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_available_noGrid.setWidth(showQueryPanel.getWidth());
	queryt_available_noGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	