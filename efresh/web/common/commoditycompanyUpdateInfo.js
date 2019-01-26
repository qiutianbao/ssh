
	updatecommoditycompanyReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commoditycompany.idNumber',
mapping : 'idNumber'
}
,{
name : 'commoditycompany.companyname',
mapping : 'companyname'
}
,{
name : 'commoditycompany.company',
mapping : 'company'
}
,{
name : 'commoditycompany.ts',
mapping : 'ts'
}
,{
name : 'commoditycompany.dr',
mapping : 'dr'
}
,{
name : 'commoditycompany.back1',
mapping : 'back1'
}
,{
name : 'commoditycompany.back2',
mapping : 'back2'
}
,{
name : 'commoditycompany.back3',
mapping : 'back3'
}
,{
name : 'commoditycompany.back4',
mapping : 'back4'
}
,{
name : 'commoditycompany.back5',
mapping : 'back5'
}
]
	);
		
	updatecommoditycompanyForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommoditycompanyReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品管理-商品单位表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commoditycompany.idNumber',
width : '80%'
}
,{
fieldLabel : '单位缩写',
id : 'uppdate_company',
xtype : 'textfield',
name : 'commoditycompany.company',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'commoditycompany.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'commoditycompany.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'commoditycompany.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '单位名称',
id : 'uppdate_companyname',
xtype : 'textfield',
name : 'commoditycompany.companyname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'commoditycompany.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'commoditycompany.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'commoditycompany.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'commoditycompany.back5',
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
				check(updatecommoditycompanyForm, "commoditycompany_update.action", querycommoditycompanyStore, "修改信息")
				updatecommoditycompanyWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommoditycompanyWin.hide();
				updatecommoditycompanyForm.form.reset();
			}
		}]
	});

	updatecommoditycompanyWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommoditycompanyForm
	});

	update = function() {
		_record = querycommoditycompanyGrid.getSelectionModel().getSelected();
		flag = querycommoditycompanyGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommoditycompanyWin.show();
					
			updatecommoditycompanyForm.getForm().load({
				url : 'commoditycompany_findById.action?commoditycompany.idNumber='+ _record.get('idNumber'),
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

