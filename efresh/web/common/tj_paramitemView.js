
var querytj_paramitemStore;			
var querytj_paramitemGrid;
var addtj_paramitem;
var addtj_paramitemForm;
var addtj_paramitemWin;
var updatetj_paramitem;
var updatetj_paramitemWin;
var updatetj_paramitemForm;
var updatetj_paramitemReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/tj_paramitemView.jsp');
	 querytj_paramitemStore = new Ext.data.JsonStore({
		url : 'tj_paramitem_findAll.action',
		root : 'tj_paramitemList',
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
name : 'PARA',
mapping : 'PARA'
}
,{
name : 'PARAMETERID',
mapping : 'PARAMETERID'
}
,{
name : 'PARAMETERNAME',
mapping : 'PARAMETERNAME'
}
,{
name : 'ABNAME',
mapping : 'ABNAME'
}
,{
name : 'PARAMLEVEL',
mapping : 'PARAMLEVEL'
}
,{
name : 'PARAMETERMEMO',
mapping : 'PARAMETERMEMO'
}
,{
name : 'SORTNUM',
mapping : 'SORTNUM'
}
,{
name : 'SP_PARAMVALUE',
mapping : 'SP_PARAMVALUE'
}
,{
name : 'SP_PARAMID',
mapping : 'SP_PARAMID'
}
,{
name : 'IF_NODE',
mapping : 'IF_NODE'
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
fieldLabel : '',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'tj_paramitem.idNumber',
width : '80%'
}
,{
fieldLabel : '参数标识',
id : 'select_PARAMETERID',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERID',
width : '80%'
}
,{
fieldLabel : '参数简称',
id : 'select_ABNAME',
xtype : 'textfield',
name : 'tj_paramitem.ABNAME',
width : '80%'
}
,{
fieldLabel : '参数说明',
id : 'select_PARAMETERMEMO',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERMEMO',
width : '80%'
}
,{
fieldLabel : '上级参数值',
id : 'select_SP_PARAMVALUE',
xtype : 'textfield',
name : 'tj_paramitem.SP_PARAMVALUE',
width : '80%'
}
,{
fieldLabel : '是否叶子节点',
id : 'select_IF_NODE',
xtype : 'textfield',
name : 'tj_paramitem.IF_NODE',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '参数值',
id : 'select_PARA',
xtype : 'textfield',
name : 'tj_paramitem.PARA',
width : '80%'
}
,{
fieldLabel : '参数名称',
id : 'select_PARAMETERNAME',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERNAME',
width : '80%'
}
,{
fieldLabel : '参数级别',
id : 'select_PARAMLEVEL',
xtype : 'textfield',
name : 'tj_paramitem.PARAMLEVEL',
width : '80%'
}
,{
fieldLabel : '排序编号',
id : 'select_SORTNUM',
xtype : 'numberfield',
name : 'tj_paramitem.SORTNUM',
width : '80%'
}
,{
fieldLabel : '上级参数标识',
id : 'select_SP_PARAMID',
xtype : 'textfield',
name : 'tj_paramitem.SP_PARAMID',
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
querytj_paramitemStore.proxy = new Ext.data.HttpProxy({
url : 'tj_paramitem_findInfoByConditions.action?'
+'tj_paramitem.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&tj_paramitem.PARA='
+ Ext.getCmp('select_PARA').getValue()
+'&tj_paramitem.PARAMETERID='
+ Ext.getCmp('select_PARAMETERID').getValue()
+'&tj_paramitem.PARAMETERNAME='
+ Ext.getCmp('select_PARAMETERNAME').getValue()
+'&tj_paramitem.ABNAME='
+ Ext.getCmp('select_ABNAME').getValue()
+'&tj_paramitem.PARAMLEVEL='
+ Ext.getCmp('select_PARAMLEVEL').getValue()
+'&tj_paramitem.PARAMETERMEMO='
+ Ext.getCmp('select_PARAMETERMEMO').getValue()
+'&tj_paramitem.SORTNUM='
+ Ext.getCmp('select_SORTNUM').getValue()
+'&tj_paramitem.SP_PARAMVALUE='
+ Ext.getCmp('select_SP_PARAMVALUE').getValue()
+'&tj_paramitem.SP_PARAMID='
+ Ext.getCmp('select_SP_PARAMID').getValue()
+'&tj_paramitem.IF_NODE='
+ Ext.getCmp('select_IF_NODE').getValue()
});
	querytj_paramitemStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querytj_paramitemStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querytj_paramitemGrid = new Ext.grid.GridPanel({
		store : querytj_paramitemStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '参数值',
dataIndex : 'PARA',
width : 120 
}
,{
header : '参数标识',
dataIndex : 'PARAMETERID',
width : 120 
}
,{
header : '参数名称',
dataIndex : 'PARAMETERNAME',
width : 120 
}
,{
header : '参数简称',
dataIndex : 'ABNAME',
width : 120 
}
,{
header : '参数级别',
dataIndex : 'PARAMLEVEL',
width : 120 
}
,{
header : '参数说明',
dataIndex : 'PARAMETERMEMO',
width : 120 
}
,{
header : '排序编号',
dataIndex : 'SORTNUM',
width : 120 
}
,{
header : '上级参数值',
dataIndex : 'SP_PARAMVALUE',
width : 120 
}
,{
header : '上级参数标识',
dataIndex : 'SP_PARAMID',
width : 120 
}
,{
header : '是否叶子节点',
dataIndex : 'IF_NODE',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addtj_paramitem();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querytj_paramitemGrid, querytj_paramitemStore, "tj_paramitem_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querytj_paramitemStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'tj_paramitemGrid',
		items : [selectUnitForm, querytj_paramitemGrid]
	});
	var divHeight = document.getElementById('tj_paramitemGrid').offsetHeight;
	var divWidth = document.getElementById('tj_paramitemGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querytj_paramitemGrid.setWidth(showQueryPanel.getWidth());
	querytj_paramitemGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addtj_paramitemForm = new Ext.FormPanel({
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
fieldLabel : '',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'tj_paramitem.idNumber',
width : '80%'
}
,{
fieldLabel : '参数标识',
id : 'add_PARAMETERID',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERID',
width : '80%'
}
,{
fieldLabel : '参数简称',
id : 'add_ABNAME',
xtype : 'textfield',
name : 'tj_paramitem.ABNAME',
width : '80%'
}
,{
fieldLabel : '参数说明',
id : 'add_PARAMETERMEMO',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERMEMO',
width : '80%'
}
,{
fieldLabel : '上级参数值',
id : 'add_SP_PARAMVALUE',
xtype : 'textfield',
name : 'tj_paramitem.SP_PARAMVALUE',
width : '80%'
}
,{
fieldLabel : '是否叶子节点',
id : 'add_IF_NODE',
xtype : 'textfield',
name : 'tj_paramitem.IF_NODE',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '参数值',
id : 'add_PARA',
xtype : 'textfield',
name : 'tj_paramitem.PARA',
width : '80%'
}
,{
fieldLabel : '参数名称',
id : 'add_PARAMETERNAME',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERNAME',
width : '80%'
}
,{
fieldLabel : '参数级别',
id : 'add_PARAMLEVEL',
xtype : 'textfield',
name : 'tj_paramitem.PARAMLEVEL',
width : '80%'
}
,{
fieldLabel : '排序编号',
id : 'add_SORTNUM',
xtype : 'numberfield',
name : 'tj_paramitem.SORTNUM',
width : '80%'
}
,{
fieldLabel : '上级参数标识',
id : 'add_SP_PARAMID',
xtype : 'textfield',
name : 'tj_paramitem.SP_PARAMID',
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
				check(addtj_paramitemForm, "tj_paramitem_addNewInfo.action", querytj_paramitemStore, "添加信息")
				addtj_paramitemWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addtj_paramitemWin.hide();
				addtj_paramitemForm.form.reset();
			}
		}]

	});

	addtj_paramitemWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addtj_paramitemForm
	});

	addtj_paramitem = function() {
		addtj_paramitemWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatetj_paramitemReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'tj_paramitem.idNumber',
mapping : 'idNumber'
}
,{
name : 'tj_paramitem.PARA',
mapping : 'PARA'
}
,{
name : 'tj_paramitem.PARAMETERID',
mapping : 'PARAMETERID'
}
,{
name : 'tj_paramitem.PARAMETERNAME',
mapping : 'PARAMETERNAME'
}
,{
name : 'tj_paramitem.ABNAME',
mapping : 'ABNAME'
}
,{
name : 'tj_paramitem.PARAMLEVEL',
mapping : 'PARAMLEVEL'
}
,{
name : 'tj_paramitem.PARAMETERMEMO',
mapping : 'PARAMETERMEMO'
}
,{
name : 'tj_paramitem.SORTNUM',
mapping : 'SORTNUM'
}
,{
name : 'tj_paramitem.SP_PARAMVALUE',
mapping : 'SP_PARAMVALUE'
}
,{
name : 'tj_paramitem.SP_PARAMID',
mapping : 'SP_PARAMID'
}
,{
name : 'tj_paramitem.IF_NODE',
mapping : 'IF_NODE'
}
]
	);
		
	updatetj_paramitemForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatetj_paramitemReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'tj_paramitem.idNumber',
