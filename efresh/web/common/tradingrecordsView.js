
var querytradingrecordsStore;			
var querytradingrecordsGrid;
var addtradingrecords;
var addtradingrecordsForm;
var addtradingrecordsWin;
var updatetradingrecords;
var updatetradingrecordsWin;
var updatetradingrecordsForm;
var updatetradingrecordsReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/tradingrecordsView.jsp');
	 querytradingrecordsStore = new Ext.data.JsonStore({
		url : 'tradingrecords_findAll.action',
		root : 'tradingrecordsList',
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
name : 'idUseraccount',
mapping : 'idUseraccount'
}
,{
name : 'idOrder',
mapping : 'idOrder'
}
,{
name : 'idPayway',
mapping : 'idPayway'
}
,{
name : 'tradingamount',
mapping : 'tradingamount'
}
,{
name : 'tradingtype',
mapping : 'tradingtype'
}
,{
name : 'tradingtime',
mapping : 'tradingtime'
}
,{
name : 'tradingNo',
mapping : 'tradingNo'
}
,{
name : 'note',
mapping : 'note'
}
,{
name : 'tradingstatus',
mapping : 'tradingstatus'
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
fieldLabel : '支付管理-用户账户交易记录表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'tradingrecords.idNumber',
width : '80%'
}
,{
fieldLabel : '账户主键',
id : 'select_idUseraccount',
xtype : 'numberfield',
name : 'tradingrecords.idUseraccount',
width : '80%'
}
,{
fieldLabel : '支付方式表主键',
id : 'select_idPayway',
xtype : 'numberfield',
name : 'tradingrecords.idPayway',
width : '80%'
}
,{
fieldLabel : '交易类型，0=充值，1=支出，2=退款，3=转出',
id : 'select_tradingtype',
xtype : 'numberfield',
name : 'tradingrecords.tradingtype',
width : '80%'
}
,{
fieldLabel : '交易单号',
id : 'select_tradingNo',
xtype : 'textfield',
name : 'tradingrecords.tradingNo',
width : '80%'
}
,{
fieldLabel : '交易状态，0=待审核，1=支付成功，2=支付失败',
id : 'select_tradingstatus',
xtype : 'numberfield',
name : 'tradingrecords.tradingstatus',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'tradingrecords.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'tradingrecords.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'tradingrecords.back4',
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
name : 'tradingrecords.idUser',
width : '80%'
}
,{
fieldLabel : '订单主键，充值也是订单，购买商品也是订单，',
id : 'select_idOrder',
xtype : 'numberfield',
name : 'tradingrecords.idOrder',
width : '80%'
}
,{
fieldLabel : '交易金额',
id : 'select_tradingamount',
xtype : 'numberfield',
name : 'tradingrecords.tradingamount',
width : '80%'
}
,{
fieldLabel : '交易时间',
id : 'select_tradingtime',
xtype : 'datetimefield',
name : 'tradingrecords.tradingtime',
anchor : '95%'
}
,{
fieldLabel : '备注',
id : 'select_note',
xtype : 'textfield',
name : 'tradingrecords.note',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'tradingrecords.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'tradingrecords.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'tradingrecords.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'tradingrecords.back5',
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
querytradingrecordsStore.proxy = new Ext.data.HttpProxy({
url : 'tradingrecords_findInfoByConditions.action?'
+'tradingrecords.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&tradingrecords.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&tradingrecords.idUseraccount='
+ Ext.getCmp('select_idUseraccount').getValue()
+'&tradingrecords.idOrder='
+ Ext.getCmp('select_idOrder').getValue()
+'&tradingrecords.idPayway='
+ Ext.getCmp('select_idPayway').getValue()
+'&tradingrecords.tradingamount='
+ Ext.getCmp('select_tradingamount').getValue()
+'&tradingrecords.tradingtype='
+ Ext.getCmp('select_tradingtype').getValue()
+'&tradingrecords.tradingtime='
+ Ext.getCmp('select_tradingtime').getValue()
+'&tradingrecords.tradingNo='
+ Ext.getCmp('select_tradingNo').getValue()
+'&tradingrecords.note='
+ Ext.getCmp('select_note').getValue()
+'&tradingrecords.tradingstatus='
+ Ext.getCmp('select_tradingstatus').getValue()
+'&tradingrecords.ts='
+ Ext.getCmp('select_ts').getValue()
+'&tradingrecords.dr='
+ Ext.getCmp('select_dr').getValue()
+'&tradingrecords.back1='
+ Ext.getCmp('select_back1').getValue()
+'&tradingrecords.back2='
+ Ext.getCmp('select_back2').getValue()
+'&tradingrecords.back3='
+ Ext.getCmp('select_back3').getValue()
+'&tradingrecords.back4='
+ Ext.getCmp('select_back4').getValue()
+'&tradingrecords.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querytradingrecordsStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querytradingrecordsStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querytradingrecordsGrid = new Ext.grid.GridPanel({
		store : querytradingrecordsStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '支付管理-用户账户交易记录表主键',
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
header : '账户主键',
dataIndex : 'idUseraccount',
width : 120 
}
,{
header : '订单主键，充值也是订单，购买商品也是订单，',
dataIndex : 'idOrder',
width : 120 
}
,{
header : '支付方式表主键',
dataIndex : 'idPayway',
width : 120 
}
,{
header : '交易金额',
dataIndex : 'tradingamount',
width : 120 
}
,{
header : '交易类型，0=充值，1=支出，2=退款，3=转出',
dataIndex : 'tradingtype',
width : 120 
}
,{
header : '交易时间',
dataIndex : 'tradingtime',
width : 120 
}
,{
header : '交易单号',
dataIndex : 'tradingNo',
width : 120 
}
,{
header : '备注',
dataIndex : 'note',
width : 120 
}
,{
header : '交易状态，0=待审核，1=支付成功，2=支付失败',
dataIndex : 'tradingstatus',
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
				addtradingrecords();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querytradingrecordsGrid, querytradingrecordsStore, "tradingrecords_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querytradingrecordsStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'tradingrecordsGrid',
		items : [selectUnitForm, querytradingrecordsGrid]
	});
	var divHeight = document.getElementById('tradingrecordsGrid').offsetHeight;
	var divWidth = document.getElementById('tradingrecordsGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querytradingrecordsGrid.setWidth(showQueryPanel.getWidth());
	querytradingrecordsGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addtradingrecordsForm = new Ext.FormPanel({
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
fieldLabel : '支付管理-用户账户交易记录表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'tradingrecords.idNumber',
width : '80%'
}
,{
fieldLabel : '账户主键',
id : 'add_idUseraccount',
xtype : 'numberfield',
name : 'tradingrecords.idUseraccount',
width : '80%'
}
,{
fieldLabel : '支付方式表主键',
id : 'add_idPayway',
xtype : 'numberfield',
name : 'tradingrecords.idPayway',
width : '80%'
}
,{
fieldLabel : '交易类型，0=充值，1=支出，2=退款，3=转出',
id : 'add_tradingtype',
xtype : 'numberfield',
name : 'tradingrecords.tradingtype',
width : '80%'
}
,{
fieldLabel : '交易单号',
id : 'add_tradingNo',
xtype : 'textfield',
name : 'tradingrecords.tradingNo',
width : '80%'
}
,{
fieldLabel : '交易状态，0=待审核，1=支付成功，2=支付失败',
id : 'add_tradingstatus',
xtype : 'numberfield',
name : 'tradingrecords.tradingstatus',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'add_dr',
xtype : 'numberfield',
name : 'tradingrecords.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'tradingrecords.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'tradingrecords.back4',
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
name : 'tradingrecords.idUser',
width : '80%'
}
,{
fieldLabel : '订单主键，充值也是订单，购买商品也是订单，',
id : 'add_idOrder',
xtype : 'numberfield',
name : 'tradingrecords.idOrder',
width : '80%'
}
,{
fieldLabel : '交易金额',
id : 'add_tradingamount',
xtype : 'numberfield',
name : 'tradingrecords.tradingamount',
width : '80%'
}
,{
fieldLabel : '交易时间',
id : 'add_tradingtime',
xtype : 'datetimefield',
name : 'tradingrecords.tradingtime',
anchor : '95%'
}
,{
fieldLabel : '备注',
id : 'add_note',
xtype : 'textfield',
name : 'tradingrecords.note',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'tradingrecords.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'tradingrecords.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'tradingrecords.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'tradingrecords.back5',
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
				check(addtradingrecordsForm, "tradingrecords_addNewInfo.action", querytradingrecordsStore, "添加信息")
				addtradingrecordsWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addtradingrecordsWin.hide();
				addtradingrecordsForm.form.reset();
			}
		}]

	});

	addtradingrecordsWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addtradingrecordsForm
	});

	addtradingrecords = function() {
		addtradingrecordsWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatetradingrecordsReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'tradingrecords.idNumber',
mapping : 'idNumber'
}
,{
name : 'tradingrecords.idUser',
mapping : 'idUser'
}
,{
name : 'tradingrecords.idUseraccount',
mapping : 'idUseraccount'
}
,{
name : 'tradingrecords.idOrder',
mapping : 'idOrder'
}
,{
name : 'tradingrecords.idPayway',
mapping : 'idPayway'
}
,{
name : 'tradingrecords.tradingamount',
mapping : 'tradingamount'
}
,{
name : 'tradingrecords.tradingtype',
mapping : 'tradingtype'
}
,{
name : 'tradingrecords.tradingtime',
mapping : 'tradingtime'
}
,{
name : 'tradingrecords.tradingNo',
mapping : 'tradingNo'
}
,{
name : 'tradingrecords.note',
mapping : 'note'
}
,{
name : 'tradingrecords.tradingstatus',
mapping : 'tradingstatus'
}
,{
name : 'tradingrecords.ts',
mapping : 'ts'
}
,{
name : 'tradingrecords.dr',
mapping : 'dr'
}
,{
name : 'tradingrecords.back1',
mapping : 'back1'
}
,{
name : 'tradingrecords.back2',
mapping : 'back2'
}
,{
name : 'tradingrecords.back3',
mapping : 'back3'
}
,{
name : 'tradingrecords.back4',
mapping : 'back4'
}
,{
name : 'tradingrecords.back5',
mapping : 'back5'
}
]
	);
		
	updatetradingrecordsForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatetradingrecordsReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-用户账户交易记录表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'tradingrecords.idNumber',
