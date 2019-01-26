
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

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_product_selectView.jsp');
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
id : 'select_idNumber',
xtype : 'textfield',
name : 't_product_select.idNumber',
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
+'t_product_select.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
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

		         
	});;
	
	
	

	queryt_product_selectStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
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
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
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
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_product_selectGrid',
		items : [selectUnitForm, queryt_product_selectGrid]
	});
	var divHeight = document.getElementById('t_product_selectGrid').offsetHeight;
	var divWidth = document.getElementById('t_product_selectGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_product_selectGrid.setWidth(showQueryPanel.getWidth());
	queryt_product_selectGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
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
		name : 't_product_select.idNumber',
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
		fieldLabel : '产品编号',
		id : 'add_pro_no',
		xtype : 'textfield',
		name : 't_product_select.pro_no',
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
		id : 'uppdate_idNumber',
		xtype : 'textfield',
		name : 't_product_select.idNumber',
		width : '80%'
		}
		,{
		fieldLabel : '投保人性别',
		id : 'uppdate_sex',
		xtype : 'textfield',
		name : 't_product_select.sex',
		width : '80%'
		}
		,{
		fieldLabel : '起存金额',
		id : 'uppdate_bgn_bal_select',
		xtype : 'textfield',
		name : 't_product_select.bgn_bal_select',
		width : '80%'
		}
		,{
		fieldLabel : '结束投保年龄',
		id : 'uppdate_end_age',
		xtype : 'textfield',
		name : 't_product_select.end_age',
		width : '80%'
		}
		,{
		fieldLabel : '保险期限',
		id : 'uppdate_insure_period',
		xtype : 'textfield',
		name : 't_product_select.insure_period',
		width : '80%'
		}
		,{
		fieldLabel : '缴费方式',
		id : 'uppdate_pay_type',
		xtype : 'textfield',
		name : 't_product_select.pay_type',
		width : '80%'
		}
		,{
		fieldLabel : '疾病身故保险金',
		id : 'uppdate_illness_bal_flag',
		xtype : 'textfield',
		name : 't_product_select.illness_bal_flag',
		width : '80%'
		}
		,{
		fieldLabel : '交通意外险',
		id : 'uppdate_trafc_bal_flag',
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
		id : 'uppdate_add_safe_flag',
		xtype : 'textfield',
		name : 't_product_select.add_safe_flag',
		width : '80%'
		}
		,{
		fieldLabel : '红利分配方式',
		id : 'uppdate_bouns_adm_type',
		xtype : 'textfield',
		name : 't_product_select.bouns_adm_type',
		width : '80%'
		}
		,{
		fieldLabel : '开始投保年龄',
		id : 'uppdate_start_age',
		xtype : 'textfield',
		name : 't_product_select.start_age',
		width : '80%'
		}
		,{
		fieldLabel : '期缴年限',
		id : 'uppdate_expect_pay',
		xtype : 'textfield',
		name : 't_product_select.expect_pay',
		width : '80%'
		}
		,{
		fieldLabel : '产品编号',
		id : 'uppdate_pro_no',
		xtype : 'textfield',
		name : 't_product_select.pro_no',
		width : '80%'
		}
		,{
		fieldLabel : '公司编码',
		id : 'uppdate_comp_no',
		xtype : 'textfield',
		name : 't_product_select.comp_no',
		width : '80%'
		}
		,{
		fieldLabel : '产品类型',
		id : 'uppdate_product_type',
		xtype : 'textfield',
		name : 't_product_select.product_type',
		width : '80%'
		}
		,{
		fieldLabel : '一般意外伤害',
		id : 'uppdate_ywbal_flag',
		xtype : 'textfield',
		name : 't_product_select.ywbal_flag',
		width : '80%'
		}
		,{
		fieldLabel : '满期保险金',
		id : 'uppdate_totl_bal_flag',
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

	updatet_product_selectWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_product_selectForm
	});

	update = function() {
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






	
	// 加载页面后默认焦点
	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
