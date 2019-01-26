
	updatesecondorderdetailsReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'secondorderdetails.idNumber',
mapping : 'idNumber'
}
,{
name : 'secondorderdetails.idFirstorder',
mapping : 'idFirstorder'
}
,{
name : 'secondorderdetails.idSecondorder',
mapping : 'idSecondorder'
}
,{
name : 'secondorderdetails.secondorderNo',
mapping : 'secondorderNo'
}
,{
name : 'secondorderdetails.ts',
mapping : 'ts'
}
,{
name : 'secondorderdetails.dr',
mapping : 'dr'
}
,{
name : 'secondorderdetails.back1',
mapping : 'back1'
}
,{
name : 'secondorderdetails.back2',
mapping : 'back2'
}
,{
name : 'secondorderdetails.back3',
mapping : 'back3'
}
,{
name : 'secondorderdetails.back4',
mapping : 'back4'
}
,{
name : 'secondorderdetails.back5',
mapping : 'back5'
}
]
	);
		
	updatesecondorderdetailsForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesecondorderdetailsReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单管理-归集后的二级订单详情表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'secondorderdetails.idNumber',
width : '80%'
}
,{
fieldLabel : '二级订单主键',
id : 'uppdate_idSecondorder',
xtype : 'numberfield',
name : 'secondorderdetails.idSecondorder',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'secondorderdetails.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'secondorderdetails.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'secondorderdetails.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'secondorderdetails.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单主键',
id : 'uppdate_idFirstorder',
xtype : 'numberfield',
name : 'secondorderdetails.idFirstorder',
width : '80%'
}
,{
fieldLabel : '二级订单编号',
id : 'uppdate_secondorderNo',
xtype : 'textfield',
name : 'secondorderdetails.secondorderNo',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'secondorderdetails.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'secondorderdetails.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'secondorderdetails.back4',
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
				check(updatesecondorderdetailsForm, "secondorderdetails_update.action", querysecondorderdetailsStore, "修改信息")
				updatesecondorderdetailsWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesecondorderdetailsWin.hide();
				updatesecondorderdetailsForm.form.reset();
			}
		}]
	});

	updatesecondorderdetailsWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesecondorderdetailsForm
	});

	update = function() {
		_record = querysecondorderdetailsGrid.getSelectionModel().getSelected();
		flag = querysecondorderdetailsGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesecondorderdetailsWin.show();
					
			updatesecondorderdetailsForm.getForm().load({
				url : 'secondorderdetails_findById.action?secondorderdetails.idNumber='+ _record.get('idNumber'),
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

