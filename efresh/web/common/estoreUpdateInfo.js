
	updateestoreReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'estore.idNumber',
mapping : 'idNumber'
}
,{
name : 'estore.corplogo',
mapping : 'corplogo'
}
,{
name : 'estore.corpname',
mapping : 'corpname'
}
,{
name : 'estore.creationNo',
mapping : 'creationNo'
}
,{
name : 'estore.organization',
mapping : 'organization'
}
,{
name : 'estore.address',
mapping : 'address'
}
,{
name : 'estore.legalname',
mapping : 'legalname'
}
,{
name : 'estore.id',
mapping : 'id'
}
,{
name : 'estore.validtime',
mapping : 'validtime'
}
,{
name : 'estore.legalphoneNo',
mapping : 'legalphoneNo'
}
,{
name : 'estore.legalqq',
mapping : 'legalqq'
}
,{
name : 'estore.legalwechat',
mapping : 'legalwechat'
}
,{
name : 'estore.businesslic',
mapping : 'businesslic'
}
,{
name : 'estore.idpositive',
mapping : 'idpositive'
}
,{
name : 'estore.idopposite',
mapping : 'idopposite'
}
,{
name : 'estore.accountname',
mapping : 'accountname'
}
,{
name : 'estore.accountbank',
mapping : 'accountbank'
}
,{
name : 'estore.bankaddress',
mapping : 'bankaddress'
}
,{
name : 'estore.bankaccount',
mapping : 'bankaccount'
}
,{
name : 'estore.validordertime',
mapping : 'validordertime'
}
,{
name : 'estore.handleordertime',
mapping : 'handleordertime'
}
,{
name : 'estore.deliverytime',
mapping : 'deliverytime'
}
,{
name : 'estore.password',
mapping : 'password'
}
,{
name : 'estore.contactname',
mapping : 'contactname'
}
,{
name : 'estore.contactphoneNo',
mapping : 'contactphoneNo'
}
,{
name : 'estore.contactqq',
mapping : 'contactqq'
}
,{
name : 'estore.contactwechat',
mapping : 'contactwechat'
}
,{
name : 'estore.creationtime',
mapping : 'creationtime'
}
,{
name : 'estore.ts',
mapping : 'ts'
}
,{
name : 'estore.dr',
mapping : 'dr'
}
,{
name : 'estore.back1',
mapping : 'back1'
}
,{
name : 'estore.back2',
mapping : 'back2'
}
,{
name : 'estore.back3',
mapping : 'back3'
}
,{
name : 'estore.back4',
mapping : 'back4'
}
,{
name : 'estore.back5',
mapping : 'back5'
}
,{
name : 'estore.userid',
mapping : 'userid'
}
,{
name : 'estore.isStop',
mapping : 'isStop'
}
,{
name : 'estore.selftsales',
mapping : 'selftsales'
}
]
	);
		
	updateestoreForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateestoreReader,
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
xtype : 'numberfield',
name : 'estore.idNumber',
width : '80%'
}
,{
fieldLabel : '企业名字',
id : 'uppdate_corpname',
xtype : 'textfield',
name : 'estore.corpname',
width : '80%'
}
,{
fieldLabel : '组织机构代码证',
id : 'uppdate_organization',
xtype : 'textfield',
name : 'estore.organization',
width : '80%'
}
,{
fieldLabel : '法人名字',
id : 'uppdate_legalname',
xtype : 'textfield',
name : 'estore.legalname',
width : '80%'
}
,{
fieldLabel : '证件截止有效期',
id : 'uppdate_validtime',
xtype : 'textfield',
name : 'estore.validtime',
width : '80%'
}
,{
fieldLabel : '法人QQ号',
id : 'uppdate_legalqq',
xtype : 'textfield',
name : 'estore.legalqq',
width : '80%'
}
,{
fieldLabel : '企业营业执照副本图',
id : 'uppdate_businesslic',
xtype : 'textfield',
name : 'estore.businesslic',
width : '80%'
}
,{
fieldLabel : '法人身份证反面图',
id : 'uppdate_idopposite',
xtype : 'textfield',
name : 'estore.idopposite',
width : '80%'
}
,{
fieldLabel : '开户银行',
id : 'uppdate_accountbank',
xtype : 'textfield',
name : 'estore.accountbank',
width : '80%'
}
,{
fieldLabel : '银行账户',
id : 'uppdate_bankaccount',
xtype : 'textfield',
name : 'estore.bankaccount',
width : '80%'
}
,{
fieldLabel : '处理订单时间',
id : 'uppdate_handleordertime',
xtype : 'datetimefield',
name : 'estore.handleordertime',
anchor : '95%'
}
,{
fieldLabel : '登录密码',
id : 'uppdate_password',
xtype : 'textfield',
name : 'estore.password',
width : '80%'
}
,{
fieldLabel : '联系人电话',
id : 'uppdate_contactphoneNo',
xtype : 'textfield',
name : 'estore.contactphoneNo',
width : '80%'
}
,{
fieldLabel : '联系人微信',
id : 'uppdate_contactwechat',
xtype : 'textfield',
name : 'estore.contactwechat',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'estore.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'estore.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'estore.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'estore.back5',
width : '80%'
}
,{
fieldLabel : '是否停运',
id : 'uppdate_isStop',
xtype : 'textfield',
name : 'estore.isStop',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '企业logo图片名称',
id : 'uppdate_corplogo',
xtype : 'textfield',
name : 'estore.corplogo',
width : '80%'
}
,{
fieldLabel : '注册号',
id : 'uppdate_creationNo',
xtype : 'textfield',
name : 'estore.creationNo',
width : '80%'
}
,{
fieldLabel : '产地详细地址',
id : 'uppdate_address',
xtype : 'textfield',
name : 'estore.address',
width : '80%'
}
,{
fieldLabel : '法人身份证号码',
id : 'uppdate_id',
xtype : 'textfield',
name : 'estore.id',
width : '80%'
}
,{
fieldLabel : '法人手机号',
id : 'uppdate_legalphoneNo',
xtype : 'textfield',
name : 'estore.legalphoneNo',
width : '80%'
}
,{
fieldLabel : '法人微信号',
id : 'uppdate_legalwechat',
xtype : 'textfield',
name : 'estore.legalwechat',
width : '80%'
}
,{
fieldLabel : '法人身份证正面图',
id : 'uppdate_idpositive',
xtype : 'textfield',
name : 'estore.idpositive',
width : '80%'
}
,{
fieldLabel : '银行开户名',
id : 'uppdate_accountname',
xtype : 'textfield',
name : 'estore.accountname',
width : '80%'
}
,{
fieldLabel : '银行所在地',
id : 'uppdate_bankaddress',
xtype : 'textfield',
name : 'estore.bankaddress',
width : '80%'
}
,{
fieldLabel : '最迟确认订单时间',
id : 'uppdate_validordertime',
xtype : 'datetimefield',
name : 'estore.validordertime',
anchor : '95%'
}
,{
fieldLabel : '最快到货时间',
id : 'uppdate_deliverytime',
xtype : 'datetimefield',
name : 'estore.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '联系人名字',
id : 'uppdate_contactname',
xtype : 'textfield',
name : 'estore.contactname',
width : '80%'
}
,{
fieldLabel : '联系人QQ',
id : 'uppdate_contactqq',
xtype : 'textfield',
name : 'estore.contactqq',
width : '80%'
}
,{
fieldLabel : '注册时间',
id : 'uppdate_creationtime',
xtype : 'datetimefield',
name : 'estore.creationtime',
anchor : '95%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'estore.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'estore.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'estore.back4',
width : '80%'
}
,{
fieldLabel : '用户表主键',
id : 'uppdate_userid',
xtype : 'numberfield',
name : 'estore.userid',
width : '80%'
}
,{
fieldLabel : '是否自营店铺',
id : 'uppdate_selftsales',
xtype : 'textfield',
name : 'estore.selftsales',
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
				check(updateestoreForm, "estore_update.action", queryestoreStore, "修改信息")
				updateestoreWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateestoreWin.hide();
				updateestoreForm.form.reset();
			}
		}]
	});

	updateestoreWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateestoreForm
	});

	update = function() {
		_record = queryestoreGrid.getSelectionModel().getSelected();
		flag = queryestoreGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateestoreWin.show();
					
			updateestoreForm.getForm().load({
				url : 'estore_findById.action?estore.idNumber='+ _record.get('idNumber'),
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

