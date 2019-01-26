var showAllInfoPanel;




Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	//haveRight('Person/ShowAllBaseInfoView.jsp');
	var proId=document.getElementById('proId').value;
	var compId=document.getElementById('compId').value;
	var comp_url='<iframe width="100%" height="100%" src="'+prjpath+'/jsp/comMsg.jsp?compId='+compId+'"></iframe>';
	var pro_url='<iframe width="100%" height="100%" src="'+prjpath+'/jsp/productMsg.jsp?proId='+proId+'"></iframe>';
//	var pro_comp='<iframe width="100%" height="100%" src="'+prjpath+'/jsp/productComp.jsp?proId='+proId+'"></iframe>';
	var pro_comp='<iframe width="100%" height="100%" src=ipadYS_pro2html.action?t_excel_info.product_no='+proId+'></iframe>';
//	var pro_comp='<iframe width="100%" height="100%" src='+prjpath+'/excelModel/00001_01.html?t_excel_info.product_no='+proId+'></iframe>';
	
	showAllInfoPanel = new Ext.TabPanel({
		title : '信息展示',
		activeTab : 0,
		renderTo : 'comAndProductAndCalculation',
		height : document.getElementById('comAndProductAndCalculation').offsetHeight,
		width : document.getElementById('comAndProductAndCalculation').offsetWidth,

		deferredRender : true,
		collapsible :true,//折叠
		align : 'center',
		tabPosition : 'top',
		frame : false,
		items : [{
			title : '公司简介',
			iconCls : 'tabs',
			html : comp_url,
			height : 500,
			closable : false
		},{
			title : '产品简介',
			iconCls : 'tabs',
			html : pro_url,
			height : 500,
			closable : false
		},{
			title : '产品验算表',
			iconCls : 'tabs',
			html : pro_comp,
			height : 500,
			closable : false
		}]
	});
});