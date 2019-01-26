
var queryintegraltotalStore;			
var queryintegraltotalGrid;
var addintegraltotal;
var addintegraltotalForm;
var addintegraltotalWin;
var updateintegraltotal;
var updateintegraltotalWin;
var updateintegraltotalForm;
var updateintegraltotalReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/integraltotalView.jsp');
	 queryintegraltotalStore = new Ext.data.JsonStore({
		url : 'integraltotal_findAll.action',
		root : 'integraltotalList',
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
name : 'idUser',
mapping : 'idUser'
}
,{
name : 'integralSum',
mapping : 'integralSum'
}
,{
name : 'usableIntegral',
mapping : 'usableIntegral'
}
,{
name : 'validtime',
mapping : 'validtime'
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
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '档案管理-积分总表主键',
id : 'select_idNumber',
xtype : 'numberfield',
name : 'integraltotal.idNumber',
width : '80%'
}
,{
fieldLabel : '积分总数',
id : 'select_integralSum',
xtype : 'numberfield',
name : 'integraltotal.integralSum',
width : '80%'
}

]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'select_idUser',
xtype : 'numberfield',
name : 'integraltotal.idUser',
width : '80%'
}
,{
fieldLabel : '可用积分',
id : 'select_usableIntegral',
xtype : 'numberfield',
name : 'integraltotal.usableIntegral',
width : '80%'
}
,{
fieldLabel : '有效期结束时间',
id : 'select_validtime',
xtype : 'datetimefield',
name : 'integraltotal.validtime',
anchor : '95%'
}
,{
layout : 'column',
items : [{
columnWidth : 0.5,
items : [{
xtype : 'button',
text : '重置',
width : 100,
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
queryintegraltotalStore.proxy = new Ext.data.HttpProxy({
url : 'integraltotal_findInfoByConditions.action?'
+'&integraltotal.idUser='
+ Ext.getCmp('select_idUser').getValue()
+'&integraltotal.integralSum='
+ Ext.getCmp('select_integralSum').getValue()
+'&integraltotal.usableIntegral='
+ Ext.getCmp('select_usableIntegral').getValue()
+'&integraltotal.validtime='
+ Ext.getCmp('select_validtime').getValue()
});
	queryintegraltotalStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryintegraltotalStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryintegraltotalGrid = new Ext.grid.GridPanel({
		store : queryintegraltotalStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '档案管理-积分总表主键',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
return tempString;
}}
,{
header : '用户主键',
dataIndex : 'idUser',
width : 120 
}
,{
header : '积分总数',
dataIndex : 'integralSum',
width : 120 
}
,{
header : '可用积分',
dataIndex : 'usableIntegral',
width : 120 
}
,{
header : '有效期结束时间',
dataIndex : 'validtime',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addintegraltotal();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryintegraltotalGrid, queryintegraltotalStore, "integraltotal_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryintegraltotalStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'integraltotalGrid',
		items : [selectUnitForm, queryintegraltotalGrid]
	});
	var divHeight = document.getElementById('integraltotalGrid').offsetHeight;
	var divWidth = document.getElementById('integraltotalGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryintegraltotalGrid.setWidth(showQueryPanel.getWidth());
	queryintegraltotalGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addintegraltotalForm = new Ext.FormPanel({
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
fieldLabel : '档案管理-积分总表主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'integraltotal.idNumber',
width : '80%'
}
,{
fieldLabel : '积分总数',
id : 'add_integralSum',
xtype : 'numberfield',
name : 'integraltotal.integralSum',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'add_idUser',
xtype : 'numberfield',
name : 'integraltotal.idUser',
width : '80%'
}
,{
fieldLabel : '可用积分',
id : 'add_usableIntegral',
xtype : 'numberfield',
name : 'integraltotal.usableIntegral',
width : '80%'
}
,{
fieldLabel : '有效期结束时间',
id : 'add_validtime',
xtype : 'datetimefield',
name : 'integraltotal.validtime',
anchor : '95%'
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
				check(addintegraltotalForm, "integraltotal_addNewInfo.action", queryintegraltotalStore, "添加信息")
				addintegraltotalWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addintegraltotalWin.hide();
				addintegraltotalForm.form.reset();
			}
		}]

	});

	addintegraltotalWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addintegraltotalForm
	});

	addintegraltotal = function() {
		addintegraltotalWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updateintegraltotalReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'integraltotal.idNumber',
mapping : 'idNumber'
}
,{
name : 'integraltotal.idUser',
mapping : 'idUser'
}
,{
name : 'integraltotal.integralSum',
mapping : 'integralSum'
}
,{
name : 'integraltotal.usableIntegral',
mapping : 'usableIntegral'
}
,{
name : 'integraltotal.validtime',
mapping : 'validtime'
}
]
	);
		
	updateintegraltotalForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateintegraltotalReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '档案管理-积分总表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'integraltotal.idNumber',
width : '80%'
}
,{
fieldLabel : '积分总数',
id : 'uppdate_integralSum',
xtype : 'numberfield',
name : 'integraltotal.integralSum',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用户主键',
id : 'uppdate_idUser',
xtype : 'numberfield',
name : 'integraltotal.idUser',
width : '80%'
}
,{
fieldLabel : '可用积分',
id : 'uppdate_usableIntegral',
xtype : 'numberfield',
name : 'integraltotal.usableIntegral',
width : '80%'
}
,{
fieldLabel : '有效期结束时间',
id : 'uppdate_validtime',
xtype : 'datetimefield',
name : 'integraltotal.validtime',
anchor : '95%'
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
				check(updateintegraltotalForm, "integraltotal_update.action", queryintegraltotalStore, "修改信息")
				updateintegraltotalWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateintegraltotalWin.hide();
				updateintegraltotalForm.form.reset();
			}
		}]
	});

	updateintegraltotalWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateintegraltotalForm
	});

	update = function() {
		_record = queryintegraltotalGrid.getSelectionModel().getSelected();
		flag = queryintegraltotalGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateintegraltotalWin.show();
					
			updateintegraltotalForm.getForm().load({
				url : 'integraltotal_findById.action?integraltotal.idNumber='+ _record.get('idNumber'),
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
 
