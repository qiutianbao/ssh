
var querybindbankcardStore;			
var querybindbankcardGrid;
var addbindbankcard;
var addbindbankcardForm;
var addbindbankcardWin;
var updatebindbankcard;
var updatebindbankcardWin;
var updatebindbankcardForm;
var updatebindbankcardReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/bindbankcardView.jsp');
	 querybindbankcardStore = new Ext.data.JsonStore({
		url : 'bindbankcard_findAll.action',
		root : 'bindbankcardList',
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
name : 'idUser',
mapping : 'idUser'
}
,{
name : 'bankCardNo',
mapping : 'bankCardNo'
}
,{
name : 'bankaccount',
mapping : 'bankaccount'
}
,{
name : 'accountname',
mapping : 'accountname'
}
,{
name : 'idcard',
mapping : 'idcard'
}
,{
name : 'iphoneNo',
mapping : 'iphoneNo'
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
fieldLabel : '支付管理-绑定银行卡表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'bindbankcard.idNumber',
width : '80%'
}
,{
fieldLabel : '银行卡号',
id : 'select_bankCardNo',
xtype : 'textfield',
name : 'bindbankcard.bankCardNo',
width : '80%'
}
,{
fieldLabel : '姓名',
id : 'select_accountname',
xtype : 'textfield',
name : 'bindbankcard.accountname',
width : '80%'
}
,{
fieldLabel : '银行预留手机号码',
id : 'select_iphoneNo',
xtype : 'textfield',
name : 'bindbankcard.iphoneNo',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'bindbankcard.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'bindbankcard.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'bindbankcard.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'bindbankcard.idUser',
width : '80%'
}
,{
fieldLabel : '开户行',
id : 'select_bankaccount',
xtype : 'textfield',
name : 'bindbankcard.bankaccount',
width : '80%'
}
,{
fieldLabel : '身份证号码',
id : 'select_idcard',
xtype : 'textfield',
name : 'bindbankcard.idcard',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'bindbankcard.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'bindbankcard.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'bindbankcard.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'bindbankcard.back5',
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
querybindbankcardStore.proxy = new Ext.data.HttpProxy({
url : 'bindbankcard_findInfoByConditions.action?'
+'bindbankcard.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&bindbankcard.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&bindbankcard.bankCardNo='
+ Ext.getCmp('select_bankCardNo').getValue()
+'&bindbankcard.bankaccount='
+ Ext.getCmp('select_bankaccount').getValue()
+'&bindbankcard.accountname='
+ Ext.getCmp('select_accountname').getValue()
+'&bindbankcard.idcard='
+ Ext.getCmp('select_idcard').getValue()
+'&bindbankcard.iphoneNo='
+ Ext.getCmp('select_iphoneNo').getValue()
+'&bindbankcard.ts='
+ Ext.getCmp('select_ts').getValue()
+'&bindbankcard.dr='
+ Ext.getCmp('select_dr').getValue()
+'&bindbankcard.back1='
+ Ext.getCmp('select_back1').getValue()
+'&bindbankcard.back2='
+ Ext.getCmp('select_back2').getValue()
+'&bindbankcard.back3='
+ Ext.getCmp('select_back3').getValue()
+'&bindbankcard.back4='
+ Ext.getCmp('select_back4').getValue()
+'&bindbankcard.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querybindbankcardStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

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
	
	

	
	addbindbankcardForm = new Ext.FormPanel({
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
fieldLabel : '支付管理-绑定银行卡表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'bindbankcard.idNumber',
width : '80%'
}
,{
fieldLabel : '银行卡号',
id : 'add_bankCardNo',
xtype : 'textfield',
name : 'bindbankcard.bankCardNo',
width : '80%'
}
,{
fieldLabel : '姓名',
id : 'add_accountname',
xtype : 'textfield',
name : 'bindbankcard.accountname',
width : '80%'
}
,{
fieldLabel : '银行预留手机号码',
id : 'add_iphoneNo',
xtype : 'textfield',
name : 'bindbankcard.iphoneNo',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'bindbankcard.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'bindbankcard.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'bindbankcard.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'add_idUser',
xtype : 'numberfield',
name : 'bindbankcard.idUser',
width : '80%'
}
,{
fieldLabel : '开户行',
id : 'add_bankaccount',
xtype : 'textfield',
name : 'bindbankcard.bankaccount',
width : '80%'
}
,{
fieldLabel : '身份证号码',
id : 'add_idcard',
xtype : 'textfield',
name : 'bindbankcard.idcard',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'bindbankcard.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'bindbankcard.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'bindbankcard.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'bindbankcard.back5',
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
				check(addbindbankcardForm, "bindbankcard_addNewInfo.action", querybindbankcardStore, "添加信息")
				addbindbankcardWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addbindbankcardWin.hide();
				addbindbankcardForm.form.reset();
			}
		}]

	});

	addbindbankcardWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addbindbankcardForm
	});

	addbindbankcard = function() {
		addbindbankcardWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatebindbankcardReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'bindbankcard.idNumber',
mapping : 'idNumber'
}
,{
name : 'bindbankcard.idUser',
mapping : 'idUser'
}
,{
name : 'bindbankcard.bankCardNo',
mapping : 'bankCardNo'
}
,{
name : 'bindbankcard.bankaccount',
mapping : 'bankaccount'
}
,{
name : 'bindbankcard.accountname',
mapping : 'accountname'
}
,{
name : 'bindbankcard.idcard',
mapping : 'idcard'
}
,{
name : 'bindbankcard.iphoneNo',
mapping : 'iphoneNo'
}
,{
name : 'bindbankcard.ts',
mapping : 'ts'
}
,{
name : 'bindbankcard.dr',
mapping : 'dr'
}
,{
name : 'bindbankcard.back1',
mapping : 'back1'
}
,{
name : 'bindbankcard.back2',
mapping : 'back2'
}
,{
name : 'bindbankcard.back3',
mapping : 'back3'
}
,{
name : 'bindbankcard.back4',
mapping : 'back4'
}
,{
name : 'bindbankcard.back5',
mapping : 'back5'
}
]
	);
		
	updatebindbankcardForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatebindbankcardReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-绑定银行卡表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'bindbankcard.idNumber',
