var rightUserStore = null;
var sexStore= null;
var usableStore = null;
var deptStore = null;
var mainPanel = null;
var updateForm = null;
var addForm = null;
var add = null;
var update = null;
var del = null;
var sm = null;
var rightUserGrid = null;
var win;
var openUser = null;
var assignRole =null;

//var fun = function(store1,store2){
////	alert('a');
//	store1.each(function(record){
//		store2.each(function(rec){
////			alert('b');
////			alert(record.get('id') +'==='+rec.get('id'));
//			if(record.get('id') == rec.get('id'))
//			{
////				alert('111');
//				store1.remove(record);
//			}
//		})
//	}
//)};

Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('rightmanagement/rightUser.jsp');
	/////////////////////////////////////////////////////////////////////
	rightRoleStore = new Ext.data.JsonStore({
//				url : 'rightRole_findAll.action',
				root : 'rightRoleItems',
				fields : ['id','descn', 'name']
			});
			// 加载store
		
			// 创建用于展示的grid
			var sm1 = new Ext.grid.CheckboxSelectionModel();
			var firstGrid = new Ext.grid.GridPanel({
						ddGroup : 'secondGridDDGroup',
						enableDragDrop : true,
						stripeRows : true,
						// autoExpandColumn : 'transducerno',
						store : rightRoleStore,
						sm:sm1,
						title : '可用角色',
						id : 'QueryGrid',
						columns : [sm1,{
									header : '角色名称',
									dataIndex : 'name',
									sortable : true,
									width : 100
								}, {
									header : '角色备注',
									dataIndex : 'descn',
									sortable : true,
									width : 100
								}]
					});
					var secondGridStore = new Ext.data.JsonStore({
						root : 'rightRoleItems2',
						fields : ['id','descn', 'name']
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
									header : '角色名',
									dataIndex : 'name',
									sortable : true,
									width : 100
								}, {
									header : '角色备注',
									dataIndex : 'descn',
									sortable : true,
									width : 100
								}]
					
					});
			var displayPanel = new Ext.Panel({
						width : 580,
						height : 420,
						layout : 'hbox',
						//applyTo : 'panel',
						defaults : {
							flex : 1
						}, // auto stretch
						layoutConfig : {
							align : 'stretch'
						},
						items : [firstGrid, secondGrid]
					});
					
					
					
	// 分配角色操作
	assignRole = function() {
		
		var _record = rightUserGrid.getSelectionModel().getSelected();
		var flag = rightUserGrid.getSelectionModel().getSelections();
		
		if(flag.length == 1 )
		{
			var userName = _record.get('username');
			var trueName = _record.get('truename');
			var userId = _record.get('id');
			winTitle = "姓名：{"+trueName+"}为账号：{"+userName+"}的用户分配角色";
			rightRoleStore.proxy = new Ext.data.HttpProxy({
						    url: 'rightRole_findFirstRole.action?userId='+userId // see options parameter for Ext.Ajax.request
						});
			rightRoleStore.load();
			secondGridStore.proxy = new Ext.data.HttpProxy({
						    url: 'rightRoleUser_findByUserIdAll.action?userId='+userId // see options parameter for Ext.Ajax.request
						});
//						alert("userId:->"+userId);
			secondGridStore.load();
//			secondGridStore.on('load',function(){
////				alert(rightRoleStore.getCount()+'bb'+secondGridStore.getCount());
//				fun(rightRoleStore,secondGridStore);
//			})
			
//			alert(id)
			updateWinShow(winTitle,userId);
		}
		else Ext.Msg.alert('提示', '请选择一个用户！');
	};

	// 创建修改窗口
	var updateWinShow = function(winTitle,userId) {
		
		if (win!=null) {
			win.show();
			win.userId = userId;
//			rightRoleStore.reload();
			rightRoleStore.proxy = new Ext.data.HttpProxy({
						    url: 'rightRole_findFirstRole.action?userId='+userId // see options parameter for Ext.Ajax.request
						});
			rightRoleStore.load();
			win.setTitle(winTitle);
			secondGridStore.proxy = new Ext.data.HttpProxy({
							//根据userId找到   rightRoleUser 对象
						    url: 'rightRoleUser_findByUserIdAll?userId='+userId // see options parameter for Ext.Ajax.request
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
					userId:userId
//					buttons : [{
//							text : '完成',
//							iconCls:'icon-save',
//							handler : function() {
//								win.hide();
//							}
//						}]
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
								var tag =rightRoleStore.findBy(function(record,id){
//									alert('record->'+record.get('id')+'r->'+r.get('id'))
									if(record.get('id')==r.get('id')){
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
										delData = r.get('id');
									}else
									{
										delData = delData + ','+r.get('id');
									}
							}
							Ext.Ajax.request({
										url : "rightRoleUser_del.action?userId ="+win.userId,
										params : {
											delData : delData
										},
//										failure : function() {
//											Ext.Msg.alert('提示', '删除角色失败');
//										}
										success : function(response, options) {
											var obj = Ext.util.JSON.decode(response.responseText);
											if(obj.success == false){
												Ext.Msg.alert('提示', '删除角色失败');
											}else{
												Ext.Msg.alert('提示', '删除角色成功');
											}
										}
									});
//							firstGrid.store.sort('name', 'ASC');
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
//									alert(record.get('roleId')+"******"+r.get('id'));
									if(record.get('id')==r.get('id'))
									return true;
								})  //判断是否已经存在
								//?????????????
								if(tag !=-1){
									Ext.MessageBox.alert('提示！','该角色已经分配');
									ddSource.grid.store.remove(r);
//									ddSource.grid.store.remove(r);
//									secondGrid.store.add(r);
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
										addData = r.get('id');
									}else
									{
										addData =addData +','+ r.get('id');
									}
								}
							}
//							alert('c'+addData);

							Ext.Ajax.request({
										url : "rightRoleUser_add.action?userId ="+win.userId,
										params : {
											delData : addData
										},
//										failure : function() {
//											Ext.Msg.alert('提示', '增加角色失败');
//										}
										success : function(response, options) {
											var obj = Ext.util.JSON.decode(response.responseText);
											if(obj.success == false){
												Ext.Msg.alert('提示', '添加角色失败');
											}else{
												Ext.Msg.alert('提示', '添加角色成功');
											}
										}
									});
//							secondGrid.store.sort('name', 'ASC');
							return true;
						}
					});
		
		win.show({scope:this});
		}
	};
	//////////////////////////////////////////////////////////////////////
	
	
	
	rightUserStore = new Ext.data.JsonStore({
				url : 'rightUser_findRightUserByPage.action',
				root : 'rightUserItems',
				totalProperty : 'rightUserNum',
//				fields : ['id','truename', 'username', 'email', 'descn', 'sex',
//						'birthday', 'tel', 'mobile', 'duty',
//						'username', 'rightDept.name', 'usable','rightUser.truename',
//						'rightDept.id']
					fields : ['id','truename', 'username', 'email', 'descn', 'sex',
						'birthday', 'tel', 'mobile', 'duty',
						'username', 'rightDept', 'usable','rightUser',
						'rightDept.id']
			});
	rightUserStore.load({
				params : {
					start : 0,
					limit : 15
				}
			});

	sexStore = new Ext.data.JsonStore({
		fields:['sex'],
		data:[{sex:'男'},{sex:'女'}]
	});
	usableStore = new Ext.data.JsonStore({
		fields:['value','usable'],
		data:[{value:0,usable:'注销'},{value:1,usable:'可用'}]
	});
	deptStore = new Ext.data.JsonStore({
				autoLoad : true,
				url : 'rightDept_findLeafDept.action',
				root : 'rightDeptItems',
				fields : ['id', 'name']
			});
	updateReader = new Ext.data.JsonReader({
						root : 'updateReaderItems',
						successProperty : '@success'
					}, [{name:'rightUser.id',mapping:'id'},
						{name:'rightUser.truename',mapping:'truename'},
						{name:'rightUser.username',mapping:'username'},
						{name:'rightUser.email',mapping:'email'},
						{name:'rightUser.descn',mapping:'descn'},
						{name:'rightUser.sex',mapping:'sex'},
						{name:'rightUser.birthday',mapping:'birthday'},
						{name:'rightUser.tel',mapping:'tel'},
						{name:'rightUser.mobile',mapping:'mobile'},
						{name:'rightUser.duty',mapping:'duty'},
						{name:'rightUser.username',mapping:'username'},
						{name:'rightUser.rightDept.name',mapping:'rightDept.name'},
						{name:'rightUser.usable',mapping:'usable'},
						{name:'rightUser.rightDept.id',mapping:'rightDept.id'},
						{name:'rightUser.password',mapping:'password'}
						]);	
	updateForm = new Ext.FormPanel({
				reader:updateReader,
				frame : true,
				bodyStyle : 'padding:5px 5px 0',
				autoWidth : true,
				defaults : {
					labelWidth : 60,
					labelAlign : 'right'
				},
				waitMsgTarget : true,
				items : [{
							layout : 'column',
							items : [{
										columnWidth : .5,
										layout : 'form',
										items : [{
													xtype:'hidden',
													name:'rightUser.id'
											},{
												xtype:'hidden',
												name:'rightUser.password'
											},{
													fieldLabel : '姓名 *',
													name : 'rightUser.truename',
													xtype : 'textfield',
													width : 200,
													allowBlank : false,
													id:'update_truename'
												}, {
													xtype : 'combo',
													store : sexStore,
													width : 200,
													valueField : "sex",
													displayField : "sex",
													// 数据是在本地
													mode : 'local',
													forceSelection : true,// 必须选择一项
													emptyText : '请选择性别...',// 默认值
													hiddenName : 'rightUser.sex',// hiddenName才是提交到后台的input的name
													editable : false,// 不允许输入
													triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
													allowBlank : false,// 该选项值不能为空
													fieldLabel : '性别 *'
												}, {
													fieldLabel : '账号 *',
													name : 'rightUser.username',
													xtype : 'textfield',
													width : 200,
													allowBlank : false
												}, {
													fieldLabel : '部门 *',
													xtype : 'combo',
													width : 200,
													store : deptStore,
													valueField : "id",
													displayField : "name",
													mode : 'local',
													forceSelection : true,// 必须选择一项
													emptyText : '请选择部门...',// 默认值
													hiddenName : 'rightUser.rightDept.id',// hiddenName才是提交到后台的input的name
													editable : false,// 不允许输入
													triggerAction : 'all',
//													id : '',
													allowBlank : false
												}, {
													xtype : 'combo',
													store : usableStore,
													width : 200,
													valueField : "value",
													displayField : "usable",
													// 数据是在本地
													mode : 'local',
													forceSelection : true,// 必须选择一项
													emptyText : '请选择可用状态...',// 默认值
													hiddenName : 'rightUser.usable',// hiddenName才是提交到后台的input的name
													editable : false,// 不允许输入
													triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
													allowBlank : false,// 该选项值不能为空
													fieldLabel : '状态 *'
//													id : ''
												}]
									}, {
										columnWidth : .5,
										layout : 'form',
										items : [{
													fieldLabel : '职务',
													xtype : 'textfield',
													width : 200,
													name : 'rightUser.duty',
													allowBlank : true
												}, {
													xtype : 'textfield',
													width : 200,
													fieldLabel : '办公电话',
													name : 'rightUser.tel',
													allowBlank : true
//												}, {
//													fieldLabel : '手机号',
//													xtype : 'textfield',
//													width : 200,
//													name : 'rightUser.mobile',
//													allowBlank : true,
//													id : ''
												}, {
													fieldLabel : '电子邮箱',
													xtype : 'textfield',
													width : 200,
													name : 'rightUser.email',
													allowBlank : true,
													id : ''
												}, {
													html:'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;带*的文本框为必填内容'													
												}]
									}]
						}],
				buttons : [{
							text : '修改',
							iconCls:'icon-save',
							disabled : false,
							handler : function() {
								if (updateForm.form.isValid()) {
									updateForm.form.submit({
												url : 'rightUser_update.action',
												success : function(form, action) {
													rightUserStore.reload();
													Ext.Msg.alert('提示','修改人员信息成功！');
													updateWin.hide();
													updateForm.getForm().reset();
												},
												failure : function(form, action) {
													updateWin.hide();
													updateForm.getForm().reset();
													Ext.Msg.alert('提示','该用户的账户或姓名已经存在，请重新修改该用户！');
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
							iconCls:'li-cancel',
							handler : function() {
								updateWin.hide();
								updateForm.getForm().reset();
							}
						}]
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
							layout : 'column',
							items : [{
										columnWidth : .5,
										layout : 'form',
										items : [{
													fieldLabel : '姓名 *',
													name : 'rightUser.truename',
													xtype : 'textfield',
													width : 200,
													allowBlank : false,
													id:'add_truename'
												}, {
													xtype : 'combo',
													store : sexStore,
													width : 200,
													valueField : "sex",
													displayField : "sex",
													// 数据是在本地
													mode : 'local',
													forceSelection : true,// 必须选择一项
													emptyText : '请选择性别...',// 默认值
													hiddenName : 'rightUser.sex',// hiddenName才是提交到后台的input的name
													editable : false,// 不允许输入
													triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
													allowBlank : false,// 该选项值不能为空
													fieldLabel : '性别 *',
													value:'男'
//													id : ''
												}, {
													fieldLabel : '账号 *',
													name : 'rightUser.username',
													xtype : 'textfield',
													width : 200,
													allowBlank : false
												}, {
													fieldLabel : '部门 *',
													xtype : 'combo',
													width : 200,
													store : deptStore,
													valueField : 'id',
													displayField : 'name',
													mode : 'local',
													forceSelection : true,// 必须选择一项
													emptyText : '请选择部门...',// 默认值
													hiddenName : 'rightUser.rightDept.id',// hiddenName才是提交到后台的input的name
													editable : false,// 不允许输入
													triggerAction : 'all',
//													id : '',
													allowBlank : false

												}, {
													xtype : 'combo',
													store : usableStore,
													width : 200,
													valueField : 'value',
													displayField : 'usable',
													// 数据是在本地
													mode : 'local',
													forceSelection : true,// 必须选择一项
													emptyText : '请选择活动状态...',// 默认值
													hiddenName : 'rightUser.usable',// hiddenName才是提交到后台的input的name
													editable : false,// 不允许输入
													triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
													allowBlank : false,// 该选项值不能为空
													fieldLabel : '状态 *',
													value:0
												}]
									}, {
										columnWidth : .5,
										layout : 'form',
										items : [{
													fieldLabel : '职务',
													xtype : 'textfield',
													width : 200,
													name : 'rightUser.duty',
													allowBlank : true
												}, {
													xtype : 'textfield',
													width : 200,
													fieldLabel : '办公电话',
													name : 'rightUser.tel',
													allowBlank : true
//												}, {
//													fieldLabel : '手机号',
//													xtype : 'textfield',
//													width : 200,
//													name : 'rightUser.mobile',
//													allowBlank : true
//													id : ''
												}, {
													fieldLabel : '电子邮箱',
													xtype : 'textfield',
													width : 200,
													name : 'rightUser.email',
													allowBlank : true
//													id : ''
												},{
												html:'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;带*的文本框为必填内容'													
												}]
									}]
						}],
				buttons : [{
							text : '添加',
							iconCls:'icon-save',
							disabled : false,
							handler : function() {
								if (addForm.form.isValid()) {
									addForm.form.submit({
												url : 'rightUser_add.action',
												success : function(form, action) {
													addForm.getForm().reset();
													addWin.hide();	
													rightUserStore.reload();												
													Ext.Msg.alert('提示','增加人员信息成功！');													
												},
												failure : function(form, action) {
													rightUserStore.reload();
													addForm.getForm().reset();
													addWin.hide();													
													Ext.Msg.alert('提示','该用户的账户或姓名已经存在，请重新添加新用户！');
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
							iconCls:'li-cancel',
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
				width : 620,
				plain : true,
				closable : true,
				closeAction:'hide',
				items : addForm
			});
	updateWin = new Ext.Window({
				title : '修改记录',
				layout : 'form',
				width : 620,
				plain : true,
				closable : true,
				closeAction:'hide',
				items : updateForm
			})
	// 插入 数据
	add = function() {
		addWin.show();
		Ext.getCmp("add_truename").focus(true,true);
	}
	
	
	update = function() {
		var record = rightUserGrid.getSelectionModel().getSelected();
		var selections = rightUserGrid.getSelectionModel().getSelections();
		if(selections.length == 1){
			updateWin.show();
			updateForm.getForm().load({
					url : 'rightUser_findRightUserById.action?rightUser.id='
							+ record.get('id'),
					waitMsg : '正在载入数据...',
					failure : function() {
						Ext.Msg.alert('编辑', '载入人员信息失败');
					},
					success : function() {
						rightUserStore.reload();
					}
				});		
				Ext.getCmp("update_truename").focus(true,true);
		}		
		else{
			Ext.Msg.alert('提示','请您选择一条记录');
		}
	};
//	 删除操作
	del = function() {
		// 收集已经被选中的记录
		var _record = rightUserGrid.getSelectionModel().getSelections();
		var flag = rightUserGrid.getSelectionModel().getSelected();
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
										url : "rightUser_del.action",
										params : {
											delData : jsonData
										},
										success : function(response, options) {
											var obj = Ext.util.JSON.decode(response.responseText);
											if(obj.success == true){
												Ext.Msg.alert('提示','删除人员信息成功');
												rightUserStore.reload();
											}else{
												Ext.Msg.alert('提示','删除人员信息失败');
											}
										}
									});
//							Ext.Msg.alert('提示', '删除成功');
						}
					});
		} else {
			Ext.Msg.alert('删除操作', '请选择要删除的记录！');
		}
	};
	//重置密码
	var resetPassword = function(){
		var record = rightUserGrid.getSelectionModel().getSelected();
		var selections = rightUserGrid.getSelectionModel().getSelections();
		if(selections.length == 1){
			  Ext.Msg.confirm('提示', '你确定要重置该用户的密码吗？', function(btn){
			  	if(btn == 'yes'){
			  		Ext.Ajax.request({
							url : 'rightUser_resetPassword.action?rightUser.id='
							+ record.get('id'),
							success : function(response, options) {
								var obj = Ext.util.JSON.decode(response.responseText);
								if(obj.success == true){
									Ext.Msg.alert('提示', '重置密码成功');
									
								}else{
									Ext.Msg.alert('提示', '重置密码失败');
								}
							}
						});
			  		}			  	
			  });	
		}		
		else{
			Ext.Msg.alert('提示','请您选择一条记录');
		}
	};
	openUser = function(){
		Ext.Msg.confirm('提示', '请您在用户资料正确无误的情况下开通该用户', function(btn){
			  	if(btn == 'yes'){
			  		var record = rightUserGrid.getSelectionModel().getSelected();
			  		Ext.Ajax.request({
							url : 'rightUser_openUser.action?rightUser.id='
							+ record.get('id'),
							success : function(response, options) {
								var obj = Ext.util.JSON.decode(response.responseText);
								if(obj.success == true){
									Ext.Msg.alert('提示', '开通用户成功');
									rightUserStore.reload();
								}else{
									Ext.Msg.alert('提示', '开通用户失败');
								}
							}
						});
			  		}			  	
			  });	
		
	}
	
	
	sm = new Ext.grid.CheckboxSelectionModel();
	// 用户列表
	rightUserGrid = new Ext.grid.GridPanel({
//				renderTo : 'rightUserGridDiv',
				store : rightUserStore,
				title : '用户列表',
//				shim : true,
				id : '',
				stripeRows:true,
//				autoHeight : true,
				height:100,
				width : 100,
				sm : sm,
				// autoWidth: true,
				columns : [sm,{
							header : '姓名',
							dataIndex : 'tlr_name',
							width : 100,
							renderer : function(value) {
								return "<a href=javascript:update() title = '修改'>" + value + "</a>"
							} 

						}, {
							header : '用户名',
							dataIndex : 'idNumber',
							width : 150,
							renderer : function(value) {
								return "<a href=javascript:assignRole() title = '分配角色'>" + value + "</a>";
							} 
						}, {
							header : '所属机构',
							width : 120,
							dataIndex : 'inst_no',
							renderer : function(obj) {
								if (obj != null) {
									return obj.name;
								} else
								return ' ';
							}
						}, {
							header : '用户类型',
							width : 80,
							dataIndex : 'tlr_type'
						}, {
							header : '用户状态',
							width : 40,
							dataIndex : 'tlr_stat'
						}, {
							header : '电话',
							width : 90,
							dataIndex : 'phone'
						}, {
							header : '电子邮箱',
							dataIndex : 'email',
							width : 140
						}, {
							header : '状态',
							width : 50,
							dataIndex : 'usable',
							renderer:function(value, metadata, record, rowIndex, colIndex, store){
								var showValue ='';
								if(value == 1){
									showValue='可用';
								}else if(value ==0){
									showValue='<a href=javascript:openUser() title="开通用户">注销</a>';
								}else{
									showValue='未定义的状态'
								}
								return showValue;
							}	
						}, {
							header : '创建者',
							width : 100,
							dataIndex : 'rightUser',
							renderer : function(obj) {
							if (obj != null) {
								return obj.truename;
							} else
								return ' ';
							}
						}],
				// bodyStyle : 'width:100%;',
				tbar : [{
					id : '',
					text : ' 添加 ',
					tooltip : '添加新用户',
					iconCls : 'icon-add',
					handler : function() {
						add();
					}
						// ,width:'100%'
					}, '-', {
					id : '',
					text : '修改',
					tooltip : '修改选中的用户',
					iconCls : 'icon-edit',
					handler : function() {
						update();
					}
				}, '-', {
					id : '',
					text : '删除',
					tooltip : '删除选中的用户',
					iconCls : 'icon-del',
					handler : function() {
						del();
					}
				},'-', {
						id : '',
					text : '分配角色',
					tooltip : '给用户分配角色',
					iconCls : 'li-mouse',
					handler : function() {
						assignRole();
					}
				},'-',{
					id:'',
					text:'重置密码',
					iconCls : 'li-key',
					tooltip:'给选中的用户重置密码',
					handler:function(){
						resetPassword();
					}					
				}
//				, '-', {
//					id : '',
//					text : '测试',
//					tooltip : '测试',
//					iconCls : 'test',
//					handler : function() {
//						Ext.Ajax.request({
//										url : "rightUser_test.action",
//										
//										success:function(){
//											Ext.Msg.alert('提示','删除成功');
//											rightUserStore.reload();
//										},
//										failure:function(){
//											Ext.Msg.alert('提示','删除失败');
//										}
//									});
//					}
//					}
					],
				bbar : [{
							width : '100%',
							xtype : 'paging',
							pageSize : 15,
							store : rightUserStore,
							displayInfo : true,
							displayMsg : '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
							plugins:[new Ext.ux.plugins.PageComboResizer()],
							emptyMsg : "没有记录"
						}]
			});
			
		var mainPanel = new Ext.Panel({
			width:'100%',
			renderTo : 'rightUserGridDiv',
			items : [rightUserGrid]
	
		});
		//grid高度自适应
		var divHeight = document.getElementById('rightUserGridDiv').offsetHeight;
		mainPanel.setHeight(divHeight);
		var divWidth = document.getElementById('rightUserGridDiv').offsetWidth;
		mainPanel.setWidth(divWidth);
		rightUserGrid.setHeight(mainPanel.getHeight());
		rightUserGrid.setWidth(mainPanel.getWidth());
//		 grid 与form之间的交互 双击编辑
//		 rightUserGrid.on('rowdblclick',function(grid,rowIndex,event){
//		 	var record = rightUserGrid.getSelectionModel().getSelected();
//			var selections = rightUserGrid.getSelectionModel().getSelections();
//			if(selections.length == 1){
//				updateWin.add(updateForm);
//				updateWin.show();
//				updateForm.getForm().load({
//					url : 'rightUser_findRightUserById.action?rightUser.id='
//							+ record.get('id'),
//					waitMsg : '正在载入数据...',
//					failure : function() {
//						Ext.Msg.alert('编辑', '载入失败');
//					},
//					success : function() {
//						rightUserStore.reload();
//					}
//				});		
//			}		
//			else{
//				Ext.Msg.alert('提示','请您选择一条记录');
//			}
//		 });
});
