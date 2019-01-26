
var queryt_info_mgmtStore;			
var queryt_info_mgmtGrid;
var addt_info_mgmt;
var addt_info_mgmtForm;
var addt_info_mgmtWin;
var updatet_info_mgmt;
var updatet_info_mgmtWin;
var updatet_info_mgmtForm;
var updatet_info_mgmtReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	if(inst_no!='B00002' && inst_no!='B00001'){
		info_typeStore = new Ext.data.SimpleStore({
			fields : ['id', 'name'],
			data : [['2','行业快递']]
			});
	}
	haveRight('common/t_info_mgmtView.jsp');
	 queryt_info_mgmtStore = new Ext.data.JsonStore({
		url : 't_info_mgmt_findAll.action',
		root : 't_info_mgmtList',
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
name : 'info_type',
mapping : 'info_type'
}
,{
name : 'info_head',
mapping : 'info_head'
}
,{
name : 'info_body',
mapping : 'info_body'
}
,{
name : 'info_path',
mapping : 'info_path'
}
,{
name : 'info_name',
mapping : 'info_name'
}
,{
name : 'reas_date',
mapping : 'reas_date'
}
,{
name : 'tlr_no',
mapping : 'tlr_no'
}
],
		autoLoad : false
		
	});
	
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 120,
		padding : 5,
		collapsible :true,//折叠
		height : 160,
		layout : 'column',
		items : [{
	columnWidth: .5,
	layout : 'form',
	items : [
     	{
 		fieldLabel : '信息标题',
 		id : 'select_info_head',
 		xtype : 'field',
 		name : 't_info_mgmt.info_head',
 		anchor : '80%',
 		width : '80%'
 		},
{
fieldLabel : '发布日期',
id : 'select_reas_date',
xtype : 'datefield',
name : 't_info_mgmt.reas_date',
format: 'Y-m-d',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '信息类型',
id : 'select_info_type',
width : 70,
xtype : 'combo',
store : info_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_info_mgmt.info_type',
anchor : '80%'
},{
	fieldLabel : '信息状态',
	id : 'select_info_state',
	store : info_stateStore,
	width : 70,
	xtype : 'combo',
	valueField : 'id',
	displayField : 'name',
	mode : 'local',
	editable : false,
	triggerAction : 'all',
	name : 't_info_mgmt.info_state',
	anchor : '80%'
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
align : 'right',
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
queryt_info_mgmtStore.proxy = new Ext.data.HttpProxy({
url : 't_info_mgmt_findInfoByConditions.action?'
+'t_info_mgmt.info_head='
+ Ext.getCmp('select_info_head').getValue()
+'&t_info_mgmt.info_type='
+ Ext.getCmp('select_info_type').getValue()
+'&t_info_mgmt.reas_date='
+ new Date(Ext.getCmp('select_reas_date').getValue()).format(Date.patterns.SortableDateTime)
+'&t_info_mgmt.info_state='
+ Ext.getCmp('select_info_state').getValue()
});
	queryt_info_mgmtStore.load({
		params : {
		start : 0,
		limit : Ext.getCmp('pageBar').pageSize
		}});
	}}]}
]}]}]

		         
	});;
	
	
	

	queryt_info_mgmtStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_info_mgmtGrid = new Ext.grid.GridPanel({
		store : queryt_info_mgmtStore,
		sm : sm,
		title : "查询结果",
		//collapsible :true,//折叠
		//stripeRows : true,
		columns : [ sm, rowNum,{
header : '信息编码',
dataIndex : 'idNumber',
width :90,
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '信息标题',
dataIndex : 'info_head',
width : 120 
}
,{
header : '发布日期',
dataIndex : 'reas_date',
width :  80
}
,{
header : '发布用户',
dataIndex : 'tlr_no',
width : 100 
},
	{
		header : '信息类型',
		dataIndex : 'info_type',
		width : 100
	}
	,{
		header : '附件名称',
		dataIndex : 'info_name',
		width : 120,
		renderer : function(value, meta, record) {
			var tempString = '<div><a href="download.action?fileName=' + value + '">'+ value +'</a></div>';
			return tempString;
		}
	}
	,{
		header : '信息内容',
		dataIndex : 'info_body',
		width : 140 
	}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_info_mgmt();
			}
		},'-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_info_mgmtGrid, queryt_info_mgmtStore, "t_info_mgmt_delete.action", "idNumber", "删除信息");
			}
		},'-',{text:"导入发布信息", 
		    icon : "../images/icon/upload.png", 
		    handler : function(){
				data_upload();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler :   onItemClick
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_info_mgmtStore,
			emptyMsg : "没有记录"
		}]
	});
	
    function onItemClick(item){   
        var	url = 't_info_mgmt_ExportExcel.action?'
        		+'t_info_mgmt.info_head='
        		+ Ext.getCmp('select_info_head').getValue()
        		+'&t_info_mgmt.info_type='
        		+ Ext.getCmp('select_info_type').getValue()
        		+'&t_info_mgmt.reas_date='
        		+ new Date(Ext.getCmp('select_reas_date').getValue()).format(Date.patterns.SortableDateTime)
        		+'&t_info_mgmt.info_state='
        		+ Ext.getCmp('select_info_state').getValue();
        	window.open(url);
        }	

	
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_info_mgmtGrid',
		items : [selectUnitForm, queryt_info_mgmtGrid]
	});
	var divHeight = document.getElementById('t_info_mgmtGrid').offsetHeight;
	var divWidth = document.getElementById('t_info_mgmtGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_info_mgmtGrid.setWidth(showQueryPanel.getWidth());
	queryt_info_mgmtGrid.setHeight(320);
	
	

	
	addt_info_mgmtForm = new Ext.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		fileUpload: true,
		width : 650,
		height : 550, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '信息类型',
id : 'add_info_type',
width : 100,
xtype : 'combo',
store : info_typeStore,
valueField : 'id',
displayField : 'name',
allowBlank: false,
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_info_mgmt.info_type',
anchor : '90%'
}
]}
]}
,{
name : 't_info_mgmt.info_head',
xtype : 'textfield',
fieldLabel : '信息标题',
anchor : '95%',
allowBlank: false
}
,{
name : 't_info_mgmt.info_body',
xtype : 'textarea',
fieldLabel : '信息内容',
anchor : '95%',
height : 300,
allowBlank: false
},{
    xtype: 'textfield',
    fieldLabel: '附件存储路径',
    id:'addfile',
    name: 'file',
    inputType: 'file',
    anchor : '95%'
}
,{
id:'addfilename',
name : 't_info_mgmt.info_name',
xtype : 'field',
fieldLabel : '附件名称',
anchor : '95%'
}
],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				if(Ext.getCmp("addfile").getValue()!='' && Ext.getCmp("addfilename").getValue()==''){
					Ext.Msg.alert('友情提示', '存在附件时附件名称必录');
					return;
				}
				check(addt_info_mgmtForm, "t_info_mgmt_addNewInfo.action", queryt_info_mgmtStore, "添加信息");
				addt_info_mgmtWin.hide();	
				
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_info_mgmtWin.hide();
				addt_info_mgmtForm.form.reset();
			}
		}]

	});

	addt_info_mgmtWin = new Ext.Window({
		title : '添加信息',
		layout : 'fit',
		width : 665,
		height : 520,
		plain : true,
		closable : true,
		draggable :true,
		//maximizable : true,
		closeAction : 'hide',
		items : addt_info_mgmtForm
	});

	addt_info_mgmt = function() {
		addt_info_mgmtWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	

	
	updatet_info_mgmtReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_info_mgmt.idNumber',
mapping : 'idNumber'
}
,{
name : 't_info_mgmt.info_type',
mapping : 'info_type'
}
,{
name : 't_info_mgmt.info_head',
mapping : 'info_head'
}
,{
name : 't_info_mgmt.info_body',
mapping : 'info_body'
}
,{
name : 't_info_mgmt.info_path',
mapping : 'info_path'
}
,{
name : 't_info_mgmt.info_name',
mapping : 'info_name'
}
,{
name : 't_info_mgmt.reas_date',
mapping : 'reas_date'
}
,{
name : 't_info_mgmt.tlr_no',
mapping : 'tlr_no'
}
]
	);
		
	updatet_info_mgmtForm = new Ext.FormPanel({
		frame : true,
		waitMsgTarget : true,
		width : 650,
		height : 500, 
		fileUpload: true,
		reader : updatet_info_mgmtReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '信息编码',
id : 'uppdate_idNumber',
xtype : 'textfield',
readOnly : true,
style:'color:#C0C0C0;',
name : 't_info_mgmt.idNumber',
hiddenName : 't_info_mgmt.idNumber',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '信息类型',
id : 'uppdate_info_type',
width : 100,
xtype : 'combo',
store : info_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_info_mgmt.info_type',
anchor : '90%'
}
]}
]}
,{
name : 't_info_mgmt.info_head',
xtype : 'field',
fieldLabel : '信息标题',
anchor : '95%'
}
,{
name : 't_info_mgmt.info_body',
xtype : 'textarea',
fieldLabel : '信息内容',
height : 300,
anchor : '95%'
},{
    xtype: 'textfield',
    fieldLabel: '附件存储路径',
    name: 'updateLoadFile',
    inputType: 'file',
    anchor : '95%'
}
,{
name : 't_info_mgmt.info_name',
xtype : 'field',
fieldLabel : '附件名称',
anchor : '95%'
}
],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			handler : function() {
				check(updatet_info_mgmtForm, "t_info_mgmt_update.action", queryt_info_mgmtStore, "修改信息")
				updatet_info_mgmtWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_info_mgmtWin.hide();
				updatet_info_mgmtForm.form.reset();
			}
		}]
	});

	updatet_info_mgmtWin = new Ext.Window({
		layout : 'fit',
		width : 665,
		height : 530,
		plain : true,
		disabled : false,
		closable : true,
		draggable :true,
	//	maximizable : true,
		closeAction : 'hide',
		items : updatet_info_mgmtForm
	});

	update = function() {
		_record = queryt_info_mgmtGrid.getSelectionModel().getSelected();
		flag = queryt_info_mgmtGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_info_mgmtWin.show();
					
			updatet_info_mgmtForm.getForm().load({
				url : 't_info_mgmt_findById.action?t_info_mgmt.idNumber='+ _record.get('idNumber'),
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
	
	
	data_uploadForm = new Ext.form.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		fileUpload: true,
		width : 650,
		height : 120, 
		items : [{
		    xtype: 'textfield',
		    fieldLabel: '信息发布数据存储路径：',
		    name: 'file',
		    inputType: 'file',
		    anchor : '95%'
			}],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
			data_uploadForm.form.submit;
				submit(data_uploadForm, "data_upload.action?flag=T_info_mgmt", queryt_info_mgmtStore, "数据导入");
				data_uploadWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
			data_uploadWin.hide();
			data_uploadForm.form.reset();
			}
		}]

	});
	
	data_uploadWin = new Ext.Window({
		title : '信息发布数据导入',
		layout : 'form',
		width : 660,
		height : 150,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : data_uploadForm
	});
	
	data_upload = function() {
		data_uploadWin.show();
	};



	
	// 加载页面后默认焦点
	Ext.getCmp("select_info_head").focus(false, 1000);

	
 });
 
