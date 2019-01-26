
	updatet_serviceConditionReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_serviceCondition.inst_no',
mapping : 'inst_no'
}
,{
name : 't_serviceCondition.inst_name',
mapping : 'inst_name'
}
,{
name : 't_serviceCondition.brno',
mapping : 'brno'
}
,{
name : 't_serviceCondition.brno_name',
mapping : 'brno_name'
}
,{
name : 't_serviceCondition.cn',
mapping : 'cn'
}
,{
name : 't_serviceCondition.startDay',
mapping : 'startDay'
}
,{
name : 't_serviceCondition.endDay',
mapping : 'endDay'
}
]
	);
		
	updatet_serviceConditionForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_serviceConditionReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支行编码',
id : 'uppdate_inst_no',
xtype : 'textfield',
name : 't_serviceCondition.inst_no',
width : '80%'
}
,{
fieldLabel : '网点编码',
id : 'uppdate_brno',
xtype : 'textfield',
name : 't_serviceCondition.brno',
width : '80%'
}
,{
fieldLabel : '点击次数',
id : 'uppdate_cn',
xtype : 'textfield',
name : 't_serviceCondition.cn',
width : '80%'
}
,{
fieldLabel : '结束日期',
id : 'uppdate_endDay',
xtype : 'textfield',
name : 't_serviceCondition.endday',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支行名称',
id : 'uppdate_inst_name',
xtype : 'textfield',
name : 't_serviceCondition.inst_name',
width : '80%'
}
,{
fieldLabel : '网点名称',
id : 'uppdate_brno_name',
xtype : 'textfield',
name : 't_serviceCondition.brno_name',
width : '80%'
}
,{
fieldLabel : '开始日期',
id : 'uppdate_startDay',
xtype : 'textfield',
name : 't_serviceCondition.startday',
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
				check(updatet_serviceConditionForm, "t_serviceCondition_update.action", queryt_serviceConditionStore, "修改信息")
				updatet_serviceConditionWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_serviceConditionWin.hide();
				updatet_serviceConditionForm.form.reset();
			}
		}]
	});

	updatet_serviceConditionWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_serviceConditionForm
	});

	update = function() {
		_record = queryt_serviceConditionGrid.getSelectionModel().getSelected();
		flag = queryt_serviceConditionGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_serviceConditionWin.show();
					
			updatet_serviceConditionForm.getForm().load({
				url : 't_serviceCondition_findById.action?t_serviceCondition.idNumber='+ _record.get('idNumber'),
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

