

	querycommoditydescribeStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommoditydescribeGrid = new Ext.grid.GridPanel({
		store : querycommoditydescribeStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品管理-商品图文描述表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '商品主键',
dataIndex : 'idCommodity',
width : 120 
}
,{
header : '图片名称1',
dataIndex : 'imagename1',
width : 120 
}
,{
header : '描述1',
dataIndex : 'describe1',
width : 120 
}
,{
header : '图片名称2',
dataIndex : 'imagename2',
width : 120 
}
,{
header : '描述2',
dataIndex : 'describe2',
width : 120 
}
,{
header : '图片名称3',
dataIndex : 'imagename3',
width : 120 
}
,{
header : '描述3',
dataIndex : 'describe3',
width : 120 
}
,{
header : '图片名称4',
dataIndex : 'imagename4',
width : 120 
}
,{
header : '描述4',
dataIndex : 'describe4',
width : 120 
}
,{
header : '图片名称5',
dataIndex : 'imagename5',
width : 120 
}
,{
header : '描述5',
dataIndex : 'describe5',
width : 120 
}
,{
header : '图片名称6',
dataIndex : 'imagename6',
width : 120 
}
,{
header : '描述5',
dataIndex : 'describe6',
width : 120 
}
,{
header : '时间戳',
dataIndex : 'ts',
width : 120 
}
,{
header : '删除标识',
dataIndex : 'dr',
width : 120 
}
,{
header : '预留字段1',
dataIndex : 'back1',
width : 120 
}
,{
header : '预留字段2',
dataIndex : 'back2',
width : 120 
}
,{
header : '预留字段3',
dataIndex : 'back3',
width : 120 
}
,{
header : '预留字段4',
dataIndex : 'back4',
width : 120 
}
,{
header : '预留字段5',
dataIndex : 'back5',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addcommoditydescribe();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommoditydescribeGrid, querycommoditydescribeStore, "commoditydescribe_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycommoditydescribeStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commoditydescribeGrid',
		items : [selectUnitForm, querycommoditydescribeGrid]
	});
	var divHeight = document.getElementById('commoditydescribeGrid').offsetHeight;
	var divWidth = document.getElementById('commoditydescribeGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommoditydescribeGrid.setWidth(showQueryPanel.getWidth());
	querycommoditydescribeGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	