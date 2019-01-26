

	queryaccountrevenueStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryaccountrevenueGrid = new Ext.grid.GridPanel({
		store : queryaccountrevenueStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '支付管理',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '收益金额',
dataIndex : 'revenueamount',
width : 120 
}
,{
header : '收益来源，0=下订单并成功支付，1=充值虚拟货币',
dataIndex : 'revenueaource',
width : 120 
}
,{
header : '用户主键',
dataIndex : 'idUser',
width : 120 
}
,{
header : '账户主键',
dataIndex : 'idUseraccount',
width : 120 
}
,{
header : '用户交易记录表主键',
dataIndex : 'idTradingrecords',
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
				addaccountrevenue();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryaccountrevenueGrid, queryaccountrevenueStore, "accountrevenue_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryaccountrevenueStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'accountrevenueGrid',
		items : [selectUnitForm, queryaccountrevenueGrid]
	});
	var divHeight = document.getElementById('accountrevenueGrid').offsetHeight;
	var divWidth = document.getElementById('accountrevenueGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryaccountrevenueGrid.setWidth(showQueryPanel.getWidth());
	queryaccountrevenueGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	