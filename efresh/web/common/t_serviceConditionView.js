
var queryt_serviceConditionStore;			
var queryt_serviceConditionGrid;
var addt_serviceCondition;
var addt_serviceConditionForm;
var addt_serviceConditionWin;
var updatet_serviceCondition;
var updatet_serviceConditionWin;
var updatet_serviceConditionForm;
var updatet_serviceConditionReader;
var showQueryPanel;
var queryt_comp_infoStore;
var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_serviceConditionView.jsp');
	

	
	 queryt_serviceConditionStore = new Ext.data.JsonStore({
		url : 't_serviceCondition_findAll.action?t_serviceCondition.startDay='+new Date().format(Date.patterns.SortableDate)+'&t_serviceCondition.endDay='+new Date().format(Date.patterns.SortableDate),
		root : 't_serviceConditionList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
name : 'inst_no',
mapping : 'idNumber'
}
,{
name : 'inst_name',
mapping : 'inst_name'
}
,{
name : 'brno',
mapping : 'brno'
}
,{
name : 'brno_name',
mapping : 'brno_name'
}
,{
name : 'cn',
mapping : 'cn'
}
,{
name : 'startDay',
mapping : 'startDay'
}
,{
name : 'endDay',
mapping : 'endDay'
}
],
		autoLoad : false
		
	});
	
	 queryt_comp_infoStore=new Ext.data.Store({
		 proxy:new Ext.data.HttpProxy({
		 url:'t_serviceCondition_findInstByUser.action'
		 }),
		 reader:new Ext.data.JsonReader({
		 root:'t_serviceConditionList',
		 id:'id'
		 },[
		 {name:'idNumber',mapping:'idNumber'},
		 {name:'inst_name',mapping:'inst_name'}
		 ])
		 });	
	 
	 queryt_comp_infoStore.load();	
	
	
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
columnWidth: .5,
layout : 'form',
items : [
{
	fieldLabel:'支行名称',
	xtype:'combo',
	store:queryt_comp_infoStore,
	valueField:"idNumber",
	displayField:"inst_name",
	mode:'local',
	forceSelection:true,//必须选择一项
	emptyText:'请选择支行名称...',//默认值
	hiddenName:'t_serviceCondition.inst_name',//hiddenName才是提交到后台的input的name
	editable:false,//不允许输入
	triggerAction:'all',
    id : 'select_inst_no',  
    name: 't_serviceCondition.inst_name',
	width:230	
},
{
	fieldLabel : '结束日期',
	id : 'select_endDay',
	xtype : 'datefield',
	format:'Y-m-d',
	value:new Date(),
	name : 't_serviceCondition.endDay',
	width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
	fieldLabel : '开始日期',
	id : 'select_startDay',
	xtype : 'datefield',
	format:'Y-m-d',
	name : 't_serviceCondition.startDay',
	value:new Date(),
	width : '80%'
}
,{
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
queryt_serviceConditionStore.proxy = new Ext.data.HttpProxy({
url : 't_serviceCondition_findInfoByConditions.action?'
+'t_serviceCondition.idNumber='
+ Ext.getCmp('select_inst_no').getValue()
+'&t_serviceCondition.startDay='
+ new Date(Ext.getCmp('select_startDay').getValue()).format(Date.patterns.SortableDate)
+'&t_serviceCondition.endDay='
+ new Date(Ext.getCmp('select_endDay').getValue()).format(Date.patterns.SortableDate)
});
	queryt_serviceConditionStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryt_serviceConditionStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
//	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_serviceConditionGrid = new Ext.grid.GridPanel({
		store : queryt_serviceConditionStore,
		columns : [  rowNum
,{
header : '支行名称',
dataIndex : 'inst_name',
width : 120 
}
,{
header : '网点编码',
dataIndex : 'brno',
width : 80 
}
,{
header : '网点名称',
dataIndex : 'brno_name',
width : 300
}
,{
header : '点击次数',
dataIndex : 'cn',
width : 80 
}
,{
header : '开始日期',
dataIndex : 'startDay',
width : 100 
}
,{
header : '结束日期',
dataIndex : 'endDay',
width : 100 
}
],
		width : 500,
		height : 100,
		tbar : [{},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler :  onItemClick
		},'-',{}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_serviceConditionStore,
			emptyMsg : "没有记录"
		},new Ext.Toolbar({      
            buttons: [{      
                text: '|导出Excel',      
                tooltip: '|导出Excel',      
                handler: onItemClick     
            }]      
        })]
	});
	
    function onItemClick(item){   

    	var url = 't_serviceCondition_ExportExcel.action?'
    		+'t_serviceCondition.idNumber='
    		+ Ext.getCmp('select_inst_no').getValue()
    		+'&t_serviceCondition.startDay='
    		+ new Date(Ext.getCmp('select_startDay').getValue()).format(Date.patterns.SortableDate)
    		+'&t_serviceCondition.endDay='
    		+ new Date(Ext.getCmp('select_endDay').getValue()).format(Date.patterns.SortableDate);
    	
    	window.open(url);
    	
      //  Ext.ux.Grid2Excel.Save2Excel(queryt_serviceConditionGrid);      
    }
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_serviceConditionGrid',
		items : [selectUnitForm, queryt_serviceConditionGrid]
	});
	var divHeight = document.getElementById('t_serviceConditionGrid').offsetHeight;
	var divWidth = document.getElementById('t_serviceConditionGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_serviceConditionGrid.setWidth(showQueryPanel.getWidth());
	queryt_serviceConditionGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	
	// 加载页面后默认焦点
	Ext.getCmp("select_inst_no").focus(false, 1000);
 });
 
