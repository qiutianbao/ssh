
var querytj_parameterStore;			
var querytj_parameterGrid;
var addtj_parameter;
var addtj_parameterForm;
var addtj_parameterWin;
var updatetj_parameter;
var updatetj_parameterWin;
var updatetj_parameterForm;
var updatetj_parameterReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/tj_parameterView.jsp');
	 querytj_parameterStore = new Ext.data.JsonStore({
		url : 'tj_parameter_findAll.action',
		root : 'tj_parameterList',
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
name : 'PARAMETERID',
mapping : 'PARAMETERID'
}
,{
name : 'PARAMETERMEMO',
mapping : 'PARAMETERMEMO'
}
,{
name : 'PARAMETYPE',
mapping : 'PARAMETYPE'
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
fieldLabel : '主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'tj_parameter.idNumber',
width : '80%'
}
,{
fieldLabel : '参数说明',
id : 'select_PARAMETERMEMO',
xtype : 'textfield',
name : 'tj_parameter.PARAMETERMEMO',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '参数标识',
id : 'select_PARAMETERID',
xtype : 'textfield',
name : 'tj_parameter.PARAMETERID',
width : '80%'
}
,{
fieldLabel : '参数类型',
id : 'select_PARAMETYPE',
xtype : 'textfield',
name : 'tj_parameter.PARAMETYPE',
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
querytj_parameterStore.proxy = new Ext.data.HttpProxy({
url : 'tj_parameter_findInfoByConditions.action?'
+'tj_parameter.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&tj_parameter.PARAMETERID='
+ Ext.getCmp('select_PARAMETERID').getValue()
+'&tj_parameter.PARAMETERMEMO='
+ Ext.getCmp('select_PARAMETERMEMO').getValue()
+'&tj_parameter.PARAMETYPE='
+ Ext.getCmp('select_PARAMETYPE').getValue()
});
	querytj_parameterStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querytj_parameterStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querytj_parameterGrid = new Ext.grid.GridPanel({
		store : querytj_parameterStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '参数标识',
dataIndex : 'PARAMETERID',
width : 120 
}
,{
header : '参数说明',
dataIndex : 'PARAMETERMEMO',
width : 120 
}
,{
header : '参数类型',
dataIndex : 'PARAMETYPE',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addtj_parameter();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querytj_parameterGrid, querytj_parameterStore, "tj_parameter_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querytj_parameterStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'tj_parameterGrid',
		items : [selectUnitForm, querytj_parameterGrid]
	});
	var divHeight = document.getElementById('tj_parameterGrid').offsetHeight;
	var divWidth = document.getElementById('tj_parameterGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querytj_parameterGrid.setWidth(showQueryPanel.getWidth());
	querytj_parameterGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addtj_parameterForm = new Ext.FormPanel({
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
fieldLabel : '主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'tj_parameter.idNumber',
width : '80%'
}
,{
fieldLabel : '参数说明',
id : 'add_PARAMETERMEMO',
xtype : 'textfield',
name : 'tj_parameter.PARAMETERMEMO',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '参数标识',
id : 'add_PARAMETERID',
xtype : 'textfield',
name : 'tj_parameter.PARAMETERID',
width : '80%'
}
,{
fieldLabel : '参数类型',
id : 'add_PARAMETYPE',
xtype : 'textfield',
name : 'tj_parameter.PARAMETYPE',
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
				check(addtj_parameterForm, "tj_parameter_addNewInfo.action", querytj_parameterStore, "添加信息")
				addtj_parameterWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addtj_parameterWin.hide();
				addtj_parameterForm.form.reset();
			}
		}]

	});

	addtj_parameterWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addtj_parameterForm
	});

	addtj_parameter = function() {
		addtj_parameterWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatetj_parameterReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'tj_parameter.idNumber',
mapping : 'idNumber'
}
,{
name : 'tj_parameter.PARAMETERID',
mapping : 'PARAMETERID'
}
,{
name : 'tj_parameter.PARAMETERMEMO',
mapping : 'PARAMETERMEMO'
}
,{
name : 'tj_parameter.PARAMETYPE',
mapping : 'PARAMETYPE'
}
]
	);
		
	updatetj_parameterForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatetj_parameterReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'tj_parameter.idNumber',
width : '80%'
}
,{
fieldLabel : '参数说明',
id : 'uppdate_PARAMETERMEMO',
xtype : 'textfield',
name : 'tj_parameter.PARAMETERMEMO',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '参数标识',
id : 'uppdate_PARAMETERID',
xtype : 'textfield',
name : 'tj_parameter.PARAMETERID',
width : '80%'
}
,{
fieldLabel : '参数类型',
id : 'uppdate_PARAMETYPE',
xtype : 'textfield',
name : 'tj_parameter.PARAMETYPE',
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
				check(updatetj_parameterForm, "tj_parameter_update.action", querytj_parameterStore, "修改信息")
				updatetj_parameterWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatetj_parameterWin.hide();
				updatetj_parameterForm.form.reset();
			}
		}]
	});

	updatetj_parameterWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatetj_parameterForm
	});

	update = function() {
		_record = querytj_parameterGrid.getSelectionModel().getSelected();
		flag = querytj_parameterGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatetj_parameterWin.show();
					
			updatetj_parameterForm.getForm().load({
				url : 'tj_parameter_findById.action?tj_parameter.idNumber='+ _record.get('idNumber'),
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
 
