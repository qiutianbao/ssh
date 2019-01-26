
	addt_product_selectForm = new Ext.FormPanel({
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
xtype : 'textfield',
name : 't_product_select.idnumber',
width : '80%'
}
,{
fieldLabel : '投保人性别',
id : 'add_sex',
xtype : 'textfield',
name : 't_product_select.sex',
width : '80%'
}
,{
fieldLabel : '起存金额',
id : 'add_bgn_bal_select',
xtype : 'textfield',
name : 't_product_select.bgn_bal_select',
width : '80%'
}
,{
fieldLabel : '结束投保年龄',
id : 'add_end_age',
xtype : 'textfield',
name : 't_product_select.end_age',
width : '80%'
}
,{
fieldLabel : '保险期限',
id : 'add_insure_period',
xtype : 'textfield',
name : 't_product_select.insure_period',
width : '80%'
}
,{
fieldLabel : '备用2',
id : 'add_back2',
xtype : 'textfield',
name : 't_product_select.back2',
width : '80%'
}
,{
fieldLabel : '备用3',
id : 'add_back3',
xtype : 'textfield',
name : 't_product_select.back3',
width : '80%'
}
,{
fieldLabel : 'name5',
id : 'add_back5',
xtype : 'textfield',
name : 't_product_select.back5',
width : '80%'
}
,{
fieldLabel : '缴费方式',
id : 'add_pay_type',
xtype : 'textfield',
name : 't_product_select.pay_type',
width : '80%'
}
,{
fieldLabel : '疾病身故保险金',
id : 'add_illness_bal_flag',
xtype : 'textfield',
name : 't_product_select.illness_bal_flag',
width : '80%'
}
,{
fieldLabel : '交通意外险',
id : 'add_trafc_bal_flag',
xtype : 'textfield',
name : 't_product_select.trafc_bal_flag',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '附加险',
id : 'add_add_safe_flag',
xtype : 'textfield',
name : 't_product_select.add_safe_flag',
width : '80%'
}
,{
fieldLabel : '红利分配方式',
id : 'add_bouns_adm_type',
xtype : 'textfield',
name : 't_product_select.bouns_adm_type',
width : '80%'
}
,{
fieldLabel : '开始投保年龄',
id : 'add_start_age',
xtype : 'textfield',
name : 't_product_select.start_age',
width : '80%'
}
,{
fieldLabel : '期缴年限',
id : 'add_expect_pay',
xtype : 'textfield',
name : 't_product_select.expect_pay',
width : '80%'
}
,{
fieldLabel : '备用1',
id : 'add_back1',
xtype : 'textfield',
name : 't_product_select.back1',
width : '80%'
}
,{
fieldLabel : '产品编号',
id : 'add_pro_no',
xtype : 'textfield',
name : 't_product_select.pro_no',
width : '80%'
}
,{
fieldLabel : '备用4',
id : 'add_back4',
xtype : 'textfield',
name : 't_product_select.back4',
width : '80%'
}
,{
fieldLabel : '公司编码',
id : 'add_comp_no',
xtype : 'textfield',
name : 't_product_select.comp_no',
width : '80%'
}
,{
fieldLabel : '产品类型',
id : 'add_product_type',
xtype : 'textfield',
name : 't_product_select.product_type',
width : '80%'
}
,{
fieldLabel : '一般意外伤害',
id : 'add_ywbal_flag',
xtype : 'textfield',
name : 't_product_select.ywbal_flag',
width : '80%'
}
,{
fieldLabel : '满期保险金',
id : 'add_totl_bal_flag',
xtype : 'textfield',
name : 't_product_select.totl_bal_flag',
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
				check(addt_product_selectForm, "t_product_select_addNewInfo.action", queryt_product_selectStore, "添加信息")
				addt_product_selectWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_product_selectWin.hide();
				addt_product_selectForm.form.reset();
			}
		}]

	});

	addt_product_selectWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_product_selectForm
	});

	addt_product_select = function() {
		addt_product_selectWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};