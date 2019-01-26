
var querysub_integralruleStore;			
var querysub_integralruleGrid;
var addsub_integralrule;
var addsub_integralruleForm;
var addsub_integralruleWin;
var updatesub_integralrule;
var updatesub_integralruleWin;
var updatesub_integralruleForm;
var updatesub_integralruleReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	//haveRight('common/sub_integralruleView.jsp');
	 querysub_integralruleStore = new Ext.data.JsonStore({
		url : 'sub_integralrule_findAll.action',
		root : 'sub_integralruleList',
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
		name : 'idIntegralrule',
		mapping : 'idIntegralrule'
		}
		,{
		name : 'title',
		mapping : 'title'
		}
		,{
		name : 'note',
		mapping : 'note'
		}],
		autoLoad : false
		});
	selectUnitForm = new Ext.form.FormPanel({
		title : '积分规则',
		labelAlign : 'right',
		frame : true,
		labelWidth : 50,
		height:80,
		layout : 'column',
		items : [{
		columnWidth: .99,
		layout : 'form',
		items : [{
		fieldLabel : '概述',
		id : 'select_title',
		xtype : 'textarea',
		width : 580,
		disabled:true,
		value:'用户积分是凸显用户身份的一种象征，积分越多所体现其用户身份越尊贵,其所享受到的优惠越多'
		}]}]      
	});
	querysub_integralruleStore.load();
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	querysub_integralruleGrid = new Ext.grid.GridPanel({
		store : querysub_integralruleStore,
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
		header : '标题',
		dataIndex : 'title',
		width : 120 
		}
		,{
		header : '描述',
		dataIndex : 'note',
		style:'text-algin:left',
		width : 680 
		}
		],
		width : '100%',
		height:400,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				addsub_integralrule();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (querysub_integralruleGrid, querysub_integralruleStore, "sub_integralrule_delete.action", "idNumber", "删除信息");
			}
		}],

	});
	
	/*showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'sub_integralruleGrid',
		items : [selectUnitForm, querysub_integralruleGrid]
	});*/
	//var divHeight = document.getElementById('sub_integralruleGrid').offsetHeight;
	//var divWidth = document.getElementById('sub_integralruleGrid').offsetWidth;
	
	/*showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysub_integralruleGrid.setWidth(showQueryPanel.getWidth());
	querysub_integralruleGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());*/
	
	addsub_integralruleForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 320, 
		items : [{
		layout : 'column',
		items : [{
		columnWidth: .99,
		layout : 'form',
		items : [{
		fieldLabel : '标题',
		id : 'add_title',
		xtype : 'textfield',
		name : 'sub_integralrule.title',
		width : 500
		},{
		fieldLabel : '描述',
		id : 'add_note',
		xtype : 'htmleditor',
		name : 'sub_integralrule.note',
		width : 500
		}]
		}]}
		],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addsub_integralruleForm, "sub_integralrule_addNewInfo.action", querysub_integralruleStore, "添加信息")
				addsub_integralruleWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addsub_integralruleWin.hide();
				addsub_integralruleForm.form.reset();
			}
		}]

	});

	addsub_integralruleWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addsub_integralruleForm
	});

	addsub_integralrule = function() {
		addsub_integralruleWin.show();
	};
	
	updatesub_integralruleReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
	name : 'sub_integralrule.idNumber',
	mapping : 'idNumber'
	}
	,{
	name : 'sub_integralrule.idIntegralrule',
	mapping : 'idIntegralrule'
	}
	,{
	name : 'sub_integralrule.title',
	mapping : 'title'
	}
	,{
	name : 'sub_integralrule.note',
	mapping : 'note'
	}
	,{
	name : 'sub_integralrule.serial',
	mapping : 'serial'
	}
	]
		);
		
	updatesub_integralruleForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		height : 320,
		reader : updatesub_integralruleReader,
		items : [{
		layout : 'column',
		items : [
		{
		columnWidth: .99,
		layout : 'form',
		items : [
		{
		fieldLabel : '主键',
		id : 'uppdate_idNumber',
		xtype : 'hidden',
		name : 'sub_integralrule.idNumber',
		width : '80%'
		}
		,{
		fieldLabel : '标题',
		id : 'uppdate_title',
		xtype : 'textfield',
		name : 'sub_integralrule.title',
		width : 500
		},{
			fieldLabel : '描述',
			id : 'uppdate_note',
			xtype : 'htmleditor',
			name : 'sub_integralrule.note',
			width : 500
			}]
		}
		]}
		],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatesub_integralruleForm, "sub_integralrule_update.action", querysub_integralruleStore, "修改信息")
				updatesub_integralruleWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatesub_integralruleWin.hide();
				updatesub_integralruleForm.form.reset();
			}
		}]
	});

	updatesub_integralruleWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatesub_integralruleForm
	});

	update = function() {
		_record = querysub_integralruleGrid.getSelectionModel().getSelected();
		flag = querysub_integralruleGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesub_integralruleWin.show();
					
			updatesub_integralruleForm.getForm().load({
				url : 'sub_integralrule_findById.action?sub_integralrule.idNumber='+ _record.get('idNumber'),
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
 });
 
