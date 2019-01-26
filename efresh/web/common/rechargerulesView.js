
var queryrechargerulesStore;			
var queryrechargerulesGrid;
var addrechargerules;
var addrechargerulesForm;
var addrechargerulesWin;
var updaterechargerules;
var updaterechargerulesWin;
var updaterechargerulesForm;
var updaterechargerulesReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/rechargerulesView.jsp');
	//
	 queryrechargerulesStoreForSup = new Ext.data.JsonStore({
			url : 'rechargerules_findAll.action',
			root : 'rechargerulesListForSup',
			totalProperty : 'listCountForSup',
			baseParams : {
				start : 0,
				limit : 10,
				flag : 'sup'
			},
			fields : [{
	name : 'idNumberForSup',
	mapping : 'idNumberForSup'
	}
	,{
	name : 'summaryForSup',
	mapping : 'summaryForSup'
	}
	,{
	name : 'titleForSup',
	mapping : 'titleForSup'
	}
	,{
	name : 'contentForSup',
	mapping : 'contentForSup'
	}
	,{
	name : 'ruleTypeForSup',
	mapping : 'ruleTypeForSup'
	}
	],
			autoLoad : true
			
		});
	 queryrechargerulesStoreForPre = new Ext.data.JsonStore({
		url : 'rechargerules_findAll.action',
		root : 'rechargerulesListForPre',
		totalProperty : 'listCountForPre',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'pre'
		},
		fields : [{
name : 'idNumber',
mapping : 'idNumber'
}
,{
name : 'summary',
mapping : 'summary'
}
,{
name : 'title',
mapping : 'title'
}
,{
name : 'content',
mapping : 'content'
}
,{
name : 'ruleType',
mapping : 'ruleType'
}
],
		autoLoad : true
		
	});
	
	

	 queryrechargerulesStoreForPre.load();
	 queryrechargerulesStoreForSup.load();
	
	var smForSup = new Ext.grid.CheckboxSelectionModel();
	var sm = new Ext.grid.CheckboxSelectionModel();
	var queryrechargerulesGridForSup = new Ext.grid.GridPanel({
		store : queryrechargerulesStoreForSup,
		sm : smForSup,
		columns : [ smForSup, rowNum
,{
header : '小标题',
dataIndex : 'titleForSup',
width : 190 
}
,{
header : '内容',
dataIndex : 'contentForSup',
width : 400 
}
,{
	header: '操作',
	dataIndex: 'back3',
	width: 200,
	renderer: function(value, meta, record) {
		var tempString = '<div class="getdom"><a href="javascript:;" class="setupdate" style="float:none;margin:0 auto" onclick="update1()">修改</a>';
		return tempString;
	}
}
],
		width : 400,
		height : 100,
		tbar : ['<font size="4">预充值规则</font><br>概述：<font color="#w2e2q2"><input type="text" size="100" disabled="disabled" value="预充值即把银行卡上的钱转到“e鲜”平台用户账户上的过程，成功后可进行付款"/></font>',{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addrechargerules();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryrechargerulesGridForSup, queryrechargerulesStoreForSup, "rechargerules_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBarForSup',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryrechargerulesStoreForSup,
			emptyMsg : "没有记录"
		}]
	});

	var queryrechargerulesGridForPre = new Ext.grid.GridPanel({
		store : queryrechargerulesStoreForPre,
		sm : sm,
		columns : [ sm, rowNum
,{
header : '小标题',
dataIndex : 'title',
width : 190 
}
,{
header : '内容',
dataIndex : 'content',
width : 400 
}
,{
	header: '操作',
	dataIndex: 'back3',
	width: 200,
	renderer: function(value, meta, record) {
		var tempString = '<div class="getdom"><a href="javascript:;" class="setupdate"  style="float:none;margin:0 auto" onclick="update2()">修改</a>';
		return tempString;
	}
}
],
		width : 400,
		height : 100,
		tbar : ['<font size="4">优惠劵规则</font><br>概述：<font color="#w2e2q2"><input type="text" size="100" disabled="disabled" value="优惠劵是“e鲜”平台通过买赠，活动参与，积分兑换等形式发放给用户，用于减免购买支付的回馈用户措施"/></font>',{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addrechargerules();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryrechargerulesGridForPre, queryrechargerulesStoreForPre, "rechargerules_delete.action", "idNumber", "删除信息");
			}
		}
		],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryrechargerulesStoreForPre,
			emptyMsg : "没有记录"
		}]
	});

	
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'rechargerulesGrid',
		items : [queryrechargerulesGridForSup, queryrechargerulesGridForPre]
	});
	var divHeight = document.getElementById('rechargerulesGrid').offsetHeight;
	var divWidth = document.getElementById('rechargerulesGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryrechargerulesGridForSup.setWidth(showQueryPanel.getWidth());
	queryrechargerulesGridForSup.setHeight(showQueryPanel.getHeight()/2-20);
	queryrechargerulesGridForPre.setWidth(showQueryPanel.getWidth());
	queryrechargerulesGridForPre.setHeight(showQueryPanel.getHeight()/2-20);
	

	
	addrechargerulesForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 380,
		height : 300, 
		items : [{
layout : 'column',
items : [
{
width : 350,
layout : 'form',
items : [
{
fieldLabel : '小标题',
id : 'add_title',
xtype : 'textfield',
name : 'rechargerules.title',
width :150
}
,{
	fieldLabel:'规则类型',
	xtype:'combo',
	store:ruleTypeStore,
    valueField:"id",
	displayField:"name",
	mode:'local',
	forceSelection:true,//必须选择一项
	emptyText:'请选择...',//默认值
	hiddenName:'rechargerules.ruleType',//hiddenName才是提交到后台的input的name
	editable:false,//不允许输入
	triggerAction:'all',
    id : 'add_ruleType',  
    name: 'rechargerules.ruleType',
	width:150
},{
	fieldLabel : '内容',
	id : 'add_content',
	xtype : 'textarea',
	name : 'rechargerules.content',
	width : 180,
	height :140
	}
]
},{
columnWidth: .5,
layout : 'form',
items : [

]
}
]}
],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				var typeId = Ext.getCmp('add_ruleType').getValue();
				//(1 = 预充值 ，2 = 优惠规则)
				if(typeId == "1"){
					check(addrechargerulesForm, "rechargerules_addNewInfo.action", queryrechargerulesStoreForSup, "添加信息");
				}else if(typeId == "2"){
					check(addrechargerulesForm, "rechargerules_addNewInfo.action", queryrechargerulesStoreForPre, "添加信息");
				}
				addrechargerulesWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addrechargerulesWin.hide();
				addrechargerulesForm.form.reset();
			}
		}]

	});

	addrechargerulesWin = new Ext.Window({
		layout : 'form',
		width :400,
		height : 320,
		plain : true,
		closable : false,
		items : addrechargerulesForm
	});

	addrechargerules = function() {
		addrechargerulesWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updaterechargerulesReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'rechargerules.idNumber',
mapping : 'idNumber'
}
,{
name : 'rechargerules.summary',
mapping : 'summary'
}
,{
name : 'rechargerules.title',
mapping : 'title'
}
,{
name : 'rechargerules.content',
mapping : 'content'
}
,{
name : 'rechargerules.ruleType',
mapping : 'ruleType'
}
]
	);
		
	updaterechargerulesForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		width : 380,
		height : 300, 
		reader : updaterechargerulesReader,
		items : [{
layout : 'column',
items : [
{
width : 350,
layout : 'form',
items : [
{
fieldLabel : '',
id : 'uppdate_idNumber',
hidden:true ,
labelStyle:'text-align: center',
xtype : 'numberfield',
name : 'rechargerules.idNumber',
width : 150
}
,{
fieldLabel : '小标题',
id : 'uppdate_title',
labelStyle:'text-align: center',
xtype : 'textfield',
name : 'rechargerules.title',
width : 150
}
,{
	fieldLabel:'规则类型',
	labelStyle:'text-align: center',
	xtype:'combo',
	store:ruleTypeStore,
	disabled:true,
	valueField:"id",
	displayField:"name",
	mode:'local',
	forceSelection:true,//必须选择一项
	emptyText:'请选择...',//默认值
	hiddenName:'rechargerules.ruleType',//hiddenName才是提交到后台的input的name
	editable:false,//不允许输入
	triggerAction:'all',
    id : 'uppdate_ruleType',  
    name: 'rechargerules.ruleType',
	width:150
},{
	fieldLabel : '内容',
	labelStyle:'text-align: center',
	id : 'uppdate_content',
	xtype : 'textarea',
	name : 'rechargerules.content',
	width : 180,
	height:140
	}
]
},{
width:100,
layout : 'form',
items : [

]
}
]}
],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				var typeId = Ext.getCmp('uppdate_ruleType').getValue();
				//(1 = 预充值 ，2 = 优惠规则)
				if(typeId == "1"){
					check(updaterechargerulesForm, "rechargerules_update.action", queryrechargerulesStoreForSup, "修改信息");
				}else if(typeId == "2"){
					check(updaterechargerulesForm, "rechargerules_update.action", queryrechargerulesStoreForPre, "修改信息");
				}
				updaterechargerulesWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updaterechargerulesWin.hide();
				updaterechargerulesForm.form.reset();
			}
		}]
	});

	updaterechargerulesWin = new Ext.Window({
		layout : 'form',
		width : 400,
		height : 320,
		plain : true,
		closable : false,
		items : updaterechargerulesForm
	});

	update1 = function() {
		_record = queryrechargerulesGridForSup.getSelectionModel().getSelected();
		flag = queryrechargerulesGridForSup.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updaterechargerulesWin.show();
			updaterechargerulesForm.getForm().load({
				url : 'rechargerules_findById.action?rechargerules.idNumber='+ _record.get('idNumberForSup'),
				waitMsg : '正在载入数据...',
				width:350,
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
	};
	
	update2 = function() {
		_record = queryrechargerulesGridForPre.getSelectionModel().getSelected();
		flag = queryrechargerulesGridForPre.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updaterechargerulesWin.show();
					
			updaterechargerulesForm.getForm().load({
				url : 'rechargerules_findById.action?rechargerules.idNumber='+ _record.get('idNumber'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
	};






	
	// 加载页面后默认焦点
 });
 
