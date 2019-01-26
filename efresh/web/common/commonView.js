var queryt_comp_infoStore;			
var queryt_comp_infoGrid;
var showQueryPanel;

var viewt_comp_infoWin;
var viewt_comp_infoForm;

var fileTypeStore;
var selectUnitForm;
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
	
	/*haveRight('common/commonView.jsp');*/
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
		},[{name:'idNumber',mapping:'idNumber'},
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
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryt_comp_infoGrid = new Ext.grid.GridPanel({
		store : queryt_comp_infoStore,
		sm : sm,
		stateful:true,
		stateId:"compquery-state-grid",
		stripeRows : true,
		columns : [ sm, rowNum
		,{
		header : '保险公司简称',
		dataIndex : 'comp_abbr_name',
		width : 100
		}
		,{
		header : '保险公司全称',
		dataIndex : 'comp_name',
		width : 220,
		renderer : function(value, meta, record) {
			var tempString = '<div><a href="javascript:void(0)" onclick="view()">'+ value +'</a></div>';
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
		,{
			header : '下载语音文件',
			dataIndex : 'idNumber',
			width : 140,
			renderer : function(value, meta, record) {
				var tempString = '<a href="javascript:void(0)" onclick="downvoice(\''+value+'\')">下载语音</a>';
				//tempString += "";
				return tempString;
			}
		}
		],
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
	queryt_comp_infoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
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

	viewt_comp_infoForm = new Ext.form.FormPanel({
		frame : true,
		layout : 'column',
        labelWidth : 140,
		reader : updatet_comp_infoReader,
		items : [{
columnWidth: .55,
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
	width : '150'
},{
	fieldLabel : '保险公司简称',
	id : 'uppdate_comp_abbr_name',
	xtype : 'textfield',
	name : 't_comp_info.comp_abbr_name',
	width : '70%'
	},{
	fieldLabel : '保险公司全称',
	id : 'uppdate_comp_name',
	xtype : 'textarea',
	height : 50,
	name : 't_comp_info.comp_name',
	width : '70%'
},{
	fieldLabel : '公司成立时间',
	id : 'uppdate_found_date',
	xtype : 'textfield',
	name : 't_comp_info.found_date',
	width : '70%'
	},{
	fieldLabel : '注册资本',
	id : 'uppdate_reg_bal',
	xtype : 'textfield',
	name : 't_comp_info.reg_bal',
	width : '70%'
}
,{
fieldLabel : '总部所在城市',
id : 'uppdate_hq_city',
xtype : 'textfield',
name : 't_comp_info.hq_city',
width : '70%'
},{
	fieldLabel : '总部地址',
	id : 'uppdate_hq_Address',
	xtype : 'textarea',
	height : 50,
	name : 't_comp_info.hq_Address',
	width : '70%'
}
,{
fieldLabel : '公司网址',
id : 'uppdate_comp_url',
xtype : 'textfield',
name : 't_comp_info.comp_url',
width : '70%'
},{
	fieldLabel : '全国客服电话',
	id : 'uppdate_serv_phone',
	xtype : 'textfield',
	name : 't_comp_info.serv_phone',
	width : '70%'
}
,{
fieldLabel : '本部地址',
id : 'uppdate_loc_address',
xtype : 'textarea',
height : 50,
name : 't_comp_info.loc_address',
width : '70%'
},{
	fieldLabel : '联系人姓名',
	id : 'uppdate_con_name',
	xtype : 'textfield',
	name : 't_comp_info.con_name',
	width : '70%'
}
,{
fieldLabel : '联系人电话',
id : 'uppdate_con_phone',
xtype : 'textfield',
name : 't_comp_info.con_phone',
width : '70%'
}
]},{
columnWidth: .45,
layout : 'form',
items : [{
	fieldLabel : '股东构成及比例',
	id : 'uppdate_partner_info',
	xtype : 'textarea',
	height :140,
	name : 't_comp_info.partner_info',
//	anchor : '95%',
	width : '95%'
	}
,{
fieldLabel : '公司简介',
id : 'uppdate_comp_abbr',
xtype : 'textarea',
height : 140,
name : 't_comp_info.comp_abbr',
width : '95%'
},{
	fieldLabel : '获奖荣誉',
	id : 'uppdate_glory_info',
	xtype : 'textarea',
	height : 140,
	name : 't_comp_info.glory_info',
	width : '95%'
}
,{
layout : 'column',
items : [{
	columnWidth : 1,
	items : [{
	xtype : 'button',
	text : '关闭',
	width : 100,
	iconCls : 'icon-reset',
	handler : function() {
		viewt_comp_infoWin.hide();
	}}]
	}
]}]}]
	});

	viewt_comp_infoWin = new Ext.Window({
		title : '请输入您要修改的信息',
		layout : 'form',
		width : 1200,
		height : 530,
		plain : true,
		closable : true,
		closeAction : 'hide',
		items : viewt_comp_infoForm
	});

	view = function(){
		_record = queryt_comp_infoGrid.getSelectionModel().getSelected();
		flag = queryt_comp_infoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			viewt_comp_infoWin.show();

			viewt_comp_infoForm.getForm().load({
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

	fileTypeStore = new Ext.data.SimpleStore({
		fields : ['file_type', 'file_type_name'],
		data : [['logo', 'Logo图标'], ['voice', '语音 ']]
	});
	var fileType = {'logo': 'Logo图标', 'voice': '语音 '};
	
	downvoice = function(a){
		Ext.Ajax.request({
			url:"t_comp_info_findVoiceFileByCompId.action?compFile.compId=" + a +"&compFile.fileType=voice&compFile.flag=1",
			/*form: 'fileForm',*/
			isUpload:true,
			waitMsg : '正在上传文件，请等待...',
			success:function(response){
				var res = response.responseText;
				var responseJson = Ext.util.JSON.decode(res);
				var fileUrl = responseJson.compFile.fileUrl;
				if(fileUrl!=null){
					document.getElementById("downid").href = prjpath + fileUrl;
					document.getElementById("downid").click();
				}else{
					Ext.Msg.alert('友情提示', '该公司还没有上传语音文件');
				}
			},
			failure : function(response) {
				Ext.Msg.alert('友情提示', '失败，请重试。');
			}
		});
	};
	
		
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
	
	// 加载页面后默认焦点
	Ext.getCmp("select_idNumber").focus(false, 1000);
});
