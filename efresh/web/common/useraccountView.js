
var queryuseraccountStore;			
var queryuseraccountGrid;
var adduseraccount;
var adduseraccountForm;
var adduseraccountWin;
var updateuseraccount;
var updateuseraccountWin;
var updateuseraccountForm;
var updateuseraccountReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/useraccountView.jsp');
	 queryuseraccountStore = new Ext.data.JsonStore({
		url : 'useraccount_findAll.action',
		root : 'useraccountList',
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
name : 'account',
mapping : 'account'
}
,{
name : 'idUser',
mapping : 'idUser'
}
,{
name : 'balance',
mapping : 'balance'
}
,{
name : 'availablemoney',
mapping : 'availablemoney'
}
,{
name : 'notavailablemoney',
mapping : 'notavailablemoney'
}
,{
name : 'isSetpassword',
mapping : 'isSetpassword'
}
,{
name : 'paypassword',
mapping : 'paypassword'
}
,{
name : 'creationtime',
mapping : 'creationtime'
}
,{
name : 'setpaypwdtime',
mapping : 'setpaypwdtime'
}
,{
name : 'modifypaypwdtime',
mapping : 'modifypaypwdtime'
}
,{
name : 'upmodifypaypwdtime',
mapping : 'upmodifypaypwdtime'
}
,{
name : 'isfrozen',
mapping : 'isfrozen'
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
fieldLabel : '支付管理-用户账户表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'useraccount.idNumber',
width : '80%'
}
,{
fieldLabel : '用户主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'useraccount.idUser',
width : '80%'
}
,{
fieldLabel : '可用款余额，可用款交易类型为充值，交易状态为支付成功的才是可用款，收益全部都是可用款，可用款总额=审核通过后的账户可用款+收益金额',
id : 'select_availablemoney',
xtype : 'numberfield',
name : 'useraccount.availablemoney',
width : '80%'
}
,{
fieldLabel : '是否设置交易密码',
id : 'select_isSetpassword',
xtype : 'textfield',
name : 'useraccount.isSetpassword',
width : '80%'
}
,{
fieldLabel : '创建账户时间',
id : 'select_creationtime',
xtype : 'datetimefield',
name : 'useraccount.creationtime',
anchor : '95%'
}
,{
fieldLabel : '修改交易密码时间',
id : 'select_modifypaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.modifypaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '是否冻结',
id : 'select_isfrozen',
xtype : 'textfield',
name : 'useraccount.isfrozen',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'useraccount.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'useraccount.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'useraccount.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '账号，按一定规则给一个唯一账号，建议与用户主键做组合索引',
id : 'select_account',
xtype : 'textfield',
name : 'useraccount.account',
width : '80%'
}
,{
fieldLabel : '账户余额，账户总余额=账户余额+收益金额',
id : 'select_balance',
xtype : 'numberfield',
name : 'useraccount.balance',
width : '80%'
}
,{
fieldLabel : '不可用款，就是交易状态为：待审核的，交易类型为充值的都是不可用款',
id : 'select_notavailablemoney',
xtype : 'numberfield',
name : 'useraccount.notavailablemoney',
width : '80%'
}
,{
fieldLabel : '交易密码',
id : 'select_paypassword',
xtype : 'textfield',
name : 'useraccount.paypassword',
width : '80%'
}
,{
fieldLabel : '设置交易密码时间',
id : 'select_setpaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.setpaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '上次修改交易密码时间',
id : 'select_upmodifypaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.upmodifypaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'useraccount.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'useraccount.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'useraccount.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'useraccount.back5',
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
queryuseraccountStore.proxy = new Ext.data.HttpProxy({
url : 'useraccount_findInfoByConditions.action?'
+'useraccount.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&useraccount.account='
+ Ext.getCmp('select_account').getValue()
+'&useraccount.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&useraccount.balance='
+ Ext.getCmp('select_balance').getValue()
+'&useraccount.availablemoney='
+ Ext.getCmp('select_availablemoney').getValue()
+'&useraccount.notavailablemoney='
+ Ext.getCmp('select_notavailablemoney').getValue()
+'&useraccount.isSetpassword='
+ Ext.getCmp('select_isSetpassword').getValue()
+'&useraccount.paypassword='
+ Ext.getCmp('select_paypassword').getValue()
+'&useraccount.creationtime='
+ Ext.getCmp('select_creationtime').getValue()
+'&useraccount.setpaypwdtime='
+ Ext.getCmp('select_setpaypwdtime').getValue()
+'&useraccount.modifypaypwdtime='
+ Ext.getCmp('select_modifypaypwdtime').getValue()
+'&useraccount.upmodifypaypwdtime='
+ Ext.getCmp('select_upmodifypaypwdtime').getValue()
+'&useraccount.isfrozen='
+ Ext.getCmp('select_isfrozen').getValue()
+'&useraccount.ts='
+ Ext.getCmp('select_ts').getValue()
+'&useraccount.dr='
+ Ext.getCmp('select_dr').getValue()
+'&useraccount.back1='
+ Ext.getCmp('select_back1').getValue()
+'&useraccount.back2='
+ Ext.getCmp('select_back2').getValue()
+'&useraccount.back3='
+ Ext.getCmp('select_back3').getValue()
+'&useraccount.back4='
+ Ext.getCmp('select_back4').getValue()
+'&useraccount.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryuseraccountStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

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
	
	

	
	adduseraccountForm = new Ext.FormPanel({
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
fieldLabel : '支付管理-用户账户表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'useraccount.idNumber',
width : '80%'
}
,{
fieldLabel : '用户主键',
id : 'add_idUser',
xtype : 'numberfield',
name : 'useraccount.idUser',
width : '80%'
}
,{
fieldLabel : '可用款余额，可用款交易类型为充值，交易状态为支付成功的才是可用款，收益全部都是可用款，可用款总额=审核通过后的账户可用款+收益金额',
id : 'add_availablemoney',
xtype : 'numberfield',
name : 'useraccount.availablemoney',
width : '80%'
}
,{
fieldLabel : '是否设置交易密码',
id : 'add_isSetpassword',
xtype : 'textfield',
name : 'useraccount.isSetpassword',
width : '80%'
}
,{
fieldLabel : '创建账户时间',
id : 'add_creationtime',
xtype : 'datetimefield',
name : 'useraccount.creationtime',
anchor : '95%'
}
,{
fieldLabel : '修改交易密码时间',
id : 'add_modifypaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.modifypaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '是否冻结',
id : 'add_isfrozen',
xtype : 'textfield',
name : 'useraccount.isfrozen',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'useraccount.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'useraccount.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'useraccount.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '账号，按一定规则给一个唯一账号，建议与用户主键做组合索引',
id : 'add_account',
xtype : 'textfield',
name : 'useraccount.account',
width : '80%'
}
,{
fieldLabel : '账户余额，账户总余额=账户余额+收益金额',
id : 'add_balance',
xtype : 'numberfield',
name : 'useraccount.balance',
width : '80%'
}
,{
fieldLabel : '不可用款，就是交易状态为：待审核的，交易类型为充值的都是不可用款',
id : 'add_notavailablemoney',
xtype : 'numberfield',
name : 'useraccount.notavailablemoney',
width : '80%'
}
,{
fieldLabel : '交易密码',
id : 'add_paypassword',
xtype : 'textfield',
name : 'useraccount.paypassword',
width : '80%'
}
,{
fieldLabel : '设置交易密码时间',
id : 'add_setpaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.setpaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '上次修改交易密码时间',
id : 'add_upmodifypaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.upmodifypaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'useraccount.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'useraccount.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'useraccount.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'useraccount.back5',
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
				check(adduseraccountForm, "useraccount_addNewInfo.action", queryuseraccountStore, "添加信息")
				adduseraccountWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				adduseraccountWin.hide();
				adduseraccountForm.form.reset();
			}
		}]

	});

	adduseraccountWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : adduseraccountForm
	});

	adduseraccount = function() {
		adduseraccountWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updateuseraccountReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'useraccount.idNumber',
mapping : 'idNumber'
}
,{
name : 'useraccount.account',
mapping : 'account'
}
,{
name : 'useraccount.idUser',
mapping : 'idUser'
}
,{
name : 'useraccount.balance',
mapping : 'balance'
}
,{
name : 'useraccount.availablemoney',
mapping : 'availablemoney'
}
,{
name : 'useraccount.notavailablemoney',
mapping : 'notavailablemoney'
}
,{
name : 'useraccount.isSetpassword',
mapping : 'isSetpassword'
}
,{
name : 'useraccount.paypassword',
mapping : 'paypassword'
}
,{
name : 'useraccount.creationtime',
mapping : 'creationtime'
}
,{
name : 'useraccount.setpaypwdtime',
mapping : 'setpaypwdtime'
}
,{
name : 'useraccount.modifypaypwdtime',
mapping : 'modifypaypwdtime'
}
,{
name : 'useraccount.upmodifypaypwdtime',
mapping : 'upmodifypaypwdtime'
}
,{
name : 'useraccount.isfrozen',
mapping : 'isfrozen'
}
,{
name : 'useraccount.ts',
mapping : 'ts'
}
,{
name : 'useraccount.dr',
mapping : 'dr'
}
,{
name : 'useraccount.back1',
mapping : 'back1'
}
,{
name : 'useraccount.back2',
mapping : 'back2'
}
,{
name : 'useraccount.back3',
mapping : 'back3'
}
,{
name : 'useraccount.back4',
mapping : 'back4'
}
,{
name : 'useraccount.back5',
mapping : 'back5'
}
]
	);
		
	updateuseraccountForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateuseraccountReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-用户账户表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'useraccount.idNumber',
