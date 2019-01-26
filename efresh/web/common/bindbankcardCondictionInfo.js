
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
fieldLabel : '支付管理-绑定银行卡表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'bindbankcard.idNumber',
width : '80%'
}
,{
fieldLabel : '银行卡号',
id : 'select_bankCardNo',
xtype : 'textfield',
name : 'bindbankcard.bankCardNo',
width : '80%'
}
,{
fieldLabel : '姓名',
id : 'select_accountname',
xtype : 'textfield',
name : 'bindbankcard.accountname',
width : '80%'
}
,{
fieldLabel : '银行预留手机号码',
id : 'select_iphoneNo',
xtype : 'textfield',
name : 'bindbankcard.iphoneNo',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'bindbankcard.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'bindbankcard.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'bindbankcard.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'bindbankcard.idUser',
width : '80%'
}
,{
fieldLabel : '开户行',
id : 'select_bankaccount',
xtype : 'textfield',
name : 'bindbankcard.bankaccount',
width : '80%'
}
,{
fieldLabel : '身份证号码',
id : 'select_idcard',
xtype : 'textfield',
name : 'bindbankcard.idcard',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'bindbankcard.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'bindbankcard.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'bindbankcard.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'bindbankcard.back5',
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
querybindbankcardStore.proxy = new Ext.data.HttpProxy({
url : 'bindbankcard_findInfoByConditions.action?'
+'bindbankcard.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&bindbankcard.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&bindbankcard.bankCardNo='
+ Ext.getCmp('select_bankCardNo').getValue()
+'&bindbankcard.bankaccount='
+ Ext.getCmp('select_bankaccount').getValue()
+'&bindbankcard.accountname='
+ Ext.getCmp('select_accountname').getValue()
+'&bindbankcard.idcard='
+ Ext.getCmp('select_idcard').getValue()
+'&bindbankcard.iphoneNo='
+ Ext.getCmp('select_iphoneNo').getValue()
+'&bindbankcard.ts='
+ Ext.getCmp('select_ts').getValue()
+'&bindbankcard.dr='
+ Ext.getCmp('select_dr').getValue()
+'&bindbankcard.back1='
+ Ext.getCmp('select_back1').getValue()
+'&bindbankcard.back2='
+ Ext.getCmp('select_back2').getValue()
+'&bindbankcard.back3='
+ Ext.getCmp('select_back3').getValue()
+'&bindbankcard.back4='
+ Ext.getCmp('select_back4').getValue()
+'&bindbankcard.back5='
+ Ext.getCmp('select_back5').getValue()
});
	querybindbankcardStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});