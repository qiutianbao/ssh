
var querycommoditylevelStore;			
var querycommoditylevelGrid;
var addcommoditylevel;
var addcommoditylevelForm;
var addcommoditylevelWin;
var updatecommoditylevel;
var updatecommoditylevelWin;
var updatecommoditylevelForm;
var updatecommoditylevelReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){  
	 
	 
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/commoditylevelView.jsp');
	 querycommoditylevelStore = new Ext.data.JsonStore({
		url : 'commoditylevel_findAll.action',
		root : 'list',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [
		          {
		        	name:'c_idNumber',
		        	mapping : 'commodity.idNumber'
		          },
{
			name:'idNumber',
			mapping:'commoditylevel.idNumber'
}
,
{
name : 'categoryname',
mapping : 'category.categoryname'
},
{
name : 'commodityname',
mapping : 'commodity.commodityname'
}
,{
name : 'levelname',
mapping : 'commoditylevel.levelname'
}
,{
name : 'grossweight',
mapping : 'commoditylevel.grossweight'
}
,{
name : 'cleanweight',
mapping : 'commoditylevel.cleanweight'
}
,{
name : 'outerpacking',
mapping : 'commoditylevel.outerpacking'
}
,{
name : 'stock',
mapping : 'commoditylevel.stock'
}
,{
name : 'customproperty1',
mapping : 'commoditylevel.customproperty1'
}
,{
name : 'customvalue1',
mapping : 'commoditylevel.customvalue1'
}
,{
name : 'customproperty2',
mapping : 'commoditylevel.customproperty2'
}
,{
name : 'customvalue2',
mapping : 'commoditylevel.customvalue2'
}
,{
name : 'customproperty3',
mapping : 'commoditylevel.customproperty3'
}
,{
name : 'customvalue3',
mapping : 'commoditylevel.customvalue3'
}
,{
name : 'customproperty4',
mapping : 'commoditylevel.customproperty4'
}
,{
name : 'customvalue4',
mapping : 'commoditylevel.customvalue4'
}
,{
name : 'customproperty5',
mapping : 'commoditylevel.customproperty5'
}
,{
name : 'customvalue5',
mapping : 'commoditylevel.customvalue5'
}
,{
name : 'idCompany',
mapping : 'commoditycompany.companyname'
},
{
name : 'status',
mapping : 'commodity.status'
},
{
name:'commoditylevel.commoditycompany.companyname',
mapping:'commoditycompany.companyname'
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
	 
	 
	 var company = new Ext.data.JsonStore({  
		    url: 'commoditylevel_commoditycompany.action',  
		    root: 'list',  
		    autoLoad: true,  
		    fields: [
		             {name:'companyname' ,mapping:'commoditycompanyList.companyname'},
		             {name:'idNumbers',mapping: 'commoditycompanyList.idNumber'}
		       ]  
	 }); 
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 80,
		padding : 5,
		layout : 'form',
		items : [{
columnWidth: .5,
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
{   fieldLabel: '商品状态',
    xtype: 'combo',
    id:'select_levelname',
    emptyText: '请选择',
    store: new Ext.data.SimpleStore({
        fields: ['value','text'],
        data: [['A级','A级'],['B级','B级'],['C级','C级'],['D级','D级']]
    }),
    mode: 'local',
    width:150,
    triggerAction: 'all',
    valueField: 'value',
    displayField: 'text',
},
    {
        fieldLabel: '单位',
        xtype: 'combo',
        store: company,
        id:'select_idCompany',
        emptyText: '请选择',
        mode: 'local',
        width:150,
        triggerAction: 'all',
        valueField: 'idNumbers',
        displayField: 'companyname',
    },
    {
        fieldLabel: '状态',
        xtype: 'combo',
        id:'select_status',
        store: new Ext.data.SimpleStore({
            fields: ['value','text'],
            data: [['-1','全部'],['1','上架'],['0','下架']]
        }),
        emptyText: '请选择',
        mode: 'local',
        width:150,
        triggerAction: 'all',
        valueField: 'value',
        displayField: 'text',
        value:-1
      
    }]},
    {
    	layout : 'form',
    	items : [{
    	items : [{
    	xtype : 'button',
    	text : '重置',
    	width : 100,
    	style:'float:left;margin:0 20px',
    	iconCls : 'icon-reset',
    	handler : function() {
    	selectUnitForm.form.reset();
    	}},{
        	xtype : 'button',
        	text : '查询',
        	width : 100,
        	iconCls : 'icon-select',
        	handler : function() {
        	querycommoditylevelStore.proxy = new Ext.data.HttpProxy({
        	url : 'commoditylevel_findInfoByConditions.action?'
        	+'commoditylevel.idNumber='
        	+'&commodity.idCategory='
        	+ Ext.getCmp('select_idCategory').getValue()
        	+'&commoditylevel.levelname='
        	+ Ext.getCmp('select_levelname').getValue()
        	+'&commoditylevel.idCompany='
        	+ Ext.getCmp('select_idCompany').getValue()
        	+'&commodity.status='
        	+ Ext.getCmp('select_status').getValue()
        	});
        		querycommoditylevelStore.load({
        	params : {
        	start : 0,
        	limit : Ext.getCmp('pageBar').pageSize
        	}});
        	}}]
    	},{
    	items : []}
    	]}
    
    
    
    
] 
        
	});

	
	

	querycommoditylevelStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommoditylevelGrid = new Ext.grid.GridPanel({
		store : querycommoditylevelStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品分类',
dataIndex : 'categoryname',
width : 120, 
},
{
header : '商品名称',
dataIndex : 'commodityname',
	width : 120, 
}

,{
header : '级别名称',
dataIndex : 'levelname',
width : 120 
},{
	header : '库存',
	dataIndex : 'stock',
	width : 120 
	}
,{
	header : '单位',
	dataIndex : 'commoditylevel.commoditycompany.companyname',
	width: 120
},
{
	header : '状态',
	dataIndex :'status',
	width: 120,
	renderer: function(value){
		if (value == 1){
			return '上架'
		}
		
		if (value == 0){
			return '下架'
		}
		
		return value;
	}
},{
	header: '操作',
	dataIndex: 'back3',
	width: 180,
	renderer: function(value, meta, record) {
		var tempString = '<div class="getdom"><a href="javascript:;" class="setupdate" onclick="update()" style="float:none;margin:0 auto">修改</a></div>';
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
				addcommoditylevel();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',*/{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommoditylevelGrid, querycommoditylevelStore, "commoditylevel_delete.action", "idNumber", "删除信息");
			}
		}, "->",
		{ 
			text : '下架',
			iconCls:'icon-del',
			xtype:'button',
			dataIndex : 'idNumber',
			handler : function() {
			var rows=querycommoditylevelGrid.getSelectionModel().getSelected(); //获取所有选中行
			var _gs=rows.get('c_idNumber');
			  Ext.Ajax.request({
				  url:'commoditylevels_shelf.action?idNumber='+_gs,
				  method:'GET',
				  success:function(response,options){
					  alert("下架成功")
					  window.location.href=window.location.href;
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
				var rows=querycommoditylevelGrid.getSelectionModel().getSelected(); //获取所有选中行
			    var _gs=rows.get('c_idNumber');
			  Ext.Ajax.request({
				  url:'commoditylevels_shelves.action?idNumber='+_gs,
				  method:'GET',
				  success:function(response,options){
					  alert("上架成功")
					  window.location.href=window.location.href;
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
			store : querycommoditylevelStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commoditylevelGrid',
		items : [selectUnitForm, querycommoditylevelGrid]
	});
	var divHeight = document.getElementById('commoditylevelGrid').offsetHeight;
	var divWidth = document.getElementById('commoditylevelGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommoditylevelGrid.setWidth(showQueryPanel.getWidth());
	querycommoditylevelGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addcommoditylevelForm = new Ext.FormPanel({
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
fieldLabel : '商品管理-商品级别表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'commoditylevel.idNumber',
width : '80%'
}
,{
fieldLabel : '毛重',
id : 'add_grossweight',
xtype : 'numberfield',
name : 'commoditylevel.grossweight',
width : '80%'
}
,{
fieldLabel : '包装规格',
id : 'add_outerpacking',
xtype : 'textfield',
name : 'commoditylevel.outerpacking',
width : '80%'
}
,{
fieldLabel : '自定义属性名1',
id : 'add_customproperty1',
xtype : 'textfield',
name : 'commoditylevel.customproperty1',
width : '80%'
}
,{
fieldLabel : '自定义属性名2',
id : 'add_customproperty2',
xtype : 'textfield',
name : 'commoditylevel.customproperty2',
width : '80%'
}
,{
fieldLabel : '自定义属性名3',
id : 'add_customproperty3',
xtype : 'textfield',
name : 'commoditylevel.customproperty3',
width : '80%'
}
,{
fieldLabel : '自定义属性名4',
id : 'add_customproperty4',
xtype : 'textfield',
name : 'commoditylevel.customproperty4',
width : '80%'
}
,{
fieldLabel : '自定义属性名5',
id : 'add_customproperty5',
xtype : 'textfield',
name : 'commoditylevel.customproperty5',
width : '80%'
}
,{
fieldLabel : '重量单位主键',
id : 'add_idCompany',
xtype : 'textfield',
name : 'commoditylevel.idCompany',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'commoditylevel.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'commoditylevel.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'commoditylevel.back4',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '级别名称',
id : 'add_levelname',
xtype : 'textfield',
name : 'commoditylevel.levelname',
width : '80%'
}
,{
fieldLabel : '净重',
id : 'add_cleanweight',
xtype : 'numberfield',
name : 'commoditylevel.cleanweight',
width : '80%'
}
,{
fieldLabel : '库存量',
id : 'add_stock',
xtype : 'numberfield',
name : 'commoditylevel.stock',
width : '80%'
}
,{
fieldLabel : '自定义属性值1',
id : 'add_customvalue1',
xtype : 'textfield',
name : 'commoditylevel.customvalue1',
width : '80%'
}
,{
fieldLabel : '自定义属性值2',
id : 'add_customvalue2',
xtype : 'textfield',
name : 'commoditylevel.customvalue2',
width : '80%'
}
,{
fieldLabel : '自定义属性值3',
id : 'add_customvalue3',
xtype : 'textfield',
name : 'commoditylevel.customvalue3',
width : '80%'
}
,{
fieldLabel : '自定义属性值4',
id : 'add_customvalue4',
xtype : 'textfield',
name : 'commoditylevel.customvalue4',
width : '80%'
}
,{
fieldLabel : '自定义属性值5',
id : 'add_customvalue5',
xtype : 'textfield',
name : 'commoditylevel.customvalue5',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'commoditylevel.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'commoditylevel.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'commoditylevel.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'commoditylevel.back5',
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
				check(addcommoditylevelForm, "commoditylevel_addNewInfo.action", querycommoditylevelStore, "添加信息")
				addcommoditylevelWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addcommoditylevelWin.hide();
				addcommoditylevelForm.form.reset();
			}
		}]

	});

	addcommoditylevelWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addcommoditylevelForm
	});

	addcommoditylevel = function() {
		addcommoditylevelWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatecommoditylevelReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'cc_idNumber',
mapping : 'commoditylevel.idNumber'
}
,{
name : 'cc_stock',
mapping : 'commoditylevel.stock'
}
]
	);
		
	updatecommoditylevelForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommoditylevelReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '库存数量',
id : 'uppdate_stock',
xtype : 'numberfield',
name : 'asdas',
value : '123',
width : 150
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
				check(updatecommoditylevelForm, "commoditylevel_update.action", querycommoditylevelStore, "修改信息")
				updatecommoditylevelWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommoditylevelWin.hide();
				updatecommoditylevelForm.form.reset();
			}
		}]
	});

	updatecommoditylevelWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 300,
		plain : true,
		closable : false,
		items : updatecommoditylevelForm
	});

	update = function() {
		_record = querycommoditylevelGrid.getSelectionModel().getSelected();
		//alert(_record.get('idNumber'));
		flag = querycommoditylevelGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommoditylevelWin.show();
					
			updatecommoditylevelForm.getForm().load({
				url : 'commoditylevel_findById.action?commoditylevel.idNumber='+ _record.get('idNumber'),
				waitMsg : '正在载入数据...',
		/*		Ext.getCmp('uppdate_stock').setValue()*/
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
					alert(0)
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
	};
	// 加载页面后默认焦点
	//Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
