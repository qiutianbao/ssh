var querysubstationStore;
var querysubstationGrid;
var addsubstation;
var addsubstationForm;
var addsubstationWin;
var updatesubstation;
var updatesubstationWin;
var updatesubstationForm;
var updatesubstationReader;
var showQueryPanel;

var selectUnitForm;

Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('common/substationView.jsp');
	querysubstationStore = new Ext.data.JsonStore({
		url: 'substation_findAll.action',
		root: 'substationList',
		totalProperty: 'listCount',
		baseParams: {
			start: 0,
			limit: 10,
			flag: 'baseInfo'
		},
		fields: [, {
			name: 'idNumber',
			mapping: 'idNumber'
		},
		{
			name: 'ipaddress',
			mapping: 'ipaddress'
		},
		{
			name: 'dbname',
			mapping: 'dbname'
		},
		{
			name: 'portNo',
			mapping: 'portNo'
		},
		{
			name: 'username',
			mapping: 'username'
		},
		{
			name: 'password',
			mapping: 'password'
		},
		{
			name: 'ts',
			mapping: 'ts'
		},
		{
			name: 'dr',
			mapping: 'dr'
		},
		{
			name: 'back1',
			mapping: 'back1'
		},
		{
			name: 'back2',
			mapping: 'back2'
		},
		{
			name: 'back3',
			mapping: 'back3'
		}],
		autoLoad: false

	});

	selectUnitForm = new Ext.form.FormPanel({
		
	});

	querysubstationStore.load();
	//	rightDeptStore.load();
	//	personelTypeStore.load();
	var sm = new Ext.grid.CheckboxSelectionModel();

	var querysubstationGrid = new Ext.grid.GridPanel({
		store: querysubstationStore,
		sm: sm,
		columns: [sm, rowNum, {
			header: 'ip地址',
			dataIndex: 'ipaddress',
			width: 120
		},
		{
			header: '数据库',
			dataIndex: 'dbname',
			width: 120
		},
		{
			header: '用户名',
			dataIndex: 'username',
			width: 120
		},
		{
			header: '密码',
			dataIndex: 'password',
			width: 120
		},
		{
			header: '操作',
			dataIndex: 'back3',
			width: 300,
			renderer: function(value, meta, record) {
				var tempString = '<div class="getdom"><a href="javascript:;" class="setupdate" onclick="update()">修改</a><a href="javascript:;" class="setkbtn" onclick="changeBox()">切换</a></div>';
				return tempString;
			}
		}],
		width: 500,
		height: 100,
		tbar: [{
			text: ' 新增 ',
			iconCls: 'icon-add',
			handler: function() {
				addsubstation();
			}
		},
		'-', {
			text: '删除',
			iconCls: 'icon-del',
			handler: function() {
				del(querysubstationGrid, querysubstationStore, "substation_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar: [{
			xtype: 'paging',
			id: 'pageBar',
			plugins: [new Ext.ux.plugins.PageComboResizer()],
			pageSize: 10,
			store: querysubstationStore,
			emptyMsg: "没有记录"
		}]
	});
 
//切换	
	
	
	
	showQueryPanel = new Ext.Panel({
		width: '100%',
		id: 'fitpanel',
		renderTo: 'substationGrid',
		items: [selectUnitForm, querysubstationGrid]
	});
	var divHeight = document.getElementById('substationGrid').offsetHeight;
	var divWidth = document.getElementById('substationGrid').offsetWidth;

	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	querysubstationGrid.setWidth(showQueryPanel.getWidth());
	querysubstationGrid.setHeight(showQueryPanel.getHeight() - selectUnitForm.getHeight());

	addsubstationForm = new Ext.FormPanel({
		title: '添加信息',
		frame: true,
		waitMsgTarget: true,
		labelAlign: 'right',
		width: '100%',
		height: 180,
		items: [{
			layout: 'column',
			items: [{
				columnWidth: .5,
				layout: 'form',
				items: [/*{
					fieldLabel: '系统管理-分站表主键',
					id: 'add_idNumber',
					xtype: 'numberfield',
					name: 'substation.idNumber',
					width: '80%'
				},*/
				{
					fieldLabel: '数据库名称',
					id: 'add_dbname',
					xtype: 'textfield',
					name: 'substation.dbname',
					width: '80%'
				},
				{
					fieldLabel: '用户名',
					id: 'add_username',
					xtype: 'textfield',
					name: 'substation.username',
					width: '80%'
				}
				/*{
					fieldLabel: '时间戳',
					id: 'add_ts',
					xtype: 'textfield',
					name: 'substation.ts',
					width: '80%'
				},*/
				/*{
					fieldLabel: '预留字段1',
					id: 'add_back1',
					xtype: 'textfield',
					name: 'substation.back1',
					width: '80%'
				},
				{
					fieldLabel: '预留字段3',
					id: 'add_back3',
					xtype: 'numberfield',
					name: 'substation.back3',
					width: '80%'
				}*/]
			},
			{
				columnWidth: .5,
				layout: 'form',
				items: [{
					fieldLabel: 'ip地址',
					id: 'add_ipaddress',
					xtype: 'textfield',
					name: 'substation.ipaddress',
					width: '80%'
				},
			/*	{
					fieldLabel: '端口号',
					id: 'add_portNo',
					xtype: 'textfield',
					name: 'substation.portNo',
					width: '80%'
				},*/
				{
					fieldLabel: '密码',
					id: 'add_password',
					xtype:'textfield',
					inputType: 'password',
					name: 'substation.password',
					width: '80%'
				}
			/*	{
					fieldLabel: '删除标志',
					id: 'add_dr',
					xtype: 'numberfield',
					name: 'substation.dr',
					width: '80%'
				},*/
			/*	{
					fieldLabel: '预留字段2',
					id: 'add_back2',
					xtype: 'textfield',
					name: 'substation.back2',
					width: '80%'
				}*/]
			}]
		}],
		buttons: [{
			text: '保存',
			iconCls: 'icon-save',
			disabled: false,
			handler: function() {
				check(addsubstationForm, "substation_addNewInfo.action", querysubstationStore, "添加信息")
				addsubstationWin.hide();
			}
		},
		{
			text: '取消',
			iconCls: 'li-cancel',
			handler: function() {
				addsubstationWin.hide();
				addsubstationForm.form.reset();
			}
		}]

	});

	addsubstationWin = new Ext.Window({
		layout: 'form',
		width: 500,
		height: 200,
		plain: true,
		closable: false,
		items: addsubstationForm
	});

	addsubstation = function() {
		addsubstationWin.show();

		//		Ext.getCmp("idNumber").focus(false, 1000);
	};

	updatesubstationReader = new Ext.data.JsonReader({
		root: 'tempList',
		successProperty: '@success'
	},
	[, {
		name: 'substation.idNumber',
		mapping: 'idNumber'
	},
	{
		name: 'substation.ipaddress',
		mapping: 'ipaddress'
	},
	{
		name: 'substation.dbname',
		mapping: 'dbname'
	},
	{
		name: 'substation.portNo',
		mapping: 'portNo'
	},
	{
		name: 'substation.username',
		mapping: 'username'
	},
	{
		name: 'substation.password',
		mapping: 'password'
	},
	{
		name: 'substation.ts',
		mapping: 'ts'
	},
	{
		name: 'substation.dr',
		mapping: 'dr'
	},
	{
		name: 'substation.back1',
		mapping: 'back1'
	},
	{
		name: 'substation.back2',
		mapping: 'back2'
	},
	{
		name: 'substation.back3',
		mapping: 'back3'
	}]);

	updatesubstationForm = new Ext.FormPanel({
		title: '请输入您要修改的信息',
		frame: true,
		waitMsgTarget: true,
		reader: updatesubstationReader,
		style:'padding:10px',
		height: 200,
		items: [{
			layout: 'column',
			items: [{
				columnWidth: .5,
				layout: 'form',
				items: [
				{
					fieldLabel: 'ID',
					id: 'uppdate_idNumber',
					xtype: 'textfield',
					name: 'substation.idNumber',
					hidden: true, 
					hideLabel:true ,
					width: '80%'
				},
				{
					fieldLabel: '数据库名称',
					id: 'uppdate_dbname',
					xtype: 'textfield',
					name: 'substation.dbname',
					width: '80%'
				},
				{
					fieldLabel: '用户名',
					id: 'uppdate_username',
					xtype: 'textfield',
					name: 'substation.username',
					width: '80%'
				}
				/*{
					fieldLabel: '时间戳',
					id: 'uppdate_ts',
					xtype: 'textfield',
					name: 'substation.ts',
					width: '80%'
				},*/
				/*{
					fieldLabel: '预留字段1',
					id: 'uppdate_back1',
					xtype: 'textfield',
					name: 'substation.back1',
					width: '80%'
				},*/
				/*{
					fieldLabel: '预留字段3',
					id: 'uppdate_back3',
					xtype: 'numberfield',
					name: 'substation.back3',
					width: '80%'
				}*/]
			},
			{
				columnWidth: .5,
				layout: 'form',
				items: [{
					fieldLabel: 'ip地址',
					id: 'uppdate_ipaddress',
					xtype: 'textfield',
					name: 'substation.ipaddress',
					width: '80%'
				},
				/*{
					fieldLabel: '端口号',
					id: 'uppdate_portNo',
					xtype: 'textfield',
					name: 'substation.portNo',
					width: '80%'
				},*/
				{
					fieldLabel: '密码',
					id: 'uppdate_password',
					xtype: 'textfield',
					inputType: 'password',
					name: 'substation.password',
					width: '80%'
				}
				/*{
					fieldLabel: '删除标志',
					id: 'uppdate_dr',
					xtype: 'numberfield',
					name: 'substation.dr',
					width: '80%'
				},*/
				/*{
					fieldLabel: '预留字段2',
					id: 'uppdate_back2',
					xtype: 'textfield',
					name: 'substation.back2',
					width: '80%'
				}*/]
			}]
		}],
		buttons: [{
			text: '修改',
			iconCls: 'icon-save',
			disabled: false,
			handler: function() {
				check(updatesubstationForm, "substation_update.action", querysubstationStore, "修改信息")
				updatesubstationWin.hide();
			}
		},
		{
			text: '取消',
			iconCls: 'li-cancel',
			handler: function() {
				updatesubstationWin.hide();
				updatesubstationForm.form.reset();
			}
		}]
	});

	updatesubstationWin = new Ext.Window({
		layout: 'form',
		width: 500,
		height: 220,
		plain: true,
		closable: false,
		items: updatesubstationForm
	});

	update = function() {
		_record = querysubstationGrid.getSelectionModel().getSelected();
		flag = querysubstationGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatesubstationWin.show();

			updatesubstationForm.getForm().load({
				url: 'substation_findById.action?substation.idNumber=' + _record.get('idNumber'),
				waitMsg: '正在载入数据...',
				failure: function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success: function() {
					
				}
			});
		} else{ Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');}
	};

	// 加载页面后默认焦点
	//Ext.getCmp("select_idNumber").focus(false, 1000);

	
	
	
	
});
function changeBox(){
	 Ext.MessageBox.confirm('选择框','是否切换分站?',function(btn){
		   if(btn=="是"){
			window.location.href="login.jsp";   
			   
		   }
	   });
	
}