width : '80%'
}
,{
fieldLabel : '用户主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'useraccount.idUser',
width : '80%'
}
,{
fieldLabel : '可用款余额，可用款交易类型为充值，交易状态为支付成功的才是可用款，收益全部都是可用款，可用款总额=审核通过后的账户可用款+收益金额',
id : 'uppdate_availablemoney',
xtype : 'numberfield',
name : 'useraccount.availablemoney',
width : '80%'
}
,{
fieldLabel : '是否设置交易密码',
id : 'uppdate_isSetpassword',
xtype : 'textfield',
name : 'useraccount.isSetpassword',
width : '80%'
}
,{
fieldLabel : '创建账户时间',
id : 'uppdate_creationtime',
xtype : 'datetimefield',
name : 'useraccount.creationtime',
anchor : '95%'
}
,{
fieldLabel : '修改交易密码时间',
id : 'uppdate_modifypaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.modifypaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '是否冻结',
id : 'uppdate_isfrozen',
xtype : 'textfield',
name : 'useraccount.isfrozen',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'useraccount.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'useraccount.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'useraccount.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '账号，按一定规则给一个唯一账号，建议与用户主键做组合索引',
id : 'uppdate_account',
xtype : 'textfield',
name : 'useraccount.account',
width : '80%'
}
,{
fieldLabel : '账户余额，账户总余额=账户余额+收益金额',
id : 'uppdate_balance',
xtype : 'numberfield',
name : 'useraccount.balance',
width : '80%'
}
,{
fieldLabel : '不可用款，就是交易状态为：待审核的，交易类型为充值的都是不可用款',
id : 'uppdate_notavailablemoney',
xtype : 'numberfield',
name : 'useraccount.notavailablemoney',
width : '80%'
}
,{
fieldLabel : '交易密码',
id : 'uppdate_paypassword',
xtype : 'textfield',
name : 'useraccount.paypassword',
width : '80%'
}
,{
fieldLabel : '设置交易密码时间',
id : 'uppdate_setpaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.setpaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '上次修改交易密码时间',
id : 'uppdate_upmodifypaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.upmodifypaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'useraccount.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'useraccount.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'useraccount.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'useraccount.back5',
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
				check(updateuseraccountForm, "useraccount_update.action", queryuseraccountStore, "修改信息")
				updateuseraccountWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateuseraccountWin.hide();
				updateuseraccountForm.form.reset();
			}
		}]
	});

	updateuseraccountWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateuseraccountForm
	});

	update = function() {
		_record = queryuseraccountGrid.getSelectionModel().getSelected();
		flag = queryuseraccountGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateuseraccountWin.show();
					
			updateuseraccountForm.getForm().load({
				url : 'useraccount_findById.action?useraccount.idNumber='+ _record.get('idNumber'),
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
 
