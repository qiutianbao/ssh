Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	
	var firstMenuStore = new Ext.data.GroupingStore({
			reader : new Ext.data.JsonReader({
						root : 'firstMenuItems',
						id : 'id'
					}, [{
								name : 'id',
								mapping : 'id'
							}, {
								name : 'rightMenu',
								mapping : 'rightMenu.name'
							}, {
								name : 'name',
								mapping : 'name'
							}, 'qtip','descn','image','theSort']),
				sortInfo:{field: 'theSort', direction: "ASC"},
           		groupField:'rightMenu'
});
	
		
			// 创建用于展示的grid
			var sm1 = new Ext.grid.CheckboxSelectionModel();
			var firstGrid = new Ext.grid.GridPanel({
						ddGroup : 'secondGridDDGroup',
						enableDragDrop : true,
						stripeRows : true,
						// autoExpandColumn : 'transducerno',
						store : rightRoleStore,
						sm:sm1,
						title : '可用菜单',
						id : 'QueryGrid',
						columns : [sm1,{
									header : '菜单名称',
									dataIndex : 'name',
									sortable : true,
									width : 100
								}, {
									header : '菜单备注',
									dataIndex : 'descn',
									sortable : true,
									width : 100
								}]
					});
			var secondMenuStore = new Ext.data.JsonStore({
				root : 'secondMenuItems',
				reader : new Ext.data.JsonReader({
							id : 'id'
						}, [{
									name : 'id',
									mapping : 'id'
								}, {
									name : 'rightMenu',
									mapping : 'rightMenu.name'
								}, {
									name : 'name',
									mapping : 'name'
								}, 'qtip', 'descn', 'image', 'theSort']),
				sortInfo : {
					field : 'theSort',
					direction : "ASC"
				},
				groupField : 'rightMenu'
			});
			var sm2 = new Ext.grid.CheckboxSelectionModel();		
			var secondGrid = new Ext.grid.GridPanel({
						ddGroup : 'firstGridDDGroup',
						enableDragDrop : true,
						stripeRows : true,
						sm:sm2,
						store : secondMenuStore,
						id : 'QueryGrid1',
						title : '已分配菜单',
						columns : [ sm2,{
									header : '菜单名称',
									dataIndex : 'name',
									sortable : true,
									width : 100
								}, {
									header : '菜单备注',
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
	var assignRole = function() {
		
		var _record = rightRoleGrid.getSelectionModel().getSelected();
		var flag = rightRoleGrid.getSelectionModel().getSelections();
		
		if(flag.length == 1 )
		{
			var descn = _record.get('descn');
			var name = _record.get('name');
			var roleId = _record.get('id');
			winTitle = "菜单名：{"+trueName+"}为备注：{"+userName+"}的角色分配菜单";
			firstMenuStore.load();
			secondGridStore.proxy = new Ext.data.HttpProxy({
						    url: 'rightMenuRole_findByRoleIdAll.action?roleId='+roleId // see options parameter for Ext.Ajax.request
						});
//						alert("userId:->"+userId);
			secondGridStore.load();
			//fun(store,secondGridStore);
//			alert(id)
			updateWinShow(winTitle,roleId);
		}
		else Ext.Msg.alert('提示', '请选择一个角色！');
	};

	// 创建修改窗口
	var updateWinShow = function(winTitle,roleId) {
		
		if (win!=null) {
			win.show();
			win.roleId = roleId;
			firstMenuStore.reload();
			win.setTitle(winTitle);
			secondGridStore.proxy = new Ext.data.HttpProxy({
							//根据roleId找到   rightRoleUser 对象
						    url: 'rightMenuRole_findByRoleIdAll?roleId='+userId // see options parameter for Ext.Ajax.request
						});
			secondGridStore.load();
		}else{
		win = new Ext.Window({
					title : winTitle,
					layout : 'form',
					width : 600,
					height : 500,
					plain : true,
					closable:false,
					renderTo : Ext.getBody(),
					items:displayPanel,
					roleId:roleId,
					buttons : [{
							text : '取消',
							handler : function() {
								win.hide();
							}
						}]
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
								var tag =firstMenuStore.findBy(function(record,id){
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
										url : "rightMenuRole_del.action?roleId ="+win.roleId,
										params : {
											delData : delData
										},
//										failure : function() {
//											Ext.Msg.alert('提示', '删除菜单失败');
//										}
										success : function(response, options) {
											var obj = Ext.util.JSON.decode(response.responseText);
											if(obj.success == false){
												Ext.Msg.alert('提示', '删除菜单失败');
											}else{
													Ext.Msg.alert('提示', '删除菜单成功');
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
								
								var tag =secondMenuStore.findBy(function(record,id){
//									alert(record.get('roleId')+"******"+r.get('id'));
									if(record.get('id')==r.get('id'))
									return true;
								})  //判断是否已经存在
								//?????????????
								if(tag==-1){
									ddSource.grid.store.remove(r);
									secondGrid.store.add(r);
									if(addData.length==0)
									{
										addData = r.get('id');
									}else
									{
										addData =addData +','+ r.get('id');
									}
								}else
								{
									Ext.MessageBox.alert('提示！','该角色已经分配');
									ddSource.grid.store.remove(r);
								}
							}

							Ext.Ajax.request({
										url : "rightMenuRole_add.action?roleId ="+win.roleId,
										params : {
											delData : addData
										},
//										success:function(){
////											alert('success0');
////											secondGrid.store.reload();
////											alert('success');
//										},
//										failure : function() {
//											Ext.Msg.alert('提示', '增加菜单失败');
//										}
										success : function(response, options) {
											var obj = Ext.util.JSON.decode(response.responseText);
											if(obj.success == false){											
												Ext.Msg.alert('提示', '添加菜单失败');
											}else{
												Ext.Msg.alert('提示', '添加菜单成功');
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
});