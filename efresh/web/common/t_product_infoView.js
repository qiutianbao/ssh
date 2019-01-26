
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
var data_uploadForm;
var selectUnitForm;
var queryt_comp_infoStore;
var save_submit;
var save_check;
var queryt_product_selectStore;			
var queryt_product_selectGrid;
var addt_product_select;
var addt_product_selectForm;
var addt_product_selectWin;
var updatet_product_select;
var updatet_product_selectWin;
var updatet_product_selectForm;
var updatet_product_selectReader;
var showQueryPanel;
var showt_product_selectQueryPanel;
var t_product_selectForm;
var add_queryt_product_infoGrid;
var add_queryt_product_selectGrid;
var backProduct;


var fileTypeStore;
var selectUnitForm;
var compPicLogWin;
var compFilePanel;
var compFileInfoForm;
var compFileStore;

var fileUploadForm;
var fileUploadWin;
var updateCompFileReader;
var updateFileUploadForm;
var updatefileUploadWin;



var unitText=Ext.override(Ext.form.TextField, {
	 unitText : '',
	 onRender : function(ct, position) {
	  Ext.form.TextField.superclass.onRender.call(this, ct, position);
	  if (this.unitText != '') {
	   this.unitEl = ct.createChild({
	      tag : 'div',
	      html : this.unitText
	     });
	   this.unitEl.addClass('x-form-unit');
	   // 增加单位名称的同时按单位名称大小减少文本框的长度 初步考虑了中英文混排 未考虑为负的情况
	   this.width = this.width
	     - (this.unitText.replace(/[^\x00-\xff]/g, "xx").length * 6 + 2);
	   // 同时修改错误提示图标的位置
	   this.alignErrorIcon = function() {
	    this.errorIcon.alignTo(this.unitEl, 'tl-tr', [2, 0]);
	   };
	  }
	 }
	});
//-----------------------------------------------------------------------------






 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	//Ext.QuickTips.init();
	
