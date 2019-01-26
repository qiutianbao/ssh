
var querystorageStore;			
var querystorageGrid;
var addstorage;
var addstorageForm;
var addstorageWin;
var updatestorage;
var updatestorageWin;
var updatestorageForm;
var updatestorageReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/storageView.jsp');
	 querystorageStore = new Ext.data.JsonStore({
		url : 'storagebills_findAll.action',
		root : 'list',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
name : 'idNumber',
mapping : 'storagebillslist.idNumber'
}
,{
name : 'storagetime',
mapping : 'storagebillslist.storagetime'
}
,{
name : 'storageperson',
mapping : 'storagebillslist.storageperson'
}
,{
name : 'storagebill',
mapping : 'storagebillslist.storagebill'
}
,{
name : 'address',
mapping : 'estore.address'
}
],
		autoLoad : false
	});
	 var myStore = new Ext.data.JsonStore({  
		    url: 'storagebills_address.action',  
		    root: 'list',  
		    autoLoad: true,  
		    fields: [
		             {name:'estore_address' ,mapping:'estorelist.address'},
		             {name:'estore_Id',mapping: 'estorelist.idNumber'},
		       ],
		    });
	 
	 var userStore = new Ext.data.JsonStore({  
		    url: 'storagebills_user.action',  
		    root: 'list',  
		    autoLoad: true,  
		    fields: [
		             {name:'username' ,mapping:'user.tlr_name'},
		       ],
		    });
	
		selectUnitForm = new Ext.form.FormPanel({
			labelAlign : 'right',
			frame : true,
			labelWidth : 70,
			padding : 5,
			layout : 'column',
			items : [{
	layout : 'form',
	items : [
	{
		fieldLabel : '发布时间',
		id : 'select_storagetime',
		xtype : 'datetimefield',
		name : 'storagebills.storagetime',
		width:180
		},
		{   	fieldLabel : '至',
			id : 'select_storagetime2',
			xtype : 'datetimefield',
			name : 'storagebills.storagetime2',
			width:180
			},
			{

				 fieldLabel: '基地',
				    id:'estoreids',
				    xtype: 'combo',
				    hiddenName:'estoreid',
				    name:'estoreid',
				    store: myStore,
				    emptyText: '请选择',
				    mode: 'local',
				    width:150,
				    triggerAction: 'all',
				    valueField: 'estore_Id',
				    displayField: 'estore_address',

			},	
				{
					xtype : 'button',
					text : '查询',
					width : 100,
					style:'margin:0 5px;float:left',
					iconCls : 'icon-select',
					handler : function() {
					var selectVal=Ext.getCmp('estoreids').getValue();
					querystorageStore.proxy = new Ext.data.HttpProxy({
					url : 'storagebills_findInfoByConditions.action?'
					+'storagetime='
					+ new Date(Ext.getCmp('select_storagetime').getValue()).format(Date.patterns.ISO8601Long)
					+'&storagebills.storagetime2='
					+ new Date(Ext.getCmp('select_storagetime2').getValue()).format(Date.patterns.ISO8601Long)
					+'&address='
					+selectVal
					});
					querystorageStore.load({
					params : {
					start : 0,
					limit : Ext.getCmp('pageBar').pageSize
					}});
					}
			
				}
		]}]
			});
	querystorageStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querystorageGrid = new Ext.grid.GridPanel({
		store : querystorageStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品编号',
dataIndex : 'storagebill',
width : 220 
}
,{
header : '基地',
dataIndex : 'address',
width : 220 
}
,{
header : '经办人',
dataIndex : 'storageperson',
width : 220 
}
,{
header : '入库时间',
dataIndex : 'storagetime',
width : 220 ,
renderer: function(value) {
    return new Date(value).format("Y-m-d H:i:s");
}
},{
	header : '操作',
	dataIndex : 'idNumber',
	width : 180,
	renderer : function(value, meta, record) {
		var tempString = '<a href="storages_findByIds.action?idStoragebills='+value+'" class="btn1">查看</a>';
		return tempString;
		}
	}
],
width : 500,
height : 100,
tbar : ["->",{
			text : ' 新增入库单 ',
			iconCls:'icon-add2',
			handler : function() {
				addstorage();
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querystorageStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'storageGrid',
		items : [selectUnitForm, querystorageGrid]
	});
	var divHeight = document.getElementById('storageGrid').offsetHeight;
	var divWidth = document.getElementById('storageGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querystorageGrid.setWidth(showQueryPanel.getWidth());
	querystorageGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addstorageForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		store : userStore,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 550,
		height : 180, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '订单编号',
id : 'add_idCommodity',
readOnly:true,
xtype : 'numberfield',
name : 'storagebills.storagebill',
width : '80%'
}
,{
fieldLabel : '经办人',
id : 'add_idUser',
xtype : 'field',
readOnly:true,
name : 'storagebills.storageperson',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '入库时间',
id : 'add_storagetime',
xtype : 'datefield',
readOnly:true, 
format : 'Y-m-d',
name : 'storagebills.storagetime',
value: new Date(),
width:180
},
{

	 fieldLabel: '基地',
	    id:'estoreidsr',
	    xtype: 'combo',
	    hiddenName:'address',
	    name:'address',
	    store: myStore,
	    emptyText: '请选择',
	    mode: 'local',
	    width:150,
	    triggerAction: 'all',
	    valueField: 'estore_Id',
	    displayField: 'estore_address',
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
					var valAdd=Ext.getCmp('estoreidsr').getValue();
					if(valAdd==""){
						alert("请选择基地");
					}else{
						check(addstorageForm, "storagebills_save.action", querystorageStore, "添加信息")
						addstorageWin.hide();	
					}
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addstorageWin.hide();
				addstorageForm.form.reset();
			}
		}]

	});
	addstorageWin = new Ext.Window({
		layout : 'form',
		width : 580,
		height : 200,
		plain : true,
		closable : false,
		items : addstorageForm
	});

	addstorage = function() {
		addstorageWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatestorageReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'storage.idNumber',
mapping : 'idNumber'
}
,{
name : 'storage.storagetime',
mapping : 'storagetime'
}
,{
name : 'storage.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'storage.idStore',
mapping : 'idStore'
}
,{
name : 'storage.idUser',
mapping : 'idUser'
}
,{
name : 'storage.storagenum',
mapping : 'storagenum'
}
,{
name : 'storage.specifications',
mapping : 'specifications'
}
,{
name : 'storage.price',
mapping : 'price'
}
,{
name : 'storage.weight',
mapping : 'weight'
}
,{
name : 'storage.company',
mapping : 'company'
}
]
	);
		
	updatestorageForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatestorageReader,
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
name : 'storage.idNumber',
width : '80%'
}
,{
fieldLabel : '商品名称',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'storage.idCommodity',
width : '80%'
}
,{
fieldLabel : '入库人名称',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'storage.idUser',
width : '80%'
}
,{
fieldLabel : '规格',
id : 'uppdate_specifications',
xtype : 'textfield',
name : 'storage.specifications',
width : '80%'
}
,{
fieldLabel : '重量',
id : 'uppdate_weight',
xtype : 'numberfield',
name : 'storage.weight',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '入库时间',
id : 'uppdate_storagetime',
xtype : 'datetimefield',
name : 'storage.storagetime',
anchor : '95%'
}
,{
fieldLabel : '店铺主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'storage.idStore',
width : '80%'
}
,{
fieldLabel : '入库数量',
id : 'uppdate_storagenum',
xtype : 'numberfield',
name : 'storage.storagenum',
width : '80%'
}
,{
fieldLabel : '单价',
id : 'uppdate_price',
xtype : 'numberfield',
name : 'storage.price',
width : '80%'
}
,{
fieldLabel : '单位',
id : 'uppdate_company',
xtype : 'textfield',
name : 'storage.company',
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
				check(updatestorageForm, "storage_update.action", querystorageStore, "修改信息")
				updatestorageWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatestorageWin.hide();
				updatestorageForm.form.reset();
			}
		}]
	});

	updatestorageWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatestorageForm
	});

	update = function() {
		_record = querystorageGrid.getSelectionModel().getSelected();
		flag = querystorageGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatestorageWin.show();
					
			updatestorageForm.getForm().load({
				url : 'storage_findById.action?storage.idNumber='+ _record.get('idNumber'),
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
 
