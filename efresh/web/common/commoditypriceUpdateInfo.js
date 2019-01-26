
	updatecommoditypriceReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commodityprice.idNumber',
mapping : 'idNumber'
}
,{
name : 'commodityprice.starttime',
mapping : 'starttime'
}
,{
name : 'commodityprice.endtime',
mapping : 'endtime'
}
,{
name : 'commodityprice.price',
mapping : 'price'
}
,{
name : 'commodityprice.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'commodityprice.idLevel',
mapping : 'idLevel'
}
,{
name : 'commodityprice.ts',
mapping : 'ts'
}
,{
name : 'commodityprice.dr',
mapping : 'dr'
}
,{
name : 'commodityprice.back1',
mapping : 'back1'
}
,{
name : 'commodityprice.back2',
mapping : 'back2'
}
,{
name : 'commodityprice.back3',
mapping : 'back3'
}
,{
name : 'commodityprice.back4',
mapping : 'back4'
}
,{
name : 'commodityprice.back5',
mapping : 'back5'
}
]
	);
		
	updatecommoditypriceForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommoditypriceReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品管理-商品价格表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commodityprice.idNumber',
width : '80%'
}
,{
fieldLabel : '结束时间',
id : 'uppdate_endtime',
xtype : 'datetimefield',
name : 'commodityprice.endtime',
anchor : '95%'
}
,{
fieldLabel : '商品表主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'commodityprice.idCommodity',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'commodityprice.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'commodityprice.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'commodityprice.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'commodityprice.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '开始时间',
id : 'uppdate_starttime',
xtype : 'datetimefield',
name : 'commodityprice.starttime',
anchor : '95%'
}
,{
fieldLabel : '单价',
id : 'uppdate_price',
xtype : 'numberfield',
name : 'commodityprice.price',
width : '80%'
}
,{
fieldLabel : '商品级别表主键',
id : 'uppdate_idLevel',
xtype : 'numberfield',
name : 'commodityprice.idLevel',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'commodityprice.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'commodityprice.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'commodityprice.back4',
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
				check(updatecommoditypriceForm, "commodityprice_update.action", querycommoditypriceStore, "修改信息")
				updatecommoditypriceWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommoditypriceWin.hide();
				updatecommoditypriceForm.form.reset();
			}
		}]
	});

	updatecommoditypriceWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommoditypriceForm
	});

	update = function() {
		_record = querycommoditypriceGrid.getSelectionModel().getSelected();
		flag = querycommoditypriceGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommoditypriceWin.show();
					
			updatecommoditypriceForm.getForm().load({
				url : 'commodityprice_findById.action?commodityprice.idNumber='+ _record.get('idNumber'),
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

