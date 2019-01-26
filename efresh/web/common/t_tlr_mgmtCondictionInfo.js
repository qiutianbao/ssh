
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
fieldLabel : '',
id : 'select_idNumber',
xtype : 'numberfield',
name : 't_tlr_mgmt.idNumber',
width : '80%'
}
,{
fieldLabel : '用户名称',
id : 'select_tlr_name',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_name',
width : '80%'
}
,{
fieldLabel : '用户类型、0=买家、1=卖家、2=系统用户',
id : 'select_tlr_type',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_type',
width : '80%'
}
,{
fieldLabel : '密码',
id : 'select_tlr_pwd',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_pwd',
width : '80%'
}
,{
fieldLabel : '收货地址',
id : 'select_deliveryaddress',
xtype : 'textfield',
name : 't_tlr_mgmt.deliveryaddress',
width : '80%'
}
,{
fieldLabel : '注册时间',
id : 'select_creationtime',
xtype : 'datetimefield',
name : 't_tlr_mgmt.creationtime',
anchor : '95%'
}
,{
fieldLabel : '审核是否通过,0表示待审批，1表示审批通过，2表示审批未通过',
id : 'select_examine',
xtype : 'textfield',
name : 't_tlr_mgmt.examine',
width : '80%'
}
,{
fieldLabel : '最近修改人',
id : 'select_lst_modify_tlr',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_modify_tlr',
width : '80%'
}
,{
fieldLabel : '申请收货地址',
id : 'select_deliveryaddress2',
xtype : 'textfield',
name : 't_tlr_mgmt.deliveryaddress2',
width : '80%'
}
,{
fieldLabel : '地址修改时间',
id : 'select_addresss_upts',
xtype : 'textfield',
name : 't_tlr_mgmt.addresss_upts',
width : '80%'
}
,{
fieldLabel : '备用1',
id : 'select_back1',
xtype : 'textfield',
name : 't_tlr_mgmt.back1',
width : '80%'
}
,{
fieldLabel : '备用3',
id : 'select_back3',
xtype : 'numberfield',
name : 't_tlr_mgmt.back3',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '手机号',
id : 'select_phone',
xtype : 'textfield',
name : 't_tlr_mgmt.phone',
width : '80%'
}
,{
fieldLabel : '机构编号',
id : 'select_inst_no',
xtype : 'textfield',
name : 't_tlr_mgmt.inst_no',
width : '80%'
}
,{
fieldLabel : '用户状态',
id : 'select_tlr_stat',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_stat',
width : '80%'
}
,{
fieldLabel : '是否锁定',
id : 'select_islock',
xtype : 'textfield',
name : 't_tlr_mgmt.islock',
width : '80%'
}
,{
fieldLabel : '档口名称',
id : 'select_stallsname',
xtype : 'textfield',
name : 't_tlr_mgmt.stallsname',
width : '80%'
}
,{
fieldLabel : '用户logo',
id : 'select_userlogo',
xtype : 'textfield',
name : 't_tlr_mgmt.userlogo',
width : '80%'
}
,{
fieldLabel : '最近密码修改时间',
id : 'select_lst_pwd_date',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_pwd_date',
width : '80%'
}
,{
fieldLabel : '最近修改时间',
id : 'select_lst_modify_date',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_modify_date',
width : '80%'
}
,{
fieldLabel : '地址修改审核状态 0审核中 1审核通过 2审核未通过',
id : 'select_address_status',
xtype : 'textfield',
name : 't_tlr_mgmt.address_status',
width : '80%'
}
,{
fieldLabel : '删除标识 1删除 0h或者null没删除',
id : 'select_dr',
xtype : 'numberfield',
name : 't_tlr_mgmt.dr',
width : '80%'
}
,{
fieldLabel : '备用2',
id : 'select_back2',
xtype : 'textfield',
name : 't_tlr_mgmt.back2',
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
queryt_tlr_mgmtStore.proxy = new Ext.data.HttpProxy({
url : 't_tlr_mgmt_findInfoByConditions.action?'
+'t_tlr_mgmt.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&t_tlr_mgmt.phone='
+ Ext.getCmp('select_phone').getValue()
+'&t_tlr_mgmt.tlr_name='
+ Ext.getCmp('select_tlr_name').getValue()
+'&t_tlr_mgmt.inst_no='
+ Ext.getCmp('select_inst_no').getValue()
+'&t_tlr_mgmt.tlr_type='
+ Ext.getCmp('select_tlr_type').getValue()
+'&t_tlr_mgmt.tlr_stat='
+ Ext.getCmp('select_tlr_stat').getValue()
+'&t_tlr_mgmt.tlr_pwd='
+ Ext.getCmp('select_tlr_pwd').getValue()
+'&t_tlr_mgmt.islock='
+ Ext.getCmp('select_islock').getValue()
+'&t_tlr_mgmt.deliveryaddress='
+ Ext.getCmp('select_deliveryaddress').getValue()
+'&t_tlr_mgmt.stallsname='
+ Ext.getCmp('select_stallsname').getValue()
+'&t_tlr_mgmt.creationtime='
+ Ext.getCmp('select_creationtime').getValue()
+'&t_tlr_mgmt.userlogo='
+ Ext.getCmp('select_userlogo').getValue()
+'&t_tlr_mgmt.examine='
+ Ext.getCmp('select_examine').getValue()
+'&t_tlr_mgmt.lst_pwd_date='
+ Ext.getCmp('select_lst_pwd_date').getValue()
+'&t_tlr_mgmt.lst_modify_tlr='
+ Ext.getCmp('select_lst_modify_tlr').getValue()
+'&t_tlr_mgmt.lst_modify_date='
+ Ext.getCmp('select_lst_modify_date').getValue()
+'&t_tlr_mgmt.deliveryaddress2='
+ Ext.getCmp('select_deliveryaddress2').getValue()
+'&t_tlr_mgmt.address_status='
+ Ext.getCmp('select_address_status').getValue()
+'&t_tlr_mgmt.addresss_upts='
+ Ext.getCmp('select_addresss_upts').getValue()
+'&t_tlr_mgmt.dr='
+ Ext.getCmp('select_dr').getValue()
+'&t_tlr_mgmt.back1='
+ Ext.getCmp('select_back1').getValue()
+'&t_tlr_mgmt.back2='
+ Ext.getCmp('select_back2').getValue()
+'&t_tlr_mgmt.back3='
+ Ext.getCmp('select_back3').getValue()
});
	queryt_tlr_mgmtStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});