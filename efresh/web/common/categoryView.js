
var querycategoryStore;			
var querycategoryGrid;
var addcategory;
var addcategoryForm;
var addcategoryWin;
var updatecategory;
var updatecategoryWin;
var updatecategoryForm;
var updatecategoryReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/categoryView.jsp');
	 querycategoryStore = new Ext.data.JsonStore({
		url : 'category_findAll.action',
		root : 'categoryList',
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
name : 'superiorcode',
mapping : 'superiorcode'
}
,{
name : 'categoryname',
mapping : 'categoryname'
}
,{
name : 'seflcode',
mapping : 'seflcode'
}
],
		autoLoad : false
		
	});

	 
	 var second_Store = new Ext.data.JsonStore({  
		    url: 'category_categoryname.action',  
		    root: 'list',  
		    autoLoad: true,  
		    fields: [
		             {name:'cateroy_name' ,mapping:'categorylist.categoryname'},
		             {name:'category_id',mapping: 'categorylist.idNumber'}
		       ]  
	 }); 
	
	 var categroy = new Ext.data.JsonStore({  
		    url: 'category_categorynames.action',  
		    root: 'list',  
		    autoLoad: true,  
		    fields: [
		             {name:'cateroy_names' ,mapping:'categorylist.categoryname'},
		             {name:'category_ids',mapping: 'categorylist.idNumber'}
		       ]  
	 }); 
	selectUnitForm = new Ext.form.FormPanel({
		title : '商品分类',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
layout : 'form',
items : [
{
	 fieldLabel: '一级分类',
	    id:'select_idCategory',
	    xtype: 'combo',
	    store: categroy,
	    emptyText: '请选择',
	    mode: 'local',
	    width:150,
	    triggerAction: 'all',
	    valueField: 'category_ids',
	    displayField: 'cateroy_names',
},{
    fieldLabel: '二级分类',
    id:'select_idCategorys',
    xtype: 'combo',
    store: second_Store,
    emptyText: '请选择',
    mode: 'local',
    width:150,
    triggerAction: 'all',
    valueField: 'cateroy_name',
    displayField: 'cateroy_name',
}
]},{
layout : 'form',
items : [{
layout : 'column',
items : [{
items : [{
xtype : 'button',
text : '重置',
width : 100,
style:'float:left;margin:0 5px',
iconCls : 'icon-reset',
handler : function() {
selectUnitForm.form.reset();
}}]
},{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '查询',
width : 100,
iconCls : 'icon-select',
handler : function() {
	var urls=encodeURI('category_findInfoByConditions.action?'
			/*+'&category.superiorcode='
			+ Ext.getCmp('select_superiorcode').getValue()*/
			+'category.categoryname='
			+  Ext.getCmp('select_idCategorys').getValue());
			/*+'&category.seflcode='
			+ Ext.getCmp('select_seflcode').getValue());*/
	
querycategoryStore.proxy = new Ext.data.HttpProxy({
url : urls
});
	querycategoryStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querycategoryStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycategoryGrid = new Ext.grid.GridPanel({
		store : querycategoryStore,
		sm : sm,
		columns : [ sm, rowNum
/*,{
header : '一级分类',
dataIndex : 'categoryname',
width : 120 
}*/
,{
header : '二级分类',
dataIndex : 'categoryname',
width : 220 
}
/*,{
header : '自身分类编码',
dataIndex : 'seflcode',
width : 220 
}*/
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addcategory();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycategoryGrid, querycategoryStore, "category_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycategoryStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'categoryGrid',
		items : [selectUnitForm, querycategoryGrid]
	});
	var divHeight = document.getElementById('categoryGrid').offsetHeight;
	var divWidth = document.getElementById('categoryGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycategoryGrid.setWidth(showQueryPanel.getWidth());
	querycategoryGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addcategoryForm = new Ext.FormPanel({
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
fieldLabel : '分类名称',
id : 'add_categoryname',
xtype : 'textfield',
name : 'category.categoryname',
width : '80%'
},
{
	fieldLabel : '上级分类编码',
	id : 'add_superiorcode',
	xtype : 'textfield',
	name : 'category.superiorcode',
	width : '80%'
	}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '自身分类编码',
id : 'add_seflcode',
xtype : 'textfield',
name : 'category.seflcode',
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
				check(addcategoryForm, "category_addNewInfo.action", querycategoryStore, "添加信息")
				addcategoryWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addcategoryWin.hide();
				addcategoryForm.form.reset();
			}
		}]

	});

	addcategoryWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addcategoryForm
	});

	addcategory = function() {
		addcategoryWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatecategoryReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'category.idNumber',
mapping : 'idNumber'
}
,{
name : 'category.superiorcode',
mapping : 'superiorcode'
}
,{
name : 'category.categoryname',
mapping : 'categoryname'
}
,{
name : 'category.seflcode',
mapping : 'seflcode'
}
]
	);
		
	updatecategoryForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecategoryReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品分类表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'category.idNumber',
width : '80%'
}
,{
fieldLabel : '分类名称',
id : 'uppdate_categoryname',
xtype : 'textfield',
name : 'category.categoryname',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '上级分类编码',
id : 'uppdate_superiorcode',
xtype : 'textfield',
name : 'category.superiorcode',
width : '80%'
}
,{
fieldLabel : '自身分类编码',
id : 'uppdate_seflcode',
xtype : 'textfield',
name : 'category.seflcode',
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
				check(updatecategoryForm, "category_update.action", querycategoryStore, "修改信息")
				updatecategoryWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecategoryWin.hide();
				updatecategoryForm.form.reset();
			}
		}]
	});

	updatecategoryWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecategoryForm
	});

	update = function() {
		_record = querycategoryGrid.getSelectionModel().getSelected();
		flag = querycategoryGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecategoryWin.show();
					
			updatecategoryForm.getForm().load({
				url : 'category_findById.action?category.idNumber='+ _record.get('idNumber'),
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
 
