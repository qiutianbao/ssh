
var queryfristlevelorderStore;		
var queryfristlevelorderGrid;
var addfristlevelorder;
var addfristlevelorderForm;
var addfristlevelorderWin;
var updatefristlevelorder;
var updatefristlevelorderWin;
var updatefristlevelorderForm;
var updatefristlevelorderReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/estoreMainView.jsp');
	 queryfristlevelorderStore = new Ext.data.JsonStore({
		url : 'fristlevelorder_findInfoByConditions.action?fristlevelorder.orderstatus=0',
		root : 'list',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo',
		},
		fields : [,{
			name:'idNumber',
			mapping:'fristlevelorder.idNumber'
		}
,{
name : 'fristlevelorderNo',
mapping : 'fristlevelorder.firstlevelorderNo'
}

,{
name : 'signname',
mapping : 'fristlevelorder.signname'
}
,{
	name : 'idStore',
	mapping : 'fristlevelorder.idStore'
}
,{
	name : 'idUser',
	mapping : 'fristlevelorder.idUser'
}
,{
	name : 'creationordertime',
	mapping : 'fristlevelorder.creationordertime'
}
,{
name : 'arrivaltime',
mapping : 'fristlevelorder.arrivaltime'
}
,{
name : 'paytime',
mapping : 'fristlevelorder.paytime'
}
,{
name : 'canceltime',
mapping : 'fristlevelorder.canceltime'
}
,{
name : 'deliverytime',
mapping : 'fristlevelorder.deliverytime'
}
,{
	name : 'orderstatus',
	mapping : 'orderstatus'
}
,{
name : 'signtime',
mapping : 'fristlevelorder.signtime'
}
,{
	name : 'arrivaladdress',
	mapping : 'fristlevelorder.arrivaladdress'
	}
,{
	name : 'arrivalpeople',
	mapping : 'fristlevelorder.arrivalpeople'
	}
,{
	name : 'arrivalpeopletel',
	mapping : 'fristlevelorder.arrivalpeopletel'
	}
,{
	name : 'collectionstarttime',
	mapping : 'fristlevelorder.collectionstarttime'
	}
,{
	name : 'collectionendtime',
	mapping : 'fristlevelorder.collectionendtime'
	}
,{
	name : 'corpname',
	mapping : 'estore.corpname'
	}
],
		autoLoad : false
		
	});
	
	
	
	
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'form',
		items : [{
/*columnWidth: .5,*/
layout : 'form',
style:'float:left',
items : [
{
    fieldLabel: '订单状态',
    xtype: 'combo',
    id:'getCv',
    hiddenName : 'paramKey', 
    store:new Ext.data.SimpleStore({
    	fields:['value','text'],
    	data:[['0','待处理'],['1','已下单'],['2','已接单'],['3','已拒单'],['4','已取消'],['5','已签收']]
    	
    }),
    emptyText: '请选择',
    mode: 'local',
    width:150,
    triggerAction: 'all',
    valueField: 'value',
    displayField: 'text',
 

},
{
fieldLabel : '下单时间',
id : 'select_creationordertime',
xtype : 'datetimefield',
name : 'fristlevelorder.creationordertime',
width :140
},
{
	fieldLabel : '至',
	id : 'select_creationordertime2',
	xtype : 'datetimefield',
	name : 'fristlevelorder.creationordertime2',
	width : 140
	}
,{
fieldLabel : '到货时间',
id : 'select_arrivaltime',
xtype : 'datetimefield',
name : 'fristlevelorder.arrivaltime',
width : 140
}
,{
fieldLabel : '至',
id : 'select_arrivaltime2',
xtype : 'datetimefield',
name : 'fristlevelorder.arrivaltime2',
width : 140
}
]},{
/*columnWidth: .5,*/
width:500,	
style:'float:left',
layout : 'form',
items : [
//{
//	fieldLabel : '基地',
//	id : 'select_add',
//	xtype : 'textfield',
//	name : 'fristlevelorder.add',
//	width : 150
//	},         
{
layout : 'column',
items : [{
items : [{
xtype : 'button',
text : '重置',
width : 100,
style:'margin:0 10px',
iconCls : 'icon-reset',
handler : function() {
selectUnitForm.form.reset();
}}]
},{
items : [{
xtype : 'button',
text : '查询',
width : 100,
iconCls : 'icon-select',
handler : function() {
	var action = 'fristlevelorder_findByConditions.action?';
	if(Ext.getCmp('select_creationordertime').getValue() != ""){
		var creationordertime = new Date(Ext.getCmp('select_creationordertime').getValue()).format(Date.patterns.ISO8601Long);
		action += '&fristlevelorder.creationordertime='+ creationordertime;
	}
	if(Ext.getCmp('select_creationordertime2').getValue() != ""){
		var creationordertime2 = new Date(Ext.getCmp('select_creationordertime2').getValue()).format(Date.patterns.ISO8601Long);
		action += '&fristlevelorder.creationordertime2='+ creationordertime2;
				
	}
	if(Ext.getCmp('select_arrivaltime').getValue() != ""){
		var arrivaltime = new Date(Ext.getCmp('select_arrivaltime').getValue()).format(Date.patterns.ISO8601Long);
		action += '&fristlevelorder.arrivaltime='+ arrivaltime;
				
	}
	if(Ext.getCmp('select_arrivaltime2').getValue() != ""){
		var arrivaltime2 = new Date(Ext.getCmp('select_arrivaltime2').getValue()).format(Date.patterns.ISO8601Long);
		action += '&fristlevelorder.arrivaltime2='+ arrivaltime2;
	}
	if(Ext.getCmp('getCv').getValue() != ""){
		action += "&fristlevelorder.orderstatus="
			+Ext.getCmp('getCv').getValue();
	}
	
queryfristlevelorderStore.proxy = new Ext.data.HttpProxy({
url : action
});
	queryfristlevelorderStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryfristlevelorderStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryfristlevelorderGrid = new Ext.grid.GridPanel({
		store : queryfristlevelorderStore,
		sm : sm,
		columns : [ sm, rowNum,
{
	header : '订单编号',
	dataIndex : 'fristlevelorderNo',
	width : 280 
}
,{
	header : '送货地址',
	dataIndex : 'arrivaladdress',
	width : 180 
}
,{
	header : '收货人',
	dataIndex : 'arrivalpeople',
	width : 120 
	}
,{
	header : '联系方式',
	dataIndex : 'arrivalpeopletel',
	width :200
	}
,{
	header : '基地',
	dataIndex : 'corpname',
	width : 180 
	}
,{
header : '下单时间',
dataIndex : 'creationordertime',
width : 200 ,
renderer:function(value){
	return new Date(value).format(Date.patterns.ISO8601Long);
	
}
}
,{
header : '状态',
dataIndex : 'orderstatus',
width : 120 
}
,{
	header : '操作',
	dataIndex : 'idNumber',
	width : 160,
	renderer : function(value, meta, record) {
		var tempString = '<a href="fristlevelorder_detail.action?flag=1&fristlevelorder.idNumber='+value+'" class="read_ky">查看</a>';
		return tempString;
		}
	}
],
		width : 500,
		height : 100,
		tbar : [
//		        {
//			text : ' 新增 ',
//			iconCls:'icon-add',
//			handler : function() {
//				addfristlevelorder();
//			}
//		},'-',
		{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryfristlevelorderGrid, queryfristlevelorderStore, "fristlevelorder_delete.action", "idNumber", "删除信息");
			}
		}
		],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryfristlevelorderStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'fristlevelorderGrid',
		items : [selectUnitForm, queryfristlevelorderGrid]
	});
	var divHeight = document.getElementById('fristlevelorderGrid').offsetHeight;
	var divWidth = document.getElementById('fristlevelorderGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryfristlevelorderGrid.setWidth(showQueryPanel.getWidth());
	queryfristlevelorderGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addfristlevelorderForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 320, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '二级订单表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'fristlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'add_idStore',
xtype : 'numberfield',
name : 'fristlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'add_creationordertime',
xtype : 'datetimefield',
name : 'fristlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '到货时间',
id : 'add_arrivaltime',
xtype : 'datetimefield',
name : 'fristlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '取消订单时间',
id : 'add_canceltime',
xtype : 'datetimefield',
name : 'fristlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'add_deliverytime',
xtype : 'datetimefield',
name : 'fristlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'add_orderprice',
xtype : 'numberfield',
name : 'fristlevelorder.orderprice',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单编号',
id : 'add_fristlevelorderNo',
xtype : 'textfield',
name : 'fristlevelorder.fristlevelorderNo',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'add_idUser',
xtype : 'numberfield',
name : 'fristlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'add_orderstatus',
xtype : 'numberfield',
name : 'fristlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'fristlevelorder.ts',
width : '80%'
}
,{
fieldLabel : '支付时间',
id : 'add_paytime',
xtype : 'datetimefield',
name : 'fristlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'add_signtime',
xtype : 'datetimefield',
name : 'fristlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '签收人名称',
id : 'add_signname',
xtype : 'textfield',
name : 'fristlevelorder.signname',
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
				check(addfristlevelorderForm, "fristlevelorder_addNewInfo.action", queryfristlevelorderStore, "添加信息")
				addfristlevelorderWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addfristlevelorderWin.hide();
				addfristlevelorderForm.form.reset();
			}
		}]

	});

	addfristlevelorderWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 340,
		plain : true,
		closable : false,
		items : addfristlevelorderForm
	});

	addfristlevelorder = function() {
		addfristlevelorderWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatefristlevelorderReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'fristlevelorder.fristlevelorderNo',
mapping : 'fristlevelorderNo'
}
,{
name : 'fristlevelorder.back2',
mapping : 'back2'
}
,{
name : 'fristlevelorder.signname',
mapping : 'signname'
}
,{
name : 'fristlevelorder.back3',
mapping : 'back3'
}
,{
name : 'fristlevelorder.back4',
mapping : 'back4'
}
,{
name : 'fristlevelorder.creationordertime',
mapping : 'creationordertime'
}
,{
name : 'fristlevelorder.orderstatus',
mapping : 'orderstatus'
}
,{
name : 'fristlevelorder.back5',
mapping : 'back5'
}

]
	);
		
	updatefristlevelorderForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatefristlevelorderReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '二级订单表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'fristlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'fristlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'uppdate_creationordertime',
