
	updateuserscoreReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'userscore.idNumber',
mapping : 'idNumber'
}
,{
name : 'userscore.idScore',
mapping : 'idScore'
}
,{
name : 'userscore.orderNo',
mapping : 'orderNo'
}
,{
name : 'userscore.commodity',
mapping : 'commodity'
}
,{
name : 'userscore.originaddress',
mapping : 'originaddress'
}
,{
name : 'userscore.score',
mapping : 'score'
}
,{
name : 'userscore.ts',
mapping : 'ts'
}
,{
name : 'userscore.dr',
mapping : 'dr'
}
,{
name : 'userscore.back1',
mapping : 'back1'
}
]
	);
		
	updateuserscoreForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateuserscoreReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-用户评分表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'userscore.idNumber',
width : '80%'
}
,{
fieldLabel : '订单编号',
id : 'uppdate_orderNo',
xtype : 'textfield',
name : 'userscore.orderNo',
width : '80%'
}
,{
fieldLabel : '产地',
id : 'uppdate_originaddress',
xtype : 'textfield',
name : 'userscore.originaddress',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'userscore.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'userscore.back1',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '评分人主键',
id : 'uppdate_idScore',
xtype : 'numberfield',
name : 'userscore.idScore',
width : '80%'
}
,{
fieldLabel : '商品名称',
id : 'uppdate_commodity',
xtype : 'textfield',
name : 'userscore.commodity',
width : '80%'
}
,{
fieldLabel : '评分',
id : 'uppdate_score',
xtype : 'numberfield',
name : 'userscore.score',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'userscore.dr',
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
				check(updateuserscoreForm, "userscore_update.action", queryuserscoreStore, "修改信息")
				updateuserscoreWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateuserscoreWin.hide();
				updateuserscoreForm.form.reset();
			}
		}]
	});

	updateuserscoreWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateuserscoreForm
	});

	update = function() {
		_record = queryuserscoreGrid.getSelectionModel().getSelected();
		flag = queryuserscoreGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateuserscoreWin.show();
					
			updateuserscoreForm.getForm().load({
				url : 'userscore_findById.action?userscore.idNumber='+ _record.get('idNumber'),
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

