
	updateintegralruleReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'integralrule.idNumber',
mapping : 'idNumber'
}
,{
name : 'integralrule.summary',
mapping : 'summary'
}
,{
name : 'integralrule.ts',
mapping : 'ts'
}
,{
name : 'integralrule.dr',
mapping : 'dr'
}
,{
name : 'integralrule.back1',
mapping : 'back1'
}
,{
name : 'integralrule.back2',
mapping : 'back2'
}
]
	);
		
	updateintegralruleForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateintegralruleReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '档案管理-积分规则主表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'integralrule.idNumber',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'integralrule.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'integralrule.back1',
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
name : 'integralrule.summary',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'integralrule.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'integralrule.back2',
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
				check(updateintegralruleForm, "integralrule_update.action", queryintegralruleStore, "修改信息")
				updateintegralruleWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateintegralruleWin.hide();
				updateintegralruleForm.form.reset();
			}
		}]
	});

	updateintegralruleWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateintegralruleForm
	});

	update = function() {
		_record = queryintegralruleGrid.getSelectionModel().getSelected();
		flag = queryintegralruleGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateintegralruleWin.show();
					
			updateintegralruleForm.getForm().load({
				url : 'integralrule_findById.action?integralrule.idNumber='+ _record.get('idNumber'),
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

