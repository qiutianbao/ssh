
	updatecommodityReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commodity.idNumber',
mapping : 'idNumber'
}
,{
name : 'commodity.commodityname',
mapping : 'commodityname'
}
,{
name : 'commodity.commoditycode',
mapping : 'commoditycode'
}
,{
name : 'commodity.idStore',
mapping : 'idStore'
}
,{
name : 'commodity.imagename',
mapping : 'imagename'
}
,{
name : 'commodity.idCategory',
mapping : 'idCategory'
}
,{
name : 'commodity.status',
mapping : 'status'
}
,{
name : 'commodity.idBrand',
mapping : 'idBrand'
}
,{
name : 'commodity.ts',
mapping : 'ts'
}
,{
name : 'commodity.dr',
mapping : 'dr'
}
,{
name : 'commodity.back1',
mapping : 'back1'
}
,{
name : 'commodity.back2',
mapping : 'back2'
}
,{
name : 'commodity.back3',
mapping : 'back3'
}
,{
name : 'commodity.back4',
mapping : 'back4'
}
,{
name : 'commodity.back5',
mapping : 'back5'
}
]
	);
		
	updatecommodityForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommodityReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品管理-商品表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commodity.idNumber',
width : '80%'
}
,{
fieldLabel : '商品编号',
id : 'uppdate_commoditycode',
xtype : 'textfield',
name : 'commodity.commoditycode',
width : '80%'
}
,{
fieldLabel : '商品展示图片名称',
id : 'uppdate_imagename',
xtype : 'textfield',
name : 'commodity.imagename',
width : '80%'
}
,{
fieldLabel : '商品状态，0=上架，1=下架',
id : 'uppdate_status',
xtype : 'numberfield',
name : 'commodity.status',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'commodity.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'commodity.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'commodity.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'commodity.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品名称',
id : 'uppdate_commodityname',
xtype : 'textfield',
name : 'commodity.commodityname',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'commodity.idStore',
width : '80%'
}
,{
fieldLabel : '商品类别主键',
id : 'uppdate_idCategory',
xtype : 'numberfield',
name : 'commodity.idCategory',
width : '80%'
}
,{
fieldLabel : '商品品牌表主键',
id : 'uppdate_idBrand',
xtype : 'numberfield',
name : 'commodity.idBrand',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'commodity.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'commodity.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'commodity.back4',
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
				check(updatecommodityForm, "commodity_update.action", querycommodityStore, "修改信息")
				updatecommodityWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommodityWin.hide();
				updatecommodityForm.form.reset();
			}
		}]
	});

	updatecommodityWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommodityForm
	});

	update = function() {
		_record = querycommodityGrid.getSelectionModel().getSelected();
		flag = querycommodityGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommodityWin.show();
					
			updatecommodityForm.getForm().load({
				url : 'commodity_findById.action?commodity.idNumber='+ _record.get('idNumber'),
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

