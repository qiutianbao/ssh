

	queryintegralexchangeStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryintegralexchangeGrid = new Ext.grid.GridPanel({
		store : queryintegralexchangeStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '档案管理-积分兑换表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '兑换人主键',
dataIndex : 'idUser',
width : 120 
}
,{
header : '兑换积分',
dataIndex : 'spendintegral',
width : 120 
}
,{
header : '兑换时间',
dataIndex : 'exchangetime',
width : 120 
}
,{
header : '兑换物品主键',
dataIndex : 'idCommodity',
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
,{
header : '预留字段3',
dataIndex : 'back3',
width : 120 
}
,{
header : '预留字段4',
dataIndex : 'back4',
width : 120 
}
,{
header : '预留字段5',
dataIndex : 'back5',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addintegralexchange();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryintegralexchangeGrid, queryintegralexchangeStore, "integralexchange_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryintegralexchangeStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'integralexchangeGrid',
		items : [selectUnitForm, queryintegralexchangeGrid]
	});
	var divHeight = document.getElementById('integralexchangeGrid').offsetHeight;
	var divWidth = document.getElementById('integralexchangeGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryintegralexchangeGrid.setWidth(showQueryPanel.getWidth());
	queryintegralexchangeGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	