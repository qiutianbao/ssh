
var queryUnauditApplyGrid;
var showQueryPanel;

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	queryUnauditApplyStore.load();
	
	queryUnauditApplyGrid = new Ext.grid.GridPanel({
//		renderTo : 'unauditApplyTasksGrid',
		store : queryUnauditApplyStore,
		title : '待办任务列表',
		width : 100,
		height : 180,
		columns : [ rowNum,{
			header : '申请人',
			dataIndex : 'applymanname',
			width : 100,
			renderer : function(value, meta, record) {
				var sn = record.get("applicasn");
				var tempString = '<div><a href=javascript:recordPanel("'+ sn +'")><font color="red">'+ value +'</font></a></div>';
				return tempString;
			}
		},{
			header : '申请原因',
			dataIndex : 'applicareason',
			width : 100 
		},{
			header : '开始时间',
			dataIndex : 'starttime',
			width : 150,
			renderer : getMoreTime
		},{
			header : '结束时间',
			dataIndex : 'endtime',
			width : 150,
			renderer : getMoreTime
		},{
			header : '详细理由',
			dataIndex : 'content',
			width : 100
		},{
			header : '信息状态',
			dataIndex : 'delstate',
			width : 100
		}],
		bbar : [{
			xtype : 'paging',
			pagesize : 5,
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			store : queryUnauditApplyStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		height :'100%',
		renderTo : 'unauditApplyTasksGrid',
		items : [queryUnauditApplyGrid]
	});
	var divHeight = document.getElementById('unauditApplyTasksGrid').offsetHeight;
	var divWidth = document.getElementById('unauditApplyTasksGrid').offsetWidth;
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryUnauditApplyGrid.setWidth(showQueryPanel.getWidth());
	queryUnauditApplyGrid.setHeight(showQueryPanel.getHeight());
	
	
	auditTaskWin = new Ext.Window({
		width : 550,
		height : 280,
		resizable : false,
		title : '请假审核',
		layout : 'absolute',
		plain : true,
		closable : false,
		border : false,
		items : [{
			width : '100%',
			height : '60%',
			items : showLeaveApplyForm
		}, {
			y : '60%',
			width : '100%',
			height : '40%',
			items : auditLeaveApplyForm
		}] 
	});
	
	recordPanel = function(tempSn, delflags) {
		showLeaveApplyForm.getForm().load({
			url : 'applicationInfo_findById.action?applicationInfo.applicasn='+ tempSn,
			failure : function() {
				Ext.Msg.alert('编辑', '载入失败');
			},
			success : function() {
			}			
		});
		auditTaskWin.show();
	};
});
