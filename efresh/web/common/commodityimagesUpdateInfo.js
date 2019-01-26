
	updatecommodityimagesReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commodityimages.idNumber',
mapping : 'idNumber'
}
,{
name : 'commodityimages.imagename',
mapping : 'imagename'
}
,{
name : 'commodityimages.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'commodityimages.ts',
mapping : 'ts'
}
,{
name : 'commodityimages.dr',
mapping : 'dr'
}
,{
name : 'commodityimages.back1',
mapping : 'back1'
}
,{
name : 'commodityimages.back2',
mapping : 'back2'
}
,{
name : 'commodityimages.back3',
mapping : 'back3'
}
,{
name : 'commodityimages.back4',
mapping : 'back4'
}
,{
name : 'commodityimages.back5',
mapping : 'back5'
}
]
	);
		
	updatecommodityimagesForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommodityimagesReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品管理-商品图片表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commodityimages.idNumber',
width : '80%'
}
,{
fieldLabel : '商品主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'commodityimages.idCommodity',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'commodityimages.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'commodityimages.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'commodityimages.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '图片名称',
id : 'uppdate_imagename',
xtype : 'textfield',
name : 'commodityimages.imagename',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'commodityimages.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'commodityimages.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'commodityimages.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'commodityimages.back5',
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
				check(updatecommodityimagesForm, "commodityimages_update.action", querycommodityimagesStore, "修改信息")
				updatecommodityimagesWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommodityimagesWin.hide();
				updatecommodityimagesForm.form.reset();
			}
		}]
	});

	updatecommodityimagesWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommodityimagesForm
	});

	update = function() {
		_record = querycommodityimagesGrid.getSelectionModel().getSelected();
		flag = querycommodityimagesGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommodityimagesWin.show();
					
			updatecommodityimagesForm.getForm().load({
				url : 'commodityimages_findById.action?commodityimages.idNumber='+ _record.get('idNumber'),
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