//	haveRight('common/t_product_infoView.jsp');
	
	
	
	//---------------------------
	queryt_product_selectStore = new Ext.data.JsonStore({
		url : 't_product_select_findAllByProNo.action',
		root : 't_product_selectList',
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
		name : 'add_safe_flag',
		mapping : 'add_safe_flag'
		}
		,{
		name : 'sex',
		mapping : 'sex'
		}
		,{
		name : 'bouns_adm_type',
		mapping : 'bouns_adm_type'
		}
		,{
		name : 'bgn_bal_select',
		mapping : 'bgn_bal_select'
		}
		,{
		name : 'start_age',
		mapping : 'start_age'
		}
		,{
		name : 'end_age',
		mapping : 'end_age'
		}
		,{
		name : 'expect_pay',
		mapping : 'expect_pay'
		}
		,{
		name : 'insure_period',
		mapping : 'insure_period'
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
		name : 'pro_no',
		mapping : 'pro_no'
		}
		,{
		name : 'back3',
		mapping : 'back3'
		}
		,{
		name : 'back4',
		mapping : 'back4'
		}
		,{
		name : 'back5',
		mapping : 'back5'
		}
		,{
		name : 'comp_no',
		mapping : 'comp_no'
		}
		,{
		name : 'pay_type',
		mapping : 'pay_type'
		}
		,{
		name : 'product_type',
		mapping : 'product_type'
		}
		,{
		name : 'illness_bal_flag',
		mapping : 'illness_bal_flag'
		}
		,{
		name : 'ywbal_flag',
		mapping : 'ywbal_flag'
		}
		,{
		name : 'trafc_bal_flag',
		mapping : 'trafc_bal_flag'
		}
		,{
		name : 'totl_bal_flag',
		mapping : 'totl_bal_flag'
		}
		],
		autoLoad : false
		
	});






	queryt_product_selectStore.load();


	var sm = new Ext.grid.CheckboxSelectionModel();

	add_queryt_product_selectGrid = new Ext.grid.GridPanel({
		store : queryt_product_selectStore,
		sm : sm,
		columns : [ sm, rowNum,{
		header : '主键',
		dataIndex : 'idNumber',
		width : 120, 
		renderer : function(value, meta, record) {
		var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
		return tempString;
		}},{
			header : '公司名称',
			dataIndex : 'comp_no',
			width : 120 
		},{
			header : '产品名称',
			dataIndex : 'pro_no',
			width : 120 
		},{
			header : '产品类型',
			dataIndex : 'product_type',
			width : 120 
		},{
			header : '缴费方式',
			dataIndex : 'pay_type',
			width : 120 
		},{
			header : '期缴年限',
			dataIndex : 'expect_pay',
			width : 120 
			}
			,{
			header : '保险期限',
			dataIndex : 'insure_period',
			width : 120 
			},{
			header : '起存金额',
			dataIndex : 'bgn_bal_select',
			width : 120 
			}
			,{
			header : '开始投保年龄',
			dataIndex : 'start_age',
			width : 120 
			}
			,{
			header : '结束投保年龄',
			dataIndex : 'end_age',
			width : 120 
			}
		],
		width : 800,
		height : 300,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
			//alert(122222);
				addt_product_select("1");
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (add_queryt_product_selectGrid, queryt_product_selectStore, "t_product_select_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_product_selectStore,
			emptyMsg : "没有记录"
		}]
	});
	
	
	
	queryt_product_selectGrid = new Ext.grid.GridPanel({
		store : queryt_product_selectStore,
		sm : sm,
		columns : [ sm, rowNum,{
		header : '主键',
		dataIndex : 'idNumber',
		width : 120, 
		renderer : function(value, meta, record) {
		var tempString = '<div><a href=javascript:select_update()><font color=red>'+ value +'</font></a></div>';
		return tempString;
		}},{
			header : '公司名称',
			dataIndex : 'comp_no',
			width : 120 
		},{
			header : '产品名称',
			dataIndex : 'pro_no',
			width : 120 
		},{
			header : '产品类型',
			dataIndex : 'product_type',
			width : 120 
		},{
			header : '缴费方式',
			dataIndex : 'pay_type',
			width : 120 
		},{
			header : '期缴年限',
			dataIndex : 'expect_pay',
			width : 120 
			}
			,{
			header : '保险期限',
			dataIndex : 'insure_period',
			width : 120 
			},{
			header : '起存金额',
			dataIndex : 'bgn_bal_select',
			width : 120 
			}
			,{
			header : '开始投保年龄',
			dataIndex : 'start_age',
			width : 120 
			}
			,{
			header : '结束投保年龄',
			dataIndex : 'end_age',
			width : 120 
			}
		],
		width : 800,
		height : 300,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
			//alert(3333);
				addt_product_select("2");
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_product_selectGrid, queryt_product_selectStore, "t_product_select_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_product_selectStore,
			emptyMsg : "没有记录"
		}]
	});

	addt_product_selectForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,	
		
        autoScroll : true, 
        labelWidth:140,
		labelAlign : 'left',
		items : [{
		layout : 'column',
		items : [
		{
		columnWidth: .5,
		layout : 'form',
		items : [
		{
		fieldLabel : '公司名称',
		id : 'product_select_comp_no',
		xtype : 'textfield',
		name : 't_product_select.comp_no',
		width : '80%'
		},{
		fieldLabel : '缴费方式',
		id : 'product_select_pay_type',
		xtype : 'textfield',
		name : 't_product_select.pay_type',
		width : '80%'
		}
		,{
		fieldLabel : '投保人性别',
		id : 'product_select_sex',
		xtype : 'textfield',
		name : 't_product_select.sex',
		width : '80%'
		}
		,{
		fieldLabel : '起存金额',
		id : 'product_select_bgn_bal_select',
		xtype : 'textfield',
		name : 't_product_select.bgn_bal_select',
		width : '80%'
		}
		,{
		fieldLabel : '开始投保年龄',
		id : 'product_select_start_age',
		xtype : 'textfield',
		name : 't_product_select.start_age',
		width : '80%'
		}
		,{
		fieldLabel : '保险期限',
		id : 'product_select_insure_period',
		xtype : 'textfield',
		name : 't_product_select.insure_period',
		width : '80%'
		}
		,{
		fieldLabel : '疾病身故保险金',
		id : 'product_select_illness_bal_flag',
		xtype : 'textfield',
		name : 't_product_select.illness_bal_flag',
		width : '80%'
		}
		,{
		fieldLabel : '交通意外险',
		id : 'product_select_trafc_bal_flag',
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
			fieldLabel : '产品名称',
			id : 'product_select_product_name',
			xtype : 'textfield',
			name : 't_product_select.product_name',
			width : '80%'
		},{
			fieldLabel : '产品名称',
			id : 'product_select_pro_no',
			xtype : 'textfield',
			name : 't_product_select.pro_no',
			width : '80%'
		},
		{
			fieldLabel : '产品类型',
			id : 'product_select_product_type',
			xtype : 'textfield',
			name : 't_product_select.product_type',
			width : '80%'
			},
		{
		fieldLabel : '附加险',
		id : 'product_select_add_safe_flag',
		xtype : 'textfield',
		name : 't_product_select.add_safe_flag',
		width : '80%'
		}
		,{
		fieldLabel : '红利分配方式',
		id : 'product_select_bouns_adm_type',
		xtype : 'textfield',
		name : 't_product_select.bouns_adm_type',
		width : '80%'
		},{
		fieldLabel : '结束投保年龄',
		id : 'product_select_end_age',
		xtype : 'textfield',
		name : 't_product_select.end_age',
		width : '80%'
		}
		,{
		fieldLabel : '期缴年限',
		id : 'product_select_expect_pay',
		xtype : 'textfield',
		name : 't_product_select.expect_pay',
		width : '80%'
		}
		,{
		fieldLabel : '一般意外伤害',
		id : 'product_select_ywbal_flag',
		xtype : 'textfield',
		name : 't_product_select.ywbal_flag',
		width : '80%'
		}
		,{
		fieldLabel : '满期保险金',
		id : 'product_select_totl_bal_flag',
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
				save_check(addt_product_selectForm, "t_product_select_addNewInfo.action", queryt_product_selectStore, "添加信息","1");
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
		width : 800,
		height : 450,
		plain : true,
		closable : false,
		closeAction : 'hide',
		items : addt_product_selectForm
	});

	addt_product_select = function(flag) {
		addt_product_selectWin.show();	
		
		
		if(flag=="1"){//产品新增，进入产品查询新增界面
			
			var comp_no=Ext.getCmp('add_comp_no').getValue();
			Ext.getCmp("product_select_comp_no").setValue(comp_no);
			
			var product_name=Ext.getCmp('add_product_name').getValue();
			Ext.getCmp("product_select_product_name").setValue(product_name);
			
			var pro_no=Ext.getCmp('add_idNumber').getValue();
			Ext.getCmp("product_select_pro_no").setValue(pro_no);
			
			var pay_type=Ext.getCmp('add_pay_type').getValue();
			Ext.getCmp("product_select_pay_type").setValue(pay_type);
			
			var bgn_bal=Ext.getCmp('add_bgn_bal').getValue();
			Ext.getCmp("product_select_bgn_bal_select").setValue(bgn_bal);
			
			var safe_year=Ext.getCmp('add_safe_year').getValue();
			Ext.getCmp("product_select_insure_period").setValue(safe_year);
			
			var product_type=Ext.getCmp('add_product_type').getValue();
			Ext.getCmp("product_select_product_type").setValue(product_type);
		}else if(flag=="2"){
			var comp_no=Ext.getCmp('update_comp_no').getValue();
			Ext.getCmp("product_select_comp_no").setValue(comp_no);
			
			var product_name=Ext.getCmp('update_product_name').getValue();
			Ext.getCmp("product_select_product_name").setValue(product_name);
			
			var pro_no=Ext.getCmp('update_idNumber').getValue();
			Ext.getCmp("product_select_pro_no").setValue(pro_no);
			
			var pay_type=Ext.getCmp('update_pay_type').getValue();
			Ext.getCmp("product_select_pay_type").setValue(pay_type);
			
			var bgn_bal=Ext.getCmp('update_bgn_bal').getValue();
			Ext.getCmp("product_select_bgn_bal_select").setValue(bgn_bal);
			
			var safe_year=Ext.getCmp('update_safe_year').getValue();
			Ext.getCmp("product_select_insure_period").setValue(safe_year);
			
			var product_type=Ext.getCmp('update_product_type').getValue();
			Ext.getCmp("product_select_product_type").setValue(product_type);
		}
/*		
		var pay_type=Ext.getCmp('add_pay_type').getValue();
		Ext.getCmp("product_select_pay_type").setValue(pay_type);
		
		var bgn_bal=Ext.getCmp('add_bgn_bal').getValue();
		Ext.getCmp("product_select_bgn_bal_select").setValue(bgn_bal);
		
		
		var age=Ext.getCmp('add_age').getValue();
		Ext.getCmp("product_select_end_age").setValue(age);
		alert(1234);*/
/*		var safe_year=Ext.getCmp('add_safe_year').getValue();
		alert('safe_year:'+safe_year);
		Ext.getCmp("product_select_end_age").setValue(age);*/
		
		
/*		var pro_no=_record.get('idNumber');
		var pro_name=_record.get('product_name');
		flag = queryt_product_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			excel_uploadWin.show();
			
			Ext.getCmp("excel_product_name").setValue(pro_name);
		}
		*/
		
		

	};

	updatet_product_selectReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
		name : 't_product_select.idNumber',
		mapping : 'idNumber'
		}
		,{
		name : 't_product_select.add_safe_flag',
		mapping : 'add_safe_flag'
		}
		,{
		name : 't_product_select.sex',
		mapping : 'sex'
		}
		,{
		name : 't_product_select.bouns_adm_type',
		mapping : 'bouns_adm_type'
		}
		,{
		name : 't_product_select.bgn_bal_select',
		mapping : 'bgn_bal_select'
		}
		,{
		name : 't_product_select.start_age',
		mapping : 'start_age'
		}
		,{
		name : 't_product_select.end_age',
		mapping : 'end_age'
		}
		,{
		name : 't_product_select.expect_pay',
		mapping : 'expect_pay'
		}
		,{
		name : 't_product_select.insure_period',
		mapping : 'insure_period'
		}
		,{
		name : 't_product_select.back1',
		mapping : 'back1'
		}
		,{
		name : 't_product_select.back2',
		mapping : 'back2'
		}
		,{
		name : 't_product_select.pro_no',
		mapping : 'pro_no'
		}
		,{
		name : 't_product_select.back3',
		mapping : 'back3'
		}
		,{
		name : 't_product_select.back4',
		mapping : 'back4'
		}
		,{
		name : 't_product_select.back5',
		mapping : 'back5'
		}
		,{
		name : 't_product_select.comp_no',
		mapping : 'comp_no'
		}
		,{
		name : 't_product_select.pay_type',
		mapping : 'pay_type'
		}
		,{
		name : 't_product_select.product_type',
		mapping : 'product_type'
		}
		,{
		name : 't_product_select.illness_bal_flag',
		mapping : 'illness_bal_flag'
		}
		,{
		name : 't_product_select.ywbal_flag',
		mapping : 'ywbal_flag'
		}
		,{
		name : 't_product_select.trafc_bal_flag',
		mapping : 'trafc_bal_flag'
		}
		,{
		name : 't_product_select.totl_bal_flag',
		mapping : 'totl_bal_flag'
		}
		]
			);
		

	//---------------------------------------------------
	
	
	
	
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
	//-------------------------
		updatet_product_selectForm = new Ext.FormPanel({
			title : '请输入您要修改的信息',
			frame : true,
			waitMsgTarget : true,
	        labelWidth:140,
			labelAlign : 'left',
			reader : updatet_product_selectReader,
			items : [{
			layout : 'column',
			items : [
			{
			columnWidth: .5,
			layout : 'form',
			items : [
			{
			fieldLabel : '主键',
			id : 'u_product_select_idNumber',
			xtype : 'textfield',
			name : 't_product_select.idNumber',
			width : '80%'
			},
			{
				fieldLabel : '公司名称',
				id : 'u_product_select_comp_no',
				xtype : 'textfield',
				name : 't_product_select.comp_no',
				width : '80%'
				},{
				fieldLabel : '缴费方式',
				id : 'u_product_select_pay_type',
				xtype : 'textfield',
				name : 't_product_select.pay_type',
				width : '80%'
				}
				,{
				fieldLabel : '投保人性别',
				id : 'u_product_select_sex',
				xtype : 'textfield',
				name : 't_product_select.sex',
				width : '80%'
				}
				,{
				fieldLabel : '起存金额',
				id : 'u_product_select_bgn_bal_select',
				xtype : 'textfield',
				name : 't_product_select.bgn_bal_select',
				width : '80%'
				}
				,{
				fieldLabel : '开始投保年龄',
				id : 'u_product_select_start_age',
				xtype : 'textfield',
				name : 't_product_select.start_age',
				width : '80%'
				}
				,{
				fieldLabel : '保险期限',
				id : 'u_product_select_insure_period',
				xtype : 'textfield',
				name : 't_product_select.insure_period',
				width : '80%'
				}
				,{
				fieldLabel : '疾病身故保险金',
				id : 'u_product_select_illness_bal_flag',
				xtype : 'textfield',
				name : 't_product_select.illness_bal_flag',
				width : '80%'
				}
				,{
				fieldLabel : '交通意外险',
				id : 'u_product_select_trafc_bal_flag',
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
					fieldLabel : '产品名称',
					id : 'u_product_select_pro_no',
					xtype : 'textfield',
					name : 't_product_select.pro_no',
					width : '80%'
				},
				{
					fieldLabel : '产品类型',
					id : 'u_product_select_product_type',
					xtype : 'textfield',
					name : 't_product_select.product_type',
					width : '80%'
					},
				{
				fieldLabel : '附加险',
				id : 'u_product_select_add_safe_flag',
				xtype : 'textfield',
				name : 't_product_select.add_safe_flag',
				width : '80%'
				}
				,{
				fieldLabel : '红利分配方式',
				id : 'u_product_select_bouns_adm_type',
				xtype : 'textfield',
				name : 't_product_select.bouns_adm_type',
				width : '80%'
				},{
				fieldLabel : '结束投保年龄',
				id : 'u_product_select_end_age',
				xtype : 'textfield',
				name : 't_product_select.end_age',
				width : '80%'
				}
				,{
				fieldLabel : '期缴年限',
				id : 'u_product_select_expect_pay',
				xtype : 'textfield',
				name : 't_product_select.expect_pay',
				width : '80%'
				}
				,{
				fieldLabel : '一般意外伤害',
				id : 'u_product_select_ywbal_flag',
				xtype : 'textfield',
				name : 't_product_select.ywbal_flag',
				width : '80%'
				}
				,{
				fieldLabel : '满期保险金',
				id : 'u_product_select_totl_bal_flag',
				xtype : 'textfield',
				name : 't_product_select.totl_bal_flag',
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
					save_check(updatet_product_selectForm, "t_product_select_update.action", queryt_product_selectStore, "修改信息","3");
					updatet_product_selectWin.hide();
				}
			}, {
				text : '取消',
				iconCls:'li-cancel',
				handler : function() {
					updatet_product_selectWin.hide();
					updatet_product_selectForm.form.reset();
				}
			}]
		});

		updatet_product_selectWin = new Ext.Window({
			layout : 'form',
			width : 800,
			height : 450,
			plain : true,
			closable : false,
			items : updatet_product_selectForm
		});

		product_select_update = function() {
			_record = queryt_product_selectGrid.getSelectionModel().getSelected();
			flag = queryt_product_selectGrid.getSelectionModel().getSelections();
			if (flag.length == 1) {
				updatet_product_selectWin.show();
						
				updatet_product_selectForm.getForm().load({
					url : 't_product_select_findById.action?t_product_select.idNumber='+ _record.get('idNumber'),
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
		
		
		
	 ///-------------------------
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
	 
	
	
		selectUnitForm = new Ext.form.FormPanel({   
            renderTo : 't_product_infoGrid',   
            title : "条件查询",   
            border : false,   
            monitorValid:true,  //绑定提交按钮, 有错误的时间就变灰
            renderto : Ext.getBody(),   
            bodyStyle : "padding: 1px; background-color: transparent;",   
            labelAlign : "right",   
            labelWidth : 120,   
            autoScroll : true, 
  
            items : [{
            	layout : 'column',
            	xtype : "fieldset",   
                autoHeight : true,   
                title : '简单筛选条件', 
            	items : [
{   
    columnWidth : 0.5,
    layout : 'form',
    items : [{
		fieldLabel:'公司名称',
		xtype:'combo',
		store:queryt_comp_infoStore,
		valueField:"idNumber",
		displayField:"comp_name",
		mode:'local',
		forceSelection:true,//必须选择一项
		emptyText:'请选择公司...',//默认值
		hiddenName:'t_product_info.comp_no',//hiddenName才是提交到后台的input的name
		editable:false,//不允许输入
		triggerAction:'all',
	    id : 'select_comp_no',  
	    name: 't_product_info.comp_no',
		width:230
		}]   
},{
    columnWidth : 0.5,   
    layout : 'form',   
    items : [{
		fieldLabel : '缴费方式',
		id : 'select_pay_type',
		width : 230,
		xtype : 'combo',
		store : pay_typeStore,
		emptyText:'请选择缴费方式...',//默认值
		valueField : 'id',
		displayField : 'name',
		mode : 'local',
		editable : false,
		triggerAction : 'all',
		hiddenName : 't_product_info.pay_type'
			
	}]    
},{
	   
    columnWidth : 0.5,   
    layout : 'form',   
    items : [{
		fieldLabel : '产品类型',
		id : 'select_product_type',
		width : 230,
		xtype : 'combo',
		store : product_typeStore,
		emptyText:'请选择产品类型...',//默认值
		valueField : 'id',
		displayField : 'name',
		mode : 'local',
		editable : false,
		triggerAction : 'all',
		hiddenName : 't_product_info.product_type'
	}]
},{
            	columnWidth : 0.25,
            	items : [{
            	xtype : 'button',
            	text : '查询',
            	height : 25,
            	width : 100,
            	iconCls : 'icon-select',
            	handler : function() {
            		var str=Ext.getCmp("desFieldsetAdd").collapsed;
            		var action='t_product_info_findInfoByConditions.action?table=product_info';
            			var start=1;
            		var comp_no=Ext.getCmp('select_comp_no').getValue();
            		
            		if(-1!=comp_no){
            			action=action+'&t_product_select.comp_no='+comp_no;
            		}
            		var pay_type=Ext.getCmp('select_pay_type').getValue();
            		if(-1!=pay_type){
            			action=action+'&t_product_select.pay_type='+pay_type;
            		}	

            		var product_type=Ext.getCmp('select_product_type').getValue();
            		if(-1!=product_type){
            			action=action+'&t_product_select.product_type='+product_type;
            		}
            		if(!str){
                		var sex=Ext.getCmp('select_sex').getValue();
                		
                		if(-1!=sex){
                			action=action+'&t_product_select.sex='+sex;
                		}
            			
                		var bouns_adm_type=Ext.getCmp('select_bouns_adm_type').getValue();
                		if(-1!=bouns_adm_type){
                			action=action+'&t_product_select.bouns_adm_type='+bouns_adm_type;
                		}
                		
                		var illness_bal_flag=Ext.getCmp('select_illness_bal_flag').getValue();
                		if(-1!=illness_bal_flag){
                			action=action+'&t_product_select.illness_bal_flag='+illness_bal_flag;
                		}
                		var ywbal_flag=Ext.getCmp('select_ywbal_flag').getValue();
                		if(-1!=ywbal_flag){
                			action=action+'&t_product_select.ywbal_flag='+ywbal_flag;
                		}
                		var trafc_bal_flag=Ext.getCmp('select_trafc_bal_flag').getValue();
                		if(-1!=trafc_bal_flag){
                			action=action+'&t_product_select.trafc_bal_flag='+trafc_bal_flag;
                		}
                		
                		var add_safe_flag=Ext.getCmp('select_add_safe_flag').getValue();
                		if(-1!=add_safe_flag){
                			action=action+'&t_product_select.add_safe_flag='+add_safe_flag;
                		}
                		var totl_bal_flag=Ext.getCmp('select_totl_bal_flag').getValue();
                		if(-1!=totl_bal_flag){
                			action=action+'&t_product_select.totl_bal_flag='+totl_bal_flag;
                		}

                		var flag=Ext.getCmp('select_flag').getValue();
                		if(-1!=flag){
                			action=action+'&t_product_select.flag='+flag;
                		}
                		
            			action=action+ '&t_product_select.start_age='
                    	+ Ext.getCmp('select_age').getValue()
                    	+'&t_product_select.expect_pay='
                    	+ Ext.getCmp('select_expect_pay').getValue()
                    	+'&t_product_select.insure_period='
                    	+ Ext.getCmp('select_insure_period').getValue()
                    	
                    	+'&t_product_select.bgn_bal_select='
                    	+ Ext.getCmp('select_bgn_bal').getValue();
            		//	alert(action);
            			
            		}
            	queryt_product_infoStore.proxy = new Ext.data.HttpProxy({
            	url : action
            	});
            	queryt_product_infoStore.load({
            			params : {
            			start : 0,
            			limit : Ext.getCmp('pageBar').pageSize
            			}});
            		}}]},
            		{
                    	columnWidth : 0.25,
                    	items : [{
                    	xtype : 'button',
                    	text : '重置',
                    	width : 100,
                    	height : 25,
                    	iconCls : 'icon-reset',
                    	align : 'right',
                    	handler : function() {
                    	selectUnitForm.form.reset();
                    	}}]
                    	}
            	]}, {
               		 xtype : 'fieldset',
            		 title : '点击，查看其他条件',
            		 id:"desFieldsetAdd",
            		 checkboxToggle:true,
            		 checkboxName:"dfdf",
            		 autoHeight : true,
            		 layout : "column", 
            		 listeners: {
            			render: function(t){
            				t.collapse();
            		 	}
            		 },
            		 items : [{   
                         columnWidth : 0.5,   
                         layout : 'form',   
                         items : [{
                        	 fieldLabel : '被保人年龄',
                        	 id : 'select_age',
                        	 xtype:"numberfield",
                        	 allowDecimals : false,
                        	 allowNegative : false,
                        	 name : 't_product_info.age',
                        	 style : 'text-align:right',
                        	 width : 230,
                        	 unitText : ' (周岁)',
                        	 allowDecimals : false, // 允许小数点？
                        	 allowNegative : false // 允许负数？
                        	 }]},
                        	 {
                        		 columnWidth : 0.5,   
                                 layout : 'form',   
                                 items : [{
                            	 fieldLabel : '期缴年限',
                            	 id : 'select_expect_pay',
                            	 xtype:"numberfield",
                            	 allowDecimals : false,
                            	 allowNegative : false,
                            	 name : 't_product_info.expect_pay',
                            	 style : 'text-align:right',
                            	 width : 230,
                            	 unitText : ' (年)'
                            	 }]},{columnWidth : 0.5,   
                                     layout : 'form',   
                                     items : [{
                          			fieldLabel : '疾病身故险',
                         			id : 'select_illness_bal_flag',
                         			width : 230,
                         			xtype : 'combo',
                         			store : illness_bal_flagStore,
                         			emptyText:'请选择...',//默认值
                         			valueField : 'id',
                         			displayField : 'name',
                         			mode : 'local',
                         			editable : false,
                         			triggerAction : 'all',
                         			hiddenName : 't_product_info.illness_bal_flag'
                         		}]},{columnWidth : 0.5,   
                                    layout : 'form',   
                                    items : [{
                           			fieldLabel : '期满保险金',
                         			id : 'select_totl_bal_flag',
                         			width : 230,
                         			xtype : 'combo',
                         			store : illness_bal_flagStore,
                         			emptyText:'请选择...',//默认值
                         			valueField : 'id',
                         			displayField : 'name',
                         			mode : 'local',
                         			editable : false,
                         			triggerAction : 'all',
                         			hiddenName : 't_product_info.totl_bal_flag'
                         		}]   
                     }, {   
                         columnWidth : 0.5,   
                         layout : 'form',   
                         items : [{
                 			fieldLabel : '性别',
                 			id : 'select_sex',
                 			width : 230,
                 			xtype : 'combo',
                 			store : genderSimpleStore,
                 			emptyText:'请选择性别...',//默认值
                 			valueField : 'id',
                 			displayField : 'name',
                 			mode : 'local',
                 			editable : false,
                 			triggerAction : 'all',
                 			hiddenName : 't_product_info.sex'
                 		}]},{columnWidth : 0.5,   
                            layout : 'form',   
                            items : [{
                       	 fieldLabel : '保险期间',
                    	 id : 'select_insure_period',
                    	 xtype:"numberfield",
                    	 allowDecimals : false,
                    	 allowNegative : false,
                    	 name : 't_product_info.insure_period',
                    	 style : 'text-align:right',
                    	 width : 230,
                    	 unitText : ' (年)'
                    	 }]},{columnWidth : 0.5,   
                             layout : 'form',   
                             items : [{
                   			fieldLabel : '一般意外险',
                 			id : 'select_ywbal_flag',
                 			width : 230,
                 			xtype : 'combo',
                 			store : illness_bal_flagStore,
                 			emptyText:'请选择...',//默认值
                 			valueField : 'id',
                 			displayField : 'name',
                 			mode : 'local',
                 			editable : false,
                 			triggerAction : 'all',
                 			hiddenName : 't_product_info.ywbal_flag'
                 		}]},
                 	{columnWidth : 0.5,   
                            layout : 'form',   
                            items : [{
                   			fieldLabel : '附加险',
                 			id : 'select_add_safe_flag',
                 			width : 230,
                 			xtype : 'combo',
                 			store : illness_bal_flagStore,
                 			emptyText:'请选择...',//默认值
                 			valueField : 'id',
                 			displayField : 'name',
                 			mode : 'local',
                 			editable : false,
                 			triggerAction : 'all',
                 			hiddenName : 't_product_info.add_safe_flag'
                 		}]    
                 },	
                 {   
                     columnWidth : 0.5,   
                     layout : 'form',   
                     items : [{
                    	 fieldLabel : '起售金额',
                    	 id : 'select_bgn_bal',
                    	 xtype:"numberfield",
                    	 allowDecimals : true,
                    	 allowNegative : false,
                    	 name : 't_product_info.bgn_bal',
                    	 width : 230,
                    	 style : 'text-align:right',
                    	 unitText : '(元)'
                    	}]
                    },
                    {columnWidth : 0.5,
                            layout : 'form',   
                            items : [{
                 			fieldLabel : '红利分配',
                 			id : 'select_bouns_adm_type',
                 			width : 230,
                 			xtype : 'combo',
                 			store : bouns_admStore,
                 			emptyText:'请选择...',//默认值
                 			valueField : 'id',
                 			displayField : 'name',
                 			mode : 'local',
                 			editable : false,
                 			triggerAction : 'all',
                 			hiddenName : 't_product_info.bouns_adm_type'
                 		}]},
                 		{
                 			columnWidth : 0.5,
                            layout : 'form',   
                            items : [{
                   			fieldLabel : '交通事故险',
                 			id : 'select_trafc_bal_flag',
                 			width : 230,
                 			xtype : 'combo',
                 			store : illness_bal_flagStore,
                 			emptyText:'请选择...',//默认值
                 			valueField : 'id',
                 			displayField : 'name',
                 			mode : 'local',
                 			editable : false,
                 			triggerAction : 'all',
                 			hiddenName : 't_product_info.trafc_bal_flag'
                 		}]},
                 		{columnWidth : 0.5,   
                            layout : 'form',   
                            items : [{
                   			fieldLabel : '备选产品',
                 			id : 'select_flag',
                 			width : 230,
                 			xtype : 'combo',
                 			store : backpro_flagStore,
                 			emptyText:'请选择...',//默认值
                 			valueField : 'id',
                 			displayField : 'name',
                 			mode : 'local',
                 			editable : false,
                 			triggerAction : 'all',
                 			hiddenName : 't_product_info.flag'
                 		}]    
             }]
                    }] 

        });
	
	
	

	queryt_product_infoStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	
	/* add_queryt_product_infoGrid = new Ext.grid.GridPanel();*/
	
	 queryt_product_infoGrid = new Ext.grid.GridPanel({
		store : queryt_product_infoStore,
		sm : sm,
		stripeRows : true,
		columns : [sm, rowNum,{
			header : '产品编号',
			dataIndex : 'idNumber',
			width : 80, 
			renderer : function(value, meta, record) {
			var compId=record.get('comp_no');
			var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
			return tempString;
		}}
		,{
		header : '保险公司编号',
		dataIndex : 'comp_no',
		width : 90 
		}
		,{
		header : '产品全称',
		dataIndex : 'product_name',
		width : 200 
		}
		,{
		header : '产品简称',
		dataIndex : 'product_abbr_name',
		width : 120 
		}
		,{
		header : '产品类型',
		dataIndex : 'product_type',
		width : 60 
		}
		,{
		header : '缴费方式',
		dataIndex : 'pay_type',
		width : 60 
		},{
		header : '上传产品演算模板',
		dataIndex : 'inputExcel',
		width : 120, 
		renderer : function(value, meta, record) {
		var tempString = '<div><a href=javascript:excel_upload()><font color=red>导入</font></a></div>';
		return tempString;
		}
	}
	],
		width : 800,
		height : 355,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			width : 20,
			height : 25,
			handler : function() {
				addt_product_info();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			width : 20,
			height : 25,
			handler : function() {
				del (queryt_product_infoGrid, queryt_product_infoStore, "t_product_info_delete.action", "idNumber", "删除信息");
			}
		},'-',{text:"导入产品信息", 
		    icon : "../images/icon/upload.png", 
			width : 20,
			height : 25,
		    handler : function(){
				data_upload();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
			width : 20,
			height : 25,
		    handler : function(){
				ExcelExport(queryt_product_infoGrid,'产品更新');
			}
		},'-',{text:"置为备选产品", 
		    icon : "../images/icon/upload.png", 
			width : 20,
			height : 25,
		    handler : function(){
				backProduct(queryt_product_infoGrid,queryt_product_infoStore,"t_product_info_backProduct.action","idNumber",'置为备选产品');
			}
		},'-',{text:"维护产品折页信息", 
			width : 20,
			height : 25,
			handler : function(){
			flag = queryt_product_infoGrid.getSelectionModel().getSelections();
			if (flag.length == 1) {
				_record = queryt_product_infoGrid.getSelectionModel().getSelected();
				// 
				var idNumber = _record.get('idNumber');
				Ext.getCmp("mainTableId").setValue(idNumber);
				Ext.getCmp("compName").setValue(_record.get('product_name'));
				
				compFileStore.load({params:{'compFile.compId':idNumber}});
				
				compPicLogWin.show();
				
			}else{
				Ext.Msg.alert('友情提示', '请选择一个公司进行上传或更新！');
			}
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
	
	 backProduct = function(grid,store, urlTemp, id, tag) {
			
			_record = grid.getSelectionModel().getSelections();
			
			flag = grid.getSelectionModel().getSelected();
			if (flag) {
				Ext.MessageBox.confirm('确认'+tag, '该信息可能已经被使用，您确认要选为备选产品吗？',
					function(btn) {
						if (btn == "yes") {
							for (var i = 0; i < _record.length; i++) {
								ss = _record[i].get(id);
								jsonData = ss + "#" + jsonData;
							}
							// 向Action中传输需要删除的记录的pkId的拼接字符串
							Ext.Ajax.request({
								url : urlTemp,
								params : {
									delData : jsonData
								},
								success : function(response) {	
									var res = response.responseText;
									var flag = Ext.util.JSON.decode(res).success;
									if (flag == true) {
										Ext.Msg.alert('提示', tag+'成功!');
									} else {
										Ext.Msg.alert('提示', tag+'失败!置为备选产品失败!');
									}
									store.load();
								},
								failure : function(result, request) {
									store.load();
									Ext.Msg.alert('提示', tag+'失败!置为备选产品失败!');
								}
							});
						}
					});
			} else {
				Ext.Msg.alert('置为备选产品操作', '请选择要置为备选产品的数据项！');
			}
		};
	 
	 
	 
	showQueryPanel = new Ext.Panel({
		renderTo : 't_product_infoGrid',
        autoWidth: true,
        autoHeight: true,
        frame: true,
       // bodyStyle: 'padding:3px',
		items : [selectUnitForm, queryt_product_infoGrid]
	});
	var divHeight = document.getElementById('t_product_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_product_infoGrid').offsetWidth;
	
	
	
	
	//showQueryPanel.setHeight(selectUnitForm.getHeight());//389
	//showQueryPanel.setWidth(divWidth);//
	queryt_product_infoGrid.setWidth(showQueryPanel.getWidth()-15);
	//queryt_product_infoGrid.setHeight(340);
	
	
	// 产品类型筛选录入字段
	function cplxChange(action){
		var v = Ext.getCmp(action + '_product_type').getValue();
		
		var bouns_origin=Ext.getCmp(action+'_bouns_origin').getEl().up('.x-form-item'),
		bouns_adm=Ext.getCmp(action+'_bouns_adm').getEl().up('.x-form-item'),
		base_rate=Ext.getCmp(action+'_base_rate').getEl().up('.x-form-item'),
		cake_bal1=Ext.getCmp(action+'_cake_bal1').getEl().up('.x-form-item'),
		cake_bal2=Ext.getCmp(action+'_cake_bal2').getEl().up('.x-form-item'),
		cake_bal3=Ext.getCmp(action+'_cake_bal3').getEl().up('.x-form-item'),
		cake_bal4=Ext.getCmp(action+'_cake_bal4').getEl().up('.x-form-item'),
		cake_bal5=Ext.getCmp(action+'_cake_bal5').getEl().up('.x-form-item'),

		balance_rate=Ext.getCmp(action+'_balance_rate').getEl().up('.x-form-item'),
		first_bal=Ext.getCmp(action+'_first_bal').getEl().up('.x-form-item'),
		cancl_amt1=Ext.getCmp(action+'_cancl_amt1').getEl().up('.x-form-item'),
		cancl_amt2=Ext.getCmp(action+'_cancl_amt2').getEl().up('.x-form-item'),
		cancl_amt3=Ext.getCmp(action+'_cancl_amt3').getEl().up('.x-form-item'),
		cancl_amt4=Ext.getCmp(action+'_cancl_amt4').getEl().up('.x-form-item'),
		cancl_amt5=Ext.getCmp(action+'_cancl_amt5').getEl().up('.x-form-item');

		if(v == '-1' || v == '2' || v == '3'){
			bouns_origin.setDisplayed(true);
			bouns_adm.setDisplayed(true);
			base_rate.setDisplayed(true);
			cake_bal1.setDisplayed(true);
			cake_bal2.setDisplayed(true);
			cake_bal3.setDisplayed(true);
			cake_bal4.setDisplayed(true);
			cake_bal5.setDisplayed(true);

			balance_rate.setDisplayed(true);
			balance_rate.setDisplayed(true);
			first_bal.setDisplayed(true);
			cancl_amt1.setDisplayed(true);
			cancl_amt2.setDisplayed(true);
			cancl_amt3.setDisplayed(true);
			cancl_amt4.setDisplayed(true);
			cancl_amt5.setDisplayed(true);
		}else if(v == '0'){
			bouns_origin.setDisplayed(true);
			bouns_adm.setDisplayed(true);
			base_rate.setDisplayed(true);
			cake_bal1.setDisplayed(true);
			cake_bal2.setDisplayed(true);
			cake_bal3.setDisplayed(true);
			cake_bal4.setDisplayed(true);
			cake_bal5.setDisplayed(true);

			balance_rate.setDisplayed(false);
			balance_rate.setDisplayed(false);
			first_bal.setDisplayed(false);
			cancl_amt1.setDisplayed(false);
			cancl_amt2.setDisplayed(false);
			cancl_amt3.setDisplayed(false);
			cancl_amt4.setDisplayed(false);
			cancl_amt5.setDisplayed(false);
		}else if(v == '1'){
			bouns_origin.setDisplayed(false);
			bouns_adm.setDisplayed(false);
			base_rate.setDisplayed(false);
			cake_bal1.setDisplayed(false);
			cake_bal2.setDisplayed(false);
			cake_bal3.setDisplayed(false);
			cake_bal4.setDisplayed(false);
			cake_bal5.setDisplayed(false);

			balance_rate.setDisplayed(true);
			balance_rate.setDisplayed(true);
			first_bal.setDisplayed(true);
			cancl_amt1.setDisplayed(true);
			cancl_amt2.setDisplayed(true);
			cancl_amt3.setDisplayed(true);
			cancl_amt4.setDisplayed(true);
			cancl_amt5.setDisplayed(true);
		}
	}
	
	addt_product_infoForm = new Ext.FormPanel({
		frame : true,
//		waitMsgTarget : true,
		labelWidth:130,
        autoScroll : true, 
		labelAlign : 'left',
		//height:880,
		items : [{
			layout : 'column',
			items : [
			{columnWidth: .5,
				layout : 'form',
				items : [{
				fieldLabel:'公司名称',
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
			    id : 'add_comp_no',  
			    name: 't_product_info.comp_no',
				width:230
			}]
				},{
			columnWidth: .5,
			layout : 'form',
			items : [{
			fieldLabel : '产品简称',
			id : 'add_product_abbr_name',
			xtype : 'textfield',
			name : 't_product_info.product_abbr_name',
			width : '80%'
			}]
			}
			]},	{
				fieldLabel : '产品全称',
				id : 'add_product_name',
				xtype : 'textfield',
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
			anchor : '90%',
			listeners :{
				'change':{
					fn:function(){
						cplxChange('add');
					},scope:this
				}
			}
			},{
			fieldLabel : '保险期间',
			id : 'add_safe_year',
			xtype : 'textfield',
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
			},		{
				fieldLabel : '起售金额',
				id : 'add_bgn_bal',
				xtype : 'textfield',
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
			id : 'add_age',
			xtype : 'textfield',
			name : 't_product_info.age',
			width : '80%'
			},{
				fieldLabel : '犹豫期',
				id : 'add_grace_day',
				xtype : 'numberfield',
				name : 't_product_info.grace_day',
				width : '80%'
				}
			         ]
			}
		]},{
			fieldLabel : '产品优点',
			id : 'add_product_vitue',
			xtype : 'textarea',
			name : 't_product_info.product_vitue',
			width : '90%',
			height:50
			},{
			fieldLabel : '责任免除',
			id : 'add_duty_remit',
			xtype : 'textarea',
			name : 't_product_info.duty_remit',
			width : '90%',
			height:50
			},{
			fieldLabel : '风险提示',
			id : 'add_danger_war',
			xtype : 'textarea',
			name : 't_product_info.danger_war',
			width : '90%',
			height:50
			},{fieldLabel : '红利分配',
				id : 'add_bouns_adm',
				xtype : 'textarea',
				name : 't_product_info.bouns_adm',
				width : '90%',
				height:50
				},{
			fieldLabel : '红利来源',
			id : 'add_bouns_origin',
			xtype : 'textarea',
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
					id : 'add_syl',
					xtype : 'textfield',
					name : 't_product_info.syl',
					width : '80%'
				}]
				},{
				columnWidth: .5,
				layout : 'form',
				items : [{
					fieldLabel : '每年返还金额',
					id : 'add_mnfhje',
					xtype : 'textfield',
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
						fieldLabel : '疾病身故保险金',
						id : 'add_illness_bal',
						xtype : 'textfield',
						name : 't_product_info.illness_bal',
						width : '80%'
					}]
					},{
					columnWidth: .5,
					layout : 'form',
					items : [{
						fieldLabel : '一般意外伤害身故保险金',
						id : 'add_ywbal',
						xtype : 'textfield',
						name : 't_product_info.ywbal',
						width : '80%'
					}]
					}
					]},
					{
						layout : 'column',
						items : [
						{
						columnWidth: .5,
						layout : 'form',
						items : [{
							fieldLabel : '特定交通工具意外伤害身故保险金',
							id : 'add_trafc_bal',
							xtype : 'textfield',
							name : 't_product_info.trafc_bal',
							width : '80%'
						}]
						},{
						columnWidth: .5,
						layout : 'form',
						items : [{
							fieldLabel : '满期保险金',
							id : 'add_totl_bal',
							xtype : 'textfield',
							name : 't_product_info.totl_bal',
							width : '80%'
						}]
						}
						]},
						{
							layout : 'column',
							items : [
							{
							columnWidth: .5,
							layout : 'form',
							items : [{
								fieldLabel : '护理保险金',
								id : 'add_nurse_bal',
								xtype : 'textfield',
								name : 't_product_info.nurse_bal',
								width : '80%'
							}]
							},{
							columnWidth: .5,
							layout : 'form',
							items : [{
								fieldLabel : '附加险',
								id : 'add_add_safe',
								xtype : 'textfield',
								name : 't_product_info.add_safe',
								width : '80%'
							}]
							}
							]},{
								layout : 'column',
								items : [
								{
								columnWidth: 1,
								layout : 'form',
								items : [{
									fieldLabel : '其他',
									id : 'add_remark1',
									xtype : 'textfield',
									name : 't_product_info.remark1',
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
						id : 'add_base_rate',
						xtype : 'textfield',
						name : 't_product_info.base_rate',
						width : '80%'
						//unitText : ' (分红险)'	
						},{
						fieldLabel : '历年分红2',
						id : 'add_cake_bal2',
						xtype : 'textfield',
						name : 't_product_info.cake_bal2',
						width : '80%'
						},{
						fieldLabel : '历年分红4',
						id : 'add_cake_bal4',
						xtype : 'textfield',
						name : 't_product_info.cake_bal4',
						width : '80%'
						},{
							fieldLabel : '结算利率',
							id : 'add_balance_rate',
							xtype : 'textfield',
							name : 't_product_info.balance_rate',
							width : '80%'
						//	unitText : ' (万能险)'
							},{
							fieldLabel : '退保费用1年',
							id : 'add_cancl_amt1',
							xtype : 'textfield',
							name : 't_product_info.cancl_amt1',
							width : '80%'
							}		,{
							fieldLabel : '退保费用3年',
							id : 'add_cancl_amt3',
							xtype : 'textfield',
							name : 't_product_info.cancl_amt3',
							width : '80%'
							}		,{
							fieldLabel : '退保费用5年',
							id : 'add_cancl_amt5',
							xtype : 'textfield',
							name : 't_product_info.cancl_amt5',
							width : '80%'
							}]
					},{
					columnWidth: .5,
					layout : 'form',
					items : [{
						fieldLabel : '历年分红1',
						id : 'add_cake_bal1',
						xtype : 'textfield',
						name : 't_product_info.cake_bal1',
						width : '80%'
						},{
						fieldLabel : '历年分红3',
						id : 'add_cake_bal3',
						xtype : 'textfield',
						name : 't_product_info.cake_bal3',
						width : '80%'
						},{
						fieldLabel : '历年分红5',
						id : 'add_cake_bal5',
						xtype : 'textfield',
						name : 't_product_info.cake_bal5',
						width : '80%'
						},{
							fieldLabel : '初始费用',
							id : 'add_first_bal',
							xtype : 'textfield',
							name : 't_product_info.first_bal',
							width : '80%'
							}	,{
							fieldLabel : '退保费用2年',
							id : 'add_cancl_amt2',
							xtype : 'textfield',
							name : 't_product_info.cancl_amt2',
							width : '80%'
							},{
							fieldLabel : '退保费用4年',
							id : 'add_cancl_amt4',
							xtype : 'textfield',
							name : 't_product_info.cancl_amt4',
							width : '80%'
							},{
								fieldLabel : '产品编码',
								id : 'add_idNumber',
								xtype : 'hidden',
								name : 't_product_info.idNumber',
								width : '20%'
								}]
					}
					]}
		],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				save_check(addt_product_infoForm, "t_product_info_addNewInfo.action", queryt_product_selectStore, "添加信息","2");
			}
		}, {
			text : '重置',
			iconCls:'li-cancel',
			handler : function() {
			//	addt_product_infoWin.hide();
				addt_product_infoForm.form.reset();
			}
		}, {
			text : '关闭',
			iconCls:'li-cancel',
			handler : function() {
				addt_product_infoWin.hide();
				addt_product_infoForm.form.reset();
			}
		}]
	});

	addt_product_infoWin = new Ext.Window({
		title :  '添加信息',
		layout : 'form',
		width : 800,
		height : 500,
		plain : true,
		closable : true,
		closeAction : 'hide',
		bodyStyle:'overflow-y:scroll',
		items : [addt_product_infoForm,add_queryt_product_selectGrid]
	});

	addt_product_info = function() {
		addt_product_infoWin.show();
		add_queryt_product_selectGrid.store.removeAll();
		//addt_product_infoForm.setWidth(1200-15);
		//addt_product_infoForm.setHeight(500);
		//add_queryt_product_selectGrid.setWidth(1200-15);
		//add_queryt_product_selectGrid.setHeight(400);
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
	},{
	name : 't_product_info.pro_no',
	mapping : 'pro_no'
	},{
	name : 't_product_info.syl',
	mapping : 'syl'
	},{
	name : 't_product_info.mnfhje',
	mapping : 'mnfhje'
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
		frame : true,
		waitMsgTarget : true,
		labelWidth:130,
        autoScroll : true, 
        reader : updatet_product_infoReader,
		labelAlign : 'left',
		items : [{
			layout : 'column',
			items : [
			{columnWidth: .5,
				layout : 'form',
				items : [{
				fieldLabel:'公司名称',
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
			    id : 'update_comp_no',  
			    name: 't_product_info.comp_no',
				width:230
				}]},{
			columnWidth: .5,
			layout : 'form',
			items : [{
			fieldLabel : '产品简称',
			id : 'update_product_abbr_name',
			xtype : 'textfield',
			name : 't_product_info.product_abbr_name',
			width : '80%'
			}]
			}
			]},	{
				fieldLabel : '产品全称',
				id : 'update_product_name',
				xtype : 'textfield',
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
			store : product_typeStore,
			valueField : 'id',
			displayField : 'name',
			mode : 'local',
			editable : false,
			triggerAction : 'all',
			hiddenName : 't_product_info.product_type',
			pageSize : 5,
			anchor : '90%',
			listeners :{
				'change':{
					fn:function(){
						cplxChange('update');
					},scope:this
				}
			}
			},{
			fieldLabel : '保险期间',
			id : 'update_safe_year',
			xtype : 'textfield',
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
			name : 't_product_info.age',
			width : '80%'
			},{
				fieldLabel : '犹豫期',
				id : 'update_grace_day',
				xtype : 'numberfield',
				name : 't_product_info.grace_day',
				width : '80%'
				}
			         ]
			}
		]},{
			fieldLabel : '产品优点',
			id : 'update_product_vitue',
			xtype : 'textarea',
			name : 't_product_info.product_vitue',
			width : '90%',
			height:50
			},{
			fieldLabel : '责任免除',
			id : 'update_duty_remit',
			xtype : 'textarea',
			name : 't_product_info.duty_remit',
			width : '90%',
			height:50
			},{
			fieldLabel : '风险提示',
			id : 'update_danger_war',
			xtype : 'textarea',
			name : 't_product_info.danger_war',
			width : '90%',
			height:50
			},{fieldLabel : '红利分配',
				id : 'update_bouns_adm',
				xtype : 'textarea',
				name : 't_product_info.bouns_adm',
				width : '90%',
				height:50
				},{
			fieldLabel : '红利来源',
			id : 'update_bouns_origin',
			xtype : 'textarea',
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
						fieldLabel : '疾病身故保险金',
						id : 'update_illness_bal',
						xtype : 'textfield',
						name : 't_product_info.illness_bal',
						width : '80%'
					}]
					},{
					columnWidth: .5,
					layout : 'form',
					items : [{
						fieldLabel : '一般意外伤害身故保险金',
						id : 'update_ywbal',
						xtype : 'textfield',
						name : 't_product_info.ywbal',
						width : '80%'
					}]
					}
					]},
					{
						layout : 'column',
						items : [
						{
						columnWidth: .5,
						layout : 'form',
						items : [{
							fieldLabel : '特定交通工具意外伤害身故保险金',
							id : 'update_trafc_bal',
							xtype : 'textfield',
							name : 't_product_info.trafc_bal',
							width : '80%'
						}]
						},{
						columnWidth: .5,
						layout : 'form',
						items : [{
							fieldLabel : '满期保险金',
							id : 'update_totl_bal',
							xtype : 'textfield',
							name : 't_product_info.totl_bal',
							width : '80%'
						}]
						}
						]},
						{
							layout : 'column',
							items : [
							{
							columnWidth: .5,
							layout : 'form',
							items : [{
								fieldLabel : '护理保险金',
								id : 'update_nurse_bal',
								xtype : 'textfield',
								name : 't_product_info.nurse_bal',
								width : '80%'
							}]
							},{
							columnWidth: .5,
							layout : 'form',
							items : [{
								fieldLabel : '附加险',
								id : 'update_add_safe',
								xtype : 'textfield',
								name : 't_product_info.add_safe',
								width : '80%'
							}]
							}
							]},{
								layout : 'column',
								items : [
								{
								columnWidth: 1,
								layout : 'form',
								items : [{
									fieldLabel : '其他',
									id : 'update_remark1',
									xtype : 'textfield',
									name : 't_product_info.remark1',
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
						name : 't_product_info.base_rate',
						width : '80%'
						//unitText : ' (分红险)'	
						},{
						fieldLabel : '历年分红2',
						id : 'update_cake_bal2',
						xtype : 'textfield',
						name : 't_product_info.cake_bal2',
						width : '80%'
						},{
						fieldLabel : '历年分红4',
						id : 'update_cake_bal4',
						xtype : 'textfield',
						name : 't_product_info.cake_bal4',
						width : '80%'
						},{
							fieldLabel : '结算利率',
							id : 'update_balance_rate',
							xtype : 'textfield',
							name : 't_product_info.balance_rate',
							width : '80%'
						//	unitText : ' (万能险)'
							},{
							fieldLabel : '退保费用1年',
							id : 'update_cancl_amt1',
							xtype : 'textfield',
							name : 't_product_info.cancl_amt1',
							width : '80%'
							}		,{
							fieldLabel : '退保费用3年',
							id : 'update_cancl_amt3',
							xtype : 'textfield',
							name : 't_product_info.cancl_amt3',
							width : '80%'
							}		,{
							fieldLabel : '退保费用5年',
							id : 'update_cancl_amt5',
							xtype : 'textfield',
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
						name : 't_product_info.cake_bal1',
						width : '80%'
						},{
						fieldLabel : '历年分红3',
						id : 'update_cake_bal3',
						xtype : 'textfield',
						name : 't_product_info.cake_bal3',
						width : '80%'
						},{
						fieldLabel : '历年分红5',
						id : 'update_cake_bal5',
						xtype : 'textfield',
						name : 't_product_info.cake_bal5',
						width : '80%'
						},{
							fieldLabel : '初始费用',
							id : 'update_first_bal',
							xtype : 'textfield',
							name : 't_product_info.first_bal',
							width : '80%'
							}	,{
							fieldLabel : '退保费用2年',
							id : 'update_cancl_amt2',
							xtype : 'textfield',
							name : 't_product_info.cancl_amt2',
							width : '80%'
							},{
							fieldLabel : '退保费用4年',
							id : 'update_cancl_amt4',
							xtype : 'textfield',
							name : 't_product_info.cancl_amt4',
							width : '80%'
							},{
								fieldLabel : '产品编码',
								id : 'update_idNumber',
								xtype : 'hidden',
								name : 't_product_info.idNumber',
								width : '20%'
								}]
					}
					]}
		],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
			check(updatet_product_infoForm, "t_product_info_update.action", queryt_product_infoStore, "修改信息")
			//	save_check(updatet_product_infoForm, "t_product_info_update.action", queryt_product_selectStore, "添加信息","");
			//	updatet_product_infoWin.hide();	
			}
		}, {
			text : '重置',
			iconCls:'li-cancel',
			handler : function() {
			//	updatet_product_infoWin.hide();
			updatet_product_infoForm.form.reset();
			}
		}, {
			text : '关闭',
			iconCls:'li-cancel',
			handler : function() {
			updatet_product_infoWin.hide();
			updatet_product_infoForm.form.reset();
			}
		}]
	});

	updatet_product_infoWin = new Ext.Window({
		title : '请输入您要修改的信息',
		layout : 'form',
		width : 800,
		height : 500,
		plain : true,
		closable : true,
		closeAction : 'hide',
		bodyStyle:'overflow-y:scroll',
		items : [updatet_product_infoForm,queryt_product_selectGrid]
	});

	update = function() {
		_record = queryt_product_infoGrid.getSelectionModel().getSelected();
		flag = queryt_product_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_product_infoWin.show();
			//updatet_product_infoForm.setWidth(1200-15);
			//updatet_product_infoForm.setHeight(500);
			//queryt_product_selectGrid.setWidth(1200-15);
			//queryt_product_selectGrid.setHeight(400);
			
			
			updatet_product_infoForm.getForm().load({
				url : 't_product_info_findById.action?t_product_info.idNumber='+ _record.get('idNumber'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
					var pro_no=Ext.getCmp('update_idNumber').getValue();
					var params={pro_no:pro_no};
					queryt_product_selectStore.load({params:params});
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
	};

	select_update = function() {
		_record = queryt_product_selectGrid.getSelectionModel().getSelected();
		flag = queryt_product_selectGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_product_selectWin.show();
					
			updatet_product_selectForm.getForm().load({
				url : 't_product_select_findById.action?t_product_select.idNumber='+ _record.get('idNumber'),
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
		width : 700,
		height : 150, 
		items : [{
			fieldLabel:'公司名称',
			xtype:'combo',
			store:queryt_comp_infoStore,
			valueField:"idNumber",
			displayField:"comp_name",
			mode:'local',
			forceSelection:true,//必须选择一项
			emptyText:'请选择公司...',//默认值
			hiddenName:'data_comp_no',//hiddenName才是提交到后台的input的name
			editable:false,//不允许输入
			triggerAction:'all',
		    id : 'idNumber',  
		    name: 'comp_name',
			width:400,
			allowBlank:false 
			},{
		    xtype: 'textfield',
		    fieldLabel: '附件存储路径',
		    name: 'file',
		    inputType: 'file',
		    anchor : '90%'
			}],
		buttons : [{
			text : '导入数据',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				submit(data_uploadForm, "data_upload.action?flag=T_product_info", queryt_product_infoStore, "数据导入");
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
		width : 750,
		height : 180,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : data_uploadForm
	});
	
	data_upload = function() {
		data_uploadWin.show();
	};

	
	excel_uploadForm = new Ext.form.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		fileUpload: true,
		width : 650,
		height : 190, 
		items : [{
			fieldLabel : '产品编号',
			id : 'excel_idNumber',
			xtype : 'textfield',
			name : 'excel_idNumber',
			width : '80%'
		},{
			fieldLabel : '产品全称',
			id : 'excel_product_name',
			xtype : 'textfield',
			name : 'excel_product_name',
			width : '80%'
			},{
		    xtype: 'textfield',
		    fieldLabel: '附件存储路径:',
		    name: 'file',
		    inputType: 'file',
		    anchor : '95%'
			}],
		buttons : [{
			text : '上传产品演算模板',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				submit(excel_uploadForm, "excel_upload.action", queryt_product_infoStore, "上传产品演算模板");
				excel_uploadWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
			excel_uploadWin.hide();
			excel_uploadForm.form.reset();
			}
		}]

	});
	
	excel_uploadWin = new Ext.Window({
		title : '数据导入',
		layout : 'form',
		width : 660,
		height : 230,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : excel_uploadForm
	});
	
	excel_upload = function() {
		_record = queryt_product_infoGrid.getSelectionModel().getSelected();
		var pro_no=_record.get('idNumber');
		var pro_name=_record.get('product_name');
		flag = queryt_product_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			excel_uploadWin.show();
			Ext.getCmp("excel_idNumber").setValue(pro_no);
			Ext.getCmp("excel_product_name").setValue(pro_name);
		}
		
	};

	save_check = function(formTemp, url, store, tag,flag) {
		Ext.MessageBox.confirm("友情提示", "您确定要"+tag+"吗？",
			function(button) {
				if (button == "yes") {
					save_submit(formTemp, url, store, tag,flag);
				}else{
					store.load();
					formTemp.form.reset();
				}
			}
		);
	};
	// 提交表单
	//
	save_submit = function(formTemp, urlTemp, store, tag,flag) {
		if (formTemp.form.isValid()) {
			formTemp.form.submit({
				url : urlTemp,
				success : function(form, action) {
				var pro_no=action.result.pro_no;
					if(flag=="2"){
						pro_no=action.result.pro_no;
						Ext.getCmp("add_idNumber").setValue(pro_no);
					}else if(flag=="1"){
						pro_no=Ext.getCmp('add_idNumber').getValue();
						var params={pro_no:pro_no};
						store.load({params:params});
					}else if(flag=="3"){
						pro_no=Ext.getCmp('update_idNumber').getValue();
					
						var params={pro_no:pro_no};
						store.load({params:params});
					}

					
					
					Ext.Msg.alert('友情提示', tag+'成功！');
				},
				failure : function(form, action) {
					Ext.Msg.alert('友情提示', tag+'失败！请重新确定操作是否合适！');
				//	store.load();
				//	formTemp.form.reset();
				},
				waitMsg : '正在提交操作，稍后...'
			});
		} else {
			Ext.Msg.alert('信息', '请填写完成再提交!');
		}
	};
	

	
	
	//------折页信息--2014
	
	compFileInfoForm = new Ext.form.FormPanel({
		
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		fileUpload: true,
		width : 800,
		height : 70,
		items : [
		         {
		    xtype: 'hidden',
		    id:'mainTableId'
			},{
		    xtype: 'displayfield',
		    fieldLabel: '产品名称',
		    id:'compName',
		    anchor : '95%'
			}]
		
	});
	
	compFileStore = new Ext.data.JsonStore({
		url : 't_comp_info_findFileAll.action?compFile.flag=2',
		root : 'compFileList',
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
		name : 'fileType',
		mapping : 'fileType'
		},{
		name : 'fileUrl',
		mapping : 'fileUrl'
		},{
			name : 'sort',
			mapping : 'sort'
			}
		],
				autoLoad : false
	});
	var fsm = new Ext.grid.CheckboxSelectionModel();
	var compFileInfoGrid = new Ext.grid.GridPanel({
		store : compFileStore,
		sm : fsm,
		stripeRows : true,
		width : 800,
		height : 390,
		columns : [ fsm, rowNum,
		            {
			header : '文件类型',
			dataIndex : 'fileType',
			width : 60,
			renderer : function(value, meta, record) {
				return fileType[value];
			}
			},{
				header : '排序',
				dataIndex : 'sort',
				width : 60
				},{
					header : '路径',
					dataIndex : 'fileUrl',
					width : 60,
					renderer : function(value, meta, record) {
						var tempString = "<a href='"+prjpath + value+"' target='_blank'>"+ value +"</a>";
						return tempString;
					}
					}],
			
			tbar : [{
				text : '新增 ',
				iconCls:'icon-add',
				handler : function() {
					Ext.getCmp("compFile_compId").setValue(Ext.getCmp("mainTableId").getValue());
					fileUploadWin.show();
				}
			}, '-',{
				text : '修改 ',
				iconCls:'icon-add',
				handler : function() {
					_record = compFileInfoGrid.getSelectionModel().getSelected();
					flag = compFileInfoGrid.getSelectionModel().getSelections();
				if (flag.length == 1) {
					updatefileUploadWin.show();
					
					updateFileUploadForm.getForm().load({
						url : 't_comp_info_findCompFileById.action?compFile.idNumber='+ _record.get('idNumber')+"&compFile.flag=2",
						waitMsg : '正在载入数据...',
						failure : function() {
							Ext.Msg.alert('友情提示', '载入失败');
						},
						success : function() {
						}
					});
				} else
					Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
				}
			}, '-',{
				text : '删除 ',
				iconCls:'icon-add',
				handler : function() {
					del (compFileInfoGrid, compFileStore, "t_comp_info_deleteFile.action?compFile.flag=2", "idNumber", "删除信息",{params :{"compFile.compId":Ext.getCmp("mainTableId").getValue()}});
				}
			}],
			bbar : [{
				xtype : 'paging',
				id : 'pageBar2',
				plugins : [new Ext.ux.plugins.PageComboResizer()],
				pageSize : 10,
				store : compFileStore,
				emptyMsg : "没有记录"
			}]
	});
	
	compFilePanel = new Ext.Panel({
		width : '100%',
		id : 'filePanel',
		items : [compFileInfoForm, compFileInfoGrid]
	});
	compPicLogWin = new Ext.Window({
		title : '产品折页信息',
		layout : 'form',
		width : 800,
		height : 500,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : compFilePanel,
		listeners :{
		"beforehide":function (){
			compFileStore.removeAll();
		}
	}
	});
	
	fileTypeStore = new Ext.data.SimpleStore({
		fields : ['file_type', 'file_type_name'],
		data : [['log', '折页图片']]
	});
	var fileType = {'log': 'Log图标', 'voice': '语音 '};
	
	
	
	fileUploadForm = new Ext.form.FormPanel({
		formId : 'fileForm',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		fileUpload: true,
		width : 660,
		height : 200, 
		items : [
		         {
		xtype : 'hidden',
		id : 'compFile_compId',
		name:'compFile.compId'
		},{
		    xtype: 'textfield',
		    fieldLabel: '文件',
		    id:'upload',
		    name: 'upload',
		    inputType: 'file',
		    anchor : '95%',
		    allowBlank : false
		  //  	width : '350'
			},{
			    xtype: 'combo',
			    fieldLabel: '文件类型',
			    id:'compFile_fileType',
			   store:fileTypeStore,
			   valueField : 'file_type',
			   displayField : 'file_type_name',
			   mode : 'local',
			   editable : false,
			   triggerAction : 'all',
			    anchor : '95%',
			    allowBlank : false,
			    hiddenName :'compFile.fileType'
				},
				{

					fieldLabel : '排序',
					id : 'compFile_sort',
					xtype : 'textfield',
					name : 'compFile.sort',
						regex : /[0-9]/,
							regexText:"只能输入数字!"
				}
				],
				buttons : [{
					text : '上传',
					iconCls:'icon-save',
					disabled : false,
					handler : function() {
						//
//						var fname = Ext.getCmp("upload").getValue();
//						if(fname == ''){
//							Ext.Msg.alert('友情提示', '请选择文件上传');
//							return;
//						}
						if(fileUploadForm.getForm().isValid()){
						Ext.Ajax.request({
							url:"comp_info_uploadPic.action?" + Ext.urlEncode({filename:Ext.getCmp("upload").getValue()})+"&compFile.flag=2",
							form: 'fileForm',
							isUpload:true,
							waitMsg : '正在上传文件，请等待...',
							success:function(response){
								Ext.Msg.alert('友情提示', '文件上传成功');
								compFileStore.load(
										{
									params : {
									"compFile.compId":Ext.getCmp("mainTableId").getValue()
									}
								});
								fileUploadForm.form.reset();
								fileUploadWin.hide();
							},
							failure : function(response) {
								Ext.Msg.alert('友情提示', '文件上传失败，请重试。');
							}
						});
						}else{
							Ext.Msg.alert('信息', '请填写完成再提交!');
						}
					}
				},{
						text : '取消',
						iconCls:'li-cancel',
						handler : function() {
						fileUploadWin.hide();
						fileUploadForm.form.reset();
						}
					}
				]
	});
	
	updateCompFileReader = new Ext.data.JsonReader({
		root : 'compFileList',
		successProperty : '@success'
	}, [,{
	name : 'compFile.idNumber',
	mapping : 'idNumber'
	}
	,{
	name : 'compFile.sort',
	mapping : 'sort'
	},{
		name : 'compFile.fileType',
		mapping : 'fileType'
		}
	]
	);
	updateFileUploadForm = new Ext.form.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 660,
		height : 200, 
		reader : updateCompFileReader,
		items : [
{
	xtype : 'hidden',
	name:'compFile.idNumber'
	},{
	    xtype: 'combo',
	    fieldLabel: '文件类型',
	   store:fileTypeStore,
	   valueField : 'file_type',
	   displayField : 'file_type_name',
	   mode : 'local',
	   editable : false,
	   triggerAction : 'all',
	    anchor : '95%',
	    allowBlank : false,
	    hiddenName :'compFile.fileType'
		},{
		fieldLabel : '排序',
		xtype : 'textfield',
		name : 'compFile.sort',
			regex : /[0-9]/,
				regexText:"只能输入数字!"
	}
		         ],
		         buttons : [{
						text : '修改',
						iconCls : 'icon-save',
						disabled : false,
						handler : function() {
							if (updateFileUploadForm.form.isValid()) {
										updateFileUploadForm.form.submit({
											url : 't_comp_info_updateCompFile.action?compFile.flag=2',
											success : function(form, action) {
											compFileStore.load({
													params : {
													"compFile.compId":Ext.getCmp("mainTableId").getValue()
												}
											});
												Ext.Msg
														.alert('提示',
																'保存成功！');
												updatefileUploadWin.hide();
												updateFileUploadForm.getForm()
														.reset();
											},
											failure : function(form, action) {
												updatefileUploadWin.hide();
												updateFileUploadForm.getForm()
														.reset();
												Ext.Msg
														.alert('提示',
																'保存失败！');
											},
											waitMsg : '正在保存数据，稍后...'
										});
							} else {
									Ext.Msg.alert('提示', '请填写完成再提交!');
							}
						}
					}, {
						text : '取消',
						iconCls : 'li-cancel',
						handler : function() {
							updatefileUploadWin.hide();
							updateFileUploadForm.getForm().reset();
						}
					}]
	});

	fileUploadWin = new Ext.Window({
		title : '维护产品折页信息',
		layout : 'form',
		width : 660,
		height : 250,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : fileUploadForm
	});
	
	updatefileUploadWin = new Ext.Window({
		title : '请输入您要修改的信息',
		layout : 'form',
		width : 660,
		height : 250,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : updateFileUploadForm
	});
	
	
	
	
	// 加载页面后默认焦点
//	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
