
	updatecommoditydescribeReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commoditydescribe.idNumber',
mapping : 'idNumber'
}
,{
name : 'commoditydescribe.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'commoditydescribe.imagename1',
mapping : 'imagename1'
}
,{
name : 'commoditydescribe.describe1',
mapping : 'describe1'
}
,{
name : 'commoditydescribe.imagename2',
mapping : 'imagename2'
}
,{
name : 'commoditydescribe.describe2',
mapping : 'describe2'
}
,{
name : 'commoditydescribe.imagename3',
mapping : 'imagename3'
}
,{
name : 'commoditydescribe.describe3',
mapping : 'describe3'
}
,{
name : 'commoditydescribe.imagename4',
mapping : 'imagename4'
}
,{
name : 'commoditydescribe.describe4',
mapping : 'describe4'
}
,{
name : 'commoditydescribe.imagename5',
mapping : 'imagename5'
}
,{
name : 'commoditydescribe.describe5',
mapping : 'describe5'
}
,{
name : 'commoditydescribe.imagename6',
mapping : 'imagename6'
}
,{
name : 'commoditydescribe.describe6',
mapping : 'describe6'
}
,{
name : 'commoditydescribe.ts',
mapping : 'ts'
}
,{
name : 'commoditydescribe.dr',
mapping : 'dr'
}
,{
name : 'commoditydescribe.back1',
mapping : 'back1'
}
,{
name : 'commoditydescribe.back2',
mapping : 'back2'
}
,{
name : 'commoditydescribe.back3',
mapping : 'back3'
}
,{
name : 'commoditydescribe.back4',
mapping : 'back4'
}
,{
name : 'commoditydescribe.back5',
mapping : 'back5'
}
]
	);
		
	updatecommoditydescribeForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommoditydescribeReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品管理-商品图文描述表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commoditydescribe.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称1',
id : 'uppdate_imagename1',
xtype : 'textfield',
name : 'commoditydescribe.imagename1',
width : '80%'
}
,{
fieldLabel : '图片名称2',
id : 'uppdate_imagename2',
xtype : 'textfield',
name : 'commoditydescribe.imagename2',
width : '80%'
}
,{
fieldLabel : '图片名称3',
id : 'uppdate_imagename3',
xtype : 'textfield',
name : 'commoditydescribe.imagename3',
width : '80%'
}
,{
fieldLabel : '图片名称4',
id : 'uppdate_imagename4',
xtype : 'textfield',
name : 'commoditydescribe.imagename4',
width : '80%'
}
,{
fieldLabel : '图片名称5',
id : 'uppdate_imagename5',
xtype : 'textfield',
name : 'commoditydescribe.imagename5',
width : '80%'
}
,{
fieldLabel : '图片名称6',
id : 'uppdate_imagename6',
xtype : 'textfield',
name : 'commoditydescribe.imagename6',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'commoditydescribe.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'commoditydescribe.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'commoditydescribe.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'commoditydescribe.back5',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品主键',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'commoditydescribe.idCommodity',
width : '80%'
}
,{
fieldLabel : '描述1',
id : 'uppdate_describe1',
xtype : 'textfield',
name : 'commoditydescribe.describe1',
width : '80%'
}
,{
fieldLabel : '描述2',
id : 'uppdate_describe2',
xtype : 'textfield',
name : 'commoditydescribe.describe2',
width : '80%'
}
,{
fieldLabel : '描述3',
id : 'uppdate_describe3',
xtype : 'textfield',
name : 'commoditydescribe.describe3',
width : '80%'
}
,{
fieldLabel : '描述4',
id : 'uppdate_describe4',
xtype : 'textfield',
name : 'commoditydescribe.describe4',
width : '80%'
}
,{
fieldLabel : '描述5',
id : 'uppdate_describe5',
xtype : 'textfield',
name : 'commoditydescribe.describe5',
width : '80%'
}
,{
fieldLabel : '描述5',
id : 'uppdate_describe6',
xtype : 'textfield',
name : 'commoditydescribe.describe6',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'commoditydescribe.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'commoditydescribe.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'commoditydescribe.back4',
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
				check(updatecommoditydescribeForm, "commoditydescribe_update.action", querycommoditydescribeStore, "修改信息")
				updatecommoditydescribeWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommoditydescribeWin.hide();
				updatecommoditydescribeForm.form.reset();
			}
		}]
	});

	updatecommoditydescribeWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommoditydescribeForm
	});

	update = function() {
		_record = querycommoditydescribeGrid.getSelectionModel().getSelected();
		flag = querycommoditydescribeGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommoditydescribeWin.show();
					
			updatecommoditydescribeForm.getForm().load({
				url : 'commoditydescribe_findById.action?commoditydescribe.idNumber='+ _record.get('idNumber'),
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

