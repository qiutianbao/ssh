var queryuserscoreStore;			
var queryuserscoreGrid;
var selectUserscoreForm;

Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	//haveRight('common/userscoreView.jsp');
	 queryuserscoreStore = new Ext.data.JsonStore({
		url : 'userscore_findAll.action',
		root : 'userscoreList',
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
		name : 'idScore',
		mapping : 'idScore'
		},{
		name : 'orderNo',
		mapping : 'orderNo'
		},{
		name : 'commodity',
		mapping : 'commodity'
		},{
		name : 'originaddress',
		mapping : 'originaddress'
		},{
		name : 'score',
		mapping : 'score'
		}],
		autoLoad : false
		
	});
	selectUserscoreForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
		columnWidth: .3,
		layout : 'form',
		items : [{
		fieldLabel : '订单编号',
		id : 'select_orderNo_userscore',
		xtype : 'textfield',
		name : 'userscore.orderNo'
		},{
			fieldLabel : '评价星级',
			id : 'select_score',
			width : 150,
			xtype: 'combo',
            store: new Ext.data.SimpleStore({
                fields: ['value','text'],
                data: [['0','全部'],['1','一星'],['2','二星'],['3','三星'],['4','四星'],['5','五星']]
            }),
            mode: 'local',
            triggerAction: 'all',
            valueField: 'value',
            displayField: 'text',
            value:0
		}]},{
		columnWidth: .3,
		layout : 'form',
		items : []
		},{
		columnWidth: .3,
		layout : 'form',
		items : [{
		layout : 'form',
		items : [{
		columnWidth : 0.5,
		items : [{
		xtype : 'button',
		text : '重置',
		width : 100,
		style:'float:left;margin:0 5px',
		iconCls : 'icon-reset',
		handler : function() {
		selectUserscoreForm.form.reset();
		}},{
			xtype : 'button',
			text : '查询',
			width : 100,
			iconCls : 'icon-select',
			handler : function() {
				var orderNo=Ext.getCmp('select_orderNo_userscore').getValue();
				var score=Ext.getCmp('select_score').getValue();
				var gridpanel = Ext.getCmp("userscoregrid");
		    	gridpanel.getStore().reload({params:{start:0,limit:Ext.getCmp('uscorepageBar').pageSize,orderNo:orderNo,score:score}});
			
			}}]
		},{
		columnWidth : 0.5,
		items : []}
		]}]}]
	});
	queryuserscoreStore.load();
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	queryuserscoreGrid = new Ext.grid.GridPanel({
		id:'userscoregrid',
		store : queryuserscoreStore,
		sm : sm,
		columns : [ sm, rowNum,{
		header : '评分人',
		dataIndex : 'tlr_name',
		width : 120 
		},{
		header : '手机号码',
		dataIndex : 'phonenumber',
		width : 120 
		}
		,{
		header : '订单编号',
		dataIndex : 'orderNo',
		width : 120 
		}
		,{
		header : '商品名称',
		dataIndex : 'commodity',
		width : 120 
		}
		,{
		header : '产地',
		dataIndex : 'originaddress',
		width : 120 
		}
		,{
		header : '评分星级',
		dataIndex : 'score',
		width : 150,
		renderer : function(value, meta, record){
			var star = '';
			for(var i=0;i<value;i++) {
				star+='<img src="./images/other/star0.png">&nbsp;&nbsp;';
			}
			return star;
		}
		}],
		width : '100%',
		height : 375,
		tbar : [{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryuserscoreGrid, queryuserscoreStore, "userscore_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'uscorepageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryuserscoreStore,
			emptyMsg : "没有记录"
		}]
	});
	//var divHeight = document.getElementById('userscoreGrid').offsetHeight;
	//var divWidth = document.getElementById('userscoreGrid').offsetWidth;
	
	/*showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryuserscoreGrid.setWidth(showQueryPanel.getWidth());
	queryuserscoreGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());*/
 });
 
