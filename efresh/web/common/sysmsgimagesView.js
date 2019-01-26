
var querysysmsgimagesStore;			
var querysysmsgimagesGrid;
var addsysmsgimages;
var addsysmsgimagesForm;
var addsysmsgimagesWin;
var updatesysmsgimages;
var updatesysmsgimagesWin;
var updatesysmsgimagesForm;
var updatesysmsgimagesReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/sysmsgimagesView.jsp');
	 querysysmsgimagesStore = new Ext.data.JsonStore({
		url : 'sysmsgimages_findAll.action',
		root : 'sysmsgimagesList',
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
name : 'idSysmsgconent',
mapping : 'idSysmsgconent'
}
,{
name : 'msgimgname',
mapping : 'msgimgname'
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
fieldLabel : '系统管理-系统消息图片表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'sysmsgimages.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'select_msgimgname',
xtype : 'textfield',
name : 'sysmsgimages.msgimgname',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'sysmsgimages.dr',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '消息内容表主键',
id : 'select_idSysmsgconent',
xtype : 'numberfield',
name : 'sysmsgimages.idSysmsgconent',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'sysmsgimages.ts',
width : '80%'
}
,{
fieldLabel : '预留字段',
id : 'select_back1',
xtype : 'textfield',
name : 'sysmsgimages.back1',
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
querysysmsgimagesStore.proxy = new Ext.data.HttpProxy({
url : 'sysmsgimages_findInfoByConditions.action?'
+'sysmsgimages.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&sysmsgimages.idSysmsgconent='
+ Ext.getCmp('select_idSysmsgconent').getValue()
+'&sysmsgimages.msgimgname='
+ Ext.getCmp('select_msgimgname').getValue()
+'&sysmsgimages.ts='
+ Ext.getCmp('select_ts').getValue()
+'&sysmsgimages.dr='
+ Ext.getCmp('select_dr').getValue()
+'&sysmsgimages.back1='
+ Ext.getCmp('select_back1').getValue()
});
	querysysmsgimagesStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querysysmsgimagesStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysysmsgimagesGrid = new Ext.grid.GridPanel({
		store : querysysmsgimagesStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '系统管理-系统消息图片表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '消息内容表主键',
dataIndex : 'idSysmsgconent',
width : 120 
}
,{
header : '图片名称',
dataIndex : 'msgimgname',
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
header : '预留字段',
dataIndex : 'back1',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addsysmsgimages();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysysmsgimagesGrid, querysysmsgimagesStore, "sysmsgimages_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysysmsgimagesStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'sysmsgimagesGrid',
		items : [selectUnitForm, querysysmsgimagesGrid]
	});
	var divHeight = document.getElementById('sysmsgimagesGrid').offsetHeight;
	var divWidth = document.getElementById('sysmsgimagesGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysysmsgimagesGrid.setWidth(showQueryPanel.getWidth());
	querysysmsgimagesGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addsysmsgimagesForm = new Ext.FormPanel({
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
fieldLabel : '系统管理-系统消息图片表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'sysmsgimages.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'add_msgimgname',
xtype : 'textfield',
name : 'sysmsgimages.msgimgname',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'sysmsgimages.dr',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '消息内容表主键',
id : 'add_idSysmsgconent',
xtype : 'numberfield',
name : 'sysmsgimages.idSysmsgconent',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'sysmsgimages.ts',
width : '80%'
}
,{
fieldLabel : '预留字段',
id : 'add_back1',
xtype : 'textfield',
name : 'sysmsgimages.back1',
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
				check(addsysmsgimagesForm, "sysmsgimages_addNewInfo.action", querysysmsgimagesStore, "添加信息")
				addsysmsgimagesWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addsysmsgimagesWin.hide();
				addsysmsgimagesForm.form.reset();
			}
		}]

	});

	addsysmsgimagesWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addsysmsgimagesForm
	});

	addsysmsgimages = function() {
		addsysmsgimagesWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatesysmsgimagesReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'sysmsgimages.idNumber',
mapping : 'idNumber'
}
,{
name : 'sysmsgimages.idSysmsgconent',
mapping : 'idSysmsgconent'
}
,{
name : 'sysmsgimages.msgimgname',
mapping : 'msgimgname'
}
,{
name : 'sysmsgimages.ts',
mapping : 'ts'
}
,{
name : 'sysmsgimages.dr',
mapping : 'dr'
}
,{
name : 'sysmsgimages.back1',
mapping : 'back1'
}
]
	);
		
	updatesysmsgimagesForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesysmsgimagesReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-系统消息图片表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'sysmsgimages.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'uppdate_msgimgname',
xtype : 'textfield',
name : 'sysmsgimages.msgimgname',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'sysmsgimages.dr',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '消息内容表主键',
id : 'uppdate_idSysmsgconent',
xtype : 'numberfield',
name : 'sysmsgimages.idSysmsgconent',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'sysmsgimages.ts',
width : '80%'
}
,{
fieldLabel : '预留字段',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'sysmsgimages.back1',
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
				check(updatesysmsgimagesForm, "sysmsgimages_update.action", querysysmsgimagesStore, "修改信息")
				updatesysmsgimagesWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesysmsgimagesWin.hide();
				updatesysmsgimagesForm.form.reset();
			}
		}]
	});

	updatesysmsgimagesWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesysmsgimagesForm
	});

	update = function() {
		_record = querysysmsgimagesGrid.getSelectionModel().getSelected();
		flag = querysysmsgimagesGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesysmsgimagesWin.show();
					
			updatesysmsgimagesForm.getForm().load({
				url : 'sysmsgimages_findById.action?sysmsgimages.idNumber='+ _record.get('idNumber'),
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
 
