var showAllInfoPanel;

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('Person/ShowAllBaseInfoView.jsp');
	
	showAllInfoPanel = new Ext.TabPanel({
		title : '人事信息管理',
		activeTab : 0,
		renderTo : 'allInfoTabPanel',
		height : document.getElementById('allInfoTabPanel').offsetHeight,
		width : document.getElementById('allInfoTabPanel').offsetWidth,

		deferredRender : true,
		align : 'center',
		tabPosition : 'top',
		frame : false,
		items : [{
			title : '人员信息管理',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" frameborder="0" scrolling="no" src="'+prjpath+'/Person/PersonelInfoView.jsp"></iframe>',
//			height : 500,
			closable : false
		},{
			title : '学历信息管理',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/Person/AcademicManagementView.jsp"></iframe>',
			height : 500,
			closable : false
		},{
			title : '职称信息管理',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/Person/PositionInfoView.jsp"></iframe>',
			height : 500,
			closable : false
		},{
			title : '职称字典管理',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/Person/PositionNameInfoView.jsp"></iframe>',
			height : 500,
			closable : false
		},{
			title : '请假原因字典管理',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/Person/ApplicaReasonView.jsp"></iframe>',
			height : 500,
			closable : false
		}]
	})
});