
	updatesubstationReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'substation.idNumber',
mapping : 'idNumber'
}
,{
name : 'substation.ipaddress',
mapping : 'ipaddress'
}
,{
name : 'substation.dbname',
mapping : 'dbname'
}
,{
name : 'substation.portNo',
mapping : 'portNo'
}
,{
name : 'substation.username',
mapping : 'username'
}
,{
name : 'substation.password',
mapping : 'password'
}
,{
name : 'substation.ts',
mapping : 'ts'
}
,{
name : 'substation.dr',
mapping : 'dr'
}
,{
name : 'substation.back1',
mapping : 'back1'
}
,{
name : 'substation.back2',
mapping : 'back2'
}
,{
name : 'substation.back3',
mapping : 'back3'
}
]
	);
		
	updatesubstationForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesubstationReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-分站表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'substation.idNumber',
width : '80%'
}
,{
fieldLabel : '数据库名称',
id : 'uppdate_dbname',
xtype : 'textfield',
name : 'substation.dbname',
width : '80%'
}
,{
fieldLabel : '用户名',
id : 'uppdate_username',
xtype : 'textfield',
name : 'substation.username',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'substation.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'substation.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'numberfield',
name : 'substation.back3',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : 'ip地址',
id : 'uppdate_ipaddress',
xtype : 'textfield',
name : 'substation.ipaddress',
width : '80%'
}
,{
fieldLabel : '端口号',
id : 'uppdate_portNo',
xtype : 'textfield',
name : 'substation.portNo',
width : '80%'
}
,{
fieldLabel : '密码',
id : 'uppdate_password',
xtype : 'textfield',
name : 'substation.password',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'substation.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'substation.back2',
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
				check(updatesubstationForm, "substation_update.action", querysubstationStore, "修改信息")
				updatesubstationWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesubstationWin.hide();
				updatesubstationForm.form.reset();
			}
		}]
	});

	updatesubstationWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesubstationForm
	});

	update = function() {
		_record = querysubstationGrid.getSelectionModel().getSelected();
		flag = querysubstationGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesubstationWin.show();
					
			updatesubstationForm.getForm().load({
				url : 'substation_findById.action?substation.idNumber='+ _record.get('idNumber'),
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

