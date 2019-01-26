
var queryaccountrevenueStore;			
var queryaccountrevenueGrid;
var addaccountrevenue;
var addaccountrevenueForm;
var addaccountrevenueWin;
var updateaccountrevenue;
var updateaccountrevenueWin;
var updateaccountrevenueForm;
var updateaccountrevenueReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/accountrevenueView.jsp');
	 queryaccountrevenueStore = new Ext.data.JsonStore({
		url : 'accountrevenue_findAll.action',
		root : 'accountrevenueList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
name : 'idNumber',
mapping : 'idNumber'
}
,{
name : 'revenueamount',
mapping : 'revenueamount'
}
,{
name : 'revenueaource',
mapping : 'revenueaource'
}
,{
name : 'idUser',
mapping : 'idUser'
}
,{
name : 'idUseraccount',
mapping : 'idUseraccount'
}
,{
name : 'idTradingrecords',
mapping : 'idTradingrecords'
}
,{
name : 'ts',
mapping : 'ts'
}
,{
name : 'dr',
mapping : 'dr'
}
,{
name : 'back1',
mapping : 'back1'
}
,{
name : 'back2',
mapping : 'back2'
}
,{
name : 'back3',
mapping : 'back3'
}
,{
name : 'back4',
mapping : 'back4'
}
,{
name : 'back5',
mapping : 'back5'
}
],
		autoLoad : false
		
	});
	
	
	
	
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-收益表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'accountrevenue.idNumber',
width : '80%'
}
,{
fieldLabel : '收益来源，0=下订单并成功支付，1=充值虚拟货币',
id : 'select_revenueaource',
xtype : 'numberfield',
name : 'accountrevenue.revenueaource',
width : '80%'
}
,{
fieldLabel : '账户主键',
id : 'select_idUseraccount',
xtype : 'numberfield',
name : 'accountrevenue.idUseraccount',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'accountrevenue.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'accountrevenue.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'accountrevenue.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'accountrevenue.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '收益金额',
id : 'select_revenueamount',
xtype : 'numberfield',
name : 'accountrevenue.revenueamount',
width : '80%'
}
,{
fieldLabel : '用户主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'accountrevenue.idUser',
width : '80%'
}
,{
fieldLabel : '用户交易记录表主键',
id : 'select_idTradingrecords',
xtype : 'numberfield',
name : 'accountrevenue.idTradingrecords',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'accountrevenue.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'accountrevenue.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'accountrevenue.back4',
width : '80%'
}
,{
layout : 'column',
items : [{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '重置',
width : 100,
iconCls : 'icon-reset',
handler : function() {
selectUnitForm.form.reset();
}}]
},{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '查询',
width : 100,
iconCls : 'icon-select',
handler : function() {
queryaccountrevenueStore.proxy = new Ext.data.HttpProxy({
url : 'accountrevenue_findInfoByConditions.action?'
+'accountrevenue.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&accountrevenue.revenueamount='
+ Ext.getCmp('select_revenueamount').getValue()
+'&accountrevenue.revenueaource='
+ Ext.getCmp('select_revenueaource').getValue()
+'&accountrevenue.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&accountrevenue.idUseraccount='
+ Ext.getCmp('select_idUseraccount').getValue()
+'&accountrevenue.idTradingrecords='
+ Ext.getCmp('select_idTradingrecords').getValue()
+'&accountrevenue.ts='
+ Ext.getCmp('select_ts').getValue()
+'&accountrevenue.dr='
+ Ext.getCmp('select_dr').getValue()
+'&accountrevenue.back1='
+ Ext.getCmp('select_back1').getValue()
+'&accountrevenue.back2='
+ Ext.getCmp('select_back2').getValue()
+'&accountrevenue.back3='
+ Ext.getCmp('select_back3').getValue()
+'&accountrevenue.back4='
+ Ext.getCmp('select_back4').getValue()
+'&accountrevenue.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryaccountrevenueStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryaccountrevenueStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryaccountrevenueGrid = new Ext.grid.GridPanel({
		store : queryaccountrevenueStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '支付管理-收益表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '收益金额',
dataIndex : 'revenueamount',
width : 120 
}
,{
header : '收益来源，0=下订单并成功支付，1=充值虚拟货币',
dataIndex : 'revenueaource',
width : 120 
}
,{
header : '用户主键',
dataIndex : 'idUser',
width : 120 
}
,{
header : '账户主键',
dataIndex : 'idUseraccount',
width : 120 
}
,{
header : '用户交易记录表主键',
dataIndex : 'idTradingrecords',
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
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addaccountrevenue();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryaccountrevenueGrid, queryaccountrevenueStore, "accountrevenue_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryaccountrevenueStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'accountrevenueGrid',
		items : [selectUnitForm, queryaccountrevenueGrid]
	});
	var divHeight = document.getElementById('accountrevenueGrid').offsetHeight;
	var divWidth = document.getElementById('accountrevenueGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryaccountrevenueGrid.setWidth(showQueryPanel.getWidth());
	queryaccountrevenueGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addaccountrevenueForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 320, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-收益表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'accountrevenue.idNumber',
width : '80%'
}
,{
fieldLabel : '收益来源，0=下订单并成功支付，1=充值虚拟货币',
id : 'add_revenueaource',
xtype : 'numberfield',
name : 'accountrevenue.revenueaource',
width : '80%'
}
,{
fieldLabel : '账户主键',
id : 'add_idUseraccount',
xtype : 'numberfield',
name : 'accountrevenue.idUseraccount',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'accountrevenue.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'accountrevenue.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'accountrevenue.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'accountrevenue.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '收益金额',
id : 'add_revenueamount',
xtype : 'numberfield',
name : 'accountrevenue.revenueamount',
width : '80%'
}
,{
fieldLabel : '用户主键',
id : 'add_idUser',
xtype : 'numberfield',
name : 'accountrevenue.idUser',
width : '80%'
}
,{
fieldLabel : '用户交易记录表主键',
id : 'add_idTradingrecords',
xtype : 'numberfield',
name : 'accountrevenue.idTradingrecords',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'add_dr',
xtype : 'numberfield',
name : 'accountrevenue.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'accountrevenue.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'accountrevenue.back4',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addaccountrevenueForm, "accountrevenue_addNewInfo.action", queryaccountrevenueStore, "添加信息")
				addaccountrevenueWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addaccountrevenueWin.hide();
				addaccountrevenueForm.form.reset();
			}
		}]

	});

	addaccountrevenueWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addaccountrevenueForm
	});

	addaccountrevenue = function() {
		addaccountrevenueWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updateaccountrevenueReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'accountrevenue.idNumber',
mapping : 'idNumber'
}
,{
name : 'accountrevenue.revenueamount',
mapping : 'revenueamount'
}
,{
name : 'accountrevenue.revenueaource',
mapping : 'revenueaource'
}
,{
name : 'accountrevenue.idUser',
mapping : 'idUser'
}
,{
name : 'accountrevenue.idUseraccount',
mapping : 'idUseraccount'
}
,{
name : 'accountrevenue.idTradingrecords',
mapping : 'idTradingrecords'
}
,{
name : 'accountrevenue.ts',
mapping : 'ts'
}
,{
name : 'accountrevenue.dr',
mapping : 'dr'
}
,{
name : 'accountrevenue.back1',
mapping : 'back1'
}
,{
name : 'accountrevenue.back2',
mapping : 'back2'
}
,{
name : 'accountrevenue.back3',
mapping : 'back3'
}
,{
name : 'accountrevenue.back4',
mapping : 'back4'
}
,{
name : 'accountrevenue.back5',
mapping : 'back5'
}
]
	);
		
	updateaccountrevenueForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateaccountrevenueReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-收益表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'accountrevenue.idNumber',
