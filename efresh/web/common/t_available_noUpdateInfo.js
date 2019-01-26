
	updatet_available_noReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_available_no.idNumber',
mapping : 'idNumber'
}
,{
name : 't_available_no.inst_no',
mapping : 'inst_no'
}
,{
name : 't_available_no.name',
mapping : 'name'
}
,{
name : 't_available_no.crt_no',
mapping : 'crt_no'
}
,{
name : 't_available_no.bgn_no',
mapping : 'bgn_no'
}
,{
name : 't_available_no.inv',
mapping : 'inv'
}
,{
name : 't_available_no.max_no',
mapping : 'max_no'
}
,{
name : 't_available_no.warn_rate',
mapping : 'warn_rate'
}
]
	);
		
	updatet_available_noForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_available_noReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '标识号',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_available_no.idnumber',
width : '80%'
}
,{
fieldLabel : '名称',
id : 'uppdate_name',
xtype : 'textfield',
name : 't_available_no.name',
width : '80%'
}
,{
fieldLabel : '起始编号',
id : 'uppdate_bgn_no',
xtype : 'textfield',
name : 't_available_no.bgn_no',
width : '80%'
}
,{
fieldLabel : '最大编号',
id : 'uppdate_max_no',
xtype : 'textfield',
name : 't_available_no.max_no',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构码',
id : 'uppdate_inst_no',
xtype : 'textfield',
name : 't_available_no.inst_no',
width : '80%'
}
,{
fieldLabel : '当前可用编号',
id : 'uppdate_crt_no',
xtype : 'textfield',
name : 't_available_no.crt_no',
width : '80%'
}
,{
fieldLabel : '间隔',
id : 'uppdate_inv',
xtype : 'textfield',
name : 't_available_no.inv',
width : '80%'
}
,{
fieldLabel : '预警比例',
id : 'uppdate_warn_rate',
xtype : 'textfield',
name : 't_available_no.warn_rate',
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
				check(updatet_available_noForm, "t_available_no_update.action", queryt_available_noStore, "修改信息")
				updatet_available_noWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_available_noWin.hide();
				updatet_available_noForm.form.reset();
			}
		}]
	});

	updatet_available_noWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_available_noForm
	});

	update = function() {
		_record = queryt_available_noGrid.getSelectionModel().getSelected();
		flag = queryt_available_noGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_available_noWin.show();
					
			updatet_available_noForm.getForm().load({
				url : 't_available_no_findById.action?t_available_no.idNumber='+ _record.get('idNumber'),
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

