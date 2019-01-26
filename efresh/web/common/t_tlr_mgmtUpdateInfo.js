
	updatet_tlr_mgmtReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_tlr_mgmt.idNumber',
mapping : 'idNumber'
}
,{
name : 't_tlr_mgmt.phone',
mapping : 'phone'
}
,{
name : 't_tlr_mgmt.tlr_name',
mapping : 'tlr_name'
}
,{
name : 't_tlr_mgmt.inst_no',
mapping : 'inst_no'
}
,{
name : 't_tlr_mgmt.tlr_type',
mapping : 'tlr_type'
}
,{
name : 't_tlr_mgmt.tlr_stat',
mapping : 'tlr_stat'
}
,{
name : 't_tlr_mgmt.tlr_pwd',
mapping : 'tlr_pwd'
}
,{
name : 't_tlr_mgmt.islock',
mapping : 'islock'
}
,{
name : 't_tlr_mgmt.deliveryaddress',
mapping : 'deliveryaddress'
}
,{
name : 't_tlr_mgmt.stallsname',
mapping : 'stallsname'
}
,{
name : 't_tlr_mgmt.creationtime',
mapping : 'creationtime'
}
,{
name : 't_tlr_mgmt.userlogo',
mapping : 'userlogo'
}
,{
name : 't_tlr_mgmt.examine',
mapping : 'examine'
}
,{
name : 't_tlr_mgmt.lst_pwd_date',
mapping : 'lst_pwd_date'
}
,{
name : 't_tlr_mgmt.lst_modify_tlr',
mapping : 'lst_modify_tlr'
}
,{
name : 't_tlr_mgmt.lst_modify_date',
mapping : 'lst_modify_date'
}
,{
name : 't_tlr_mgmt.deliveryaddress2',
mapping : 'deliveryaddress2'
}
,{
name : 't_tlr_mgmt.address_status',
mapping : 'address_status'
}
,{
name : 't_tlr_mgmt.addresss_upts',
mapping : 'addresss_upts'
}
,{
name : 't_tlr_mgmt.dr',
mapping : 'dr'
}
,{
name : 't_tlr_mgmt.back1',
mapping : 'back1'
}
,{
name : 't_tlr_mgmt.back2',
mapping : 'back2'
}
,{
name : 't_tlr_mgmt.back3',
mapping : 'back3'
}
]
	);
		
	updatet_tlr_mgmtForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_tlr_mgmtReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 't_tlr_mgmt.idNumber',
width : '80%'
}
,{
fieldLabel : '用户名称',
id : 'uppdate_tlr_name',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_name',
width : '80%'
}
,{
fieldLabel : '用户类型、0=买家、1=卖家、2=系统用户',
id : 'uppdate_tlr_type',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_type',
width : '80%'
}
,{
fieldLabel : '密码',
id : 'uppdate_tlr_pwd',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_pwd',
width : '80%'
}
,{
fieldLabel : '收货地址',
id : 'uppdate_deliveryaddress',
xtype : 'textfield',
name : 't_tlr_mgmt.deliveryaddress',
width : '80%'
}
,{
fieldLabel : '注册时间',
id : 'uppdate_creationtime',
xtype : 'datetimefield',
name : 't_tlr_mgmt.creationtime',
anchor : '95%'
}
,{
fieldLabel : '审核是否通过,0表示待审批，1表示审批通过，2表示审批未通过',
id : 'uppdate_examine',
xtype : 'textfield',
name : 't_tlr_mgmt.examine',
width : '80%'
}
,{
fieldLabel : '最近修改人',
id : 'uppdate_lst_modify_tlr',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_modify_tlr',
width : '80%'
}
,{
fieldLabel : '申请收货地址',
id : 'uppdate_deliveryaddress2',
xtype : 'textfield',
name : 't_tlr_mgmt.deliveryaddress2',
width : '80%'
}
,{
fieldLabel : '地址修改时间',
id : 'uppdate_addresss_upts',
xtype : 'textfield',
name : 't_tlr_mgmt.addresss_upts',
width : '80%'
}
,{
fieldLabel : '备用1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 't_tlr_mgmt.back1',
width : '80%'
}
,{
fieldLabel : '备用3',
id : 'uppdate_back3',
xtype : 'numberfield',
name : 't_tlr_mgmt.back3',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '手机号',
id : 'uppdate_phone',
xtype : 'textfield',
name : 't_tlr_mgmt.phone',
width : '80%'
}
,{
fieldLabel : '机构编号',
id : 'uppdate_inst_no',
xtype : 'textfield',
name : 't_tlr_mgmt.inst_no',
width : '80%'
}
,{
fieldLabel : '用户状态',
id : 'uppdate_tlr_stat',
xtype : 'textfield',
name : 't_tlr_mgmt.tlr_stat',
width : '80%'
}
,{
fieldLabel : '是否锁定',
id : 'uppdate_islock',
xtype : 'textfield',
name : 't_tlr_mgmt.islock',
width : '80%'
}
,{
fieldLabel : '档口名称',
id : 'uppdate_stallsname',
xtype : 'textfield',
name : 't_tlr_mgmt.stallsname',
width : '80%'
}
,{
fieldLabel : '用户logo',
id : 'uppdate_userlogo',
xtype : 'textfield',
name : 't_tlr_mgmt.userlogo',
width : '80%'
}
,{
fieldLabel : '最近密码修改时间',
id : 'uppdate_lst_pwd_date',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_pwd_date',
width : '80%'
}
,{
fieldLabel : '最近修改时间',
id : 'uppdate_lst_modify_date',
xtype : 'textfield',
name : 't_tlr_mgmt.lst_modify_date',
width : '80%'
}
,{
fieldLabel : '地址修改审核状态 0审核中 1审核通过 2审核未通过',
id : 'uppdate_address_status',
xtype : 'textfield',
name : 't_tlr_mgmt.address_status',
width : '80%'
}
,{
fieldLabel : '删除标识 1删除 0h或者null没删除',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 't_tlr_mgmt.dr',
width : '80%'
}
,{
fieldLabel : '备用2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 't_tlr_mgmt.back2',
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
				check(updatet_tlr_mgmtForm, "t_tlr_mgmt_update.action", queryt_tlr_mgmtStore, "修改信息")
				updatet_tlr_mgmtWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_tlr_mgmtWin.hide();
				updatet_tlr_mgmtForm.form.reset();
			}
		}]
	});

	updatet_tlr_mgmtWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_tlr_mgmtForm
	});

	update = function() {
		_record = queryt_tlr_mgmtGrid.getSelectionModel().getSelected();
		flag = queryt_tlr_mgmtGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_tlr_mgmtWin.show();
					
			updatet_tlr_mgmtForm.getForm().load({
				url : 't_tlr_mgmt_findById.action?t_tlr_mgmt.idNumber='+ _record.get('idNumber'),
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

