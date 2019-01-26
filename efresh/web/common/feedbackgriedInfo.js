

	queryfeedbackStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryfeedbackGrid = new Ext.grid.GridPanel({
		store : queryfeedbackStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '系统管理-用户反馈表',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '反馈人主键，就是用户主键',
dataIndex : 'idFeedback',
width : 120 
}
,{
header : '反馈时间',
dataIndex : 'feedbacktime',
width : 120 
}
,{
header : '反馈内容',
dataIndex : 'feedcontent',
width : 120 
}
,{
header : '回复内容',
dataIndex : 'replycontent',
width : 120 
}
,{
header : '回复人主键，就是用户主键',
dataIndex : 'idReply',
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
				addfeedback();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryfeedbackGrid, queryfeedbackStore, "feedback_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryfeedbackStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'feedbackGrid',
		items : [selectUnitForm, queryfeedbackGrid]
	});
	var divHeight = document.getElementById('feedbackGrid').offsetHeight;
	var divWidth = document.getElementById('feedbackGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryfeedbackGrid.setWidth(showQueryPanel.getWidth());
	queryfeedbackGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	