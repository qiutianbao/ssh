var queryPersonelInfoStore;			
var queryPersonelInfoGrid;
var addPersonelInfo;
var addPersonelInfoForm;
var addPersonelInfoWin;
var updatePersonelInfo;
var updatePersonelInfoWin;
var updatePersonelInfoForm;
var updatePersonelInfoReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	haveRight('Person/ShowAllBaseInfoView.jsp');
	
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
			columnWidth: .25,
			layout : 'form',
			items : [{
				fieldLabel : '身份证',
				id : 'selectIdNumber',
				xtype : 'field',
				name : 'personelInfo.idnumber',
				width : '80%'
			},{
				fieldLabel : '姓名',
				id : 'selectName',
				width : '80%',
				name : 'personelInfo.name',
				xtype : 'field'
			}]
		},{
			columnWidth: .25,
			layout : 'form',
			items : [{
				fieldLabel : '所属部门',
				id : 'selectDept',
				width : 100,
				xtype : 'combo',
				store : rightDeptStore,
				valueField : 'id',
				displayField : 'name',
				mode : 'local',
				editable : false,
				triggerAction : 'all',
				hiddenName : 'personelInfo.rightDept.id',
				pageSize : 5
			},{
				fieldLabel : '性别',
				id : 'selectSex',
				width : 100,
				xtype : 'combo',
				store : genderSimpleStore,
				valueField : 'id',
				displayField : 'name',
				mode : 'local',
				editable : false,
				triggerAction : 'all',
				hiddenName : 'personelInfo.gender',
				pageSize : 5
			}]
		},{
			columnWidth: .25,
			layout : 'form',
			items : [{
				fieldLabel : '政治面貌',
				id : 'selectZHMM',
				width : 100,
				xtype : 'combo',
				store : politicsSimpleStore,
				valueField : 'id',
				displayField : 'name',
				mode : 'local',
				editable : false,
				triggerAction : 'all',
				hiddenName : 'personelInfo.zhmm',
				pageSize : 5
			},{
				layout : 'column',
				items : [{
					columnWidth : 0.25,
					items : [{
					}]
				}, {
					columnWidth : 0.5,
					items : [{
						xtype : 'button',
						text : '查询',
						width : 100,
						iconCls : 'icon-select',
						handler : function() {
							queryPersonelInfoStore.proxy = new Ext.data.HttpProxy({
								url : 'personelInfo_findInfoByConditions.action?personelInfo.idnumber='
										+ Ext.getCmp('selectIdNumber').getValue()
										+ '&personelInfo.name='
										+ Ext.getCmp('selectName').getValue()
										+ '&personelInfo.gender='
										+ Ext.getCmp('selectSex').getValue()
										+ '&personelInfo.rightDept.id='
										+ Ext.getCmp('selectDept').getValue()
										+ '&personelInfo.zhmm='
										+ Ext.getCmp('selectZHMM').getValue()
										+ '&personelInfo.state='
										+ Ext.getCmp('selectState').getValue()
							});
							queryPersonelInfoStore.load({
								params : {
									start : 0,
									limit : Ext.getCmp('pageBar').pageSize
								}
							});
						}
					}]
				}, {
					columnWidth : 0.25,
					items : [{
					}]
				}]
			}]
		},{
			columnWidth: .25,
			layout : 'form',
			items : [{
				fieldLabel : '人员状态',
				id : 'selectState',
				width : 100,
				xtype : 'combo',
				store : stateSimpleStore,
				valueField : 'id',
				displayField : 'name',
				mode : 'local',
				editable : false,
				triggerAction : 'all',
				hiddenName : 'personelInfo.state',
				pageSize : 5
			}, {
				layout : 'column',
				items : [{
					columnWidth : 0.25,
					items : [{}]
				}, {
					columnWidth : 0.5,
					items : [{
						xtype : 'button',
						text : '重置',
						width : 100,
						iconCls : 'icon-reset',
						handler : function() {
							selectUnitForm.form.reset();
						}
					}]
				}, {
					columnWidth : 0.25,
					items : [{}]
				}]
			}]
		}]
	});
	
	queryPersonelInfoStore = new Ext.data.JsonStore({
		url : 'personelInfo_findAll.action',
		root : 'personelInfoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [{
			name : 'idnumber',
			mapping : 'idnumber'
		},{
			name : 'name',
			mapping : 'name'
		},{
			name : 'gender',
			mapping : 'gender'
		},{
			name : 'deptid',
			mapping : 'rightDept.name'
		},{
			name : 'workstarttime',
			mapping : 'workstarttime'
		},{
			name : 'post',
			mapping : 'post'
		},{
			name : 'academic',
			mapping : 'academic'
		},{
			name : 'remark',
			mapping : 'remark'
		},{
			name : 'politicpost',
			mapping : 'politicpost'
		},{
			name : 'zhmm',
			mapping : 'zhmm'
		},{
			name : 'telno',
			mapping : 'telno'
		},{
			name : 'address',
			mapping : 'address'
		},{
			name : 'state',
			mapping : 'showstate'
		}],
		autoLoad : false
		
	});
	
	queryPersonelInfoStore.load();
	rightDeptStore.load();
