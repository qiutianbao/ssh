
	updatesub_integralruleReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'sub_integralrule.idNumber',
mapping : 'idNumber'
}
,{
name : 'sub_integralrule.idIntegralrule',
mapping : 'idIntegralrule'
}
,{
name : 'sub_integralrule.title',
mapping : 'title'
}
,{
name : 'sub_integralrule.note',
mapping : 'note'
}
,{
name : 'sub_integralrule.serial',
mapping : 'serial'
}
,{
name : 'sub_integralrule.ts',
mapping : 'ts'
}
,{
name : 'sub_integralrule.dr',
mapping : 'dr'
}
,{
name : 'sub_integralrule.back1',
mapping : 'back1'
}
,{
name : 'sub_integralrule.back2',
mapping : 'back2'
}
]
	);
		
	updatesub_integralruleForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesub_integralruleReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '档案管理-积分规则子表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'sub_integralrule.idNumber',
width : '80%'
}
,{
fieldLabel : '标题',
id : 'uppdate_title',
xtype : 'textfield',
name : 'sub_integralrule.title',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'uppdate_serial',
xtype : 'numberfield',
name : 'sub_integralrule.serial',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'sub_integralrule.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'sub_integralrule.back2',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '积分规则主表主键',
id : 'uppdate_idIntegralrule',
xtype : 'numberfield',
name : 'sub_integralrule.idIntegralrule',
width : '80%'
}
,{
fieldLabel : '描述',
id : 'uppdate_note',
xtype : 'textfield',
name : 'sub_integralrule.note',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'sub_integralrule.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'sub_integralrule.back1',
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
				check(updatesub_integralruleForm, "sub_integralrule_update.action", querysub_integralruleStore, "修改信息")
				updatesub_integralruleWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesub_integralruleWin.hide();
				updatesub_integralruleForm.form.reset();
			}
		}]
	});

	updatesub_integralruleWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesub_integralruleForm
	});

	update = function() {
		_record = querysub_integralruleGrid.getSelectionModel().getSelected();
		flag = querysub_integralruleGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesub_integralruleWin.show();
					
			updatesub_integralruleForm.getForm().load({
				url : 'sub_integralrule_findById.action?sub_integralrule.idNumber='+ _record.get('idNumber'),
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

