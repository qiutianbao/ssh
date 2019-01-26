
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
xtype : 'numberfield',
name : 'estore.idNumber',
width : '80%'
}
,{
fieldLabel : '企业名字',
id : 'select_corpname',
xtype : 'textfield',
name : 'estore.corpname',
width : '80%'
}
,{
fieldLabel : '组织机构代码证',
id : 'select_organization',
xtype : 'textfield',
name : 'estore.organization',
width : '80%'
}
,{
fieldLabel : '法人名字',
id : 'select_legalname',
xtype : 'textfield',
name : 'estore.legalname',
width : '80%'
}
,{
fieldLabel : '证件截止有效期',
id : 'select_validtime',
xtype : 'textfield',
name : 'estore.validtime',
width : '80%'
}
,{
fieldLabel : '法人QQ号',
id : 'select_legalqq',
xtype : 'textfield',
name : 'estore.legalqq',
width : '80%'
}
,{
fieldLabel : '企业营业执照副本图',
id : 'select_businesslic',
xtype : 'textfield',
name : 'estore.businesslic',
width : '80%'
}
,{
fieldLabel : '法人身份证反面图',
id : 'select_idopposite',
xtype : 'textfield',
name : 'estore.idopposite',
width : '80%'
}
,{
fieldLabel : '开户银行',
id : 'select_accountbank',
xtype : 'textfield',
name : 'estore.accountbank',
width : '80%'
}
,{
fieldLabel : '银行账户',
id : 'select_bankaccount',
xtype : 'textfield',
name : 'estore.bankaccount',
width : '80%'
}
,{
fieldLabel : '处理订单时间',
id : 'select_handleordertime',
xtype : 'datetimefield',
name : 'estore.handleordertime',
anchor : '95%'
}
,{
fieldLabel : '登录密码',
id : 'select_password',
xtype : 'textfield',
name : 'estore.password',
width : '80%'
}
,{
fieldLabel : '联系人电话',
id : 'select_contactphoneNo',
xtype : 'textfield',
name : 'estore.contactphoneNo',
width : '80%'
}
,{
fieldLabel : '联系人微信',
id : 'select_contactwechat',
xtype : 'textfield',
name : 'estore.contactwechat',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'select_ts',
xtype : 'textfield',
name : 'estore.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'select_back1',
xtype : 'textfield',
name : 'estore.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'select_back3',
xtype : 'textfield',
name : 'estore.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'select_back5',
xtype : 'numberfield',
name : 'estore.back5',
width : '80%'
}
,{
fieldLabel : '是否停运',
id : 'select_isStop',
xtype : 'textfield',
name : 'estore.isStop',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '企业logo图片名称',
id : 'select_corplogo',
xtype : 'textfield',
name : 'estore.corplogo',
width : '80%'
}
,{
fieldLabel : '注册号',
id : 'select_creationNo',
xtype : 'textfield',
name : 'estore.creationNo',
width : '80%'
}
,{
fieldLabel : '产地详细地址',
id : 'select_address',
xtype : 'textfield',
name : 'estore.address',
width : '80%'
}
,{
fieldLabel : '法人身份证号码',
id : 'select_id',
xtype : 'textfield',
name : 'estore.id',
width : '80%'
}
,{
fieldLabel : '法人手机号',
id : 'select_legalphoneNo',
xtype : 'textfield',
name : 'estore.legalphoneNo',
width : '80%'
}
,{
fieldLabel : '法人微信号',
id : 'select_legalwechat',
xtype : 'textfield',
name : 'estore.legalwechat',
width : '80%'
}
,{
fieldLabel : '法人身份证正面图',
id : 'select_idpositive',
xtype : 'textfield',
name : 'estore.idpositive',
width : '80%'
}
,{
fieldLabel : '银行开户名',
id : 'select_accountname',
xtype : 'textfield',
name : 'estore.accountname',
width : '80%'
}
,{
fieldLabel : '银行所在地',
id : 'select_bankaddress',
xtype : 'textfield',
name : 'estore.bankaddress',
width : '80%'
}
,{
fieldLabel : '最迟确认订单时间',
id : 'select_validordertime',
xtype : 'datetimefield',
name : 'estore.validordertime',
anchor : '95%'
}
,{
fieldLabel : '最快到货时间',
id : 'select_deliverytime',
xtype : 'datetimefield',
name : 'estore.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '联系人名字',
id : 'select_contactname',
xtype : 'textfield',
name : 'estore.contactname',
width : '80%'
}
,{
fieldLabel : '联系人QQ',
id : 'select_contactqq',
xtype : 'textfield',
name : 'estore.contactqq',
width : '80%'
}
,{
fieldLabel : '注册时间',
id : 'select_creationtime',
xtype : 'datetimefield',
name : 'estore.creationtime',
anchor : '95%'
}
,{
fieldLabel : '删除标识',
id : 'select_dr',
xtype : 'numberfield',
name : 'estore.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'select_back2',
xtype : 'textfield',
name : 'estore.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'select_back4',
xtype : 'textfield',
name : 'estore.back4',
width : '80%'
}
,{
fieldLabel : '用户表主键',
id : 'select_userid',
xtype : 'numberfield',
name : 'estore.userid',
width : '80%'
}
,{
fieldLabel : '是否自营店铺',
id : 'select_selftsales',
xtype : 'textfield',
name : 'estore.selftsales',
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
queryestoreStore.proxy = new Ext.data.HttpProxy({
url : 'estore_findInfoByConditions.action?'
+'estore.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&estore.corplogo='
+ Ext.getCmp('select_corplogo').getValue()
+'&estore.corpname='
+ Ext.getCmp('select_corpname').getValue()
+'&estore.creationNo='
+ Ext.getCmp('select_creationNo').getValue()
+'&estore.organization='
+ Ext.getCmp('select_organization').getValue()
+'&estore.address='
+ Ext.getCmp('select_address').getValue()
+'&estore.legalname='
+ Ext.getCmp('select_legalname').getValue()
+'&estore.id='
+ Ext.getCmp('select_id').getValue()
+'&estore.validtime='
+ Ext.getCmp('select_validtime').getValue()
+'&estore.legalphoneNo='
+ Ext.getCmp('select_legalphoneNo').getValue()
+'&estore.legalqq='
+ Ext.getCmp('select_legalqq').getValue()
+'&estore.legalwechat='
+ Ext.getCmp('select_legalwechat').getValue()
+'&estore.businesslic='
+ Ext.getCmp('select_businesslic').getValue()
+'&estore.idpositive='
+ Ext.getCmp('select_idpositive').getValue()
+'&estore.idopposite='
+ Ext.getCmp('select_idopposite').getValue()
+'&estore.accountname='
+ Ext.getCmp('select_accountname').getValue()
+'&estore.accountbank='
+ Ext.getCmp('select_accountbank').getValue()
+'&estore.bankaddress='
+ Ext.getCmp('select_bankaddress').getValue()
+'&estore.bankaccount='
+ Ext.getCmp('select_bankaccount').getValue()
+'&estore.validordertime='
+ Ext.getCmp('select_validordertime').getValue()
+'&estore.handleordertime='
+ Ext.getCmp('select_handleordertime').getValue()
+'&estore.deliverytime='
+ Ext.getCmp('select_deliverytime').getValue()
+'&estore.password='
+ Ext.getCmp('select_password').getValue()
+'&estore.contactname='
+ Ext.getCmp('select_contactname').getValue()
+'&estore.contactphoneNo='
+ Ext.getCmp('select_contactphoneNo').getValue()
+'&estore.contactqq='
+ Ext.getCmp('select_contactqq').getValue()
+'&estore.contactwechat='
+ Ext.getCmp('select_contactwechat').getValue()
+'&estore.creationtime='
+ Ext.getCmp('select_creationtime').getValue()
+'&estore.ts='
+ Ext.getCmp('select_ts').getValue()
+'&estore.dr='
+ Ext.getCmp('select_dr').getValue()
+'&estore.back1='
+ Ext.getCmp('select_back1').getValue()
+'&estore.back2='
+ Ext.getCmp('select_back2').getValue()
+'&estore.back3='
+ Ext.getCmp('select_back3').getValue()
+'&estore.back4='
+ Ext.getCmp('select_back4').getValue()
+'&estore.back5='
+ Ext.getCmp('select_back5').getValue()
+'&estore.userid='
+ Ext.getCmp('select_userid').getValue()
+'&estore.isStop='
+ Ext.getCmp('select_isStop').getValue()
+'&estore.selftsales='
+ Ext.getCmp('select_selftsales').getValue()
});
	queryestoreStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});