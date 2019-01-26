
var querycommodityStore;			
var querycommodityGrid;
var addcommodity;
var addcommodityForm;
var addcommodityWin;
var updatecommodity;
var updatecommodityWin;
var updatecommodityForm;
var updatecommodityReader;
var showQueryPanel;
var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/commodityView.jsp');
	
	 querycommodityStore = new Ext.data.JsonStore({
		url : 'commodity_findAll.action',
		root : 'list',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [{
name : 'idNumber',
mapping : 'commodity.idNumber'
}
,{
name : 'commodityname',
mapping : 'commodity.commodityname'
}
,{
name : 'commoditycode',
mapping : 'commodity.commoditycode'
}
,{
name : 'idStore',
mapping : 'estore.corpname'
}
,{
name : 'imagename',
mapping : 'commodity.imagename'
}
,{
name : 'idStore',
mapping : 'estore.address'
}
,{
name : 'status',
mapping : 'commodity.status'
}
,{
name : 'brandname',
mapping : 'storebrand.brandname'
},
{
name : 'categoryname',
mapping : 'category.categoryname'
},
{
name: 'price',
mapping : 'commodity.back1'
}
],
		autoLoad : false
		
	});
	 
	 var myStore = new Ext.data.JsonStore({  
		    url: 'commodity_category.action',  
		    root: 'list',  
		    autoLoad: true,  
		    fields: [
		             {name:'cateroy_name' ,mapping:'categorylist.categoryname'},
		             {name:'category_id',mapping: 'categorylist.idNumber'}
		       ]  
	 }); 
	 
	 var storebrandStore = new Ext.data.JsonStore({  
		    url: 'commodity_storebrand.action',  
		    root: 'list',  
		    autoLoad: true,  
		    fields: [
		             {name:'brand_name' ,mapping:'storebrandlist.brandname'},
		             {name:'brand_id',mapping: 'storebrandlist.idNumber'}
		       ]  
	 }); 
	 
	 var addressStore = new Ext.data.JsonStore({  
		    url: 'commodity_address.action',  
		    root: 'list',  
		    autoLoad: true,  
		    fields: [
		             {name:'estore_address' ,mapping:'estorelist.address'},
		             {name:'estore_id',mapping: 'estorelist.idNumber'}
		       ]  
	 }); 
	 
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding :10,
		layout : 'form',
		items : [{
layout : 'form',
items : [
{
    fieldLabel: '分类',
    id:'select_idCategory',
    xtype: 'combo',
    store: myStore,
    emptyText: '请选择',
    mode: 'local',
    width:150,
    triggerAction: 'all',
    valueField: 'category_id',
    displayField: 'cateroy_name',
},	
{
    fieldLabel: '品牌',
    id:'select_idBrands',
    xtype: 'combo',
    store: storebrandStore,
    emptyText: '请选择',
    mode: 'local',
    width:150,
    triggerAction: 'all',
    valueField: 'brand_id',
    displayField: 'brand_name',

},
{
	fieldLabel : '商品名称',
	id : 'select_signname',
	xtype : 'textfield',
	name : 'commodityname',
	width :150
	}
]},{
layout : 'form',

items : [
     	
{
    			fieldLabel: '基地',
    		    id:'select_address',
    		    xtype: 'combo',
    		    store: addressStore,
    		    emptyText: '请选择',
    		    mode: 'local',
    		    width:150,
    		    triggerAction: 'all',
    		    valueField: 'estore_id',
    		    displayField: 'estore_address',
},
{
    fieldLabel: '商品状态',
    xtype: 'combo',
    id:'select_status',
    store: new Ext.data.SimpleStore({
        fields: ['value','text'],
        data: [['','全部'],['1','上架'],['0','下架']]
    }),
    emptyText: '全部',
    mode: 'local',
    width:150,
    triggerAction: 'all',
    valueField: 'value',
    displayField: 'text',
},
{
	layout:'column',
	items:[{
	items:[{
 		xtype : 'button',
 		text : '重置',
 		width : 100,
 		style:'margin:0 10px',
 		iconCls : 'icon-reset',
 		handler : function() {
 		selectUnitForm.form.reset();
 		//alert(Ext.getCmp('select_idBrand').getValue())
 		}}]	
	},{
		
	items:[{
		xtype : 'button',
		text : '查询',
		width : 100,
		iconCls : 'icon-select',
		handler : function() {
		//alert(Ext.get('categoryname').dom.value);
		querycommodityStore.proxy = new Ext.data.HttpProxy({
		url : 'commodity_findInfoByConditions.action?'
		+'commodity.idCategory='
		+ Ext.getCmp('select_idCategory').getValue()
		+'&commodity.idBrand='
		+Ext.getCmp('select_idBrands').getValue()
		+'&commodity.commodityname='
		+Ext.getCmp('select_signname').getValue()
		+'&commodity.idStore='
		+Ext.getCmp('select_address').getValue()
		+'&commodity.status='
		+Ext.getCmp('select_status').getValue()
		});
			querycommodityStore.load({
		params : {
		start : 0,
		limit : Ext.getCmp('pageBar').pageSize
		}});
		}}]		
	}
	]	
},

{
layout : 'form',
items : [{
items : []
},{
items : []}
]}]}]

		         
	});;
	
	
	

	querycommodityStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommodityGrid = new Ext.grid.GridPanel({
		store : querycommodityStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}},
{
	header : '分类',
	dataIndex : 'categoryname',
	width : 120 
	},
	{
		header : '品牌',
		dataIndex : 'brandname',
		width : 120 
		}	
