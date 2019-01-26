
	updatecategoryReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'category.idNumber',
mapping : 'idNumber'
}
,{
name : 'category.superiorcode',
mapping : 'superiorcode'
}
,{
name : 'category.categoryname',
mapping : 'categoryname'
}
,{
name : 'category.seflcode',
mapping : 'seflcode'
}
,{
name : 'category.ts',
mapping : 'ts'
}
,{
name : 'category.dr',
mapping : 'dr'
}
,{
name : 'category.back1',
mapping : 'back1'
}
,{
name : 'category.back2',
mapping : 'back2'
}
,{
name : 'category.back3',
mapping : 'back3'
}
,{
name : 'category.back4',
mapping : 'back4'
}
]
	);
		
	updatecategoryForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecategoryReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品管理-商品分类表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'category.idNumber',
width : '80%'
}
,{
fieldLabel : '分类名称',
id : 'uppdate_categoryname',
xtype : 'textfield',
name : 'category.categoryname',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'category.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'category.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'category.back3',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '上级分类编码',
id : 'uppdate_superiorcode',
xtype : 'textfield',
name : 'category.superiorcode',
width : '80%'
}
,{
fieldLabel : '自身分类编码',
id : 'uppdate_seflcode',
xtype : 'textfield',
name : 'category.seflcode',
width : '80%'
}
,{
fieldLabel : '删除标志',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'category.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'category.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'category.back4',
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
				check(updatecategoryForm, "category_update.action", querycategoryStore, "修改信息")
				updatecategoryWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecategoryWin.hide();
				updatecategoryForm.form.reset();
			}
		}]
	});

	updatecategoryWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecategoryForm
	});

	update = function() {
		_record = querycategoryGrid.getSelectionModel().getSelected();
		flag = querycategoryGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecategoryWin.show();
					
			updatecategoryForm.getForm().load({
				url : 'category_findById.action?category.idNumber='+ _record.get('idNumber'),
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

