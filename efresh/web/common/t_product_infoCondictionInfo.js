
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
id : 'select_idnumber',
xtype : 'textfield',
name : 't_product_info.idnumber',
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
+'t_product_info.idnumber='
+ Ext.getCmp('select_idnumber').getValue()
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

		         
	});