//	personelTypeStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	queryPersonelInfoGrid = new Ext.grid.GridPanel({
		store : queryPersonelInfoStore,
		sm : sm,
		columns : [ sm, rowNum, {
			header : '身份证',
			dataIndex : 'idnumber',
			width : 120 
		},{
			header : '姓名',
			dataIndex : 'name',
			width : 80,
			renderer : function(value, meta, record) {
					var tempString = '<div><a href=javascript:update()><font color="red">'+ value +'</font></a></div>';
					return tempString;
				} 
		},{
			header : '性别',
			dataIndex : 'gender',
			width : 40,
			renderer : getGenderFormat
		},{
			header : '所属部门',
			dataIndex : 'deptid',
			width : 100
		},{
			header : '人员状态',
			dataIndex : 'state',
			width : 60
		},{
			header : '到本单位时间',
			dataIndex : 'workstarttime',
			width : 100,
			renderer : getStringTime
		},{
			header : '联系电话',
			dataIndex : 'telno',
			width : 80
		},{
			header : '政治面貌',
			dataIndex : 'zhmm',
			width : 60,
			renderer : getPolitics
		},{
			header : '家庭住址',
			dataIndex : 'address',
			width : 100
		},{
			header : '行政职务',
			dataIndex : 'politicpost',
			width : 100
		},{
			header : '备注',
			dataIndex : 'remark',
			width : 100
		}],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 增加新人 ',
			iconCls:'icon-add',
			handler : function() {
				addPersonelInfo();
			}
		}, '-', {
			text : '人员离职',
			iconCls:'icon-del',
			handler : function() {
				del (queryPersonelInfoGrid, queryPersonelInfoStore, "personelInfo_delete.action", "idnumber", "删除人员信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryPersonelInfoStore,
		
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'PersonelInfoGrid',
		items : [selectUnitForm, queryPersonelInfoGrid]
	});
	var divHeight = document.getElementById('PersonelInfoGrid').offsetHeight;
	var divWidth = document.getElementById('PersonelInfoGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryPersonelInfoGrid.setWidth(showQueryPanel.getWidth());
	queryPersonelInfoGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	
	addPersonelInfoForm = new Ext.FormPanel({
		title :  '添加新人员',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 320, 
		items : [{
			layout : 'column',
			items : [{
				layout : 'form',
				columnWidth : .45,
				items : [{
					name : 'personelInfo.idnumber',
					xtype : 'field',
					id : 'addInfoIdNumber',
					allowBlank : false,
					fieldLabel : '身份证号*',
					listeners: {
						blur : function(){
							//获取本地时间（年份）
							var dayDif = new Date().getFullYear();
							//获取身份证号
							var personIdnumber = this.getValue();
							if(personIdnumber.length == 15){	//判断身份证是否是15位
								var age = dayDif - 1900 - personIdnumber.substr(6,2);
								Ext.getCmp('personage').setValue(age);
							}else if(personIdnumber.length == 18){	//判断身份证是否是18位
								var age = dayDif - personIdnumber.substr(6,4);
								Ext.getCmp('personage').setValue(age);
							}else{
								Ext.Msg.alert('提示','身份证号格式错误，请仔细检查!!');
							}
						}
					},
					width : 150
				},{
					name : 'personelInfo.age',
					xtype : 'field',
					editable : false,
					fieldLabel : '年龄',
					width : 150,
					id : 'personage'
				},{
					xtype: 'combo',
		            fieldLabel : '性别*',
		            allowBlank : false,
		            store : genderSimpleStore,
					valueField : "id",
					displayField : "name",
					name : 'personelInfo.gender',
					mode : 'local',
					forceSelection : true,
					editable : false,
					triggerAction : 'all',
					width : 150
				},{
					name : 'personelInfo.workstarttime',
					xtype : 'datefield',
					allowBlank : false,
					fieldLabel : '到本单位时间*',
					format : 'Y-m-d',
					width : 150
				},{
					name : 'personelInfo.telno',
					xtype : 'field',
					allowBlank : false,
					fieldLabel : '联系电话',
					width : 150
				}]
			}, {
				layout : 'form',
				columnWidth : .55,
				items : [{
					name : 'personelInfo.name',
					xtype : 'field',
					allowBlank : false,
					fieldLabel : '人员姓名*',
					width : '85%'
				},{
					hiddenName : 'personelInfo.persontype',
					allowBlank : false,
					fieldLabel : '人员类别*',
					xtype : 'combo',
					store : personelTypeStore,
					valueField : 'id',
					displayField : 'name',
					mode : 'local',
					forceSelection : true,
					editable : false,
					triggerAction : 'all',
					pageSize : 10,
					anchor : '90%'
				},{
					fieldLabel : '所属部门*',
					xtype : 'combo',
					allowBlank : false,
					store : rightDeptStore,
					valueField : 'id',
					displayField : 'name',
					mode : 'local',
					forceSelection : true,
					editable : false,
					triggerAction : 'all',
					hiddenName : 'personelInfo.rightDept.id',
					pageSize : 10,
					anchor : '90%'
				},{
					fieldLabel : '政治面貌*',
					xtype : 'combo',
					allowBlank : false,
					store : politicsSimpleStore,
					valueField : 'id',
					displayField : 'name',
					mode : 'local',
					forceSelection : true,
					editable : false,
					triggerAction : 'all',
					hiddenName : 'personelInfo.zhmm',
					pageSize : 10,
					anchor : '90%'
				},{
					name : 'personelInfo.politicpost',
					xtype : 'field',
					fieldLabel : '行政职务',
					anchor : '90%'
				}]
			}]
		},{
			name : 'personelInfo.address',
			xtype : 'field',
			fieldLabel : '家庭住址',
			anchor : '95%'
		},{
			name : 'personelInfo.hometown',
			xtype : 'field',
			fieldLabel : '籍贯',
			anchor : '95%'
		},{
			name : 'personelInfo.remark',
			xtype : 'textarea',
			fieldLabel : '备注',
			heigth : 40,
			anchor : '95%'
		}],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addPersonelInfoForm, "personelInfo_addNewInfo.action", queryPersonelInfoStore, "添加新的人员信息")
				addPersonelInfoWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addPersonelInfoWin.hide();
				addPersonelInfoForm.form.reset();
			}
		}]

	});

	addPersonelInfoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addPersonelInfoForm
	});

	addPersonelInfo = function() {
		addPersonelInfoWin.show();
		
		Ext.getCmp("addInfoIdNumber").focus(false, 1000);
	
	};
	
	updatePersonelInfoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [{
		name : 'personelInfo.idnumber',
		mapping : 'idnumber'
	},{
		name : 'personelInfo.name',
		mapping : 'name'
	},{
		name : 'personelInfo.gender',
		mapping : 'gender'
	},{
		name : 'personelInfo.rightDept.id',
		mapping : 'rightDept.id'
	},{
		name : 'personelInfo.rightDept.name',
		mapping : 'rightDept.name'
	},{
		name : 'personelInfo.workstarttime',
		mapping : 'workstarttime'
	},{
		name : 'personelInfo.post',
		mapping : 'post'
	},{
		name : 'personelInfo.academic',
		mapping : 'academic'
	},{
		name : 'personelInfo.remark',
		mapping : 'remark'
	},{
		name : 'personelInfo.politicpost',
		mapping : 'politicpost'
	},{
		name : 'personelInfo.zhmm',
		mapping : 'zhmm'
	},{
		name : 'personelInfo.telno',
		mapping : 'telno'
	},{
		name : 'personelInfo.address',
		mapping : 'address'
	},{
		name : 'personelInfo.state',
		mapping : 'state'
	},{
		name : 'personelInfo.createtime',
		mapping : 'createtime'
	},{
		name : 'personelInfo.age',
		mapping : 'age'
	},{
		name : 'personelInfo.persontype',
		mapping : 'persontype'
	},{
		name : 'personelInfo.hometown',
		mapping : 'hometown'
	}]
	);
		
	updatePersonelInfoForm = new Ext.FormPanel({
		title : '请输入您要修改的人员信息',
		frame : true,
		waitMsgTarget : true,
		reader : updatePersonelInfoReader,
		items : [{
			layout : 'column',
			items : [{
				layout : 'form',
				columnWidth : .45,
				items : [{
					name : 'personelInfo.idnumber',
					xtype : 'field',
					allowBlank : false,
					fieldLabel : '身份证号*',
					width : 150
				},{
					name : 'personelInfo.age',
					xtype : 'field',
					allowBlank : false,
					fieldLabel : '年龄*',
					width : 150
				},{
					xtype: 'combo',
		            fieldLabel : '性别*',
		            allowBlank : false,
		            store : genderSimpleStore,
					valueField : "id",
					displayField : "name",
					hiddenName : 'personelInfo.gender',
					mode : 'local',
					forceSelection : true,
					editable : false,
					triggerAction : 'all',
					pageSize : 10,
					width : 150
				},{
					name : 'personelInfo.workstarttime',
					xtype : 'datefield',
					fieldLabel : '到本单位时间*',
					allowBlank : false,
					format : 'Y-m-d',
					width : 150
				},{
					name : 'personelInfo.telno',
					xtype : 'field',
					allowBlank : false,
					fieldLabel : '联系电话',
					width : 150
				}]
			}, {
				layout : 'form',
				columnWidth : .55,
				items : [{
					name : 'personelInfo.name',
					xtype : 'field',
					allowBlank : false,
					fieldLabel : '人员姓名*',
					anchor : '90%'
				},{
					hiddenName : 'personelInfo.persontype',
					allowBlank : false,
					fieldLabel : '人员类别*',
					xtype : 'combo',
					store : personelTypeStore,
					valueField : 'id',
					displayField : 'name',
					mode : 'local',
					forceSelection : true,
					editable : false,
					triggerAction : 'all',
					pageSize : 10,
					anchor : '90%'
				},{
					fieldLabel : '所属部门*',
					xtype : 'combo',
					allowBlank : false,
					store : rightDeptStore,
					valueField : 'id',
					displayField : 'name',
					mode : 'local',
					forceSelection : true,
					editable : false,
					triggerAction : 'all',
					hiddenName : 'personelInfo.rightDept.id',
					pageSize : 10,
					anchor : '90%'
				},{
					fieldLabel : '政治面貌*',
					xtype : 'combo',
					allowBlank : false,
					store : politicsSimpleStore,
					valueField : 'id',
					displayField : 'name',
					mode : 'local',
					forceSelection : true,
					editable : false,
					triggerAction : 'all',
					hiddenName : 'personelInfo.zhmm',
					pageSize : 10,
					anchor : '90%'
				},{
					name : 'personelInfo.politicpost',
					xtype : 'field',
					fieldLabel : '行政职务',
					anchor : '90%'
				}]
			}]
		},{
			name : 'personelInfo.address',
			xtype : 'field',
			fieldLabel : '家庭住址',
			anchor : '95%'
		},{
			name : 'personelInfo.hometown',
			xtype : 'field',
			fieldLabel : '籍贯',
			anchor : '95%'
		},{
			name : 'personelInfo.remark',
			xtype : 'textarea',
			fieldLabel : '备注',
			heigth : 40,
			anchor : '95%'
		},{
			xtype : 'hidden',
			fieldLabel : '状态',
			name : 'personelInfo.state'
		},{
			xtype : 'hidden',
			fieldLabel : '信息创建时间',
			name : 'personelInfo.createtime'
		}],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updatePersonelInfoForm, "personelInfo_update.action", queryPersonelInfoStore, "修改人员信息")
				updatePersonelInfoWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updatePersonelInfoWin.hide();
				updatePersonelInfoForm.form.reset();
			}
		}]
	});

	updatePersonelInfoWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updatePersonelInfoForm
	});

	update = function() {
		_record = queryPersonelInfoGrid.getSelectionModel().getSelected();
		flag = queryPersonelInfoGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updatePersonelInfoWin.show();
					
			updatePersonelInfoForm.getForm().load({
				url : 'personelInfo_findById.action?personelInfo.idnumber='+ _record.get('idnumber'),
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
	Ext.getCmp("selectIdNumber").focus(false, 1000);
 });
 

