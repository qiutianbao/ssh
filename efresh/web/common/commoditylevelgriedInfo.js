

	querycommoditylevelStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommoditylevelGrid = new Ext.grid.GridPanel({
		store : querycommoditylevelStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品管理-商品级别表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '级别名称',
dataIndex : 'levelname',
width : 120 
}
,{
header : '毛重',
dataIndex : 'grossweight',
width : 120 
}
,{
header : '净重',
dataIndex : 'cleanweight',
width : 120 
}
,{
header : '包装规格',
dataIndex : 'outerpacking',
width : 120 
}
,{
header : '库存量',
dataIndex : 'stock',
width : 120 
}
,{
header : '自定义属性名1',
dataIndex : 'customproperty1',
width : 120 
}
,{
header : '自定义属性值1',
dataIndex : 'customvalue1',
width : 120 
}
,{
header : '自定义属性名2',
dataIndex : 'customproperty2',
width : 120 
}
,{
header : '自定义属性值2',
dataIndex : 'customvalue2',
width : 120 
}
,{
header : '自定义属性名3',
dataIndex : 'customproperty3',
width : 120 
}
,{
header : '自定义属性值3',
dataIndex : 'customvalue3',
width : 120 
}
,{
header : '自定义属性名4',
dataIndex : 'customproperty4',
width : 120 
}
,{
header : '自定义属性值4',
dataIndex : 'customvalue4',
width : 120 
}
,{
header : '自定义属性名5',
dataIndex : 'customproperty5',
width : 120 
}
,{
header : '自定义属性值5',
dataIndex : 'customvalue5',
width : 120 
}
,{
header : '重量单位主键',
dataIndex : 'idCompany',
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
				addcommoditylevel();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommoditylevelGrid, querycommoditylevelStore, "commoditylevel_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycommoditylevelStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commoditylevelGrid',
		items : [selectUnitForm, querycommoditylevelGrid]
	});
	var divHeight = document.getElementById('commoditylevelGrid').offsetHeight;
	var divWidth = document.getElementById('commoditylevelGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommoditylevelGrid.setWidth(showQueryPanel.getWidth());
	querycommoditylevelGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	