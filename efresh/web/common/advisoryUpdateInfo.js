
	updateadvisoryReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'advisory.idNumber',
mapping : 'idNumber'
}
,{
name : 'advisory.idAdvisory',
mapping : 'idAdvisory'
}
,{
name : 'advisory.advtime',
mapping : 'advtime'
}
,{
name : 'advisory.advcontent',
mapping : 'advcontent'
}
,{
name : 'advisory.idReply',
mapping : 'idReply'
}
,{
name : 'advisory.replycontent',
mapping : 'replycontent'
}
,{
name : 'advisory.replytime',
mapping : 'replytime'
}
,{
name : 'advisory.ts',
mapping : 'ts'
}
,{
name : 'advisory.dr',
mapping : 'dr'
}
,{
name : 'advisory.back1',
mapping : 'back1'
}
]
	);
		
	updateadvisoryForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateadvisoryReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-留言咨询表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'advisory.idNumber',
width : '80%'
}
,{
fieldLabel : '咨询时间',
id : 'uppdate_advtime',
xtype : 'datetimefield',
name : 'advisory.advtime',
anchor : '95%'
}
,{
fieldLabel : '回复人主键',
id : 'uppdate_idReply',
xtype : 'numberfield',
name : 'advisory.idReply',
width : '80%'
}
,{
fieldLabel : '回复时间',
id : 'uppdate_replytime',
xtype : 'datetimefield',
name : 'advisory.replytime',
anchor : '95%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'advisory.dr',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '咨询人主键',
id : 'uppdate_idAdvisory',
xtype : 'numberfield',
name : 'advisory.idAdvisory',
width : '80%'
}
,{
fieldLabel : '咨询内容',
id : 'uppdate_advcontent',
xtype : 'textfield',
name : 'advisory.advcontent',
width : '80%'
}
,{
fieldLabel : '回复内容',
id : 'uppdate_replycontent',
xtype : 'textfield',
name : 'advisory.replycontent',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'advisory.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'advisory.back1',
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
				check(updateadvisoryForm, "advisory_update.action", queryadvisoryStore, "修改信息")
				updateadvisoryWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateadvisoryWin.hide();
				updateadvisoryForm.form.reset();
			}
		}]
	});

	updateadvisoryWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateadvisoryForm
	});

	update = function() {
		_record = queryadvisoryGrid.getSelectionModel().getSelected();
		flag = queryadvisoryGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateadvisoryWin.show();
					
			updateadvisoryForm.getForm().load({
				url : 'advisory_findById.action?advisory.idNumber='+ _record.get('idNumber'),
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