,{
header : '商品名称',
dataIndex : 'commodityname',
width : 120 
}
,{
header : '基地',
dataIndex : 'idStore',
width : 120 
}
,{
header : '商品状态',
dataIndex : 'status',
width : 120,
renderer: function(value){
	if (value == 1){
		return '上架'
	}
	
	if (value == 0){
		return '下架'
	}
	
	return value;
}
}
,{
header : '操作',
dataIndex : 'idNumber',
width : 120 ,
renderer : function(value, meta, record) {
	var tempString = '<a href="commodity_detail.action?commodity.idNumber='+value+'" class="read_ky">查看</a>';
	return tempString;
	}
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommodityGrid, querycommodityStore, "commodity_delete.action", "idNumber", "删除信息");
			}
		}, "->",
		{ 
			text : '下架',
			iconCls:'icon-del',
			xtype:'button',
			dataIndex : 'idNumber',
			handler : function() {
			var rows=querycommodityGrid.getSelectionModel().getSelected(); //获取所有选中行，
			var _gs=rows.get('idNumber');
			  Ext.Ajax.request({
				  url:'commoditys_shelf.action?idNumber='+_gs,
				  method:'GET',
				  success:function(response,options){
					  if(response.status == 200){
						  alert("下架成功")
						  window.location.href=window.location.href;
					  }
				  },
				  failure:function(response,options){
					  alert("下架失败")
					  window.location.href=window.location.href;
				  }  
			  })    
			}
		},
		{ 
			text : '上架',
			iconCls:'icon-del2',
			xtype:'button',
			dataIndex:'idNumber',
			handler : function() {
				var rows=querycommodityGrid.getSelectionModel().getSelected(); //获取所有选中行，
			    var _gs=rows.get('idNumber');
			  Ext.Ajax.request({
				  url:'commoditys_shelves.action?idNumber='+_gs,
				  method:'GET',
				  success:function(response,options){
					  if(response.status == 200){
						  alert("上架成功")
						  window.location.href=window.location.href;
					  }
				  },
				  failure:function(response,options){
					  alert("上架失败")
					  window.location.href=window.location.href;
				  }  
			  })    
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycommodityStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commodityGrid',
		items : [selectUnitForm, querycommodityGrid]
	});
	var divHeight = document.getElementById('commodityGrid').offsetHeight;
	var divWidth = document.getElementById('commodityGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommodityGrid.setWidth(showQueryPanel.getWidth());
	querycommodityGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addcommodityForm = new Ext.FormPanel({
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
fieldLabel : '商品编号',
id : 'add_commoditycode',
xtype : 'textfield',
name : 'commodity.commoditycode',
width : '80%'
}
,{
fieldLabel : '商品展示图片名称',
id : 'add_imagename',
xtype : 'textfield',
name : 'commodity.imagename',
width : '80%'
}
,{
fieldLabel : '商品状态',
id : 'add_status',
xtype : 'numberfield',
name : 'commodity.status',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品名称',
id : 'add_commodityname',
xtype : 'textfield',
name : 'commodity.commodityname',
width : '80%'
}
,{
fieldLabel : '店铺名称',
id : 'add_idStore',
xtype : 'numberfield',
name : 'commodity.idStore',
width : '80%'
}
,{
fieldLabel : '商品类别名称',
id : 'add_idCategory',
xtype : 'numberfield',
name : 'commodity.idCategory',
width : '80%'
}
,{
fieldLabel : '商品品牌表名称',
id : 'add_idBrand',
xtype : 'numberfield',
name : 'commodity.idBrand',
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
				check(addcommodityForm, "commodity_addNewInfo.action", querycommodityStore, "添加信息")
				addcommodityWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addcommodityWin.hide();
				addcommodityForm.form.reset();
			}
		}]

	});

	addcommodityWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addcommodityForm
	});

	addcommodity = function() {
		addcommodityWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatecommodityReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commodity.idNumber',
mapping : 'idNumber'
}
,{
name : 'commodity.commodityname',
mapping : 'commodityname'
}
,{
name : 'commodity.commoditycode',
mapping : 'commoditycode'
}
,{
name : 'commodity.idStore',
mapping : 'idStore'
}
,{
name : 'commodity.imagename',
mapping : 'imagename'
}
,{
name : 'commodity.category.categoryname',
mapping : 'categoryname'
}
,{
name : 'commodity.status',
mapping : 'status'
}
,{
name : 'commodity.idBrand',
mapping : 'idBrand'
}
]
	);
		
	updatecommodityForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommodityReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commodity.idNumber',
