
	updateintegralexchangeReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'integralexchange.idNumber',
mapping : 'idNumber'
}
,{
name : 'integralexchange.idUser',
mapping : 'idUser'
}
,{
name : 'integralexchange.spendintegral',
mapping : 'spendintegral'
}
,{
name : 'integralexchange.exchangetime',
mapping : 'exchangetime'
}
,{
name : 'integralexchange.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'integralexchange.ts',
mapping : 'ts'
}
,{
name : 'integralexchange.dr',
mapping : 'dr'
}
,{
name : 'integralexchange.back1',
mapping : 'back1'
}
,{
name : 'integralexchange.back2',
mapping : 'back2'
}
,{
name : 'integralexchange.back3',
mapping : 'back3'
}
,{
name : 'integralexchange.back4',
mapping : 'back4'
}
,{
name : 'integralexchange.back5',
mapping : 'back5'
}
]
	);
		
	updateintegralexchangeForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateintegralexchangeReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '档案管理-积分兑换表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'integralexchange.idNumber',
width : '80%'
}
,{
fieldLabel : '兑换积分',
id : 'uppdate_spendintegral',
xtype : 'numberfield',
name : 'integralexchange.spendintegral',
width : '80%'
}
,{
fieldLabel : '兑换物品主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'integralexchange.idCommodity',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'integralexchange.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'integralexchange.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'integralexchange.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '兑换人主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'integralexchange.idUser',
width : '80%'
}
,{
fieldLabel : '兑换时间',
id : 'uppdate_exchangetime',
xtype : 'datetimefield',
name : 'integralexchange.exchangetime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'integralexchange.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'integralexchange.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'integralexchange.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'integralexchange.back5',
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
				check(updateintegralexchangeForm, "integralexchange_update.action", queryintegralexchangeStore, "修改信息")
				updateintegralexchangeWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateintegralexchangeWin.hide();
				updateintegralexchangeForm.form.reset();
			}
		}]
	});

	updateintegralexchangeWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateintegralexchangeForm
	});

	update = function() {
		_record = queryintegralexchangeGrid.getSelectionModel().getSelected();
		flag = queryintegralexchangeGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateintegralexchangeWin.show();
					
			updateintegralexchangeForm.getForm().load({
				url : 'integralexchange_findById.action?integralexchange.idNumber='+ _record.get('idNumber'),
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

