
var queryt_comp_infoStore;			
var queryt_comp_infoGrid;
var addt_comp_info;
var addt_comp_infoForm;
var addt_comp_infoWin;
var updatet_comp_info;
var updatet_comp_infoWin;
var updatet_comp_infoForm;
var updatet_comp_infoReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_comp_infoView.jsp');
	 queryt_comp_infoStore = new Ext.data.JsonStore({
		url : 't_comp_info_findCheckAll.action',
		root : 't_comp_infoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
		name : 'idNumber',
		mapping : 'idNumber'
		},{
		name : 'comp_abbr_name',
		mapping : 'comp_abbr_name'
		},{
		name : 'partner_info',
		mapping : 'partner_info'
		},{
		name : 'comp_name',
		mapping : 'comp_name'
		},{
		name : 'found_date',
		mapping : 'found_date'
		},{
		name : 'reg_bal',
		mapping : 'reg_bal'
		},{
		name : 'hq_city',
		mapping : 'hq_city'
		},{
		name : 'hq_Address',
		mapping : 'hq_Address'
		},{
		name : 'comp_url',
		mapping : 'comp_url'
		},{
		name : 'serv_phone',
		mapping : 'serv_phone'
		},{
		name : 'loc_address',
		mapping : 'loc_address'
		},{
		name : 'con_name',
		mapping : 'con_name'
		},{
		name : 'con_phone',
		mapping : 'con_phone'
		},{
		name : 'comp_abbr',
		mapping : 'comp_abbr'
		},{
		name : 'glory_info',
		mapping : 'glory_info'
		}
		],
				autoLoad : false
		
	});

	 squeryt_comp_infoStore=new Ext.data.Store({
		 proxy:new Ext.data.HttpProxy({
		 url:'t_comp_info_findAllByPro.action'
		 }),
		 reader:new Ext.data.JsonReader({
		 root:'t_comp_infoList',
		 id:'id'
		 },[
		 {name:'idNumber',mapping:'idNumber'},
		 {name:'comp_name',mapping:'comp_name'}
		 ])
		 });	
	 
	 squeryt_comp_infoStore.load();
	 
	 
	 selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 120,
		padding : 5,
		layout : 'column',
		items : [
	{
columnWidth: .5,
layout : 'form',
items : [
{
	fieldLabel:'公司名称',
	xtype:'combo',
	store:squeryt_comp_infoStore,
	valueField:"idNumber",
	displayField:"comp_name",
	mode:'local',
	forceSelection:true,//必须选择一项
	emptyText:'请选择公司...',//默认值
	hiddenName:'t_comp_info.idNumber',//hiddenName才是提交到后台的input的name
	editable:false,//不允许输入
	triggerAction:'all',
    id : 'select_idNumber',  
    name: 't_comp_info.idNumber',
	width:230
	}]},{
columnWidth: .25,
layout : 'form',
items : [{
xtype : 'button',
text : '重置',
width : 100,
iconCls : 'icon-reset',
handler : function() {
selectUnitForm.form.reset();
}}]
},{
columnWidth : 0.25,
items : [{
xtype : 'button',
text : '查询',
width : 100,
iconCls : 'icon-select',
handler : function() {
queryt_comp_infoStore.proxy = new Ext.data.HttpProxy({
url : 't_comp_info_findCheckInfoByConditions.action?'
+'t_comp_info.idNumber='
+ Ext.getCmp('select_idNumber').getValue()

});
	queryt_comp_infoStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}
	);
	
	
	

	queryt_comp_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_comp_infoGrid = new Ext.grid.GridPanel({
		store : queryt_comp_infoStore,
		sm : sm,
		stripeRows : true,
		columns : [ sm, rowNum,{
header : '保险公司编号',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '保险公司简称',
dataIndex : 'comp_abbr_name',
width : 120 
}
,{
header : '保险公司全称',
dataIndex : 'comp_name',
width : 120 
}
,{
header : '公司成立时间',
dataIndex : 'found_date',
width : 120 
}

,{
header : '公司简介',
dataIndex : 'comp_abbr',
width : 120 
}

],
		width : 500,
		height : 100,
		tbar : [{
			text : '复核',
			iconCls:'icon-del',
			handler : function() {
				tlr_check (queryt_comp_infoGrid, queryt_comp_infoStore, "t_comp_info_check.action", "idNumber", "复核");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_comp_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_comp_infoGrid',
		items : [selectUnitForm, queryt_comp_infoGrid]
	});
	var divHeight = document.getElementById('t_comp_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_comp_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_comp_infoGrid.setWidth(showQueryPanel.getWidth());
	queryt_comp_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addt_comp_infoForm = new Ext.form.FormPanel({
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
columnWidth: .4,
layout : 'form',
items : [{
	fieldLabel : '保险公司简称',
	id : 'add_comp_abbr_name',
	xtype : 'textfield',
	name : 't_comp_info.comp_abbr_name',
	width : '80%',
	allowBlank: false
	},{
	fieldLabel : '保险公司全称',
	id : 'add_comp_name',
	xtype : 'textfield',
	name : 't_comp_info.comp_name',
	width : '80%',
	allowBlank: false
},{
	fieldLabel : '公司成立时间',
	id : 'add_found_date',
	xtype : 'textfield',
	name : 't_comp_info.found_date',
	width : '80%',
	allowBlank: false
	},{
	fieldLabel : '注册资本',
	id : 'add_reg_bal',
	xtype : 'textfield',
	name : 't_comp_info.reg_bal',
	width : '80%',
	allowBlank: false
}
,{
fieldLabel : '总部所在城市',
id : 'add_hq_city',
xtype : 'textfield',
name : 't_comp_info.hq_city',
width : '80%'
},{
	fieldLabel : '总部地址',
	id : 'add_hq_Address',
	xtype : 'textfield',
	name : 't_comp_info.hq_Address',
	width : '80%'
}
,{
fieldLabel : '公司网址',
id : 'add_comp_url',
xtype : 'textfield',
name : 't_comp_info.comp_url',
width : '80%'
},{
	fieldLabel : '全国客户客服电话',
	id : 'add_serv_phone',
	xtype : 'textfield',
	name : 't_comp_info.serv_phone',
	width : '80%'
}
,{
fieldLabel : '本部地址',
id : 'add_loc_address',
xtype : 'textfield',
name : 't_comp_info.loc_address',
width : '80%'
},{
	fieldLabel : '联系人姓名',
	id : 'add_con_name',
	xtype : 'textfield',
	name : 't_comp_info.con_name',
	width : '80%'
}
,{
fieldLabel : '服务人员联系电话',
id : 'add_con_phone',
xtype : 'textfield',
name : 't_comp_info.con_phone',
width : '80%'
}
]},{
columnWidth: .6,
layout : 'form',
items : [{
	fieldLabel : '股东构成及比例',
	id : 'add_partner_info',
	xtype : 'textarea',
	height :140,
	name : 't_comp_info.partner_info',
	anchor : '95%'
	}
,{
fieldLabel : '公司简介',
id : 'add_comp_abbr',
xtype : 'textarea',
height : 140,
name : 't_comp_info.comp_abbr',
anchor : '95%'
},{
	fieldLabel : '获奖荣誉',
	id : 'add_glory_info',
	xtype : 'textarea',
	height : 140,
	name : 't_comp_info.glory_info',
	anchor : '95%'
}
,{
layout : 'column',
items : [{
columnWidth : 0.25,
items : [{
xtype : 'button',
text : '重置',
width : 100,
iconCls : 'icon-reset',
handler : function() {
	addt_comp_infoForm.form.reset();
}}]
},{
	columnWidth : 0.25,
	items : [{
	xtype : 'button',
	text : '关闭',
	width : 100,
	iconCls : 'icon-reset',
	handler : function() {
		addt_comp_infoWin.hide();
	}}]
	},{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '保存',
width : 100,
iconCls : 'icon-select',
handler : function() {
	check(addt_comp_infoForm, "t_comp_info_addNewInfo.action", queryt_comp_infoStore, "添加信息");
	addt_comp_infoWin.hide();	
}
}]}
]}]}]
	});
	addt_comp_infoWin = new Ext.Window({
		title : '新增公司信息',
		layout : 'form',
		width : 1000,
		height : 530,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : addt_comp_infoForm
	});

	addt_comp_info = function() {
		addt_comp_infoWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	
	updatet_comp_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_comp_info.idNumber',
mapping : 'idNumber'
}
,{
name : 't_comp_info.comp_abbr_name',
mapping : 'comp_abbr_name'
}
,{
name : 't_comp_info.partner_info',
mapping : 'partner_info'
}
,{
name : 't_comp_info.comp_name',
mapping : 'comp_name'
}
,{
name : 't_comp_info.found_date',
mapping : 'found_date'
}
,{
name : 't_comp_info.reg_bal',
mapping : 'reg_bal'
}
,{
name : 't_comp_info.hq_city',
mapping : 'hq_city'
}
,{
name : 't_comp_info.hq_Address',
mapping : 'hq_Address'
}
,{
name : 't_comp_info.comp_url',
mapping : 'comp_url'
}
,{
name : 't_comp_info.serv_phone',
mapping : 'serv_phone'
}
,{
name : 't_comp_info.loc_address',
mapping : 'loc_address'
}
,{
name : 't_comp_info.con_name',
mapping : 'con_name'
}
,{
name : 't_comp_info.con_phone',
mapping : 'con_phone'
}
,{
name : 't_comp_info.comp_abbr',
mapping : 'comp_abbr'
}
,{
name : 't_comp_info.glory_info',
mapping : 'glory_info'
}
]
	);
		
	updatet_comp_infoForm = new Ext.form.FormPanel({
		frame : true,
		waitMsgTarget : true,
		layout : 'column',
		reader : updatet_comp_infoReader,
		items : [{
columnWidth: .5,
layout : 'form',
items : [
{
	fieldLabel : '保险公司编号',
	id : 'uppdate_idNumber',
	xtype : 'textfield',
	name : 't_comp_info.idNumber',
	width : '98%'
},{
	fieldLabel : '保险公司简称',
	id : 'uppdate_comp_abbr_name',
	xtype : 'textfield',
	name : 't_comp_info.comp_abbr_name',
	width : '98%'
	},{
	fieldLabel : '保险公司全称',
	id : 'uppdate_comp_name',
	xtype : 'textfield',
	name : 't_comp_info.comp_name',
	width : '98%'
},{
	fieldLabel : '公司成立时间',
	id : 'uppdate_found_date',
	xtype : 'datefield',
	name : 't_comp_info.found_date',
	format: 'Y-m-d',
	width : '98%'
	},{
	fieldLabel : '注册资本',
	id : 'uppdate_reg_bal',
	xtype : 'textfield',
	name : 't_comp_info.reg_bal',
	width : '98%'
}
,{
fieldLabel : '总部所在城市',
id : 'uppdate_hq_city',
xtype : 'textfield',
name : 't_comp_info.hq_city',
width : '98%'
},{
	fieldLabel : '总部地址',
	id : 'uppdate_hq_Address',
	xtype : 'textfield',
	name : 't_comp_info.hq_Address',
	width : '98%'
}
,{
fieldLabel : '公司网址',
id : 'uppdate_comp_url',
xtype : 'textfield',
name : 't_comp_info.comp_url',
width : '98%'
},{
	fieldLabel : '全国客户客服电话',
	id : 'uppdate_serv_phone',
	xtype : 'textfield',
	name : 't_comp_info.serv_phone',
	width : '98%'
}
,{
fieldLabel : '本部地址',
id : 'uppdate_loc_address',
xtype : 'textfield',
name : 't_comp_info.loc_address',
width : '98%'
},{
	fieldLabel : '联系人姓名',
	id : 'uppdate_con_name',
	xtype : 'textfield',
	name : 't_comp_info.con_name',
	width : '98%'
}
,{
fieldLabel : '服务人员联系电话',
id : 'uppdate_con_phone',
xtype : 'textfield',
name : 't_comp_info.con_phone',
width : '98%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [{
	fieldLabel : '股东构成及比例',
	id : 'uppdate_partner_info',
	xtype : 'textarea',
	height :140,
	name : 't_comp_info.partner_info',
	width : '100%'
	}
,{
fieldLabel : '公司简介',
id : 'uppdate_comp_abbr',
xtype : 'textarea',
height : 140,
name : 't_comp_info.comp_abbr',
width : '100%'
},{
	fieldLabel : '获奖荣誉',
	id : 'uppdate_glory_info',
	xtype : 'textarea',
	height : 140,
	name : 't_comp_info.glory_info',
	width : '100%'
}
,{
layout : 'column',
items : [{
columnWidth : 0.3,
items : [{
xtype : 'button',
text : '重置',
width : 100,
iconCls : 'icon-reset',
handler : function() {
	updatet_comp_infoForm.form.reset();
}}]
},{
	columnWidth : 0.3,
	items : [{
	xtype : 'button',
	text : '关闭',
	width : 100,
	iconCls : 'icon-reset',
	handler : function() {
		updatet_comp_infoWin.hide();
	}}]
	},{
columnWidth : 0.4,
items : [{
xtype : 'button',
text : '保存',
width : 100,
iconCls : 'icon-select',
			handler : function() {
				check(updatet_comp_infoForm, "t_comp_info_CheckUpdate.action", queryt_comp_infoStore, "修改信息");
				updatet_comp_infoWin.hide();
			}
}]}
]}]}]
	});


	
	
	
	
	
	
	updatet_comp_infoWin = new Ext.Window({
		title : '请输入您要修改的信息',
		layout : 'form',
		width : 800,
		height : 530,
		plain : true,
		closable : true,
		closeAction : 'hide',
		bodyStyle:'overflow-y:scroll',
		items : updatet_comp_infoForm
	});

	update = function(){
		_record = queryt_comp_infoGrid.getSelectionModel().getSelected();
		flag = queryt_comp_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_comp_infoWin.show();
					
			updatet_comp_infoForm.getForm().load({
				url : 't_comp_info_findById.action?t_comp_info.idNumber='+ _record.get('idNumber'),
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
		    fieldLabel: '附件存储路径',
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
				submit(data_uploadForm, "data_upload.action?flag=T_comp_info", queryt_comp_infoStore, "数据导入");
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
		title : '数据导入',
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
 
