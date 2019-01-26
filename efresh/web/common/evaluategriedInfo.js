

	queryevaluateStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryevaluateGrid = new Ext.grid.GridPanel({
		store : queryevaluateStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '系统管理-用户评价表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '评价人主键，就是用户主键',
dataIndex : 'idEvaluate',
width : 120 
}
,{
header : '订单编号',
dataIndex : 'orderNo',
width : 120 
}
,{
header : '评价内容',
dataIndex : 'evaluatecontent',
width : 120 
}
,{
header : '评价时间',
dataIndex : 'evaluatetime',
width : 120 
}
,{
header : '回复人',
dataIndex : 'idReply',
width : 120 
}
,{
header : '回复内容',
dataIndex : 'replycontent',
width : 120 
}
,{
header : '回复时间',
dataIndex : 'replytime',
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
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addevaluate();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryevaluateGrid, queryevaluateStore, "evaluate_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryevaluateStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'evaluateGrid',
		items : [selectUnitForm, queryevaluateGrid]
	});
	var divHeight = document.getElementById('evaluateGrid').offsetHeight;
	var divWidth = document.getElementById('evaluateGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryevaluateGrid.setWidth(showQueryPanel.getWidth());
	queryevaluateGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	