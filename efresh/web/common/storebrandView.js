
var querystorebrandStore;			
var querystorebrandGrid;
var addstorebrand;
var addstorebrandForm;
var addstorebrandWin;
var updatestorebrand;
var updatestorebrandWin;
var updatestorebrandForm;
var updatestorebrandReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/storebrandView.jsp');
	 querystorebrandStore = new Ext.data.JsonStore({
		url : 'storebrand_findAll.action',
		root : 'list',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
name : 'idNumber',
mapping : 'storebrand.idNumber'
}
,{
name : 'brandname',
mapping : 'storebrand.brandname'
}
,{
name : 'corpname',
mapping : 'estore.corpname'
}
],
		autoLoad : false
		
	});
	 
	 var myStore = new Ext.data.JsonStore({  
		    url: 'storebrand_estore.action',  
		    root: 'list',  
		    autoLoad: true,  
		    fields: [
		             {name:'corp_name' ,mapping:'estores.corpname'},
		             {name:'id',mapping: 'estores.idNumber'}
		       ]  
	 });
	 
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'form',
		items : [{
layout : 'form',
items : [
{
    fieldLabel: '店铺',
    id:'select_idStore',
    xtype: 'combo',
    store: myStore,
    emptyText: '请选择',
    mode: 'local',
    width:150,
    triggerAction: 'all',
    valueField: 'id',
    displayField: 'corp_name',
},{
	fieldLabel : '品牌名称',
	id : 'select_brandname',
	xtype : 'textfield',
	name : 'storebrand.brandname',
	width :150
	},{
		xtype : 'button',
		text : '重置',
		width : 100,
		style:'float:left;margin:0 5px',
		iconCls : 'icon-reset',
		handler : function() {
		selectUnitForm.form.reset();
		}},{
			xtype : 'button',
			text : '查询',
			width : 100,
			iconCls : 'icon-select',
			handler : function() {
			querystorebrandStore.proxy = new Ext.data.HttpProxy({
				
			url : 'storebrand_findInfoByConditions.action?'
			+'storebrand.brandname='
			+ Ext.getCmp('select_brandname').getValue()
			+'&storebrand.idStore='
			+ Ext.getCmp('select_idStore').getValue()
			});
				querystorebrandStore.load({
			params : {
			start : 0,
			limit : Ext.getCmp('pageBar').pageSize
			}});
			}}
]},{
columnWidth: .5,
layout : 'form',
items : [{
layout : 'column',
items : [{
columnWidth : 0.5,
items : []
},{
columnWidth : 0.5,
items : []}
]}]}]
	});;
	querystorebrandStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querystorebrandGrid = new Ext.grid.GridPanel({
		store : querystorebrandStore,
		sm : sm,
		columns : [ sm, rowNum/*,{
header : '店铺品牌表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}*/
,{
header : '品牌名称',
dataIndex : 'brandname',
width : 220 
}
,{
header : '店铺名称',
dataIndex : 'corpname',
width : 220 
},{
	header: '操作',
	dataIndex: 'back3',
	width: 180,
	renderer: function(value, meta, record) {
		var tempString = '<div class="getdom"><a href="javascript:;" style="float:none;margin:0 auto" class="setupdate" onclick="update()">修改</a></div>';
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
				addstorebrand();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querystorebrandGrid, querystorebrandStore, "storebrand_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querystorebrandStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'storebrandGrid',
		items : [selectUnitForm, querystorebrandGrid]
	});
	var divHeight = document.getElementById('storebrandGrid').offsetHeight;
	var divWidth = document.getElementById('storebrandGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querystorebrandGrid.setWidth(showQueryPanel.getWidth());
	querystorebrandGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addstorebrandForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 160, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
    fieldLabel: '店铺',
    id:'add_idStore',
    xtype: 'combo',
    store: myStore,
    hiddenName:'storebrand.idStore',
    emptyText: '请选择',
    mode: 'local',
    width:150,
    triggerAction: 'all',
    name :'storebrand.idStore',
    valueField: 'id',
    displayField: 'corp_name',
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '品牌名称',
id : 'add_brandname',
xtype : 'textfield',
name : 'storebrand.brandname',
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
				check(addstorebrandForm, "storebrand_addNewInfo.action", querystorebrandStore, "添加信息")
				addstorebrandWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addstorebrandWin.hide();
				addstorebrandForm.form.reset();
			}
		}]

	});

	addstorebrandWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 180,
		plain : true,
		closable : false,
		items : addstorebrandForm
	});

	addstorebrand = function() {
		addstorebrandWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatestorebrandReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'storebrand.idNumber',
mapping : 'idNumber'
}
,{
name : 'storebrand.brandname',
mapping : 'brandname'
}
,{
name : 'storebrand.idStore',
mapping : 'idStore'
}
]
	);
		
	updatestorebrandForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		labelWidth:140,
		waitMsgTarget : true,
		reader : updatestorebrandReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '店铺品牌表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'storebrand.idNumber',
width : 150
}
,{
    fieldLabel: '店铺',
    id:'select_idStores',
    xtype: 'combo',
    store: myStore,
    hiddenName:'storebrand.idStore',
    emptyText: '请选择',
    mode: 'local',
    width:150,
    name : 'storebrand.idStore',
    triggerAction: 'all',
    valueField: 'id',
    displayField: 'corp_name',
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '品牌名称',
id : 'uppdate_brandname',
xtype : 'textfield',
name : 'storebrand.brandname',
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
				check(updatestorebrandForm, "storebrand_update.action", querystorebrandStore, "修改信息")
				updatestorebrandWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatestorebrandWin.hide();
				updatestorebrandForm.form.reset();
			}
		}]
	});

	updatestorebrandWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 180,
		plain : true,
		closable : false,
		items : updatestorebrandForm
	});

	update = function() {
		_record = querystorebrandGrid.getSelectionModel().getSelected();
		flag = querystorebrandGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatestorebrandWin.show();
					
			updatestorebrandForm.getForm().load({
				url : 'storebrand_findById.action?storebrand.idNumber='+ _record.get('idNumber'),
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
 
