
var queryt_gloss_infoStore;			
var queryt_gloss_infoGrid;
var addt_gloss_info;
var addt_gloss_infoForm;
var addt_gloss_infoWin;
var updatet_gloss_info;
var updatet_gloss_infoWin;
var updatet_gloss_infoForm;
var updatet_gloss_infoReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_gloss_infoView.jsp');
	 queryt_gloss_infoStore = new Ext.data.JsonStore({
		url : 't_gloss_info_findAll.action',
		root : 't_gloss_infoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : '2'
		},
		fields : [,{
name : 'idNumber',
mapping : 'idNumber'
}
,{
name : 'gloss_type',
mapping : 'gloss_type'
}
,{
name : 'ser_no',
mapping : 'ser_no'
}
,{
name : 'gloss_body',
mapping : 'gloss_body'
}
],
		autoLoad : false
		
	});
	
	
	 var record_start = 0;
	 var rowNum = new Ext.grid.RowNumberer({
			header : '序号',
			width : 40,
			renderer : function(value, metadata, record, rowIndex){
				return record_start + 1 + rowIndex;
			}
		});

	

	queryt_gloss_infoStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_gloss_infoGrid = new Ext.grid.GridPanel({
		store : queryt_gloss_infoStore,
		sm : sm,
		stripeRows : true,
		columns : [rowNum,{
header : '术语编码',
dataIndex : 'idNumber',
width : 120}
,{
header : '术语类型',
dataIndex : 'gloss_type',
width : 120 
}
,{
header : '序号',
dataIndex : 'ser_no',
width : 120 
}
,{
header : '术语内容',
dataIndex : 'gloss_body',
width : 120 
}
],
		width : 500,
		height : 560,
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_gloss_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_gloss_infoGrid',
		items : [queryt_gloss_infoGrid]
	});
	var divHeight = document.getElementById('t_gloss_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_gloss_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_gloss_infoGrid.setWidth(showQueryPanel.getWidth());

 });
 
