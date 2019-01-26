
var queryt_excel_infoStore;			
var queryt_excel_infoGrid;
var addt_excel_info;
var addt_excel_infoForm;
var addt_excel_infoWin;
var updatet_excel_info;
var updatet_excel_infoWin;
var updatet_excel_infoForm;
var updatet_excel_infoReader;
var showQueryPanel;
var queryt_comp_infoStore;
var queryt_product_infoStore;
var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	
	
	
	
	
	
	
	
	
	haveRight('common/t_excel_infoView.jsp');
	
	

	
	 queryt_comp_infoStore=new Ext.data.Store({
		 proxy:new Ext.data.HttpProxy({
		 url:'t_comp_info_findAllByPro.action'
		 }),
		 reader:new Ext.data.JsonReader({
		 root:'t_comp_infoList',
		 id:'id'
		 },[
		 {name:'idNumber',mapping:'idNumber'},
		 {name:'comp_abbr_name',mapping:'comp_abbr_name'}
		 ])
		 });
	 
	 queryt_comp_infoStore.load();
	 queryt_product_infoStore=new Ext.data.Store({
		 proxy:new Ext.data.HttpProxy({
		 url:'t_product_info_findAllByComp.action?flag=1'
		 }),
		 reader:new Ext.data.JsonReader({
		 root:'t_product_infoList',
		 id:'id'
		 },[
		 {name:'idNumber',mapping:'idNumber'},
		 {name:'comp_no',mapping:'comp_no'},
		 {name:'product_name',mapping:'product_name'}
		 ])
		 });
	
	 queryt_product_infoStore.load();
	
	
	
	
	
	 queryt_excel_infoStore = new Ext.data.JsonStore({
		url : 't_excel_info_findAll.action',
		root : 't_excel_infoList',
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
name : 'product_no',
mapping : 'product_no'
},
{
	name : 'sheetName',
	mapping : 'sheetName'
},{
name : 'para_name',
mapping : 'para_name'
}
,{
name : 'y_site',
mapping : 'y_site'
}
,{
name : 'x_site',
mapping : 'x_site'
}
,{
name : 'x_tab',
mapping : 'x_tab'
}
,{
name : 'type',
mapping : 'type'
}
,{
name : 'exc_value',
mapping : 'exc_value'
}
,{
	name : 'paraSite',
	mapping : 'paraSite'
}
,{
name : 'back1',
mapping : 'back1'
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
	fieldLabel:'公司简称',
	xtype:'combo',
	store:queryt_comp_infoStore,
	valueField:"idNumber",
	displayField:"comp_abbr_name",
	mode:'local',
	forceSelection:true,//必须选择一项
	emptyText:'请选择公司...',//默认值
	hiddenName:'t_excel_info.comp_no',//hiddenName才是提交到后台的input的name
	editable:false,//不允许输入
	triggerAction:'all',
    id : 'select_comp_no',  
    name: 't_excel_info.comp_no',      
        width:400,      
        listeners:{        
            select :function(combo, record, index){  
					var comp_no=record.get('idNumber');
	                var cityField = selectUnitForm.form.findField("select_product_no");  
	                queryt_product_infoStore.filter('comp_no', comp_no);
	                
	                var newStore = new Ext.data.SimpleStore({fields: ['idNumber', 'product_name']});   
	                newStore.add(queryt_product_infoStore.getRange()); 
	                cityField.store = newStore; 
	                if(cityField.view){   
	                    cityField.view.setStore(newStore);
	                }
    		}      
        }      
    }

]},{
columnWidth: .5,
layout : 'form',
items : [
{      
        fieldLabel:'产品名称',      
        xtype:'combo',      
        store:queryt_product_infoStore,      
        valueField :"idNumber",      
        displayField:"product_name",      
        mode:'local',      
        forceSelection:true,   
        emptyText:'请选择产品...',   
        hiddenName:'t_excel_info.product_no',   
        editable:false,   
        triggerAction:'all',   
        id:'select_product_no',      
        name:'t_excel_info.product_no',      
        width:400
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
		queryt_excel_infoStore.proxy = new Ext.data.HttpProxy({
		url : 't_excel_info_findInfoByConditions.action?'
		+'t_excel_info.product_no='
		+ Ext.getCmp('select_product_no').getValue()
		
		});
			queryt_excel_infoStore.load({
		params : {
		start : 0,
		limit : Ext.getCmp('pageBar').pageSize
		}});
		}}]}
		]}]}]

		         
	});;
	
	
	

	queryt_excel_infoStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_excel_infoGrid = new Ext.grid.GridPanel({
		store : queryt_excel_infoStore,
		sm : sm,
		columns : [ sm, rowNum,{
		header : '主键',
		dataIndex : 'idNumber',
		width : 120, 
		renderer : function(value, meta, record) {
		var tempString = '<div><a href=javascript:update()><font color=red>'+ value +'</font></a></div>';
		return tempString;
		}}
		,{
		header : '产品名称',
		dataIndex : 'para_name',
		width : 240 
		}
		,{
		header : '坐标',
		dataIndex : 'paraSite',
		width : 80 
		}
		,{
		header : '第几格',
		dataIndex : 'x_tab',
		width : 80 
		}
		,{
		header : '字段类型',
		dataIndex : 'type',
		width : 120 
		}
		,{
		header : '字段数值',
		dataIndex : 'exc_value',
		width : 180 
		},{
			header : 'sheet名',
			dataIndex : 'sheetName',
			width : 180 
		},{
		header : '备注说明',
		dataIndex : 'back1',
		width : 150 
		}
		],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_excel_info();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : ExcelExport
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_excel_infoGrid, queryt_excel_infoStore, "t_excel_info_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_excel_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_excel_infoGrid',
		items : [selectUnitForm, queryt_excel_infoGrid]
	});
	var divHeight = document.getElementById('t_excel_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_excel_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight+100);
	showQueryPanel.setWidth(divWidth);
	queryt_excel_infoGrid.setWidth(showQueryPanel.getWidth()-20);
	queryt_excel_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight()-30);
	
	

	
	addt_excel_infoForm = new Ext.FormPanel({
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
		fieldLabel : '产品名称',
		id : 'add_Para_name',
		xtype : 'textfield',
		name : 't_excel_info.para_name',
		width : '80%'
		},{
			fieldLabel : 'sheet名',
			id : 'add_sheetName',
			xtype : 'textfield',
			name : 't_excel_info.sheetName',
			width : '80%'
		}
		,{
		fieldLabel : '字段类型',
		id : 'add_type',
		xtype : 'textfield',
		name : 't_excel_info.type',
		width : '80%'
		}
		,{
		fieldLabel : '备注说明',
		id : 'add_back1',
		xtype : 'textfield',
		name : 't_excel_info.back1',
		width : '80%'
		}
		]
		},{
		columnWidth: .5,
		layout : 'form',
		items : [
		{
		fieldLabel : '产品编号',
		id : 'add_product_no',
		xtype : 'textfield',
		name : 't_excel_info.product_no',
		width : '80%'
		}
		,{
		fieldLabel : '参数坐标',
		id : 'add_paraSite',
		xtype : 'textfield',
		name : 't_excel_info.paraSite',
		width : '80%'
		}
		,{
		fieldLabel : '第几格',
		id : 'add_x_tab',
		xtype : 'textfield',
		name : 't_excel_info.x_tab',
		width : '80%'
		}
		,{
		fieldLabel : '字段数值',
		id : 'add_exc_value',
		xtype : 'textfield',
		name : 't_excel_info.exc_value',
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
				check(addt_excel_infoForm, "t_excel_info_addNewInfo.action", queryt_excel_infoStore, "添加信息")
				addt_excel_infoWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_excel_infoWin.hide();
				addt_excel_infoForm.form.reset();
			}
		}]

	});

	addt_excel_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addt_excel_infoForm
	});

	addt_excel_info = function() {
		addt_excel_infoWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatet_excel_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
		name : 't_excel_info.idNumber',
		mapping : 'idNumber'
		},{
			name : 't_excel_info.sheetName',
		mapping : 'sheetName'
		},{
		name : 't_excel_info.product_no',
		mapping : 'product_no'
		}
		,{
		name : 't_excel_info.para_name',
		mapping : 'para_name'
		}
		,{
		name : 't_excel_info.paraSite',
		mapping : 'paraSite'
		}
		,{
		name : 't_excel_info.x_tab',
		mapping : 'x_tab'
		}
		,{
		name : 't_excel_info.type',
		mapping : 'type'
		}
		,{
		name : 't_excel_info.exc_value',
		mapping : 'exc_value'
		}
		,{
		name : 't_excel_info.back1',
		mapping : 'back1'
		}
		]
			);
		
	updatet_excel_infoForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatet_excel_infoReader,
		items : [{
		layout : 'column',
		items : [
		{
		columnWidth: .5,
		layout : 'form',
		items : [
		{
		fieldLabel : '主键',
		id : 'uppdate_idNumber',
		xtype : 'textfield',
		name : 't_excel_info.idNumber',
		width : '80%',
		readOnly : true,
		style:'color:#C0C0C0;'
		}
		,{
		fieldLabel : '产品名称',
		id : 'uppdate_para_name',
		xtype : 'textfield',
		name : 't_excel_info.para_name',
		width : '80%'
		},{
			fieldLabel : 'sheet名',
			id : 'uppdate_sheetName',
			xtype : 'textfield',
			name : 't_excel_info.sheetName',
			width : '80%'
		}
		,{
		fieldLabel : '字段类型',
		id : 'uppdate_type',
		xtype : 'textfield',
		name : 't_excel_info.type',
		width : '80%'
		},{
			fieldLabel : '备注说明',
			id : 'uppdate_back1',
			xtype : 'textfield',
			name : 't_excel_info.back1',
			width : '80%'
		}]
		},{
		columnWidth: .5,
		layout : 'form',
		items : [
		{
		fieldLabel : '产品编号',
		id : 'uppdate_product_no',
		xtype : 'textfield',
		name : 't_excel_info.product_no',
		width : '80%'
		}
		,{
		fieldLabel : '参数坐标',
		id : 'uppdate_paraSite',
		xtype : 'textfield',
		name : 't_excel_info.paraSite',
		width : '80%'
		}
		,{
		fieldLabel : '第几格',
		id : 'uppdate_x_tab',
		xtype : 'textfield',
		name : 't_excel_info.x_tab',
		width : '80%'
		}
		,{
		fieldLabel : '字段数值',
		id : 'uppdate_exc_value',
		xtype : 'textfield',
		name : 't_excel_info.exc_value',
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
				check(updatet_excel_infoForm, "t_excel_info_update.action", queryt_excel_infoStore, "修改信息")
				updatet_excel_infoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_excel_infoWin.hide();
				updatet_excel_infoForm.form.reset();
			}
		}]
	});

	updatet_excel_infoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatet_excel_infoForm
	});

	update = function() {
		_record = queryt_excel_infoGrid.getSelectionModel().getSelected();
		flag = queryt_excel_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_excel_infoWin.show();
					
			updatet_excel_infoForm.getForm().load({
				url : 't_excel_info_findById.action?t_excel_info.idNumber='+ _record.get('idNumber'),
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
//	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
