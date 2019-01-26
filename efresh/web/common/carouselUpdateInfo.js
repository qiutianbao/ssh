
	updatecarouselReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'carousel.idNumber',
mapping : 'idNumber'
}
,{
name : 'carousel.serialnumber',
mapping : 'serialnumber'
}
,{
name : 'carousel.imagename',
mapping : 'imagename'
}
,{
name : 'carousel.ts',
mapping : 'ts'
}
,{
name : 'carousel.dr',
mapping : 'dr'
}
,{
name : 'carousel.back1',
mapping : 'back1'
}
,{
name : 'carousel.back2',
mapping : 'back2'
}
,{
name : 'carousel.back3',
mapping : 'back3'
}
]
	);
		
	updatecarouselForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecarouselReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '首页轮播图表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'carousel.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'uppdate_imagename',
xtype : 'textfield',
name : 'carousel.imagename',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'carousel.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'carousel.back2',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '序号',
id : 'uppdate_serialnumber',
xtype : 'numberfield',
name : 'carousel.serialnumber',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'carousel.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'carousel.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'carousel.back3',
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
				check(updatecarouselForm, "carousel_update.action", querycarouselStore, "修改信息")
				updatecarouselWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecarouselWin.hide();
				updatecarouselForm.form.reset();
			}
		}]
	});

	updatecarouselWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecarouselForm
	});

	update = function() {
		_record = querycarouselGrid.getSelectionModel().getSelected();
		flag = querycarouselGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecarouselWin.show();
					
			updatecarouselForm.getForm().load({
				url : 'carousel_findById.action?carousel.idNumber='+ _record.get('idNumber'),
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

