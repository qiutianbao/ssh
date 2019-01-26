
	updatesecondlevelorderReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'secondlevelorder.idNumber',
mapping : 'idNumber'
}
,{
name : 'secondlevelorder.secondlevelorderNo',
mapping : 'secondlevelorderNo'
}
,{
name : 'secondlevelorder.idStore',
mapping : 'idStore'
}
,{
name : 'secondlevelorder.idUser',
mapping : 'idUser'
}
,{
name : 'secondlevelorder.creationordertime',
mapping : 'creationordertime'
}
,{
name : 'secondlevelorder.orderstatus',
mapping : 'orderstatus'
}
,{
name : 'secondlevelorder.arrivaltime',
mapping : 'arrivaltime'
}
,{
name : 'secondlevelorder.ts',
mapping : 'ts'
}
,{
name : 'secondlevelorder.dr',
mapping : 'dr'
}
,{
name : 'secondlevelorder.back1',
mapping : 'back1'
}
,{
name : 'secondlevelorder.back2',
mapping : 'back2'
}
,{
name : 'secondlevelorder.back3',
mapping : 'back3'
}
,{
name : 'secondlevelorder.back4',
mapping : 'back4'
}
,{
name : 'secondlevelorder.back5',
mapping : 'back5'
}
,{
name : 'secondlevelorder.canceltime',
mapping : 'canceltime'
}
,{
name : 'secondlevelorder.paytime',
mapping : 'paytime'
}
,{
name : 'secondlevelorder.deliverytime',
mapping : 'deliverytime'
}
,{
name : 'secondlevelorder.signtime',
mapping : 'signtime'
}
,{
name : 'secondlevelorder.orderprice',
mapping : 'orderprice'
}
,{
name : 'secondlevelorder.signname',
mapping : 'signname'
}
]
	);
		
	updatesecondlevelorderForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesecondlevelorderReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '二级订单表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'secondlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'secondlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'uppdate_creationordertime',
xtype : 'datetimefield',
name : 'secondlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '到货时间',
id : 'uppdate_arrivaltime',
xtype : 'datetimefield',
name : 'secondlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'secondlevelorder.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'secondlevelorder.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'secondlevelorder.back4',
width : '80%'
}
,{
fieldLabel : '取消订单时间',
id : 'uppdate_canceltime',
xtype : 'datetimefield',
name : 'secondlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'uppdate_deliverytime',
xtype : 'datetimefield',
name : 'secondlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'uppdate_orderprice',
xtype : 'numberfield',
name : 'secondlevelorder.orderprice',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '二级订单编号',
id : 'uppdate_secondlevelorderNo',
xtype : 'textfield',
name : 'secondlevelorder.secondlevelorderNo',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'secondlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'uppdate_orderstatus',
xtype : 'numberfield',
name : 'secondlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'secondlevelorder.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'secondlevelorder.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'secondlevelorder.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'secondlevelorder.back5',
width : '80%'
}
,{
fieldLabel : '支付时间',
id : 'uppdate_paytime',
xtype : 'datetimefield',
name : 'secondlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'uppdate_signtime',
xtype : 'datetimefield',
name : 'secondlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '签收人名称',
id : 'uppdate_signname',
xtype : 'textfield',
name : 'secondlevelorder.signname',
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
				check(updatesecondlevelorderForm, "secondlevelorder_update.action", querysecondlevelorderStore, "修改信息")
				updatesecondlevelorderWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesecondlevelorderWin.hide();
				updatesecondlevelorderForm.form.reset();
			}
		}]
	});

	updatesecondlevelorderWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesecondlevelorderForm
	});

	update = function() {
		_record = querysecondlevelorderGrid.getSelectionModel().getSelected();
		flag = querysecondlevelorderGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesecondlevelorderWin.show();
					
			updatesecondlevelorderForm.getForm().load({
				url : 'secondlevelorder_findById.action?secondlevelorder.idNumber='+ _record.get('idNumber'),
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

