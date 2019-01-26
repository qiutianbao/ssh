
var queryrebatewayStore;			
var queryrebatewayGrid;
var addrebateway;
var addrebatewayForm;
var addrebatewayWin;
var updaterebateway;
var updaterebatewayWin;
var updaterebatewayForm;
var updaterebatewayReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/rebatewayView.jsp');
	 queryrebatewayStore = new Ext.data.JsonStore({
		url : 'rebateway_findAll.action',
		root : 'rebatewayList',
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
name : 'suppMoney',
mapping : 'suppMoney'
}
,{
name : 'rebateway',
mapping : 'rebateway'
}
,{
name : 'proportionStart',
mapping : 'proportionStart'
}
,{
name : 'proportionEnd',
mapping : 'proportionEnd'
}
,{
name : 'upperlimit',
mapping : 'upperlimit'
}
],
		autoLoad : false
		
	});
	

	

	queryrebatewayStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryrebatewayGrid = new Ext.grid.GridPanel({
		store : queryrebatewayStore,
		sm : sm,
		columns : [ sm, rowNum
,{
header : '充值金额',
dataIndex : 'suppMoney',
width : 200 
}
,{
header : '返利方式',
dataIndex : 'rebateway',
width : 200 ,
renderer : function(value, meta, record) {
	var tempString="";
	if(value=="1"){
		tempString="直接赠送";
	}else if(value=="2"){
		tempString="随机红包";
	}
	return tempString;
	}
},
{
	header : '返利比例',
	dataIndex : 'proportionStart',
	width : 200
},{
	header : '返利上限',
	dataIndex : 'upperlimit',
	width : 200
	
}
,{
	header : '操作',
	width : 120, 
	renderer : function(value, meta, record) {
	var tempString = '<a href=javascript:update() class="setupdate" style="float:none;margin:0 auto">修改</a>';
	return tempString;
	}}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addrebateway();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryrebatewayGrid, queryrebatewayStore, "rebateway_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryrebatewayStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'rebatewayGrid',
		items : [ queryrebatewayGrid]
	});
	var divHeight = document.getElementById('rebatewayGrid').offsetHeight;
	var divWidth = document.getElementById('rebatewayGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryrebatewayGrid.setWidth(showQueryPanel.getWidth());
	queryrebatewayGrid.setHeight(showQueryPanel.getHeight());
	
	

	
	addrebatewayForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 230, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
	fieldLabel : '充值金额',
	id : 'add_suppMoney',
	xtype : 'numberfield',
	name : 'rebateway.suppMoney',
	width : '80%'
},
{
	fieldLabel : '返利比例下限',
	id : 'add_proportionStart',
	xtype : 'numberfield',
	name : 'rebateway.proportionStart',
	width : '80%'
},{
	fieldLabel : '返利金额上限',
	id : 'add_upperlimit',
	xtype : 'numberfield',
	name : 'rebateway.upperlimit',
	width : '80%'
	}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{   
	fieldLabel:'返利方式',
	xtype:'combo',
	store:new Ext.data.SimpleStore({
        fields: ['value','text'],
        data: [['1','直接赠送'],['2','随机红包']]
    }),
    
	valueField:"value",
	displayField:"text",
	mode:'local',
	forceSelection:true,//必须选择一项
	emptyText:'请选择...',//默认值
	hiddenName : 'rebateway.rebateway',//hiddenName才是提交到后台的input的name
	editable:false,//不允许输入
	triggerAction:'all',
	width:100,
	value:'随机红包'
}
,
{
	fieldLabel : '返利比例上限',
	id : 'add_proportionEnd',
	xtype : 'numberfield',
	name : 'rebateway.proportionEnd',
	width : '80%'
	}

]
}
]}
],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addrebatewayForm, "rebateway_addNewInfo.action", queryrebatewayStore, "添加信息")
				addrebatewayWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addrebatewayWin.hide();
				addrebatewayForm.form.reset();
			}
		}]

	});

	addrebatewayWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addrebatewayForm
	});

	addrebateway = function() {
		addrebatewayWin.show();
		
	
	};
	
	updaterebatewayReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'rebateway.idNumber',
mapping : 'idNumber'
}
,{
name : 'rebateway.suppMoney',
mapping : 'suppMoney'
}
,{
name : 'rebateway.rebateway',
mapping : 'rebateway'
}
,{
name : 'rebateway.proportionStart',
mapping : 'proportionStart'
}
,{
name : 'rebateway.proportionEnd',
mapping : 'proportionEnd'
}
,{
name : 'rebateway.upperlimit',
mapping : 'upperlimit'
}

]
	);
		
	updaterebatewayForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updaterebatewayReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '支付管理',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'rebateway.idNumber',
width : '80%',
}
,
{   
	fieldLabel:'返利方式',
	xtype:'combo',
	store:new Ext.data.SimpleStore({
        fields: ['value','text'],
        data: [['1','直接赠送'],['2','随机红包']]
    }),
    id : 'uppdate_rebateway',
	valueField:"value",
	displayField:"text",
	mode:'local',
	forceSelection:true,//必须选择一项
	emptyText:'请选择...',//默认值
	hiddenName : 'rebateway.rebateway',//hiddenName才是提交到后台的input的name
	editable:false,//不允许输入
	triggerAction:'all',
	width:100,
	value:'随机红包'
}
,{
fieldLabel : '返利比例上限',
id : 'uppdate_proportionEnd',
xtype : 'numberfield',
name : 'rebateway.proportionEnd',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '充值金额',
id : 'uppdate_suppMoney',
xtype : 'numberfield',
name : 'rebateway.suppMoney',
width : '80%'
}
,{
fieldLabel : '返利比例下限',
id : 'uppdate_proportionStart',
xtype : 'numberfield',
name : 'rebateway.proportionStart',
width : '80%'
}
,{
fieldLabel : '返利金额上限',
id : 'uppdate_upperlimit',
xtype : 'numberfield',
name : 'rebateway.upperlimit',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updaterebatewayForm, "rebateway_update.action", queryrebatewayStore, "修改信息")
				updaterebatewayWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updaterebatewayWin.hide();
				updaterebatewayForm.form.reset();
			}
		}]
	});

	updaterebatewayWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updaterebatewayForm
	});

	update = function() {
		_record = queryrebatewayGrid.getSelectionModel().getSelected();
		flag = queryrebatewayGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updaterebatewayWin.show();
					
			updaterebatewayForm.getForm().load({
				url : 'rebateway_findById.action?rebateway.idNumber='+ _record.get('idNumber'),
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
	//Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
