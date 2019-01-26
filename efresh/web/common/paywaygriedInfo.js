

	querypaywayStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querypaywayGrid = new Ext.grid.GridPanel({
		store : querypaywayStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '支付管理-支付方式表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '支付方式编码，0=e币支付，1=支付宝支付，2=银联支付，3=微信支付',
dataIndex : 'waycode',
width : 120 
}
,{
header : '支付方式名称',
dataIndex : 'wayname',
width : 120 
}
,{
header : '支付方式状态，0=开通，1=关闭',
dataIndex : 'status',
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
				addpayway();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querypaywayGrid, querypaywayStore, "payway_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querypaywayStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'paywayGrid',
		items : [selectUnitForm, querypaywayGrid]
	});
	var divHeight = document.getElementById('paywayGrid').offsetHeight;
	var divWidth = document.getElementById('paywayGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querypaywayGrid.setWidth(showQueryPanel.getWidth());
	querypaywayGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	