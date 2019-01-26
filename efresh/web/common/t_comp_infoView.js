
var queryt_comp_infoStore;			
var queryt_comp_infoGrid;
var addt_comp_info;
var addt_comp_infoForm;
var addt_comp_infoWin;
var updatet_comp_info;
var updatet_comp_infoWin;
var updatet_comp_infoForm;
var updatet_comp_infoReader;
var showQueryPanel;

var fileTypeStore;
var selectUnitForm;
var compPicLogWin;
var compFilePanel;
var compFileInfoForm;
var compFileStore;

var fileUploadForm;
var fileUploadWin;
var updateCompFileReader;
var updateFileUploadForm;
var updatefileUploadWin;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('common/t_comp_infoView.jsp');
	 queryt_comp_infoStore = new Ext.data.JsonStore({
		url : 't_comp_info_findAll.action',
		root : 't_comp_infoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
		name : 'idNumber',
		mapping : 'idNumber'
		},{
		name : 'comp_abbr_name',
		mapping : 'comp_abbr_name'
		},{
		name : 'partner_info',
		mapping : 'partner_info'
		},{
		name : 'comp_name',
		mapping : 'comp_name'
		},{
		name : 'found_date',
		mapping : 'found_date'
		},{
		name : 'reg_bal',
		mapping : 'reg_bal'
		},{
		name : 'hq_city',
		mapping : 'hq_city'
		},{
		name : 'hq_Address',
		mapping : 'hq_Address'
		},{
		name : 'comp_url',
		mapping : 'comp_url'
		},{
		name : 'serv_phone',
		mapping : 'serv_phone'
		},{
		name : 'loc_address',
		mapping : 'loc_address'
		},{
		name : 'con_name',
		mapping : 'con_name'
		},{
		name : 'con_phone',
		mapping : 'con_phone'
		},{
		name : 'comp_abbr',
		mapping : 'comp_abbr'
		},{
		name : 'glory_info',
		mapping : 'glory_info'
		}
		],
				autoLoad : false
		
	});

	 squeryt_comp_infoStore=new Ext.data.Store({
		 proxy:new Ext.data.HttpProxy({
		 url:'t_comp_info_findAllByPro.action'
		 }),
		 reader:new Ext.data.JsonReader({
		 root:'t_comp_infoList',
		 id:'id'
		 },[
		 {name:'idNumber',mapping:'idNumber'},
		 {name:'comp_name',mapping:'comp_name'}
		 ])
		 });	
	 
	 squeryt_comp_infoStore.load();
	 
	 
	 selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
	    autoScroll : true, 
	    labelWidth:120,
		padding : 5,
		layout : 'column',
		items : [{
		columnWidth: .5,
		layout : 'form',
		items : [{   
        		fieldLabel:'公司名称',
        		xtype:'combo',
        		store:squeryt_comp_infoStore,
        		valueField:"idNumber",
        		displayField:"comp_name",
        		mode:'local',
        		forceSelection:true,//必须选择一项
        		emptyText:'请选择公司...',//默认值
        		hiddenName:'t_comp_info.idNumber',//hiddenName才是提交到后台的input的name
        		editable:false,//不允许输入
        		triggerAction:'all',
        	    id : 'select_idNumber',  
        	    name: 't_comp_info.idNumber',
        		width:230
        }]},{
		columnWidth: .25,
		layout : 'form',
		items : [{
		xtype : 'button',
		text : '重置',
		width : 100,
		iconCls : 'icon-reset',
		handler : function() {
		selectUnitForm.form.reset();
		}}]
		},{
		columnWidth : 0.25,
		items : [{
		xtype : 'button',
		text : '查询',
		width : 100,
		iconCls : 'icon-select',
		handler : function() {
		queryt_comp_infoStore.proxy = new Ext.data.HttpProxy({
		url : 't_comp_info_findInfoByConditions.action?'
		+'t_comp_info.idNumber='
		+ Ext.getCmp('select_idNumber').getValue()
		});
			queryt_comp_infoStore.load({
		params : {
		start : 0,
		limit : Ext.getCmp('pageBar').pageSize
		}});
		}}]}
		]
		         
	});;
	
	
	

	queryt_comp_infoStore.load();
