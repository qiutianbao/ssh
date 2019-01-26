var queryadvisoryStore;			
var queryadvisoryGrid;
var addadvisory;
var updateadvisory;
var updateadvisoryWin;
var updateadvisoryForm;
var updateadvisoryReader;
var selectAdvisoryForm;
Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	//haveRight('common/advisoryView.jsp');
	 queryadvisoryStore = new Ext.data.JsonStore({
		url : 'advisory_findAll.action',
		root : 'advisoryList',
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
		name : 'advtime',
		mapping : 'advtime'
		}
		,{
		name : 'advcontent',
		mapping : 'advcontent'
		}
		,{
		name : 'idReply',
		mapping : 'idReply'
		}
		,{
		name : 'replycontent',
		mapping : 'replycontent'
		}
		,{
		name : 'replytime',
		mapping : 'replytime'
		}
		],
		autoLoad : false
		
	});
	
	 selectAdvisoryForm = new Ext.form.FormPanel({
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
			fieldLabel : '咨询时间',
			id : 'select_advtime',
			xtype : 'datetimefield',
			width : 180
			},
			{
				fieldLabel : '至',
				id : 'select_advtime2',
				xtype : 'datetimefield',
				width:180
			},{
				xtype : 'button',
				text : '查询',
				style:'float:left;margin:0 5px',
				width : 100,
				iconCls : 'icon-select',
				handler : function() {
					var starttime = Ext.getCmp('select_advtime').getValue();
					var endtime=Ext.getCmp('select_advtime2').getValue();
					var gridpanel = Ext.getCmp("advisorygrid");
			    	gridpanel.getStore().reload({params:{start:0,limit:Ext.getCmp('advpageBar').pageSize,starttime:dataformat(starttime),endtime:dataformat(endtime)}});
				}}]},{
			columnWidth: .3,
			layout : 'form',
			items : []
			},{
			columnWidth: .3,
			layout : 'form',
			items : [{
			layout : 'column',
			items : [{
			columnWidth : 0.5,
			items : [/*{
			xtype : 'button',
			text : '重置',
			width : 100,
			iconCls : 'icon-reset',
			handler : function() {
			selectAdvisoryForm.form.reset();
			}}*/]
			},{
			columnWidth : 0.5,
			items : []}
			]}]}]
	});
	queryadvisoryStore.load();
   var sm = new Ext.grid.CheckboxSelectionModel();
   
   queryadvisoryGrid = new Ext.grid.GridPanel({
	    id:'advisorygrid',
		store : queryadvisoryStore,
		sm : sm,
		width : '100%',
		height :500,
		columns : [ sm, rowNum,{
		header : '咨询人',
		dataIndex : 'tlr_name',
		width:220
		},{
			header : '咨询内容',
			dataIndex : 'advcontent',
			width : 460 
		},{
		header : '咨询时间',
		dataIndex : 'advtime',
		width : 200 ,
		renderer:function(value){
			return new Date(value).format(Date.patterns.ISO8601Long)
			
		}
		}],
		tbar : [{
			text : ' 查看 ',
			iconCls:'icon-add',
			handler : function() {
				updateAdv();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryadvisoryGrid, queryadvisoryStore, "advisory_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'advpageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryadvisoryStore,
			emptyMsg : "没有记录"
		}]
	});
	
 
	//var divHeight = document.getElementById('advisorygrid').offsetHeight;
	//var divWidth = document.getElementById('advisorygrid').offsetWidth;
	/*showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryadvisoryGrid.setWidth(showQueryPanel.getWidth());
	queryadvisoryGrid.setHeight(showQueryPanel.getHeight()-selectAdvisoryForm.getHeight());*/
	//queryadvisoryGrid.setHeight((divHeight-519)+queryadvisoryGrid.getHeight());
	
	updateadvisoryReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
		name : 'advisory.idNumber',
		mapping : 'idNumber'
		}
		,{
		name : 'advisory.idAdvisory',
		mapping : 'idAdvisory'
		}
		,{
		name : 'advisory.advtime',
		mapping : 'advtime'
		}
		,{
		name : 'advisory.advcontent',
		mapping : 'advcontent'
		},{
		name : 'advisory.replycontent',
		mapping : 'replycontent'
		}
		]
	);
		
	updateadvisoryForm = new Ext.FormPanel({
		title : '请输入您要回复的内容',
		frame : true,
		waitMsgTarget : true,
		reader : updateadvisoryReader,
		items : [{
			layout : 'column',
			items : [{
			columnWidth: .99,
			layout : 'form',
			items : [
			{
			fieldLabel : '主键',
			id : 'uppdate_idNumber',
			labelStyle:'text-align: center',
			xtype : 'hidden',
			name : 'advisory.idNumber',
			width : 180
			},{
			fieldLabel : '咨询人主键ID',
			id : 'uppdate_idAdvisory',
			labelStyle:'text-align: center',
			xtype : 'hidden',
			name : 'advisory.idAdvisory',
			width : 180
			},{
			fieldLabel : '咨询人',
			id : 'uppdate_idAdvisorytext',
			labelStyle:'text-align: right',
			xtype : 'textfield',
			disabled:true,
			width : 180
			},{
			fieldLabel : '咨询时间',
			id : 'uppdate_advtime',
			labelStyle:'text-align: right',
			xtype : 'textfield',
			readOnly:true,
			name : 'advisory.advtime',
			width : 180
			},{
			fieldLabel : '咨询内容',
			id : 'uppdate_advcontent',
			labelStyle:'text-align: right',
			xtype : 'textarea',
			readOnly:true,
			name : 'advisory.advcontent',
			width : 180
			}
			,{
			fieldLabel : '回复内容',
			id : 'uppdate_advisorycontent',
			labelStyle:'text-align: right',
			xtype : 'htmleditor',
			name : 'advisory.replycontent',
			width : 500
			}]
			}]}
			],
		buttons : [{
			text : '回复',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updateadvisoryForm, "advisory_update.action", queryadvisoryStore, "修改信息")
				updateadvisoryWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateadvisoryWin.hide();
				updateadvisoryForm.form.reset();
			}
		}]
	});
	updateadvisoryWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 420,
		plain : true,
		closable : false,
		items : updateadvisoryForm
	});
	updateAdv = function() {
		_advrecord = queryadvisoryGrid.getSelectionModel().getSelected();
		flag = queryadvisoryGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			Ext.getCmp("uppdate_idAdvisorytext").setValue(_advrecord.get('tlr_name'));
			updateadvisoryWin.show();
			updateadvisoryForm.getForm().load({
				url : 'advisory_findById.action?advisory.idNumber='+ _advrecord.get('idNumber'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
					Ext.getCmp("uppdate_advtime").setValue(new Date(_advrecord.get('advtime')).format(Date.patterns.ISO8601Long))
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
