
	updaterebatewayReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'rebateway.idNumber',
mapping : 'idNumber'
}
,{
name : 'rebateway.suppMoney',
mapping : 'suppMoney'
}
,{
name : 'rebateway.rebateway',
mapping : 'rebateway'
}
,{
name : 'rebateway.proportionStart',
mapping : 'proportionStart'
}
,{
name : 'rebateway.proportionEnd',
mapping : 'proportionEnd'
}
,{
name : 'rebateway.upperlimit',
mapping : 'upperlimit'
}
,{
name : 'rebateway.ts',
mapping : 'ts'
}
,{
name : 'rebateway.dr',
mapping : 'dr'
}
,{
name : 'rebateway.back1',
mapping : 'back1'
}
,{
name : 'rebateway.back2',
mapping : 'back2'
}
,{
name : 'rebateway.back3',
mapping : 'back3'
}
,{
name : 'rebateway.back4',
mapping : 'back4'
}
,{
name : 'rebateway.back5',
mapping : 'back5'
}
]
	);
		
	updaterebatewayForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updaterebatewayReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'rebateway.idNumber',
width : '80%'
}
,{
fieldLabel : '返利方式',
id : 'uppdate_rebateway',
xtype : 'numberfield',
name : 'rebateway.rebateway',
width : '80%'
}
,{
fieldLabel : '返利比例上限',
id : 'uppdate_proportionEnd',
xtype : 'numberfield',
name : 'rebateway.proportionEnd',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'rebateway.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'rebateway.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'rebateway.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'rebateway.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '充值金额',
id : 'uppdate_suppMoney',
xtype : 'numberfield',
name : 'rebateway.suppMoney',
width : '80%'
}
,{
fieldLabel : '返利比例下限',
id : 'uppdate_proportionStart',
xtype : 'numberfield',
name : 'rebateway.proportionStart',
width : '80%'
}
,{
fieldLabel : '返利金额上限',
id : 'uppdate_upperlimit',
xtype : 'numberfield',
name : 'rebateway.upperlimit',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'rebateway.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'rebateway.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'rebateway.back4',
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
				check(updaterebatewayForm, "rebateway_update.action", queryrebatewayStore, "修改信息")
				updaterebatewayWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updaterebatewayWin.hide();
				updaterebatewayForm.form.reset();
			}
		}]
	});

	updaterebatewayWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updaterebatewayForm
	});

	update = function() {
		_record = queryrebatewayGrid.getSelectionModel().getSelected();
		flag = queryrebatewayGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updaterebatewayWin.show();
					
			updaterebatewayForm.getForm().load({
				url : 'rebateway_findById.action?rebateway.idNumber='+ _record.get('idNumber'),
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

