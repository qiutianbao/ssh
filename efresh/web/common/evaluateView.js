var queryevaluateStore;			
var queryevaluateGrid;
var updateevaluate;
var updateevaluateWin;
var updateevaluateForm;
var updateevaluateReader;
var selectEvaluateForm;

Ext.onReady( function(){
	
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	//haveRight('common/evaluateView.jsp');
	 queryevaluateStore = new Ext.data.JsonStore({
		url : 'evaluate_findAll.action',
		root : 'evaluateList',
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
		name : 'idEvaluate',
		mapping : 'idEvaluate'
		}
		,{
		name : 'orderNo',
		mapping : 'orderNo'
		}
		,{
		name : 'evaluatecontent',
		mapping : 'evaluatecontent'
		}
		,{
		name : 'evaluatetime',
		mapping : 'evaluatetime'
		},{
		name : 'idReply',
		mapping : 'idReply'
		},{
		name : 'replycontent',
		mapping : 'replycontent'
		},{
		name : 'replytime',
		mapping : 'replytime'
		}],
		autoLoad : false
	});
	 selectEvaluateForm = new Ext.form.FormPanel({
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
				fieldLabel : '评价时间',
				id : 'select_evaluatetime',
				xtype : 'datetimefield'
			},{
				fieldLabel : '至',
				id : 'select_evaluatetime2',
				xtype : 'datetimefield'
				},{
					fieldLabel : '订单编号',
					id : 'select_orderNo',
					xtype : 'textfield',
					name : 'evaluate.orderNo'
					},{
						xtype : 'button',
						text : '重置',
						width : 100,
						style:'float:left;margin:0 5px',
						iconCls : 'icon-reset',
						handler : function() {
						selectEvaluateForm.form.reset();
						}},{
							xtype : 'button',
							text : '查询',
							width : 100,
							iconCls : 'icon-select',
							handler : function() {
								var evastarttime = Ext.getCmp('select_evaluatetime').getValue();
								var evaendtime=Ext.getCmp('select_evaluatetime2').getValue();
								var orderNo=Ext.getCmp('select_orderNo').getValue();
								var evagridpanel = Ext.getCmp("evaluategrid");
								evagridpanel.getStore().reload({params:{start:0,limit:Ext.getCmp('evalupageBar').pageSize,starttime:dataformat(evastarttime),endtime:dataformat(evaendtime),orderNo:orderNo}});
							}}]
			},{
			columnWidth: .3,
			layout : 'form',
			items : []
			},{
			columnWidth: .3,
			layout : 'form',
			items : []},{
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
	queryevaluateStore.load();
	var sm = new Ext.grid.CheckboxSelectionModel();
	queryevaluateGrid = new Ext.grid.GridPanel({
		id:'evaluategrid',
		store : queryevaluateStore,
		sm : sm,
		width : '100%',
		height : 375,
		columns : [ sm, rowNum,{
		header : '评价人',
		dataIndex : 'tlr_name',
		width : 220 
		},{
		header : '手机号码',
		dataIndex : 'phonenumber',
		width : 120 
		},{
		header : '订单编号',
		dataIndex : 'orderNo',
		width : 220 
		}
		,{
		header : '评价内容',
		dataIndex : 'evaluatecontent',
		width : 160 
		}
		,{
		header : '评价时间',
		dataIndex : 'evaluatetime',
		width : 180,
		renderer:function(value){
			return new Date(value).format(Date.patterns.ISO8601Long);
			
		}
		}],
		tbar : [{
			text : ' 查看 ',
			iconCls:'icon-add',
			handler : function() {
				updateEvaluate();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del(queryevaluateGrid, queryevaluateStore, "evaluate_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'evalupageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryevaluateStore,
			emptyMsg : "没有记录"
		}]
	});
	updateevaluateReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
	name : 'evaluate.idNumber',
	mapping : 'idNumber'
	}
	,{
	name : 'evaluate.idEvaluate',
	mapping : 'idEvaluate'
	}
	,{
	name : 'evaluate.orderNo',
	mapping : 'orderNo'
	}
	,{
	name : 'evaluate.evaluatecontent',
	mapping : 'evaluatecontent'
	}
	,{
	name : 'evaluate.evaluatetime',
	mapping : 'evaluatetime',
	renderer:function(value){
		return new Date(value).format(Date.patterns.ISO8601Long);
		
	}
	},{
		name : 'evaluate.replycontent',
		mapping : 'replycontent'
		}
	]);
		
	updateevaluateForm = new Ext.FormPanel({
		title : '请输入您要回复的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateevaluateReader,
		items : [{
		layout : 'column',
		items : [
		{
		columnWidth: .99,
		layout : 'form',
		items : [
		{
		fieldLabel : '主键',
		labelStyle:'text-align:center',
		id : 'uppdate_evaidNumber',
		xtype : 'hidden',
		name : 'evaluate.idNumber',
		width : 150
		},{
		fieldLabel : '评价人主键ID',
		id : 'uppdate_idEvaluate',
		labelStyle:'text-align:center',
		xtype : 'hidden',
		name : 'evaluate.idEvaluate',
		width : 150
		},{
		fieldLabel : '评价人',
		labelStyle:'text-align:right',
		id : 'uppdate_idEvaluatetext',
		xtype : 'textfield',
		disabled:true,
		width : 180
		},{
		fieldLabel : '手机号码',
		labelStyle:'text-align:right',
		id : 'uppdate_phoneEvaluatetext',
		xtype : 'textfield',
		disabled:true,
		width : 180
		},{
		fieldLabel : '订单编号',
		labelStyle:'text-align:right',
		id : 'uppdate_evaorderNo',
		xtype : 'textfield',
		readOnly:true,
		name : 'evaluate.orderNo',
		width : 180
		}
		,{
		fieldLabel : '评价时间',
		labelStyle:'text-align:right',
		id : 'uppdate_evaluatetime',
		xtype : 'textfield',
		readOnly:true,
		name : 'evaluate.evaluatetime',
		width :180,
	/*	renderer:function(value){	
			return value.replace("T"," ");
		}*/
		},{
		fieldLabel : '评价内容',
		labelStyle:'text-align:right',
		id : 'uppdate_evaluatecontent',
		xtype : 'textarea',
		readOnly:true,
		name : 'evaluate.evaluatecontent',
		width : 180
		},{
		fieldLabel : '回复内容',
		id : 'uppdate_evareplycontent',
		labelStyle:'text-align:right',
		xtype : 'htmleditor',
		name : 'evaluate.replycontent',
		width : 500,
		height:'30%'
		}]
		}]}
		],
		buttons : [{
			text : '回复',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updateevaluateForm, "evaluate_update.action", queryevaluateStore, "修改信息")
				updateevaluateWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateevaluateWin.hide();
				updateevaluateForm.form.reset();
			}
		}]
	});

	updateevaluateWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 420,
		plain : true,
		closable : false,
		items : updateevaluateForm
	});
	var divHeight = document.getElementById('evaluategrid').offsetHeight; 
	alert(divHeight);
	
	
	
	updateEvaluate = function() {
		_evarecord = queryevaluateGrid.getSelectionModel().getSelected();
		flag = queryevaluateGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			//alert(new Date(_evarecord.get('evaluatetime')).format(Date.patterns.ISO8601Long));
			Ext.getCmp("uppdate_idEvaluatetext").setValue(_evarecord.get('tlr_name'));
			Ext.getCmp("uppdate_phoneEvaluatetext").setValue(_evarecord.get('phonenumber'));
		
			updateevaluateWin.show();
			updateevaluateForm.getForm().load({
				url : 'evaluate_findById.action?evaluate.idNumber='+ _evarecord.get('idNumber'),
				waitMsg : '正在载入数据...',	
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
					Ext.getCmp("uppdate_evaluatetime").setValue(new Date(_evarecord.get('evaluatetime')).format(Date.patterns.ISO8601Long));
				}
			});
			
		} else{
			Ext.Msg.alert('友情提示', '请选择一条需要查看的信息！');}
		
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
