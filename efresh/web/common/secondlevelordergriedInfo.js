

	querysecondlevelorderStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysecondlevelorderGrid = new Ext.grid.GridPanel({
		store : querysecondlevelorderStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '二级订单表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '二级订单编号',
dataIndex : 'secondlevelorderNo',
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
header : '订单状态',
dataIndex : 'orderstatus',
width : 120 
}
,{
header : '到货时间',
dataIndex : 'arrivaltime',
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
,{
header : '取消订单时间',
dataIndex : 'canceltime',
width : 120 
}
,{
header : '支付时间',
dataIndex : 'paytime',
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
header : '订单总价',
dataIndex : 'orderprice',
width : 120 
}
,{
header : '签收人名称',
dataIndex : 'signname',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addsecondlevelorder();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysecondlevelorderGrid, querysecondlevelorderStore, "secondlevelorder_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysecondlevelorderStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'secondlevelorderGrid',
		items : [selectUnitForm, querysecondlevelorderGrid]
	});
	var divHeight = document.getElementById('secondlevelorderGrid').offsetHeight;
	var divWidth = document.getElementById('secondlevelorderGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysecondlevelorderGrid.setWidth(showQueryPanel.getWidth());
	querysecondlevelorderGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	