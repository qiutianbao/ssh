
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
id : 'select_idnumber',
xtype : 'textfield',
name : 't_product_select.idnumber',
width : '80%'
}
,{
fieldLabel : '投保人性别',
id : 'select_sex',
xtype : 'textfield',
name : 't_product_select.sex',
width : '80%'
}
,{
fieldLabel : '起存金额',
id : 'select_bgn_bal_select',
xtype : 'textfield',
name : 't_product_select.bgn_bal_select',
width : '80%'
}
,{
fieldLabel : '结束投保年龄',
id : 'select_end_age',
xtype : 'textfield',
name : 't_product_select.end_age',
width : '80%'
}
,{
fieldLabel : '保险期限',
id : 'select_insure_period',
xtype : 'textfield',
name : 't_product_select.insure_period',
width : '80%'
}
,{
fieldLabel : '备用2',
id : 'select_back2',
xtype : 'textfield',
name : 't_product_select.back2',
width : '80%'
}
,{
fieldLabel : '备用3',
id : 'select_back3',
xtype : 'textfield',
name : 't_product_select.back3',
width : '80%'
}
,{
fieldLabel : 'name5',
id : 'select_back5',
xtype : 'textfield',
name : 't_product_select.back5',
width : '80%'
}
,{
fieldLabel : '缴费方式',
id : 'select_pay_type',
xtype : 'textfield',
name : 't_product_select.pay_type',
width : '80%'
}
,{
fieldLabel : '疾病身故保险金',
id : 'select_illness_bal_flag',
xtype : 'textfield',
name : 't_product_select.illness_bal_flag',
width : '80%'
}
,{
fieldLabel : '交通意外险',
id : 'select_trafc_bal_flag',
xtype : 'textfield',
name : 't_product_select.trafc_bal_flag',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '附加险',
id : 'select_add_safe_flag',
xtype : 'textfield',
name : 't_product_select.add_safe_flag',
width : '80%'
}
,{
fieldLabel : '红利分配方式',
id : 'select_bouns_adm_type',
xtype : 'textfield',
name : 't_product_select.bouns_adm_type',
width : '80%'
}
,{
fieldLabel : '开始投保年龄',
id : 'select_start_age',
xtype : 'textfield',
name : 't_product_select.start_age',
width : '80%'
}
,{
fieldLabel : '期缴年限',
id : 'select_expect_pay',
xtype : 'textfield',
name : 't_product_select.expect_pay',
width : '80%'
}
,{
fieldLabel : '备用1',
id : 'select_back1',
xtype : 'textfield',
name : 't_product_select.back1',
width : '80%'
}
,{
fieldLabel : '产品编号',
id : 'select_pro_no',
xtype : 'textfield',
name : 't_product_select.pro_no',
width : '80%'
}
,{
fieldLabel : '备用4',
id : 'select_back4',
xtype : 'textfield',
name : 't_product_select.back4',
width : '80%'
}
,{
fieldLabel : '公司编码',
id : 'select_comp_no',
xtype : 'textfield',
name : 't_product_select.comp_no',
width : '80%'
}
,{
fieldLabel : '产品类型',
id : 'select_product_type',
xtype : 'textfield',
name : 't_product_select.product_type',
width : '80%'
}
,{
fieldLabel : '一般意外伤害',
id : 'select_ywbal_flag',
xtype : 'textfield',
name : 't_product_select.ywbal_flag',
width : '80%'
}
,{
fieldLabel : '满期保险金',
id : 'select_totl_bal_flag',
xtype : 'textfield',
name : 't_product_select.totl_bal_flag',
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
queryt_product_selectStore.proxy = new Ext.data.HttpProxy({
url : 't_product_select_findInfoByConditions.action?'
+'t_product_select.idnumber='
+ Ext.getCmp('select_idnumber').getValue()
+'&t_product_select.add_safe_flag='
+ Ext.getCmp('select_add_safe_flag').getValue()
+'&t_product_select.sex='
+ Ext.getCmp('select_sex').getValue()
+'&t_product_select.bouns_adm_type='
+ Ext.getCmp('select_bouns_adm_type').getValue()
+'&t_product_select.bgn_bal_select='
+ Ext.getCmp('select_bgn_bal_select').getValue()
+'&t_product_select.start_age='
+ Ext.getCmp('select_start_age').getValue()
+'&t_product_select.end_age='
+ Ext.getCmp('select_end_age').getValue()
+'&t_product_select.expect_pay='
+ Ext.getCmp('select_expect_pay').getValue()
+'&t_product_select.insure_period='
+ Ext.getCmp('select_insure_period').getValue()
+'&t_product_select.back1='
+ Ext.getCmp('select_back1').getValue()
+'&t_product_select.back2='
+ Ext.getCmp('select_back2').getValue()
+'&t_product_select.pro_no='
+ Ext.getCmp('select_pro_no').getValue()
+'&t_product_select.back3='
+ Ext.getCmp('select_back3').getValue()
+'&t_product_select.back4='
+ Ext.getCmp('select_back4').getValue()
+'&t_product_select.back5='
+ Ext.getCmp('select_back5').getValue()
+'&t_product_select.comp_no='
+ Ext.getCmp('select_comp_no').getValue()
+'&t_product_select.pay_type='
+ Ext.getCmp('select_pay_type').getValue()
+'&t_product_select.product_type='
+ Ext.getCmp('select_product_type').getValue()
+'&t_product_select.illness_bal_flag='
+ Ext.getCmp('select_illness_bal_flag').getValue()
+'&t_product_select.ywbal_flag='
+ Ext.getCmp('select_ywbal_flag').getValue()
+'&t_product_select.trafc_bal_flag='
+ Ext.getCmp('select_trafc_bal_flag').getValue()
+'&t_product_select.totl_bal_flag='
+ Ext.getCmp('select_totl_bal_flag').getValue()
});
	queryt_product_selectStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});