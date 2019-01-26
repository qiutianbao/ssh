
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
	 haveRight('common/t_product_infoView.jsp');
	 queryt_comp_infoStore=new Ext.data.Store({
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
	 
	 queryt_comp_infoStore.load();
	 
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
	 
	 var panel = new Ext.form.FormPanel({
	 title : '条件查询',
	 renderTo : Ext.getBody(),
	 frame : true,
	 width : '100%',
	 x : 1,
	 y : 1,
	 floating : true,
	 monitorValid:true,  //绑定提交按钮, 有错误的时间就变灰
	 buttonAlign : 'center',
	 submit : function(){
	 this.getEl().dom.action = "xxx",
	 this.getEl().dom.method = 'post';
	 this.getEl().dom.submit();
	 },
	 items : [{
	 xtype : 'fieldset',
	 title : '简单筛选条件',
	 collapsible : false,
	 autoHeight : true,
	 autoWidth : true,
	 defaults : {width : '100%', allowBlank : false,xtype : 'textfield', msgTarget : 'side'},
	 labelAlign : 'center',
	 items : [{
			columnWidth: .5,
			layout : 'form',
			items : [
			{
				fieldLabel:'公司编码',
				xtype:'combo',
				store:queryt_comp_infoStore,
				valueField:"idNumber",
				displayField:"comp_name",
				mode:'local',
				forceSelection:true,//必须选择一项
				emptyText:'请选择分类...',//默认值
				hiddenName:'t_product_info.comp_no',//hiddenName才是提交到后台的input的name
				editable:false,//不允许输入
				triggerAction:'all',
			    id : 'select_comp_no',  
			    name: 't_product_info.comp_no',
				width:400
				}
			]},{
				columnWidth: .5,
				layout : 'form',
				items : [
				{
					fieldLabel:'公司编码',
					xtype:'combo',
					store:queryt_comp_infoStore,
					valueField:"idNumber",
					displayField:"comp_name",
					mode:'local',
					forceSelection:true,//必须选择一项
					emptyText:'请选择分类...',//默认值
					hiddenName:'t_product_info.comp_no',//hiddenName才是提交到后台的input的name
					editable:false,//不允许输入
					triggerAction:'all',
				    id : 'select_comp_no',  
				    name: 't_product_info.comp_no',
					width:400
					}
				]}]                            
	 },{
		 xtype : 'fieldset',
		 title : '点击，查看其他条件',
		 checkboxToggle:false,
		 collapsible : true,
		 collapseFirst : true,
		 autoHeight : true,
		 autoWidth : true,
		 listeners: {
			 render: function(t){
			 t.collapse();
		 		}
		 },
		 defaults : {width : '100%', allowBlank : true,xtype : 'textfield', msgTarget : 'side'},
		 labelAlign : 'center',
		 items : [
		 {fieldLabel : '用户姓名', emptyText : '请输入用户名2', blankText : '请输入用户名1', anchor : '50%',id : 'select_name1'}, 
		 {fieldLabel : '用户密码', inputType :  'password', blankText :'密码不能为空', anchor : '50%',id : 'select_pwd1'}
		 ]                            
		 }],
	 buttons : [{text : '确定', formBind : true, handler : function(){
		var name1= Ext.getCmp('select_name').getValue();
		alert(name1);
		var name2= Ext.getCmp('select_name1').getValue();
		alert(name2);
//		 this.ownerCt.form.submit();
		 
	 
	 }}, {text : '取消', handler: function(){this.ownerCt.getForm().reset()}}]
	 });
	 
 });
 