width : '80%'
}
,{
fieldLabel : '商品编号',
id : 'uppdate_commoditycode',
xtype : 'textfield',
name : 'commodity.commoditycode',
width : '80%'
}
,{
fieldLabel : '商品展示图片名称',
id : 'uppdate_imagename',
xtype : 'textfield',
name : 'commodity.imagename',
width : '80%'
}
,{
fieldLabel : '商品状态,0=上架,1=下架',
id : 'uppdate_status',
xtype : 'numberfield',
name : 'commodity.status',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品名称',
id : 'uppdate_commodityname',
xtype : 'textfield',
name : 'commodity.commodityname',
width : '80%'
}
,{
fieldLabel : '店铺主键',
id : 'uppdate_idStore',
xtype : 'numberfield',
name : 'commodity.idStore',
width : '80%'
}
,{
fieldLabel : '商品类别主键',
id : 'uppdate_idCategory',
xtype : 'numberfield',
name : 'commodity.idCategory',
width : '80%'
}
,{
fieldLabel : '商品品牌表主键',
id : 'uppdate_idBrand',
xtype : 'numberfield',
name : 'commodity.idBrand',
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
				check(updatecommodityForm, "commodity_update.action", querycommodityStore, "修改信息")
				updatecommodityWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommodityWin.hide();
				updatecommodityForm.form.reset();
			}
		}]
	});

	updatecommodityWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommodityForm
	});

	update = function() {
		_record = querycommodityGrid.getSelectionModel().getSelected();
		flag = querycommodityGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommodityWin.show();
					
			updatecommodityForm.getForm().load({
				url : 'commodity_findById.action?commodity.idNumber='+ _record.get('idNumber'),
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
