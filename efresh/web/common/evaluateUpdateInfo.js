
	updateevaluateReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'evaluate.idNumber',
mapping : 'idNumber'
}
,{
name : 'evaluate.idEvaluate',
mapping : 'idEvaluate'
}
,{
name : 'evaluate.orderNo',
mapping : 'orderNo'
}
,{
name : 'evaluate.evaluatecontent',
mapping : 'evaluatecontent'
}
,{
name : 'evaluate.evaluatetime',
mapping : 'evaluatetime'
}
,{
name : 'evaluate.idReply',
mapping : 'idReply'
}
,{
name : 'evaluate.replycontent',
mapping : 'replycontent'
}
,{
name : 'evaluate.replytime',
mapping : 'replytime'
}
,{
name : 'evaluate.ts',
mapping : 'ts'
}
,{
name : 'evaluate.dr',
mapping : 'dr'
}
,{
name : 'evaluate.back1',
mapping : 'back1'
}
]
	);
		
	updateevaluateForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateevaluateReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-用户评价表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'evaluate.idNumber',
width : '80%'
}
,{
fieldLabel : '订单编号',
id : 'uppdate_orderNo',
xtype : 'textfield',
name : 'evaluate.orderNo',
width : '80%'
}
,{
fieldLabel : '评价时间',
id : 'uppdate_evaluatetime',
xtype : 'datetimefield',
name : 'evaluate.evaluatetime',
anchor : '95%'
}
,{
fieldLabel : '回复内容',
id : 'uppdate_replycontent',
xtype : 'textfield',
name : 'evaluate.replycontent',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'evaluate.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'evaluate.back1',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '评价人主键，就是用户主键',
id : 'uppdate_idEvaluate',
xtype : 'numberfield',
name : 'evaluate.idEvaluate',
width : '80%'
}
,{
fieldLabel : '评价内容',
id : 'uppdate_evaluatecontent',
xtype : 'textfield',
name : 'evaluate.evaluatecontent',
width : '80%'
}
,{
fieldLabel : '回复人',
id : 'uppdate_idReply',
xtype : 'numberfield',
name : 'evaluate.idReply',
width : '80%'
}
,{
fieldLabel : '回复时间',
id : 'uppdate_replytime',
xtype : 'datetimefield',
name : 'evaluate.replytime',
anchor : '95%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'evaluate.dr',
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
				check(updateevaluateForm, "evaluate_update.action", queryevaluateStore, "修改信息")
				updateevaluateWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateevaluateWin.hide();
				updateevaluateForm.form.reset();
			}
		}]
	});

	updateevaluateWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateevaluateForm
	});

	update = function() {
		_record = queryevaluateGrid.getSelectionModel().getSelected();
		flag = queryevaluateGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateevaluateWin.show();
					
			updateevaluateForm.getForm().load({
				url : 'evaluate_findById.action?evaluate.idNumber='+ _record.get('idNumber'),
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

