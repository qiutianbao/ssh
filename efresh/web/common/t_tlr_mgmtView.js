
var queryt_tlr_mgmtStore;			
var queryt_tlr_mgmtGrid;
var addt_tlr_mgmt;
var addt_tlr_mgmtForm;
var addt_tlr_mgmtWin;
var updatet_tlr_mgmt;
var updatet_tlr_mgmtWin;
var updatet_tlr_mgmtForm;
var updatet_tlr_mgmtReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_tlr_mgmtView.jsp');
	 queryt_tlr_mgmtStore = new Ext.data.JsonStore({
		url : 't_tlr_mgmt_findAll.action',
		root : 't_tlr_mgmtList',
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
name : 'phone',
mapping : 'phone'
}
,{
name : 'tlr_name',
mapping : 'tlr_name'
}
,{
name : 'inst_no',
mapping : 'inst_no'
}
,{
name : 'tlr_type',
mapping : 'tlr_type'
}
,{
name : 'tlr_stat',
mapping : 'tlr_stat'
}
,{
name : 'tlr_pwd',
mapping : 'tlr_pwd'
}
,{
name : 'islock',
mapping : 'islock'
}
,{
name : 'deliveryaddress',
mapping : 'deliveryaddress'
}
,{
name : 'stallsname',
mapping : 'stallsname'
}
,{
name : 'creationtime',
mapping : 'creationtime'
}
,{
name : 'userlogo',
mapping : 'userlogo'
}
,{
name : 'examine',
mapping : 'examine'
}
,{
name : 'lst_pwd_date',
mapping : 'lst_pwd_date'
}
,{
name : 'lst_modify_tlr',
mapping : 'lst_modify_tlr'
}
,{
name : 'lst_modify_date',
mapping : 'lst_modify_date'
}
,{
name : 'deliveryaddress2',
mapping : 'deliveryaddress2'
}
,{
name : 'address_status',
mapping : 'address_status'
}
,{
name : 'addresss_upts',
mapping : 'addresss_upts'
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
fieldLabel : '用户id',
id : 'select_idNumber',
xtype : 'numberfield',
name : 't_tlr_mgmt.idNumber',
width : '80%'
}
,{
fieldLabel : '用户名称',
id : 'select_tlr_name',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_name',
width : '80%'
}
,{
fieldLabel : '用户类型、0=买家、1=卖家、2=系统用户',
id : 'select_tlr_type',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_type',
width : '80%'
}
,{
fieldLabel : '密码',
id : 'select_tlr_pwd',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_pwd',
width : '80%'
}
,{
fieldLabel : '收货地址',
id : 'select_deliveryaddress',
xtype : 'textfield',
name : 't_tlr_mgmt.deliveryaddress',
width : '80%'
}
,{
fieldLabel : '注册时间',
id : 'select_creationtime',
xtype : 'datetimefield',
name : 't_tlr_mgmt.creationtime',
anchor : '95%'
}
,{
fieldLabel : '审核是否通过,0表示待审批，1表示审批通过，2表示审批未通过',
id : 'select_examine',
xtype : 'textfield',
name : 't_tlr_mgmt.examine',
width : '80%'
}
,{
fieldLabel : '最近修改人',
id : 'select_lst_modify_tlr',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_modify_tlr',
width : '80%'
}
,{
fieldLabel : '申请收货地址',
id : 'select_deliveryaddress2',
xtype : 'textfield',
name : 't_tlr_mgmt.deliveryaddress2',
width : '80%'
}
,{
fieldLabel : '地址修改时间',
id : 'select_addresss_upts',
xtype : 'textfield',
name : 't_tlr_mgmt.addresss_upts',
width : '80%'
}
,{
fieldLabel : '备用1',
id : 'select_back1',
xtype : 'textfield',
name : 't_tlr_mgmt.back1',
width : '80%'
}
,{
fieldLabel : '备用3',
id : 'select_back3',
xtype : 'numberfield',
name : 't_tlr_mgmt.back3',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '手机号',
id : 'select_phone',
xtype : 'textfield',
name : 't_tlr_mgmt.phone',
width : '80%'
}
,{
fieldLabel : '机构编号',
id : 'select_inst_no',
xtype : 'textfield',
name : 't_tlr_mgmt.inst_no',
width : '80%'
}
,{
fieldLabel : '用户状态',
id : 'select_tlr_stat',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_stat',
width : '80%'
}
,{
fieldLabel : '是否锁定',
id : 'select_islock',
xtype : 'textfield',
name : 't_tlr_mgmt.islock',
width : '80%'
}
,{
fieldLabel : '档口名称',
id : 'select_stallsname',
xtype : 'textfield',
name : 't_tlr_mgmt.stallsname',
width : '80%'
}
,{
fieldLabel : '用户logo',
id : 'select_userlogo',
xtype : 'textfield',
name : 't_tlr_mgmt.userlogo',
width : '80%'
}
,{
fieldLabel : '最近密码修改时间',
id : 'select_lst_pwd_date',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_pwd_date',
width : '80%'
}
,{
fieldLabel : '最近修改时间',
id : 'select_lst_modify_date',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_modify_date',
width : '80%'
}
,{
fieldLabel : '地址修改审核状态 0审核中 1审核通过 2审核未通过',
id : 'select_address_status',
xtype : 'textfield',
name : 't_tlr_mgmt.address_status',
width : '80%'
}
,{
fieldLabel : '删除标识 1删除 0h或者null没删除',
id : 'select_dr',
xtype : 'numberfield',
name : 't_tlr_mgmt.dr',
width : '80%'
}
,{
fieldLabel : '备用2',
id : 'select_back2',
xtype : 'textfield',
name : 't_tlr_mgmt.back2',
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
queryt_tlr_mgmtStore.proxy = new Ext.data.HttpProxy({
url : 't_tlr_mgmt_findInfoByConditions.action?'
+'t_tlr_mgmt.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&t_tlr_mgmt.phone='
+ Ext.getCmp('select_phone').getValue()
+'&t_tlr_mgmt.tlr_name='
+ Ext.getCmp('select_tlr_name').getValue()
+'&t_tlr_mgmt.inst_no='
+ Ext.getCmp('select_inst_no').getValue()
+'&t_tlr_mgmt.tlr_type='
+ Ext.getCmp('select_tlr_type').getValue()
+'&t_tlr_mgmt.tlr_stat='
+ Ext.getCmp('select_tlr_stat').getValue()
+'&t_tlr_mgmt.tlr_pwd='
+ Ext.getCmp('select_tlr_pwd').getValue()
+'&t_tlr_mgmt.islock='
+ Ext.getCmp('select_islock').getValue()
+'&t_tlr_mgmt.deliveryaddress='
+ Ext.getCmp('select_deliveryaddress').getValue()
+'&t_tlr_mgmt.stallsname='
+ Ext.getCmp('select_stallsname').getValue()
+'&t_tlr_mgmt.creationtime='
+ Ext.getCmp('select_creationtime').getValue()
+'&t_tlr_mgmt.userlogo='
+ Ext.getCmp('select_userlogo').getValue()
+'&t_tlr_mgmt.examine='
+ Ext.getCmp('select_examine').getValue()
+'&t_tlr_mgmt.lst_pwd_date='
+ Ext.getCmp('select_lst_pwd_date').getValue()
+'&t_tlr_mgmt.lst_modify_tlr='
+ Ext.getCmp('select_lst_modify_tlr').getValue()
+'&t_tlr_mgmt.lst_modify_date='
+ Ext.getCmp('select_lst_modify_date').getValue()
+'&t_tlr_mgmt.deliveryaddress2='
+ Ext.getCmp('select_deliveryaddress2').getValue()
+'&t_tlr_mgmt.address_status='
+ Ext.getCmp('select_address_status').getValue()
+'&t_tlr_mgmt.addresss_upts='
+ Ext.getCmp('select_addresss_upts').getValue()
+'&t_tlr_mgmt.dr='
+ Ext.getCmp('select_dr').getValue()
+'&t_tlr_mgmt.back1='
+ Ext.getCmp('select_back1').getValue()
+'&t_tlr_mgmt.back2='
+ Ext.getCmp('select_back2').getValue()
+'&t_tlr_mgmt.back3='
+ Ext.getCmp('select_back3').getValue()
});
	queryt_tlr_mgmtStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryt_tlr_mgmtStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_tlr_mgmtGrid = new Ext.grid.GridPanel({
		store : queryt_tlr_mgmtStore,
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
header : '手机号',
dataIndex : 'phone',
width : 120 
}
,{
header : '用户名称',
dataIndex : 'tlr_name',
width : 120 
}
,{
header : '机构编号',
dataIndex : 'inst_no',
width : 120 
}
,{
header : '用户类型、0=买家、1=卖家、2=系统用户',
dataIndex : 'tlr_type',
width : 120 
}
,{
header : '用户状态',
dataIndex : 'tlr_stat',
width : 120 
}
,{
header : '密码',
dataIndex : 'tlr_pwd',
width : 120 
}
,{
header : '是否锁定',
dataIndex : 'islock',
width : 120 
}
,{
header : '收货地址',
dataIndex : 'deliveryaddress',
width : 120 
}
,{
header : '档口名称',
dataIndex : 'stallsname',
width : 120 
}
,{
header : '注册时间',
dataIndex : 'creationtime',
width : 120 
}
,{
header : '用户logo',
dataIndex : 'userlogo',
width : 120 
}
,{
header : '审核是否通过,0表示待审批，1表示审批通过，2表示审批未通过',
dataIndex : 'examine',
width : 120 
}
,{
header : '最近密码修改时间',
dataIndex : 'lst_pwd_date',
width : 120 
}
,{
header : '最近修改人',
dataIndex : 'lst_modify_tlr',
width : 120 
}
,{
header : '最近修改时间',
dataIndex : 'lst_modify_date',
width : 120 
}
,{
header : '申请收货地址',
dataIndex : 'deliveryaddress2',
width : 120 
}
,{
header : '地址修改审核状态 0审核中 1审核通过 2审核未通过',
dataIndex : 'address_status',
width : 120 
}
,{
header : '地址修改时间',
dataIndex : 'addresss_upts',
width : 120 
}
,{
header : '删除标识 1删除 0h或者null没删除',
dataIndex : 'dr',
width : 120 
}
,{
header : '备用1',
dataIndex : 'back1',
width : 120 
}
,{
header : '备用2',
dataIndex : 'back2',
width : 120 
}
,{
header : '备用3',
dataIndex : 'back3',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_tlr_mgmt();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_tlr_mgmtGrid, queryt_tlr_mgmtStore, "t_tlr_mgmt_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_tlr_mgmtStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_tlr_mgmtGrid',
		items : [selectUnitForm, queryt_tlr_mgmtGrid]
	});
	var divHeight = document.getElementById('t_tlr_mgmtGrid').offsetHeight;
	var divWidth = document.getElementById('t_tlr_mgmtGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_tlr_mgmtGrid.setWidth(showQueryPanel.getWidth());
	queryt_tlr_mgmtGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addt_tlr_mgmtForm = new Ext.FormPanel({
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
name : 't_tlr_mgmt.idNumber',
width : '80%'
}
,{
fieldLabel : '用户名称',
id : 'add_tlr_name',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_name',
width : '80%'
}
,{
fieldLabel : '用户类型、0=买家、1=卖家、2=系统用户',
id : 'add_tlr_type',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_type',
width : '80%'
}
,{
fieldLabel : '密码',
id : 'add_tlr_pwd',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_pwd',
width : '80%'
}
,{
fieldLabel : '收货地址',
id : 'add_deliveryaddress',
xtype : 'textfield',
name : 't_tlr_mgmt.deliveryaddress',
width : '80%'
}
,{
fieldLabel : '注册时间',
id : 'add_creationtime',
xtype : 'datetimefield',
name : 't_tlr_mgmt.creationtime',
anchor : '95%'
}
,{
fieldLabel : '审核是否通过,0表示待审批，1表示审批通过，2表示审批未通过',
id : 'add_examine',
xtype : 'textfield',
name : 't_tlr_mgmt.examine',
width : '80%'
}
,{
fieldLabel : '最近修改人',
id : 'add_lst_modify_tlr',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_modify_tlr',
width : '80%'
}
,{
fieldLabel : '申请收货地址',
id : 'add_deliveryaddress2',
xtype : 'textfield',
name : 't_tlr_mgmt.deliveryaddress2',
width : '80%'
}
,{
fieldLabel : '地址修改时间',
id : 'add_addresss_upts',
xtype : 'textfield',
name : 't_tlr_mgmt.addresss_upts',
width : '80%'
}
,{
fieldLabel : '备用1',
id : 'add_back1',
xtype : 'textfield',
name : 't_tlr_mgmt.back1',
width : '80%'
}
,{
fieldLabel : '备用3',
id : 'add_back3',
xtype : 'numberfield',
name : 't_tlr_mgmt.back3',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '手机号',
id : 'add_phone',
xtype : 'textfield',
name : 't_tlr_mgmt.phone',
width : '80%'
}
,{
fieldLabel : '机构编号',
id : 'add_inst_no',
xtype : 'textfield',
name : 't_tlr_mgmt.inst_no',
width : '80%'
}
,{
fieldLabel : '用户状态',
id : 'add_tlr_stat',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_stat',
width : '80%'
}
,{
fieldLabel : '是否锁定',
id : 'add_islock',
xtype : 'textfield',
name : 't_tlr_mgmt.islock',
width : '80%'
}
,{
fieldLabel : '档口名称',
id : 'add_stallsname',
xtype : 'textfield',
name : 't_tlr_mgmt.stallsname',
width : '80%'
}
,{
fieldLabel : '用户logo',
id : 'add_userlogo',
xtype : 'textfield',
name : 't_tlr_mgmt.userlogo',
width : '80%'
}
,{
fieldLabel : '最近密码修改时间',
id : 'add_lst_pwd_date',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_pwd_date',
width : '80%'
}
,{
fieldLabel : '最近修改时间',
id : 'add_lst_modify_date',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_modify_date',
width : '80%'
}
,{
fieldLabel : '地址修改审核状态 0审核中 1审核通过 2审核未通过',
id : 'add_address_status',
xtype : 'textfield',
name : 't_tlr_mgmt.address_status',
width : '80%'
}
,{
fieldLabel : '删除标识 1删除 0h或者null没删除',
id : 'add_dr',
xtype : 'numberfield',
name : 't_tlr_mgmt.dr',
width : '80%'
}
,{
fieldLabel : '备用2',
id : 'add_back2',
xtype : 'textfield',
name : 't_tlr_mgmt.back2',
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
				check(addt_tlr_mgmtForm, "t_tlr_mgmt_addNewInfo.action", queryt_tlr_mgmtStore, "添加信息")
				addt_tlr_mgmtWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_tlr_mgmtWin.hide();
				addt_tlr_mgmtForm.form.reset();
			}
		}]

	});

	addt_tlr_mgmtWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_tlr_mgmtForm
	});

	addt_tlr_mgmt = function() {
		addt_tlr_mgmtWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatet_tlr_mgmtReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_tlr_mgmt.idNumber',
mapping : 'idNumber'
}
,{
name : 't_tlr_mgmt.phone',
mapping : 'phone'
}
,{
name : 't_tlr_mgmt.tlr_name',
mapping : 'tlr_name'
}
,{
name : 't_tlr_mgmt.inst_no',
mapping : 'inst_no'
}
,{
name : 't_tlr_mgmt.tlr_type',
mapping : 'tlr_type'
}
,{
name : 't_tlr_mgmt.tlr_stat',
mapping : 'tlr_stat'
}
,{
name : 't_tlr_mgmt.tlr_pwd',
mapping : 'tlr_pwd'
}
,{
name : 't_tlr_mgmt.islock',
mapping : 'islock'
}
,{
name : 't_tlr_mgmt.deliveryaddress',
mapping : 'deliveryaddress'
}
,{
name : 't_tlr_mgmt.stallsname',
mapping : 'stallsname'
}
,{
name : 't_tlr_mgmt.creationtime',
mapping : 'creationtime'
}
,{
name : 't_tlr_mgmt.userlogo',
mapping : 'userlogo'
}
,{
name : 't_tlr_mgmt.examine',
mapping : 'examine'
}
,{
name : 't_tlr_mgmt.lst_pwd_date',
mapping : 'lst_pwd_date'
}
,{
name : 't_tlr_mgmt.lst_modify_tlr',
mapping : 'lst_modify_tlr'
}
,{
name : 't_tlr_mgmt.lst_modify_date',
mapping : 'lst_modify_date'
}
,{
name : 't_tlr_mgmt.deliveryaddress2',
mapping : 'deliveryaddress2'
}
,{
name : 't_tlr_mgmt.address_status',
mapping : 'address_status'
}
,{
name : 't_tlr_mgmt.addresss_upts',
mapping : 'addresss_upts'
}
,{
name : 't_tlr_mgmt.dr',
mapping : 'dr'
}
,{
name : 't_tlr_mgmt.back1',
mapping : 'back1'
}
,{
name : 't_tlr_mgmt.back2',
mapping : 'back2'
}
,{
name : 't_tlr_mgmt.back3',
mapping : 'back3'
}
]
	);
		
	updatet_tlr_mgmtForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_tlr_mgmtReader,
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
name : 't_tlr_mgmt.idNumber',
width : '80%'
}
,{
fieldLabel : '用户名称',
id : 'uppdate_tlr_name',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_name',
width : '80%'
}
,{
fieldLabel : '用户类型、0=买家、1=卖家、2=系统用户',
id : 'uppdate_tlr_type',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_type',
width : '80%'
}
,{
fieldLabel : '密码',
id : 'uppdate_tlr_pwd',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_pwd',
width : '80%'
}
,{
fieldLabel : '收货地址',
id : 'uppdate_deliveryaddress',
xtype : 'textfield',
name : 't_tlr_mgmt.deliveryaddress',
width : '80%'
}
,{
fieldLabel : '注册时间',
id : 'uppdate_creationtime',
xtype : 'datetimefield',
name : 't_tlr_mgmt.creationtime',
anchor : '95%'
}
,{
fieldLabel : '审核是否通过,0表示待审批，1表示审批通过，2表示审批未通过',
id : 'uppdate_examine',
xtype : 'textfield',
name : 't_tlr_mgmt.examine',
width : '80%'
}
,{
fieldLabel : '最近修改人',
id : 'uppdate_lst_modify_tlr',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_modify_tlr',
width : '80%'
}
,{
fieldLabel : '申请收货地址',
id : 'uppdate_deliveryaddress2',
xtype : 'textfield',
name : 't_tlr_mgmt.deliveryaddress2',
width : '80%'
}
,{
fieldLabel : '地址修改时间',
id : 'uppdate_addresss_upts',
xtype : 'textfield',
name : 't_tlr_mgmt.addresss_upts',
width : '80%'
}
,{
fieldLabel : '备用1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 't_tlr_mgmt.back1',
width : '80%'
}
,{
fieldLabel : '备用3',
id : 'uppdate_back3',
xtype : 'numberfield',
name : 't_tlr_mgmt.back3',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '手机号',
id : 'uppdate_phone',
xtype : 'textfield',
name : 't_tlr_mgmt.phone',
width : '80%'
}
,{
fieldLabel : '机构编号',
id : 'uppdate_inst_no',
xtype : 'textfield',
name : 't_tlr_mgmt.inst_no',
width : '80%'
}
,{
fieldLabel : '用户状态',
id : 'uppdate_tlr_stat',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_stat',
width : '80%'
}
,{
fieldLabel : '是否锁定',
id : 'uppdate_islock',
xtype : 'textfield',
name : 't_tlr_mgmt.islock',
width : '80%'
}
,{
fieldLabel : '档口名称',
id : 'uppdate_stallsname',
xtype : 'textfield',
name : 't_tlr_mgmt.stallsname',
width : '80%'
}
,{
fieldLabel : '用户logo',
id : 'uppdate_userlogo',
xtype : 'textfield',
name : 't_tlr_mgmt.userlogo',
width : '80%'
}
,{
fieldLabel : '最近密码修改时间',
id : 'uppdate_lst_pwd_date',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_pwd_date',
width : '80%'
}
,{
fieldLabel : '最近修改时间',
id : 'uppdate_lst_modify_date',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_modify_date',
width : '80%'
}
,{
fieldLabel : '地址修改审核状态 0审核中 1审核通过 2审核未通过',
id : 'uppdate_address_status',
xtype : 'textfield',
name : 't_tlr_mgmt.address_status',
width : '80%'
}
,{
fieldLabel : '删除标识 1删除 0h或者null没删除',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 't_tlr_mgmt.dr',
width : '80%'
}
,{
fieldLabel : '备用2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 't_tlr_mgmt.back2',
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
				check(updatet_tlr_mgmtForm, "t_tlr_mgmt_update.action", queryt_tlr_mgmtStore, "修改信息")
				updatet_tlr_mgmtWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_tlr_mgmtWin.hide();
				updatet_tlr_mgmtForm.form.reset();
			}
		}]
	});

	updatet_tlr_mgmtWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_tlr_mgmtForm
	});

	update = function() {
		_record = queryt_tlr_mgmtGrid.getSelectionModel().getSelected();
		flag = queryt_tlr_mgmtGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_tlr_mgmtWin.show();
					
			updatet_tlr_mgmtForm.getForm().load({
				url : 't_tlr_mgmt_findById.action?t_tlr_mgmt.idNumber='+ _record.get('idNumber'),
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
 
