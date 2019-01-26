var showAllInfoPanel;

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('weboffice/ShowAllView.jsp');
	
	showAllInfoPanel = new Ext.TabPanel({
		title : '营销话术',
		activeTab : 0,
		renderTo : 'allInfoTabPanel',
		height : document.getElementById('allInfoTabPanel').offsetHeight,
		width : document.getElementById('allInfoTabPanel').offsetWidth,

		deferredRender : true,
		align : 'center',
		tabPosition : 'top',
		frame : false,
		items : [{
			title : '开口话术',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" frameborder="0" scrolling="no" src="'+prjpath+'/weboffice/open.jsp"></iframe>',
			closable : false
		},{
			title : '投诉处理',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/weboffice/tous.jsp"></iframe>',
			height : 500,
			closable : false
		},{
			title : '退保处理',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/weboffice/tuibao.jsp"></iframe>',
			height : 500,
			closable : false
		},{
			title : '营销话术',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/weboffice/yingxiao.jsp"></iframe>',
			height : 500,
			closable : false
		}]
	})
});