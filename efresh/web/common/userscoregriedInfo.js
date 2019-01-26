

	queryuserscoreStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryuserscoreGrid = new Ext.grid.GridPanel({
		store : queryuserscoreStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '系统管理-用户评分表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '评分人主键',
dataIndex : 'idScore',
width : 120 
}
,{
header : '订单编号',
dataIndex : 'orderNo',
width : 120 
}
,{
header : '商品名称',
dataIndex : 'commodity',
width : 120 
}
,{
header : '产地',
dataIndex : 'originaddress',
width : 120 
}
,{
header : '评分',
dataIndex : 'score',
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
				adduserscore();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryuserscoreGrid, queryuserscoreStore, "userscore_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryuserscoreStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'userscoreGrid',
		items : [selectUnitForm, queryuserscoreGrid]
	});
	var divHeight = document.getElementById('userscoreGrid').offsetHeight;
	var divWidth = document.getElementById('userscoreGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryuserscoreGrid.setWidth(showQueryPanel.getWidth());
	queryuserscoreGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	