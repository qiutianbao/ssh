
var querysecondlevelorderStore;			
var querysecondlevelorderGrid;

var showQueryPanel;


 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	 querysecondlevelorderStore = new Ext.data.JsonStore({
	//	url : 'secondlevelorder_findAll.action',
		url : 'secondlevelorder_findInfoByConditions.action?secondlevelorder.orderstatus=1',
	//	root : 'secondlevelorderList',
		root : 'list',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'home'
		},
		fields : [{
name : 'secondlevelorderNo',
mapping : 'secondlevelorder.secondlevelorderNo'
},{
	name : 'tlr_name',
	mapping : 't_tlr_mgmt.tlr_name'
},{
	name : 'deliveryaddress',
	mapping : 't_tlr_mgmt.deliveryaddress'
},{
	name : 'phone',
	mapping : 't_tlr_mgmt.phone'
}
//,{
//	name : 'corpname',
//	mapping : 'estore.corpname'
//}
,{
name : 'address',
mapping : 'address'
}
,{
name : 'creationordertime',
mapping : 'secondlevelorder.creationordertime'
}
,{
	name : 'isurgent',
	mapping : 'secondlevelorder.isurgent'
}
,{
name : 'orderstatus',
mapping : 'orderstatus'
}
],
		autoLoad : false
		
	});
	
	
	

	querysecondlevelorderStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysecondlevelorderGrid = new Ext.grid.GridPanel({
		store : querysecondlevelorderStore,
		sm : sm,
		columns : [ sm, rowNum
,{
header : '订单编号',
dataIndex : 'secondlevelorderNo',
width : 120 
}
,{
header : '收货人',
dataIndex : 'tlr_name',
width : 120 
}
,{
header : '收货人地址',
dataIndex : 'deliveryaddress',
width : 120 
}
,{
header : '手机号码',
dataIndex : 'phone',
width : 120 
}
//,{
//header : '产地',
//dataIndex : 'corpname',
//width : 120 
//}
,{
	header : '下单时间',
	dataIndex : 'creationordertime',
	width : 240 ,
	renderer:function(value){
		return new Date(value).format(Date.patterns.ISO8601Long);
	}
}
,{
	header : '是否是紧急订单',
	dataIndex : 'isurgent',
	width : 120 ,
	renderer:function(value){
		var isu = "";
		if(value=="Y"){
			isu = "紧急订单";
		}else {
			isu = "正常订单";
		}
		return isu;
	}
}
,{
header : '状态',
dataIndex : 'orderstatus',
width : 120 
}
],
		width : 500,
		height : 200,
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysecondlevelorderStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'newlevelorderGrid',
		items : [ querysecondlevelorderGrid],
		bodyStyle : 'overflow-x:hidden; overflow-y:scroll',
	});
	var divHeight = document.getElementById('newlevelorderGrid').offsetHeight;
	var divWidth = document.getElementById('newlevelorderGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysecondlevelorderGrid.setWidth(showQueryPanel.getWidth());
	querysecondlevelorderGrid.setHeight(showQueryPanel.getHeight());
	


	
	// 加载页面后默认焦点
 });
 Date.patterns = {
		 ISO8601Long:"Y-m-d H:i:s",
		 ISO8601Short:"Y-m-d",
		 ShortDate: "n/j/Y",
		 LongDate: "l, F d, Y",
		 FullDateTime: "l, F d, Y g:i:s A",
		 MonthDay: "F d",
		 ShortTime: "g:i A",
		 LongTime: "g:i:s A",
		 SortableDateTime: "Y-m-d\\TH:i:s",
		 UniversalSortableDateTime: "Y-m-d H:i:sO",
		 YearMonth: "F, Y"
 }