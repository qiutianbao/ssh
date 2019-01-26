

	queryt_product_selectStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_product_selectGrid = new Ext.grid.GridPanel({
		store : queryt_product_selectStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '主键',
dataIndex : 'idnumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '附加险',
dataIndex : 'add_safe_flag',
width : 120 
}
,{
header : '投保人性别',
dataIndex : 'sex',
width : 120 
}
,{
header : '红利分配方式',
dataIndex : 'bouns_adm_type',
width : 120 
}
,{
header : '起存金额',
dataIndex : 'bgn_bal_select',
width : 120 
}
,{
header : '开始投保年龄',
dataIndex : 'start_age',
width : 120 
}
,{
header : '结束投保年龄',
dataIndex : 'end_age',
width : 120 
}
,{
header : '期缴年限',
dataIndex : 'expect_pay',
width : 120 
}
,{
header : '保险期限',
dataIndex : 'insure_period',
width : 120 
}
,{
header : '备用1',
dataIndex : 'back1',
width : 120 
}
,{
header : '备用2',
dataIndex : 'back2',
width : 120 
}
,{
header : '产品编号',
dataIndex : 'pro_no',
width : 120 
}
,{
header : '备用3',
dataIndex : 'back3',
width : 120 
}
,{
header : '备用4',
dataIndex : 'back4',
width : 120 
}
,{
header : 'name5',
dataIndex : 'back5',
width : 120 
}
,{
header : '公司编码',
dataIndex : 'comp_no',
width : 120 
}
,{
header : '缴费方式',
dataIndex : 'pay_type',
width : 120 
}
,{
header : '产品类型',
dataIndex : 'product_type',
width : 120 
}
,{
header : '疾病身故保险金',
dataIndex : 'illness_bal_flag',
width : 120 
}
,{
header : '一般意外伤害',
dataIndex : 'ywbal_flag',
width : 120 
}
,{
header : '交通意外险',
dataIndex : 'trafc_bal_flag',
width : 120 
}
,{
header : '满期保险金',
dataIndex : 'totl_bal_flag',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_product_select();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_product_selectGrid, queryt_product_selectStore, "t_product_select_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_product_selectStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_product_selectGrid',
		items : [selectUnitForm, queryt_product_selectGrid]
	});
	var divHeight = document.getElementById('t_product_selectGrid').offsetHeight;
	var divWidth = document.getElementById('t_product_selectGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_product_selectGrid.setWidth(showQueryPanel.getWidth());
	queryt_product_selectGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	