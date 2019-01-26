
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
	Ext.QuickTips.init();
	
	haveRight('jsp/marketing.jsp');
	
	
	
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

	queryt_product_selectGrid = new Ext.grid.GridPanel({
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
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_product_select();
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
		width : 800,
		height : 450,
		plain : true,
		closable : false,
		closeAction : 'hide',
		items : addt_product_selectForm
	});

	addt_product_select = function() {
		addt_product_selectWin.show();	
		
		var comp_no=Ext.getCmp('add_comp_no').getValue();
		Ext.getCmp("product_select_comp_no").setValue(comp_no);
		
		var product_name=Ext.getCmp('add_product_name').getValue();
		Ext.getCmp("product_select_pro_no").setValue(product_name);
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
		

	updatet_product_selectWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
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
			}
			,{
			fieldLabel : '投保人性别',
			id : 'u_product__select_sex',
			xtype : 'textfield',
			name : 't_product_select.sex',
			width : '80%'
			}
			,{
			fieldLabel : '起存金额',
			id : 'u_product__select_bgn_bal_select',
			xtype : 'textfield',
			name : 't_product_select.bgn_bal_select',
			width : '80%'
			}
			,{
			fieldLabel : '结束投保年龄',
			id : 'u_product__select_end_age',
			xtype : 'textfield',
			name : 't_product_select.end_age',
			width : '80%'
			}
			,{
			fieldLabel : '保险期限',
			id : 'u_product__select_insure_period',
			xtype : 'textfield',
			name : 't_product_select.insure_period',
			width : '80%'
			}
			,{
			fieldLabel : '缴费方式',
			id : 'u_product__select_pay_type',
			xtype : 'textfield',
			name : 't_product_select.pay_type',
			width : '80%'
			}
			,{
			fieldLabel : '疾病身故保险金',
			id : 'u_product__select_illness_bal_flag',
			xtype : 'textfield',
			name : 't_product_select.illness_bal_flag',
			width : '80%'
			}
			,{
			fieldLabel : '交通意外险',
			id : 'u_product__select_trafc_bal_flag',
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
			id : 'u_product__select_add_safe_flag',
			xtype : 'textfield',
			name : 't_product_select.add_safe_flag',
			width : '80%'
			}
			,{
			fieldLabel : '红利分配方式',
			id : 'u_product__select_bouns_adm_type',
			xtype : 'textfield',
			name : 't_product_select.bouns_adm_type',
			width : '80%'
			}
			,{
			fieldLabel : '开始投保年龄',
			id : 'u_product__select_start_age',
			xtype : 'textfield',
			name : 't_product_select.start_age',
			width : '80%'
			}
			,{
			fieldLabel : '期缴年限',
			id : 'u_product__select_expect_pay',
			xtype : 'textfield',
			name : 't_product_select.expect_pay',
			width : '80%'
			}
			,{
			fieldLabel : '产品编号',
			id : 'u_product__select_pro_no',
			xtype : 'textfield',
			name : 't_product_select.pro_no',
			width : '80%'
			}
			,{
			fieldLabel : '公司编码',
			id : 'u_product__select_comp_no',
			xtype : 'textfield',
			name : 't_product_select.comp_no',
			width : '80%'
			}
			,{
			fieldLabel : '产品类型',
			id : 'u_product__select_product_type',
			xtype : 'textfield',
			name : 't_product_select.product_type',
			width : '80%'
			}
			,{
			fieldLabel : '一般意外伤害',
			id : 'u_product__select_ywbal_flag',
			xtype : 'textfield',
			name : 't_product_select.ywbal_flag',
			width : '80%'
			}
			,{
			fieldLabel : '满期保险金',
			id : 'u_product__select_totl_bal_flag',
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
					check(updatet_product_selectForm, "t_product_select_update.action", queryt_product_selectStore, "修改信息")
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
            renderTo : 'marketingGrid',   
            title : "条件查询",   
            border : false,   
            monitorValid:true,  //绑定提交按钮, 有错误的时间就变灰
            //renderto : Ext.getBody(),   
            bodyStyle : "padding: 1px; background-color: transparent;",   
            labelAlign : "right",   
            labelWidth : 120,   
            autoScroll : true, 
  
            items : [{
            	layout : 'column',
            	xtype : "fieldset",   
                autoHeight : true,   
                title : '简单筛选条件',
            	items:[{
            		columnWidth : 0.5,
            		layout:"form",
            		//align:"right",
            		items:[{
            			
            		fieldLabel:'公司简称',
            		xtype:'combo',
            		store:queryt_comp_infoStore,
            		valueField:"idNumber",
            		displayField:"comp_name",
            		mode:'local',
//            		forceSelection:true,//必须选择一项
            		emptyText:'请选择公司...',//默认值
            		hiddenName:'t_product_info.comp_no',//hiddenName才是提交到后台的input的name
            		editable:false,//不允许输入
            		triggerAction:'all',
            	    id : 'pro_select_comp_no',  
            	    name: 't_product_info.comp_no',
            		width:230
            		}]
            		},{
            			columnWidth : 0.5,
                		layout:"form",
                		items:[{
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
                		layout:"form",
                		items:[{
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
            		}]},
            		{
        				columnWidth : 0.2,
        				//layout : 'form',
        				items:[{
        	            	xtype : 'button',
        	            	text : '查询',
        	            	width : 100,
        	            	height:25,
        	            	align : 'right',
        	            	iconCls : 'icon-select',
        	            	handler : function() {
        	            		var str=Ext.getCmp("desFieldsetAdd").collapsed;
        	            		var action='t_product_info_findInfoByConditions.action?table=product_info';
        	            			var start=1;
        	            		var comp_no=Ext.getCmp('pro_select_comp_no').getValue();
        	            		//alert(comp_no);
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
        	            	//	alert(action);
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

        	            			action=action+ '&t_product_select.start_age='
        	                    	+ Ext.getCmp('select_age').getValue()
        	                    	+'&t_product_select.expect_pay='
        	                    	+ Ext.getCmp('select_expect_pay').getValue()
        	                    	+'&t_product_select.insure_period='
        	                    	+ Ext.getCmp('select_insure_period').getValue()
        	                    	
        	                    	+'&t_product_select.bgn_bal_select='
        	                    	+ Ext.getCmp('select_bgn_bal').getValue();
        	                    	//alert(action);
        	            		}
        	            	queryt_product_infoStore.proxy = new Ext.data.HttpProxy({
        	            	url : action
        	            	});
        	            	queryt_product_infoStore.load({
        	            			params : {
        	            			start : 0,
        	            			limit : Ext.getCmp('pageBar').pageSize
        	            			}});
        	            		}
        				}]},
        				{
            				columnWidth : 0.3,
            				items:[{
            					xtype : 'button',
                            	text : '重置',
                            	width : 100,
                            	height: 25,
                            	iconCls : 'icon-reset',
                            	align : 'left',
                            	handler : function() {
                            	selectUnitForm.form.reset();
                            	}
            				}]}
            		]},
            		{
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
                     items:[
                            {columnWidth : 0.5,   
                             layout : 'form',
                             items:[{
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
                            	 }]
                            },{columnWidth : 0.5,   
                                layout : 'form',
                                items:[{
                            	 fieldLabel : '期缴年限',
                            	 id : 'select_expect_pay',
                            	 xtype:"numberfield",
                            	 allowDecimals : false,
                            	 allowNegative : false,
                            	 name : 't_product_info.expect_pay',
                            	 style : 'text-align:right',
                            	 width : 230,
                            	 unitText : ' (年)'
                            	 }]
                            },{columnWidth : 0.5,   
                                layout : 'form',
                                items:[{
                          			fieldLabel : '疾病身故保险金',
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
                         		}]
                            },{columnWidth : 0.5,   
                                layout : 'form',
                                items:[{
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
                            },{columnWidth : 0.5,   
                                layout : 'form',
                                items:[{
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
                         		}]
                            },{columnWidth : 0.5,   
                                layout : 'form',
                                items:[{
                                  	 fieldLabel : '保险期间',
                                	 id : 'select_insure_period',
                                	 xtype:"numberfield",
                                	 allowDecimals : false,
                                	 allowNegative : false,
                                	 name : 't_product_info.insure_period',
                                	 style : 'text-align:right',
                                	 width : 230,
                                	 unitText : ' (年)'
                                	 }]
                            },{columnWidth : 0.5,   
                                layout : 'form',
                                items:[{
                           			fieldLabel : '一般意外伤害身故保险金',
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
                         		}]
                            },{columnWidth : 0.5,   
                                layout : 'form',
                                items:[{
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
                            },{columnWidth : 0.5,   
                                layout : 'form',
                                items:[{
                               	 fieldLabel : '起售金额',
                            	 id : 'select_bgn_bal',
                            	 xtype:"numberfield",
                            	 allowDecimals : true,
                            	 allowNegative : false,
                            	 name : 't_product_info.bgn_bal',
                            	 width : 230,
                            	 unitText : ' (元)'
                            	}]
                            },{columnWidth : 0.5,   
                                layout : 'form',
                                items:[{
                         			fieldLabel : '红利分配方式',
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
                         		}]
                            },{columnWidth : 0.5,   
                                layout : 'form',
                                items:[{
                           			fieldLabel : '交通事故保险金',
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
                         		}]
                            }
                     ]
            		}
            		] 

        });
	
	
	

	queryt_product_infoStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_product_infoGrid = new Ext.grid.GridPanel({
		store : queryt_product_infoStore,
		sm : sm,
		stripeRows : true,
		columns : [rowNum,{
			header : '产品编号',
			dataIndex : 'idNumber',
			width : 90, 
			renderer : function(value, meta, record) {
			var compId=record.get('comp_no');
			var tempString = '<div><a href="comAndProductAndCalculation.jsp?proId='+value+'&compId='+compId+'">'+ value +'</a></div>';
			return tempString;
		}}
,{
header : '保险公司编号',
dataIndex : 'comp_no',
width : 100 
}
,{
header : '产品全称',
dataIndex : 'product_name',
width : 220 
}
,{
header : '产品简称',
dataIndex : 'product_abbr_name',
width : 120 
}
,{
header : '产品类型',
dataIndex : 'product_type',
width : 80 
}
,{
header : '缴费方式',
dataIndex : 'pay_type',
width : 140 
}
],
	width : 500,
	height : 462,
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
		renderTo : 'marketingGrid',
        autoWidth: true,
        autoHeight: true,
        frame: true,
        bodyStyle: 'padding:3px',
		items : [selectUnitForm, queryt_product_infoGrid]
	});
	var divHeight = document.getElementById('marketingGrid').offsetHeight;
	var divWidth = document.getElementById('marketingGrid').offsetWidth;
	
	
	
	
	showQueryPanel.setHeight(divHeight);//389
	showQueryPanel.setWidth(divWidth);//
	queryt_product_infoGrid.setWidth(showQueryPanel.getWidth()-15);
	queryt_product_infoGrid.setHeight(320);
	
	

	
	addt_product_infoForm = new Ext.FormPanel({
		frame : true,
//		waitMsgTarget : true,
		labelWidth:130,
        autoScroll : true, 
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
		    id : 'add_comp_no',  
		    name: 't_product_info.comp_no',
			width:250
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
			anchor : '90%'
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
								id : 'add_pro_no',
								xtype : 'hidden',
								name : 't_product_info.pro_no',
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
				save_check(addt_product_infoForm, "t_product_info_addNewInfo.action", queryt_product_selectStore, "添加信息");
			//	addt_product_infoWin.hide();	
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
		x:10,
		y:10,
		width : 1200,
		height : 900,
		plain : true,
		closable : true,
		closeAction : 'hide',
		bodyStyle:'overflow-y:scroll',
		items : [addt_product_infoForm,queryt_product_selectGrid]
	});

	addt_product_info = function() {
		addt_product_infoWin.show();
		addt_product_infoForm.setWidth(1200-15);
		addt_product_infoForm.setHeight(500);
		queryt_product_selectGrid.setWidth(1200-15);
		queryt_product_selectGrid.setHeight(400);
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
	name : 't_product_info.syl',
	mapping : 'syl'
	},{
	name : 't_product_info.mnfhje',
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
	
	,{
		name : 't_product_info.syl',
		mapping : 'state'
		}
		,{
		name : 't_product_info.mnfhje',
		mapping : 'back'
		}
	]
	);
		
	updatet_product_infoForm = new Ext.FormPanel({
		frame : true,
//		waitMsgTarget : true,
		labelWidth:130,
        autoScroll : true, 
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
			anchor : '90%'
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
								id : 'update_pro_no',
								xtype : 'hidden',
								name : 't_product_info.pro_no',
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
				save_check(updatet_product_infoForm, "t_product_info_update.action", queryt_product_selectStore, "添加信息");
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
		x:10,
		y:10,
		width : 1200,
		height : 900,
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
		//	addt_product_infoWin.show();
			updatet_product_infoForm.setWidth(1200-15);
			updatet_product_infoForm.setHeight(500);
			queryt_product_selectGrid.setWidth(1200-15);
			queryt_product_selectGrid.setHeight(400);
			
			
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



	
	
	data_uploadForm = new Ext.form.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		fileUpload: true,
		width : 700,
		height : 150, 
		items : [{
			fieldLabel:'公司编码',
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
			name : 't_product_info.product_name',
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

	save_check = function(formTemp, url, store, tag) {
		Ext.MessageBox.confirm("友情提示", "您确定要"+tag+"吗？",
			function(button) {
				if (button == "yes") {
					save_submit(formTemp, url, store, tag);
				}else{
					store.load();
					formTemp.form.reset();
				}
			}
		);
	};
	// 提交表单
	//未完成，待处理  20140106，未完成的事情，产品新增完成后，将产品编码带入待产品查询界面
	//根据产品编码，查询产品查询信息表
	//
	save_submit = function(formTemp, urlTemp, store, tag) {
		if (formTemp.form.isValid()) {
			formTemp.form.submit({
				url : urlTemp,
				success : function(form, action) {
					//Ext.Msg.alert('友情提示', tag+'成功！');
					
					//alert(action.result.success);
					//alert(action.result.pro_no);
					//alert(jsonData.success);
					//alert(111);
					//alert(jsonData.data[0].name);
					Ext.getCmp("add_pro_no").setValue(pro_no);
				//	alert(form);
				/*	alert(222);
					var sse=form.getElementsByTagName('add_comp_no');*/
				/*	alert(sse);
					var ssq=form.getElementsByTagName('pro_no');*/
					
					
					//store.load();
					//formTemp.form.reset();
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
	
	// 加载页面后默认焦点
//	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
