
var querycommoditydescribeStore;			
var querycommoditydescribeGrid;
var addcommoditydescribe;
var addcommoditydescribeForm;
var addcommoditydescribeWin;
var updatecommoditydescribe;
var updatecommoditydescribeWin;
var updatecommoditydescribeForm;
var updatecommoditydescribeReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/commoditydescribeView.jsp');
	 querycommoditydescribeStore = new Ext.data.JsonStore({
		url : 'commoditydescribe_findAll.action',
		root : 'commoditydescribeList',
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
name : 'idCommodity',
mapping : 'idCommodity'
}
,{
name : 'imagename1',
mapping : 'imagename1'
}
,{
name : 'describe1',
mapping : 'describe1'
}
,{
name : 'imagename2',
mapping : 'imagename2'
}
,{
name : 'describe2',
mapping : 'describe2'
}
,{
name : 'imagename3',
mapping : 'imagename3'
}
,{
name : 'describe3',
mapping : 'describe3'
}
,{
name : 'imagename4',
mapping : 'imagename4'
}
,{
name : 'describe4',
mapping : 'describe4'
}
,{
name : 'imagename5',
mapping : 'imagename5'
}
,{
name : 'describe5',
mapping : 'describe5'
}
,{
name : 'imagename6',
mapping : 'imagename6'
}
,{
name : 'describe6',
mapping : 'describe6'
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
fieldLabel : '商品管理-商品图文描述表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'commoditydescribe.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称1',
id : 'select_imagename1',
xtype : 'textfield',
name : 'commoditydescribe.imagename1',
width : '80%'
}
,{
fieldLabel : '图片名称2',
id : 'select_imagename2',
xtype : 'textfield',
name : 'commoditydescribe.imagename2',
width : '80%'
}
,{
fieldLabel : '图片名称3',
id : 'select_imagename3',
xtype : 'textfield',
name : 'commoditydescribe.imagename3',
width : '80%'
}
,{
fieldLabel : '图片名称4',
id : 'select_imagename4',
xtype : 'textfield',
name : 'commoditydescribe.imagename4',
width : '80%'
}
,{
fieldLabel : '图片名称5',
id : 'select_imagename5',
xtype : 'textfield',
name : 'commoditydescribe.imagename5',
width : '80%'
}
,{
fieldLabel : '图片名称6',
id : 'select_imagename6',
xtype : 'textfield',
name : 'commoditydescribe.imagename6',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'commoditydescribe.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'commoditydescribe.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'commoditydescribe.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'commoditydescribe.back5',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品主键',
id : 'select_idCommodity',
xtype : 'numberfield',
name : 'commoditydescribe.idCommodity',
width : '80%'
}
,{
fieldLabel : '描述1',
id : 'select_describe1',
xtype : 'textfield',
name : 'commoditydescribe.describe1',
width : '80%'
}
,{
fieldLabel : '描述2',
id : 'select_describe2',
xtype : 'textfield',
name : 'commoditydescribe.describe2',
width : '80%'
}
,{
fieldLabel : '描述3',
id : 'select_describe3',
xtype : 'textfield',
name : 'commoditydescribe.describe3',
width : '80%'
}
,{
fieldLabel : '描述4',
id : 'select_describe4',
xtype : 'textfield',
name : 'commoditydescribe.describe4',
width : '80%'
}
,{
fieldLabel : '描述5',
id : 'select_describe5',
xtype : 'textfield',
name : 'commoditydescribe.describe5',
width : '80%'
}
,{
fieldLabel : '描述5',
id : 'select_describe6',
xtype : 'textfield',
name : 'commoditydescribe.describe6',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'commoditydescribe.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'commoditydescribe.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'commoditydescribe.back4',
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
querycommoditydescribeStore.proxy = new Ext.data.HttpProxy({
url : 'commoditydescribe_findInfoByConditions.action?'
+'commoditydescribe.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&commoditydescribe.idCommodity='
+ Ext.getCmp('select_idCommodity').getValue()
+'&commoditydescribe.imagename1='
+ Ext.getCmp('select_imagename1').getValue()
+'&commoditydescribe.describe1='
+ Ext.getCmp('select_describe1').getValue()
+'&commoditydescribe.imagename2='
+ Ext.getCmp('select_imagename2').getValue()
+'&commoditydescribe.describe2='
+ Ext.getCmp('select_describe2').getValue()
+'&commoditydescribe.imagename3='
+ Ext.getCmp('select_imagename3').getValue()
+'&commoditydescribe.describe3='
+ Ext.getCmp('select_describe3').getValue()
+'&commoditydescribe.imagename4='
+ Ext.getCmp('select_imagename4').getValue()
+'&commoditydescribe.describe4='
+ Ext.getCmp('select_describe4').getValue()
+'&commoditydescribe.imagename5='
+ Ext.getCmp('select_imagename5').getValue()
+'&commoditydescribe.describe5='
+ Ext.getCmp('select_describe5').getValue()
+'&commoditydescribe.imagename6='
+ Ext.getCmp('select_imagename6').getValue()
+'&commoditydescribe.describe6='
+ Ext.getCmp('select_describe6').getValue()
+'&commoditydescribe.ts='
+ Ext.getCmp('select_ts').getValue()
+'&commoditydescribe.dr='
+ Ext.getCmp('select_dr').getValue()
+'&commoditydescribe.back1='
+ Ext.getCmp('select_back1').getValue()
+'&commoditydescribe.back2='
+ Ext.getCmp('select_back2').getValue()
+'&commoditydescribe.back3='
+ Ext.getCmp('select_back3').getValue()
+'&commoditydescribe.back4='
+ Ext.getCmp('select_back4').getValue()
+'&commoditydescribe.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querycommoditydescribeStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querycommoditydescribeStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommoditydescribeGrid = new Ext.grid.GridPanel({
		store : querycommoditydescribeStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品管理-商品图文描述表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '商品主键',
dataIndex : 'idCommodity',
width : 120 
}
,{
header : '图片名称1',
dataIndex : 'imagename1',
width : 120 
}
,{
header : '描述1',
dataIndex : 'describe1',
width : 120 
}
,{
header : '图片名称2',
dataIndex : 'imagename2',
width : 120 
}
,{
header : '描述2',
dataIndex : 'describe2',
width : 120 
}
,{
header : '图片名称3',
dataIndex : 'imagename3',
width : 120 
}
,{
header : '描述3',
dataIndex : 'describe3',
width : 120 
}
,{
header : '图片名称4',
dataIndex : 'imagename4',
width : 120 
}
,{
header : '描述4',
dataIndex : 'describe4',
width : 120 
}
,{
header : '图片名称5',
dataIndex : 'imagename5',
width : 120 
}
,{
header : '描述5',
dataIndex : 'describe5',
width : 120 
}
,{
header : '图片名称6',
dataIndex : 'imagename6',
width : 120 
}
,{
header : '描述5',
dataIndex : 'describe6',
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
				addcommoditydescribe();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommoditydescribeGrid, querycommoditydescribeStore, "commoditydescribe_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycommoditydescribeStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commoditydescribeGrid',
		items : [selectUnitForm, querycommoditydescribeGrid]
	});
	var divHeight = document.getElementById('commoditydescribeGrid').offsetHeight;
	var divWidth = document.getElementById('commoditydescribeGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommoditydescribeGrid.setWidth(showQueryPanel.getWidth());
	querycommoditydescribeGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addcommoditydescribeForm = new Ext.FormPanel({
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
fieldLabel : '商品管理-商品图文描述表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'commoditydescribe.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称1',
id : 'add_imagename1',
xtype : 'textfield',
name : 'commoditydescribe.imagename1',
width : '80%'
}
,{
fieldLabel : '图片名称2',
id : 'add_imagename2',
xtype : 'textfield',
name : 'commoditydescribe.imagename2',
width : '80%'
}
,{
fieldLabel : '图片名称3',
id : 'add_imagename3',
xtype : 'textfield',
name : 'commoditydescribe.imagename3',
width : '80%'
}
,{
fieldLabel : '图片名称4',
id : 'add_imagename4',
xtype : 'textfield',
name : 'commoditydescribe.imagename4',
width : '80%'
}
,{
fieldLabel : '图片名称5',
id : 'add_imagename5',
xtype : 'textfield',
name : 'commoditydescribe.imagename5',
width : '80%'
}
,{
fieldLabel : '图片名称6',
id : 'add_imagename6',
xtype : 'textfield',
name : 'commoditydescribe.imagename6',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'commoditydescribe.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'commoditydescribe.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'commoditydescribe.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'commoditydescribe.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品主键',
id : 'add_idCommodity',
xtype : 'numberfield',
name : 'commoditydescribe.idCommodity',
width : '80%'
}
,{
fieldLabel : '描述1',
id : 'add_describe1',
xtype : 'textfield',
name : 'commoditydescribe.describe1',
width : '80%'
}
,{
fieldLabel : '描述2',
id : 'add_describe2',
xtype : 'textfield',
name : 'commoditydescribe.describe2',
width : '80%'
}
,{
fieldLabel : '描述3',
id : 'add_describe3',
xtype : 'textfield',
name : 'commoditydescribe.describe3',
width : '80%'
}
,{
fieldLabel : '描述4',
id : 'add_describe4',
xtype : 'textfield',
name : 'commoditydescribe.describe4',
width : '80%'
}
,{
fieldLabel : '描述5',
id : 'add_describe5',
xtype : 'textfield',
name : 'commoditydescribe.describe5',
width : '80%'
}
,{
fieldLabel : '描述5',
id : 'add_describe6',
xtype : 'textfield',
name : 'commoditydescribe.describe6',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'commoditydescribe.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'commoditydescribe.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'commoditydescribe.back4',
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
				check(addcommoditydescribeForm, "commoditydescribe_addNewInfo.action", querycommoditydescribeStore, "添加信息")
				addcommoditydescribeWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addcommoditydescribeWin.hide();
				addcommoditydescribeForm.form.reset();
			}
		}]

	});

	addcommoditydescribeWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addcommoditydescribeForm
	});

	addcommoditydescribe = function() {
		addcommoditydescribeWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatecommoditydescribeReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commoditydescribe.idNumber',
mapping : 'idNumber'
}
,{
name : 'commoditydescribe.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'commoditydescribe.imagename1',
mapping : 'imagename1'
}
,{
name : 'commoditydescribe.describe1',
mapping : 'describe1'
}
,{
name : 'commoditydescribe.imagename2',
mapping : 'imagename2'
}
,{
name : 'commoditydescribe.describe2',
mapping : 'describe2'
}
,{
name : 'commoditydescribe.imagename3',
mapping : 'imagename3'
}
,{
name : 'commoditydescribe.describe3',
mapping : 'describe3'
}
,{
name : 'commoditydescribe.imagename4',
mapping : 'imagename4'
}
,{
name : 'commoditydescribe.describe4',
mapping : 'describe4'
}
,{
name : 'commoditydescribe.imagename5',
mapping : 'imagename5'
}
,{
name : 'commoditydescribe.describe5',
mapping : 'describe5'
}
,{
name : 'commoditydescribe.imagename6',
mapping : 'imagename6'
}
,{
name : 'commoditydescribe.describe6',
mapping : 'describe6'
}
,{
name : 'commoditydescribe.ts',
mapping : 'ts'
}
,{
name : 'commoditydescribe.dr',
mapping : 'dr'
}
,{
name : 'commoditydescribe.back1',
mapping : 'back1'
}
,{
name : 'commoditydescribe.back2',
mapping : 'back2'
}
,{
name : 'commoditydescribe.back3',
mapping : 'back3'
}
,{
name : 'commoditydescribe.back4',
mapping : 'back4'
}
,{
name : 'commoditydescribe.back5',
mapping : 'back5'
}
]
	);
		
	updatecommoditydescribeForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommoditydescribeReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品管理-商品图文描述表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commoditydescribe.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称1',
