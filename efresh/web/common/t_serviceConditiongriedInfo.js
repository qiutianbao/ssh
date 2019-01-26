

	queryt_serviceConditionStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_serviceConditionGrid = new Ext.grid.GridPanel({
		store : queryt_serviceConditionStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '支行编码',
dataIndex : 'inst_no',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '支行名称',
dataIndex : 'inst_name',
width : 120 
}
,{
header : '网点编码',
dataIndex : 'brno',
width : 120 
}
,{
header : '网点名称',
dataIndex : 'brno_name',
width : 120 
}
,{
header : '点击次数',
dataIndex : 'cn',
width : 120 
}
,{
header : '开始日期',
dataIndex : 'startday',
width : 120 
}
,{
header : '结束日期',
dataIndex : 'endday',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_serviceCondition();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_serviceConditionGrid, queryt_serviceConditionStore, "t_serviceCondition_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_serviceConditionStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_serviceConditionGrid',
		items : [selectUnitForm, queryt_serviceConditionGrid]
	});
	var divHeight = document.getElementById('t_serviceConditionGrid').offsetHeight;
	var divWidth = document.getElementById('t_serviceConditionGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_serviceConditionGrid.setWidth(showQueryPanel.getWidth());
	queryt_serviceConditionGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	