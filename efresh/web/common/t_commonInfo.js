var query##tableName##Store;			
var query##tableName##Grid;
var add##tableName##;
var add##tableName##Form;
var add##tableName##Win;
var update##tableName##;
var update##tableName##Win;
var update##tableName##Form;
var update##tableName##Reader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/##tableName##View.jsp');
	 query##tableName##Store = new Ext.data.JsonStore({
		url : '##tableName##_findAll.action',
		root : '##tableName##List',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [##mapping##],
		autoLoad : false
		
	});
	
	
	
	##condiction_info##;
	
	
	##query_info##
	

	##add_info##
	##update_info##




	
	// 加载页面后默认焦点
	Ext.getCmp("##first_field##").focus(false, 1000);
 });
 

