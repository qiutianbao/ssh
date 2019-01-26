var showAllInfoPanel;

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	//haveRight('Person/ShowAllBaseInfoView.jsp');
	var height=document.getElementById('allInfoTabPanel').offsetHeight+10;
//	alert(height);
	var width=document.getElementById('allInfoTabPanel').offsetWidth;
//	alert(width);
	showAllInfoPanel = new Ext.TabPanel({
		title : '新产品信息',
		activeTab : 0,
		renderTo : 'allInfoTabPanel',
		height : document.getElementById('allInfoTabPanel').offsetHeight+100,
		width : document.getElementById('allInfoTabPanel').offsetWidth,
		id : 'fitpanel',
		deferredRender : false,
		collapsible :true,//折叠
		align : 'center',
		tabPosition : 'top',
		autoScroll:true,
		autoHeight:true,
		frame : false,
		items : [{
			title : '新产品公告',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/jsp/newProductAndTradeMsgShow.jsp?height='+height+'&width='+width+'"></iframe>',
			closable : false
		},{
			title : '行业快递',
			iconCls : 'tabs',
			html : '<iframe width="100%" height="100%" src="'+prjpath+'/jsp/tradeMsgShow.jsp?height='+height+'&width='+width+'"></iframe>',
			closable : false
		}]
	});
});