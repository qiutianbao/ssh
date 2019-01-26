

	querytj_paramitemStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querytj_paramitemGrid = new Ext.grid.GridPanel({
		store : querytj_paramitemStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '参数值',
dataIndex : 'PARA',
width : 120 
}
,{
header : '参数标识',
dataIndex : 'PARAMETERID',
width : 120 
}
,{
header : '参数名称',
dataIndex : 'PARAMETERNAME',
width : 120 
}
,{
header : '参数简称',
dataIndex : 'ABNAME',
width : 120 
}
,{
header : '参数级别',
dataIndex : 'PARAMLEVEL',
width : 120 
}
,{
header : '参数说明',
dataIndex : 'PARAMETERMEMO',
width : 120 
}
,{
header : '排序编号',
dataIndex : 'SORTNUM',
width : 120 
}
,{
header : '上级参数值',
dataIndex : 'SP_PARAMVALUE',
width : 120 
}
,{
header : '上级参数标识',
dataIndex : 'SP_PARAMID',
width : 120 
}
,{
header : '是否叶子节点',
dataIndex : 'IF_NODE',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addtj_paramitem();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querytj_paramitemGrid, querytj_paramitemStore, "tj_paramitem_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querytj_paramitemStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'tj_paramitemGrid',
		items : [selectUnitForm, querytj_paramitemGrid]
	});
	var divHeight = document.getElementById('tj_paramitemGrid').offsetHeight;
	var divWidth = document.getElementById('tj_paramitemGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querytj_paramitemGrid.setWidth(showQueryPanel.getWidth());
	querytj_paramitemGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	