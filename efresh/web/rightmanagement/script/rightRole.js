var rightRoleStore = null;
var updateForm = null;
var addForm = null;
var add = null;
var update = null;
var del = null;
var sm = null;
var rightRoleGrid = null;
var win = null;
// var fun = function(store1,store2){
// alert('=================');
// store1.each(function(record){
// store2.each(function(rec){
// // alert('b');
// // alert(record.get('id') +'==='+rec.get('id'));
// if(record.get('id') == rec.get('id'))
// {
// alert('相等');
// store1.remove(record);
// }
// })
// }
// )};
Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	// /////////////////////////////////////////////////////////////////////////////////////
	var firstMenuStore = new Ext.data.GroupingStore({
				url : 'rightMenu_findFirstMenu.action',
				reader : new Ext.data.JsonReader({
							root : 'firstMenuItems',
							id : 'id'
						}, ['id', 'name', 'qtip', 'descn', 'image', 'theSort',
								{
									name : 'rightMenu',
									mapping : 'rightMenu.name'
								}]),
				sortInfo : {
					field : 'theSort',
					direction : "ASC"
				},
				groupField : 'rightMenu'
			});
	// 创建用于展示的grid
	var sm1 = new Ext.grid.CheckboxSelectionModel();
	var firstGrid = new Ext.grid.GridPanel({
				ddGroup : 'secondGridDDGroup',
				enableDragDrop : true,
				stripeRows : true,
				// autoExpandColumn : 'transducerno',
				store : firstMenuStore,
				sm : sm1,
				title : '可用菜单',
				id : 'QueryGrid',
				columns : [sm1, {
							header : '菜单名称',
							dataIndex : 'name',
							sortable : true,
							width : 100
						}, {
							header : '菜单备注',
							dataIndex : 'descn',
							sortable : true,
							width : 100
						}, {
							header : '',
							dataIndex : 'rightMenu',
							sortable : true,
							width : 50
						}],
				view : new Ext.grid.GroupingView({
							groupTextTpl : '{text}(共{[values.rs.length]}条)',
							enableGroupingMenu : false,
							showGroupName : true,
							startCollapsed : false,
							forceFit : true,
							hideGroupedColumn : true,
							startCollapsed : true
						})
			});
	// var secondMenuStore = new Ext.data.JsonStore({
	// root : 'secondMenuItems',
	// reader : new Ext.data.JsonReader({
	// id : 'id'
	// }, ['id','name',
	// 'qtip','descn','image','theSort',{name:'rightMenu',mapping:'rightMenu.name'}
	// ]),
	// sortInfo:{field: 'theSort', direction: "ASC"},
	// groupField:'rightMenu'
	// });

	//
	var secondMenuStore = new Ext.data.GroupingStore({
				reader : new Ext.data.JsonReader({
							root : 'secondMenuItems',
							id : 'id'
						}, ['id', 'name', 'qtip', 'descn', 'image', 'theSort',
								{
									name : 'rightMenu',
									mapping : 'rightMenu.name'
								}]),
				sortInfo : {
					field : 'theSort',
					direction : "ASC"
				},
				groupField : 'rightMenu'
			});
	//
	var sm2 = new Ext.grid.CheckboxSelectionModel();
	var secondGrid = new Ext.grid.GridPanel({
				ddGroup : 'firstGridDDGroup',
				enableDragDrop : true,
				stripeRows : true,
				sm : sm2,
				store : secondMenuStore,
				id : 'QueryGrid1',
				title : '已分配菜单',
				columns : [sm2, {
							header : '菜单名称',
							dataIndex : 'name',
							sortable : true,
							width : 100
						}, {
							header : '菜单备注',
							dataIndex : 'descn',
							sortable : true,
							width : 100
						}, {
							header : '',
							dataIndex : 'rightMenu',
							sortable : true,
							width : 50
						}],
				view : new Ext.grid.GroupingView({
							groupTextTpl : '{text}(共{[values.rs.length]}条)',
							enableGroupingMenu : false,
							showGroupName : true,
							startCollapsed : false,
							forceFit : true,
							hideGroupedColumn : true,
							startCollapsed : true
						})

			});
	var displayPanel = new Ext.Panel({
				width : 580,
				height : 420,
				layout : 'hbox',
				// applyTo : 'panel',
				defaults : {
					flex : 1
				}, // auto stretch
				layoutConfig : {
					align : 'stretch'
				},
				items : [firstGrid, secondGrid]
			});

	// 创建修改窗口

	var updateWinShow = function(winTitle, roleId) {

		if (win != null) {

			win.roleId = roleId;
			// firstMenuStore.reload();
			firstMenuStore.proxy = new Ext.data.HttpProxy({
				// 根据roleId找到 rightRoleUser 对象
				url : 'rightMenu_findFirstMenu.action?roleId=' + roleId // see
					// options
					// parameter
					// for
					// Ext.Ajax.request
				});
			firstMenuStore.load();
			win.setTitle(winTitle);
			secondMenuStore.proxy = new Ext.data.HttpProxy({
				// 根据roleId找到 rightRoleUser 对象
				url : 'rightMenuRole_findByRoleIdAll.action?rightMenuRole.roleId=' + roleId // see
					// options
					// parameter
					// for
					// Ext.Ajax.request
				});
			secondMenuStore.load();
			win.show();
		} else {
			win = new Ext.Window({
						title : winTitle,
						layout : 'form',
						width : 600,
						height : 450,
						plain : true,
						closable : true,
						closeAction:'hide',
						renderTo : Ext.getBody(),
						items : displayPanel,
						roleId : roleId
//						buttons : [{
//									text : '完成',
//									iconCls : 'icon-save',
//									handler : function() {
//										win.hide();
//									}
//								}]
					});
			displayPanel.renderTo = displayPanel;
			var firstGridDropTargetEl = firstGrid.getView().scroller.dom;
			var firstGridDropTarget = new Ext.dd.DropTarget(
					firstGridDropTargetEl, {
						ddGroup : 'firstGridDDGroup',
						notifyDrop : function(ddSource, e, data) {
							var records = ddSource.dragData.selections;
							var delData = '';

							for (var i = 0; i < records.length; i++) {
								var r = records[i];// 选中的记录
								var tag = firstMenuStore.findBy(function(
												record, id) {
											// alert('record->'+record.get('id')+'r->'+r.get('id'))
											if (record.get('id') == r.get('id')) {
												return true;
											}
										}) // 判断是否已经存在
								if (tag == -1) {
									ddSource.grid.store.remove(r);
									firstGrid.store.add(r);
								} else {
									ddSource.grid.store.remove(r);
								}
								if (delData.length == 0) {
									delData = r.get('id');
								} else {
									delData = delData + ',' + r.get('id');
								}
							}
							Ext.Ajax.request({
								url : "rightMenuRole_del.action?rightMenuRole.roleId ="
										+ win.roleId,
								params : {
									delData : delData
								},
								// failure : function() {
								// Ext.Msg.alert('提示', '删除菜单失败');
								// }
								success : function(response, options) {
									var obj = Ext.util.JSON
											.decode(response.responseText);
									if (obj.success == false) {
										Ext.Msg.alert('提示', '删除菜单失败');
									}else{
										Ext.Msg.alert('提示', '删除菜单成功');
									}
								}
							});
							firstGrid.store.sort('theSort', 'ASC');
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
							for (var i = 0; i < records.length; i++) {
								var r = records[i];

								var tag = secondMenuStore.findBy(function(
												record, id) {
											// alert(record.get('roleId')+"******"+r.get('id'));
											if (record.get('id') == r.get('id'))
												return true;
										}) // 判断是否已经存在
								// ?????????????
								if (tag != -1) {
									Ext.MessageBox.alert('提示！', '该角色已经分配');
									ddSource.grid.store.remove(r);
									// ddSource.grid.store.remove(r);
									// secondGrid.store.add(r);
									if (addData.length == 0) {
										addData = 'null';
									} else {
										if (addData != 'null') {
											addData = addData + ',' + 'null';
										}
									}
								} else {
									ddSource.grid.store.remove(r);
									secondGrid.store.add(r);
									if (addData.length == 0) {
										addData = r.get('id');
									} else {
										addData = addData + ',' + r.get('id');
									}
								}
							}
							// alert('c'+addData);
							Ext.Ajax.request({
								url : "rightMenuRole_add.action?rightMenuRole.roleId ="
										+ win.roleId,
								params : {
									delData : addData
								},
								// success:function(){
								// alert('success0');
								// secondGrid.store.reload();
								// alert('success');
								// },
								// failure : function() {
								// Ext.Msg.alert('提示', '增加菜单失败');
								// }
								success : function(response, options) {
									var obj = Ext.util.JSON
											.decode(response.responseText);
									if (obj.success == false) {
										Ext.Msg.alert('提示', '添加菜单失败');
									}else{
										Ext.Msg.alert('提示', '添加菜单成功');
									}
								}
							});
							// secondGrid.store.sort('name', 'ASC');
							return true;
						}
					});

			win.show({
						scope : this
					});
		}
	};

	// 分配角色操作
	var assignMenu = function() {

		var _record = rightRoleGrid.getSelectionModel().getSelected();
		var flag = rightRoleGrid.getSelectionModel().getSelections();

		if (flag.length == 1) {
			var descn = _record.get('descn');
			var name = _record.get('name');
			var roleId = _record.get('id');
			winTitle = "角色名：{" + name + "}备注：{" + descn + "}的角色分配菜单";
			// firstMenuStore.load();
			firstMenuStore.proxy = new Ext.data.HttpProxy({
				url : 'rightMenu_findFirstMenu.action?roleId=' + roleId // see
					// options
					// parameter
					// for
					// Ext.Ajax.request
				});
			firstMenuStore.load();
			secondMenuStore.proxy = new Ext.data.HttpProxy({
				url : 'rightMenuRole_findByRoleIdAll.action?rightMenuRole.roleId='
						+ roleId // see
					// options
					// parameter
					// for
					// Ext.Ajax.request
			});
			// alert("roleId:->"+roleId);
			secondMenuStore.load({
						callback : function(records, options, success) {
							// fun(firstMenuStore,secondMenuStore);
							updateWinShow(winTitle, roleId);
						}
					});

			// fun(store,secondGridStore);
			// alert(id)

		} else
			Ext.Msg.alert('提示', '请选择一个角色！');
	};

	// ////////////////////////////////////////////////////////////////////////////////////
	rightRoleStore = new Ext.data.JsonStore({
				url : 'rightRole_findRightRoleByPage.action',
				root : 'rightRoleItems',
				totalProperty : 'rightRoleNum',
				fields : ['id', 'descn', 'name']
			});
	rightRoleStore.load({
				params : {
					start : 0,
					limit : 15
				}
			});
	updateReader = new Ext.data.JsonReader({
				root : 'updateReaderItems',
				successProperty : '@success'
			}, [{
						name : 'rightRole.id',
						mapping : 'id'
					}, {
						name : 'rightRole.name',
						mapping : 'name'
					}, {
						name : 'rightRole.descn',
						mapping : 'descn'
					}]);
	updateForm = new Ext.FormPanel({
				reader : updateReader,
				frame : true,
				bodyStyle : 'padding:5px 5px 0',
				autoWidth : true,
				defaults : {
					labelWidth : 60,
					labelAlign : 'right'
				},
				waitMsgTarget : true,
				items : [{
							xtype : 'hidden',
							name : 'rightRole.id'
						}, {
							fieldLabel : '角色名称',
							name : 'rightRole.name',
							xtype : 'textfield',
							width : '100%',
							allowBlank : false,
							id:'update_roleName'
						}, {
							fieldLabel : '描述',
							name : 'rightRole.descn',
							width : '100%',
							xtype : 'textarea',
							height :140,
							allowBlank : false
						}],
			/*	buttons : [{
							text : '修改',
							iconCls : 'icon-save',
							disabled : false,
							handler : function() {
								if (updateForm.form.isValid()) {
									updateForm.form.submit({
												url : 'rightRole_update.action',
												success : function(form, action) {
													rightRoleStore.reload();
													Ext.Msg
															.alert('提示',
																	'保存成功！');
													updateWin.hide();
													updateForm.getForm()
															.reset();
												},
												failure : function(form, action) {
													updateWin.hide();
													updateForm.getForm()
															.reset();
													Ext.Msg
															.alert('提示',
																	'保存失败！');
												},
												waitMsg : '正在保存数据，稍后...'
											});
								} else {
									if (!updateForm.form.isValid())
										Ext.Msg.alert('提示', '请填写完成再提交!');
								}
							}
						}, {
							text : '取消',
							iconCls : 'li-cancel',
							handler : function() {
								updateWin.hide();
								updateForm.getForm().reset();
							}
						}]*/
			});
	addForm = new Ext.FormPanel({
				frame : true,
				// applyTo : 'rightUserFormDiv',
				bodyStyle : 'padding:5px 5px 0',
				autoWidth : true,
				defaults : {
					labelWidth : 60,
					labelAlign : 'right'
					// width:200
				},
				waitMsgTarget : true,
				items : [{
							xtype : 'hidden',
							name : 'rightRole.id'
						}, {
							fieldLabel : '角色名称',
							name : 'rightRole.name',
							xtype : 'textfield',
							width : '100%',
							allowBlank : false,
							id:'add_roleName'
						}, {
							fieldLabel : '描述',
							name : 'rightRole.descn',
							width : '100%',
							xtype : 'textarea',
							height :140,
							allowBlank : false
						}],
				buttons : [{
							text : '添加',
							iconCls : 'kbgbtn',
							disabled : false,
							handler : function() {
								if (addForm.form.isValid()) {
									addForm.form.submit({
												url : 'rightRole_add.action',
												success : function(form, action) {
													addForm.getForm().reset();
													addWin.hide();
													rightRoleStore.reload();
													Ext.Msg
															.alert('提示',
																	'保存成功！');
												},
												failure : function(form, action) {
													rightRoleStore.reload();
													addForm.getForm().reset();
													addWin.hide();
													Ext.Msg
															.alert('提示',
																	'保存失败！');
												},
												waitMsg : '正在保存数据，稍后...'
											});
								} else {
									if (!addForm.form.isValid())
										Ext.Msg.alert('提示', '请填写完成再提交!');
								}
							}
						}, {
							text : '取消',
							iconCls : 'li-cancel',
							handler : function() {
								addWin.hide();
								addForm.getForm().reset();
							}
						}]
			});
	//		
	addWin = new Ext.Window({
				title : '添加记录',
				layout : 'form',
				width : 400,
				plain : true,
				closable : true,
				closeAction:'hide',
				items : addForm
			});
	updateWin = new Ext.Window({
				title : '修改记录',
				layout : 'form',
				width : 400,
				plain : true,
				closable : true,
				closeAction:'hide',
				items : updateForm
			})
	// 插入 数据
	add = function() {
		addWin.show();
		Ext.getCmp("add_roleName").focus(true,true);
	}

	update = function() {
		var record = rightRoleGrid.getSelectionModel().getSelected();
		var selections = rightRoleGrid.getSelectionModel().getSelections();
		if (selections.length == 1) {
			updateWin.show();
			
			updateForm.getForm().load({
				url : 'rightRole_findRightRoleById.action?rightRole.id='
						+ record.get('id'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('提示', '载入角色信息失败');
				},
				success : function() {
					rightRoleStore.reload();
				}
			});
			Ext.getCmp("update_roleName").focus(true,true);
		} else {
			Ext.Msg.alert('提示', '请您选择一条记录');
		}
	}
	// 删除操作
	del = function() {
		// 收集已经被选中的记录
		var _record = rightRoleGrid.getSelectionModel().getSelections();
		var flag = rightRoleGrid.getSelectionModel().getSelected();
		var jsonData = "";
		if (flag) {
			Ext.MessageBox.confirm('确认删除', '你确认要删除选中数据吗？', function(btn) {
						if (btn == "yes") {
							for (var i = 0; i < _record.length; i++) {
								var ss = _record[i].get("id");
								if (i == 0) {
									jsonData = jsonData + ss;
								} else {
									jsonData = jsonData + "," + ss;
								}
							}
							// 向Action中传输需要删除的记录的id的拼接字符串
							Ext.Ajax.request({
										url : "rightRole_del.action",
										params : {
											delData : jsonData
										},
										success : function(response, options) {
											var obj = Ext.util.JSON
													.decode(response.responseText);
											if (obj.success == true) {
												Ext.Msg.alert('提示', '删除角色成功');
												rightRoleStore.reload();
											} else {
												Ext.Msg
														.alert('提示',
																'还存在拥有该角色的人员信息，请不要删除该角色');
											}
										}
									});
						}
					});
		} else {
			Ext.Msg.alert('提示', '请选择要删除的角色信息！');
		}
	};
	sm = new Ext.grid.CheckboxSelectionModel();
	// 角色列表
	rightRoleGrid = new Ext.grid.GridPanel({
				renderTo : 'rightRoleGridDiv',
				store : rightRoleStore,
				title : '角色管理',
				stripeRows : true,
				// shim : true,
				id : '',
				width : '100%',
				// height:510,
				sm : sm,
				// autoWidth: true,
				columns : [sm, {
							header : '角色名称',
							dataIndex : 'name',
							renderer:function(value){
								return "<a href=javascript:update() title = '修改'>" + value + "</a>";
							},
							width : 206
						},{
							header : '角色描述',
							dataIndex : 'descn',
							width :500
						},
						{
							header : '操作',
							dataIndex : 'id',
							width :200,
							renderer : function(value, meta, record) {						
								var tempString = '<a href="rightMenu2_showMenu.action?rightRole.id='+value+'" class="mayubtn3" style="float: none;margin: 0 auto">修改</a>';
								return tempString;
								}
						}
						],
				// bodyStyle : 'width:100%;',
				tbar : [{
					id : '',
					text : ' 添加 ',
					tooltip : '新建一个表单',
					iconCls : 'icon-add',
					handler : function() {
						add();
					}
						// ,width:'100%'
					}/*, '-', {
					id : '',
					text : '修改',
					tooltip : '修改',
					iconCls : 'icon-edit',
					handler : function() {
						update();
					}
				}, '-'*/, {
					id : '',
					text : '删除',
					tooltip : '删除',
					iconCls : 'icon-del',
					handler : function() {
						del();
					}
				}/*, '-', {
					id : '',
					text : '分配菜单',
					tooltip : '给角色分配菜单',
					iconCls : 'li-mouse',
					handler : function() {
						assignMenu();
					}
				}*/],
				bbar : [{
							// width : '100%',
							xtype : 'paging',
							pageSize : 15,
							store : rightRoleStore,
							displayMsg : '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
							plugins : [new Ext.ux.plugins.PageComboResizer()],// 动态分页大小
							displayInfo : true,
							emptyMsg : "没有记录"
						}]
			});

	var divHeight = document.getElementById('rightRoleGridDiv').offsetHeight;
	rightRoleGrid.setHeight(divHeight);

});
