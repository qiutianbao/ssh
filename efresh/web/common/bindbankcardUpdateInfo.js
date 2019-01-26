
	updatebindbankcardReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'bindbankcard.idNumber',
mapping : 'idNumber'
}
,{
name : 'bindbankcard.idUser',
mapping : 'idUser'
}
,{
name : 'bindbankcard.bankCardNo',
mapping : 'bankCardNo'
}
,{
name : 'bindbankcard.bankaccount',
mapping : 'bankaccount'
}
,{
name : 'bindbankcard.accountname',
mapping : 'accountname'
}
,{
name : 'bindbankcard.idcard',
mapping : 'idcard'
}
,{
name : 'bindbankcard.iphoneNo',
mapping : 'iphoneNo'
}
,{
name : 'bindbankcard.ts',
mapping : 'ts'
}
,{
name : 'bindbankcard.dr',
mapping : 'dr'
}
,{
name : 'bindbankcard.back1',
mapping : 'back1'
}
,{
name : 'bindbankcard.back2',
mapping : 'back2'
}
,{
name : 'bindbankcard.back3',
mapping : 'back3'
}
,{
name : 'bindbankcard.back4',
mapping : 'back4'
}
,{
name : 'bindbankcard.back5',
mapping : 'back5'
}
]
	);
		
	updatebindbankcardForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatebindbankcardReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-绑定银行卡表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'bindbankcard.idNumber',
width : '80%'
}
,{
fieldLabel : '银行卡号',
id : 'uppdate_bankCardNo',
xtype : 'textfield',
name : 'bindbankcard.bankCardNo',
width : '80%'
}
,{
fieldLabel : '姓名',
id : 'uppdate_accountname',
xtype : 'textfield',
name : 'bindbankcard.accountname',
width : '80%'
}
,{
fieldLabel : '银行预留手机号码',
id : 'uppdate_iphoneNo',
xtype : 'textfield',
name : 'bindbankcard.iphoneNo',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'bindbankcard.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'bindbankcard.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'bindbankcard.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'bindbankcard.idUser',
width : '80%'
}
,{
fieldLabel : '开户行',
id : 'uppdate_bankaccount',
xtype : 'textfield',
name : 'bindbankcard.bankaccount',
width : '80%'
}
,{
fieldLabel : '身份证号码',
id : 'uppdate_idcard',
xtype : 'textfield',
name : 'bindbankcard.idcard',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'bindbankcard.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'bindbankcard.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'bindbankcard.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'bindbankcard.back5',
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
				check(updatebindbankcardForm, "bindbankcard_update.action", querybindbankcardStore, "修改信息")
				updatebindbankcardWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatebindbankcardWin.hide();
				updatebindbankcardForm.form.reset();
			}
		}]
	});

	updatebindbankcardWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatebindbankcardForm
	});

	update = function() {
		_record = querybindbankcardGrid.getSelectionModel().getSelected();
		flag = querybindbankcardGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatebindbankcardWin.show();
					
			updatebindbankcardForm.getForm().load({
				url : 'bindbankcard_findById.action?bindbankcard.idNumber='+ _record.get('idNumber'),
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

