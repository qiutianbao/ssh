
var querycarouselStore;			
var querycarouselGrid;
var addcarousel;
var addcarouselForm;
var addcarouselWin;
var updatecarousel;
var updatecarouselWin;
var updatecarouselForm;
var updatecarouselReader;
var showQueryPanel;
var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();

//	haveRight('common/carouselView.jsp');

	 querycarouselStore = new Ext.data.JsonStore({
		url : 'carousel_findAll.action',
		root : 'carouselList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
name : 'idNumber',
mapping : 'idNumber'
}
,{
name : 'serialnumber',
mapping : 'serialnumber'
}
,{
name : 'imagename',
mapping : 'imagename'
}
],
		autoLoad : true
		
	});
	
/*	 alert(2222);*/
	
	
/*	selectUnitForm = new Ext.form.FormPanel({
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
columnWidth: .5,
layout : 'form',
items : [
]},{
columnWidth: .5,
layout : 'form',
items : [
{
layout : 'column',
items : [{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '重置',
width : 100,
iconCls : 'icon-reset',
handler : function() {
selectUnitForm.form.reset();
}}]
},{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '查询',
width : 100,
iconCls : 'icon-select',
handler : function() {
querycarouselStore.proxy = new Ext.data.HttpProxy({
url : 'carousel_findInfoByConditions.action?'
+'&carousel.imagename='
+ Ext.getCmp('select_imagename').getValue()
});
	querycarouselStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});*/
	
/*	alert(3333);*/
	

	querycarouselStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycarouselGrid = new Ext.grid.GridPanel({
		store : querycarouselStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '图片',
dataIndex : 'imagename',
width : 500 ,
renderer : function(value, meta, record) {
	var tempString2 = '<p style="text-align:center;width:346px;height:116px;margin:8px auto;"><img src="../images/home/'+value+'"  width="100%" height="100%"/></p>';
	return tempString2;
	}
},

],
		width : 500,
		height : 100,
		tbar : [{
			text : '上传 ',
			iconCls:'icon-add',
			handler : function() {
				addcarousel();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycarouselGrid, querycarouselStore, "carousel_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycarouselStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'carouselGrid',
		items : [ querycarouselGrid]
	});
	var divHeight = document.getElementById('carouselGrid').offsetHeight;
	var divWidth = document.getElementById('carouselGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycarouselGrid.setWidth(showQueryPanel.getWidth());
	querycarouselGrid.setHeight(divHeight);
	

	addcarousel = function() {
		fileWin.show();
		querycarouselStore.load();
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatecarouselReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'carousel.idNumber',
mapping : 'idNumber'
}
,{
name : 'carousel.serialnumber',
mapping : 'serialnumber'
}
,{
name : 'carousel.imagename',
mapping : 'imagename'
},

]
   );
		
	updatecarouselForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecarouselReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '首页轮播图表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'carousel.idNumber',
width : '80%'
}
,{
fieldLabel : '图片名称',
id : 'uppdate_imagename',
xtype : 'textfield',
name : 'carousel.imagename',
width : '60%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '序号',
id : 'uppdate_serialnumber',
xtype : 'numberfield',
name : 'carousel.serialnumber',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'carousel.ts',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatecarouselForm, "carousel_update.action", querycarouselStore, "修改信息")
				updatecarouselWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecarouselWin.hide();
				updatecarouselForm.form.reset();
			}
		}]
	});

	updatecarouselWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecarouselForm
	});

	update = function() {
		_record = querycarouselGrid.getSelectionModel().getSelected();
		flag = querycarouselGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecarouselWin.show();
					
			updatecarouselForm.getForm().load({
				url : 'carousel_findById.action?carousel.idNumber='+ _record.get('idNumber'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
	};






	
	// 加载页面后默认焦点
//	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
