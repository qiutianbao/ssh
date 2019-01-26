
var querycommoditypriceStore;			
var querycommoditypriceGrid;
var addcommodityprice;
var addcommoditypriceForm;
var addcommoditypriceWin;
var updatecommodityprice;
var updatecommoditypriceWin;
var updatecommoditypriceForm;
var updatecommoditypriceReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/commoditypriceView.jsp');
	 querycommoditypriceStore = new Ext.data.JsonStore({
		url : 'commodityprice_findAll.action',
		root : 'commoditypriceList',
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
name : 'starttime',
mapping : 'starttime'
}
,{
name : 'endtime',
mapping : 'endtime'
}
,{
name : 'price',
mapping : 'price'
}
,{
name : 'idCommodity',
mapping : 'idCommodity'
}
,{
name : 'idLevel',
mapping : 'idLevel'
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
fieldLabel : '商品管理-商品价格表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'commodityprice.idNumber',
width : '80%'
}
,{
fieldLabel : '结束时间',
id : 'select_endtime',
xtype : 'datetimefield',
name : 'commodityprice.endtime',
anchor : '95%'
}
,{
fieldLabel : '商品表主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'commodityprice.idCommodity',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'commodityprice.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'commodityprice.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'commodityprice.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'commodityprice.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '开始时间',
id : 'select_starttime',
xtype : 'datetimefield',
name : 'commodityprice.starttime',
anchor : '95%'
}
,{
fieldLabel : '单价',
id : 'select_price',
xtype : 'numberfield',
name : 'commodityprice.price',
width : '80%'
}
,{
fieldLabel : '商品级别表主键',
id : 'select_idLevel',
xtype : 'numberfield',
name : 'commodityprice.idLevel',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'commodityprice.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'commodityprice.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'commodityprice.back4',
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
querycommoditypriceStore.proxy = new Ext.data.HttpProxy({
url : 'commodityprice_findInfoByConditions.action?'
+'commodityprice.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&commodityprice.starttime='
+ Ext.getCmp('select_starttime').getValue()
+'&commodityprice.endtime='
+ Ext.getCmp('select_endtime').getValue()
+'&commodityprice.price='
+ Ext.getCmp('select_price').getValue()
+'&commodityprice.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&commodityprice.idLevel='
+ Ext.getCmp('select_idLevel').getValue()
+'&commodityprice.ts='
+ Ext.getCmp('select_ts').getValue()
+'&commodityprice.dr='
+ Ext.getCmp('select_dr').getValue()
+'&commodityprice.back1='
+ Ext.getCmp('select_back1').getValue()
+'&commodityprice.back2='
+ Ext.getCmp('select_back2').getValue()
+'&commodityprice.back3='
+ Ext.getCmp('select_back3').getValue()
+'&commodityprice.back4='
+ Ext.getCmp('select_back4').getValue()
+'&commodityprice.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querycommoditypriceStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querycommoditypriceStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommoditypriceGrid = new Ext.grid.GridPanel({
		store : querycommoditypriceStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品管理-商品价格表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '开始时间',
dataIndex : 'starttime',
width : 120 
}
,{
header : '结束时间',
dataIndex : 'endtime',
width : 120 
}
,{
header : '单价',
dataIndex : 'price',
width : 120 
}
,{
header : '商品表主键',
dataIndex : 'idCommodity',
width : 120 
}
,{
header : '商品级别表主键',
dataIndex : 'idLevel',
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
				addcommodityprice();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommoditypriceGrid, querycommoditypriceStore, "commodityprice_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycommoditypriceStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commoditypriceGrid',
		items : [selectUnitForm, querycommoditypriceGrid]
	});
	var divHeight = document.getElementById('commoditypriceGrid').offsetHeight;
	var divWidth = document.getElementById('commoditypriceGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommoditypriceGrid.setWidth(showQueryPanel.getWidth());
	querycommoditypriceGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addcommoditypriceForm = new Ext.FormPanel({
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
fieldLabel : '商品管理-商品价格表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'commodityprice.idNumber',
width : '80%'
}
,{
fieldLabel : '结束时间',
id : 'add_endtime',
xtype : 'datetimefield',
name : 'commodityprice.endtime',
anchor : '95%'
}
,{
fieldLabel : '商品表主键',
id : 'add_idCommodity',
xtype : 'numberfield',
name : 'commodityprice.idCommodity',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'commodityprice.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'commodityprice.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'commodityprice.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'commodityprice.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '开始时间',
id : 'add_starttime',
xtype : 'datetimefield',
name : 'commodityprice.starttime',
anchor : '95%'
}
,{
fieldLabel : '单价',
id : 'add_price',
xtype : 'numberfield',
name : 'commodityprice.price',
width : '80%'
}
,{
fieldLabel : '商品级别表主键',
id : 'add_idLevel',
xtype : 'numberfield',
name : 'commodityprice.idLevel',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'add_dr',
xtype : 'numberfield',
name : 'commodityprice.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'commodityprice.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'commodityprice.back4',
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
				check(addcommoditypriceForm, "commodityprice_addNewInfo.action", querycommoditypriceStore, "添加信息")
				addcommoditypriceWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addcommoditypriceWin.hide();
				addcommoditypriceForm.form.reset();
			}
		}]

	});

	addcommoditypriceWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addcommoditypriceForm
	});

	addcommodityprice = function() {
		addcommoditypriceWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatecommoditypriceReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commodityprice.idNumber',
mapping : 'idNumber'
}
,{
name : 'commodityprice.starttime',
mapping : 'starttime'
}
,{
name : 'commodityprice.endtime',
mapping : 'endtime'
}
,{
name : 'commodityprice.price',
mapping : 'price'
}
,{
name : 'commodityprice.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'commodityprice.idLevel',
mapping : 'idLevel'
}
,{
name : 'commodityprice.ts',
mapping : 'ts'
}
,{
name : 'commodityprice.dr',
mapping : 'dr'
}
,{
name : 'commodityprice.back1',
mapping : 'back1'
}
,{
name : 'commodityprice.back2',
mapping : 'back2'
}
,{
name : 'commodityprice.back3',
mapping : 'back3'
}
,{
name : 'commodityprice.back4',
mapping : 'back4'
}
,{
name : 'commodityprice.back5',
mapping : 'back5'
}
]
	);
		
	updatecommoditypriceForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommoditypriceReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品管理-商品价格表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commodityprice.idNumber',
