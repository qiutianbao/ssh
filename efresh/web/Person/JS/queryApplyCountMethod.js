/**
 * @author xdsh 2011年2月25日14:24:02
 * @since 
 */
 
 var queryApplyCountStore;	//
 var queryApplyCountGrid;	//
 var queryApplyCountForm;	//
 var showQueryPanel;		//
  
 Ext.onReady(function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('Person/ApplicationCountView.jsp');
	
	//显示请假统计信息
	queryApplyCountStore = new Ext.data.JsonStore({
		url : 'ss',	//url设置为空
		root : 'applicationInfoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 20
		},
		fields : [{
			name : 'applicasn',
			mapping : 'applicasn'
		},{
			name : 'applymanname',
			mapping : 'applymanname'
		},{
			name : 'applicareason',
			mapping : 'applicareason.name'
		},{
			name : 'applyman',
			mapping : 'applyman'
		},{
			name : 'starttime',
			mapping : 'starttime'
		},{
			name : 'endtime',
			mapping : 'endtime'
		},{
			name : 'content',
			mapping : 'content'
		},{
			name : 'applicacanceltime',
			mapping : 'applicacanceltime'
		},{
			name : 'delstate',
			mapping : 'showstate'
		}]
	});
	queryApplyCountStore.load();
	
	personelInfoStore.load();

	queryApplyCountForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
			columnWidth　: .25,
			layout : 'form',
			items : [{
				fieldLabel : '请假人',
				id : 'queryApplyman',
				xtype : 'combo',
				allowBlank : false,
				store : personelInfoStore,
				valueField : 'idnumber',
				displayField : 'name',
				mode : 'local',
				forceSelection : true,
				emptyText : '请选用户名...',
				editable : false,
				triggerAction : 'all',
//				hiddenName : 'academicInfo.personelinfo.idnumber',
				pageSize : 10,
				anchor : '95%'
			}]
		}, {
			columnWidth　: .25,
			layout : 'form',
			items : [{
				fieldLabel : '开始时间',
				id : 'queryStarttime',
				xtype : 'textfield',
				allowBlank : false,
				listeners: {
	               'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})}},
		        anchor : '90%'
				}]
		}, {
			columnWidth　: .25,
			layout : 'form',
			items : [{
				fieldLabel : '结束时间',
				id : 'queryEndtime',
				xtype : 'textfield',
				allowBlank : false,
				listeners: {
	               'focus': function(){WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})}},
		        anchor : '90%'
			}]
		}, {
			columnWidth　: .25,
			layout : 'column',
			items : [{
				columnWidth : 0.5,
				layout : 'form',
				items : [{
					xtype : 'button',
					text : '查询',
					width : 60,
					iconCls : 'icon-select',
					handler : function(){
						queryApplyCountStore.proxy = new Ext.data.HttpProxy({
							url : 'applicationInfo_findInfoByConditions.action?applicationInfo.applyman ='
							+Ext.getCmp('queryApplyman').getValue()+'&applicationInfo.starttime ='
							+Ext.getCmp('queryStarttime').getValue()+'&applicationInfo.endtime ='
							+Ext.getCmp('queryEndtime').getValue()
						});
						queryApplyCountStore.load();
					}
				}]
			},{
				columnWidth : 0.5,
				layout : 'form',
				items : [{
					xtype : 'button',
					text : '重置',
					width : 60,
					iconCls : 'icon-reset',
					handler : function() {
						queryApplyCountForm.form.reset();
					}
				}]
			}]
		}]
	});
		
	var sm = new Ext.grid.CheckboxSelectionModel();
	queryApplyCountGrid = new Ext.grid.GridPanel({
		store : queryApplyCountStore,
		title : '统计人员请假历史',
		sm : sm,
		columns : [ sm, rowNum, {
			header : '申请人',
			dataIndex : 'applymanname',
			width : 100
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
			width : 150
		}],
		width : 100,
		height : 300,
		bbar : [{
			xtype : 'paging',
			pageSize : 15,
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			store : queryApplyCountStore,
//			displayInfo : true,
//			displayMsg : '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		height :'100%',
		renderTo : 'showApplyCount',
		items : [queryApplyCountForm, queryApplyCountGrid]
	});
	var divHeight = document.getElementById('showApplyCount').offsetHeight;
	var divWidth = document.getElementById('showApplyCount').offsetWidth;
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryApplyCountGrid.setWidth(showQueryPanel.getWidth());
	queryApplyCountGrid.setHeight(showQueryPanel.getHeight() - queryApplyCountForm.getHeight());
	
 })
