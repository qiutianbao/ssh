
var queryoutlibraryStore;			
var queryoutlibraryGrid;
var addoutlibrary;
var addoutlibraryForm;
var addoutlibraryWin;
var updateoutlibrary;
var updateoutlibraryWin;
var updateoutlibraryForm;
var updateoutlibraryReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/outlibraryView.jsp');
	 queryoutlibraryStore = new Ext.data.JsonStore({
		url : 'outlibrarybills_findAll.action',
		root : 'list',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
			name : 'idNumber',
			mapping : 'outlibrarybillslist.idNumber'
			}
			,{
			name : 'outlibrarytime',
			mapping : 'outlibrarybillslist.outlibrarytime'
			}
			,{
			name : 'outlibraryperson',
			mapping : 'outlibrarybillslist.outlibraryperson'
			}
			,{
			name : 'address',
			mapping : 'estore.address'
			}
			,{
			name : 'outlibrarybill',
			mapping : 'outlibrarybillslist.outlibrarybill'
			}
			],
					autoLoad : false
		});
	 
	 var myStore = new Ext.data.JsonStore({  
		    url: 'outlibrarybills_address.action',  
		    root: 'list',  
		    autoLoad: true,  
		    fields: [
		             {name:'estore_address' ,mapping:'estorelist.address'},
		             {name:'estore_Id',mapping: 'estorelist.idNumber'},
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
				queryoutlibraryStore.proxy = new Ext.data.HttpProxy({
				url : 'outlibrarybills_findInfoByConditions.action?'
				+'outlibrarytime='
				+ new Date(Ext.getCmp('select_storagetime').getValue()).format(Date.patterns.ISO8601Long)
				+'&outlibrarybills.outlibrarytime2='
				+ new Date(Ext.getCmp('select_storagetime2').getValue()).format(Date.patterns.ISO8601Long)
				+'&address='
				+selectVal
				});
				queryoutlibraryStore.load({
				params : {
				start : 0,
				limit : Ext.getCmp('pageBar').pageSize
				}});
				}
		
			}
	]}]
		});
	
	

	queryoutlibraryStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryoutlibraryGrid = new Ext.grid.GridPanel({
		store : queryoutlibraryStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '订单编号',
dataIndex : 'outlibrarybill',
width : 220 
}
,{
header : '基地',
dataIndex : 'address',
width : 220 
}
,{
header : '经办人 ',
dataIndex : 'outlibraryperson',
width : 197 
}
,{
header : '出库时间',
dataIndex : 'outlibrarytime',
width : 220 ,
renderer:function(value){ 
	return new Date(value).format(Date.patterns.ISO8601Long)
}
},{
	header : '操作',
	dataIndex : 'idNumber',
	width : 180,
	renderer : function(value, meta, record) {
		var tempString = '<a href="outlibrarys_findIds.action?idOutlibrary='+value+'" class="btn1">查看</a>';
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
				addoutlibrary();
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryoutlibraryStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'outlibraryGrid',
		items : [selectUnitForm, queryoutlibraryGrid]
	});
	var divHeight = document.getElementById('outlibraryGrid').offsetHeight;
	var divWidth = document.getElementById('outlibraryGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryoutlibraryGrid.setWidth(showQueryPanel.getWidth());
	queryoutlibraryGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addoutlibraryForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
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
name : 'outlibrarybills.outlibrarybill',
width : '80%'
}
,{
fieldLabel : '经办人',
id : 'add_idUser',
xtype : 'textfield',
readOnly:true,
value : '张三',
name : 'outlibrarybills.outlibraryperson',
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
format: 'Y-m-d',
readOnly:true, 
name : 'outlibrarybills.outlibrarytime',
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
					check(addoutlibraryForm, "outlibrarybills_save.action", queryoutlibraryStore, "添加信息")
					addoutlibraryWin.hide();
				}
				
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addoutlibraryWin.hide();
				addoutlibraryForm.form.reset();
			}
		}]

	});

	addoutlibraryWin = new Ext.Window({
		layout : 'form',
		width : 580,
		height : 200,
		plain : true,
		closable : false,
		items : addoutlibraryForm
	});

	addoutlibrary = function() {
		addoutlibraryWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updateoutlibraryReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'outlibrary.idNumber',
mapping : 'idNumber'
}
,{
name : 'outlibrary.outlibtime',
mapping : 'outlibtime'
}
,{
name : 'outlibrary.idCommodity',
mapping : 'idCommodity'
}
,{
name : 'outlibrary.idStore',
mapping : 'idStore'
}
,{
name : 'outlibrary.idUser',
mapping : 'idUser'
}
,{
name : 'outlibrary.outlibnumber',
mapping : 'outlibnumber'
}
,{
name : 'outlibrary.specifications',
mapping : 'specifications'
}
,{
name : 'outlibrary.price',
mapping : 'price'
}
,{
name : 'outlibrary.weight',
mapping : 'weight'
}
,{
name : 'outlibrary.company',
mapping : 'company'
}
]
	);
		
	updateoutlibraryForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateoutlibraryReader,
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
name : 'outlibrary.idNumber',
width : '80%'
}
,{
fieldLabel : '商品名称',
id : 'uppdate_idCommodity',
xtype : 'numberfield',
name : 'outlibrary.idCommodity',
width : '80%'
}
,{
fieldLabel : '出库人名称',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'outlibrary.idUser',
width : '80%'
}
,{
fieldLabel : '规格',
id : 'uppdate_specifications',
xtype : 'textfield',
name : 'outlibrary.specifications',
width : '80%'
}
,{
fieldLabel : '重量',
id : 'uppdate_weight',
xtype : 'numberfield',
name : 'outlibrary.weight',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '出库时间',
id : 'uppdate_outlibtime',
xtype : 'datetimefield',
name : 'outlibrary.outlibtime',
anchor : '95%'
}
,{
fieldLabel : '批发商名称',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'outlibrary.idStore',
width : '80%'
}
,{
fieldLabel : '出库数量',
id : 'uppdate_outlibnumber',
xtype : 'numberfield',
name : 'outlibrary.outlibnumber',
width : '80%'
}
,{
fieldLabel : '单价',
id : 'uppdate_price',
xtype : 'numberfield',
name : 'outlibrary.price',
width : '80%'
}
,{
fieldLabel : '单位',
id : 'uppdate_company',
xtype : 'textfield',
name : 'outlibrary.company',
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
				check(updateoutlibraryForm, "outlibrary_update.action", queryoutlibraryStore, "修改信息")
				updateoutlibraryWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateoutlibraryWin.hide();
				updateoutlibraryForm.form.reset();
			}
		}]
	});

	updateoutlibraryWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateoutlibraryForm
	});

	update = function() {
		_record = queryoutlibraryGrid.getSelectionModel().getSelected();
		flag = queryoutlibraryGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateoutlibraryWin.show();
					
			updateoutlibraryForm.getForm().load({
				url : 'outlibrary_findById.action?outlibrary.idNumber='+ _record.get('idNumber'),
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
 
