var showAllInfoPanel;

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	//haveRight('Person/ShowAllBaseInfoView.jsp');
	
	showAllInfoPanel = new Ext.TabPanel({
		title : '新产品信息',
		activeTab : 0,
		renderTo : 'allInfoTabPanel',

		deferredRender : true,
		collapsible :true,//折叠
		align : 'center',
		tabPosition : 'top',
		frame : false,
		items : [{
			title : '新产品公告',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/jsp/newProductAndTradeMsgShow1.jsp"></iframe>',
			height : 322,
			closable : false
		},{
			title : '行业快递',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/jsp/tradeMsgShow1.jsp"></iframe>',
			height : 322,
			closable : false
		}]
	})
});