//	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_comp_infoGrid = new Ext.grid.GridPanel({
		store : queryt_comp_infoStore,
		sm : sm,
		stripeRows : true,
		columns : [ sm, rowNum
		,{
		header : '保险公司简称',
		dataIndex : 'comp_abbr_name',
		width : 80
		}
		,{
		header : '保险公司全称',
		dataIndex : 'comp_name',
		width : 220,
		renderer : function(value, meta, record) {
			var tempString = '<div><a href=javascript:update()>'+ value +'</a></div>';
			return tempString;
		}
		}
		,{
		header : '成立时间',
		dataIndex : 'found_date',
		width : 80 
		}
		
		,{
		header : '公司简介',
		dataIndex : 'comp_abbr',
		width : 340 
		}
		
		],
		//width : 700,
		height : 360,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addt_comp_info();
			}
		}, '-', {
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryt_comp_infoGrid, queryt_comp_infoStore, "t_comp_info_delete.action", "idNumber", "删除信息");
			}
		},'-',{text:"Excel导入", 
		    icon : "../images/icon/upload.png", 
		    handler : function(){
				data_upload();
			}
		},'-',{text:"Excel导出", 
		    icon : "../images/icon/upload.png", 
		    handler : function(){
				// 下载一笔公司信息
				_record = queryt_comp_infoGrid.getSelectionModel().getSelected();
				flag = queryt_comp_infoGrid.getSelectionModel().getSelections();
				if (flag.length == 1) {
					window.location.href = prjpath + "/excelDownload.action?resourceName=compInfo&id=" + _record.get('idNumber');
				}else{
					Ext.Msg.alert('友情提示', '请选择一条公司信息下载！');
				}
			}
		},'-',{text:"维护LOGO图标/语音信息", 
			handler : function(){
				flag = queryt_comp_infoGrid.getSelectionModel().getSelections();
				if (flag.length == 1) {
					_record = queryt_comp_infoGrid.getSelectionModel().getSelected();
					// 
					var idNumber = _record.get('idNumber');
					Ext.getCmp("mainTableId").setValue(idNumber);
					Ext.getCmp("compName").setValue(_record.get('comp_name'));
					compFileStore.load({
						params : {
							"compFile.compId":idNumber
						}
					});
					
					compPicLogWin.show();
					
				}else{
					Ext.Msg.alert('友情提示', '请选择一个公司进行上传或更新！');
				}
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_comp_infoStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 't_comp_infoGrid',
		items : [selectUnitForm, queryt_comp_infoGrid]
	});
	var divHeight = document.getElementById('t_comp_infoGrid').offsetHeight;
	var divWidth = document.getElementById('t_comp_infoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryt_comp_infoGrid.setWidth(showQueryPanel.getWidth());
	//queryt_comp_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	

	
	addt_comp_infoForm = new Ext.form.FormPanel({
		labelAlign : 'left',
		frame : true,
//		waitMsgTarget : true,
        labelWidth : 140, 
		layout : 'column',
		items : [{
	columnWidth: .5,
	layout : 'form',
	items : [{
	fieldLabel : '保险公司简称',
	id : 'add_comp_abbr_name',
	xtype : 'textfield',
	name : 't_comp_info.comp_abbr_name',
	width : '98%',
	allowBlank: false
	},{
	fieldLabel : '保险公司全称',
	id : 'add_comp_name',
	xtype : 'textarea',
	height : 50,
	name : 't_comp_info.comp_name',
	width : '98%',
	allowBlank: false
},{
	fieldLabel : '公司成立时间',
	id : 'add_found_date',
	xtype : 'datefield',
	name : 't_comp_info.found_date',
	width : '98%',
	format: 'Y-m-d',
	allowBlank: false
	},{
	fieldLabel : '注册资本',
	id : 'add_reg_bal',
	xtype : 'textfield',
	name : 't_comp_info.reg_bal',
	width : '98%',
	allowBlank: false
}
,{
	fieldLabel : '总部所在城市',
	id : 'add_hq_city',
	xtype : 'textfield',
	name : 't_comp_info.hq_city',
	width : '98%'
},{
	fieldLabel : '总部地址',
	id : 'add_hq_Address',
	xtype : 'textarea',
	height : 50,
	name : 't_comp_info.hq_Address',
	width : '98%'
}
,{
	fieldLabel : '公司网址',
	id : 'add_comp_url',
	xtype : 'textfield',
	name : 't_comp_info.comp_url',
	width : '98%'
},{
	fieldLabel : '全国客服电话',
	id : 'add_serv_phone',
	xtype : 'textfield',
	name : 't_comp_info.serv_phone',
	width : '98%'
}
,{
	fieldLabel : '本部地址',
	id : 'add_loc_address',
	xtype : 'textarea',
	height : 50,
	name : 't_comp_info.loc_address',
	width : '98%'
},{
	fieldLabel : '联系人姓名',
	id : 'add_con_name',
	xtype : 'textfield',
	name : 't_comp_info.con_name',
	width : '98%'
}
,{
	fieldLabel : '服务人员联系电话',
	id : 'add_con_phone',
	xtype : 'textfield',
	name : 't_comp_info.con_phone',
	width : '98%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [{
	fieldLabel : '股东构成及比例',
	id : 'add_partner_info',
	xtype : 'textarea',
	height :140,
	name : 't_comp_info.partner_info',
	anchor : '98%'
	}
,{
	fieldLabel : '公司简介',
	id : 'add_comp_abbr',
	xtype : 'textarea',
	height : 140,
	name : 't_comp_info.comp_abbr',
	anchor : '98%'
},{
	fieldLabel : '获奖荣誉',
	id : 'add_glory_info',
	xtype : 'textarea',
	height : 140,
	name : 't_comp_info.glory_info',
	anchor : '98%'
}
,{
	layout : 'column',
	items : [{
	columnWidth : 0.3,
	items : [{
	xtype : 'button',
	text : '重置',
	width : 100,
	iconCls : 'icon-reset',
	handler : function() {
	addt_comp_infoForm.form.reset();
}}]
},{
	columnWidth : 0.3,
	items : [{
	xtype : 'button',
	text : '关闭',
	width : 100,
	iconCls : 'icon-reset',
	handler : function() {
		addt_comp_infoWin.hide();
	}}]
	},{
columnWidth : 0.4,
items : [{
xtype : 'button',
text : '保存',
width : 100,
iconCls : 'icon-select',
handler : function() {
	check(addt_comp_infoForm, "t_comp_info_addNewInfo.action", queryt_comp_infoStore, "添加信息");
	addt_comp_infoWin.hide();	
}
}]}
]}]}]
	});
	addt_comp_infoWin = new Ext.Window({
		title : '新增公司信息',
		layout : 'form',
		width : 800,
		height : 530,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : addt_comp_infoForm
	});

	addt_comp_info = function() {
		addt_comp_infoWin.show();
	};
	
	
	updatet_comp_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
	name : 't_comp_info.idNumber',
	mapping : 'idNumber'
	}
	,{
	name : 't_comp_info.comp_abbr_name',
	mapping : 'comp_abbr_name'
	}
	,{
	name : 't_comp_info.partner_info',
	mapping : 'partner_info'
	}
	,{
	name : 't_comp_info.comp_name',
	mapping : 'comp_name'
	}
	,{
	name : 't_comp_info.found_date',
	mapping : 'found_date'
	}
	,{
	name : 't_comp_info.reg_bal',
	mapping : 'reg_bal'
	}
	,{
	name : 't_comp_info.hq_city',
	mapping : 'hq_city'
	}
	,{
	name : 't_comp_info.hq_Address',
	mapping : 'hq_Address'
	}
	,{
	name : 't_comp_info.comp_url',
	mapping : 'comp_url'
	}
	,{
	name : 't_comp_info.serv_phone',
	mapping : 'serv_phone'
	}
	,{
	name : 't_comp_info.loc_address',
	mapping : 'loc_address'
	}
	,{
	name : 't_comp_info.con_name',
	mapping : 'con_name'
	}
	,{
	name : 't_comp_info.con_phone',
	mapping : 'con_phone'
	}
	,{
	name : 't_comp_info.comp_abbr',
	mapping : 'comp_abbr'
	}
	,{
	name : 't_comp_info.glory_info',
	mapping : 'glory_info'
	}
	]
	);
		
	updatet_comp_infoForm = new Ext.form.FormPanel({
		frame : true,
	//	waitMsgTarget : true,
		layout : 'column',
        labelWidth : 100, 
		reader : updatet_comp_infoReader,
		items : [{
columnWidth: .5,
layout : 'form',
items : [
{
	fieldLabel : '保险公司编号',
	id : 'uppdate_idNumber',
	xtype : 'textfield',
	readOnly : true,
	style:'color:#C0C0C0;',
	maxLength:10,
	autoCreate: {tag: 'input', type: 'text', size: '10', autocomplete: 'off', maxlength: '10'},
	name : 't_comp_info.idNumber',
	width : '98%'
},{
	fieldLabel : '保险公司简称',
	id : 'uppdate_comp_abbr_name',
	xtype : 'textfield',
	name : 't_comp_info.comp_abbr_name',
	width : '98%'
	},{
	fieldLabel : '保险公司全称',
	id : 'uppdate_comp_name',
	xtype : 'textarea',
	height : 50,
	name : 't_comp_info.comp_name',
	width : '98%'
},{
	fieldLabel : '公司成立时间',
	id : 'uppdate_found_date',
	xtype : 'textfield',
	name : 't_comp_info.found_date',
	width : '98%'
	},{
	fieldLabel : '注册资本',
	id : 'uppdate_reg_bal',
	xtype : 'textfield',
	name : 't_comp_info.reg_bal',
	width : '98%'
}
,{
fieldLabel : '总部所在城市',
id : 'uppdate_hq_city',
xtype : 'textfield',
name : 't_comp_info.hq_city',
width : '98%'
},{
	fieldLabel : '总部地址',
	id : 'uppdate_hq_Address',
	xtype : 'textarea',
	height : 50,
	name : 't_comp_info.hq_Address',
	width : '98%'
}
,{
fieldLabel : '公司网址',
id : 'uppdate_comp_url',
xtype : 'textfield',
name : 't_comp_info.comp_url',
width : '98%'
},{
	fieldLabel : '全国客服电话',
	id : 'uppdate_serv_phone',
	xtype : 'textfield',
	name : 't_comp_info.serv_phone',
	width : '98%'
}
,{
fieldLabel : '本部地址',
id : 'uppdate_loc_address',
xtype : 'textarea',
height : 50,
name : 't_comp_info.loc_address',
width : '98%'
},{
	fieldLabel : '联系人姓名',
	id : 'uppdate_con_name',
	xtype : 'textfield',
	name : 't_comp_info.con_name',
	width : '98%'
}
,{
fieldLabel : '联系人电话',
id : 'uppdate_con_phone',
xtype : 'textfield',
name : 't_comp_info.con_phone',
width : '98%'
}
]},{
columnWidth: .5,
layout : 'form',
items : [{
	fieldLabel : '股东构成及比例',
	id : 'uppdate_partner_info',
	xtype : 'textarea',
	height :140,
	name : 't_comp_info.partner_info',
//	anchor : '95%',
	width : '98%'
	}
,{
fieldLabel : '公司简介',
id : 'uppdate_comp_abbr',
xtype : 'textarea',
height : 140,
name : 't_comp_info.comp_abbr',
width : '98%'
},{
	fieldLabel : '获奖荣誉',
	id : 'uppdate_glory_info',
	xtype : 'textarea',
	height : 140,
	name : 't_comp_info.glory_info',
	width : '98%'
}
,{
layout : 'column',
items : [{
columnWidth : 0.3,
items : [{
xtype : 'button',
text : '重置',
width : 100,
iconCls : 'icon-reset',
handler : function() {
	updatet_comp_infoForm.form.reset();
}}]
},{
	columnWidth : 0.3,
	items : [{
	xtype : 'button',
	text : '关闭',
	width : 100,
	iconCls : 'icon-reset',
	handler : function() {
		updatet_comp_infoWin.hide();
	}}]
	},{
		columnWidth : 0.4,
		items : [{
		xtype : 'button',
		text : '保存',
		width : 100,
		iconCls : 'icon-select',
					handler : function() {
						check(updatet_comp_infoForm, "t_comp_info_update.action", queryt_comp_infoStore, "修改信息");
						updatet_comp_infoWin.hide();
					}
		}]}
]}]}]
	});

	updatet_comp_infoWin = new Ext.Window({
		title : '请输入您要修改的信息',
		layout : 'form',
		width : 800,
		height : 530,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : updatet_comp_infoForm
	});

	update = function(){
		_record = queryt_comp_infoGrid.getSelectionModel().getSelected();
		flag = queryt_comp_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatet_comp_infoWin.show();
					
			updatet_comp_infoForm.getForm().load({
				url : 't_comp_info_findById.action?t_comp_info.idNumber='+ _record.get('idNumber'),
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
		    fieldLabel: '附件存储路径',
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
				submit(data_uploadForm, "data_upload.action?flag=T_comp_info", queryt_comp_infoStore, "数据导入");
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

	compFileInfoForm = new Ext.form.FormPanel({
		
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		fileUpload: true,
		width : 800,
		height : 70,
		items : [
		         {
		    xtype: 'hidden',
		    id:'mainTableId'
			},{
		    xtype: 'displayfield',
		    fieldLabel: '公司名称',
		    id:'compName',
		    anchor : '95%'
			}]
		
	});
	
	compFileStore = new Ext.data.JsonStore({
		url : 't_comp_info_findFileAll.action?compFile.flag=1',
		root : 'compFileList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [,{
		name : 'idNumber',
		mapping : 'idNumber'
		},{
		name : 'fileType',
		mapping : 'fileType'
		},{
		name : 'fileUrl',
		mapping : 'fileUrl'
		},{
			name : 'sort',
			mapping : 'sort'
			}
		],
				autoLoad : false
	});
	var fsm = new Ext.grid.CheckboxSelectionModel();
	var compFileInfoGrid = new Ext.grid.GridPanel({
		store : compFileStore,
		sm : fsm,
		stripeRows : true,
		width : 800,
		height : 390,
		columns : [ fsm, rowNum,
		            {
			header : '文件类型',
			dataIndex : 'fileType',
			width : 60,
			renderer : function(value, meta, record) {
				return fileType[value];
			}
			},{
				header : '排序',
				dataIndex : 'sort',
				width : 60
				},{
					header : '路径',
					dataIndex : 'fileUrl',
					width : 60,
					renderer : function(value, meta, record) {
						var tempString = "<a href='"+prjpath + value+"' target='_blank'>"+ value +"</a>";
						return tempString;
					}
					}],
			
			tbar : [{
				text : '新增 ',
				iconCls:'icon-add',
				handler : function() {
					Ext.getCmp("compFile_compId").setValue(Ext.getCmp("mainTableId").getValue());
					fileUploadWin.show();
				}
			}, '-',{
				text : '修改 ',
				iconCls:'icon-add',
				handler : function() {
					_record = compFileInfoGrid.getSelectionModel().getSelected();
					flag = compFileInfoGrid.getSelectionModel().getSelections();
				if (flag.length == 1) {
					updatefileUploadWin.show();
					
					updateFileUploadForm.getForm().load({
						url : 't_comp_info_findCompFileById.action?compFile.idNumber='+ _record.get('idNumber')+"&compFile.flag=1",
						waitMsg : '正在载入数据...',
						failure : function() {
							Ext.Msg.alert('友情提示', '载入失败');
						},
						success : function() {
						}
					});
				} else
					Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
				}
			}, '-',{
				text : '删除 ',
				iconCls:'icon-add',
				handler : function() {
					del (compFileInfoGrid, compFileStore, "t_comp_info_deleteFile.action?compFile.flag=1", "idNumber", "删除信息",{params :{"compFile.compId":Ext.getCmp("mainTableId").getValue()}});
				}
			}],
			bbar : [{
				xtype : 'paging',
				id : 'pageBar2',
				plugins : [new Ext.ux.plugins.PageComboResizer()],
				pageSize : 10,
				store : compFileStore,
				emptyMsg : "没有记录"
			}]
	});
	
	compFilePanel = new Ext.Panel({
		width : '100%',
		id : 'filePanel',
		items : [compFileInfoForm, compFileInfoGrid]
	});
	compPicLogWin = new Ext.Window({
		title : '公司语音信息/LOGO图标',
		layout : 'form',
		width : 800,
		height : 500,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : compFilePanel,
		listeners :{
			"beforehide":function (){
				compFileStore.removeAll();
			}
		}
	});
	
	fileTypeStore = new Ext.data.SimpleStore({
		fields : ['file_type', 'file_type_name'],
		data : [['logo', 'Logo图标'], ['voice', '语音 ']]
	});
	var fileType = {'logo': 'Logo图标', 'voice': '语音 '};
	
	
	
	fileUploadForm = new Ext.form.FormPanel({
		formId : 'fileForm',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		fileUpload: true,
		width : 660,
		height : 200, 
		items : [
		         {
		xtype : 'hidden',
		id : 'compFile_compId',
		name:'compFile.compId'
		},{
		    xtype: 'textfield',
		    fieldLabel: '文件',
		    id:'upload',
		    name: 'upload',
		    inputType: 'file',
		    anchor : '95%',
		    allowBlank : false
		  //  	width : '350'
			},{
			    xtype: 'combo',
			    fieldLabel: '文件类型',
			    id:'compFile_fileType',
			   store:fileTypeStore,
			   valueField : 'file_type',
			   displayField : 'file_type_name',
			   mode : 'local',
			   editable : false,
			   triggerAction : 'all',
			    anchor : '95%',
			    allowBlank : false,
			    hiddenName :'compFile.fileType'
				},
				{

					fieldLabel : '排序',
					id : 'compFile_sort',
					xtype : 'textfield',
					name : 'compFile.sort',
						regex : /[0-9]/,
							regexText:"只能输入数字!"
				}
				],
				buttons : [{
					text : '上传',
					iconCls:'icon-save',
					disabled : false,
					handler : function() {
						//
//						var fname = Ext.getCmp("upload").getValue();
//						if(fname == ''){
//							Ext.Msg.alert('友情提示', '请选择文件上传');
//							return;
//						}
						if(fileUploadForm.getForm().isValid()){
						Ext.Ajax.request({
							url:"comp_info_uploadPic.action?" + Ext.urlEncode({filename:Ext.getCmp("upload").getValue()})+"&compFile.flag=1",
							form: 'fileForm',
							isUpload:true,
							waitMsg : '正在上传文件，请等待...',
							success:function(response){
								Ext.Msg.alert('友情提示', '文件上传成功');
								compFileStore.load({
									params : {
										"compFile.compId":Ext.getCmp("mainTableId").getValue()
									}
								});
								fileUploadForm.form.reset();
								fileUploadWin.hide();
							},
							failure : function(response) {
								Ext.Msg.alert('友情提示', '文件上传失败，请重试。');
							}
						});
						}else{
							Ext.Msg.alert('信息', '请填写完成再提交!');
						}
					}
				},{
						text : '取消',
						iconCls:'li-cancel',
						handler : function() {
						fileUploadWin.hide();
						fileUploadForm.form.reset();
						}
					}
				]
	});
	
	updateCompFileReader = new Ext.data.JsonReader({
		root : 'compFileList',
		successProperty : '@success'
	}, [,{
	name : 'compFile.idNumber',
	mapping : 'idNumber'
	}
	,{
	name : 'compFile.sort',
	mapping : 'sort'
	},{
		name : 'compFile.fileType',
		mapping : 'fileType'
		}
	]
	);
	updateFileUploadForm = new Ext.form.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 660,
		height : 200, 
		reader : updateCompFileReader,
		items : [
{
	xtype : 'hidden',
	name:'compFile.idNumber'
	},{
	    xtype: 'combo',
	    fieldLabel: '文件类型',
	   store:fileTypeStore,
	   valueField : 'file_type',
	   displayField : 'file_type_name',
	   mode : 'local',
	   editable : false,
	   triggerAction : 'all',
	    anchor : '95%',
	    allowBlank : false,
	    hiddenName :'compFile.fileType'
		},{
		fieldLabel : '排序',
		xtype : 'textfield',
		name : 'compFile.sort',
			regex : /[0-9]/,
				regexText:"只能输入数字!"
	}
		         ],
		         buttons : [{
						text : '修改',
						iconCls : 'icon-save',
						disabled : false,
						handler : function() {
							if (updateFileUploadForm.form.isValid()) {
										updateFileUploadForm.form.submit({
											url : 't_comp_info_updateCompFile.action?compFile.flag=1',
											success : function(form, action) {
											compFileStore.load({
													params : {
													"compFile.compId":Ext.getCmp("mainTableId").getValue()
												}
											});
												Ext.Msg
														.alert('提示',
																'保存成功！');
												updatefileUploadWin.hide();
												updateFileUploadForm.getForm()
														.reset();
											},
											failure : function(form, action) {
												updatefileUploadWin.hide();
												updateFileUploadForm.getForm()
														.reset();
												Ext.Msg
														.alert('提示',
																'保存失败！');
											},
											waitMsg : '正在保存数据，稍后...'
										});
							} else {
									Ext.Msg.alert('提示', '请填写完成再提交!');
							}
						}
					}, {
						text : '取消',
						iconCls : 'li-cancel',
						handler : function() {
							updatefileUploadWin.hide();
							updateFileUploadForm.getForm().reset();
						}
					}]
	});

	fileUploadWin = new Ext.Window({
		title : '维护LOGO图标/语音信息',
		layout : 'form',
		width : 660,
		height : 250,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : fileUploadForm
	});
	
	updatefileUploadWin = new Ext.Window({
		title : '请输入您要修改的信息',
		layout : 'form',
		width : 660,
		height : 250,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : updateFileUploadForm
	});
	
	// 加载页面后默认焦点
	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
