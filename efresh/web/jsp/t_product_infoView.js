
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
	
	haveRight('jsp/t_product_infoView.jsp');
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
	name : 'remark',
	mapping : 'remark'
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
id : 'add_remark',
xtype : 'textfield',
name : 't_product_info.remark',
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
				check(addt_product_infoForm, "t_product_info_addNewInfo.action", queryt_product_infoStore, "添加信息")
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


	
	
	
	
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_product_infoGrid',
		items : [addt_product_infoForm]
	});
	var divHeight = document.getElementById('t_product_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_product_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);

	


 });
 
