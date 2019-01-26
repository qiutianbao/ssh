
var querysecondorderdetailsStore;			
var querysecondorderdetailsGrid;
var addsecondorderdetails;
var addsecondorderdetailsForm;
var addsecondorderdetailsWin;
var updatesecondorderdetails;
var updatesecondorderdetailsWin;
var updatesecondorderdetailsForm;
var updatesecondorderdetailsReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/secondorderdetailsView.jsp');
	 querysecondorderdetailsStore = new Ext.data.JsonStore({
		url : 'secondorderdetails_findAll.action',
		root : 'secondorderdetailsList',
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
name : 'idFirstorder',
mapping : 'idFirstorder'
}
,{
name : 'idSecondorder',
mapping : 'idSecondorder'
}
,{
name : 'secondorderNo',
mapping : 'secondorderNo'
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
fieldLabel : '订单管理-归集后的二级订单详情表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'secondorderdetails.idNumber',
width : '80%'
}
,{
fieldLabel : '二级订单主键',
id : 'select_idSecondorder',
xtype : 'numberfield',
name : 'secondorderdetails.idSecondorder',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'secondorderdetails.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'secondorderdetails.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'secondorderdetails.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'secondorderdetails.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单主键',
id : 'select_idFirstorder',
xtype : 'numberfield',
name : 'secondorderdetails.idFirstorder',
width : '80%'
}
,{
fieldLabel : '二级订单编号',
id : 'select_secondorderNo',
xtype : 'textfield',
name : 'secondorderdetails.secondorderNo',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'secondorderdetails.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'secondorderdetails.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'secondorderdetails.back4',
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
querysecondorderdetailsStore.proxy = new Ext.data.HttpProxy({
url : 'secondorderdetails_findInfoByConditions.action?'
+'secondorderdetails.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&secondorderdetails.idFirstorder='
+ Ext.getCmp('select_idFirstorder').getValue()
+'&secondorderdetails.idSecondorder='
+ Ext.getCmp('select_idSecondorder').getValue()
+'&secondorderdetails.secondorderNo='
+ Ext.getCmp('select_secondorderNo').getValue()
+'&secondorderdetails.ts='
+ Ext.getCmp('select_ts').getValue()
+'&secondorderdetails.dr='
+ Ext.getCmp('select_dr').getValue()
+'&secondorderdetails.back1='
+ Ext.getCmp('select_back1').getValue()
+'&secondorderdetails.back2='
+ Ext.getCmp('select_back2').getValue()
+'&secondorderdetails.back3='
+ Ext.getCmp('select_back3').getValue()
+'&secondorderdetails.back4='
+ Ext.getCmp('select_back4').getValue()
+'&secondorderdetails.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querysecondorderdetailsStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querysecondorderdetailsStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysecondorderdetailsGrid = new Ext.grid.GridPanel({
		store : querysecondorderdetailsStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '订单管理-归集后的二级订单详情表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '一级订单主键',
dataIndex : 'idFirstorder',
width : 120 
}
,{
header : '二级订单主键',
dataIndex : 'idSecondorder',
width : 120 
}
,{
header : '二级订单编号',
dataIndex : 'secondorderNo',
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
				addsecondorderdetails();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysecondorderdetailsGrid, querysecondorderdetailsStore, "secondorderdetails_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysecondorderdetailsStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'secondorderdetailsGrid',
		items : [selectUnitForm, querysecondorderdetailsGrid]
	});
	var divHeight = document.getElementById('secondorderdetailsGrid').offsetHeight;
	var divWidth = document.getElementById('secondorderdetailsGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysecondorderdetailsGrid.setWidth(showQueryPanel.getWidth());
	querysecondorderdetailsGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addsecondorderdetailsForm = new Ext.FormPanel({
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
fieldLabel : '订单管理-归集后的二级订单详情表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'secondorderdetails.idNumber',
width : '80%'
}
,{
fieldLabel : '二级订单主键',
id : 'add_idSecondorder',
xtype : 'numberfield',
name : 'secondorderdetails.idSecondorder',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'secondorderdetails.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'secondorderdetails.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'secondorderdetails.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'secondorderdetails.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单主键',
id : 'add_idFirstorder',
xtype : 'numberfield',
name : 'secondorderdetails.idFirstorder',
width : '80%'
}
,{
fieldLabel : '二级订单编号',
id : 'add_secondorderNo',
xtype : 'textfield',
name : 'secondorderdetails.secondorderNo',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'secondorderdetails.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'secondorderdetails.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'secondorderdetails.back4',
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
				check(addsecondorderdetailsForm, "secondorderdetails_addNewInfo.action", querysecondorderdetailsStore, "添加信息")
				addsecondorderdetailsWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addsecondorderdetailsWin.hide();
				addsecondorderdetailsForm.form.reset();
			}
		}]

	});

	addsecondorderdetailsWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addsecondorderdetailsForm
	});

	addsecondorderdetails = function() {
		addsecondorderdetailsWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatesecondorderdetailsReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'secondorderdetails.idNumber',
mapping : 'idNumber'
}
,{
name : 'secondorderdetails.idFirstorder',
mapping : 'idFirstorder'
}
,{
name : 'secondorderdetails.idSecondorder',
mapping : 'idSecondorder'
}
,{
name : 'secondorderdetails.secondorderNo',
mapping : 'secondorderNo'
}
,{
name : 'secondorderdetails.ts',
mapping : 'ts'
}
,{
name : 'secondorderdetails.dr',
mapping : 'dr'
}
,{
name : 'secondorderdetails.back1',
mapping : 'back1'
}
,{
name : 'secondorderdetails.back2',
mapping : 'back2'
}
,{
name : 'secondorderdetails.back3',
mapping : 'back3'
}
,{
name : 'secondorderdetails.back4',
mapping : 'back4'
}
,{
name : 'secondorderdetails.back5',
mapping : 'back5'
}
]
	);
		
	updatesecondorderdetailsForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesecondorderdetailsReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单管理-归集后的二级订单详情表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'secondorderdetails.idNumber',
width : '80%'
}
,{
fieldLabel : '二级订单主键',
id : 'uppdate_idSecondorder',
xtype : 'numberfield',
name : 'secondorderdetails.idSecondorder',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'secondorderdetails.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'secondorderdetails.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'secondorderdetails.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'secondorderdetails.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单主键',
id : 'uppdate_idFirstorder',
xtype : 'numberfield',
name : 'secondorderdetails.idFirstorder',
width : '80%'
}
,{
fieldLabel : '二级订单编号',
id : 'uppdate_secondorderNo',
xtype : 'textfield',
name : 'secondorderdetails.secondorderNo',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'secondorderdetails.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'secondorderdetails.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'secondorderdetails.back4',
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
				check(updatesecondorderdetailsForm, "secondorderdetails_update.action", querysecondorderdetailsStore, "修改信息")
				updatesecondorderdetailsWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesecondorderdetailsWin.hide();
				updatesecondorderdetailsForm.form.reset();
			}
		}]
	});

	updatesecondorderdetailsWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesecondorderdetailsForm
	});

	update = function() {
		_record = querysecondorderdetailsGrid.getSelectionModel().getSelected();
		flag = querysecondorderdetailsGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesecondorderdetailsWin.show();
					
			updatesecondorderdetailsForm.getForm().load({
				url : 'secondorderdetails_findById.action?secondorderdetails.idNumber='+ _record.get('idNumber'),
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
 
