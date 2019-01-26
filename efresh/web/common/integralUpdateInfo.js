
	updateintegralReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'integral.idNumber',
mapping : 'idNumber'
}
,{
name : 'integral.idUser',
mapping : 'idUser'
}
,{
name : 'integral.integral',
mapping : 'integral'
}
,{
name : 'integral.gettime',
mapping : 'gettime'
}
,{
name : 'integral.cleartime',
mapping : 'cleartime'
}
,{
name : 'integral.ts',
mapping : 'ts'
}
,{
name : 'integral.dr',
mapping : 'dr'
}
,{
name : 'integral.back1',
mapping : 'back1'
}
,{
name : 'integral.back2',
mapping : 'back2'
}
,{
name : 'integral.back3',
mapping : 'back3'
}
,{
name : 'integral.back4',
mapping : 'back4'
}
,{
name : 'integral.back5',
mapping : 'back5'
}
,{
name : 'integral.validtime',
mapping : 'validtime'
}
]
	);
		
	updateintegralForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateintegralReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '档案管理-积分表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'integral.idNumber',
width : '80%'
}
,{
fieldLabel : '获得积分',
id : 'uppdate_integral',
xtype : 'numberfield',
name : 'integral.integral',
width : '80%'
}
,{
fieldLabel : '清除时间',
id : 'uppdate_cleartime',
xtype : 'datetimefield',
name : 'integral.cleartime',
anchor : '95%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'integral.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'integral.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'integral.back4',
width : '80%'
}
,{
fieldLabel : '有效期结束时间',
id : 'uppdate_validtime',
xtype : 'datetimefield',
name : 'integral.validtime',
anchor : '95%'
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
name : 'integral.idUser',
width : '80%'
}
,{
fieldLabel : '获得时间',
id : 'uppdate_gettime',
xtype : 'datetimefield',
name : 'integral.gettime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'integral.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'integral.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'integral.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'textfield',
name : 'integral.back5',
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
				check(updateintegralForm, "integral_update.action", queryintegralStore, "修改信息")
				updateintegralWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateintegralWin.hide();
				updateintegralForm.form.reset();
			}
		}]
	});

	updateintegralWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateintegralForm
	});

	update = function() {
		_record = queryintegralGrid.getSelectionModel().getSelected();
		flag = queryintegralGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateintegralWin.show();
					
			updateintegralForm.getForm().load({
				url : 'integral_findById.action?integral.idNumber='+ _record.get('idNumber'),
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

