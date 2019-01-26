
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
name : 't_product_info.idnumber',
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
				check(updatet_product_infoForm, "t_product_info_update.action", queryt_product_infoStore, "修改信息")
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
		height : 330,
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

