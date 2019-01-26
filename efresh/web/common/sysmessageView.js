
var querysysmessageStore;			
var querysysmessageGrid;
var addsysmessage;
var addsysmessageForm;
var addsysmessageWin;
var updatesysmessage;
var updatesysmessageWin;
var updatesysmessageForm;
var updatesysmessageReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
//	haveRight('common/sysmessageView.jsp');
	 querysysmessageStore = new Ext.data.JsonStore({
		url : 'sysmessage_findAll.action',
		root : 'list',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
name : 'idNumber',
mapping : 'sysmessage.idNumber'
}
,{
name : 'msgtitle',
mapping : 'sysmessage.msgtitle'
}
,{
name : 'releasetime',
mapping : 'sysmessage.releasetime'
}
,{
name : 'msgtype',
mapping : 'sysmessage.msgtype'
},
{
name : 'msgcontent',
mapping : 's.msgcontent'
}
],
		autoLoad : false
		
	});
	

	
	
selectUnitForm = new Ext.form.FormPanel({
		labelAlign : 'right',
		frame : true,
		layout : 'form',
		items : [{
layout : 'form',
items : [
{
fieldLabel : '发布时间',
id : 'select_releasetime',
xtype : 'datefield',
name : 'sysmessage.releasetime',

width:150
},
{
	fieldLabel : '至',
	id : 'select_releasetime2',
	xtype : 'datefield',
	name : 'sysmessage.releasetime2',
	width:150
	}
,{
layout : 'column',
items : [{
items : []
},{
items : [{
		xtype : 'button',
		text : '重置',
		width : 100,
		style:'float:left;margin:0 5px;',
		iconCls : 'icon-reset',
		handler : function() {
			selectUnitForm.form.reset();
		}},{
xtype : 'button',
text : '查询',
width : 100,
style:'margin:0 5px',
iconCls : 'icon-select',
handler : function() {
	var begintime = new Date(Ext.getCmp('select_releasetime').getValue()).format(Date.patterns.ISO8601Long);
    var endtime = new Date(Ext.getCmp('select_releasetime2').getValue()).format(Date.patterns.ISO8601Long);
   // alert(endtime);
    querysysmessageStore.proxy = new Ext.data.HttpProxy({
url : 'sysmessage_findInfoByConditions.action?'
+'sysmessage.releasetimes='
+ begintime
+'&sysmessage.releasetimes2='
+endtime
});
	querysysmessageStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	

	

	querysysmessageStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var querysysmessageGrid = new Ext.grid.EditorGridPanel({
		store : querysysmessageStore,
		sm : sm,
		columns : [ sm, rowNum
,{
header : '标题',
dataIndex : 'msgtitle',
width : 120 
}
,{
  header : '公告内容',
  dataIndex : 'msgcontent',
  width : 220 
}		
,{
header : '发布时间',
dataIndex : 'releasetime',
width :200,
renderer:function(value){
	return new Date(value).format(Date.patterns.ISO8601Long)
	
}
},
{
	header : '操作',
	dataIndex : 'idNumber',
	width : 200,
	renderer : function(value, meta, record) {
		var tempString = '<a href="sysmessages_findById.action?sysmessage.idNumber='+value+'" class="btn1">查看</a>';
		return tempString;
		}
	}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 发布 ',
			iconCls:'icon-add',
			handler : function() {
				//addsysmessage();
				//alert('0')
				kidlink();
				CurentTime();
			}
		},/*'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',*/{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysysmessageGrid, querysysmessageStore, "sysmessage_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : querysysmessageStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'sysmessageGrid',
		items : [selectUnitForm, querysysmessageGrid]
	});
	var divHeight = document.getElementById('sysmessageGrid').offsetHeight;
	var divWidth = document.getElementById('sysmessageGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysysmessageGrid.setWidth(showQueryPanel.getWidth());
	querysysmessageGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addsysmessageForm = new Ext.FormPanel({
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
fieldLabel : '发布时间',
id : 'add_releasetime',
xtype : 'datetimefield',
value: new Date(),
hideTrigger:true,
name : 'sysmessage.releasetime',
anchor : '95%'
},{
	fieldLabel : '切换为发布图文消息',
	xtype : 'textfield',
	}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '标题',
id : 'add_msgtitle',
xtype : 'textfield',
name : 'sysmessage.msgtitle',
width : '80%'
}
,{
fieldLabel : '公告内容',
id : 'add_msgcontent',
xtype : 'textarea',
name : 'sysmessage.msgtype',
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
				check(addsysmessageForm, "sysmessage_addNewInfo.action", querysysmessageStore, "添加信息")
				addsysmessageWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addsysmessageWin.hide();
				addsysmessageForm.form.reset();
			}
		}]

	});

	addsysmessageWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 340,
		plain : true,
		closable : false,
		items : addsysmessageForm
	});

	addsysmessage = function() {
		addsysmessageWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	kidlink=function(){
		window.location.href="http://localhost:8080/efresh/jsp/esys/issued.jsp";	
	}
	
	updatesysmessageReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'sysmessage.idNumber',
mapping : 'idNumber'
}
,{
name : 'sysmessage.msgtitle',
mapping : 'msgtitle'
}
,{
name : 'sysmessage.releasetime',
mapping : 'releasetime'
}
,{
name : 'sysmessage.msgtype',
mapping : 'msgtype'
}
,{
name : 'sysmessage.ts',
mapping : 'ts'
}
,{
name : 'sysmessage.dr',
mapping : 'dr'
}
,{
name : 'sysmessage.back1',
mapping : 'back1'
}
,{
name : 'sysmessage.back2',
mapping : 'back2'
}
,{
name : 'sysmessage.back3',
mapping : 'back3'
}
]
	);
		
	updatesysmessageForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatesysmessageReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '系统管理-系统消息表主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'sysmessage.idNumber',
width : '80%'
}
,{
fieldLabel : '发布时间',
id : 'uppdate_releasetime',
xtype : 'datetimefield',
name : 'sysmessage.releasetime',
anchor : '95%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'sysmessage.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'sysmessage.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'numberfield',
name : 'sysmessage.back3',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '标题',
id : 'uppdate_msgtitle',
xtype : 'textfield',
name : 'sysmessage.msgtitle',
width : '80%'
}
,{
fieldLabel : '公告类型',
id : 'uppdate_msgtype',
xtype : 'textfield',
name : 'sysmessage.msgtype',
width : '80%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'sysmessage.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'sysmessage.back2',
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
				check(updatesysmessageForm, "sysmessage_update.action", querysysmessageStore, "修改信息")
				updatesysmessageWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesysmessageWin.hide();
				updatesysmessageForm.form.reset();
			}
		}]
	});

	updatesysmessageWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 340,
		plain : true,
		closable : false,
		items : updatesysmessageForm
	});

	update = function() {
		_record = querysysmessageGrid.getSelectionModel().getSelected();
		flag = querysysmessageGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesysmessageWin.show();
					
			updatesysmessageForm.getForm().load({
				url : 'sysmessage_findById.action?sysmessage.idNumber='+ _record.get('idNumber'),
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
	//Ext.getCmp('add_releasetime').setReadOnly(true); 
	//Ext.getCmp("select_idNumber").focus(false, 1000);

 });
 Date.patterns = {
		 ISO8601Long:"Y-m-d H:i:s",
		 ISO8601Short:"Y-m-d",
		 ShortDate: "n/j/Y",
		 LongDate: "l, F d, Y",
		 FullDateTime: "l, F d, Y g:i:s A",
		 MonthDay: "F d",
		 ShortTime: "g:i A",
		 LongTime: "g:i:s A",
		 SortableDateTime: "Y-m-d\\TH:i:s",
		 UniversalSortableDateTime: "Y-m-d H:i:sO",
		 YearMonth: "F, Y"
 }
 function CurentTime()
 { 
     var now = new Date(); 
     var year = now.getFullYear();       //年
     var month = now.getMonth() + 1;     //月
     var day = now.getDate();            //日
     var hh = now.getHours();            //时
     var mm = now.getMinutes();          //分
     var clock = year + "-";   
     if(month < 10)
         clock += "0"; 
     clock += month + "-";
     if(day < 10)
         clock += "0";
        
     clock += day + " ";
    
     if(hh < 10)
         clock += "0";
        
     clock += hh + ":";
     if (mm < 10) clock += '0'; 
     clock += mm; 
     return(clock); 
 } 
 Ext.override(Ext.menu.DateMenu,{  
     render : function(){  
        Ext.menu.DateMenu.superclass.render.call(this);  
        if(Ext.isGecko|| Ext.isSafari||Ext.isChrome){  
         this.picker.el.dom.childNodes[0].style.width = '280px';  
         this.picker.el.dom.style.width = '280px';  
         }  
     }  
 }); 