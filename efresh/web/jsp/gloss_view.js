
var queryt_gloss_infoStore;			
var queryt_gloss_infoGrid;
var addt_gloss_info;
var addt_gloss_infoForm;
var addt_gloss_infoWin;
var updatet_gloss_info;
var updatet_gloss_infoWin;
var updatet_gloss_infoForm;
var updatet_gloss_infoReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_gloss_infoView.jsp');
	 queryt_gloss_infoStore = new Ext.data.JsonStore({
		url : 't_gloss_info_findAll.action',
		root : 't_gloss_infoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : '1'
		},
		fields : [,{
name : 'idNumber',
mapping : 'idNumber'
}
,{
name : 'gloss_type',
mapping : 'gloss_type'
}
,{
name : 'ser_no',
mapping : 'ser_no'
}
,{
name : 'gloss_body',
mapping : 'gloss_body'
}
],
		autoLoad : false
		
	});
	
	
	 var record_start = 0;
	 var rowNum = new Ext.grid.RowNumberer({
			header : '序号',
			width : 40,
			renderer : function(value, metadata, record, rowIndex){
				return record_start + 1 + rowIndex;
			}
		});

	

	queryt_gloss_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_gloss_infoGrid = new Ext.grid.GridPanel({
		store : queryt_gloss_infoStore,
		sm : sm,
		stripeRows : true,
		columns : [rowNum,{
header : '术语编码',
dataIndex : 'idNumber',
width : 120}
,{
header : '术语类型',
dataIndex : 'gloss_type',
width : 120 
}
,{
header : '序号',
dataIndex : 'ser_no',
width : 120 
}
,{
header : '术语内容',
dataIndex : 'gloss_body',
width : 120 
}
],
		width : 500,
		height : 560,
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_gloss_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_gloss_infoGrid',
		items : [queryt_gloss_infoGrid]
	});
	var divHeight = document.getElementById('t_gloss_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_gloss_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_gloss_infoGrid.setWidth(showQueryPanel.getWidth());
	queryt_gloss_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	

	addt_gloss_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 400,
		plain : true,
		closable : false,
		items : addt_gloss_infoForm
	});

	addt_gloss_info = function() {
		addt_gloss_infoWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatet_gloss_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_gloss_info.idNumber',
mapping : 'idNumber'
}
,{
name : 't_gloss_info.gloss_type',
mapping : 'gloss_type'
}
,{
name : 't_gloss_info.ser_no',
mapping : 'ser_no'
}
,{
name : 't_gloss_info.gloss_body',
mapping : 'gloss_body'
}
]
	);
		
	updatet_gloss_infoForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_gloss_infoReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '术语编码',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_gloss_info.idNumber',
width : '80%'
}
,{
fieldLabel : '序号',
id : 'uppdate_ser_no',
xtype : 'textfield',
name : 't_gloss_info.ser_no',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '术语类型',
id : 'uppdate_gloss_type',
width : 100,
xtype : 'combo',
store : gloss_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_gloss_info.gloss_type',
pageSize : 5,
anchor : '90%'
}
]}
]}
,{
name : 't_gloss_info.gloss_body',
xtype : 'htmleditor',
fieldLabel : '术语内容',
heigth:300,
anchor : '95%'
}],
	heigth:370,
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatet_gloss_infoForm, "t_gloss_info_update.action", queryt_gloss_infoStore, "修改信息")
				updatet_gloss_infoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_gloss_infoWin.hide();
				updatet_gloss_infoForm.form.reset();
			}
		}]
	});

	updatet_gloss_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 500,
		plain : true,
		closable : false,
		items : updatet_gloss_infoForm
	});

	update = function() {
		_record = queryt_gloss_infoGrid.getSelectionModel().getSelected();
		flag = queryt_gloss_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_gloss_infoWin.show();
					
			updatet_gloss_infoForm.getForm().load({
				url : 't_gloss_info_findById.action?t_gloss_info.idNumber='+ _record.get('idNumber'),
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
	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
