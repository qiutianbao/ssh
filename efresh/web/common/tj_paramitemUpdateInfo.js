
	updatetj_paramitemReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'tj_paramitem.idNumber',
mapping : 'idNumber'
}
,{
name : 'tj_paramitem.PARA',
mapping : 'PARA'
}
,{
name : 'tj_paramitem.PARAMETERID',
mapping : 'PARAMETERID'
}
,{
name : 'tj_paramitem.PARAMETERNAME',
mapping : 'PARAMETERNAME'
}
,{
name : 'tj_paramitem.ABNAME',
mapping : 'ABNAME'
}
,{
name : 'tj_paramitem.PARAMLEVEL',
mapping : 'PARAMLEVEL'
}
,{
name : 'tj_paramitem.PARAMETERMEMO',
mapping : 'PARAMETERMEMO'
}
,{
name : 'tj_paramitem.SORTNUM',
mapping : 'SORTNUM'
}
,{
name : 'tj_paramitem.SP_PARAMVALUE',
mapping : 'SP_PARAMVALUE'
}
,{
name : 'tj_paramitem.SP_PARAMID',
mapping : 'SP_PARAMID'
}
,{
name : 'tj_paramitem.IF_NODE',
mapping : 'IF_NODE'
}
]
	);
		
	updatetj_paramitemForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatetj_paramitemReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'tj_paramitem.idNumber',
width : '80%'
}
,{
fieldLabel : '参数标识',
id : 'uppdate_PARAMETERID',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERID',
width : '80%'
}
,{
fieldLabel : '参数简称',
id : 'uppdate_ABNAME',
xtype : 'textfield',
name : 'tj_paramitem.ABNAME',
width : '80%'
}
,{
fieldLabel : '参数说明',
id : 'uppdate_PARAMETERMEMO',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERMEMO',
width : '80%'
}
,{
fieldLabel : '上级参数值',
id : 'uppdate_SP_PARAMVALUE',
xtype : 'textfield',
name : 'tj_paramitem.SP_PARAMVALUE',
width : '80%'
}
,{
fieldLabel : '是否叶子节点',
id : 'uppdate_IF_NODE',
xtype : 'textfield',
name : 'tj_paramitem.IF_NODE',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '参数值',
id : 'uppdate_PARA',
xtype : 'textfield',
name : 'tj_paramitem.PARA',
width : '80%'
}
,{
fieldLabel : '参数名称',
id : 'uppdate_PARAMETERNAME',
xtype : 'textfield',
name : 'tj_paramitem.PARAMETERNAME',
width : '80%'
}
,{
fieldLabel : '参数级别',
id : 'uppdate_PARAMLEVEL',
xtype : 'textfield',
name : 'tj_paramitem.PARAMLEVEL',
width : '80%'
}
,{
fieldLabel : '排序编号',
id : 'uppdate_SORTNUM',
xtype : 'numberfield',
name : 'tj_paramitem.SORTNUM',
width : '80%'
}
,{
fieldLabel : '上级参数标识',
id : 'uppdate_SP_PARAMID',
xtype : 'textfield',
name : 'tj_paramitem.SP_PARAMID',
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
				check(updatetj_paramitemForm, "tj_paramitem_update.action", querytj_paramitemStore, "修改信息")
				updatetj_paramitemWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatetj_paramitemWin.hide();
				updatetj_paramitemForm.form.reset();
			}
		}]
	});

	updatetj_paramitemWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatetj_paramitemForm
	});

	update = function() {
		_record = querytj_paramitemGrid.getSelectionModel().getSelected();
		flag = querytj_paramitemGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatetj_paramitemWin.show();
					
			updatetj_paramitemForm.getForm().load({
				url : 'tj_paramitem_findById.action?tj_paramitem.idNumber='+ _record.get('idNumber'),
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

