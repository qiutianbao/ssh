
var queryintegralruleStore;			
var queryintegralruleGrid;
var addintegralrule;
var addintegralruleForm;
var addintegralruleWin;
var updateintegralrule;
var updateintegralruleWin;
var updateintegralruleForm;
var updateintegralruleReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/integralruleView.jsp');
	 queryintegralruleStore = new Ext.data.JsonStore({
		url : 'integralrule_findAll.action',
		root : 'integralruleList',
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
name : 'summary',
mapping : 'summary'
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
fieldLabel : '档案管理-积分规则主表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'integralrule.idNumber',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'integralrule.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'integralrule.back1',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '概述',
id : 'select_summary',
xtype : 'textfield',
name : 'integralrule.summary',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'integralrule.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'integralrule.back2',
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
queryintegralruleStore.proxy = new Ext.data.HttpProxy({
url : 'integralrule_findInfoByConditions.action?'
+'integralrule.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&integralrule.summary='
+ Ext.getCmp('select_summary').getValue()
+'&integralrule.ts='
+ Ext.getCmp('select_ts').getValue()
+'&integralrule.dr='
+ Ext.getCmp('select_dr').getValue()
+'&integralrule.back1='
+ Ext.getCmp('select_back1').getValue()
+'&integralrule.back2='
+ Ext.getCmp('select_back2').getValue()
});
	queryintegralruleStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryintegralruleStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryintegralruleGrid = new Ext.grid.GridPanel({
		store : queryintegralruleStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '档案管理-积分规则主表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '概述',
dataIndex : 'summary',
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
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addintegralrule();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryintegralruleGrid, queryintegralruleStore, "integralrule_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryintegralruleStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'integralruleGrid',
		items : [selectUnitForm, queryintegralruleGrid]
	});
	var divHeight = document.getElementById('integralruleGrid').offsetHeight;
	var divWidth = document.getElementById('integralruleGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryintegralruleGrid.setWidth(showQueryPanel.getWidth());
	queryintegralruleGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addintegralruleForm = new Ext.FormPanel({
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
fieldLabel : '档案管理-积分规则主表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'integralrule.idNumber',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'integralrule.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'integralrule.back1',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '概述',
id : 'add_summary',
xtype : 'textfield',
name : 'integralrule.summary',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'integralrule.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'integralrule.back2',
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
				check(addintegralruleForm, "integralrule_addNewInfo.action", queryintegralruleStore, "添加信息")
				addintegralruleWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addintegralruleWin.hide();
				addintegralruleForm.form.reset();
			}
		}]

	});

	addintegralruleWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addintegralruleForm
	});

	addintegralrule = function() {
		addintegralruleWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updateintegralruleReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'integralrule.idNumber',
mapping : 'idNumber'
}
,{
name : 'integralrule.summary',
mapping : 'summary'
}
,{
name : 'integralrule.ts',
mapping : 'ts'
}
,{
name : 'integralrule.dr',
mapping : 'dr'
}
,{
name : 'integralrule.back1',
mapping : 'back1'
}
,{
name : 'integralrule.back2',
mapping : 'back2'
}
]
	);
		
	updateintegralruleForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateintegralruleReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '档案管理-积分规则主表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'integralrule.idNumber',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'integralrule.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'integralrule.back1',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '概述',
id : 'uppdate_summary',
xtype : 'textfield',
name : 'integralrule.summary',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'integralrule.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'integralrule.back2',
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
				check(updateintegralruleForm, "integralrule_update.action", queryintegralruleStore, "修改信息")
				updateintegralruleWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateintegralruleWin.hide();
				updateintegralruleForm.form.reset();
			}
		}]
	});

	updateintegralruleWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateintegralruleForm
	});

	update = function() {
		_record = queryintegralruleGrid.getSelectionModel().getSelected();
		flag = queryintegralruleGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateintegralruleWin.show();
					
			updateintegralruleForm.getForm().load({
				url : 'integralrule_findById.action?integralrule.idNumber='+ _record.get('idNumber'),
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
 
