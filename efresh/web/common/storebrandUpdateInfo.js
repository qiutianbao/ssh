
	updatestorebrandReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'storebrand.idNumber',
mapping : 'idNumber'
}
,{
name : 'storebrand.brandname',
mapping : 'brandname'
}
,{
name : 'storebrand.idStore',
mapping : 'idStore'
}
,{
name : 'storebrand.ts',
mapping : 'ts'
}
,{
name : 'storebrand.dr',
mapping : 'dr'
}
,{
name : 'storebrand.back1',
mapping : 'back1'
}
,{
name : 'storebrand.back2',
mapping : 'back2'
}
,{
name : 'storebrand.back3',
mapping : 'back3'
}
]
	);
		
	updatestorebrandForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatestorebrandReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '店铺品牌表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'storebrand.idNumber',
width : '80%'
}
,{
fieldLabel : '店铺表主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'storebrand.idStore',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'storebrand.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'storebrand.back2',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '品牌名称',
id : 'uppdate_brandname',
xtype : 'textfield',
name : 'storebrand.brandname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'storebrand.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'storebrand.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'numberfield',
name : 'storebrand.back3',
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
				check(updatestorebrandForm, "storebrand_update.action", querystorebrandStore, "修改信息")
				updatestorebrandWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatestorebrandWin.hide();
				updatestorebrandForm.form.reset();
			}
		}]
	});

	updatestorebrandWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatestorebrandForm
	});

	update = function() {
		_record = querystorebrandGrid.getSelectionModel().getSelected();
		flag = querystorebrandGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatestorebrandWin.show();
					
			updatestorebrandForm.getForm().load({
				url : 'storebrand_findById.action?storebrand.idNumber='+ _record.get('idNumber'),
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

