var showAllInfoPanel;

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('weboffice/checkForShowAllView.jsp');
	
	showAllInfoPanel = new Ext.TabPanel({
		title : '营销话术复核',
		activeTab : 0,
		renderTo : 'checkForAllInfoTabPanel',
		height : document.getElementById('checkForAllInfoTabPanel').offsetHeight,
		width : document.getElementById('checkForAllInfoTabPanel').offsetWidth,

		deferredRender : true,
		align : 'center',
		tabPosition : 'top',
		frame : false,
		items : [{
			title : '开口话术',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" frameborder="0" scrolling="no" src="'+prjpath+'/weboffice/checkForOpen.jsp"></iframe>',
			closable : false
		},{
			title : '投诉处理',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/weboffice/checkForTous.jsp"></iframe>',
			height : 500,
			closable : false
		},{
			title : '退保处理',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/weboffice/checkForTuibao.jsp"></iframe>',
			height : 500,
			closable : false
		},{
			title : '营销话术',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/weboffice/checkForYingxiao.jsp"></iframe>',
			height : 500,
			closable : false
		}]
	})
});