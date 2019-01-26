var showintegralruleWin;

var queryintegralStore;			
var queryintegralGrid;
var selectIntegralForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	//haveRight('common/integralView.jsp');
	 queryintegralStore = new Ext.data.JsonStore({
		url : 'integral_findAll.action',
		root : 'integralList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
			name : 'idNumber',
			mapping : 'idNumber'
			},{
			name : 'tlr_name',
			mapping : 'tlr_name'
			},{
			name : 'phonenumber',
			mapping : 'phonenumber'
			},{
			name : 'integraltotal',
			mapping : 'integraltotal'
			},{
			name : 'integral',
			mapping : 'integral'
			},{
			name : 'gettime',
			mapping : 'gettime'
			}],
				autoLoad : false
				
			});
	
	 selectIntegralForm = new Ext.form.FormPanel({
			title : '按条件查询',
			labelAlign : 'right',
			frame : true,
			labelWidth : 140,
			padding : 5,
			layout : 'form',
			items : [{
			columnWidth: .4,
			layout : 'form',
			items : [{
				fieldLabel : '获取积分开始时间',
				id : 'select_gettime',
				xtype : 'datefield',
				format: 'Y-m-d',
				width:200,
				editable:false
			},{
				fieldLabel : '结束时间',
				id : 'select_gettime2',
				xtype : 'datefield',
				format: 'Y-m-d',
				width:200,
				editable:false
				}]
			},{
			columnWidth: .4,
			layout : 'form',
			items : []
			},{
			columnWidth: .4,
			layout : 'form',
			items : [{
			fieldLabel : '积分总数开始数',
			id : 'select_integral',
			xtype : 'numberfield',
			width:200
			},{
				fieldLabel : '结束数',
				id : 'select_integral2',
				xtype : 'numberfield',
				width:200
				},{
					xtype : 'button',
					text : '重置',
					width : 100,
					style:'float:left;margin:0 5px',
					iconCls : 'icon-reset',
					handler : function() {
					selectIntegralForm.form.reset();
					}},{
						xtype : 'button',
						text : '查询',
						width : 100,
						iconCls : 'icon-select',
						handler : function() {
							var integrastarttime = Ext.getCmp('select_gettime').getValue();
							var integraendtime=Ext.getCmp('select_gettime2').getValue();
							integrastarttime=Ext.util.Format.date(integrastarttime, 'Y-m-d');
							integraendtime=Ext.util.Format.date(integraendtime, 'Y-m-d');
							var integralstart=Ext.getCmp('select_integral').getValue();
							var integralend=Ext.getCmp('select_integral2').getValue();
							var gridpanel = Ext.getCmp("integgrid");
//							queryintegralStore.proxy = new Ext.data.HttpProxy({
//								url : 'estore_findInfoByConditions.action'
//							});
							
							gridpanel.getStore().reload({params:{start:0,limit:Ext.getCmp('integrapageBar').pageSize,starttime:integrastarttime,endtime:integraendtime,integralstart:integralstart,integralend:integralend}});
						}}]},{
			columnWidth: .4,
			layout : 'form',
			items : []
			},{
			columnWidth: .3,
			layout : 'form',
			items : [{
			layout : 'column',
			items : [{
			columnWidth : 0.5,
			items : []
			},{
			columnWidth : 0.5,
			items : []}
			]}]}]
	});
	queryintegralStore.load();
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryintegralGrid = new Ext.grid.GridPanel({
		id:'integgrid',
		store : queryintegralStore,
		sm : sm,
		columns : [ sm, rowNum,{
		header : '姓名',
		dataIndex : 'tlr_name',
		width : 120
		},{
		header : '手机号码',
		dataIndex : 'phonenumber',
		width : 120 
		}
		,{
		header : '积分总数',
		dataIndex : 'integraltotal',
		width : 120 
		}
		,{
		header : '时间段内积分数',
		dataIndex : 'integral',
		width : 120 
		}
		,{
		header : '获得积分时间段',
		dataIndex : 'gettime',
		width : 180 ,
		renderer:function(value){
			return new Date(value).format(Date.patterns.ISO8601Long)
		}
		}],
		width : '100%',
		height : 360,
		tbar : [{
			text : ' 查看积分规则 ',
			iconCls:'icon-add-btn',
			handler : function() {
				showIntegralrule();
			}
		}
		],
		bbar : [{
			xtype : 'paging',
			id : 'integrapageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryintegralStore,
			emptyMsg : "没有记录"
		}]
	});
	//生成TAB页
	var tabpanel = new Ext.TabPanel({  
	    id: "mainTab",  
	    renderTo: "integralGrid",  
	    width: '100%',  
	    activeTab: 0,  
	    defaults: {  
	        autoScroll: true,  
	        autoHeight:true,  
	        style: "padding:5"  
	    },  
	    items:[  
	        {
             id: "tab1",
             title: '积分管理',
             items:[selectIntegralForm, queryintegralGrid]
          },{
              id: "tab2",
              title: '积分兑换'
              //items:[selectAdvisoryForm, queryadvisoryGrid]
           }
	    ],
	    enableTabScroll: true  
	}); 
	
	var divHeight = document.getElementById('integralGrid').offsetHeight;
	var divWidth = document.getElementById('integralGrid').offsetWidth;
	
	tabpanel.setHeight(divHeight);
	tabpanel.setWidth(divWidth);
	//queryintegralGrid.setWidth(showQueryPanel.getWidth());
	//queryintegralGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	//查看积分规则
	showIntegralrule = function() {
		Ext.getCmp('rulewin').show();
	}

	showintegralruleWin = new Ext.Window({
		id:'rulewin',
		layout : 'form',
		width : 965,
		closeAction:'hide',
		height : 530,
		plain : true,
		closable : true,
		items : [selectUnitForm,querysub_integralruleGrid]
	});
 });
 Date.patterns = {
		 ISO8601Long:"Y-m-d H:i:s",
		 ISO8601Short:"Y-m-d",
		 ShortDate: "n/j/Y",
		 LongDate: "l, F d, Y",
		 FullDateTime: "l, F d, Y g:i:s A",
		 MonthDay: "F d",
		 ShortTime: "g:i A",
		 LongTime: "g:i:s A",
		 SortableDateTime: "Y-m-d\\TH:i:s",
		 UniversalSortableDateTime: "Y-m-d H:i:sO",
		 YearMonth: "F, Y"
 } 
