
	updatefristlevelorderReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'fristlevelorder.idNumber',
mapping : 'idNumber'
}
,{
name : 'fristlevelorder.firstlevelorderNo',
mapping : 'firstlevelorderNo'
}
,{
name : 'fristlevelorder.orderstatus',
mapping : 'orderstatus'
}
,{
name : 'fristlevelorder.idStore',
mapping : 'idStore'
}
,{
name : 'fristlevelorder.idUser',
mapping : 'idUser'
}
,{
name : 'fristlevelorder.creationordertime',
mapping : 'creationordertime'
}
,{
name : 'fristlevelorder.arrivaltime',
mapping : 'arrivaltime'
}
,{
name : 'fristlevelorder.paytime',
mapping : 'paytime'
}
,{
name : 'fristlevelorder.canceltime',
mapping : 'canceltime'
}
,{
name : 'fristlevelorder.deliverytime',
mapping : 'deliverytime'
}
,{
name : 'fristlevelorder.signtime',
mapping : 'signtime'
}
,{
name : 'fristlevelorder.arrivaladdress',
mapping : 'arrivaladdress'
}
,{
name : 'fristlevelorder.arrivalpeople',
mapping : 'arrivalpeople'
}
,{
name : 'fristlevelorder.arrivalpeopletel',
mapping : 'arrivalpeopletel'
}
,{
name : 'fristlevelorder.collectionstarttime',
mapping : 'collectionstarttime'
}
,{
name : 'fristlevelorder.collectionendtime',
mapping : 'collectionendtime'
}
,{
name : 'fristlevelorder.orderprice',
mapping : 'orderprice'
}
,{
name : 'fristlevelorder.ts',
mapping : 'ts'
}
,{
name : 'fristlevelorder.dr',
mapping : 'dr'
}
,{
name : 'fristlevelorder.back1',
mapping : 'back1'
}
,{
name : 'fristlevelorder.back2',
mapping : 'back2'
}
,{
name : 'fristlevelorder.back3',
mapping : 'back3'
}
,{
name : 'fristlevelorder.back4',
mapping : 'back4'
}
,{
name : 'fristlevelorder.back5',
mapping : 'back5'
}
]
	);
		
	updatefristlevelorderForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatefristlevelorderReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单管理-一级订单表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'fristlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'uppdate_orderstatus',
xtype : 'numberfield',
name : 'fristlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'fristlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '到货时间',
id : 'uppdate_arrivaltime',
xtype : 'datetimefield',
name : 'fristlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '取消订单时间',
id : 'uppdate_canceltime',
xtype : 'datetimefield',
name : 'fristlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'uppdate_signtime',
xtype : 'datetimefield',
name : 'fristlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '收货人',
id : 'uppdate_arrivalpeople',
xtype : 'textfield',
name : 'fristlevelorder.arrivalpeople',
width : '80%'
}
,{
fieldLabel : '归集开始时间',
id : 'uppdate_collectionstarttime',
xtype : 'datetimefield',
name : 'fristlevelorder.collectionstarttime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'uppdate_orderprice',
xtype : 'numberfield',
name : 'fristlevelorder.orderprice',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'fristlevelorder.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'fristlevelorder.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'fristlevelorder.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单编号',
id : 'uppdate_firstlevelorderNo',
xtype : 'textfield',
name : 'fristlevelorder.firstlevelorderNo',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'fristlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'uppdate_creationordertime',
xtype : 'datetimefield',
name : 'fristlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '支付时间',
id : 'uppdate_paytime',
xtype : 'datetimefield',
name : 'fristlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'uppdate_deliverytime',
xtype : 'datetimefield',
name : 'fristlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '收货地址',
id : 'uppdate_arrivaladdress',
xtype : 'textfield',
name : 'fristlevelorder.arrivaladdress',
width : '80%'
}
,{
fieldLabel : '收货人电话',
id : 'uppdate_arrivalpeopletel',
xtype : 'textfield',
name : 'fristlevelorder.arrivalpeopletel',
width : '80%'
}
,{
fieldLabel : '归集结束时间',
id : 'uppdate_collectionendtime',
xtype : 'datetimefield',
name : 'fristlevelorder.collectionendtime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'fristlevelorder.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'fristlevelorder.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'fristlevelorder.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'fristlevelorder.back5',
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
				check(updatefristlevelorderForm, "fristlevelorder_update.action", queryfristlevelorderStore, "修改信息")
				updatefristlevelorderWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatefristlevelorderWin.hide();
				updatefristlevelorderForm.form.reset();
			}
		}]
	});

	updatefristlevelorderWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatefristlevelorderForm
	});

	update = function() {
		_record = queryfristlevelorderGrid.getSelectionModel().getSelected();
		flag = queryfristlevelorderGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatefristlevelorderWin.show();
					
			updatefristlevelorderForm.getForm().load({
				url : 'fristlevelorder_findById.action?fristlevelorder.idNumber='+ _record.get('idNumber'),
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

