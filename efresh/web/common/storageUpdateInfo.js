
	updatestorageReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'storage.idNumber',
mapping : 'idNumber'
}
,{
name : 'storage.storagetime',
mapping : 'storagetime'
}
,{
name : 'storage.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'storage.idStore',
mapping : 'idStore'
}
,{
name : 'storage.idUser',
mapping : 'idUser'
}
,{
name : 'storage.storagenum',
mapping : 'storagenum'
}
,{
name : 'storage.specifications',
mapping : 'specifications'
}
,{
name : 'storage.price',
mapping : 'price'
}
,{
name : 'storage.weight',
mapping : 'weight'
}
,{
name : 'storage.company',
mapping : 'company'
}
,{
name : 'storage.ts',
mapping : 'ts'
}
,{
name : 'storage.dr',
mapping : 'dr'
}
,{
name : 'storage.back1',
mapping : 'back1'
}
,{
name : 'storage.back2',
mapping : 'back2'
}
,{
name : 'storage.back3',
mapping : 'back3'
}
,{
name : 'storage.back4',
mapping : 'back4'
}
,{
name : 'storage.back5',
mapping : 'back5'
}
]
	);
		
	updatestorageForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatestorageReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '仓储物流-入库表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'storage.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'storage.idCommodity',
width : '80%'
}
,{
fieldLabel : '入库人主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'storage.idUser',
width : '80%'
}
,{
fieldLabel : '规格',
id : 'uppdate_specifications',
xtype : 'textfield',
name : 'storage.specifications',
width : '80%'
}
,{
fieldLabel : '重量',
id : 'uppdate_weight',
xtype : 'numberfield',
name : 'storage.weight',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'storage.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'storage.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'storage.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'storage.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '入库时间',
id : 'uppdate_storagetime',
xtype : 'datetimefield',
name : 'storage.storagetime',
anchor : '95%'
}
,{
fieldLabel : '店铺主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'storage.idStore',
width : '80%'
}
,{
fieldLabel : '入库数量',
id : 'uppdate_storagenum',
xtype : 'numberfield',
name : 'storage.storagenum',
width : '80%'
}
,{
fieldLabel : '单价',
id : 'uppdate_price',
xtype : 'numberfield',
name : 'storage.price',
width : '80%'
}
,{
fieldLabel : '单位',
id : 'uppdate_company',
xtype : 'textfield',
name : 'storage.company',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'storage.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'storage.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'storage.back4',
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
				check(updatestorageForm, "storage_update.action", querystorageStore, "修改信息")
				updatestorageWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatestorageWin.hide();
				updatestorageForm.form.reset();
			}
		}]
	});

	updatestorageWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatestorageForm
	});

	update = function() {
		_record = querystorageGrid.getSelectionModel().getSelected();
		flag = querystorageGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatestorageWin.show();
					
			updatestorageForm.getForm().load({
				url : 'storage_findById.action?storage.idNumber='+ _record.get('idNumber'),
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

