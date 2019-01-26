
	updatepaywayReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'payway.idNumber',
mapping : 'idNumber'
}
,{
name : 'payway.waycode',
mapping : 'waycode'
}
,{
name : 'payway.wayname',
mapping : 'wayname'
}
,{
name : 'payway.status',
mapping : 'status'
}
,{
name : 'payway.ts',
mapping : 'ts'
}
,{
name : 'payway.dr',
mapping : 'dr'
}
,{
name : 'payway.back1',
mapping : 'back1'
}
,{
name : 'payway.back2',
mapping : 'back2'
}
,{
name : 'payway.back3',
mapping : 'back3'
}
,{
name : 'payway.back4',
mapping : 'back4'
}
,{
name : 'payway.back5',
mapping : 'back5'
}
]
	);
		
	updatepaywayForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatepaywayReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理-支付方式表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'payway.idNumber',
width : '80%'
}
,{
fieldLabel : '支付方式名称',
id : 'uppdate_wayname',
xtype : 'textfield',
name : 'payway.wayname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'payway.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'payway.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'payway.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'payway.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付方式编码，0=e币支付，1=支付宝支付，2=银联支付，3=微信支付',
id : 'uppdate_waycode',
xtype : 'numberfield',
name : 'payway.waycode',
width : '80%'
}
,{
fieldLabel : '支付方式状态，0=开通，1=关闭',
id : 'uppdate_status',
xtype : 'numberfield',
name : 'payway.status',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'payway.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'payway.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'payway.back4',
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
				check(updatepaywayForm, "payway_update.action", querypaywayStore, "修改信息")
				updatepaywayWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatepaywayWin.hide();
				updatepaywayForm.form.reset();
			}
		}]
	});

	updatepaywayWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatepaywayForm
	});

	update = function() {
		_record = querypaywayGrid.getSelectionModel().getSelected();
		flag = querypaywayGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatepaywayWin.show();
					
			updatepaywayForm.getForm().load({
				url : 'payway_findById.action?payway.idNumber='+ _record.get('idNumber'),
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

