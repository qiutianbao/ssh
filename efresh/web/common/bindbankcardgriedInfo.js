

	querybindbankcardStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querybindbankcardGrid = new Ext.grid.GridPanel({
		store : querybindbankcardStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '支付管理-绑定银行卡表主键',
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
header : '银行卡号',
dataIndex : 'bankCardNo',
width : 120 
}
,{
header : '开户行',
dataIndex : 'bankaccount',
width : 120 
}
,{
header : '姓名',
dataIndex : 'accountname',
width : 120 
}
,{
header : '身份证号码',
dataIndex : 'idcard',
width : 120 
}
,{
header : '银行预留手机号码',
dataIndex : 'iphoneNo',
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
				addbindbankcard();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querybindbankcardGrid, querybindbankcardStore, "bindbankcard_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querybindbankcardStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'bindbankcardGrid',
		items : [selectUnitForm, querybindbankcardGrid]
	});
	var divHeight = document.getElementById('bindbankcardGrid').offsetHeight;
	var divWidth = document.getElementById('bindbankcardGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querybindbankcardGrid.setWidth(showQueryPanel.getWidth());
	querybindbankcardGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	