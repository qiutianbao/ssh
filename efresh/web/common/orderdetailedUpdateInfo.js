
	updateorderdetailedReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'orderdetailed.idNumber',
mapping : 'idNumber'
}
,{
name : 'orderdetailed.idOrderNo',
mapping : 'idOrderNo'
}
,{
name : 'orderdetailed.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'orderdetailed.buynumber',
mapping : 'buynumber'
}
,{
name : 'orderdetailed.idLevel',
mapping : 'idLevel'
}
,{
name : 'orderdetailed.buyprice',
mapping : 'buyprice'
}
,{
name : 'orderdetailed.ts',
mapping : 'ts'
}
,{
name : 'orderdetailed.dr',
mapping : 'dr'
}
,{
name : 'orderdetailed.back1',
mapping : 'back1'
}
,{
name : 'orderdetailed.back2',
mapping : 'back2'
}
,{
name : 'orderdetailed.back3',
mapping : 'back3'
}
,{
name : 'orderdetailed.back4',
mapping : 'back4'
}
,{
name : 'orderdetailed.back5',
mapping : 'back5'
}
]
	);
		
	updateorderdetailedForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateorderdetailedReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单管理-商品清单表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'orderdetailed.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'orderdetailed.idCommodity',
width : '80%'
}
,{
fieldLabel : '购买级别主键',
id : 'uppdate_idLevel',
xtype : 'numberfield',
name : 'orderdetailed.idLevel',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'orderdetailed.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'orderdetailed.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'orderdetailed.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'orderdetailed.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单表主键',
id : 'uppdate_idOrderNo',
xtype : 'numberfield',
name : 'orderdetailed.idOrderNo',
width : '80%'
}
,{
fieldLabel : '购买数量',
id : 'uppdate_buynumber',
xtype : 'numberfield',
name : 'orderdetailed.buynumber',
width : '80%'
}
,{
fieldLabel : '商品单价',
id : 'uppdate_buyprice',
xtype : 'numberfield',
name : 'orderdetailed.buyprice',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'orderdetailed.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'orderdetailed.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'orderdetailed.back4',
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
				check(updateorderdetailedForm, "orderdetailed_update.action", queryorderdetailedStore, "修改信息")
				updateorderdetailedWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateorderdetailedWin.hide();
				updateorderdetailedForm.form.reset();
			}
		}]
	});

	updateorderdetailedWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateorderdetailedForm
	});

	update = function() {
		_record = queryorderdetailedGrid.getSelectionModel().getSelected();
		flag = queryorderdetailedGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateorderdetailedWin.show();
					
			updateorderdetailedForm.getForm().load({
				url : 'orderdetailed_findById.action?orderdetailed.idNumber='+ _record.get('idNumber'),
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