xtype : 'datetimefield',
name : 'fristlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '到货时间',
id : 'uppdate_arrivaltime',
xtype : 'datetimefield',
name : 'fristlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '取消订单时间',
id : 'uppdate_canceltime',
xtype : 'datetimefield',
name : 'fristlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'uppdate_deliverytime',
xtype : 'datetimefield',
name : 'fristlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'uppdate_orderprice',
xtype : 'numberfield',
name : 'fristlevelorder.orderprice',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '一级订单编号',
id : 'uppdate_fristlevelorderNo',
xtype : 'textfield',
name : 'fristlevelorder.fristlevelorderNo',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'fristlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'uppdate_orderstatus',
xtype : 'numberfield',
name : 'fristlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '支付时间',
id : 'uppdate_paytime',
xtype : 'datetimefield',
name : 'fristlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'uppdate_signtime',
xtype : 'datetimefield',
name : 'fristlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '签收人名称',
id : 'uppdate_signname',
xtype : 'textfield',
name : 'fristlevelorder.signname',
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
				check(updatefristlevelorderForm, "fristlevelorder_update.action", queryfristlevelorderStore, "修改信息")
				updatefristlevelorderWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatefristlevelorderWin.hide();
				updatefristlevelorderForm.form.reset();
			}
		}]
	});

	updatefristlevelorderWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 360,
		plain : true,
		closable : false,
		items : updatefristlevelorderForm
	});

	update = function() {
		_record = queryfristlevelorderGrid.getSelectionModel().getSelected();
		flag = queryfristlevelorderGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatefristlevelorderWin.show();
					
			updatefristlevelorderForm.getForm().load({
				url : 'fristlevelorder_findById.action?fristlevelorder.idNumber='+ _record.get('idNumber'),
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
 
 