width : '80%'
}
,{
fieldLabel : '参数标识',
id : 'uppdate_PARAMETERID',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERID',
width : '80%'
}
,{
fieldLabel : '参数简称',
id : 'uppdate_ABNAME',
xtype : 'textfield',
name : 'tj_paramitem.ABNAME',
width : '80%'
}
,{
fieldLabel : '参数说明',
id : 'uppdate_PARAMETERMEMO',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERMEMO',
width : '80%'
}
,{
fieldLabel : '上级参数值',
id : 'uppdate_SP_PARAMVALUE',
xtype : 'textfield',
name : 'tj_paramitem.SP_PARAMVALUE',
width : '80%'
}
,{
fieldLabel : '是否叶子节点',
id : 'uppdate_IF_NODE',
xtype : 'textfield',
name : 'tj_paramitem.IF_NODE',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '参数值',
id : 'uppdate_PARA',
xtype : 'textfield',
name : 'tj_paramitem.PARA',
width : '80%'
}
,{
fieldLabel : '参数名称',
id : 'uppdate_PARAMETERNAME',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERNAME',
width : '80%'
}
,{
fieldLabel : '参数级别',
id : 'uppdate_PARAMLEVEL',
xtype : 'textfield',
name : 'tj_paramitem.PARAMLEVEL',
width : '80%'
}
,{
fieldLabel : '排序编号',
id : 'uppdate_SORTNUM',
xtype : 'numberfield',
name : 'tj_paramitem.SORTNUM',
width : '80%'
}
,{
fieldLabel : '上级参数标识',
id : 'uppdate_SP_PARAMID',
xtype : 'textfield',
name : 'tj_paramitem.SP_PARAMID',
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
				check(updatetj_paramitemForm, "tj_paramitem_update.action", querytj_paramitemStore, "修改信息")
				updatetj_paramitemWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatetj_paramitemWin.hide();
				updatetj_paramitemForm.form.reset();
			}
		}]
	});

	updatetj_paramitemWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatetj_paramitemForm
	});

	update = function() {
		_record = querytj_paramitemGrid.getSelectionModel().getSelected();
		flag = querytj_paramitemGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatetj_paramitemWin.show();
					
			updatetj_paramitemForm.getForm().load({
				url : 'tj_paramitem_findById.action?tj_paramitem.idNumber='+ _record.get('idNumber'),
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
 
