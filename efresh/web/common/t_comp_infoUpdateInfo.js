
	updatet_comp_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_comp_info.idNumber',
mapping : 'idNumber'
}
,{
name : 't_comp_info.comp_abbr_name',
mapping : 'comp_abbr_name'
}
,{
name : 't_comp_info.partner_info',
mapping : 'partner_info'
}
,{
name : 't_comp_info.comp_name',
mapping : 'comp_name'
}
,{
name : 't_comp_info.found_date',
mapping : 'found_date'
}
,{
name : 't_comp_info.reg_bal',
mapping : 'reg_bal'
}
,{
name : 't_comp_info.hq_city',
mapping : 'hq_city'
}
,{
name : 't_comp_info.hq_address',
mapping : 'hq_address'
}
,{
name : 't_comp_info.comp_url',
mapping : 'comp_url'
}
,{
name : 't_comp_info.serv_phone',
mapping : 'serv_phone'
}
,{
name : 't_comp_info.loc_address',
mapping : 'loc_address'
}
,{
name : 't_comp_info.con_name',
mapping : 'con_name'
}
,{
name : 't_comp_info.con_phone',
mapping : 'con_phone'
}
,{
name : 't_comp_info.comp_abbr',
mapping : 'comp_abbr'
}
,{
name : 't_comp_info.glory_info',
mapping : 'glory_info'
}
]
	);
		
	updatet_comp_infoForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_comp_infoReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '保险公司编号',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_comp_info.idnumber',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '保险公司简称',
id : 'uppdate_comp_abbr_name',
xtype : 'textfield',
name : 't_comp_info.comp_abbr_name',
width : '80%'
}
]}
]}
,{
name : 't_comp_info.partner_info',
xtype : 'field',
fieldLabel : '股东构成及比例',
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
fieldLabel : '保险公司全称',
id : 'uppdate_comp_name',
xtype : 'textfield',
name : 't_comp_info.comp_name',
width : '80%'
}
,{
fieldLabel : '注册资本',
id : 'uppdate_reg_bal',
xtype : 'textfield',
name : 't_comp_info.reg_bal',
width : '80%'
}
,{
fieldLabel : '总部地址',
id : 'uppdate_hq_address',
xtype : 'textfield',
name : 't_comp_info.hq_address',
width : '80%'
}
,{
fieldLabel : '客服电话',
id : 'uppdate_serv_phone',
xtype : 'textfield',
name : 't_comp_info.serv_phone',
width : '80%'
}
,{
fieldLabel : '联系人姓名',
id : 'uppdate_con_name',
xtype : 'textfield',
name : 't_comp_info.con_name',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '公司成立时间',
id : 'uppdate_found_date',
xtype : 'datefield',
name : 't_comp_info.found_date',
width : '80%'
}
,{
fieldLabel : '总部所在城市',
id : 'uppdate_hq_city',
xtype : 'textfield',
name : 't_comp_info.hq_city',
width : '80%'
}
,{
fieldLabel : '公司网址',
id : 'uppdate_comp_url',
xtype : 'textfield',
name : 't_comp_info.comp_url',
width : '80%'
}
,{
fieldLabel : '本部地址',
id : 'uppdate_loc_address',
xtype : 'textfield',
name : 't_comp_info.loc_address',
width : '80%'
}
,{
fieldLabel : '服务人员联系电话',
id : 'uppdate_con_phone',
xtype : 'textfield',
name : 't_comp_info.con_phone',
width : '80%'
}
]}
]}
,{
name : 't_comp_info.comp_abbr',
xtype : 'field',
fieldLabel : '公司简介',
anchor : '95%'
}
,{
name : 't_comp_info.glory_info',
xtype : 'field',
fieldLabel : '获奖荣誉',
anchor : '95%'
}
,],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatet_comp_infoForm, "t_comp_info_update.action", queryt_comp_infoStore, "修改信息")
				updatet_comp_infoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_comp_infoWin.hide();
				updatet_comp_infoForm.form.reset();
			}
		}]
	});

	updatet_comp_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_comp_infoForm
	});

	update = function() {
		_record = queryt_comp_infoGrid.getSelectionModel().getSelected();
		flag = queryt_comp_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_comp_infoWin.show();
					
			updatet_comp_infoForm.getForm().load({
				url : 't_comp_info_findById.action?t_comp_info.idNumber='+ _record.get('idNumber'),
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

