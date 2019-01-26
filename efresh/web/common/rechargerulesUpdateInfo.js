
	updaterechargerulesReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'rechargerules.idNumber',
mapping : 'idNumber'
}
,{
name : 'rechargerules.summary',
mapping : 'summary'
}
,{
name : 'rechargerules.title',
mapping : 'title'
}
,{
name : 'rechargerules.content',
mapping : 'content'
}
,{
name : 'rechargerules.ruleType',
mapping : 'ruleType'
}
,{
name : 'rechargerules.stats',
mapping : 'stats'
}
,{
name : 'rechargerules.ts',
mapping : 'ts'
}
,{
name : 'rechargerules.dr',
mapping : 'dr'
}
,{
name : 'rechargerules.back1',
mapping : 'back1'
}
,{
name : 'rechargerules.back2',
mapping : 'back2'
}
,{
name : 'rechargerules.back3',
mapping : 'back3'
}
,{
name : 'rechargerules.back4',
mapping : 'back4'
}
,{
name : 'rechargerules.back5',
mapping : 'back5'
}
]
	);
		
	updaterechargerulesForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updaterechargerulesReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'rechargerules.idNumber',
width : '80%'
}
,{
fieldLabel : '小标题',
id : 'uppdate_title',
xtype : 'textfield',
name : 'rechargerules.title',
width : '80%'
}
,{
fieldLabel : '规则类型',
id : 'uppdate_ruleType',
xtype : 'textfield',
name : 'rechargerules.ruleType',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'rechargerules.ts',
width : '80%'
}
,{
fieldLabel : '备用字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'rechargerules.back1',
width : '80%'
}
,{
fieldLabel : '备用字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'rechargerules.back3',
width : '80%'
}
,{
fieldLabel : '备用字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'rechargerules.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '概述',
id : 'uppdate_summary',
xtype : 'textfield',
name : 'rechargerules.summary',
width : '80%'
}
,{
fieldLabel : '内容',
id : 'uppdate_content',
xtype : 'textfield',
name : 'rechargerules.content',
width : '80%'
}
,{
fieldLabel : '状态',
id : 'uppdate_stats',
xtype : 'textfield',
name : 'rechargerules.stats',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'rechargerules.dr',
width : '80%'
}
,{
fieldLabel : '备用字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'rechargerules.back2',
width : '80%'
}
,{
fieldLabel : '备用字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'rechargerules.back4',
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
				check(updaterechargerulesForm, "rechargerules_update.action", queryrechargerulesStore, "修改信息")
				updaterechargerulesWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updaterechargerulesWin.hide();
				updaterechargerulesForm.form.reset();
			}
		}]
	});

	updaterechargerulesWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updaterechargerulesForm
	});

	update = function() {
		_record = queryrechargerulesGrid.getSelectionModel().getSelected();
		flag = queryrechargerulesGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updaterechargerulesWin.show();
					
			updaterechargerulesForm.getForm().load({
				url : 'rechargerules_findById.action?rechargerules.idNumber='+ _record.get('idNumber'),
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

