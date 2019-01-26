
	updatecommoditylevelReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commoditylevel.idNumber',
mapping : 'idNumber'
}
,{
name : 'commoditylevel.levelname',
mapping : 'levelname'
}
,{
name : 'commoditylevel.grossweight',
mapping : 'grossweight'
}
,{
name : 'commoditylevel.cleanweight',
mapping : 'cleanweight'
}
,{
name : 'commoditylevel.outerpacking',
mapping : 'outerpacking'
}
,{
name : 'commoditylevel.stock',
mapping : 'stock'
}
,{
name : 'commoditylevel.customproperty1',
mapping : 'customproperty1'
}
,{
name : 'commoditylevel.customvalue1',
mapping : 'customvalue1'
}
,{
name : 'commoditylevel.customproperty2',
mapping : 'customproperty2'
}
,{
name : 'commoditylevel.customvalue2',
mapping : 'customvalue2'
}
,{
name : 'commoditylevel.customproperty3',
mapping : 'customproperty3'
}
,{
name : 'commoditylevel.customvalue3',
mapping : 'customvalue3'
}
,{
name : 'commoditylevel.customproperty4',
mapping : 'customproperty4'
}
,{
name : 'commoditylevel.customvalue4',
mapping : 'customvalue4'
}
,{
name : 'commoditylevel.customproperty5',
mapping : 'customproperty5'
}
,{
name : 'commoditylevel.customvalue5',
mapping : 'customvalue5'
}
,{
name : 'commoditylevel.idCompany',
mapping : 'idCompany'
}
,{
name : 'commoditylevel.ts',
mapping : 'ts'
}
,{
name : 'commoditylevel.dr',
mapping : 'dr'
}
,{
name : 'commoditylevel.back1',
mapping : 'back1'
}
,{
name : 'commoditylevel.back2',
mapping : 'back2'
}
,{
name : 'commoditylevel.back3',
mapping : 'back3'
}
,{
name : 'commoditylevel.back4',
mapping : 'back4'
}
,{
name : 'commoditylevel.back5',
mapping : 'back5'
}
]
	);
		
	updatecommoditylevelForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommoditylevelReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品管理-商品级别表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commoditylevel.idNumber',
width : '80%'
}
,{
fieldLabel : '毛重',
id : 'uppdate_grossweight',
xtype : 'numberfield',
name : 'commoditylevel.grossweight',
width : '80%'
}
,{
fieldLabel : '包装规格',
id : 'uppdate_outerpacking',
xtype : 'textfield',
name : 'commoditylevel.outerpacking',
width : '80%'
}
,{
fieldLabel : '自定义属性名1',
id : 'uppdate_customproperty1',
xtype : 'textfield',
name : 'commoditylevel.customproperty1',
width : '80%'
}
,{
fieldLabel : '自定义属性名2',
id : 'uppdate_customproperty2',
xtype : 'textfield',
name : 'commoditylevel.customproperty2',
width : '80%'
}
,{
fieldLabel : '自定义属性名3',
id : 'uppdate_customproperty3',
xtype : 'textfield',
name : 'commoditylevel.customproperty3',
width : '80%'
}
,{
fieldLabel : '自定义属性名4',
id : 'uppdate_customproperty4',
xtype : 'textfield',
name : 'commoditylevel.customproperty4',
width : '80%'
}
,{
fieldLabel : '自定义属性名5',
id : 'uppdate_customproperty5',
xtype : 'textfield',
name : 'commoditylevel.customproperty5',
width : '80%'
}
,{
fieldLabel : '重量单位主键',
id : 'uppdate_idCompany',
xtype : 'textfield',
name : 'commoditylevel.idCompany',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'commoditylevel.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'commoditylevel.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'commoditylevel.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '级别名称',
id : 'uppdate_levelname',
xtype : 'textfield',
name : 'commoditylevel.levelname',
width : '80%'
}
,{
fieldLabel : '净重',
id : 'uppdate_cleanweight',
xtype : 'numberfield',
name : 'commoditylevel.cleanweight',
width : '80%'
}
,{
fieldLabel : '库存量',
id : 'uppdate_stock',
xtype : 'numberfield',
name : 'commoditylevel.stock',
width : '80%'
}
,{
fieldLabel : '自定义属性值1',
id : 'uppdate_customvalue1',
xtype : 'textfield',
name : 'commoditylevel.customvalue1',
width : '80%'
}
,{
fieldLabel : '自定义属性值2',
id : 'uppdate_customvalue2',
xtype : 'textfield',
name : 'commoditylevel.customvalue2',
width : '80%'
}
,{
fieldLabel : '自定义属性值3',
id : 'uppdate_customvalue3',
xtype : 'textfield',
name : 'commoditylevel.customvalue3',
width : '80%'
}
,{
fieldLabel : '自定义属性值4',
id : 'uppdate_customvalue4',
xtype : 'textfield',
name : 'commoditylevel.customvalue4',
width : '80%'
}
,{
fieldLabel : '自定义属性值5',
id : 'uppdate_customvalue5',
xtype : 'textfield',
name : 'commoditylevel.customvalue5',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'commoditylevel.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'commoditylevel.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'commoditylevel.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'commoditylevel.back5',
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
				check(updatecommoditylevelForm, "commoditylevel_update.action", querycommoditylevelStore, "修改信息")
				updatecommoditylevelWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommoditylevelWin.hide();
				updatecommoditylevelForm.form.reset();
			}
		}]
	});

	updatecommoditylevelWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommoditylevelForm
	});

	update = function() {
		_record = querycommoditylevelGrid.getSelectionModel().getSelected();
		flag = querycommoditylevelGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommoditylevelWin.show();
					
			updatecommoditylevelForm.getForm().load({
				url : 'commoditylevel_findById.action?commoditylevel.idNumber='+ _record.get('idNumber'),
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

