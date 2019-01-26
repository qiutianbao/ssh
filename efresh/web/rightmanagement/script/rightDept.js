var parentNodeId ;
var addWin;
var addForm;
var updateWin;
var updateForm;
var deptTypeStore;
var brno_uploadForm;

var brno_uploadWin;
var brno_upload;
var updateReader;

var data_upload ;
var data_uploadForm;
var selectUnitForm;
var data_uploadWin;



Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
//	haveRight('rightmanagement/rightDept.jsp');	
	
	deptTypeStore = new Ext.data.JsonStore({
				url : 'rightDept_findAllDeptType.action',
				root : 'rightDeptTypeItems',
				fields : ['value', 'name'],
				autoLoad:true
			});
	var deptTree = new Ext.tree.TreePanel({ 
	renderTo: 'deptTreeDiv',
    title:'部门管理',
    autoScroll: false,
    animate: true,
    id:'deptTree',
    lines:true,//节点之间连接的横竖线
    rootVisible:true,
    containerScroll: true,
    border: false,
    
    // auto create TreeLoader
//    dataUrl: prjpath+'/HygieneMonitor/JS/check.json',
    dataUrl: 't_brno_showAllDept.action',
    root: {
        nodeType: 'async',
        text: '营业部',
        draggable: false,
        id: 'empty'
    },

listeners: { 
            "contextmenu": function(node, e){ 
                //列出右键菜单 
                menu = new Ext.menu.Menu([
                                         /* { 
                    xtype: "button", 
                    text: "添加部门", 
                    iconCls: "icon-add",
                    pressed: true, 
                    handler: function(tree){ 

                    	menu.hide(true);
                        onInsertNode(); 
                    } 
                }, */{ 
                    xtype: "button", 
                    text: "添加下级部门", 
                    iconCls: "li-addchildren", 
                    pressed: true, 
                    handler: function(){ 
                    	menu.hide(true);
                        addChildren(); 
                    } 
                }, { 
                    xtype: "button", 
                    text: "修改部门", 
                    iconCls: "icon-edit", 
                    pressed: true, 
                    handler: function(){ 
                    	menu.hide(true);
                        onUpdate(); 
                    } 
                }, { 
                    xtype: "button", 
                    text: "删除部门", 
                    iconCls: "icon-del", 
                    pressed: true, 
                    hidden : !delRight,
                    handler: function(tree){ 
                    	menu.hide(true);
                        onDeleteNode(); 
                    } 
                }]); 
                //显示在当前位置 
                menu.showAt(e.getPoint()); 
                 node.select(); 
            } 
        } ,
		tbar : [{text:"导入网点信息", 
		    icon : "../images/icon/upload.png", 
			width : 20,
			height : 25,
		    handler : function(){
			brno_upload();
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
		}]
    }); 
	//deptTree.expandAll();
    deptTree.getRootNode().expand();
    
    
	 brno_uploadForm = new Ext.form.FormPanel({
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
					submit(brno_uploadForm, "data_upload.action?flag=t_inst_mgmt", null, "数据导入");
					brno_uploadWin.hide();	
				}
			}, {
				text : '取消',
				iconCls:'li-cancel',
				handler : function() {
				brno_uploadWin.hide();
				brno_uploadForm.form.reset();
				}
			}]


		});
		 brno_uploadWin = new Ext.Window({
				title : '数据导入',
				layout : 'form',
				width : 750,
				height : 180,
				plain : true,
				closable : true,
				closeAction : 'hide',
				items : brno_uploadForm
			});
		brno_upload = function() {
				 brno_uploadWin.show();
			};
    
    
    
