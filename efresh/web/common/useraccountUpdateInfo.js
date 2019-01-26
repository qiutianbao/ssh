
	updateuseraccountReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'useraccount.idNumber',
mapping : 'idNumber'
}
,{
name : 'useraccount.account',
mapping : 'account'
}
,{
name : 'useraccount.idUser',
mapping : 'idUser'
}
,{
name : 'useraccount.balance',
mapping : 'balance'
}
,{
name : 'useraccount.availablemoney',
mapping : 'availablemoney'
}
,{
name : 'useraccount.notavailablemoney',
mapping : 'notavailablemoney'
}
,{
name : 'useraccount.isSetpassword',
mapping : 'isSetpassword'
}
,{
name : 'useraccount.paypassword',
mapping : 'paypassword'
}
,{
name : 'useraccount.creationtime',
mapping : 'creationtime'
}
,{
name : 'useraccount.setpaypwdtime',
mapping : 'setpaypwdtime'
}
,{
name : 'useraccount.modifypaypwdtime',
mapping : 'modifypaypwdtime'
}
,{
name : 'useraccount.upmodifypaypwdtime',
mapping : 'upmodifypaypwdtime'
}
,{
name : 'useraccount.isfrozen',
mapping : 'isfrozen'
}
,{
name : 'useraccount.ts',
mapping : 'ts'
}
,{
name : 'useraccount.dr',
mapping : 'dr'
}
,{
name : 'useraccount.back1',
mapping : 'back1'
}
,{
name : 'useraccount.back2',
mapping : 'back2'
}
,{
name : 'useraccount.back3',
mapping : 'back3'
}
,{
name : 'useraccount.back4',
mapping : 'back4'
}
,{
name : 'useraccount.back5',
mapping : 'back5'
}
]
	);
		
	updateuseraccountForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateuseraccountReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-用户账户表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'useraccount.idNumber',
width : '80%'
}
,{
fieldLabel : '用户主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'useraccount.idUser',
width : '80%'
}
,{
fieldLabel : '可用款余额，可用款交易类型为充值，交易状态为支付成功的才是可用款，收益全部都是可用款，可用款总额=审核通过后的账户可用款+收益金额',
id : 'uppdate_availablemoney',
xtype : 'numberfield',
name : 'useraccount.availablemoney',
width : '80%'
}
,{
fieldLabel : '是否设置交易密码',
id : 'uppdate_isSetpassword',
xtype : 'textfield',
name : 'useraccount.isSetpassword',
width : '80%'
}
,{
fieldLabel : '创建账户时间',
id : 'uppdate_creationtime',
xtype : 'datetimefield',
name : 'useraccount.creationtime',
anchor : '95%'
}
,{
fieldLabel : '修改交易密码时间',
id : 'uppdate_modifypaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.modifypaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '是否冻结',
id : 'uppdate_isfrozen',
xtype : 'textfield',
name : 'useraccount.isfrozen',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'useraccount.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'useraccount.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'useraccount.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '账号，按一定规则给一个唯一账号，建议与用户主键做组合索引',
id : 'uppdate_account',
xtype : 'textfield',
name : 'useraccount.account',
width : '80%'
}
,{
fieldLabel : '账户余额，账户总余额=账户余额+收益金额',
id : 'uppdate_balance',
xtype : 'numberfield',
name : 'useraccount.balance',
width : '80%'
}
,{
fieldLabel : '不可用款，就是交易状态为：待审核的，交易类型为充值的都是不可用款',
id : 'uppdate_notavailablemoney',
xtype : 'numberfield',
name : 'useraccount.notavailablemoney',
width : '80%'
}
,{
fieldLabel : '交易密码',
id : 'uppdate_paypassword',
xtype : 'textfield',
name : 'useraccount.paypassword',
width : '80%'
}
,{
fieldLabel : '设置交易密码时间',
id : 'uppdate_setpaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.setpaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '上次修改交易密码时间',
id : 'uppdate_upmodifypaypwdtime',
xtype : 'datetimefield',
name : 'useraccount.upmodifypaypwdtime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'useraccount.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'useraccount.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'useraccount.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'useraccount.back5',
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
				check(updateuseraccountForm, "useraccount_update.action", queryuseraccountStore, "修改信息")
				updateuseraccountWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateuseraccountWin.hide();
				updateuseraccountForm.form.reset();
			}
		}]
	});

	updateuseraccountWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateuseraccountForm
	});

	update = function() {
		_record = queryuseraccountGrid.getSelectionModel().getSelected();
		flag = queryuseraccountGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateuseraccountWin.show();
					
			updateuseraccountForm.getForm().load({
				url : 'useraccount_findById.action?useraccount.idNumber='+ _record.get('idNumber'),
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

