/**
 * @author xdsh 2010年9月20日17:04:25
 * 功能 ： 学历信息管理
 * 		1、新建学历信息；
 * 		2、将最新的学历信息同步更新到个人信息表中；
 * 		3、可对学历信息进行修改、删除、多条件查询。
 **/
 
 var queryAcademicInfoStore;
 var queryAcademicInfoGrid;
 var addAcademicInfo;
 var addAcademicInfoForm;
 var addAcademicInfoWin;
 var updateAcademicInfo;
 var updateAcademicInfoFrom;
 var updateAcademicInfoWin;
 var updateAcademicInfoReader;
 var showQueryPanel;
 
 var showHistoryInfo;	//触发函数--显示个人学历信息；
 var showHistoryStore;	//存储个人学历信息；
 var showHistoryWin;	//个人学历信息展示窗口
 var showHistoryGrid;	//个人学历信息展示
 
 Ext.onReady(function(){
 		Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
		Ext.QuickTips.init();
		haveRight('Person/ShowAllBaseInfoView.jsp');
		
		queryAcademicInfoStore = new Ext.data.JsonStore({
			url : 'academic_findAll.action',
			root : 'academicInfoList',
			totalProperty : 'listCount',
			baseParams : {
				start : 0,
				limit : 20
			},
			fields : [{
				name : 'academicsn',
				mapping : 'academicsn'
			},{
				name : 'school',
				mapping : 'school'
			},{
				name : 'awardtime',
				mapping : 'awardtime'
			},{
				name : 'major',
				mapping : 'major'
			},{
				name : 'degree',
				mapping : 'degree'
			},{
				name : 'deletestate',
				mapping : 'deletestate'
			},{
				name : 'name',
				mapping : 'personelinfo.name'
			},{
				name : 'idnumber',
				mapping : 'personelinfo.idnumber'
			}],
			autoLoad : false
		});
		
		queryAcademicInfoStore.load();
	
		var sm = new Ext.grid.CheckboxSelectionModel();
	
		queryAcademicInfoGrid = new Ext.grid.GridPanel({
		
//			renderTo : 'academicInfoGrid',
			store : queryAcademicInfoStore,
			sm : sm,
			columns : [ sm, rowNum, {
				header : '身份证号',
				dataIndex : 'idnumber',
				width : 150
			},{
				header : '姓名',
				dataIndex : 'name',
				width : 100,
				renderer : function(value, meta, record) {
					var tempString = '<div><a href=javascript:showHistoryInfo()><font color="red">'+ value +'</font></a></div>';
					return tempString;
				} 
			},{
				header : '毕业学校',
				dataIndex : 'school',
				width : 100
			},{
				header : '所学专业',
				dataIndex : 'major',
				width : 100
			},{
				header : '学历',
				dataIndex : 'degree',
				width : 100
			},{
				header : '获得时间',
				dataIndex : 'awardtime',
				width : 100,
				renderer : getStringTime
			}],
			width : 300,
			height : 100,
			tbar : [{
				text : ' 增加新的学历信息 ',
				iconCls:'icon-add',
				handler : function() {
					addAcademicInfo();
				}
			}, '-', {
				text : '删除',
				iconCls:'icon-del',
				handler : function() {
					del (queryAcademicInfoGrid, queryAcademicInfoStore, "academic_delete.action", "academicsn", "删除学历信息");
				}
			}],
			bbar : [{
				xtype : 'paging',
				pageSize : 15,
				plugins : [new Ext.ux.plugins.PageComboResizer()],
				store : queryAcademicInfoStore,
//				displayInfo : true,
//				displayMsg : '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
				emptyMsg : "没有记录"
			}]
		});
		
		showQueryPanel = new Ext.Panel({
			width : '100%',
			id : 'fitpanel',
			renderTo : 'academicInfoGrid',
			items : [queryAcademicInfoGrid]
		});
		var divHeight = document.getElementById('academicInfoGrid').offsetHeight;
		var divWidth = document.getElementById('academicInfoGrid').offsetWidth;
		
		showQueryPanel.setHeight(divHeight);
		showQueryPanel.setWidth(divWidth);
		queryAcademicInfoGrid.setWidth(showQueryPanel.getWidth());
		queryAcademicInfoGrid.setHeight(showQueryPanel.getHeight());
		
		
		personelInfoStore.load();		
		
		addAcademicInfoForm = new Ext.FormPanel({
			title :  '添加新信息',
			frame : true,
			waitMsgTarget : true,
			labelAlign : 'right',
			width : 385,
			height : 200, 
			items : [{
				fieldLabel : '人员姓名*',
//				id : 'addPersonName',
				xtype : 'combo',
				allowBlank : false,
				store : personelInfoStore,
				valueField : 'idnumber',
				displayField : 'name',
				mode : 'local',
				forceSelection : true,
				emptyText : '请选用户名...',
				editable : false,
				triggerAction : 'all',
				hiddenName : 'academicInfo.personelinfo.idnumber',
				pageSize : 10,
				anchor : '95%'
			},{
				name : 'academicInfo.major',
				xtype : 'field',
				allowBlank : false,
				width : '90%',
				fieldLabel : '专业名称*'
			},{
				name : 'academicInfo.school',
				xtype : 'field',
				allowBlank : false,
				width : '90%',
				fieldLabel : '毕业学校*'
			},{
				name : 'academicInfo.degree',
				xtype : 'field',
				allowBlank : false,
				width : '90%',
				fieldLabel : '获得学历*'
			},{
				name : 'academicInfo.awardtime',
				xtype : 'datefield',
				allowBlank : false,
				fieldLabel : '获得日期*',
				anchor : '90%',
				format : 'Y-m-d'
			}],
			buttons : [{
				text : '保存',
				disabled : false,
				iconCls:'icon-save',
				handler : function() {
					check(addAcademicInfoForm, "academic_addNewInfo.action", queryAcademicInfoStore, "保存该学历信息")
					addAcademicInfoWin.hide();	
				}
			}, {
				text : '取消',
				iconCls:'li-cancel',
				handler : function() {
					addAcademicInfoWin.hide();
					addAcademicInfoForm.form.reset();
				}
			}]
		});
	
		addAcademicInfoWin = new Ext.Window({
			layout : 'form',
			width : 400,
			height : 215,
			plain : true,
			closable : false,
			items : addAcademicInfoForm
		});
	
		addAcademicInfo = function() {
			addAcademicInfoWin.show();
		};
		
		updateAcademicInfoReader = new Ext.data.JsonReader({
			root : 'tempList',
			successProperty : '@success'
		}, [{
			name : 'academicInfo.academicsn',
			mapping : 'academicsn'
		},{
			name : 'academicInfo.personelinfo.idnumber',
			mapping : 'personelinfo.idnumber'
		},{
			name : 'academicInfo.personelinfo.name',
			mapping : 'personelinfo.name'
		},{
			name : 'academicInfo.school',
			mapping : 'school'
		},{
			name : 'academicInfo.major',
			mapping : 'major'
		},{
			name : 'academicInfo.degree',
			mapping : 'degree'
		},{
			name : 'academicInfo.awardtime',
			mapping : 'awardtime'
		},{
			name : 'academicInfo.deletestate',
			mapping : 'deletestate'
		}]
		);
			
		updateAcademicInfoFrom = new Ext.FormPanel({
			title : '修改学历信息',
			frame : true,
			waitMsgTarget : true,
			reader : updateAcademicInfoReader,
			items : [{
				xtype : 'hidden',
				fieldLabel : '信息编号',
				name : 'academicInfo.academicsn'
			},{
				xtype : 'field',
				fieldLabel : '人员名称',
				name : 'academicInfo.personelinfo.name',
				anchor : '95%',
				readOnly : true
			},{
				xtype : 'field',
				fieldLabel : '身份证',
				name : 'academicInfo.personelinfo.idnumber',
				anchor : '95%',
				readOnly : true
			},{
				xtype : 'field',
				fieldLabel : '毕业学校',
				anchor : '95%',
				name : 'academicInfo.school'
			},{
				xtype : 'field',
				fieldLabel : '所学专业',
				anchor : '95%',
				name : 'academicInfo.major'
			},{
				xtype : 'field',
				fieldLabel : '获得学位',
				anchor : '95%',
				name : 'academicInfo.degree'
			},{
				xtype : 'datefield',
				fieldLabel : '获得时间',
				name : 'academicInfo.awardtime',
				anchor : '95%',
				format : 'Y-m-d'
			},{
				xtype : 'hidden',
				fieldLabel : '信息状态',
				name : 'academicInfo.deletestate'
			}],
			buttons : [{
				text : '修改',
				iconCls:'icon-save',
				disabled : false,
				handler : function() {
					check(updateAcademicInfoFrom, "academic_update.action", queryAcademicInfoStore, "保存修改后的学历信息")
					updateAcademicInfoWin.hide();
				}
			}, {
				text : '取消',
				iconCls:'li-cancel',
				handler : function() {
					updateAcademicInfoWin.hide();
					updateAcademicInfoFrom.form.reset();
					}
			}]
		});
	
		updateAcademicInfoWin = new Ext.Window({
			layout : 'form',
			width : 400,
			height : 245,
			plain : true,
			closable : false,
			items : updateAcademicInfoFrom
		});
	
		updata = function() {
			_record = queryAcademicInfoGrid.getSelectionModel().getSelected();
			flag = queryAcademicInfoGrid.getSelectionModel().getSelections();
			if (flag.length == 1) {
				updateAcademicInfoWin.show();
//				alert("==================");
				updateAcademicInfoFrom.getForm().load({
					url : 'academic_findById.action?academicInfo.academicsn='+ _record.get('academicsn'),
					waitMsg : '正在载入数据...',
					failure : function() {
						Ext.Msg.alert('编辑', '信息载入失败');
					},
					success : function() {
					}
				});
			} else
				Ext.Msg.alert('错误', '请选择一条需要修改的信息！');
		};
		
		//存储个人学历信息；
		showHistoryStore = new Ext.data.JsonStore({
			url : 'academic_findByPerson.action',
			root : 'academicInfoList',
			totalProperty : 'listCount',
			baseParams : {
				start : 0,
				limit : 20
			},
			fields : [{
				name : 'academicsn',
				mapping : 'academicsn'
			},{
				name : 'school',
				mapping : 'school'
			},{
				name : 'awardtime',
				mapping : 'awardtime'
			},{
				name : 'major',
				mapping : 'major'
			},{
				name : 'degree',
				mapping : 'degree'
			},{
				name : 'deletestate',
				mapping : 'deletestate'
			},{
				name : 'name',
				mapping : 'personelinfo.name'
			},{
				name : 'idnumber',
				mapping : 'personelinfo.idnumber'
			}],
			autoLoad : false
		});
		showHistoryStore.load();
		
		//个人学历信息展示
		showHistoryGrid = new Ext.grid.GridPanel({
			store : showHistoryStore,
			columns : [ rowNum, {
//				header : '身份证号',
//				dataIndex : 'idnumber',
//				width : 150
//			},{
//				header : '姓名',
//				dataIndex : 'name',
//				width : 100,
//				renderer : function(value, meta, record) {
//					var tempString = '<div><a href=javascript:updata()><font color="red">'+ value +'</font></a></div>';
//					return tempString;
//				} 
//			},{
				header : '毕业学校',
				dataIndex : 'school',
				width : 100,
				renderer : function(value, meta, record) {
					var tempString = '<div><a href=javascript:updata()><font color="red">'+ value +'</font></a></div>';
					return tempString;
				} 
			},{
				header : '所学专业',
				dataIndex : 'major',
				width : 100
			},{
				header : '学历',
				dataIndex : 'degree',
				width : 100
			},{
				header : '获得时间',
				dataIndex : 'awardtime',
				width : 100,
				renderer : getStringTime
			}],
			height : 270,
			width : '100%',
			bbar : [{
				xtype : 'paging',
				pageSize : 10,
				store : showHistoryStore,
				plugins : [new Ext.ux.plugins.PageComboResizer()],
				emptyMsg : "没有记录"
			}, new Ext.Toolbar.Fill(), {
				xtype : 'button',
				text : '关闭',
				iconCls : 'icon-close',
				handler : function() {
					showHistoryWin.hide();
				}
			}]
		});
		
		//个人学历信息展示窗口
 		showHistoryWin = new Ext.Window({
 			layout : 'form',
			width : 600,
			height : 300,
			plain : true,
			closable : false,
			items : showHistoryGrid
 		});	
 		
 		//触发函数--显示个人学历信息；
 		showHistoryInfo = function(){
 			_record = queryAcademicInfoGrid.getSelectionModel().getSelected();
			flag = queryAcademicInfoGrid.getSelectionModel().getSelections();
			if (flag.length == 1) {
				var showIdnumber = _record.get('idnumber');
				showHistoryWin.setTitle("[个人学历]================》姓名："+_record.get('name'));
				showHistoryStore.load({
					params : {
						flag : showIdnumber
					}
				});
				showHistoryWin.show();
			} else{
				Ext.Msg.alert('错误', '请选择一条需要修改的信息！');
			}
 		}
 });