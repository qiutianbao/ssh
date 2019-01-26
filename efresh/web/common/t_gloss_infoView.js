
var queryt_gloss_infoStore;			
var queryt_gloss_infoGrid;
var addt_gloss_info;
var addt_gloss_infoForm;
var addt_gloss_infoWin;
var updatet_gloss_info;
var updatet_gloss_infoWin;
var updatet_gloss_infoForm;
var updatet_gloss_infoReader;
var showQueryPanel;

var selectUnitForm;


 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_gloss_infoView.jsp');
	 queryt_gloss_infoStore = new Ext.data.JsonStore({
		url : 't_gloss_info_findAll.action',
		root : 't_gloss_infoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10
		},
		fields : [,{
name : 'idNumber',
mapping : 'idNumber'
}
,{
name : 'gloss_type',
mapping : 'gloss_type'
}
,{
name : 'ser_no',
mapping : 'ser_no'
}
,{
name : 'gloss_body',
mapping : 'gloss_body'
},{
	name : 'gloss_state',
	mapping : 'gloss_state'
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
columnWidth: .4,
layout : 'form',
items : [
{
fieldLabel : '术语编码',
id : 'select_idNumber',
xtype : 'textfield',
name : 't_gloss_info.idNumber',
width : 120,
maxLength : 9
}
]},{columnWidth: .4,
	layout : 'form',
	items : [{
		fieldLabel : '术语状态',
		id : 'select_gloss_state',
		width : 120,
		xtype : 'combo',
		store : gloss_stateStore,
		valueField : 'id',
		displayField : 'name',
		mode : 'local',
		editable : false,
		triggerAction : 'all',
		hiddenName : 't_gloss_info.gloss_state'
		}]},{
columnWidth: .2,
layout : 'form',
items : [
{
fieldLabel : '术语类型',
id : 'select_gloss_type',
width : 120,
xtype : 'combo',
store : gloss_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_gloss_info.gloss_type'
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
queryt_gloss_infoStore.proxy = new Ext.data.HttpProxy({
url : 't_gloss_info_findInfoByConditions.action?'
+'t_gloss_info.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&t_gloss_info.gloss_type='
+ Ext.getCmp('select_gloss_type').getValue()
+'&t_gloss_info.gloss_state='
+ Ext.getCmp('select_gloss_state').getValue()
});
	queryt_gloss_infoStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryt_gloss_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_gloss_infoGrid = new Ext.grid.GridPanel({
		store : queryt_gloss_infoStore,
		sm : sm,
		stripeRows : true,
		columns : [ sm, rowNum,{
header : '术语编码',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '术语类型',
dataIndex : 'gloss_type',
width : 120 
}
,{
header : '序号',
dataIndex : 'ser_no',
width : 120 
}
,{
header : '术语内容',
dataIndex : 'gloss_body',
width : 120 
},{
	header : '术语状态',
	dataIndex : 'gloss_state',
	width : 120 
	}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_gloss_info();
			}
		},'-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_gloss_infoGrid, queryt_gloss_infoStore, "t_gloss_info_delete.action", "idNumber", "删除信息");
			}
		},'-',{text:"导入发布信息", 
		    icon : "../images/icon/upload.png", 
		    handler : function(){
				data_upload();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : function(){
				ExcelExport(queryt_gloss_infoGrid,'话术维护');
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_gloss_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_gloss_infoGrid',
		items : [selectUnitForm, queryt_gloss_infoGrid]
	});
	var divHeight = document.getElementById('t_gloss_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_gloss_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_gloss_infoGrid.setWidth(showQueryPanel.getWidth());
	queryt_gloss_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addt_gloss_infoForm = new Ext.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 400, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '术语类型',
id : 'add_gloss_type',
width : 100,
xtype : 'combo',
store : gloss_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_gloss_info.gloss_type',
anchor : '90%',
allowBlank: false
}
]}
]}
,{
name : 't_gloss_info.gloss_body',
xtype : 'textarea',
fieldLabel : '术语内容',
anchor : '95%',
height : 200,
allowBlank: false
}],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addt_gloss_infoForm, "t_gloss_info_addNewInfo.action", queryt_gloss_infoStore, "添加信息")
				addt_gloss_infoWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_gloss_infoWin.hide();
				addt_gloss_infoForm.form.reset();
			}
		}]

	});

	addt_gloss_infoWin = new Ext.Window({
		title : '添加信息',
		width : 665,
		plain : true,
		layout : 'fit',
		height : 330,
		closable : true,
		draggable :true,
		//maximizable : true,
		closeAction : 'hide',
		items : addt_gloss_infoForm
	});

	addt_gloss_info = function() {
		addt_gloss_infoWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatet_gloss_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_gloss_info.idNumber',
mapping : 'idNumber'
}
,{
name : 't_gloss_info.gloss_type',
mapping : 'gloss_type'
}
,{
name : 't_gloss_info.ser_no',
mapping : 'ser_no'
}
,{
name : 't_gloss_info.gloss_body',
mapping : 'gloss_body'
},{
	name : 't_gloss_info.gloss_state',
	mapping : 'gloss_state'
	}
]
	);
		
	updatet_gloss_infoForm = new Ext.FormPanel({
		frame : true,
		waitMsgTarget : true,
		reader : updatet_gloss_infoReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '术语编码',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_gloss_info.idNumber',
width : '80%'
}
,{
	fieldLabel : '术语类型',
	id : 'uppdate_gloss_type',
	width : 100,
	xtype : 'combo',
	store : gloss_typeStore,
	valueField : 'id',
	displayField : 'name',
	mode : 'local',
	editable : false,
	triggerAction : 'all',
	hiddenName : 't_gloss_info.gloss_type',
	anchor : '90%',
	allowBlank: false
	}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
	fieldLabel : '序号',
	id : 'uppdate_ser_no',
	xtype : 'textfield',
	name : 't_gloss_info.ser_no',
	width : '80%'
},{
	fieldLabel : '术语状态',
	id : 'uppdate_gloss_state',
	width : 100,
	xtype : 'combo',
	store : gloss_stateStore,
	valueField : 'id',
	displayField : 'name',
	mode : 'local',
	editable : false,
	triggerAction : 'all',
	hiddenName : 't_gloss_info.gloss_state',
	anchor : '90%',
	allowBlank: false
	}
]}
]}
,{
name : 't_gloss_info.gloss_body',
xtype : 'textarea',
fieldLabel : '术语内容',
anchor : '95%',
height : 160,
allowBlank: false
}],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatet_gloss_infoForm, "t_gloss_info_update.action", queryt_gloss_infoStore, "修改信息")
				updatet_gloss_infoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_gloss_infoWin.hide();
				updatet_gloss_infoForm.form.reset();
			}
		}]
	});

	updatet_gloss_infoWin = new Ext.Window({
		title : '修改信息',
		width : 665,
		plain : true,
		layout : 'fit',
		height : 330,
		closable : true,
		draggable :true,
		closeAction : 'hide',
		items : updatet_gloss_infoForm
	});

	update = function() {
		_record = queryt_gloss_infoGrid.getSelectionModel().getSelected();
		flag = queryt_gloss_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_gloss_infoWin.show();
					
			updatet_gloss_infoForm.getForm().load({
				url : 't_gloss_info_findById.action?t_gloss_info.idNumber='+ _record.get('idNumber'),
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


	data_uploadForm = new Ext.form.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		fileUpload: true,
		width : 650,
		height : 120, 
		items : [{
		    xtype: 'textfield',
		    fieldLabel: '信息发布数据存储路径：',
		    name: 'file',
		    inputType: 'file',
		    anchor : '95%'
			}],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
			data_uploadForm.form.submit;
				submit(data_uploadForm, "data_upload.action?flag=T_gloss_info", queryt_gloss_infoStore, "数据导入");
				data_uploadWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
			data_uploadWin.hide();
			data_uploadForm.form.reset();
			}
		}]

	});
	
	data_uploadWin = new Ext.Window({
		title : '信息发布数据导入',
		layout : 'form',
		width : 660,
		height : 150,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : data_uploadForm
	});
	
	data_upload = function() {
		data_uploadWin.show();
	};



	
	// 加载页面后默认焦点
	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