width : '80%'
}
,{
fieldLabel : '结束时间',
id : 'uppdate_endtime',
xtype : 'datetimefield',
name : 'commodityprice.endtime',
anchor : '95%'
}
,{
fieldLabel : '商品表主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'commodityprice.idCommodity',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'commodityprice.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'commodityprice.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'commodityprice.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'commodityprice.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '开始时间',
id : 'uppdate_starttime',
xtype : 'datetimefield',
name : 'commodityprice.starttime',
anchor : '95%'
}
,{
fieldLabel : '单价',
id : 'uppdate_price',
xtype : 'numberfield',
name : 'commodityprice.price',
width : '80%'
}
,{
fieldLabel : '商品级别表主键',
id : 'uppdate_idLevel',
xtype : 'numberfield',
name : 'commodityprice.idLevel',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'commodityprice.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'commodityprice.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'commodityprice.back4',
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
				check(updatecommoditypriceForm, "commodityprice_update.action", querycommoditypriceStore, "修改信息")
				updatecommoditypriceWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommoditypriceWin.hide();
				updatecommoditypriceForm.form.reset();
			}
		}]
	});

	updatecommoditypriceWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommoditypriceForm
	});

	update = function() {
		_record = querycommoditypriceGrid.getSelectionModel().getSelected();
		flag = querycommoditypriceGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommoditypriceWin.show();
					
			updatecommoditypriceForm.getForm().load({
				url : 'commodityprice_findById.action?commodityprice.idNumber='+ _record.get('idNumber'),
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
 
