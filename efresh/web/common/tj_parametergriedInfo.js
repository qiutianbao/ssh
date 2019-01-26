

	querytj_parameterStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querytj_parameterGrid = new Ext.grid.GridPanel({
		store : querytj_parameterStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '参数标识',
dataIndex : 'PARAMETERID',
width : 120 
}
,{
header : '参数说明',
dataIndex : 'PARAMETERMEMO',
width : 120 
}
,{
header : '参数类型',
dataIndex : 'PARAMETYPE',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addtj_parameter();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querytj_parameterGrid, querytj_parameterStore, "tj_parameter_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querytj_parameterStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'tj_parameterGrid',
		items : [selectUnitForm, querytj_parameterGrid]
	});
	var divHeight = document.getElementById('tj_parameterGrid').offsetHeight;
	var divWidth = document.getElementById('tj_parameterGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querytj_parameterGrid.setWidth(showQueryPanel.getWidth());
	querytj_parameterGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	