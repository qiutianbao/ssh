

	querysub_integralruleStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysub_integralruleGrid = new Ext.grid.GridPanel({
		store : querysub_integralruleStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '档案管理-积分规则子表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '积分规则主表主键',
dataIndex : 'idIntegralrule',
width : 120 
}
,{
header : '标题',
dataIndex : 'title',
width : 120 
}
,{
header : '描述',
dataIndex : 'note',
width : 120 
}
,{
header : '序号',
dataIndex : 'serial',
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
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addsub_integralrule();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysub_integralruleGrid, querysub_integralruleStore, "sub_integralrule_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysub_integralruleStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'sub_integralruleGrid',
		items : [selectUnitForm, querysub_integralruleGrid]
	});
	var divHeight = document.getElementById('sub_integralruleGrid').offsetHeight;
	var divWidth = document.getElementById('sub_integralruleGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysub_integralruleGrid.setWidth(showQueryPanel.getWidth());
	querysub_integralruleGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	