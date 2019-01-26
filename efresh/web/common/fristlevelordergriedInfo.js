

	queryfristlevelorderStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryfristlevelorderGrid = new Ext.grid.GridPanel({
		store : queryfristlevelorderStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '订单管理-一级订单表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '一级订单编号',
dataIndex : 'firstlevelorderNo',
width : 120 
}
,{
header : '订单状态',
dataIndex : 'orderstatus',
width : 120 
}
,{
header : '店铺主键',
dataIndex : 'idStore',
width : 120 
}
,{
header : '下单人主键',
dataIndex : 'idUser',
width : 120 
}
,{
header : '下单时间',
dataIndex : 'creationordertime',
width : 120 
}
,{
header : '到货时间',
dataIndex : 'arrivaltime',
width : 120 
}
,{
header : '支付时间',
dataIndex : 'paytime',
width : 120 
}
,{
header : '取消订单时间',
dataIndex : 'canceltime',
width : 120 
}
,{
header : '发货时间',
dataIndex : 'deliverytime',
width : 120 
}
,{
header : '签收时间',
dataIndex : 'signtime',
width : 120 
}
,{
header : '收货地址',
dataIndex : 'arrivaladdress',
width : 120 
}
,{
header : '收货人',
dataIndex : 'arrivalpeople',
width : 120 
}
,{
header : '收货人电话',
dataIndex : 'arrivalpeopletel',
width : 120 
}
,{
header : '归集开始时间',
dataIndex : 'collectionstarttime',
width : 120 
}
,{
header : '归集结束时间',
dataIndex : 'collectionendtime',
width : 120 
}
,{
header : '订单总价',
dataIndex : 'orderprice',
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
				addfristlevelorder();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryfristlevelorderGrid, queryfristlevelorderStore, "fristlevelorder_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryfristlevelorderStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'fristlevelorderGrid',
		items : [selectUnitForm, queryfristlevelorderGrid]
	});
	var divHeight = document.getElementById('fristlevelorderGrid').offsetHeight;
	var divWidth = document.getElementById('fristlevelorderGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryfristlevelorderGrid.setWidth(showQueryPanel.getWidth());
	queryfristlevelorderGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	