id : 'uppdate_imagename1',
xtype : 'textfield',
name : 'commoditydescribe.imagename1',
width : '80%'
}
,{
fieldLabel : '图片名称2',
id : 'uppdate_imagename2',
xtype : 'textfield',
name : 'commoditydescribe.imagename2',
width : '80%'
}
,{
fieldLabel : '图片名称3',
id : 'uppdate_imagename3',
xtype : 'textfield',
name : 'commoditydescribe.imagename3',
width : '80%'
}
,{
fieldLabel : '图片名称4',
id : 'uppdate_imagename4',
xtype : 'textfield',
name : 'commoditydescribe.imagename4',
width : '80%'
}
,{
fieldLabel : '图片名称5',
id : 'uppdate_imagename5',
xtype : 'textfield',
name : 'commoditydescribe.imagename5',
width : '80%'
}
,{
fieldLabel : '图片名称6',
id : 'uppdate_imagename6',
xtype : 'textfield',
name : 'commoditydescribe.imagename6',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'commoditydescribe.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'commoditydescribe.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'commoditydescribe.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'commoditydescribe.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'commoditydescribe.idCommodity',
width : '80%'
}
,{
fieldLabel : '描述1',
id : 'uppdate_describe1',
xtype : 'textfield',
name : 'commoditydescribe.describe1',
width : '80%'
}
,{
fieldLabel : '描述2',
id : 'uppdate_describe2',
xtype : 'textfield',
name : 'commoditydescribe.describe2',
width : '80%'
}
,{
fieldLabel : '描述3',
id : 'uppdate_describe3',
xtype : 'textfield',
name : 'commoditydescribe.describe3',
width : '80%'
}
,{
fieldLabel : '描述4',
id : 'uppdate_describe4',
xtype : 'textfield',
name : 'commoditydescribe.describe4',
width : '80%'
}
,{
fieldLabel : '描述5',
id : 'uppdate_describe5',
xtype : 'textfield',
name : 'commoditydescribe.describe5',
width : '80%'
}
,{
fieldLabel : '描述5',
id : 'uppdate_describe6',
xtype : 'textfield',
name : 'commoditydescribe.describe6',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'commoditydescribe.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'commoditydescribe.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'commoditydescribe.back4',
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
				check(updatecommoditydescribeForm, "commoditydescribe_update.action", querycommoditydescribeStore, "修改信息")
				updatecommoditydescribeWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommoditydescribeWin.hide();
				updatecommoditydescribeForm.form.reset();
			}
		}]
	});

	updatecommoditydescribeWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommoditydescribeForm
	});

	update = function() {
		_record = querycommoditydescribeGrid.getSelectionModel().getSelected();
		flag = querycommoditydescribeGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommoditydescribeWin.show();
					
			updatecommoditydescribeForm.getForm().load({
				url : 'commoditydescribe_findById.action?commoditydescribe.idNumber='+ _record.get('idNumber'),
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
 
