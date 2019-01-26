
var queryt_product_infoStore;			
var queryt_product_infoGrid;
var addt_product_info;
var addt_product_infoForm;
var addt_product_infoWin;
var updatet_product_info;
var updatet_product_infoWin;
var updatet_product_infoForm;
var updatet_product_infoReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_markingView.jsp');
	 queryt_product_infoStore = new Ext.data.JsonStore({
		url : 't_product_info_findAll.action',
		root : 't_product_infoList',
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
name : 'comp_no',
mapping : 'comp_no'
}
,{
name : 'product_name',
mapping : 'product_name'
}
,{
name : 'product_abbr_name',
mapping : 'product_abbr_name'
}
,{
name : 'product_type',
mapping : 'product_type'
}
,{
name : 'age',
mapping : 'age'
}
,{
name : 'pay_type',
mapping : 'pay_type'
}
,{
name : 'safe_year',
mapping : 'safe_year'
}
,{
name : 'bgn_bal',
mapping : 'bgn_bal'
}
,{
name : 'grace_day',
mapping : 'grace_day'
}
,{
name : 'illness_bal',
mapping : 'illness_bal'
}
,{
name : 'balance_rate',
mapping : 'balance_rate'
}
,{
name : 'ywbal',
mapping : 'ywbal'
}
,{
name : 'first_bal',
mapping : 'first_bal'
}
,{
name : 'trafc_bal',
mapping : 'trafc_bal'
}
,{
name : 'cancl_amt1',
mapping : 'cancl_amt1'
}
,{
name : 'totl_bal',
mapping : 'totl_bal'
}
,{
name : 'cancl_amt2',
mapping : 'cancl_amt2'
}
,{
name : 'nurse_bal',
mapping : 'nurse_bal'
}
,{
name : 'cancl_amt3',
mapping : 'cancl_amt3'
}
,{
name : 'add_safe',
mapping : 'add_safe'
}
,{
name : 'cancl_amt4',
mapping : 'cancl_amt4'
}
,{
name : 'remark1',
mapping : 'remark1'
}
,{
name : 'cancl_amt5',
mapping : 'cancl_amt5'
}
,{
name : 'base_rate',
mapping : 'base_rate'
}
,{
name : 'bouns_origin',
mapping : 'bouns_origin'
}
,{
name : 'cake_bal1',
mapping : 'cake_bal1'
}
,{
name : 'bouns_adm',
mapping : 'bouns_adm'
}
,{
name : 'cake_bal2',
mapping : 'cake_bal2'
}
,{
name : 'product_vitue',
mapping : 'product_vitue'
}
,{
name : 'cake_bal3',
mapping : 'cake_bal3'
}
,{
name : 'duty_remit',
mapping : 'duty_remit'
}
,{
name : 'cake_bal4',
mapping : 'cake_bal4'
}
,{
name : 'danger_war',
mapping : 'danger_war'
}
,{
name : 'cake_bal5',
mapping : 'cake_bal5'
}
,{
name : 'state',
mapping : 'state'
}
,{
name : 'back',
mapping : 'back'
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
fieldLabel : '产品编号',
id : 'select_idNumber',
xtype : 'textfield',
name : 't_product_info.idNumber',
width : '80%'
}
,{
fieldLabel : '产品全称',
id : 'select_product_name',
xtype : 'textfield',
name : 't_product_info.product_name',
width : '80%'
}
,{
fieldLabel : '产品类型',
id : 'select_product_type',
width : 100,
xtype : 'combo',
store : product_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_product_info.product_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '缴费方式',
id : 'select_pay_type',
width : 100,
xtype : 'combo',
store : pay_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_product_info.pay_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '起售金额',
id : 'select_bgn_bal',
xtype : 'textfield',
name : 't_product_info.bgn_bal',
width : '80%'
}
,{
fieldLabel : '疾病身故保险金',
id : 'select_illness_bal',
xtype : 'textfield',
name : 't_product_info.illness_bal',
width : '80%'
}
,{
fieldLabel : '一般意外险',
id : 'select_ywbal',
xtype : 'textfield',
name : 't_product_info.ywbal',
width : '80%'
}
,{
fieldLabel : '特定交通工具意外伤害身故保险金',
id : 'select_trafc_bal',
xtype : 'textfield',
name : 't_product_info.trafc_bal',
width : '80%'
}
,{
fieldLabel : '期满保险金',
id : 'select_totl_bal',
xtype : 'textfield',
name : 't_product_info.totl_bal',
width : '80%'
}
,{
fieldLabel : '护理保险金',
id : 'select_nurse_bal',
xtype : 'textfield',
name : 't_product_info.nurse_bal',
width : '80%'
}
,{
fieldLabel : '附加险',
id : 'select_add_safe',
xtype : 'textfield',
name : 't_product_info.add_safe',
width : '80%'
}
,{
fieldLabel : '其他',
id : 'select_remark1',
xtype : 'textfield',
name : 't_product_info.remark1',
width : '80%'
}
,{
fieldLabel : '保底利率（分红险）',
id : 'select_base_rate',
xtype : 'textfield',
name : 't_product_info.base_rate',
width : '80%'
}
,{
fieldLabel : '历年分红1',
id : 'select_cake_bal1',
xtype : 'textfield',
name : 't_product_info.cake_bal1',
width : '80%'
}
,{
fieldLabel : '历年分红2',
id : 'select_cake_bal2',
xtype : 'textfield',
name : 't_product_info.cake_bal2',
width : '80%'
}
,{
fieldLabel : '历年分红3',
id : 'select_cake_bal3',
xtype : 'textfield',
name : 't_product_info.cake_bal3',
width : '80%'
}
,{
fieldLabel : '历年分红4',
id : 'select_cake_bal4',
xtype : 'textfield',
name : 't_product_info.cake_bal4',
width : '80%'
}
,{
fieldLabel : '历年分红5',
id : 'select_cake_bal5',
xtype : 'textfield',
name : 't_product_info.cake_bal5',
width : '80%'
}
,{
fieldLabel : '备用',
id : 'select_back',
xtype : 'textfield',
name : 't_product_info.back',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '保险公司编号',
id : 'select_comp_no',
xtype : 'textfield',
name : 't_product_info.comp_no',
width : '80%'
}
,{
fieldLabel : '产品简称',
id : 'select_product_abbr_name',
xtype : 'textfield',
name : 't_product_info.product_abbr_name',
width : '80%'
}
,{
fieldLabel : '被保人年龄',
id : 'select_age',
xtype : 'textfield',
name : 't_product_info.age',
width : '80%'
}
,{
fieldLabel : '保险期间',
id : 'select_safe_year',
xtype : 'textfield',
name : 't_product_info.safe_year',
width : '80%'
}
,{
fieldLabel : '犹豫期',
id : 'select_grace_day',
xtype : 'numberfield',
name : 't_product_info.grace_day',
width : '80%'
}
,{
fieldLabel : '结算利率（万能险）',
id : 'select_balance_rate',
xtype : 'textfield',
name : 't_product_info.balance_rate',
width : '80%'
}
,{
fieldLabel : '初始费用',
id : 'select_first_bal',
xtype : 'textfield',
name : 't_product_info.first_bal',
width : '80%'
}
,{
fieldLabel : '退保费用1年',
id : 'select_cancl_amt1',
xtype : 'textfield',
name : 't_product_info.cancl_amt1',
width : '80%'
}
,{
fieldLabel : '退保费用2年',
id : 'select_cancl_amt2',
xtype : 'textfield',
name : 't_product_info.cancl_amt2',
width : '80%'
}
,{
fieldLabel : '退保费用3年',
id : 'select_cancl_amt3',
xtype : 'textfield',
name : 't_product_info.cancl_amt3',
width : '80%'
}
,{
fieldLabel : '退保费用4年',
id : 'select_cancl_amt4',
xtype : 'textfield',
name : 't_product_info.cancl_amt4',
width : '80%'
}
,{
fieldLabel : '退保费用5年',
id : 'select_cancl_amt5',
xtype : 'textfield',
name : 't_product_info.cancl_amt5',
width : '80%'
}
,{
fieldLabel : '红利来源',
id : 'select_bouns_origin',
xtype : 'textfield',
name : 't_product_info.bouns_origin',
width : '80%'
}
,{
fieldLabel : '红利分配',
id : 'select_bouns_adm',
xtype : 'textfield',
name : 't_product_info.bouns_adm',
width : '80%'
}
,{
fieldLabel : '产品优点',
id : 'select_product_vitue',
xtype : 'textfield',
name : 't_product_info.product_vitue',
width : '80%'
}
,{
fieldLabel : '责任免除',
id : 'select_duty_remit',
xtype : 'textfield',
name : 't_product_info.duty_remit',
width : '80%'
}
,{
fieldLabel : '风险提示',
id : 'select_danger_war',
xtype : 'textfield',
name : 't_product_info.danger_war',
width : '80%'
}
,{
fieldLabel : '状态',
id : 'select_state',
width : 100,
xtype : 'combo',
store : stateStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_product_info.state',
pageSize : 5,
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
queryt_product_infoStore.proxy = new Ext.data.HttpProxy({
url : 't_product_info_findInfoByConditions.action?'
+'t_product_info.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&t_product_info.comp_no='
+ Ext.getCmp('select_comp_no').getValue()
+'&t_product_info.product_name='
+ Ext.getCmp('select_product_name').getValue()
+'&t_product_info.product_abbr_name='
+ Ext.getCmp('select_product_abbr_name').getValue()
+'&t_product_info.product_type='
+ Ext.getCmp('select_product_type').getValue()
+'&t_product_info.age='
+ Ext.getCmp('select_age').getValue()
+'&t_product_info.pay_type='
+ Ext.getCmp('select_pay_type').getValue()
+'&t_product_info.safe_year='
+ Ext.getCmp('select_safe_year').getValue()
+'&t_product_info.bgn_bal='
+ Ext.getCmp('select_bgn_bal').getValue()
+'&t_product_info.grace_day='
+ Ext.getCmp('select_grace_day').getValue()
+'&t_product_info.illness_bal='
+ Ext.getCmp('select_illness_bal').getValue()
+'&t_product_info.balance_rate='
+ Ext.getCmp('select_balance_rate').getValue()
+'&t_product_info.ywbal='
+ Ext.getCmp('select_ywbal').getValue()
+'&t_product_info.first_bal='
+ Ext.getCmp('select_first_bal').getValue()
+'&t_product_info.trafc_bal='
+ Ext.getCmp('select_trafc_bal').getValue()
+'&t_product_info.cancl_amt1='
+ Ext.getCmp('select_cancl_amt1').getValue()
+'&t_product_info.totl_bal='
+ Ext.getCmp('select_totl_bal').getValue()
+'&t_product_info.cancl_amt2='
+ Ext.getCmp('select_cancl_amt2').getValue()
+'&t_product_info.nurse_bal='
+ Ext.getCmp('select_nurse_bal').getValue()
+'&t_product_info.cancl_amt3='
+ Ext.getCmp('select_cancl_amt3').getValue()
+'&t_product_info.add_safe='
+ Ext.getCmp('select_add_safe').getValue()
+'&t_product_info.cancl_amt4='
+ Ext.getCmp('select_cancl_amt4').getValue()
+'&t_product_info.remark1='
+ Ext.getCmp('select_remark1').getValue()
+'&t_product_info.cancl_amt5='
+ Ext.getCmp('select_cancl_amt5').getValue()
+'&t_product_info.base_rate='
+ Ext.getCmp('select_base_rate').getValue()
+'&t_product_info.bouns_origin='
+ Ext.getCmp('select_bouns_origin').getValue()
+'&t_product_info.cake_bal1='
+ Ext.getCmp('select_cake_bal1').getValue()
+'&t_product_info.bouns_adm='
+ Ext.getCmp('select_bouns_adm').getValue()
+'&t_product_info.cake_bal2='
+ Ext.getCmp('select_cake_bal2').getValue()
+'&t_product_info.product_vitue='
+ Ext.getCmp('select_product_vitue').getValue()
+'&t_product_info.cake_bal3='
+ Ext.getCmp('select_cake_bal3').getValue()
+'&t_product_info.duty_remit='
+ Ext.getCmp('select_duty_remit').getValue()
+'&t_product_info.cake_bal4='
+ Ext.getCmp('select_cake_bal4').getValue()
+'&t_product_info.danger_war='
+ Ext.getCmp('select_danger_war').getValue()
+'&t_product_info.cake_bal5='
+ Ext.getCmp('select_cake_bal5').getValue()
+'&t_product_info.state='
+ Ext.getCmp('select_state').getValue()
+'&t_product_info.back='
+ Ext.getCmp('select_back').getValue()
});
	queryt_product_infoStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryt_product_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_product_infoGrid = new Ext.grid.GridPanel({
		store : queryt_product_infoStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '产品编号',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '保险公司编号',
dataIndex : 'comp_no',
width : 120 
}
,{
header : '产品全称',
dataIndex : 'product_name',
width : 120 
}
,{
header : '产品简称',
dataIndex : 'product_abbr_name',
width : 120 
}
,{
header : '产品类型',
dataIndex : 'product_type',
width : 120 
}
,{
header : '被保人年龄',
dataIndex : 'age',
width : 120 
}
,{
header : '缴费方式',
dataIndex : 'pay_type',
width : 120 
}
,{
header : '保险期间',
dataIndex : 'safe_year',
width : 120 
}
,{
header : '起售金额',
dataIndex : 'bgn_bal',
width : 120 
}
,{
header : '犹豫期',
dataIndex : 'grace_day',
width : 120 
}
,{
header : '疾病身故保险金',
dataIndex : 'illness_bal',
width : 120 
}
,{
header : '结算利率（万能险）',
dataIndex : 'balance_rate',
width : 120 
}
,{
header : '一般意外险',
dataIndex : 'ywbal',
width : 120 
}
,{
header : '初始费用',
dataIndex : 'first_bal',
width : 120 
}
,{
header : '特定交通工具意外伤害身故保险金',
dataIndex : 'trafc_bal',
width : 120 
}
,{
header : '退保费用1年',
dataIndex : 'cancl_amt1',
width : 120 
}
,{
header : '期满保险金',
dataIndex : 'totl_bal',
width : 120 
}
,{
header : '退保费用2年',
dataIndex : 'cancl_amt2',
width : 120 
}
,{
header : '护理保险金',
dataIndex : 'nurse_bal',
width : 120 
}
,{
header : '退保费用3年',
dataIndex : 'cancl_amt3',
width : 120 
}
,{
header : '附加险',
dataIndex : 'add_safe',
width : 120 
}
,{
header : '退保费用4年',
dataIndex : 'cancl_amt4',
width : 120 
}
,{
header : '其他',
dataIndex : 'remark1',
width : 120 
}
,{
header : '退保费用5年',
dataIndex : 'cancl_amt5',
width : 120 
}
,{
header : '保底利率（分红险）',
dataIndex : 'base_rate',
width : 120 
}
,{
header : '红利来源',
dataIndex : 'bouns_origin',
width : 120 
}
,{
header : '历年分红1',
dataIndex : 'cake_bal1',
width : 120 
}
,{
header : '红利分配',
dataIndex : 'bouns_adm',
width : 120 
}
,{
header : '历年分红2',
dataIndex : 'cake_bal2',
width : 120 
}
,{
header : '产品优点',
dataIndex : 'product_vitue',
width : 120 
}
,{
header : '历年分红3',
dataIndex : 'cake_bal3',
width : 120 
}
,{
header : '责任免除',
dataIndex : 'duty_remit',
width : 120 
}
,{
header : '历年分红4',
dataIndex : 'cake_bal4',
width : 120 
}
,{
header : '风险提示',
dataIndex : 'danger_war',
width : 120 
}
,{
header : '历年分红5',
dataIndex : 'cake_bal5',
width : 120 
}
,{
header : '状态',
dataIndex : 'state',
width : 120 
}
,{
header : '备用',
dataIndex : 'back',
width : 120 
}
],
		width : 500,
		height : 200,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_product_info();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_product_infoGrid, queryt_product_infoStore, "t_product_info_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_product_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_product_infoGrid',
		items : [selectUnitForm, queryt_product_infoGrid]
	});
	var divHeight = document.getElementById('t_product_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_product_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_product_infoGrid.setWidth(showQueryPanel.getWidth());
	queryt_product_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addt_product_infoForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 800, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产品编号',
id : 'add_idNumber',
xtype : 'textfield',
name : 't_product_info.idNumber',
width : '80%'
}
,{
fieldLabel : '产品全称',
id : 'add_product_name',
xtype : 'textfield',
name : 't_product_info.product_name',
width : '80%'
}
,{
fieldLabel : '产品类型',
id : 'add_product_type',
width : 100,
xtype : 'combo',
store : product_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_product_info.product_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '缴费方式',
id : 'add_pay_type',
width : 100,
xtype : 'combo',
store : pay_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_product_info.pay_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '起售金额',
id : 'add_bgn_bal',
xtype : 'textfield',
name : 't_product_info.bgn_bal',
width : '80%'
}
,{
fieldLabel : '疾病身故保险金',
id : 'add_illness_bal',
xtype : 'textfield',
name : 't_product_info.illness_bal',
width : '80%'
}
,{
fieldLabel : '一般意外险',
id : 'add_ywbal',
xtype : 'textfield',
name : 't_product_info.ywbal',
width : '80%'
}
,{
fieldLabel : '特定交通工具意外伤害身故保险金',
id : 'add_trafc_bal',
xtype : 'textfield',
name : 't_product_info.trafc_bal',
width : '80%'
}
,{
fieldLabel : '期满保险金',
id : 'add_totl_bal',
xtype : 'textfield',
name : 't_product_info.totl_bal',
width : '80%'
}
,{
fieldLabel : '护理保险金',
id : 'add_nurse_bal',
xtype : 'textfield',
name : 't_product_info.nurse_bal',
width : '80%'
}
,{
fieldLabel : '附加险',
id : 'add_add_safe',
xtype : 'textfield',
name : 't_product_info.add_safe',
width : '80%'
}
,{
fieldLabel : '其他',
id : 'add_remark1',
xtype : 'textfield',
name : 't_product_info.remark1',
width : '80%'
}
,{
fieldLabel : '保底利率（分红险）',
id : 'add_base_rate',
xtype : 'textfield',
name : 't_product_info.base_rate',
width : '80%'
}
,{
fieldLabel : '历年分红1',
id : 'add_cake_bal1',
xtype : 'textfield',
name : 't_product_info.cake_bal1',
width : '80%'
}
,{
fieldLabel : '历年分红2',
id : 'add_cake_bal2',
xtype : 'textfield',
name : 't_product_info.cake_bal2',
width : '80%'
}
,{
fieldLabel : '历年分红3',
id : 'add_cake_bal3',
xtype : 'textfield',
name : 't_product_info.cake_bal3',
width : '80%'
}
,{
fieldLabel : '历年分红4',
id : 'add_cake_bal4',
xtype : 'textfield',
name : 't_product_info.cake_bal4',
width : '80%'
}
,{
fieldLabel : '历年分红5',
id : 'add_cake_bal5',
xtype : 'textfield',
name : 't_product_info.cake_bal5',
width : '80%'
}
,{
fieldLabel : '备用',
id : 'add_back',
xtype : 'textfield',
name : 't_product_info.back',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '保险公司编号',
id : 'add_comp_no',
xtype : 'textfield',
name : 't_product_info.comp_no',
width : '80%'
}
,{
fieldLabel : '产品简称',
id : 'add_product_abbr_name',
xtype : 'textfield',
name : 't_product_info.product_abbr_name',
width : '80%'
}
,{
fieldLabel : '被保人年龄',
id : 'add_age',
xtype : 'textfield',
name : 't_product_info.age',
width : '80%'
}
,{
fieldLabel : '保险期间',
id : 'add_safe_year',
xtype : 'textfield',
name : 't_product_info.safe_year',
width : '80%'
}
,{
fieldLabel : '犹豫期',
id : 'add_grace_day',
xtype : 'numberfield',
name : 't_product_info.grace_day',
width : '80%'
}
,{
fieldLabel : '结算利率（万能险）',
id : 'add_balance_rate',
xtype : 'textfield',
name : 't_product_info.balance_rate',
width : '80%'
}
,{
fieldLabel : '初始费用',
id : 'add_first_bal',
xtype : 'textfield',
name : 't_product_info.first_bal',
width : '80%'
}
,{
fieldLabel : '退保费用1年',
id : 'add_cancl_amt1',
xtype : 'textfield',
name : 't_product_info.cancl_amt1',
width : '80%'
}
,{
fieldLabel : '退保费用2年',
id : 'add_cancl_amt2',
xtype : 'textfield',
name : 't_product_info.cancl_amt2',
width : '80%'
}
,{
fieldLabel : '退保费用3年',
id : 'add_cancl_amt3',
xtype : 'textfield',
name : 't_product_info.cancl_amt3',
width : '80%'
}
,{
fieldLabel : '退保费用4年',
id : 'add_cancl_amt4',
xtype : 'textfield',
name : 't_product_info.cancl_amt4',
width : '80%'
}
,{
fieldLabel : '退保费用5年',
id : 'add_cancl_amt5',
xtype : 'textfield',
name : 't_product_info.cancl_amt5',
width : '80%'
}
,{
fieldLabel : '红利来源',
id : 'add_bouns_origin',
xtype : 'textfield',
name : 't_product_info.bouns_origin',
width : '80%'
}
,{
fieldLabel : '红利分配',
id : 'add_bouns_adm',
xtype : 'textfield',
name : 't_product_info.bouns_adm',
width : '80%'
}
,{
fieldLabel : '产品优点',
id : 'add_product_vitue',
xtype : 'textfield',
name : 't_product_info.product_vitue',
width : '80%'
}
,{
fieldLabel : '责任免除',
id : 'add_duty_remit',
xtype : 'textfield',
name : 't_product_info.duty_remit',
width : '80%'
}
,{
fieldLabel : '风险提示',
id : 'add_danger_war',
xtype : 'textfield',
name : 't_product_info.danger_war',
width : '80%'
}
,{
fieldLabel : '状态',
id : 'add_state',
width : 100,
xtype : 'combo',
store : stateStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_product_info.state',
pageSize : 5,
anchor : '90%'
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
				check(addt_product_infoForm, "t_product_info_addNewInfo.action", queryt_product_infoStore, "添加信息");
				addt_product_infoWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_product_infoWin.hide();
				addt_product_infoForm.form.reset();
			}
		}]

	});

	addt_product_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 800,
		plain : true,
		closable : false,
		items : addt_product_infoForm
	});

	addt_product_info = function() {
		addt_product_infoWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatet_product_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_product_info.idNumber',
mapping : 'idNumber'
}
,{
name : 't_product_info.comp_no',
mapping : 'comp_no'
}
,{
name : 't_product_info.product_name',
mapping : 'product_name'
}
,{
name : 't_product_info.product_abbr_name',
mapping : 'product_abbr_name'
}
,{
name : 't_product_info.product_type',
mapping : 'product_type'
}
,{
name : 't_product_info.age',
mapping : 'age'
}
,{
name : 't_product_info.pay_type',
mapping : 'pay_type'
}
,{
name : 't_product_info.safe_year',
mapping : 'safe_year'
}
,{
name : 't_product_info.bgn_bal',
mapping : 'bgn_bal'
}
,{
name : 't_product_info.grace_day',
mapping : 'grace_day'
}
,{
name : 't_product_info.illness_bal',
mapping : 'illness_bal'
}
,{
name : 't_product_info.balance_rate',
mapping : 'balance_rate'
}
,{
name : 't_product_info.ywbal',
mapping : 'ywbal'
}
,{
name : 't_product_info.first_bal',
mapping : 'first_bal'
}
,{
name : 't_product_info.trafc_bal',
mapping : 'trafc_bal'
}
,{
name : 't_product_info.cancl_amt1',
mapping : 'cancl_amt1'
}
,{
name : 't_product_info.totl_bal',
mapping : 'totl_bal'
}
,{
name : 't_product_info.cancl_amt2',
mapping : 'cancl_amt2'
}
,{
name : 't_product_info.nurse_bal',
mapping : 'nurse_bal'
}
,{
name : 't_product_info.cancl_amt3',
mapping : 'cancl_amt3'
}
,{
name : 't_product_info.add_safe',
mapping : 'add_safe'
}
,{
name : 't_product_info.cancl_amt4',
mapping : 'cancl_amt4'
}
,{
name : 't_product_info.remark1',
mapping : 'remark1'
}
,{
name : 't_product_info.cancl_amt5',
mapping : 'cancl_amt5'
}
,{
name : 't_product_info.base_rate',
mapping : 'base_rate'
}
,{
name : 't_product_info.bouns_origin',
mapping : 'bouns_origin'
}
,{
name : 't_product_info.cake_bal1',
mapping : 'cake_bal1'
}
,{
name : 't_product_info.bouns_adm',
mapping : 'bouns_adm'
}
,{
name : 't_product_info.cake_bal2',
mapping : 'cake_bal2'
}
,{
name : 't_product_info.product_vitue',
mapping : 'product_vitue'
}
,{
name : 't_product_info.cake_bal3',
mapping : 'cake_bal3'
}
,{
name : 't_product_info.duty_remit',
mapping : 'duty_remit'
}
,{
name : 't_product_info.cake_bal4',
mapping : 'cake_bal4'
}
,{
name : 't_product_info.danger_war',
mapping : 'danger_war'
}
,{
name : 't_product_info.cake_bal5',
mapping : 'cake_bal5'
}
,{
name : 't_product_info.state',
mapping : 'state'
}
,{
name : 't_product_info.back',
mapping : 'back'
}
]
	);
		
	updatet_product_infoForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_product_infoReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产品编号',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_product_info.idNumber',
