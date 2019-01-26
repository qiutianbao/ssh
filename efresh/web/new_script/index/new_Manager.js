var queryt_info_mgmtStore;			
var queryt_info_mgmtGrid;
var addt_info_mgmt;
var addt_info_mgmtForm;
var addt_info_mgmtWin;
var updatet_info_mgmt;
var updatet_info_mgmtWin;
var updatet_info_mgmtForm;
var updatet_info_mgmtReader;
var showQueryPanel;

var selectUnitForm;




 
 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('defaultIndex.jsp');
	 queryt_info_mgmtStore = new Ext.data.JsonStore({
		url : 't_info_mgmt_findAll_index.action',
		root : 't_info_mgmtList',
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
name : 'info_type',
mapping : 'info_type'
}
,{
name : 'info_head',
mapping : 'info_head'
}
,{
name : 'info_body',
mapping : 'info_body'
}
,{
name : 'info_path',
mapping : 'info_path'
}
,{
name : 'info_name',
mapping : 'info_name'
}
,{
name : 'reas_date',
mapping : 'reas_date'
}
,{
name : 'tlr_no',
mapping : 'tlr_no'
}
],
		autoLoad : false
		
	});
	 var record_start = 0;
	 var rowNum = new Ext.grid.RowNumberer({
			header : '序号',
			width : 60,
			renderer : function(value, metadata, record, rowIndex){
				return record_start + 1 + rowIndex;
			}
		});
	 queryt_info_mgmtStore.load();
//		rightDeptStore.load();
//		personelTypeStore.load();
		
		var sm = new Ext.grid.CheckboxSelectionModel();
		
		var queryt_info_mgmtGrid = new Ext.grid.GridPanel({
			store : queryt_info_mgmtStore,
			sm : sm,
			stripeRows : true,
			title : "最新信息",
			collapsible :true,//折叠
			columns : [ rowNum
	,{
	header : '信息标题',
	dataIndex : 'info_head',
	width : 120 
	}
	,{
	header : '发布日期',
	dataIndex : 'reas_date',
	width : 90
	}
	,{
	header : '发布用户',
	dataIndex : 'tlr_no',
	width : 90 
	},{
			header : '附件名称',
			dataIndex : 'info_name',
			width : 120,
			renderer : function(value, meta, record) {
				var tempString = '<div><a href="download.action?fileName=' + value + '">'+ value +'</a></div>';
				return tempString;
			}
			},{
		header : '信息内容',
		dataIndex : 'info_body',
		width : 160,
		html : '',
		renderer : function(value, meta, record) {
			var tempString = '<div><a href=javascript:show()>'+ value + '</a></div>';
			return tempString;
		}
}
	],
			height : 250,
			bbar : [{
				xtype : 'paging',
				id : 'pageBar',
				plugins : [new Ext.ux.plugins.PageComboResizer()],
				pageSize : 10,
				store : queryt_info_mgmtStore,
				emptyMsg : "没有记录"
			}]
		});
		
		
		showQueryPanel = new Ext.Panel({
			width : '100%',
			height : '100%',
			autoWidth : true,
			id : 'fitpanel',
			renderTo : 't_info_mgmtGrid',
			items : [ queryt_info_mgmtGrid]
		});
		var divHeight = document.getElementById('t_info_mgmtGrid').offsetHeight;
		var divWidth = document.getElementById('t_info_mgmtGrid').offsetWidth;
	//	showQueryPanel.setHeight(divHeight);
	//	showQueryPanel.setWidth(divWidth);
		//queryt_info_mgmtGrid.setWidth(showQueryPanel.getWidth());
		//queryt_info_mgmtGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
		
		
		show = function(){
			_record = queryt_info_mgmtGrid.getSelectionModel().getSelected();
			var pro_no=_record.get('info_body');
			flag = queryt_info_mgmtGrid.getSelectionModel().getSelections();
			if (flag.length == 1) {
				show_body_Win.show();
				Ext.getCmp("show_body").setValue(pro_no);
			}
			
		};
		
	var	showBodyForm =  new Ext.form.FormPanel({
			frame : true,
			width : 800,
			height : 480, 
			items : [{
				fieldLabel : '信息内容',
				id : 'show_body',
				xtype : 'textarea',
				height : 440,
				name : 'show_body',
				width : 650
			}]
		}); 
		
		var show_body_Win = new Ext.Window({
			layout : 'form',
			width : 800,
			height : 480,
			closable : true,
			closeAction : 'hide',
			items : showBodyForm
		});
		
		
		
		
});