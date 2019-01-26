
var querysecondlevelorderStore;			
var querysecondlevelorderGrid;
var addsecondlevelorder;
var addsecondlevelorderForm;
var addsecondlevelorderWin;
var updatesecondlevelorder;
var updatesecondlevelorderWin;
var updatesecondlevelorderForm;
var updatesecondlevelorderReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/secondlevelorderView.jsp');
	 querysecondlevelorderStore = new Ext.data.JsonStore({
		url : 'secondlevelorder_findSecondList.action',
		root : 'list',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
			name:'idNumber',
			mapping:'secondlevelorder.idNumber'
		}
,{
name : 'secondlevelorderNo',
mapping : 'secondlevelorder.secondlevelorderNo'
}
,{
name : 'back2',
mapping : 'secondlevelorder.back2'
}
,{
name : 'signname',
mapping : 'secondlevelorder.signname'
}
//,{
//	name : 'eIdNumber',
//	mapping : 'estore.idNumber'
//}
//,{
//	name : 'corpname',
//	mapping : 'estore.corpname'
//}
,{
	name : 'tlr_name',
	mapping : 't_tlr_mgmt.tlr_name'
}
,{
	name : 'phone',
	mapping : 't_tlr_mgmt.phone'
}
,{
	name : 'deliveryaddress',
	mapping : 't_tlr_mgmt.deliveryaddress'
}
,{
name : 'back3',
mapping : 'secondlevelorder.back3'
}
,{
name : 'back4',
mapping : 'secondlevelorder.back4'
}
,{
name : 'creationordertime',
mapping : 'secondlevelorder.creationordertime'
}
,{
name : 'orderstatusId',
mapping : 'secondlevelorder.orderstatus'
}
,{
	name : 'orderstatus',
	mapping : 'orderstatus'
}
,{
name : 'back5',
mapping : 'secondlevelorder.back5'
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
    	data:[['0','待支付'],['1','待处理'],['2','已发货'],['3','已签收'],['4','已取消'],['5','已接单'],['6','已评分'],['7','已归集'],['8','已拒单']]
    	
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
xtype : 'datefield',
name : 'secondlevelorder.creationordertime',
format : 'Y-m-d',
width :140
},
{
	fieldLabel : '至',
	id : 'select_creationordertime2',
	xtype : 'datefield',
	name : 'secondlevelorder.endordertime2',
	format : 'Y-m-d',
	width : 140
	}
,{
fieldLabel : '到货时间',
id : 'select_arrivaltime',
xtype : 'datetimefield',
name : 'secondlevelorder.arrivaltime',
width : 140
}
,{
fieldLabel : '至',
id : 'select_arrivaltime2',
xtype : 'datetimefield',
name : 'secondlevelorder.arrivaltime2',
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
//	name : 'secondlevelorder.add',
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
	//alert(Ext.getCmp('getCv').getValue());
	var action = 'secondlevelorder_findInfoByConditions.action?';
	if(Ext.getCmp('select_creationordertime').getValue() != ""){
		var creationordertime = new Date(Ext.getCmp('select_creationordertime').getValue()).format(Date.patterns.ISO8601Short);
		action += '&secondlevelorder.creationordertime='+ creationordertime;
	}
	if(Ext.getCmp('select_creationordertime2').getValue() != ""){
		var creationordertime2 = new Date(Ext.getCmp('select_creationordertime2').getValue()).format(Date.patterns.ISO8601Short);
		action += '&secondlevelorder.creationordertime2='+ creationordertime2;
	}
	if(Ext.getCmp('select_arrivaltime').getValue() != ""){
		var arrivaltime = new Date(Ext.getCmp('select_arrivaltime').getValue()).format(Date.patterns.ISO8601Long);
		action += '&secondlevelorder.arrivaltime='+ arrivaltime;
	}
	if(Ext.getCmp('select_arrivaltime2').getValue() != ""){
		var arrivaltime2 = new Date(Ext.getCmp('select_arrivaltime2').getValue()).format(Date.patterns.ISO8601Long);
		action += '&secondlevelorder.arrivaltime2='+ arrivaltime2;
	}
	if(Ext.getCmp('getCv').getValue() != ""){
		action += "&secondlevelorder.orderstatus="
			+Ext.getCmp('getCv').getValue();
	}
	
querysecondlevelorderStore.proxy = new Ext.data.HttpProxy({
url : action
//+'secondlevelorder.idNumber='
//+ Ext.getCmp('select_idNumber').getValue()
//+'&secondlevelorder.secondlevelorderNo='
//+ Ext.getCmp('select_secondlevelorderNo').getValue()
//+'&secondlevelorder.idStore='
//+ Ext.getCmp('select_idStore').getValue()
//+'&secondlevelorder.idUser='
//+ Ext.getCmp('select_idUser').getValue()
//+'&secondlevelorder.creationordertime='
//+ creationordertime
//+'&secondlevelorder.creationordertime2='
//+ creationordertime2
//+'&secondlevelorder.orderstatus='
//+ Ext.getCmp('select_orderstatus').getValue()
//+'&secondlevelorder.arrivaltime='
//+ arrivaltime
//+'&secondlevelorder.arrivaltime2='
//+ arrivaltime2
//+'&secondlevelorder.canceltime='
//+ Ext.getCmp('select_canceltime').getValue()
//+'&secondlevelorder.paytime='
//+ Ext.getCmp('select_paytime').getValue()
//+'&secondlevelorder.deliverytime='
//+ Ext.getCmp('select_deliverytime').getValue()
//+'&secondlevelorder.signtime='
//+ Ext.getCmp('select_signtime').getValue()
//+'&secondlevelorder.orderprice='
//+ Ext.getCmp('select_orderprice').getValue()
//+'&secondlevelorder.signname='
//+ Ext.getCmp('select_signname').getValue()
});
	querysecondlevelorderStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querysecondlevelorderStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysecondlevelorderGrid = new Ext.grid.GridPanel({
		store : querysecondlevelorderStore,
		sm : sm,
		columns : [ sm, rowNum,
{
	header : '订单编号',
	dataIndex : 'secondlevelorderNo',
	width : 280 
},
{
	header : '送货地址',
	dataIndex : 'deliveryaddress',
	width : 180 
}
,{
	header : '联系人',
	dataIndex : 'tlr_name',
	width : 120 
	}
,{
	header : '联系方式',
	dataIndex : 'phone',
	width :200
	}
//,{
//	header : '基地',
//	dataIndex : 'corpname',
//	width : 180 
//	}
,{
header : '下单时间',
dataIndex : 'creationordertime',
width : 200 
}
,{
header : '状态',
dataIndex : 'orderstatus',
width : 120 
},
{
	header : '操作',
	dataIndex : 'idNumber',
	width : 160,
	renderer : function(value, meta, record) {
		var tempString = '<a href="secondlevelorder_details.action?secondlevelorder.idNumber='+value+'" class="read_ky">查看</a>';
		return tempString;
		}
	}
],
		width : 500,
		height : 100,
		tbar : [/*{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addsecondlevelorder();
			}
		},*/{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysecondlevelorderGrid, querysecondlevelorderStore, "secondlevelorder_delete.action", "idNumber", "删除信息");
			}
		},'-',
		{
			text : '订单归集',
			iconCls:'icon-showddbtn',
			handler : function() {
			window.location.href="jsp/esys/ddgj.jsp"
			}
		}
		],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysecondlevelorderStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'secondlevelorderGrid',
		items : [selectUnitForm, querysecondlevelorderGrid]
	});
	var divHeight = document.getElementById('secondlevelorderGrid').offsetHeight;
	var divWidth = document.getElementById('secondlevelorderGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysecondlevelorderGrid.setWidth(showQueryPanel.getWidth());
	querysecondlevelorderGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addsecondlevelorderForm = new Ext.FormPanel({
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
name : 'secondlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'add_idStore',
xtype : 'numberfield',
name : 'secondlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'add_creationordertime',
xtype : 'datetimefield',
name : 'secondlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '到货时间',
id : 'add_arrivaltime',
xtype : 'datetimefield',
name : 'secondlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '取消订单时间',
id : 'add_canceltime',
xtype : 'datetimefield',
name : 'secondlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'add_deliverytime',
xtype : 'datetimefield',
name : 'secondlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'add_orderprice',
xtype : 'numberfield',
name : 'secondlevelorder.orderprice',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '二级订单编号',
id : 'add_secondlevelorderNo',
xtype : 'textfield',
name : 'secondlevelorder.secondlevelorderNo',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'add_idUser',
xtype : 'numberfield',
name : 'secondlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'add_orderstatus',
xtype : 'numberfield',
name : 'secondlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'secondlevelorder.ts',
width : '80%'
}
,{
fieldLabel : '支付时间',
id : 'add_paytime',
xtype : 'datetimefield',
name : 'secondlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'add_signtime',
xtype : 'datetimefield',
name : 'secondlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '签收人名称',
id : 'add_signname',
xtype : 'textfield',
name : 'secondlevelorder.signname',
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
				check(addsecondlevelorderForm, "secondlevelorder_addNewInfo.action", querysecondlevelorderStore, "添加信息")
				addsecondlevelorderWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addsecondlevelorderWin.hide();
				addsecondlevelorderForm.form.reset();
			}
		}]

	});

	addsecondlevelorderWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 340,
		plain : true,
		closable : false,
		items : addsecondlevelorderForm
	});

	addsecondlevelorder = function() {
		addsecondlevelorderWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatesecondlevelorderReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'secondlevelorder.secondlevelorderNo',
mapping : 'secondlevelorderNo'
}
,{
name : 'secondlevelorder.back2',
mapping : 'back2'
}
,{
name : 'secondlevelorder.signname',
mapping : 'signname'
}
,{
name : 'secondlevelorder.back3',
mapping : 'back3'
}
,{
name : 'secondlevelorder.back4',
mapping : 'back4'
}
,{
name : 'secondlevelorder.creationordertime',
mapping : 'creationordertime'
}
,{
name : 'secondlevelorder.orderstatus',
mapping : 'orderstatus'
}
,{
name : 'secondlevelorder.back5',
mapping : 'back5'
}

]
	);
		
	updatesecondlevelorderForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesecondlevelorderReader,
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
name : 'secondlevelorder.idNumber',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'secondlevelorder.idStore',
width : '80%'
}
,{
fieldLabel : '下单时间',
id : 'uppdate_creationordertime',
xtype : 'datetimefield',
name : 'secondlevelorder.creationordertime',
anchor : '95%'
}
,{
fieldLabel : '到货时间',
id : 'uppdate_arrivaltime',
xtype : 'datetimefield',
name : 'secondlevelorder.arrivaltime',
anchor : '95%'
}
,{
fieldLabel : '取消订单时间',
id : 'uppdate_canceltime',
xtype : 'datetimefield',
name : 'secondlevelorder.canceltime',
anchor : '95%'
}
,{
fieldLabel : '发货时间',
id : 'uppdate_deliverytime',
xtype : 'datetimefield',
name : 'secondlevelorder.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '订单总价',
id : 'uppdate_orderprice',
xtype : 'numberfield',
name : 'secondlevelorder.orderprice',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '二级订单编号',
id : 'uppdate_secondlevelorderNo',
xtype : 'textfield',
name : 'secondlevelorder.secondlevelorderNo',
width : '80%'
}
,{
fieldLabel : '下单人主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'secondlevelorder.idUser',
width : '80%'
}
,{
fieldLabel : '订单状态',
id : 'uppdate_orderstatus',
xtype : 'numberfield',
name : 'secondlevelorder.orderstatus',
width : '80%'
}
,{
fieldLabel : '支付时间',
id : 'uppdate_paytime',
xtype : 'datetimefield',
name : 'secondlevelorder.paytime',
anchor : '95%'
}
,{
fieldLabel : '签收时间',
id : 'uppdate_signtime',
xtype : 'datetimefield',
name : 'secondlevelorder.signtime',
anchor : '95%'
}
,{
fieldLabel : '签收人名称',
id : 'uppdate_signname',
xtype : 'textfield',
name : 'secondlevelorder.signname',
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
				check(updatesecondlevelorderForm, "secondlevelorder_update.action", querysecondlevelorderStore, "修改信息")
				updatesecondlevelorderWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesecondlevelorderWin.hide();
				updatesecondlevelorderForm.form.reset();
			}
		}]
	});

	updatesecondlevelorderWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 360,
		plain : true,
		closable : false,
		items : updatesecondlevelorderForm
	});

	update = function() {
		_record = querysecondlevelorderGrid.getSelectionModel().getSelected();
		flag = querysecondlevelorderGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesecondlevelorderWin.show();
					
			updatesecondlevelorderForm.getForm().load({
				url : 'secondlevelorder_findById.action?secondlevelorder.idNumber='+ _record.get('idNumber'),
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
 
 
