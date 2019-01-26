
var rightDeptStore;				//部门信息
var personelInfoStore;			//人员信息
var positionNameInfoStore;		//职称名称
var applicationReasonStore;		//请假原因
var genderSimpleStore;			//性别
var politicsSimpleStore; 		//政治面貌
var stateSimpleStore;			//人员状态
var personelTypeStore;			//人员类型

/**
 * @author xdsh 2010年9月2日10:10:54
 * @since 
 * */

Ext.onReady( function(){
	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();	
	
	rightDeptStore = new Ext.data.Store({
		url : 'personelInfo_findRightDept.action' ,
		baseParams : {
			start : 0,
			limit : 10
		},
		reader : new Ext.data.JsonReader({
			root : 'rightDeptList',
			totalProperty : 'listCount'
		}, [{
			name : 'id',
			mapping : 'id'
		}, {
			name : 'name',
			mapping : 'name'
		}])
	});
	
	personelInfoStore = new Ext.data.Store({
		url : 'personelInfo_findAll.action?flag=selectInfo',
		baseParams : {
			start : 0,
			limit : 10
		},
		reader : new Ext.data.JsonReader({
			root : 'personelInfoList',
			totalProperty : 'listCount'
		}, [{
			name : 'idnumber',
			mapping : 'idnumber'
		}, {
			name : 'name',
			mapping : 'name'
		}])
	});
	
	positionNameInfoStore = new Ext.data.Store({
		url : 'positionNameInfo_findAll.action',
		baseParams : {
			start : 0,
			limit : 10
		},
		reader : new Ext.data.JsonReader({
			root : 'positionNameInfoList',
			totalProperty : 'listCount'
		}, [{
			name : 'nameid',
			mapping : 'nameid'
		}, {
			name : 'name',
			mapping : 'name'
		}])
	});
	
	applicationReasonStore = new Ext.data.Store({
		url : 'applicaReason_findAll.action',
		baseParams : {
			start : 0,
			limit : 50
		},
		reader : new Ext.data.JsonReader({
			root : 'applicaReasonList',
			totalProperty : 'listCount'
		}, [{
			name : 'reasonid',
			mapping : 'reasonid'
		}, {
			name : 'name',
			mapping : 'name'
		}])
	});
	
	genderSimpleStore = new Ext.data.SimpleStore({
		fields : ['id', 'name'],
		data : [[160100, '男'], [160101, '女']]
	});
	
	politicsSimpleStore = new Ext.data.SimpleStore({
		fields : ['id', 'name'],
		data : [[160102, '党员'], [160103, '团员'], [160104, '群众']]
	});
	
	stateSimpleStore = new Ext.data.SimpleStore({
		fields : ['id', 'name'],
		data : [[160200, '在职'], [160201, '离职']]
	});
	
	personelTypeStore = new Ext.data.SimpleStore({
		fields : ['id', 'name'],
		data : [[160501, '专业技术人员'],[160502, '工勤人员'], [160503, '管理人员']]
	});
		
	info_stateStore = new Ext.data.SimpleStore({
		fields : ['id', 'name'],
		data : [[160501, '专业技术人员'],[160502, '工勤人员'], [160503, '管理人员']]
	});
});

 