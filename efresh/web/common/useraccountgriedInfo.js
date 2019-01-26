

	queryuseraccountStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryuseraccountGrid = new Ext.grid.GridPanel({
		store : queryuseraccountStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '支付管理-用户账户表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '账号，按一定规则给一个唯一账号，建议与用户主键做组合索引',
dataIndex : 'account',
width : 120 
}
,{
header : '用户主键',
dataIndex : 'idUser',
width : 120 
}
,{
header : '账户余额，账户总余额=账户余额+收益金额',
dataIndex : 'balance',
width : 120 
}
,{
header : '可用款余额，可用款交易类型为充值，交易状态为支付成功的才是可用款，收益全部都是可用款，可用款总额=审核通过后的账户可用款+收益金额',
dataIndex : 'availablemoney',
width : 120 
}
,{
header : '不可用款，就是交易状态为：待审核的，交易类型为充值的都是不可用款',
dataIndex : 'notavailablemoney',
width : 120 
}
,{
header : '是否设置交易密码',
dataIndex : 'isSetpassword',
width : 120 
}
,{
header : '交易密码',
dataIndex : 'paypassword',
width : 120 
}
,{
header : '创建账户时间',
dataIndex : 'creationtime',
width : 120 
}
,{
header : '设置交易密码时间',
dataIndex : 'setpaypwdtime',
width : 120 
}
,{
header : '修改交易密码时间',
dataIndex : 'modifypaypwdtime',
width : 120 
}
,{
header : '上次修改交易密码时间',
dataIndex : 'upmodifypaypwdtime',
width : 120 
}
,{
header : '是否冻结',
dataIndex : 'isfrozen',
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
				adduseraccount();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryuseraccountGrid, queryuseraccountStore, "useraccount_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryuseraccountStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'useraccountGrid',
		items : [selectUnitForm, queryuseraccountGrid]
	});
	var divHeight = document.getElementById('useraccountGrid').offsetHeight;
	var divWidth = document.getElementById('useraccountGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryuseraccountGrid.setWidth(showQueryPanel.getWidth());
	queryuseraccountGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	