width : '80%'
}
,{
fieldLabel : '收益来源，0=下订单并成功支付，1=充值虚拟货币',
id : 'uppdate_revenueaource',
xtype : 'numberfield',
name : 'accountrevenue.revenueaource',
width : '80%'
}
,{
fieldLabel : '账户主键',
id : 'uppdate_idUseraccount',
xtype : 'numberfield',
name : 'accountrevenue.idUseraccount',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'accountrevenue.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'accountrevenue.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'accountrevenue.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'accountrevenue.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '收益金额',
id : 'uppdate_revenueamount',
xtype : 'numberfield',
name : 'accountrevenue.revenueamount',
width : '80%'
}
,{
fieldLabel : '用户主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'accountrevenue.idUser',
width : '80%'
}
,{
fieldLabel : '用户交易记录表主键',
id : 'uppdate_idTradingrecords',
xtype : 'numberfield',
name : 'accountrevenue.idTradingrecords',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'accountrevenue.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'accountrevenue.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'accountrevenue.back4',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updateaccountrevenueForm, "accountrevenue_update.action", queryaccountrevenueStore, "修改信息")
				updateaccountrevenueWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateaccountrevenueWin.hide();
				updateaccountrevenueForm.form.reset();
			}
		}]
	});

	updateaccountrevenueWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateaccountrevenueForm
	});

	update = function() {
		_record = queryaccountrevenueGrid.getSelectionModel().getSelected();
		flag = queryaccountrevenueGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateaccountrevenueWin.show();
					
			updateaccountrevenueForm.getForm().load({
				url : 'accountrevenue_findById.action?accountrevenue.idNumber='+ _record.get('idNumber'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
	};






	
	// 加载页面后默认焦点
	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
