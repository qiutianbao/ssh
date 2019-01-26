

	queryestoreStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryestoreGrid = new Ext.grid.GridPanel({
		store : queryestoreStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '企业logo图片名称',
dataIndex : 'corplogo',
width : 120 
}
,{
header : '企业名字',
dataIndex : 'corpname',
width : 120 
}
,{
header : '注册号',
dataIndex : 'creationNo',
width : 120 
}
,{
header : '组织机构代码证',
dataIndex : 'organization',
width : 120 
}
,{
header : '产地详细地址',
dataIndex : 'address',
width : 120 
}
,{
header : '法人名字',
dataIndex : 'legalname',
width : 120 
}
,{
header : '法人身份证号码',
dataIndex : 'id',
width : 120 
}
,{
header : '证件截止有效期',
dataIndex : 'validtime',
width : 120 
}
,{
header : '法人手机号',
dataIndex : 'legalphoneNo',
width : 120 
}
,{
header : '法人QQ号',
dataIndex : 'legalqq',
width : 120 
}
,{
header : '法人微信号',
dataIndex : 'legalwechat',
width : 120 
}
,{
header : '企业营业执照副本图',
dataIndex : 'businesslic',
width : 120 
}
,{
header : '法人身份证正面图',
dataIndex : 'idpositive',
width : 120 
}
,{
header : '法人身份证反面图',
dataIndex : 'idopposite',
width : 120 
}
,{
header : '银行开户名',
dataIndex : 'accountname',
width : 120 
}
,{
header : '开户银行',
dataIndex : 'accountbank',
width : 120 
}
,{
header : '银行所在地',
dataIndex : 'bankaddress',
width : 120 
}
,{
header : '银行账户',
dataIndex : 'bankaccount',
width : 120 
}
,{
header : '最迟确认订单时间',
dataIndex : 'validordertime',
width : 120 
}
,{
header : '处理订单时间',
dataIndex : 'handleordertime',
width : 120 
}
,{
header : '最快到货时间',
dataIndex : 'deliverytime',
width : 120 
}
,{
header : '登录密码',
dataIndex : 'password',
width : 120 
}
,{
header : '联系人名字',
dataIndex : 'contactname',
width : 120 
}
,{
header : '联系人电话',
dataIndex : 'contactphoneNo',
width : 120 
}
,{
header : '联系人QQ',
dataIndex : 'contactqq',
width : 120 
}
,{
header : '联系人微信',
dataIndex : 'contactwechat',
width : 120 
}
,{
header : '注册时间',
dataIndex : 'creationtime',
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
,{
header : '用户表主键',
dataIndex : 'userid',
width : 120 
}
,{
header : '是否停运',
dataIndex : 'isStop',
width : 120 
}
,{
header : '是否自营店铺',
dataIndex : 'selftsales',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addestore();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryestoreGrid, queryestoreStore, "estore_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryestoreStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'estoreGrid',
		items : [selectUnitForm, queryestoreGrid]
	});
	var divHeight = document.getElementById('estoreGrid').offsetHeight;
	var divWidth = document.getElementById('estoreGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryestoreGrid.setWidth(showQueryPanel.getWidth());
	queryestoreGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	