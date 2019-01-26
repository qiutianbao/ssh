
var queryintegralexchangeStore;			
var queryintegralexchangeGrid;
var addintegralexchange;
var addintegralexchangeForm;
var addintegralexchangeWin;
var updateintegralexchange;
var updateintegralexchangeWin;
var updateintegralexchangeForm;
var updateintegralexchangeReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/integralexchangeView.jsp');
	 queryintegralexchangeStore = new Ext.data.JsonStore({
		url : 'integralexchange_findAll.action',
		root : 'integralexchangeList',
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
name : 'spendintegral',
mapping : 'spendintegral'
}
,{
name : 'exchangetime',
mapping : 'exchangetime'
}
,{
name : 'idCommodity',
mapping : 'idCommodity'
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
fieldLabel : '档案管理-积分兑换表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'integralexchange.idNumber',
width : '80%'
}
,{
fieldLabel : '兑换积分',
id : 'select_spendintegral',
xtype : 'numberfield',
name : 'integralexchange.spendintegral',
width : '80%'
}
,{
fieldLabel : '兑换物品主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'integralexchange.idCommodity',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'integralexchange.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'integralexchange.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'integralexchange.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '兑换人主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'integralexchange.idUser',
width : '80%'
}
,{
fieldLabel : '兑换时间',
id : 'select_exchangetime',
xtype : 'datetimefield',
name : 'integralexchange.exchangetime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'integralexchange.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'integralexchange.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'integralexchange.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'integralexchange.back5',
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
queryintegralexchangeStore.proxy = new Ext.data.HttpProxy({
url : 'integralexchange_findInfoByConditions.action?'
+'integralexchange.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&integralexchange.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&integralexchange.spendintegral='
+ Ext.getCmp('select_spendintegral').getValue()
+'&integralexchange.exchangetime='
+ Ext.getCmp('select_exchangetime').getValue()
+'&integralexchange.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&integralexchange.ts='
+ Ext.getCmp('select_ts').getValue()
+'&integralexchange.dr='
+ Ext.getCmp('select_dr').getValue()
+'&integralexchange.back1='
+ Ext.getCmp('select_back1').getValue()
+'&integralexchange.back2='
+ Ext.getCmp('select_back2').getValue()
+'&integralexchange.back3='
+ Ext.getCmp('select_back3').getValue()
+'&integralexchange.back4='
+ Ext.getCmp('select_back4').getValue()
+'&integralexchange.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryintegralexchangeStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryintegralexchangeStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryintegralexchangeGrid = new Ext.grid.GridPanel({
		store : queryintegralexchangeStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '档案管理-积分兑换表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '兑换人主键',
dataIndex : 'idUser',
width : 120 
}
,{
header : '兑换积分',
dataIndex : 'spendintegral',
width : 120 
}
,{
header : '兑换时间',
dataIndex : 'exchangetime',
width : 120 
}
,{
header : '兑换物品主键',
dataIndex : 'idCommodity',
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
				addintegralexchange();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryintegralexchangeGrid, queryintegralexchangeStore, "integralexchange_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryintegralexchangeStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'integralexchangeGrid',
		items : [selectUnitForm, queryintegralexchangeGrid]
	});
	var divHeight = document.getElementById('integralexchangeGrid').offsetHeight;
	var divWidth = document.getElementById('integralexchangeGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryintegralexchangeGrid.setWidth(showQueryPanel.getWidth());
	queryintegralexchangeGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addintegralexchangeForm = new Ext.FormPanel({
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
fieldLabel : '档案管理-积分兑换表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'integralexchange.idNumber',
width : '80%'
}
,{
fieldLabel : '兑换积分',
id : 'add_spendintegral',
xtype : 'numberfield',
name : 'integralexchange.spendintegral',
width : '80%'
}
,{
fieldLabel : '兑换物品主键',
id : 'add_idCommodity',
xtype : 'numberfield',
name : 'integralexchange.idCommodity',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'integralexchange.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'integralexchange.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'integralexchange.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '兑换人主键',
id : 'add_idUser',
xtype : 'numberfield',
name : 'integralexchange.idUser',
width : '80%'
}
,{
fieldLabel : '兑换时间',
id : 'add_exchangetime',
xtype : 'datetimefield',
name : 'integralexchange.exchangetime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'integralexchange.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'integralexchange.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'integralexchange.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'integralexchange.back5',
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
				check(addintegralexchangeForm, "integralexchange_addNewInfo.action", queryintegralexchangeStore, "添加信息")
				addintegralexchangeWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addintegralexchangeWin.hide();
				addintegralexchangeForm.form.reset();
			}
		}]

	});

	addintegralexchangeWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addintegralexchangeForm
	});

	addintegralexchange = function() {
		addintegralexchangeWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updateintegralexchangeReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'integralexchange.idNumber',
mapping : 'idNumber'
}
,{
name : 'integralexchange.idUser',
mapping : 'idUser'
}
,{
name : 'integralexchange.spendintegral',
mapping : 'spendintegral'
}
,{
name : 'integralexchange.exchangetime',
mapping : 'exchangetime'
}
,{
name : 'integralexchange.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'integralexchange.ts',
mapping : 'ts'
}
,{
name : 'integralexchange.dr',
mapping : 'dr'
}
,{
name : 'integralexchange.back1',
mapping : 'back1'
}
,{
name : 'integralexchange.back2',
mapping : 'back2'
}
,{
name : 'integralexchange.back3',
mapping : 'back3'
}
,{
name : 'integralexchange.back4',
mapping : 'back4'
}
,{
name : 'integralexchange.back5',
mapping : 'back5'
}
]
	);
		
	updateintegralexchangeForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateintegralexchangeReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '档案管理-积分兑换表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'integralexchange.idNumber',
width : '80%'
}
,{
fieldLabel : '兑换积分',
id : 'uppdate_spendintegral',
xtype : 'numberfield',
name : 'integralexchange.spendintegral',
width : '80%'
}
,{
fieldLabel : '兑换物品主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'integralexchange.idCommodity',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'integralexchange.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'integralexchange.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'integralexchange.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '兑换人主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'integralexchange.idUser',
width : '80%'
}
,{
fieldLabel : '兑换时间',
id : 'uppdate_exchangetime',
xtype : 'datetimefield',
name : 'integralexchange.exchangetime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'integralexchange.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'integralexchange.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'integralexchange.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'integralexchange.back5',
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
				check(updateintegralexchangeForm, "integralexchange_update.action", queryintegralexchangeStore, "修改信息")
				updateintegralexchangeWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateintegralexchangeWin.hide();
				updateintegralexchangeForm.form.reset();
			}
		}]
	});

	updateintegralexchangeWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateintegralexchangeForm
	});

	update = function() {
		_record = queryintegralexchangeGrid.getSelectionModel().getSelected();
		flag = queryintegralexchangeGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateintegralexchangeWin.show();
					
			updateintegralexchangeForm.getForm().load({
				url : 'integralexchange_findById.action?integralexchange.idNumber='+ _record.get('idNumber'),
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
 
