
var queryzlsjsjbStore;			
var queryzlsjsjbGrid;
var addorUpadatezlsjsjb;
var showQueryPanel;
var zlsjsjbRecord;
var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	var tabs =new Ext.Panel({  
       region:'center',
       closable:true,
       defaults:{autoScroll:true}, 
       layout:'fit',
	   title:'用户类表', 
	   items:[{
	         id:'index1',
	         html:"<iframe scrolling='auto' frameborder='0' width='100%' height='100%' src='http://localhost:8080/hospital/createCode/zlsjsjb_901_andorUpdate.jsp?zlh=901&flag=1'> </iframe>"
	  }],
	  	enableTabScroll:true  
    });

	zlsjsjbRecord = Ext.data.Record.create([
        {name: 'id', type: 'string'},{name: 'department', type: 'string'},{name: 'applicant', type: 'string'}
         ]);
	var addt_available_noWin = new Ext.Window({
		title : '添加信息',
		width : 500,
		plain : true,
		layout : 'fit',
		height : 600,
		closable : true,
		draggable :true,
		closeAction : 'hide',
		items : tabs
	});

	addorUpadateZlsjdyb = function(flag) {
		if(flag==1){
			addt_available_noWin.show();
		}else{
			_record = queryzlsjsjbGrid.getSelectionModel().getSelected();
			selects = queryzlsjsjbGrid.getSelectionModel().getSelections();
			if (selects.length == 1) {
			var update_tabs =new Ext.Panel({  
			       region:'center',
			       closable:true,
			       defaults:{autoScroll:true}, 
			       layout:'fit',
				   title:'用户类表', 
				   items:[{
				         id:'index1',
				         html:"<iframe scrolling='auto' frameborder='0' width='100%' height='100%' src='http://localhost:8080/hospital/createCode/zlsjsjb_901_andorUpdate.jsp?zlh=901&flag=2&id="+_record.get('id')+"'> </iframe>"
				  }],
				  	enableTabScroll:true  
			    });
			var updatet_available_noWin = new Ext.Window({
				title : '添加信息',
				width : 500,
				plain : true,
				layout : 'fit',
				height : 600,
				closable : true,
				draggable :true,
				closeAction : 'hide',
				items : update_tabs
			});
			updatet_available_noWin.show();
		}
	}};
	queryzlsjsjbStore = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({url: '/hospital/createCode/list.jsp?zlh=901'}),
        reader: new Ext.data.JsonReader({
            totalProperty: 'totalCount',
            root: 'result'
        },zlsjsjbRecord),
        remoteSort: true
    });
	queryzlsjsjbStore.load({params:{start:0,limit:15}});
	
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
fieldLabel : '部门',
id : 'select_content_department',
xtype : 'textfield',
name : 'zlsjsjb.department',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '用印申请人',
id : 'select_content_applicant',
xtype : 'textfield',
name : 'zlsjsjb.applicant',
width : '80%'
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
queryzlsjsjbStore.proxy = new Ext.data.HttpProxy({
url : '/hospital/createCode/list.jsp?zlh=901'
+'&_priv_content_department='
+ Ext.getCmp('select_content_department').getValue()
+'&_priv_content_applicant='
+ Ext.getCmp('select_content_applicant').getValue()
});
	queryzlsjsjbStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]
	});;	
	
	

	queryzlsjsjbStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryzlsjsjbGrid = new Ext.grid.GridPanel({
		store : queryzlsjsjbStore,
		sm : sm,
		columns : [ sm, rowNum,{
header : '主键',
dataIndex : 'id',
width : 120, 
 renderer : function(value, meta, record) {
	var tempString = '<div><a href=javascript:addorUpadateZlsjdyb(2)><font color=red>'+ value +'</font></a></div>';
	return tempString;
	}
},
,{
header : '部门',
dataIndex : 'department',
width : 120 
}
,{
header : '用印申请人',
dataIndex : 'applicant',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
			addorUpadateZlsjdyb(1);
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryzlsjsjbGrid, queryzlsjsjbStore, "ZlsjsjbAction_deleteZlsjsjb.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryzlsjsjbStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'zlsjsjbGrid',
		items : [selectUnitForm, queryzlsjsjbGrid]
	});
	var divHeight = document.getElementById('zlsjsjbGrid').offsetHeight;
	var divWidth = document.getElementById('zlsjsjbGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryzlsjsjbGrid.setWidth(showQueryPanel.getWidth());
	queryzlsjsjbGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
 });
 
