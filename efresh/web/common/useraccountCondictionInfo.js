
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
fieldLabel : '支付管理-用户账户表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'useraccount.idNumber',
width : '80%'
}
,{
fieldLabel : '用户主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'useraccount.idUser',
width : '80%'
}
,{
fieldLabel : '可用款余额，可用款交易类型为充值，交易状态为支付成功的才是可用款，收益全部都是可用款，可用款总额=审核通过后的账户可用款+收益金额',
id : 'select_availablemoney',
xtype : 'numberfield',
name : 'useraccount.availablemoney',
width : '80%'
}
,{
fieldLabel : '是否设置交易密码',
id : 'select_isSetpassword',
xtype : 'textfield',
name : 'useraccount.isSetpassword',
width : '80%'
}
,{
fieldLabel : '创建账户时间',
id : 'select_creationtime',
xtype : 'datetimefield',
name : 'useraccount.creationtime',
anchor : '95%'
}
,{
fieldLabel : '修改交易密码时间',
id : 'select_modifypaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.modifypaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '是否冻结',
id : 'select_isfrozen',
xtype : 'textfield',
name : 'useraccount.isfrozen',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'useraccount.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'useraccount.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'useraccount.back4',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '账号，按一定规则给一个唯一账号，建议与用户主键做组合索引',
id : 'select_account',
xtype : 'textfield',
name : 'useraccount.account',
width : '80%'
}
,{
fieldLabel : '账户余额，账户总余额=账户余额+收益金额',
id : 'select_balance',
xtype : 'numberfield',
name : 'useraccount.balance',
width : '80%'
}
,{
fieldLabel : '不可用款，就是交易状态为：待审核的，交易类型为充值的都是不可用款',
id : 'select_notavailablemoney',
xtype : 'numberfield',
name : 'useraccount.notavailablemoney',
width : '80%'
}
,{
fieldLabel : '交易密码',
id : 'select_paypassword',
xtype : 'textfield',
name : 'useraccount.paypassword',
width : '80%'
}
,{
fieldLabel : '设置交易密码时间',
id : 'select_setpaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.setpaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '上次修改交易密码时间',
id : 'select_upmodifypaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.upmodifypaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'useraccount.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'useraccount.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'useraccount.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'useraccount.back5',
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
queryuseraccountStore.proxy = new Ext.data.HttpProxy({
url : 'useraccount_findInfoByConditions.action?'
+'useraccount.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&useraccount.account='
+ Ext.getCmp('select_account').getValue()
+'&useraccount.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&useraccount.balance='
+ Ext.getCmp('select_balance').getValue()
+'&useraccount.availablemoney='
+ Ext.getCmp('select_availablemoney').getValue()
+'&useraccount.notavailablemoney='
+ Ext.getCmp('select_notavailablemoney').getValue()
+'&useraccount.isSetpassword='
+ Ext.getCmp('select_isSetpassword').getValue()
+'&useraccount.paypassword='
+ Ext.getCmp('select_paypassword').getValue()
+'&useraccount.creationtime='
+ Ext.getCmp('select_creationtime').getValue()
+'&useraccount.setpaypwdtime='
+ Ext.getCmp('select_setpaypwdtime').getValue()
+'&useraccount.modifypaypwdtime='
+ Ext.getCmp('select_modifypaypwdtime').getValue()
+'&useraccount.upmodifypaypwdtime='
+ Ext.getCmp('select_upmodifypaypwdtime').getValue()
+'&useraccount.isfrozen='
+ Ext.getCmp('select_isfrozen').getValue()
+'&useraccount.ts='
+ Ext.getCmp('select_ts').getValue()
+'&useraccount.dr='
+ Ext.getCmp('select_dr').getValue()
+'&useraccount.back1='
+ Ext.getCmp('select_back1').getValue()
+'&useraccount.back2='
+ Ext.getCmp('select_back2').getValue()
+'&useraccount.back3='
+ Ext.getCmp('select_back3').getValue()
+'&useraccount.back4='
+ Ext.getCmp('select_back4').getValue()
+'&useraccount.back5='
+ Ext.getCmp('select_back5').getValue()
});
	queryuseraccountStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});