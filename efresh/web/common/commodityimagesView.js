
var querycommodityimagesStore;			
var querycommodityimagesGrid;
var addcommodityimages;
var addcommodityimagesForm;
var addcommodityimagesWin;
var updatecommodityimages;
var updatecommodityimagesWin;
var updatecommodityimagesForm;
var updatecommodityimagesReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/commodityimagesView.jsp');
	 querycommodityimagesStore = new Ext.data.JsonStore({
		url : 'commodityimages_findAll.action',
		root : 'commodityimagesList',
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
name : 'imagename',
mapping : 'imagename'
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
fieldLabel : '商品管理-商品图片表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'commodityimages.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'commodityimages.idCommodity',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'commodityimages.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'commodityimages.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'commodityimages.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '图片名称',
id : 'select_imagename',
xtype : 'textfield',
name : 'commodityimages.imagename',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'commodityimages.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'commodityimages.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'commodityimages.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'commodityimages.back5',
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
querycommodityimagesStore.proxy = new Ext.data.HttpProxy({
url : 'commodityimages_findInfoByConditions.action?'
+'commodityimages.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&commodityimages.imagename='
+ Ext.getCmp('select_imagename').getValue()
+'&commodityimages.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&commodityimages.ts='
+ Ext.getCmp('select_ts').getValue()
+'&commodityimages.dr='
+ Ext.getCmp('select_dr').getValue()
+'&commodityimages.back1='
+ Ext.getCmp('select_back1').getValue()
+'&commodityimages.back2='
+ Ext.getCmp('select_back2').getValue()
+'&commodityimages.back3='
+ Ext.getCmp('select_back3').getValue()
+'&commodityimages.back4='
+ Ext.getCmp('select_back4').getValue()
+'&commodityimages.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querycommodityimagesStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querycommodityimagesStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommodityimagesGrid = new Ext.grid.GridPanel({
		store : querycommodityimagesStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品管理-商品图片表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '图片名称',
dataIndex : 'imagename',
width : 120 
}
,{
header : '商品主键',
dataIndex : 'idCommodity',
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
				addcommodityimages();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommodityimagesGrid, querycommodityimagesStore, "commodityimages_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycommodityimagesStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commodityimagesGrid',
		items : [selectUnitForm, querycommodityimagesGrid]
	});
	var divHeight = document.getElementById('commodityimagesGrid').offsetHeight;
	var divWidth = document.getElementById('commodityimagesGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommodityimagesGrid.setWidth(showQueryPanel.getWidth());
	querycommodityimagesGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addcommodityimagesForm = new Ext.FormPanel({
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
fieldLabel : '商品管理-商品图片表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'commodityimages.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'add_idCommodity',
xtype : 'numberfield',
name : 'commodityimages.idCommodity',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'add_dr',
xtype : 'numberfield',
name : 'commodityimages.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'commodityimages.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'commodityimages.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '图片名称',
id : 'add_imagename',
xtype : 'textfield',
name : 'commodityimages.imagename',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'commodityimages.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'commodityimages.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'commodityimages.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'commodityimages.back5',
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
				check(addcommodityimagesForm, "commodityimages_addNewInfo.action", querycommodityimagesStore, "添加信息")
				addcommodityimagesWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addcommodityimagesWin.hide();
				addcommodityimagesForm.form.reset();
			}
		}]

	});

	addcommodityimagesWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addcommodityimagesForm
	});

	addcommodityimages = function() {
		addcommodityimagesWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatecommodityimagesReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commodityimages.idNumber',
mapping : 'idNumber'
}
,{
name : 'commodityimages.imagename',
mapping : 'imagename'
}
,{
name : 'commodityimages.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'commodityimages.ts',
mapping : 'ts'
}
,{
name : 'commodityimages.dr',
mapping : 'dr'
}
,{
name : 'commodityimages.back1',
mapping : 'back1'
}
,{
name : 'commodityimages.back2',
mapping : 'back2'
}
,{
name : 'commodityimages.back3',
mapping : 'back3'
}
,{
name : 'commodityimages.back4',
mapping : 'back4'
}
,{
name : 'commodityimages.back5',
mapping : 'back5'
}
]
	);
		
	updatecommodityimagesForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommodityimagesReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品管理-商品图片表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commodityimages.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'commodityimages.idCommodity',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'commodityimages.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'commodityimages.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'commodityimages.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '图片名称',
id : 'uppdate_imagename',
xtype : 'textfield',
name : 'commodityimages.imagename',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'commodityimages.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'commodityimages.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'commodityimages.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'commodityimages.back5',
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
				check(updatecommodityimagesForm, "commodityimages_update.action", querycommodityimagesStore, "修改信息")
				updatecommodityimagesWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommodityimagesWin.hide();
				updatecommodityimagesForm.form.reset();
			}
		}]
	});

	updatecommodityimagesWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommodityimagesForm
	});

	update = function() {
		_record = querycommodityimagesGrid.getSelectionModel().getSelected();
		flag = querycommodityimagesGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommodityimagesWin.show();
					
			updatecommodityimagesForm.getForm().load({
				url : 'commodityimages_findById.action?commodityimages.idNumber='+ _record.get('idNumber'),
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
 
