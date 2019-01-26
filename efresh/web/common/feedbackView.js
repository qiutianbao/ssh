var queryfeedbackStore;			
var queryfeedbackGrid;
var updatefeedback;
var updatefeedbackWin;
var updatefeedbackForm;
var updatefeedbackReader;
var selectFeedBackForm;
Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/feedbackView.jsp');
	 queryfeedbackStore = new Ext.data.JsonStore({
		url : 'feedback_findAll.action',
		root : 'feedbackList',
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
			name : 'tlr_name',
			mapping : 'tlr_name'
			}
			,{
			name : 'feedbacktime',
			mapping : 'feedbacktime'
			}
			,{
			name : 'feedcontent',
			mapping : 'feedcontent'
			}
			,{
			name : 'replycontent',
			mapping : 'replycontent'
			}
			,{
			name : 'idReply',
			mapping : 'idReply'
			}
			,{
			name : 'replytime',
			mapping : 'replytime'
			}
        ],
		autoLoad : false
		
	});
	 selectFeedBackForm = new Ext.form.FormPanel({
			title : '按条件查询',
			labelAlign : 'right',
			frame : true,
			labelWidth : 70,
			padding : 5,
			layout : 'form',
			items : [{
			columnWidth: .3,
			layout : 'form',
			items : [{
			fieldLabel : '反馈时间',
			id : 'select_feedbacktime',
			xtype : 'datetimefield',
			width :180
			},
			{
				fieldLabel : '至',
				id : 'select_feedbacktime2',
				xtype : 'datetimefield',
				//value:new Date(),
				name : '',
				width:180
			},{
				xtype : 'button',
				text : '重置',
				width : 100,
					style:'float:left;margin:0 5px;',
				iconCls : 'icon-reset',
				handler : function() {
					selectFeedBackForm.form.reset();
				}},
			{
				xtype : 'button',
				text : '查询',
				style:'float:left;margin:0 5px',
				width : 100,
				iconCls : 'icon-select',
				handler : function() {
					var feedstarttime = Ext.getCmp('select_feedbacktime').getValue();
					var feedendtime=Ext.getCmp('select_feedbacktime2').getValue();
					var gridpanel = Ext.getCmp("feedbackgrid");
			    	gridpanel.getStore().reload({params:{start:0,limit:Ext.getCmp('pageBar').pageSize,starttime:dataformat(feedstarttime),endtime:dataformat(feedendtime)}});
				
				}}]},{
			columnWidth: .3,
			layout : 'form',
			items : []
			},{
			columnWidth: .3,
			layout : 'form',
			items : [{
			layout : 'column',
			items : []}]}]
	});
	queryfeedbackStore.load();
	var sm = new Ext.grid.CheckboxSelectionModel();
	var queryfeedbackGrid = new Ext.grid.GridPanel({
		id:'feedbackgrid',
		store : queryfeedbackStore,
		sm : sm,
		columns : [ sm, rowNum
		,{
		header : '用户名',
		dataIndex : 'tlr_name',
		width : 220 
		}
		,{
		header : '反馈内容',
		dataIndex : 'feedcontent',
		width :400
		},{
			header : '反馈时间',
			dataIndex : 'feedbacktime',
			width : 180,
			renderer:function(value){
				return new Date(value).format(Date.patterns.ISO8601Long);
			}
		},
		{
			header : '操作',
			dataIndex : 'idNumber',
			width : 160,
			//renderer:Ext.util.Format.dateRenderer('Y-m-d H:i:s')
			renderer : function(value, meta, record) {
//				var tempString = '<a href="https://www.baidu.com/" class="mayubtn">查看更多</a>';
				var tempString = '<a href="feedbacks_findById.action?id='+value+'" class="btn1">查看</a>';
				return tempString;
				}
		}
		],
		width : '100%',
		height : 375,
		tbar : [{
			text : ' 查看 ',
			iconCls:'icon-add',
			handler : function() {
				update();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryfeedbackGrid, queryfeedbackStore, "feedback_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryfeedbackStore,
			emptyMsg : "没有记录"
		}]
	 });
	
	//生成TAB页
	var tabpanel = new Ext.TabPanel({  
	    id: "mainTab",  
	    renderTo: "feedbackGrid",  
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
             title: '用户反馈',
             items:[selectFeedBackForm, queryfeedbackGrid]
          },{
              id: "tab2",
              title: '留言咨询',
              items:[selectAdvisoryForm, queryadvisoryGrid]
           },{
               id: "tab3",
               title: '评分管理',
               items:[selectUserscoreForm, queryuserscoreGrid]
            },{
                id: "tab4",
                title: '评价管理',
               items:[selectEvaluateForm, queryevaluateGrid]
             }
            
	    ],
	    enableTabScroll: true  
	});  
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel2',
		//renderTo : 'sysmessageGrid',
		items : [tabpanel,selectFeedBackForm, queryfeedbackGrid]
	});
	var divHeight = document.getElementById('feedbackGrid').offsetHeight;
	var divWidth = document.getElementById('feedbackGrid').offsetWidth;
	//tabpanel.setHeight(divHeight);
	//tabpanel.setWidth(divWidth);
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	//queryfeedbackGrid.setWidth(500);
	//queryfeedbackGrid.setHeight(queryfeedbackGrid.getHeight());
	queryfeedbackGrid.setHeight((divHeight-tabpanel.getHeight())+queryfeedbackGrid.getHeight());
	
	updatefeedbackReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	    }, [{
		name : 'feedback.idNumber',
		mapping : 'idNumber'
		}
		,{
		name : 'feedback.idFeedback',
		mapping : 'idFeedback'
		}
		,{
		name : 'feedback.feedbacktime',
		mapping : 'feedbacktime'
		}
		,{
		name : 'feedback.feedcontent',
		mapping : 'feedcontent'
		}
		,{
		name : 'feedback.replycontent',
		mapping : 'replycontent'
		}
		]
	 );
		
	updatefeedbackForm = new Ext.FormPanel({
		title : '请输入您要回复的内容',
		frame : true,
		waitMsgTarget : true,
		reader : updatefeedbackReader,
		items : [{
		layout : 'column',
		items : [
		{
		columnWidth: .99,
		layout : 'form',
		items : [{
			fieldLabel : '主键',
			id : 'uppdate_idNumber',
			xtype : 'hidden',
			name : 'feedback.idNumber',
			width : '80%'
			},
		{
		fieldLabel : '反馈人主键ID',
		id : 'uppdate_idFeedback',
		xtype : 'hidden',
		name : 'feedback.idFeedback',
		width : '80%'
		},{
			fieldLabel : '反馈人',
			id : 'uppdate_idFeedbacktext',
			xtype : 'textfield',
			disabled:true,
			width : '80%'
			},{
		fieldLabel : '反馈时间',
		id : 'uppdate_feedbacktime',
		xtype : 'textfield',
		readOnly:true,
		name : 'feedback.feedbacktime',
		width : '80%'
		},
		{
			fieldLabel : '反馈内容',
			id : 'uppdate_feedcontent',
			xtype : 'textarea',
			readOnly:true,
			name : 'feedback.feedcontent',
			width : '80%'
		}
		,{
		fieldLabel : '回复内容',
		id : 'uppdate_replycontent',
		xtype : 'htmleditor',
		name : 'feedback.replycontent',
		width : 500
		}]
		}]}
		],
		buttons : [{
			text : '回复',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatefeedbackForm, "feedback_update.action", queryfeedbackStore, "修改信息")
				updatefeedbackWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatefeedbackWin.hide();
				updatefeedbackForm.form.reset();
			}
		}]
	});

	updatefeedbackWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 430,
		plain : true,
		closable : false,
		items : updatefeedbackForm
	});

	update = function() {
		_record = queryfeedbackGrid.getSelectionModel().getSelected();
		flag = queryfeedbackGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			Ext.getCmp("uppdate_idFeedbacktext").setValue(_record.get('tlr_name'));
			updatefeedbackWin.show();
			updatefeedbackForm.getForm().load({
				url : 'feedback_findById.action?feedback.idNumber='+ _record.get('idNumber'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要查看的信息！');
	};
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
