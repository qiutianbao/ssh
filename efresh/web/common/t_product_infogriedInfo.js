

	queryt_product_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_product_infoGrid = new Ext.grid.GridPanel({
		store : queryt_product_infoStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '产品编号',
dataIndex : 'idnumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '保险公司编号',
dataIndex : 'comp_no',
width : 120 
}
,{
header : '产品全称',
dataIndex : 'product_name',
width : 120 
}
,{
header : '产品简称',
dataIndex : 'product_abbr_name',
width : 120 
}
,{
header : '产品类型',
dataIndex : 'product_type',
width : 120 
}
,{
header : '被保人年龄',
dataIndex : 'age',
width : 120 
}
,{
header : '缴费方式',
dataIndex : 'pay_type',
width : 120 
}
,{
header : '保险期间',
dataIndex : 'safe_year',
width : 120 
}
,{
header : '起售金额',
dataIndex : 'bgn_bal',
width : 120 
}
,{
header : '犹豫期',
dataIndex : 'grace_day',
width : 120 
}
,{
header : '疾病身故保险金',
dataIndex : 'illness_bal',
width : 120 
}
,{
header : '结算利率（万能险）',
dataIndex : 'balance_rate',
width : 120 
}
,{
header : '一般意外险',
dataIndex : 'ywbal',
width : 120 
}
,{
header : '初始费用',
dataIndex : 'first_bal',
width : 120 
}
,{
header : '特定交通工具意外伤害身故保险金',
dataIndex : 'trafc_bal',
width : 120 
}
,{
header : '退保费用1年',
dataIndex : 'cancl_amt1',
width : 120 
}
,{
header : '期满保险金',
dataIndex : 'totl_bal',
width : 120 
}
,{
header : '退保费用2年',
dataIndex : 'cancl_amt2',
width : 120 
}
,{
header : '护理保险金',
dataIndex : 'nurse_bal',
width : 120 
}
,{
header : '退保费用3年',
dataIndex : 'cancl_amt3',
width : 120 
}
,{
header : '附加险',
dataIndex : 'add_safe',
width : 120 
}
,{
header : '退保费用4年',
dataIndex : 'cancl_amt4',
width : 120 
}
,{
header : '其他',
dataIndex : 'remark1',
width : 120 
}
,{
header : '退保费用5年',
dataIndex : 'cancl_amt5',
width : 120 
}
,{
header : '保底利率（分红险）',
dataIndex : 'base_rate',
width : 120 
}
,{
header : '红利来源',
dataIndex : 'bouns_origin',
width : 120 
}
,{
header : '历年分红1',
dataIndex : 'cake_bal1',
width : 120 
}
,{
header : '红利分配',
dataIndex : 'bouns_adm',
width : 120 
}
,{
header : '历年分红2',
dataIndex : 'cake_bal2',
width : 120 
}
,{
header : '产品优点',
dataIndex : 'product_vitue',
width : 120 
}
,{
header : '历年分红3',
dataIndex : 'cake_bal3',
width : 120 
}
,{
header : '责任免除',
dataIndex : 'duty_remit',
width : 120 
}
,{
header : '历年分红4',
dataIndex : 'cake_bal4',
width : 120 
}
,{
header : '风险提示',
dataIndex : 'danger_war',
width : 120 
}
,{
header : '历年分红5',
dataIndex : 'cake_bal5',
width : 120 
}
,{
header : '状态',
dataIndex : 'state',
width : 120 
}
,{
header : '备用',
dataIndex : 'back',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_product_info();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_product_infoGrid, queryt_product_infoStore, "t_product_info_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_product_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_product_infoGrid',
		items : [selectUnitForm, queryt_product_infoGrid]
	});
	var divHeight = document.getElementById('t_product_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_product_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_product_infoGrid.setWidth(showQueryPanel.getWidth());
	queryt_product_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	