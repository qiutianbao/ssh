

	querytradingrecordsStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querytradingrecordsGrid = new Ext.grid.GridPanel({
		store : querytradingrecordsStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '支付管理-用户账户交易记录表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
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
header : '订单主键，充值也是订单，购买商品也是订单，',
dataIndex : 'idOrder',
width : 120 
}
,{
header : '支付方式表主键',
dataIndex : 'idPayway',
width : 120 
}
,{
header : '交易金额',
dataIndex : 'tradingamount',
width : 120 
}
,{
header : '交易类型，0=充值，1=支出，2=退款，3=转出',
dataIndex : 'tradingtype',
width : 120 
}
,{
header : '交易时间',
dataIndex : 'tradingtime',
width : 120 
}
,{
header : '交易单号',
dataIndex : 'tradingNo',
width : 120 
}
,{
header : '备注',
dataIndex : 'note',
width : 120 
}
,{
header : '交易状态，0=待审核，1=支付成功，2=支付失败',
dataIndex : 'tradingstatus',
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
				addtradingrecords();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querytradingrecordsGrid, querytradingrecordsStore, "tradingrecords_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querytradingrecordsStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'tradingrecordsGrid',
		items : [selectUnitForm, querytradingrecordsGrid]
	});
	var divHeight = document.getElementById('tradingrecordsGrid').offsetHeight;
	var divWidth = document.getElementById('tradingrecordsGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querytradingrecordsGrid.setWidth(showQueryPanel.getWidth());
	querytradingrecordsGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	