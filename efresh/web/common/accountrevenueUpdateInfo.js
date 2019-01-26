
	updateaccountrevenueReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'accountrevenue.idNumber',
mapping : 'idNumber'
}
,{
name : 'accountrevenue.revenueamount',
mapping : 'revenueamount'
}
,{
name : 'accountrevenue.revenueaource',
mapping : 'revenueaource'
}
,{
name : 'accountrevenue.idUser',
mapping : 'idUser'
}
,{
name : 'accountrevenue.idUseraccount',
mapping : 'idUseraccount'
}
,{
name : 'accountrevenue.idTradingrecords',
mapping : 'idTradingrecords'
}
,{
name : 'accountrevenue.ts',
mapping : 'ts'
}
,{
name : 'accountrevenue.dr',
mapping : 'dr'
}
,{
name : 'accountrevenue.back1',
mapping : 'back1'
}
,{
name : 'accountrevenue.back2',
mapping : 'back2'
}
,{
name : 'accountrevenue.back3',
mapping : 'back3'
}
,{
name : 'accountrevenue.back4',
mapping : 'back4'
}
,{
name : 'accountrevenue.back5',
mapping : 'back5'
}
]
	);
		
	updateaccountrevenueForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateaccountrevenueReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-收益表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'accountrevenue.idNumber',
width : '80%'
}
,{
fieldLabel : '收益来源，0=下订单并成功支付，1=充值虚拟货币',
id : 'uppdate_revenueaource',
xtype : 'numberfield',
name : 'accountrevenue.revenueaource',
width : '80%'
}
,{
fieldLabel : '账户主键',
id : 'uppdate_idUseraccount',
xtype : 'numberfield',
name : 'accountrevenue.idUseraccount',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'accountrevenue.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'accountrevenue.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'accountrevenue.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'accountrevenue.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '收益金额',
id : 'uppdate_revenueamount',
xtype : 'numberfield',
name : 'accountrevenue.revenueamount',
width : '80%'
}
,{
fieldLabel : '用户主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'accountrevenue.idUser',
width : '80%'
}
,{
fieldLabel : '用户交易记录表主键',
id : 'uppdate_idTradingrecords',
xtype : 'numberfield',
name : 'accountrevenue.idTradingrecords',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'accountrevenue.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'accountrevenue.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'accountrevenue.back4',
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
				check(updateaccountrevenueForm, "accountrevenue_update.action", queryaccountrevenueStore, "修改信息")
				updateaccountrevenueWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateaccountrevenueWin.hide();
				updateaccountrevenueForm.form.reset();
			}
		}]
	});

	updateaccountrevenueWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateaccountrevenueForm
	});

	update = function() {
		_record = queryaccountrevenueGrid.getSelectionModel().getSelected();
		flag = queryaccountrevenueGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateaccountrevenueWin.show();
					
			updateaccountrevenueForm.getForm().load({
				url : 'accountrevenue_findById.action?accountrevenue.idNumber='+ _record.get('idNumber'),
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

