
	updatelogisticsReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'logistics.idNumber',
mapping : 'idNumber'
}
,{
name : 'logistics.corpname',
mapping : 'corpname'
}
,{
name : 'logistics.corptel',
mapping : 'corptel'
}
,{
name : 'logistics.ts',
mapping : 'ts'
}
,{
name : 'logistics.dr',
mapping : 'dr'
}
,{
name : 'logistics.back1',
mapping : 'back1'
}
,{
name : 'logistics.back2',
mapping : 'back2'
}
,{
name : 'logistics.back3',
mapping : 'back3'
}
,{
name : 'logistics.back4',
mapping : 'back4'
}
,{
name : 'logistics.back5',
mapping : 'back5'
}
]
	);
		
	updatelogisticsForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatelogisticsReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '档案管理-物流商管理表',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'logistics.idNumber',
width : '80%'
}
,{
fieldLabel : '公司电话',
id : 'uppdate_corptel',
xtype : 'textfield',
name : 'logistics.corptel',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'logistics.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'logistics.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'logistics.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '公司名称',
id : 'uppdate_corpname',
xtype : 'textfield',
name : 'logistics.corpname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'logistics.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'logistics.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'logistics.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'logistics.back5',
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
				check(updatelogisticsForm, "logistics_update.action", querylogisticsStore, "修改信息")
				updatelogisticsWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatelogisticsWin.hide();
				updatelogisticsForm.form.reset();
			}
		}]
	});

	updatelogisticsWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatelogisticsForm
	});

	update = function() {
		_record = querylogisticsGrid.getSelectionModel().getSelected();
		flag = querylogisticsGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatelogisticsWin.show();
					
			updatelogisticsForm.getForm().load({
				url : 'logistics_findById.action?logistics.idNumber='+ _record.get('idNumber'),
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

