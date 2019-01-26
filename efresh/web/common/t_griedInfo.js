
	query##tableName##Store.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var query##tableName##Grid = new Ext.grid.GridPanel({
		store : query##tableName##Store,
		sm : sm,
		columns : [ sm, rowNum,##column_gried##],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				add##tableName##();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (query##tableName##Grid, query##tableName##Store, "##tableName##_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : query##tableName##Store,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : '##tableName##Grid',
		items : [selectUnitForm, query##tableName##Grid]
	});
	var divHeight = document.getElementById('##tableName##Grid').offsetHeight;
	var divWidth = document.getElementById('##tableName##Grid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	query##tableName##Grid.setWidth(showQueryPanel.getWidth());
	query##tableName##Grid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	