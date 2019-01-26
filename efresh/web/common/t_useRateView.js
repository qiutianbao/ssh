
var queryt_useRateStore;			
var queryt_useRateGrid;


var showQueryPanel;
var queryt_comp_infoStore;
var selectUnitForm;

var unitText=Ext.override(Ext.form.TextField, {
	 unitText : '',
	 onRender : function(ct, position) {
	  Ext.form.TextField.superclass.onRender.call(this, ct, position);
	  if (this.unitText != '') {
	   this.unitEl = ct.createChild({
	      tag : 'div',
	      html : this.unitText
	     });
	   this.unitEl.addClass('x-form-unit');
	   // 增加单位名称的同时按单位名称大小减少文本框的长度 初步考虑了中英文混排 未考虑为负的情况
	   this.width = this.width
	     - (this.unitText.replace(/[^\x00-\xff]/g, "xx").length * 6 + 2);
	   // 同时修改错误提示图标的位置
	   this.alignErrorIcon = function() {
	    this.errorIcon.alignTo(this.unitEl, 'tl-tr', [2, 0]);
	   };
	  }
	 }
	});



 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_useRateView.jsp');
	

	
	 queryt_useRateStore = new Ext.data.JsonStore({
		url : 't_useRate_findAll.action?t_useRate.realDay='+new Date().format(Date.patterns.SortableDate)+'&t_useRate.minutes=5',
		root : 't_useRateList',
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
		name : 'realDay',
		mapping : 'realDay'
		}
		,{
		name : 'startTime',
		mapping : 'startTime'
		}
		,{
		name : 'endTime',
		mapping : 'endTime'
		}
		],
		autoLoad : false
		
	});
	
	 queryt_comp_infoStore=new Ext.data.Store({
		 proxy:new Ext.data.HttpProxy({
		 url:'t_useRate_findInstByUser.action'
		 }),
		 reader:new Ext.data.JsonReader({
		 root:'t_useRateList',
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
		hiddenName:'t_useRate.inst_name',//hiddenName才是提交到后台的input的name
		editable:false,//不允许输入
		triggerAction:'all',
	    id : 'select_inst_no',  
	    name: 't_useRate.inst_name',
		width:230	
	},
	{
		fieldLabel : '日期',
		id : 'select_realDay',
		xtype : 'datefield',
		format:'Y-m-d',
		value:new Date(),
		name : 't_useRate.realDay',
		width : '80%'
	}
	]},{
	columnWidth: .5,
	layout : 'form',
	items : [
	{
       	 fieldLabel : '时间范围',
       	 id : 'select_minute',
       	 xtype:"numberfield",
       	 width : 230,
       	 value:5,
       	 allowDecimals : false,
       	 allowNegative : false,
       	 name : 't_useRate.minutes',
       	 style : 'text-align:right',
       	 unitText : '(分钟)'      
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
			queryt_useRateStore.proxy = new Ext.data.HttpProxy({
			url : 't_useRate_findInfoByConditions.action?'
			+'t_useRate.idNumber='
			+ Ext.getCmp('select_inst_no').getValue()
			+'&t_useRate.realDay='
			+ new Date(Ext.getCmp('select_realDay').getValue()).format(Date.patterns.SortableDate)
			+'&t_useRate.minutes='
			+Ext.getCmp('select_minute').getValue()
			});
		queryt_useRateStore.load({
	params : {
			start : 0,
			limit : Ext.getCmp('pageBar').pageSize
		}});
	}}]}
	]}]}]

		         
	});;
	
	
	

	queryt_useRateStore.load();
	
	var queryt_useRateGrid = new Ext.grid.GridPanel({
		store : queryt_useRateStore,
		columns : [  rowNum
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
		header : '日期',
		dataIndex : 'realDay',
		width : 100 
		}
		,{
		header : '开始时间',
		dataIndex : 'startTime',
		width : 100 
		}
		,{
		header : '结束时间',
		dataIndex : 'endTime',
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
			store : queryt_useRateStore,
			emptyMsg : "没有记录"
		},new Ext.Toolbar({})]
	});
	
    function onItemClick(){ 
    	var brno=Ext.getCmp('select_inst_no').getValue();
    
    	var minutes=Ext.getCmp('select_minute').getValue();
  
    	var realDay=new Date(Ext.getCmp('select_realDay').getValue()).format(Date.patterns.SortableDate);
    	var url="t_useRate_ExportExcel.action?t_useRate.idNumber=" + brno+"&t_useRate.realDay="+realDay+"&t_useRate.minutes="+minutes;

    	window.open(url);

    	
    	
          
    }
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_useRateGrid',
		items : [selectUnitForm, queryt_useRateGrid]
	});
	var divHeight = document.getElementById('t_useRateGrid').offsetHeight;
	var divWidth = document.getElementById('t_useRateGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_useRateGrid.setWidth(showQueryPanel.getWidth());
	queryt_useRateGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	// 加载页面后默认焦点
	Ext.getCmp("select_inst_no").focus(false, 1000);
 });
 
