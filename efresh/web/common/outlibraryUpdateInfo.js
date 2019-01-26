
	updateoutlibraryReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'outlibrary.idNumber',
mapping : 'idNumber'
}
,{
name : 'outlibrary.outlibtime',
mapping : 'outlibtime'
}
,{
name : 'outlibrary.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'outlibrary.idStore',
mapping : 'idStore'
}
,{
name : 'outlibrary.idUser',
mapping : 'idUser'
}
,{
name : 'outlibrary.outlibnumber',
mapping : 'outlibnumber'
}
,{
name : 'outlibrary.specifications',
mapping : 'specifications'
}
,{
name : 'outlibrary.price',
mapping : 'price'
}
,{
name : 'outlibrary.weight',
mapping : 'weight'
}
,{
name : 'outlibrary.company',
mapping : 'company'
}
,{
name : 'outlibrary.ts',
mapping : 'ts'
}
,{
name : 'outlibrary.dr',
mapping : 'dr'
}
,{
name : 'outlibrary.back1',
mapping : 'back1'
}
,{
name : 'outlibrary.back2',
mapping : 'back2'
}
,{
name : 'outlibrary.back3',
mapping : 'back3'
}
,{
name : 'outlibrary.back4',
mapping : 'back4'
}
,{
name : 'outlibrary.back5',
mapping : 'back5'
}
]
	);
		
	updateoutlibraryForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateoutlibraryReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '仓储物流-出库表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'outlibrary.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'outlibrary.idCommodity',
width : '80%'
}
,{
fieldLabel : '出库人主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'outlibrary.idUser',
width : '80%'
}
,{
fieldLabel : '规格',
id : 'uppdate_specifications',
xtype : 'textfield',
name : 'outlibrary.specifications',
width : '80%'
}
,{
fieldLabel : '重量',
id : 'uppdate_weight',
xtype : 'numberfield',
name : 'outlibrary.weight',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'outlibrary.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'outlibrary.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'outlibrary.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'outlibrary.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '出库时间',
id : 'uppdate_outlibtime',
xtype : 'datetimefield',
name : 'outlibrary.outlibtime',
anchor : '95%'
}
,{
fieldLabel : '店铺主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'outlibrary.idStore',
width : '80%'
}
,{
fieldLabel : '出库数量',
id : 'uppdate_outlibnumber',
xtype : 'numberfield',
name : 'outlibrary.outlibnumber',
width : '80%'
}
,{
fieldLabel : '单价',
id : 'uppdate_price',
xtype : 'numberfield',
name : 'outlibrary.price',
width : '80%'
}
,{
fieldLabel : '单位',
id : 'uppdate_company',
xtype : 'textfield',
name : 'outlibrary.company',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'outlibrary.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'outlibrary.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'outlibrary.back4',
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
				check(updateoutlibraryForm, "outlibrary_update.action", queryoutlibraryStore, "修改信息")
				updateoutlibraryWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateoutlibraryWin.hide();
				updateoutlibraryForm.form.reset();
			}
		}]
	});

	updateoutlibraryWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateoutlibraryForm
	});

	update = function() {
		_record = queryoutlibraryGrid.getSelectionModel().getSelected();
		flag = queryoutlibraryGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateoutlibraryWin.show();
					
			updateoutlibraryForm.getForm().load({
				url : 'outlibrary_findById.action?outlibrary.idNumber='+ _record.get('idNumber'),
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

