
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
name : 't_product_select.idnumber',
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
fieldLabel : '备用2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 't_product_select.back2',
width : '80%'
}
,{
fieldLabel : '备用3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 't_product_select.back3',
width : '80%'
}
,{
fieldLabel : 'name5',
id : 'uppdate_back5',
xtype : 'textfield',
name : 't_product_select.back5',
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
fieldLabel : '备用1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 't_product_select.back1',
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
fieldLabel : '备用4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 't_product_select.back4',
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