width : '80%'
}
,{
fieldLabel : '银行卡号',
id : 'uppdate_bankCardNo',
xtype : 'textfield',
name : 'bindbankcard.bankCardNo',
width : '80%'
}
,{
fieldLabel : '姓名',
id : 'uppdate_accountname',
xtype : 'textfield',
name : 'bindbankcard.accountname',
width : '80%'
}
,{
fieldLabel : '银行预留手机号码',
id : 'uppdate_iphoneNo',
xtype : 'textfield',
name : 'bindbankcard.iphoneNo',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'bindbankcard.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'bindbankcard.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'bindbankcard.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'bindbankcard.idUser',
width : '80%'
}
,{
fieldLabel : '开户行',
id : 'uppdate_bankaccount',
xtype : 'textfield',
name : 'bindbankcard.bankaccount',
width : '80%'
}
,{
fieldLabel : '身份证号码',
id : 'uppdate_idcard',
xtype : 'textfield',
name : 'bindbankcard.idcard',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'bindbankcard.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'bindbankcard.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'bindbankcard.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'bindbankcard.back5',
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
				check(updatebindbankcardForm, "bindbankcard_update.action", querybindbankcardStore, "修改信息")
				updatebindbankcardWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatebindbankcardWin.hide();
				updatebindbankcardForm.form.reset();
			}
		}]
	});

	updatebindbankcardWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatebindbankcardForm
	});

	update = function() {
		_record = querybindbankcardGrid.getSelectionModel().getSelected();
		flag = querybindbankcardGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatebindbankcardWin.show();
					
			updatebindbankcardForm.getForm().load({
				url : 'bindbankcard_findById.action?bindbankcard.idNumber='+ _record.get('idNumber'),
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
 
