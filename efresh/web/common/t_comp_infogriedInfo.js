

	queryt_comp_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_comp_infoGrid = new Ext.grid.GridPanel({
		store : queryt_comp_infoStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '保险公司编号',
dataIndex : 'idnumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>+ value +'</a></div>';
return tempString;
}}
,{
header : '保险公司简称',
dataIndex : 'comp_abbr_name',
width : 120 
}
,{
header : '股东构成及比例',
dataIndex : 'partner_info',
width : 120 
}
,{
header : '保险公司全称',
dataIndex : 'comp_name',
width : 120 
}
,{
header : '公司成立时间',
dataIndex : 'found_date',
width : 120 
}
,{
header : '注册资本',
dataIndex : 'reg_bal',
width : 120 
}
,{
header : '总部所在城市',
dataIndex : 'hq_city',
width : 120 
}
,{
header : '总部地址',
dataIndex : 'hq_address',
width : 120 
}
,{
header : '公司网址',
dataIndex : 'comp_url',
width : 120 
}
,{
header : '客服电话',
dataIndex : 'serv_phone',
width : 120 
}
,{
header : '本部地址',
dataIndex : 'loc_address',
width : 120 
}
,{
header : '联系人姓名',
dataIndex : 'con_name',
width : 120 
}
,{
header : '服务人员联系电话',
dataIndex : 'con_phone',
width : 120 
}
,{
header : '公司简介',
dataIndex : 'comp_abbr',
width : 120 
}
,{
header : '获奖荣誉',
dataIndex : 'glory_info',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_comp_info();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_comp_infoGrid, queryt_comp_infoStore, "t_comp_info_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_comp_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_comp_infoGrid',
		items : [selectUnitForm, queryt_comp_infoGrid]
	});
	var divHeight = document.getElementById('t_comp_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_comp_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_comp_infoGrid.setWidth(showQueryPanel.getWidth());
	queryt_comp_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	