width : '80%'
}
,{
fieldLabel : '产品全称',
id : 'uppdate_product_name',
xtype : 'textfield',
name : 't_product_info.product_name',
width : '80%'
}
,{
fieldLabel : '产品类型',
id : 'uppdate_product_type',
width : 100,
xtype : 'combo',
store : product_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_product_info.product_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '缴费方式',
id : 'uppdate_pay_type',
width : 100,
xtype : 'combo',
store : pay_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_product_info.pay_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '起售金额',
id : 'uppdate_bgn_bal',
xtype : 'textfield',
name : 't_product_info.bgn_bal',
width : '80%'
}
,{
fieldLabel : '疾病身故保险金',
id : 'uppdate_illness_bal',
xtype : 'textfield',
name : 't_product_info.illness_bal',
width : '80%'
}
,{
fieldLabel : '一般意外险',
id : 'uppdate_ywbal',
xtype : 'textfield',
name : 't_product_info.ywbal',
width : '80%'
}
,{
fieldLabel : '特定交通工具意外伤害身故保险金',
id : 'uppdate_trafc_bal',
xtype : 'textfield',
name : 't_product_info.trafc_bal',
width : '80%'
}
,{
fieldLabel : '期满保险金',
id : 'uppdate_totl_bal',
xtype : 'textfield',
name : 't_product_info.totl_bal',
width : '80%'
}
,{
fieldLabel : '护理保险金',
id : 'uppdate_nurse_bal',
xtype : 'textfield',
name : 't_product_info.nurse_bal',
width : '80%'
}
,{
fieldLabel : '附加险',
id : 'uppdate_add_safe',
xtype : 'textfield',
name : 't_product_info.add_safe',
width : '80%'
}
,{
fieldLabel : '其他',
id : 'uppdate_remark1',
xtype : 'textfield',
name : 't_product_info.remark1',
width : '80%'
}
,{
fieldLabel : '保底利率（分红险）',
id : 'uppdate_base_rate',
xtype : 'textfield',
name : 't_product_info.base_rate',
width : '80%'
}
,{
fieldLabel : '历年分红1',
id : 'uppdate_cake_bal1',
xtype : 'textfield',
name : 't_product_info.cake_bal1',
width : '80%'
}
,{
fieldLabel : '历年分红2',
id : 'uppdate_cake_bal2',
xtype : 'textfield',
name : 't_product_info.cake_bal2',
width : '80%'
}
,{
fieldLabel : '历年分红3',
id : 'uppdate_cake_bal3',
xtype : 'textfield',
name : 't_product_info.cake_bal3',
width : '80%'
}
,{
fieldLabel : '历年分红4',
id : 'uppdate_cake_bal4',
xtype : 'textfield',
name : 't_product_info.cake_bal4',
width : '80%'
}
,{
fieldLabel : '历年分红5',
id : 'uppdate_cake_bal5',
xtype : 'textfield',
name : 't_product_info.cake_bal5',
width : '80%'
}
,{
fieldLabel : '备用',
id : 'uppdate_back',
xtype : 'textfield',
name : 't_product_info.back',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '保险公司编号',
id : 'uppdate_comp_no',
xtype : 'textfield',
name : 't_product_info.comp_no',
width : '80%'
}
,{
fieldLabel : '产品简称',
id : 'uppdate_product_abbr_name',
xtype : 'textfield',
name : 't_product_info.product_abbr_name',
width : '80%'
}
,{
fieldLabel : '被保人年龄',
id : 'uppdate_age',
xtype : 'textfield',
name : 't_product_info.age',
width : '80%'
}
,{
fieldLabel : '保险期间',
id : 'uppdate_safe_year',
xtype : 'textfield',
name : 't_product_info.safe_year',
width : '80%'
}
,{
fieldLabel : '犹豫期',
id : 'uppdate_grace_day',
xtype : 'numberfield',
name : 't_product_info.grace_day',
width : '80%'
}
,{
fieldLabel : '结算利率（万能险）',
id : 'uppdate_balance_rate',
xtype : 'textfield',
name : 't_product_info.balance_rate',
width : '80%'
}
,{
fieldLabel : '初始费用',
id : 'uppdate_first_bal',
xtype : 'textfield',
name : 't_product_info.first_bal',
width : '80%'
}
,{
fieldLabel : '退保费用1年',
id : 'uppdate_cancl_amt1',
xtype : 'textfield',
name : 't_product_info.cancl_amt1',
width : '80%'
}
,{
fieldLabel : '退保费用2年',
id : 'uppdate_cancl_amt2',
xtype : 'textfield',
name : 't_product_info.cancl_amt2',
width : '80%'
}
,{
fieldLabel : '退保费用3年',
id : 'uppdate_cancl_amt3',
xtype : 'textfield',
name : 't_product_info.cancl_amt3',
width : '80%'
}
,{
fieldLabel : '退保费用4年',
id : 'uppdate_cancl_amt4',
xtype : 'textfield',
name : 't_product_info.cancl_amt4',
width : '80%'
}
,{
fieldLabel : '退保费用5年',
id : 'uppdate_cancl_amt5',
xtype : 'textfield',
name : 't_product_info.cancl_amt5',
width : '80%'
}
,{
fieldLabel : '红利来源',
id : 'uppdate_bouns_origin',
xtype : 'textfield',
name : 't_product_info.bouns_origin',
width : '80%'
}
,{
fieldLabel : '红利分配',
id : 'uppdate_bouns_adm',
xtype : 'textfield',
name : 't_product_info.bouns_adm',
width : '80%'
}
,{
fieldLabel : '产品优点',
id : 'uppdate_product_vitue',
xtype : 'textfield',
name : 't_product_info.product_vitue',
width : '80%'
}
,{
fieldLabel : '责任免除',
id : 'uppdate_duty_remit',
xtype : 'textfield',
name : 't_product_info.duty_remit',
width : '80%'
}
,{
fieldLabel : '风险提示',
id : 'uppdate_danger_war',
xtype : 'textfield',
name : 't_product_info.danger_war',
width : '80%'
}
,{
fieldLabel : '状态',
id : 'uppdate_state',
width : 100,
xtype : 'combo',
store : stateStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_product_info.state',
pageSize : 5,
anchor : '90%'
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
				check(updatet_product_infoForm, "t_product_info_update.action", queryt_product_infoStore, "修改信息");
				updatet_product_infoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_product_infoWin.hide();
				updatet_product_infoForm.form.reset();
			}
		}]
	});

	updatet_product_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 800,
		plain : true,
		closable : false,
		items : updatet_product_infoForm
	});

	update = function() {
		_record = queryt_product_infoGrid.getSelectionModel().getSelected();
		flag = queryt_product_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_product_infoWin.show();
					
			updatet_product_infoForm.getForm().load({
				url : 't_product_info_findById.action?t_product_info.idNumber='+ _record.get('idNumber'),
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
 
