

	queryt_tlr_mgmtStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_tlr_mgmtGrid = new Ext.grid.GridPanel({
		store : queryt_tlr_mgmtStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '手机号',
dataIndex : 'phone',
width : 120 
}
,{
header : '用户名称',
dataIndex : 'tlr_name',
width : 120 
}
,{
header : '机构编号',
dataIndex : 'inst_no',
width : 120 
}
,{
header : '用户类型、0=买家、1=卖家、2=系统用户',
dataIndex : 'tlr_type',
width : 120 
}
,{
header : '用户状态',
dataIndex : 'tlr_stat',
width : 120 
}
,{
header : '密码',
dataIndex : 'tlr_pwd',
width : 120 
}
,{
header : '是否锁定',
dataIndex : 'islock',
width : 120 
}
,{
header : '收货地址',
dataIndex : 'deliveryaddress',
width : 120 
}
,{
header : '档口名称',
dataIndex : 'stallsname',
width : 120 
}
,{
header : '注册时间',
dataIndex : 'creationtime',
width : 120 
}
,{
header : '用户logo',
dataIndex : 'userlogo',
width : 120 
}
,{
header : '审核是否通过,0表示待审批，1表示审批通过，2表示审批未通过',
dataIndex : 'examine',
width : 120 
}
,{
header : '最近密码修改时间',
dataIndex : 'lst_pwd_date',
width : 120 
}
,{
header : '最近修改人',
dataIndex : 'lst_modify_tlr',
width : 120 
}
,{
header : '最近修改时间',
dataIndex : 'lst_modify_date',
width : 120 
}
,{
header : '申请收货地址',
dataIndex : 'deliveryaddress2',
width : 120 
}
,{
header : '地址修改审核状态 0审核中 1审核通过 2审核未通过',
dataIndex : 'address_status',
width : 120 
}
,{
header : '地址修改时间',
dataIndex : 'addresss_upts',
width : 120 
}
,{
header : '删除标识 1删除 0h或者null没删除',
dataIndex : 'dr',
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
header : '备用3',
dataIndex : 'back3',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_tlr_mgmt();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_tlr_mgmtGrid, queryt_tlr_mgmtStore, "t_tlr_mgmt_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_tlr_mgmtStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_tlr_mgmtGrid',
		items : [selectUnitForm, queryt_tlr_mgmtGrid]
	});
	var divHeight = document.getElementById('t_tlr_mgmtGrid').offsetHeight;
	var divWidth = document.getElementById('t_tlr_mgmtGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_tlr_mgmtGrid.setWidth(showQueryPanel.getWidth());
	queryt_tlr_mgmtGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	