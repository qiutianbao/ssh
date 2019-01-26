
	updatet_info_mgmtReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_info_mgmt.idNumber',
mapping : 'idNumber'
}
,{
name : 't_info_mgmt.info_type',
mapping : 'info_type'
}
,{
name : 't_info_mgmt.info_head',
mapping : 'info_head'
}
,{
name : 't_info_mgmt.info_body',
mapping : 'info_body'
}
,{
name : 't_info_mgmt.info_path',
mapping : 'info_path'
}
,{
name : 't_info_mgmt.info_name',
mapping : 'info_name'
}
,{
name : 't_info_mgmt.reas_date',
mapping : 'reas_date'
}
,{
name : 't_info_mgmt.tlr_no',
mapping : 'tlr_no'
}
]
	);
		
	updatet_info_mgmtForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_info_mgmtReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '信息编码',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_info_mgmt.idnumber',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '信息类型',
id : 'uppdate_info_type',
width : 100,
xtype : 'combo',
store : info_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_info_mgmt.info_type',
pageSize : 5,
anchor : '90%'
}
]}
]}
,{
name : 't_info_mgmt.info_head',
xtype : 'field',
fieldLabel : '信息标题',
anchor : '95%'
}
,{
name : 't_info_mgmt.info_body',
xtype : 'field',
fieldLabel : '信息内容',
anchor : '95%'
}
,{
name : 't_info_mgmt.info_path',
xtype : 'field',
fieldLabel : '附件存储路径',
anchor : '95%'
}
,{
name : 't_info_mgmt.info_name',
xtype : 'field',
fieldLabel : '附件名称',
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
fieldLabel : '发布日期',
id : 'uppdate_reas_date',
xtype : 'datefield',
name : 't_info_mgmt.reas_date',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '发布用户',
id : 'uppdate_tlr_no',
xtype : 'textfield',
name : 't_info_mgmt.tlr_no',
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
				check(updatet_info_mgmtForm, "t_info_mgmt_update.action", queryt_info_mgmtStore, "修改信息")
				updatet_info_mgmtWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_info_mgmtWin.hide();
				updatet_info_mgmtForm.form.reset();
			}
		}]
	});

	updatet_info_mgmtWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_info_mgmtForm
	});

	update = function() {
		_record = queryt_info_mgmtGrid.getSelectionModel().getSelected();
		flag = queryt_info_mgmtGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_info_mgmtWin.show();
					
			updatet_info_mgmtForm.getForm().load({
				url : 't_info_mgmt_findById.action?t_info_mgmt.idNumber='+ _record.get('idNumber'),
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

