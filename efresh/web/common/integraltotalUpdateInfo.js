
	updateintegraltotalReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'integraltotal.idNumber',
mapping : 'idNumber'
}
,{
name : 'integraltotal.idUser',
mapping : 'idUser'
}
,{
name : 'integraltotal.integralSum',
mapping : 'integralSum'
}
,{
name : 'integraltotal.usableIntegral',
mapping : 'usableIntegral'
}
,{
name : 'integraltotal.ts',
mapping : 'ts'
}
,{
name : 'integraltotal.dr',
mapping : 'dr'
}
,{
name : 'integraltotal.back1',
mapping : 'back1'
}
,{
name : 'integraltotal.back2',
mapping : 'back2'
}
,{
name : 'integraltotal.back3',
mapping : 'back3'
}
,{
name : 'integraltotal.back4',
mapping : 'back4'
}
,{
name : 'integraltotal.back5',
mapping : 'back5'
}
,{
name : 'integraltotal.validtime',
mapping : 'validtime'
}
]
	);
		
	updateintegraltotalForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateintegraltotalReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '档案管理-积分总表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'integraltotal.idNumber',
width : '80%'
}
,{
fieldLabel : '积分总数',
id : 'uppdate_integralSum',
xtype : 'numberfield',
name : 'integraltotal.integralSum',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'integraltotal.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'integraltotal.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'integraltotal.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'textfield',
name : 'integraltotal.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'integraltotal.idUser',
width : '80%'
}
,{
fieldLabel : '可用积分',
id : 'uppdate_usableIntegral',
xtype : 'numberfield',
name : 'integraltotal.usableIntegral',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'integraltotal.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'integraltotal.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'integraltotal.back4',
width : '80%'
}
,{
fieldLabel : '有效期结束时间',
id : 'uppdate_validtime',
xtype : 'datetimefield',
name : 'integraltotal.validtime',
anchor : '95%'
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
				check(updateintegraltotalForm, "integraltotal_update.action", queryintegraltotalStore, "修改信息")
				updateintegraltotalWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateintegraltotalWin.hide();
				updateintegraltotalForm.form.reset();
			}
		}]
	});

	updateintegraltotalWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateintegraltotalForm
	});

	update = function() {
		_record = queryintegraltotalGrid.getSelectionModel().getSelected();
		flag = queryintegraltotalGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateintegraltotalWin.show();
					
			updateintegraltotalForm.getForm().load({
				url : 'integraltotal_findById.action?integraltotal.idNumber='+ _record.get('idNumber'),
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

