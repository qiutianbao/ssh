
	updatestore_productReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'store_product.idNumber',
mapping : 'idNumber'
}
,{
name : 'store_product.idStoreStyle',
mapping : 'idStoreStyle'
}
,{
name : 'store_product.productname',
mapping : 'productname'
}
,{
name : 'store_product.imgname',
mapping : 'imgname'
}
,{
name : 'store_product.ts',
mapping : 'ts'
}
,{
name : 'store_product.dr',
mapping : 'dr'
}
,{
name : 'store_product.back1',
mapping : 'back1'
}
,{
name : 'store_product.back2',
mapping : 'back2'
}
]
	);
		
	updatestore_productForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatestore_productReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地主营产品表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'store_product.idNumber',
width : '80%'
}
,{
fieldLabel : '主营产品名称',
id : 'uppdate_productname',
xtype : 'textfield',
name : 'store_product.productname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'store_product.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'store_product.back1',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地风采表主键',
id : 'uppdate_idStoreStyle',
xtype : 'numberfield',
name : 'store_product.idStoreStyle',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'uppdate_imgname',
xtype : 'textfield',
name : 'store_product.imgname',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'store_product.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'store_product.back2',
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
				check(updatestore_productForm, "store_product_update.action", querystore_productStore, "修改信息")
				updatestore_productWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatestore_productWin.hide();
				updatestore_productForm.form.reset();
			}
		}]
	});

	updatestore_productWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatestore_productForm
	});

	update = function() {
		_record = querystore_productGrid.getSelectionModel().getSelected();
		flag = querystore_productGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatestore_productWin.show();
					
			updatestore_productForm.getForm().load({
				url : 'store_product_findById.action?store_product.idNumber='+ _record.get('idNumber'),
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