width : '80%'
}
,{
fieldLabel : '账户主键',
id : 'uppdate_idUseraccount',
xtype : 'numberfield',
name : 'tradingrecords.idUseraccount',
width : '80%'
}
,{
fieldLabel : '支付方式表主键',
id : 'uppdate_idPayway',
xtype : 'numberfield',
name : 'tradingrecords.idPayway',
width : '80%'
}
,{
fieldLabel : '交易类型，0=充值，1=支出，2=退款，3=转出',
id : 'uppdate_tradingtype',
xtype : 'numberfield',
name : 'tradingrecords.tradingtype',
width : '80%'
}
,{
fieldLabel : '交易单号',
id : 'uppdate_tradingNo',
xtype : 'textfield',
name : 'tradingrecords.tradingNo',
width : '80%'
}
,{
fieldLabel : '交易状态，0=待审核，1=支付成功，2=支付失败',
id : 'uppdate_tradingstatus',
xtype : 'numberfield',
name : 'tradingrecords.tradingstatus',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'tradingrecords.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'tradingrecords.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'tradingrecords.back4',
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
name : 'tradingrecords.idUser',
width : '80%'
}
,{
fieldLabel : '订单主键，充值也是订单，购买商品也是订单，',
id : 'uppdate_idOrder',
xtype : 'numberfield',
name : 'tradingrecords.idOrder',
width : '80%'
}
,{
fieldLabel : '交易金额',
id : 'uppdate_tradingamount',
xtype : 'numberfield',
name : 'tradingrecords.tradingamount',
width : '80%'
}
,{
fieldLabel : '交易时间',
id : 'uppdate_tradingtime',
xtype : 'datetimefield',
name : 'tradingrecords.tradingtime',
anchor : '95%'
}
,{
fieldLabel : '备注',
id : 'uppdate_note',
xtype : 'textfield',
name : 'tradingrecords.note',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'tradingrecords.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'tradingrecords.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'tradingrecords.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'tradingrecords.back5',
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
				check(updatetradingrecordsForm, "tradingrecords_update.action", querytradingrecordsStore, "修改信息")
				updatetradingrecordsWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatetradingrecordsWin.hide();
				updatetradingrecordsForm.form.reset();
			}
		}]
	});

	updatetradingrecordsWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatetradingrecordsForm
	});

	update = function() {
		_record = querytradingrecordsGrid.getSelectionModel().getSelected();
		flag = querytradingrecordsGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatetradingrecordsWin.show();
					
			updatetradingrecordsForm.getForm().load({
				url : 'tradingrecords_findById.action?tradingrecords.idNumber='+ _record.get('idNumber'),
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
 
