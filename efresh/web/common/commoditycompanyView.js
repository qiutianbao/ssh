
var querycommoditycompanyStore;			
var querycommoditycompanyGrid;
var addcommoditycompany;
var addcommoditycompanyForm;
var addcommoditycompanyWin;
var updatecommoditycompany;
var updatecommoditycompanyWin;
var updatecommoditycompanyForm;
var updatecommoditycompanyReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/commoditycompanyView.jsp');
	 querycommoditycompanyStore = new Ext.data.JsonStore({
		url : 'commoditycompany_findAll.action',
		root : 'commoditycompanyList',
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
name : 'companyname',
mapping : 'companyname'
}
,{
name : 'company',
mapping : 'company'
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
		layout : 'column',
		items : [{
layout : 'form',
items : [
{
fieldLabel : '单位缩写',
id : 'select_company',
xtype : 'textfield',
name : 'commoditycompany.company',
width : 150
},
{
	fieldLabel : '单位名称',
	id : 'select_companyname',
	xtype : 'textfield',
	name : 'commoditycompany.companyname',
	width : 150
	},
	{
		xtype : 'button',
		text : '重置',
		width : 100,
		style:'float:left;margin:0 5px',
		iconCls : 'icon-reset',
		handler : function() {
		selectUnitForm.form.reset();
		}}
]},{
layout : 'form',
items : [{
layout : 'column',
items : [{
items : []
},{
items : [{
xtype : 'button',
text : '查询',
width : 100,
iconCls : 'icon-select',
handler : function() {
querycommoditycompanyStore.proxy = new Ext.data.HttpProxy({
url : 'commoditycompany_findInfoByConditions.action?'
+'&commoditycompany.companyname='
+ Ext.getCmp('select_companyname').getValue()
+'&commoditycompany.company='
+ Ext.getCmp('select_company').getValue()
});
	querycommoditycompanyStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	querycommoditycompanyStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querycommoditycompanyGrid = new Ext.grid.GridPanel({
		store : querycommoditycompanyStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '商品单位表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '单位名称',
dataIndex : 'companyname',
width : 120 
}
,{
header : '单位缩写',
dataIndex : 'company',
width : 120 
}

],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addcommoditycompany();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querycommoditycompanyGrid, querycommoditycompanyStore, "commoditycompany_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querycommoditycompanyStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'commoditycompanyGrid',
		items : [selectUnitForm, querycommoditycompanyGrid]
	});
	var divHeight = document.getElementById('commoditycompanyGrid').offsetHeight;
	var divWidth = document.getElementById('commoditycompanyGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querycommoditycompanyGrid.setWidth(showQueryPanel.getWidth());
	querycommoditycompanyGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addcommoditycompanyForm = new Ext.FormPanel({
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
fieldLabel : '单位缩写',
id : 'add_company',
xtype : 'textfield',
name : 'commoditycompany.company',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '单位名称',
id : 'add_companyname',
xtype : 'textfield',
name : 'commoditycompany.companyname',
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
				check(addcommoditycompanyForm, "commoditycompany_addNewInfo.action", querycommoditycompanyStore, "添加信息")
				addcommoditycompanyWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addcommoditycompanyWin.hide();
				addcommoditycompanyForm.form.reset();
			}
		}]

	});

	addcommoditycompanyWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addcommoditycompanyForm
	});

	addcommoditycompany = function() {
		addcommoditycompanyWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatecommoditycompanyReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'commoditycompany.idNumber',
mapping : 'idNumber'
}
,{
name : 'commoditycompany.companyname',
mapping : 'companyname'
}
,{
name : 'commoditycompany.company',
mapping : 'company'
}
]
	);
		
	updatecommoditycompanyForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatecommoditycompanyReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '商品单位表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'commoditycompany.idNumber',
width : '80%'
}
,{
fieldLabel : '单位缩写',
id : 'uppdate_company',
xtype : 'textfield',
name : 'commoditycompany.company',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '单位名称',
id : 'uppdate_companyname',
xtype : 'textfield',
name : 'commoditycompany.companyname',
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
				check(updatecommoditycompanyForm, "commoditycompany_update.action", querycommoditycompanyStore, "修改信息")
				updatecommoditycompanyWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatecommoditycompanyWin.hide();
				updatecommoditycompanyForm.form.reset();
			}
		}]
	});

	updatecommoditycompanyWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatecommoditycompanyForm
	});

	update = function() {
		_record = querycommoditycompanyGrid.getSelectionModel().getSelected();
		flag = querycommoditycompanyGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatecommoditycompanyWin.show();
					
			updatecommoditycompanyForm.getForm().load({
				url : 'commoditycompany_findById.action?commoditycompany.idNumber='+ _record.get('idNumber'),
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
 
