
	updatestore_styleReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'store_style.idNumber',
mapping : 'idNumber'
}
,{
name : 'store_style.idStore',
mapping : 'idStore'
}
,{
name : 'store_style.frofile',
mapping : 'frofile'
}
,{
name : 'store_style.ts',
mapping : 'ts'
}
,{
name : 'store_style.dr',
mapping : 'dr'
}
,{
name : 'store_style.back1',
mapping : 'back1'
}
,{
name : 'store_style.back2',
mapping : 'back2'
}
,{
name : 'store_style.back3',
mapping : 'back3'
}
,{
name : 'store_style.back4',
mapping : 'back4'
}
,{
name : 'store_style.back5',
mapping : 'back5'
}
]
	);
		
	updatestore_styleForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatestore_styleReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '产地风采表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'store_style.idNumber',
width : '80%'
}
,{
fieldLabel : '简介',
id : 'uppdate_frofile',
xtype : 'textfield',
name : 'store_style.frofile',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'store_style.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'store_style.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'store_style.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '店铺表主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'store_style.idStore',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'store_style.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'store_style.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'store_style.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'store_style.back5',
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
				check(updatestore_styleForm, "store_style_update.action", querystore_styleStore, "修改信息")
				updatestore_styleWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatestore_styleWin.hide();
				updatestore_styleForm.form.reset();
			}
		}]
	});

	updatestore_styleWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatestore_styleForm
	});

	update = function() {
		_record = querystore_styleGrid.getSelectionModel().getSelected();
		flag = querystore_styleGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatestore_styleWin.show();
					
			updatestore_styleForm.getForm().load({
				url : 'store_style_findById.action?store_style.idNumber='+ _record.get('idNumber'),
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

