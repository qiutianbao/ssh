
var queryt_busi_infoStore;			
var queryt_busi_infoGrid;
var addt_busi_info;
var addt_busi_infoForm;
var addt_busi_infoWin;
var updatet_busi_info;
var updatet_busi_infoWin;
var updatet_busi_infoForm;
var updatet_busi_infoReader;
var showQueryPanel;
var exportExcel;
var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('common/t_busi_infoView.jsp');
	 queryt_busi_infoStore = new Ext.data.JsonStore({
		url : 't_busi_info_findAll.action',
		root : 't_busi_infoList',
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
name : 'busi_type',
mapping : 'busi_type'
}
,{
name : 'ser_no',
mapping : 'ser_no'
}
,{
name : 'busi_head',
mapping : 'busi_head'
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
columnWidth: .3,
layout : 'form',
items : [
{
fieldLabel : '信息编码',
id : 'select_idNumber',
xtype : 'textfield',
name : 't_busi_info.idNumber',
width : 120
}
]},{columnWidth: .5,
	layout : 'form',
	items : [
	{
		fieldLabel : '主题',
		id : 'select_busi_head',
		xtype : 'textfield',
		name : 't_busi_info.busi_head',
		anchor : '80%'
}]},{
columnWidth: .2,
layout : 'form',
items : [
{
fieldLabel : '业务类型',
id : 'select_busi_type',
width : 120,
xtype : 'combo',
store : busi_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_busi_info.busi_type',
anchor : '90%'
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
queryt_busi_infoStore.proxy = new Ext.data.HttpProxy({
url : 't_busi_info_findInfoByConditions.action?'
+'t_busi_info.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&t_busi_info.busi_type='
+ Ext.getCmp('select_busi_type').getValue()
+'&t_busi_info.busi_head='
+ Ext.getCmp('select_busi_head').getValue()
});
	queryt_busi_infoStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryt_busi_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_busi_infoGrid = new Ext.grid.GridPanel({
		store : queryt_busi_infoStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '信息编码',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '业务类型',
dataIndex : 'busi_type',
width : 120 
}
,{
header : '序号',
dataIndex : 'ser_no',
width : 120 
}
,{
header : '主题',
dataIndex : 'busi_head',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_busi_info();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_busi_infoGrid, queryt_busi_infoStore, "t_busi_info_delete.action", "idNumber", "删除信息");
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : function(){
				ExcelExport(queryt_busi_infoGrid,'业务交流主档维护');
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_busi_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_busi_infoGrid',
		items : [selectUnitForm, queryt_busi_infoGrid]
	});
	var divHeight = document.getElementById('t_busi_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_busi_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_busi_infoGrid.setWidth(showQueryPanel.getWidth());
	queryt_busi_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	
	addt_busi_infoForm = new Ext.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		items : [{
layout : 'column',
items : [
{columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '业务类型',
id : 'add_busi_type',
width : 100,
xtype : 'combo',
store : busi_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_busi_info.busi_type',
anchor : '90%',
allowBlank: false
}
]}
]}
,{
name : 't_busi_info.busi_head',
xtype : 'textarea',
fieldLabel : '主题',
anchor : '95%',
height : 200,
allowBlank: false
}],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addt_busi_infoForm, "t_busi_info_addNewInfo.action", queryt_busi_infoStore, "添加信息")
				addt_busi_infoWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_busi_infoWin.hide();
				addt_busi_infoForm.form.reset();
			}
		}]

	});

	addt_busi_infoWin = new Ext.Window({
		title : '添加信息',
		width : 665,
		plain : true,
		layout : 'fit',
		height : 330,
		closable : true,
		draggable :true,
		//maximizable : true,
		closeAction : 'hide',
		items : addt_busi_infoForm
	});

	addt_busi_info = function() {
		addt_busi_infoWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatet_busi_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_busi_info.idNumber',
mapping : 'idNumber'
}
,{
name : 't_busi_info.busi_type',
mapping : 'busi_type'
}
,{
name : 't_busi_info.ser_no',
mapping : 'ser_no'
}
,{
name : 't_busi_info.busi_head',
mapping : 'busi_head'
},{
	name : 't_busi_info.reas_date',
	mapping : 'reas_date'
},{
	name : 't_busi_info.reas_time',
	mapping : 'reas_time'
},{
	name : 't_busi_info.tlr_no',
	mapping : 'tlr_no'
},{
	name : 't_busi_info.inst_no',
	mapping : 'inst_no'
}
]
	);
		
	updatet_busi_infoForm = new Ext.FormPanel({
		frame : true,
		waitMsgTarget : true,
		reader : updatet_busi_infoReader,
		draggable:{
			insertProxy:false,
			onDrag:function(e){
				var pel=this.proxy.getEL();
				this.x=pel.getLeft(true);
				this.y=pel.getTop(true);
				var s=this.panel.getEl().shadow;
				if(s){
					s.realign(this.x,this.y,pel.getWidth(),pel.getHeight());
				}
			},
			endDrag:function(e){
				this.panel.setPosition(this.x,this.y);
			}
		},
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '信息编码',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_busi_info.idNumber',
width : '80%'
},
{
	fieldLabel : '业务类型',
	id : 'uppdate_busi_type',
	width : 100,
	xtype : 'combo',
	store : busi_typeStore,
	valueField : 'id',
	displayField : 'name',
	mode : 'local',
	editable : false,
	triggerAction : 'all',
	hiddenName : 't_busi_info.busi_type',
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
	name : 't_busi_info.ser_no',
	width : '80%'
	}
]}
]}
,{
name : 't_busi_info.busi_head',
xtype : 'textarea',
fieldLabel : '主题',
anchor : '95%',
height : 200,
allowBlank: false
},{
	name : 't_busi_info.reas_date',
	xtype : 'textarea',
	anchor : '95%',
	hidden : true
},{
	name : 't_busi_info.reas_time',
	xtype : 'textarea',
	anchor : '95%',
	hidden : true
},{
	name : 't_busi_info.tlr_no',
	xtype : 'textarea',
	anchor : '95%',
	hidden : true
},{
	name : 't_busi_info.inst_no',
	xtype : 'textarea',
	anchor : '95%',
	hidden : true
}],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatet_busi_infoForm, "t_busi_info_update.action", queryt_busi_infoStore, "修改信息")
				updatet_busi_infoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_busi_infoWin.hide();
				updatet_busi_infoForm.form.reset();
			}
		}]
	});

	updatet_busi_infoWin = new Ext.Window({
		title : '添加信息',
		width : 665,
		plain : true,
		layout : 'fit',
		height : 350,
		closable : true,
		draggable :true,
		//maximizable : true,
		closeAction : 'hide',
		items : updatet_busi_infoForm
	});

	update = function() {
		_record = queryt_busi_infoGrid.getSelectionModel().getSelected();
		flag = queryt_busi_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_busi_infoWin.show();
					
			updatet_busi_infoForm.getForm().load({
				url : 't_busi_info_findById.action?t_busi_info.idNumber='+ _record.get('idNumber'),
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
 
