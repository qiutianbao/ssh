
	updatet_inst_mgmtReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_inst_mgmt.idNumber',
mapping : 'idNumber'
}
,{
name : 't_inst_mgmt.inst_type',
mapping : 'inst_type'
}
,{
name : 't_inst_mgmt.inst_name',
mapping : 'inst_name'
}
,{
name : 't_inst_mgmt.up_inst_no',
mapping : 'up_inst_no'
}
,{
name : 't_inst_mgmt.address ',
mapping : 'address '
}
,{
name : 't_inst_mgmt.phone',
mapping : 'phone'
}
,{
name : 't_inst_mgmt.contact_psn',
mapping : 'contact_psn'
}
,{
name : 't_inst_mgmt.inst_busn_stat',
mapping : 'inst_busn_stat'
}
]
	);
		
	updatet_inst_mgmtForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_inst_mgmtReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构码',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_inst_mgmt.idnumber',
width : '80%'
}
,{
fieldLabel : '机构名称',
id : 'uppdate_inst_name',
xtype : 'textfield',
name : 't_inst_mgmt.inst_name',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构种类',
id : 'uppdate_inst_type',
width : 100,
xtype : 'combo',
store : inst_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_inst_mgmt.inst_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '所属上级机构',
id : 'uppdate_up_inst_no',
xtype : 'textfield',
name : 't_inst_mgmt.up_inst_no',
width : '80%'
}
]}
]}
,{
name : 't_inst_mgmt.address ',
xtype : 'field',
fieldLabel : '地址',
anchor : '95%'
}
,{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '电话',
id : 'uppdate_phone',
xtype : 'textfield',
name : 't_inst_mgmt.phone',
width : '80%'
}
,{
fieldLabel : '机构状态',
id : 'uppdate_inst_busn_stat',
width : 100,
xtype : 'combo',
store : inst_busn_statStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_inst_mgmt.inst_busn_stat',
pageSize : 5,
anchor : '90%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '联系人',
id : 'uppdate_contact_psn',
xtype : 'textfield',
name : 't_inst_mgmt.contact_psn',
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
				check(updatet_inst_mgmtForm, "t_inst_mgmt_update.action", queryt_inst_mgmtStore, "修改信息")
				updatet_inst_mgmtWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_inst_mgmtWin.hide();
				updatet_inst_mgmtForm.form.reset();
			}
		}]
	});

	updatet_inst_mgmtWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_inst_mgmtForm
	});

	update = function() {
		_record = queryt_inst_mgmtGrid.getSelectionModel().getSelected();
		flag = queryt_inst_mgmtGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_inst_mgmtWin.show();
					
			updatet_inst_mgmtForm.getForm().load({
				url : 't_inst_mgmt_findById.action?t_inst_mgmt.idNumber='+ _record.get('idNumber'),
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

