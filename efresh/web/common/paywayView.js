
var querypaywayStore;			
var querypaywayGrid;
var addpayway;
var addpaywayForm;
var addpaywayWin;
var updatepayway;
var updatepaywayWin;
var updatepaywayForm;
var updatepaywayReader;
var showQueryPanel;


 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/paywayView.jsp');
	 querypaywayStore = new Ext.data.JsonStore({
		url : 'payway_findAll.action',
		root : 'paywayList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [{
name : 'idNumber',
mapping : 'idNumber'
}
,{
name : 'waycode',
mapping : 'waycode'
}
,{
name : 'wayname',
mapping : 'wayname'
}
,{
name : 'status',
mapping : 'status'
}
],
		autoLoad : false
		
	});
	
	
	

	
	

	querypaywayStore.load();

	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querypaywayGrid = new Ext.grid.GridPanel({
		store : querypaywayStore,
		id:'paywayid',
		sm : sm,
		columns : [ sm, rowNum,{
		header : '支付管理',
		dataIndex : 'idNumber',
		width : 120, 
		renderer : function(value, meta, record) {
		var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
		return tempString;
		}}
		,{
			header : '支付方式编码',
			dataIndex : 'waycode',
			width : 120 ,
			renderer : function(value, meta, record) {
				var tempString="";
				if(value==0){
					tempString="e币支付";
				}else if(value==1){
					tempString="支付宝支付";
				}else if(value==2){
					tempString="银联支付";
				}else if(value==3){
					tempString="微信支付";
				}
				return tempString;
			}
		}
		,{
		header : '支付方式名称',
		dataIndex : 'wayname',
		width : 120 
		}
		,{
		header : '支付方式状态',
		dataIndex : 'status',
		width : 120 ,
		renderer : function(value, meta, record) {
			var tempString="";
			if(value==0){
				tempString="正常";
			}else if(value==1){
				tempString="关闭";
			}else{
				tempString="未知";
			}
			return tempString;
		}
		},
		{
			header: '操作',
			dataIndex: 'back3',
			width: 180,
			renderer: function(value, meta, record) {
				var tempString = '<a href="javascript:;" class="setupdate" onclick="update()" style="float:none;margin:0 auto">修改</a>';
				return tempString;
			}
		}
		],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addpayway();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querypaywayGrid, querypaywayStore, "payway_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querypaywayStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'paywayGrid',
		items : [querypaywayGrid]
	});
	var divHeight = document.getElementById('paywayGrid').offsetHeight;
	var divWidth = document.getElementById('paywayGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querypaywayGrid.setWidth(showQueryPanel.getWidth());
	querypaywayGrid.setHeight(showQueryPanel.getHeight());
	
	

	
	addpaywayForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 150, 
		items : [{
	layout : 'column',
	items : [
	{
	columnWidth: .5,
	layout : 'form',
	items : [
	{
	fieldLabel : '支付方式名称',
	id : 'add_wayname',
	xtype : 'textfield',
	name : 'payway.wayname',
	width : '80%'
	}
	]
	},{
	columnWidth: .5,
	layout : 'form',
	items : [
	{   
	fieldLabel:'支付方式',
	xtype:'combo',
	store:wayCodeStore,
	valueField:"id",
	displayField:"name",
	mode:'local',
	forceSelection:true,//必须选择一项
	emptyText:'请选择...',//默认值
	hiddenName:'payway.waycode',//hiddenName才是提交到后台的input的name
	editable:false,//不允许输入
	triggerAction:'all',
    id : 'add_waycode',  
    name: 'payway.waycode',
	width:100
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
				check(addpaywayForm, "payway_addNewInfo.action", querypaywayStore, "添加信息")
				addpaywayWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addpaywayWin.hide();
				addpaywayForm.form.reset();
			}
		}]

	});

	addpaywayWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 200,
		plain : true,
		closable : false,
		items : addpaywayForm
	});

	addpayway = function() {
		addpaywayWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatepaywayReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'payway.idNumber',
mapping : 'idNumber'
}
,{
name : 'payway.waycode',
mapping : 'waycode'
}
,{
name : 'payway.wayname',
mapping : 'wayname'
}
,{
name : 'payway.status',
mapping : 'status'
}

]
	);
		
	updatepaywayForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatepaywayReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'payway.idNumber',
width : '80%'
}
,{
fieldLabel : '支付方式名称',
id : 'uppdate_wayname',
xtype : 'textfield',
name : 'payway.wayname',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{   
	fieldLabel:'支付方式',
	xtype:'combo',
	store:wayCodeStore,
	valueField:"id",
	displayField:"name",
	mode:'local',
	forceSelection:true,//必须选择一项
	emptyText:'请选择...',//默认值
	hiddenName:'payway.waycode',//hiddenName才是提交到后台的input的name
	editable:false,//不允许输入
	triggerAction:'all',
    id : 'uppdate_waycode',  
    name: 'payway.waycode',
	width:100
}
,
{   
	fieldLabel:'支付方式状态',
	xtype:'combo',
	store:wayStatsStore,
	valueField:"id",
	displayField:"name",
	mode:'local',
	forceSelection:true,//必须选择一项
	emptyText:'请选择...',//默认值
	hiddenName:'payway.status',//hiddenName才是提交到后台的input的name
	editable:false,//不允许输入
	triggerAction:'all',
    id : 'uppdate_status',  
    name: 'payway.status',
	width:100
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
				check(updatepaywayForm, "payway_update.action", querypaywayStore, "修改信息")
				updatepaywayWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatepaywayWin.hide();
				updatepaywayForm.form.reset();
			}
		}]
	});

	updatepaywayWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatepaywayForm
	});

	update = function() {
		_record = querypaywayGrid.getSelectionModel().getSelected();
		flag = querypaywayGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatepaywayWin.show();
					
			updatepaywayForm.getForm().load({
				url : 'payway_findById.action?payway.idNumber='+ _record.get('idNumber'),
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
//	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 function setbox(){
	 Ext.MessageBox.confirm('选择框','是否关闭支付方式?',function(btn){
		   if(btn=="是"){
			   
			   
		   }
	   });
	
}

