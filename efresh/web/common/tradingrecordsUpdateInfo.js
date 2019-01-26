
	updatetradingrecordsReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'tradingrecords.idNumber',
mapping : 'idNumber'
}
,{
name : 'tradingrecords.idUser',
mapping : 'idUser'
}
,{
name : 'tradingrecords.idUseraccount',
mapping : 'idUseraccount'
}
,{
name : 'tradingrecords.idOrder',
mapping : 'idOrder'
}
,{
name : 'tradingrecords.idPayway',
mapping : 'idPayway'
}
,{
name : 'tradingrecords.tradingamount',
mapping : 'tradingamount'
}
,{
name : 'tradingrecords.tradingtype',
mapping : 'tradingtype'
}
,{
name : 'tradingrecords.tradingtime',
mapping : 'tradingtime'
}
,{
name : 'tradingrecords.tradingNo',
mapping : 'tradingNo'
}
,{
name : 'tradingrecords.note',
mapping : 'note'
}
,{
name : 'tradingrecords.tradingstatus',
mapping : 'tradingstatus'
}
,{
name : 'tradingrecords.ts',
mapping : 'ts'
}
,{
name : 'tradingrecords.dr',
mapping : 'dr'
}
,{
name : 'tradingrecords.back1',
mapping : 'back1'
}
,{
name : 'tradingrecords.back2',
mapping : 'back2'
}
,{
name : 'tradingrecords.back3',
mapping : 'back3'
}
,{
name : 'tradingrecords.back4',
mapping : 'back4'
}
,{
name : 'tradingrecords.back5',
mapping : 'back5'
}
]
	);
		
	updatetradingrecordsForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatetradingrecordsReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-用户账户交易记录表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'tradingrecords.idNumber',
width : '80%'
}
,{
fieldLabel : '账户主键',
id : 'uppdate_idUseraccount',
xtype : 'numberfield',
name : 'tradingrecords.idUseraccount',
width : '80%'
}
,{
fieldLabel : '支付方式表主键',
id : 'uppdate_idPayway',
xtype : 'numberfield',
name : 'tradingrecords.idPayway',
width : '80%'
}
,{
fieldLabel : '交易类型，0=充值，1=支出，2=退款，3=转出',
id : 'uppdate_tradingtype',
xtype : 'numberfield',
name : 'tradingrecords.tradingtype',
width : '80%'
}
,{
fieldLabel : '交易单号',
id : 'uppdate_tradingNo',
xtype : 'textfield',
name : 'tradingrecords.tradingNo',
width : '80%'
}
,{
fieldLabel : '交易状态，0=待审核，1=支付成功，2=支付失败',
id : 'uppdate_tradingstatus',
xtype : 'numberfield',
name : 'tradingrecords.tradingstatus',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'tradingrecords.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'tradingrecords.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'tradingrecords.back4',
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
name : 'tradingrecords.idUser',
width : '80%'
}
,{
fieldLabel : '订单主键，充值也是订单，购买商品也是订单，',
id : 'uppdate_idOrder',
xtype : 'numberfield',
name : 'tradingrecords.idOrder',
width : '80%'
}
,{
fieldLabel : '交易金额',
id : 'uppdate_tradingamount',
xtype : 'numberfield',
name : 'tradingrecords.tradingamount',
width : '80%'
}
,{
fieldLabel : '交易时间',
id : 'uppdate_tradingtime',
xtype : 'datetimefield',
name : 'tradingrecords.tradingtime',
anchor : '95%'
}
,{
fieldLabel : '备注',
id : 'uppdate_note',
xtype : 'textfield',
name : 'tradingrecords.note',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'tradingrecords.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'tradingrecords.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'tradingrecords.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'tradingrecords.back5',
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
				check(updatetradingrecordsForm, "tradingrecords_update.action", querytradingrecordsStore, "修改信息")
				updatetradingrecordsWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatetradingrecordsWin.hide();
				updatetradingrecordsForm.form.reset();
			}
		}]
	});

	updatetradingrecordsWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatetradingrecordsForm
	});

	update = function() {
		_record = querytradingrecordsGrid.getSelectionModel().getSelected();
		flag = querytradingrecordsGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatetradingrecordsWin.show();
					
			updatetradingrecordsForm.getForm().load({
				url : 'tradingrecords_findById.action?tradingrecords.idNumber='+ _record.get('idNumber'),
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

