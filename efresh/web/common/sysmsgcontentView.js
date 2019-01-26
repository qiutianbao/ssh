
var querysysmsgcontentStore;			
var querysysmsgcontentGrid;
var addsysmsgcontent;
var addsysmsgcontentForm;
var addsysmsgcontentWin;
var updatesysmsgcontent;
var updatesysmsgcontentWin;
var updatesysmsgcontentForm;
var updatesysmsgcontentReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/sysmsgcontentView.jsp');
	 querysysmsgcontentStore = new Ext.data.JsonStore({
		url : 'sysmsgcontent_findAll.action',
		root : 'sysmsgcontentList',
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
name : 'idSysmessge',
mapping : 'idSysmessge'
}
,{
name : 'msgcontent',
mapping : 'msgcontent'
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
name : 'subTitle',
mapping : 'subTitle'
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
fieldLabel : '系统管理-系统消息内容表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'sysmsgcontent.idNumber',
width : '80%'
}
,{
fieldLabel : '消息内容',
id : 'select_msgcontent',
xtype : 'textfield',
name : 'sysmsgcontent.msgcontent',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'select_dr',
xtype : 'numberfield',
name : 'sysmsgcontent.dr',
width : '80%'
}
,{
fieldLabel : '子标题',
id : 'select_subTitle',
xtype : 'textfield',
name : 'sysmsgcontent.subTitle',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统消息主键',
id : 'select_idSysmessge',
xtype : 'numberfield',
name : 'sysmsgcontent.idSysmessge',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'sysmsgcontent.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'sysmsgcontent.back1',
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
querysysmsgcontentStore.proxy = new Ext.data.HttpProxy({
url : 'sysmsgcontent_findInfoByConditions.action?'
+'sysmsgcontent.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&sysmsgcontent.idSysmessge='
+ Ext.getCmp('select_idSysmessge').getValue()
+'&sysmsgcontent.msgcontent='
+ Ext.getCmp('select_msgcontent').getValue()
+'&sysmsgcontent.ts='
+ Ext.getCmp('select_ts').getValue()
+'&sysmsgcontent.dr='
+ Ext.getCmp('select_dr').getValue()
+'&sysmsgcontent.back1='
+ Ext.getCmp('select_back1').getValue()
+'&sysmsgcontent.subTitle='
+ Ext.getCmp('select_subTitle').getValue()
});
	querysysmsgcontentStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querysysmsgcontentStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysysmsgcontentGrid = new Ext.grid.GridPanel({
		store : querysysmsgcontentStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '系统管理-系统消息内容表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '系统消息主键',
dataIndex : 'idSysmessge',
width : 120 
}
,{
header : '消息内容',
dataIndex : 'msgcontent',
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
header : '子标题',
dataIndex : 'subTitle',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addsysmsgcontent();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysysmsgcontentGrid, querysysmsgcontentStore, "sysmsgcontent_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysysmsgcontentStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'sysmsgcontentGrid',
		items : [selectUnitForm, querysysmsgcontentGrid]
	});
	var divHeight = document.getElementById('sysmsgcontentGrid').offsetHeight;
	var divWidth = document.getElementById('sysmsgcontentGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysysmsgcontentGrid.setWidth(showQueryPanel.getWidth());
	querysysmsgcontentGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addsysmsgcontentForm = new Ext.FormPanel({
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
fieldLabel : '系统管理-系统消息内容表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'sysmsgcontent.idNumber',
width : '80%'
}
,{
fieldLabel : '消息内容',
id : 'add_msgcontent',
xtype : 'textfield',
name : 'sysmsgcontent.msgcontent',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'add_dr',
xtype : 'numberfield',
name : 'sysmsgcontent.dr',
width : '80%'
}
,{
fieldLabel : '子标题',
id : 'add_subTitle',
xtype : 'textfield',
name : 'sysmsgcontent.subTitle',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统消息主键',
id : 'add_idSysmessge',
xtype : 'numberfield',
name : 'sysmsgcontent.idSysmessge',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'sysmsgcontent.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'sysmsgcontent.back1',
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
				check(addsysmsgcontentForm, "sysmsgcontent_addNewInfo.action", querysysmsgcontentStore, "添加信息")
				addsysmsgcontentWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addsysmsgcontentWin.hide();
				addsysmsgcontentForm.form.reset();
			}
		}]

	});

	addsysmsgcontentWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addsysmsgcontentForm
	});

	addsysmsgcontent = function() {
		addsysmsgcontentWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatesysmsgcontentReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'sysmsgcontent.idNumber',
mapping : 'idNumber'
}
,{
name : 'sysmsgcontent.idSysmessge',
mapping : 'idSysmessge'
}
,{
name : 'sysmsgcontent.msgcontent',
mapping : 'msgcontent'
}
,{
name : 'sysmsgcontent.ts',
mapping : 'ts'
}
,{
name : 'sysmsgcontent.dr',
mapping : 'dr'
}
,{
name : 'sysmsgcontent.back1',
mapping : 'back1'
}
,{
name : 'sysmsgcontent.subTitle',
mapping : 'subTitle'
}
]
	);
		
	updatesysmsgcontentForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesysmsgcontentReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-系统消息内容表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'sysmsgcontent.idNumber',
width : '80%'
}
,{
fieldLabel : '消息内容',
id : 'uppdate_msgcontent',
xtype : 'textfield',
name : 'sysmsgcontent.msgcontent',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'sysmsgcontent.dr',
width : '80%'
}
,{
fieldLabel : '子标题',
id : 'uppdate_subTitle',
xtype : 'textfield',
name : 'sysmsgcontent.subTitle',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统消息主键',
id : 'uppdate_idSysmessge',
xtype : 'numberfield',
name : 'sysmsgcontent.idSysmessge',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'sysmsgcontent.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'sysmsgcontent.back1',
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
				check(updatesysmsgcontentForm, "sysmsgcontent_update.action", querysysmsgcontentStore, "修改信息")
				updatesysmsgcontentWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesysmsgcontentWin.hide();
				updatesysmsgcontentForm.form.reset();
			}
		}]
	});

	updatesysmsgcontentWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesysmsgcontentForm
	});

	update = function() {
		_record = querysysmsgcontentGrid.getSelectionModel().getSelected();
		flag = querysysmsgcontentGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesysmsgcontentWin.show();
					
			updatesysmsgcontentForm.getForm().load({
				url : 'sysmsgcontent_findById.action?sysmsgcontent.idNumber='+ _record.get('idNumber'),
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
 
