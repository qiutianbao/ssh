
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
var queryt_comp_infoStore;
var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	// CSS保持一致
	document.styleSheets.extjsStyle2.href = window.parent.document
		.getElementById("extjsStyle2").href;
	
	var idNumber =document.getElementById('pro_idnumber').value;
	 
	var url='t_product_info_findById.action?t_product_info.idNumber='+ idNumber;





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
queryt_comp_infoStore=new Ext.data.Store({
	 proxy:new Ext.data.HttpProxy({
	 url:'t_comp_info_findAllByPro.action'
	 }),
	 reader:new Ext.data.JsonReader({
	 root:'t_comp_infoList',
	 id:'id'
	 },[
	 {name:'idNumber',mapping:'idNumber'},
	 {name:'comp_abbr_name',mapping:'comp_abbr_name'}
	 ])
	 });	

queryt_comp_infoStore.load();

updatet_product_infoForm = new Ext.FormPanel({
	frame : true,
	reader : updatet_product_infoReader,
//	waitMsgTarget : true,
	height : document.body.offsetHeight+95,
	width : document.body.offsetWidth,

	labelWidth:130,
 //   autoScroll : true, 
	labelAlign : 'left',
	items : [{
		layout : 'column',
		items : [
		{
		columnWidth: .5,
		layout : 'form',
		items : [{
		fieldLabel:'公司简称',
		xtype:'combo',
		store:queryt_comp_infoStore,
		valueField:"idNumber",
		displayField:"comp_abbr_name",
		mode:'local',
//		forceSelection:true,//必须选择一项
		emptyText:'请选择公司...',//默认值
		hiddenName:'t_product_info.comp_no',//hiddenName才是提交到后台的input的name
		editable:false,//不允许输入
		triggerAction:'all',
	    id : 'update_comp_no',  
	    readOnly : true,
	    name: 't_product_info.comp_no',
		width:250
		}]
		},{
		columnWidth: .5,
		layout : 'form',
		items : [{
		fieldLabel : '产品简称',
		id : 'update_product_abbr_name',
		xtype : 'textfield',
		readOnly : true,
		name : 't_product_info.product_abbr_name',
		width : '80%'
		}]
		}
		]},	{
			fieldLabel : '产品全称',
			id : 'update_product_name',
			xtype : 'textfield',
			readOnly : true,
			name : 't_product_info.product_name',
			width : '90%'
			},{
	layout : 'column',
	items : [
	{
	columnWidth: .3,
	layout : 'form',
	items : [{
		fieldLabel : '产品类型',
		id : 'update_product_type',
		width : 100,
		xtype : 'combo',
		readOnly : true,
		store : product_typeStore,
		valueField : 'id',
		displayField : 'name',
		mode : 'local',
		editable : false,
		triggerAction : 'all',
		hiddenName : 't_product_info.product_type',
		pageSize : 5,
		anchor : '90%'
		},{
		fieldLabel : '保险期间',
		id : 'update_safe_year',
		xtype : 'textfield',
		readOnly : true,
		name : 't_product_info.safe_year',
		width : '80%'
		}
	]
	},{
	columnWidth: .3,
	layout : 'form',
	items : [
	{
		fieldLabel : '缴费方式',
		id : 'update_pay_type',
		width : 100,
		xtype : 'combo',
		readOnly : true,
		store : pay_typeStore,
		valueField : 'id',
		displayField : 'name',
		mode : 'local',
		editable : false,
		triggerAction : 'all',
		hiddenName : 't_product_info.pay_type',
		pageSize : 5,
		anchor : '90%'
		},		{
			fieldLabel : '起售金额',
			id : 'update_bgn_bal',
			xtype : 'textfield',
			readOnly : true,
			name : 't_product_info.bgn_bal',
			width : '80%'
			}
	         ]
	},{
		columnWidth: .4,
		layout : 'form',
		items : [
	{
		fieldLabel : '被保人年龄',
		id : 'update_age',
		xtype : 'textfield',
		readOnly : true,
		name : 't_product_info.age',
		width : '80%'
		},{
			fieldLabel : '犹豫期',
			id : 'update_grace_day',
			xtype : 'numberfield',
			readOnly : true,
			name : 't_product_info.grace_day',
			width : '80%'
			}
		         ]
		}
	]},{
		fieldLabel : '产品优点',
		id : 'update_product_vitue',
		xtype : 'textarea',
		readOnly : true,
		name : 't_product_info.product_vitue',
		width : '90%',
		height:50
		},{
		fieldLabel : '责任免除',
		id : 'update_duty_remit',
		xtype : 'textarea',
		readOnly : true,
		name : 't_product_info.duty_remit',
		width : '90%',
		height:50
		},{
		fieldLabel : '风险提示',
		id : 'update_danger_war',
		xtype : 'textarea',
		readOnly : true,
		name : 't_product_info.danger_war',
		width : '90%',
		height:50
		},{fieldLabel : '红利分配',
			id : 'update_bouns_adm',
			xtype : 'textarea',
			readOnly : true,
			name : 't_product_info.bouns_adm',
			width : '90%',
			height:50
			},{
		fieldLabel : '红利来源',
		id : 'update_bouns_origin',
		xtype : 'textarea',
		readOnly : true,
		name : 't_product_info.bouns_origin',
		width : '90%',
		height:50
		},{
			layout : 'column',
			items : [
			{
			columnWidth: .5,
			layout : 'form',
			items : [{
				fieldLabel : '收益率',
				id : 'update_syl',
				xtype : 'textfield',
				readOnly : true,
				name : 't_product_info.syl',
				width : '80%'
			}]
			},{
			columnWidth: .5,
			layout : 'form',
			items : [{
				fieldLabel : '每年返还金额',
				id : 'update_mnfhje',
				xtype : 'textfield',
				readOnly : true,
				name : 't_product_info.mnfhje',
				width : '80%'
			}]
			}
			]},{
				layout : 'column',
				items : [
				{
				columnWidth: .5,
				layout : 'form',
				items : [{
					fieldLabel : '保底利率',
					id : 'update_base_rate',
					xtype : 'textfield',
					readOnly : true,
					name : 't_product_info.base_rate',
					width : '80%'
					//unitText : ' (分红险)'	
					},{
					fieldLabel : '历年分红2',
					id : 'update_cake_bal2',
					xtype : 'textfield',
					readOnly : true,
					name : 't_product_info.cake_bal2',
					width : '80%'
					},{
					fieldLabel : '历年分红4',
					id : 'update_cake_bal4',
					xtype : 'textfield',
					readOnly : true,
					name : 't_product_info.cake_bal4',
					width : '80%'
					},{
						fieldLabel : '结算利率',
						id : 'update_balance_rate',
						xtype : 'textfield',
						readOnly : true,
						name : 't_product_info.balance_rate',
						width : '80%',
						unitText : ' (万能险)'
						},{
						fieldLabel : '退保费用1年',
						id : 'update_cancl_amt1',
						xtype : 'textfield',
						readOnly : true,
						name : 't_product_info.cancl_amt1',
						width : '80%'
						}		,{
						fieldLabel : '退保费用3年',
						id : 'update_cancl_amt3',
						xtype : 'textfield',
						readOnly : true,
						name : 't_product_info.cancl_amt3',
						width : '80%'
						}		,{
						fieldLabel : '退保费用5年',
						id : 'update_cancl_amt5',
						xtype : 'textfield',
						readOnly : true,
						name : 't_product_info.cancl_amt5',
						width : '80%'
						}]
				},{
				columnWidth: .5,
				layout : 'form',
				items : [{
					fieldLabel : '历年分红1',
					id : 'update_cake_bal1',
					xtype : 'textfield',
					readOnly : true,
					name : 't_product_info.cake_bal1',
					width : '80%'
					},{
					fieldLabel : '历年分红3',
					id : 'update_cake_bal3',
					xtype : 'textfield',
					readOnly : true,
					name : 't_product_info.cake_bal3',
					width : '80%'
					},{
					fieldLabel : '历年分红5',
					id : 'update_cake_bal5',
					xtype : 'textfield',
					readOnly : true,
					name : 't_product_info.cake_bal5',
					width : '80%'
					},{
						fieldLabel : '初始费用',
						id : 'update_first_bal',
						xtype : 'textfield',
						readOnly : true,
						name : 't_product_info.first_bal',
						width : '80%'
						}	,{
						fieldLabel : '退保费用2年',
						id : 'update_cancl_amt2',
						xtype : 'textfield',
						readOnly : true,
						name : 't_product_info.cancl_amt2',
						width : '80%'
						},{
						fieldLabel : '退保费用4年',
						id : 'update_cancl_amt4',
						xtype : 'textfield',
						readOnly : true,
						name : 't_product_info.cancl_amt4',
						width : '80%'
						},{
							fieldLabel : '产品编码',
							id : 'update_pro_no',
							xtype : 'hidden',
							readOnly : true,
							name : 't_product_info.pro_no',
							width : '20%'
							}]
				}
				]}
	]
});
updatet_product_infoWin = new Ext.Window({
	x:0.5,
	y:0.5,
	layout : 'column',
	height : document.body.offsetHeight+100,
	width : document.body.offsetWidth,
//	plain : true,
	closable : false,
	items : updatet_product_infoForm
});
	    

updatet_product_infoWin.show();

updatet_product_infoForm.getForm().load({
	url : url,
	waitMsg : '正在载入数据...',
	failure : function() {
		Ext.Msg.alert('友情提示', '载入失败');
	},
	success : function() {
	}
});








 });
