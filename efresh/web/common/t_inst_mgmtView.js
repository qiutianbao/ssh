
var queryt_inst_mgmtStore;			
var queryt_inst_mgmtGrid;
var addt_inst_mgmt;
var addt_inst_mgmtForm;
var addt_inst_mgmtWin;
var updatet_inst_mgmt;
var updatet_inst_mgmtWin;
var updatet_inst_mgmtForm;
var updatet_inst_mgmtReader;
var showQueryPanel;
var data_upload ;
var data_uploadForm;
var selectUnitForm;
var data_uploadWin;
 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_inst_mgmtView.jsp');
	 queryt_inst_mgmtStore = new Ext.data.JsonStore({
		url : 't_inst_mgmt_findAll.action',
		root : 't_inst_mgmtList',
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
name : 'inst_type',
mapping : 'inst_type'
}
,{
name : 'inst_name',
mapping : 'inst_name'
}
,{
name : 'up_inst_no',
mapping : 'up_inst_no'
}
,{
name : 'address',
mapping : 'address'
}
,{
name : 'phone',
mapping : 'phone'
}
,{
name : 'contact_psn',
mapping : 'contact_psn'
}
,{
name : 'inst_busn_stat',
mapping : 'inst_busn_stat'
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
columnWidth: .3,
layout : 'form',
items : [
{
fieldLabel : '机构码',
id : 'select_idNumber',
xtype : 'textfield',
name : 't_inst_mgmt.idNumber',
width : '90',
maxLength : 9
},{
	fieldLabel : '机构状态',
	id : 'select_inst_busn_stat',
	width : 90,
	xtype : 'combo',
	store : inst_busn_statStore,
	valueField : 'id',
	displayField : 'name',
	mode : 'local',
	editable : false,
	triggerAction : 'all',
	hiddenName : 't_inst_mgmt.inst_busn_stat'
	}]},{columnWidth: .3,
		layout : 'form',
		items : [
		{
			fieldLabel : '机构名称',
			id : 'select_inst_name',
			xtype : 'textfield',
			name : 't_inst_mgmt.inst_name',
			width : '150'
		},{
			fieldLabel : '上级机构',
			id : 'select_up_inst_no',
			xtype : 'textfield',
			name : 't_inst_mgmt.up_inst_no',
			width : '150'
		}]},{
columnWidth: .4,
layout : 'form',
items : [
{
fieldLabel : '机构种类',
id : 'select_inst_type',
width : 100,
xtype : 'combo',
store : inst_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_inst_mgmt.inst_type'
},{
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
queryt_inst_mgmtStore.proxy = new Ext.data.HttpProxy({
url : 't_inst_mgmt_findInfoByConditions.action?'
+'t_inst_mgmt.idNumber='
+ Ext.getCmp('select_idNumber').getValue()
+'&t_inst_mgmt.inst_type='
+ Ext.getCmp('select_inst_type').getValue()
+'&t_inst_mgmt.inst_name='
+ Ext.getCmp('select_inst_name').getValue()
+'&t_inst_mgmt.up_inst_no='
+ Ext.getCmp('select_up_inst_no').getValue()
+'&t_inst_mgmt.inst_busn_stat='
+ Ext.getCmp('select_inst_busn_stat').getValue()
});
	queryt_inst_mgmtStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize
}});
}}]}
]}]}]

		         
	});;
	
	
	

	queryt_inst_mgmtStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_inst_mgmtGrid = new Ext.grid.GridPanel({
		store : queryt_inst_mgmtStore,
		sm : sm,
		stripeRows : true,
		columns : [ sm, rowNum,{
header : '机构码',
dataIndex : 'idNumber',
width : 120, 
renderer : function(value, meta, record) {
var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
return tempString;
}}
,{
header : '机构种类',
dataIndex : 'inst_type',
width : 120 
}
,{
header : '机构名称',
dataIndex : 'inst_name',
width : 120 
}
,{
header : '所属上级机构',
dataIndex : 'up_inst_no',
width : 120 
}
,{
header : '地址',
dataIndex : 'address',
width : 120 
}
,{
header : '电话',
dataIndex : 'phone',
width : 120 
}
,{
header : '联系人',
dataIndex : 'contact_psn',
width : 120 
}
,{
header : '机构状态',
dataIndex : 'inst_busn_stat',
width : 120 
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_inst_mgmt();
			}
		},'-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_inst_mgmtGrid, queryt_inst_mgmtStore, "t_inst_mgmt_delete.action", "idNumber", "删除信息");
			}
		},'-',{text:"导入网点信息", 
		    icon : "../images/icon/upload.png", 
			width : 20,
			height : 25,
		    handler : function(){
				brno_upload();
			}
		},'-',{text:"导出Excel", 
		    icon : "../images/icon/upload.png", 
		    handler : function(){
				ExcelExport(queryt_inst_mgmtGrid,'网点管理');
			}
		},'-',{text:"导入公司网点对照信息", 
		    icon : "../images/icon/upload.png", 
			width : 20,
			height : 25,
		    handler : function(){
				data_upload();
			}
		},'-',{text:"公司分配", 
		    icon : "../images/icon/upload.png", 
		    handler : function(){
				assignComp();
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_inst_mgmtStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_inst_mgmtGrid',
		items : [selectUnitForm, queryt_inst_mgmtGrid]
	});
	var divHeight = document.getElementById('t_inst_mgmtGrid').offsetHeight;
	var divWidth = document.getElementById('t_inst_mgmtGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_inst_mgmtGrid.setWidth(showQueryPanel.getWidth());
	queryt_inst_mgmtGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addt_inst_mgmtForm = new Ext.FormPanel({
		frame : true,
		waitMsgTarget : true,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构码',
id : 'add_idNumber',
xtype : 'textfield',
name : 't_inst_mgmt.idNumber',
width : '80%'
}
,{
fieldLabel : '机构名称',
id : 'add_inst_name',
xtype : 'textfield',
name : 't_inst_mgmt.inst_name',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构种类',
id : 'add_inst_type',
width : 100,
xtype : 'combo',
store : inst_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_inst_mgmt.inst_type',
anchor : '90%'
}
,{
fieldLabel : '所属上级机构',
id : 'add_up_inst_no',
xtype : 'textfield',
name : 't_inst_mgmt.up_inst_no',
width : '80%'
}
]}
]}
,{
name : 't_inst_mgmt.address',
xtype : 'field',
fieldLabel : '地址',
anchor : '95%'
}
,{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '电话',
id : 'add_phone',
xtype : 'textfield',
name : 't_inst_mgmt.phone',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '联系人',
id : 'add_contact_psn',
xtype : 'textfield',
name : 't_inst_mgmt.contact_psn',
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
				check(addt_inst_mgmtForm, "t_inst_mgmt_addNewInfo.action", queryt_inst_mgmtStore, "添加信息")
				addt_inst_mgmtWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addt_inst_mgmtWin.hide();
				addt_inst_mgmtForm.form.reset();
			}
		}]

	});

	addt_inst_mgmtWin = new Ext.Window({
		title : '添加信息',
		layout : 'fit',
		width : 665,
		height : 250,
		plain : true,
		closable : true,
		draggable :true,
		//maximizable : true,
		closeAction : 'hide',
		items : addt_inst_mgmtForm
	});

	addt_inst_mgmt = function() {
		addt_inst_mgmtWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updatet_inst_mgmtReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_inst_mgmt.idNumber',
mapping : 'idNumber'
}
,{
name : 't_inst_mgmt.inst_type',
mapping : 'inst_type'
}
,{
name : 't_inst_mgmt.inst_name',
mapping : 'inst_name'
}
,{
name : 't_inst_mgmt.up_inst_no',
mapping : 'up_inst_no'
}
,{
name : 't_inst_mgmt.address',
mapping : 'address'
}
,{
name : 't_inst_mgmt.phone',
mapping : 'phone'
}
,{
name : 't_inst_mgmt.contact_psn',
mapping : 'contact_psn'
}
,{
name : 't_inst_mgmt.inst_busn_stat',
mapping : 'inst_busn_stat'
}
]
	);
		
	updatet_inst_mgmtForm = new Ext.FormPanel({
		frame : true,
		waitMsgTarget : true,
		reader : updatet_inst_mgmtReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构码',
id : 'uppdate_idNumber',
xtype : 'textfield',
name : 't_inst_mgmt.idNumber',
width : '80%'
}
,{
fieldLabel : '机构名称',
id : 'uppdate_inst_name',
xtype : 'textfield',
name : 't_inst_mgmt.inst_name',
width : '80%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '机构种类',
id : 'uppdate_inst_type',
width : 100,
xtype : 'combo',
store : inst_typeStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_inst_mgmt.inst_type',
pageSize : 5,
anchor : '90%'
}
,{
fieldLabel : '所属上级机构',
id : 'uppdate_up_inst_no',
xtype : 'textfield',
name : 't_inst_mgmt.up_inst_no',
width : '80%'
}
]}
]}
,{
name : 't_inst_mgmt.address',
xtype : 'field',
fieldLabel : '地址',
anchor : '95%'
}
,{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '电话',
id : 'uppdate_phone',
xtype : 'textfield',
name : 't_inst_mgmt.phone',
width : '80%'
}
,{
fieldLabel : '机构状态',
id : 'uppdate_inst_busn_stat',
width : 100,
xtype : 'combo',
store : inst_busn_statStore,
valueField : 'id',
displayField : 'name',
mode : 'local',
editable : false,
triggerAction : 'all',
hiddenName : 't_inst_mgmt.inst_busn_stat',
anchor : '90%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '联系人',
id : 'uppdate_contact_psn',
xtype : 'textfield',
name : 't_inst_mgmt.contact_psn',
width : '80%'
}
]
}
]}
],
		height : 250,
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatet_inst_mgmtForm, "t_inst_mgmt_update.action", queryt_inst_mgmtStore, "修改信息")
				updatet_inst_mgmtWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatet_inst_mgmtWin.hide();
				updatet_inst_mgmtForm.form.reset();
			}
		}]
	});

	updatet_inst_mgmtWin = new Ext.Window({
		title : '请输入您要修改的信息',
		layout : 'fit',
		width : 665,
		height : 250,
		plain : true,
		closable : true,
		draggable :true,
		//maximizable : true,
		closeAction : 'hide',
		items : updatet_inst_mgmtForm
	});

	update = function() {
		_record = queryt_inst_mgmtGrid.getSelectionModel().getSelected();
		flag = queryt_inst_mgmtGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_inst_mgmtWin.show();
					
			updatet_inst_mgmtForm.getForm().load({
				url : 't_inst_mgmt_findById.action?t_inst_mgmt.idNumber='+ _record.get('idNumber'),
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
		labelWidth : 150,
		labelAlign : 'right',
		fileUpload: true,
		width : 700,
		height : 150, 
		items : [{},{
		    xtype: 'textfield',
		    fieldLabel: '附件存储路径',
		    name: 'file',
		    inputType: 'file',
		    anchor : '90%'
			}],
		buttons : [{
			text : '导入数据',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				submit(data_uploadForm, "compAndBrno_upload.action?flag=t_tlr_mgmt", queryt_inst_mgmtStore, "数据导入");
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
			title : '数据导入',
			layout : 'form',
			width : 750,
			height : 180,
			plain : true,
			closable : true,
			closeAction : 'hide',
			items : data_uploadForm
		});
	data_upload = function() {
			 alert(12312);
			data_uploadWin.show();
		};
		
		

		
		
		
		
	var compStore = new Ext.data.JsonStore({
		root : 'compList',
		fields : ['idNumber','comp_abbr_name']
	});
	// 创建用于展示的grid
	var sm1 = new Ext.grid.CheckboxSelectionModel();
	var firstGrid = new Ext.grid.GridPanel({
				ddGroup : 'secondGridDDGroup',
				enableDragDrop : true,
				stripeRows : true,
				store : compStore,
				sm:sm1,
				title : '可分配公司',
				id : 'QueryGrid',
				columns : [sm1,{
							header : '公司ID',
							dataIndex : 'idNumber',
							sortable : true,
							width : 100
						}, {
							header : '公司名称',
							dataIndex : 'comp_abbr_name',
							sortable : true,
							width : 100
						}]
			});
	var secondGridStore = new Ext.data.JsonStore({
			root : 'compList',
			fields : ['idNumber','comp_abbr_name']
	});
	var sm2 = new Ext.grid.CheckboxSelectionModel();		
	var secondGrid = new Ext.grid.GridPanel({
				ddGroup : 'firstGridDDGroup',
				enableDragDrop : true,
				stripeRows : true,
				sm:sm2,
				store : secondGridStore,
				id : 'QueryGrid1',
				title : '已分配角色',
				columns : [ sm2,{
					header : '公司ID',
					dataIndex : 'idNumber',
					sortable : true,
					width : 100
				}, {
					header : '公司名称',
					dataIndex : 'comp_abbr_name',
					sortable : true,
					width : 100
				}]
			
			});
	var displayPanel = new Ext.Panel({
				width : 580,
				height : 420,
				layout : 'hbox',
				defaults : {
					flex : 1
				}, 
				layoutConfig : {
					align : 'stretch'
				},
				items : [firstGrid, secondGrid]
			});
	
	// 分配角色操作
	var assignComp = function() {
		_record = queryt_inst_mgmtGrid.getSelectionModel().getSelected();
		flag = queryt_inst_mgmtGrid.getSelectionModel().getSelections();
		
		if(flag.length == 1 )
		{
			var idNumber = _record.get('idNumber');
			winTitle = "机构["+_record.get('inst_name')+"]分配公司";
			compStore.proxy = new Ext.data.HttpProxy({
						    url: 't_inst_mgmt_findNoRrightComp.action?t_inst_mgmt.idNumber='+idNumber 
						});
			compStore.load();
			secondGridStore.proxy = new Ext.data.HttpProxy({
						    url: 't_inst_mgmt_findRrightComp.action?t_inst_mgmt.idNumber='+idNumber 
						});
			secondGridStore.load();
			updateWinShow(winTitle,idNumber);
		}
		else Ext.Msg.alert('提示', '请选择一个网点分配公司!');
	};
	var win;
	// 创建修改窗口
	var updateWinShow = function(winTitle,idNumber) {
		
		if (win!=null) {
			win.show();
			win.idNumber = idNumber;
			compStore.proxy = new Ext.data.HttpProxy({
						    url: 't_inst_mgmt_findNoRrightComp.action?t_inst_mgmt.idNumber='+idNumber // see options parameter for Ext.Ajax.request
						});
			compStore.load();
			win.setTitle(winTitle);
			secondGridStore.proxy = new Ext.data.HttpProxy({
							
						    url: 't_inst_mgmt_findRrightComp.action?t_inst_mgmt.idNumber='+idNumber // see options parameter for Ext.Ajax.request
						});
			secondGridStore.load();
		}else{
		win = new Ext.Window({
					title : winTitle,
					layout : 'form',
					width : 600,
					height : 450,
					plain : true,
					closable : true,
					closeAction:'hide',
					renderTo : Ext.getBody(),
					items:displayPanel,
					idNumber:idNumber
				});
		displayPanel.renderTo=displayPanel;
		var firstGridDropTargetEl = firstGrid.getView().scroller.dom;
			var firstGridDropTarget = new Ext.dd.DropTarget(
					firstGridDropTargetEl, {
						ddGroup : 'firstGridDDGroup',
						notifyDrop : function(ddSource, e, data) {
							var records = ddSource.dragData.selections;
							var delData = '';
							
							for(var i = 0;i < records.length;i++)
							{
								var r = records[i];//选中的记录
								var tag =compStore.findBy(function(record,id){
									if(record.get('idNumber')==r.get('idNumber')){
									return true;
								}
								})  //判断是否已经存在
								if(tag==-1){
									ddSource.grid.store.remove(r);
									firstGrid.store.add(r);
								}else
								{
									ddSource.grid.store.remove(r);
								}
								if(delData.length==0)
									{
										delData = r.get('idNumber');
									}else
									{
										delData = delData + ','+r.get('idNumber');
									}
							}
							Ext.Ajax.request({
										url : "t_comp_mgmt_del.action?instId="+win.idNumber+"&compId="+delData,
										params : {
											delData : delData
										},
										success : function(response, options) {
											var obj = Ext.util.JSON.decode(response.responseText);
											if(obj.success == false){
												Ext.Msg.alert('提示', '删除角色失败');
											}else{
												Ext.Msg.alert('提示', '删除角色成功');
											}
										}
									});
							return true
						}
					});





			// This will make sure we only drop to the view scroller element
			var secondGridDropTargetEl = secondGrid.getView().scroller.dom;
			var secondGridDropTarget = new Ext.dd.DropTarget(
					secondGridDropTargetEl, {
						ddGroup : 'secondGridDDGroup',
						notifyDrop : function(ddSource, e, data) {
							var records = ddSource.dragData.selections;
							var addData = '';
							for(var i = 0;i < records.length;i++)
							{
								var r = records[i];
								
								var tag =secondGridStore.findBy(function(record,id){
									if(record.get('idNumber')==r.get('idNumber'))
									return true;
								})  //判断是否已经存在
								if(tag !=-1){
									Ext.MessageBox.alert('提示！','该角色已经分配');
									ddSource.grid.store.remove(r);
									if(addData.length==0)
									{
										addData = 'null';
									}else
									{
										if(addData != 'null'){
											addData =addData +','+ 'null';
										}
									}
								}else
								{
									ddSource.grid.store.remove(r);
									secondGrid.store.add(r);
									if(addData.length==0)
									{
										addData = r.get('idNumber');
									}else
									{
										addData =addData +','+ r.get('idNumber');
									}
								}
							}

							Ext.Ajax.request({
										url : "t_comp_mgmt_add.action?instId="+win.idNumber+"&compId="+addData,
										params : {
											delData : addData
										},
										success : function(response, options) {
											var obj = Ext.util.JSON.decode(response.responseText);
											if(obj.success == false){
												Ext.Msg.alert('提示', '添加角色失败');
											}else{
												Ext.Msg.alert('提示', '添加角色成功');
											}
										}
									});
							return true;
						}
					});
		
		win.show({scope:this});
		}
	};

	
	// 加载页面后默认焦点
	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