/********添加节点**********/ 
    addForm = new Ext.FormPanel({
				frame : true,
				// applyTo : 'rightUserFormDiv',
				bodyStyle : 'padding:5px 5px 0',
				autoWidth : true,
				defaults : {
					labelWidth : 40,
					labelAlign : 'right'
					// width:200
				},
				waitMsgTarget : true,
				items : [{
					fieldLabel : '部门类型',
					width : 200,							
					xtype : 'combo',
					store : deptTypeStore,
					valueField : 'value',
					displayField : 'name',
					// 数据是在本地
					mode : 'local',
					forceSelection : true,// 必须选择一项
					emptyText : '请选择部门类型',// 默认值
					hiddenName : 't_inst_mgmt.inst_type',// hiddenName才是提交到后台的input的name
					editable : false,// 不允许输入
					triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
					allowBlank : false// 该选项值不能为空											
				},{
								fieldLabel : '部门名称',
								xtype : 'textfield',
								width : 200,
								name : 't_inst_mgmt.inst_name',
								id:'add_inst_name',
								allowBlank : false
							},{
								fieldLabel : '网点编号',
								xtype : 'textfield',
								width : 200,
								name : 't_inst_mgmt.idNumber',
								id:'add_idNumber',
								allowBlank : false
							},{
								xtype:'hidden',
								name:'t_inst_mgmt.up_inst_no',
								id:'addParentNodeId'
							},{
								xtype:'hidden',
								name:'t_inst_mgmt.t_inst_mgmt.inst_type',
								id:'addinst_type'
							}
				],
				buttons : [{
							text : '添加',
							iconCls:'icon-save',
							disabled : false,
							handler : function() {
								if (addForm.form.isValid()) {
									var deptType=Ext.getCmp('addinst_type').getValue();
									//var deptType=Ext.getCmp('addParentNodeId').getValue();
									if('190002'==deptType){
										Ext.Msg.alert('提示','网点下面不能新增子部门！');
									}else{
									addForm.form.submit({
												url : 't_inst_mgmt_addNewInfo.action',
												success : function(form, action) {
													addForm.getForm().reset();
													addWin.hide();	
//													rightUserStore.reload();	
													deptTree.root.reload();
													//deptTree.expandAll();
													Ext.Msg.alert('提示','增加部门成功！');													
												},
												failure : function(form, action) {
//													rightUserStore.reload();
													deptTree.root.reload();
													//deptTree.expandAll();
													addForm.getForm().reset();
													addWin.hide();													
													Ext.Msg.alert('提示','增加部门失败！');
												},
												waitMsg : '正在保存数据，稍后...'
											});
								}
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
    addWin = new Ext.Window({
				title : '添加记录',
				layout : 'form',
				width : 350,
				autoHeight:true,
				plain : true,
				closable : true,
				closeAction:'hide',
				items : addForm
			});
    function onInsertNode(){    	
    	var selectedNode = deptTree.getSelectionModel().getSelectedNode(); 
    	if(selectedNode.id != 'empty'){
        	var selectedParentNode = selectedNode.parentNode; 
       	 	parentNodeId = selectedParentNode.id;
       	 	var deptType=selectedParentNode.selectedParentNode;
       	// Ext.Msg.alert('提示','1QAZ---'+deptType);
 			Ext.getCmp('addParentNodeId').setValue(parentNodeId);
 		//	Ext.getCmp('adddeptType').setValue(deptType);
 			addWin.show();
 		//	Ext.getCmp("add_DeptName").focus(true,true);
    	}else{
    		Ext.Msg.alert('提示','根节点只能有一个');
    	}
    } ;
    
    
    /**删除节点**/ 
    function onDeleteNode(){ 
        Ext.Msg.confirm('提示', '你是否确定删除此标准?', onDeleteNodeConfirm); 
    }; 
    
    function onDeleteNodeConfirm(btn) {
		if (btn == 'yes') {
			var selectedNode = deptTree.getSelectionModel().getSelectedNode();
			if(selectedNode.id == 'empty'){
				Ext.Msg.alert('提示','您不能删除根节点');
			}else if (selectedNode.hasChildNodes()) {
				Ext.Msg.alert('提示', '该部门下还有下级部门，请您先删除下级部门');
			} else {
			//	alert(selectedNode.id);
				Ext.Ajax.request({
							url : "t_inst_mgmt_delete.action",
							params : {
					delData : selectedNode.id
							},
							success : function(response, options) {
								var obj = Ext.util.JSON.decode(response.responseText);
								if(obj.success == true){
									Ext.Msg.alert('提示', '删除部门成功');
									deptTree.root.reload();
//									deptTree.expandAll();
								}else{
									Ext.Msg.alert('提示', '该部门下还有人员信息，请不要删除该部门');
								}
							}
						});
			}
		}
	}; 
     updateReader = new Ext.data.JsonReader({
						root : 'tempList',
						successProperty : '@success'
					}, [{name:'t_inst_mgmt.inst_name',mapping:'inst_name'},
						{name:'t_inst_mgmt.idNumber',mapping:'idNumber'},
						{name:'t_inst_mgmt.inst_type',mapping:'inst_type'},
						{name:'t_inst_mgmt.up_inst_no',mapping:'up_inst_no'},
						{name:'t_inst_mgmt.inst_busn_stat',mapping:'inst_busn_stat'}
						]);	
    updateForm = new Ext.FormPanel({
				frame : true,
				reader:updateReader,
				// applyTo : 'rightUserFormDiv',
				bodyStyle : 'padding:5px 5px 0',
				autoWidth : true,
				defaults : {
					labelWidth : 40,
					labelAlign : 'right'
					// width:200
				},
				waitMsgTarget : true,
				items : [{
								fieldLabel : '部门名称',
								xtype : 'textfield',
								width : 200,
								name : 't_inst_mgmt.inst_name',
								allowBlank : false,
								id:'updateInst_name'
							},{
								xtype:'hidden',
								name:'t_inst_mgmt.idNumber',
								id:'updateIdNumber'
							},{
								fieldLabel : '部门类型',
								width : 200,							
								xtype : 'combo',
								store : deptTypeStore,
								valueField : 'value',
								displayField : 'name',
								// 数据是在本地
								mode : 'local',
								forceSelection : true,// 必须选择一项
								emptyText : '请选择部门类型',// 默认值
								hiddenName : 't_inst_mgmt.inst_type',// hiddenName才是提交到后台的input的name
								editable : false,// 不允许输入
								triggerAction : 'all',// 因为这个下拉是只能选择的，所以一定要设置属性triggerAction为all，不然当你选择了某个选项后，你的下拉将只会出现匹配选项值文本的选择项，其它选择项是不会再显示了，这样你就不能更改其它选项了。
								allowBlank : false,// 该选项值不能为空			
								readOnly:true
							},{
								xtype:'hidden',
								name:'t_inst_mgmt.up_inst_no',
								id:'updateParentId'
							},{
								xtype:'hidden',
								name:'t_inst_mgmt.inst_busn_stat',
								id:'upd_inst_busn_stat'
							}							
				],
				buttons : [{
							text : '修改',
							iconCls:'icon-save',
							disabled : false,
							handler : function() {
								if (updateForm.form.isValid()) {
									updateForm.form.submit({
												url : 't_inst_mgmt_update.action',
												success : function(form, action) {
													updateForm.getForm().reset();
													updateWin.hide();	
													deptTree.root.reload();
													//deptTree.expandAll();
													Ext.Msg.alert('提示','修改部门成功！');	
												},
												failure : function(form, action) {
													deptTree.root.reload();
													//deptTree.expandAll();
													updateForm.getForm().reset();
													updateWin.hide();													
													Ext.Msg.alert('提示','修改部门失败！');
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
    updateWin = new Ext.Window({
				title : '修改记录',
				layout : 'form',
				width : 350,
				autoHeight:true,
				plain : true,
				closable : true,
				closeAction:'hide',
				items : updateForm
			});
/** *修改节点* */ 
    function onUpdate(){ 
        var selectedNode = deptTree.getSelectionModel().getSelectedNode(); 
            if(selectedNode.id != 'empty'){
            	updateWin.show();
            	Ext.getCmp("updateInst_name").focus(true,true);
            	
//            	Ext.Msg.alert('提示', 'ok');
            	
            	updateForm.getForm().load({
					url : 't_inst_mgmt_findById.action?t_inst_mgmt.idNumber='
							+ selectedNode.id,
					waitMsg : '正在载入数据...',
					failure : function(form, action) {
						Ext.Msg.alert('提示', '载入部门信息失败');
					},
					success : function(form, action) {
					}
				});
            
            }else{
            	Ext.Msg.alert('提示','您不能修改根节点');
            }
        
    }; 
   
    

    /****************************************** 
     增加子节点 
     ******************************************/ 
   function addChildren(){ 
   		var selectedNode = deptTree.getSelectionModel().getSelectedNode(); 
 		Ext.getCmp('addParentNodeId').setValue(selectedNode.id);
   	 	var deptType=selectedNode.deptType;
//      	Ext.Msg.alert('提示','1QAZ---'+selectedNode.length);
 		addWin.show();
 		Ext.getCmp("add_inst_name").focus(true,true);
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
					submit(data_uploadForm, "compAndBrno_upload.action?flag=compAndBrno", null, "数据导入");
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
				var selectedNode = deptTree.getSelectionModel().getSelectedNode(); 
			//	_record = queryt_inst_mgmtGrid.getSelectionModel().getSelected();
				
			
					var idNumber = selectedNode.id;
					winTitle = "机构["+selectedNode.text+"]分配公司";
					compStore.proxy = new Ext.data.HttpProxy({
								    url: 't_inst_mgmt_findNoRrightComp.action?t_inst_mgmt.idNumber='+idNumber 
								});
					compStore.load();
					secondGridStore.proxy = new Ext.data.HttpProxy({
								    url: 't_inst_mgmt_findRrightComp.action?t_inst_mgmt.idNumber='+idNumber 
								});
					secondGridStore.load();
					updateWinShow(winTitle,idNumber);
				
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

			
});
    