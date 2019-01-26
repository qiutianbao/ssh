
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
		data : [[-1, '不限'],[160100, '男'], [160101, '女']]
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
		product_typeStore =new Ext.data.SimpleStore({
fields : ['id', 'name'],
data : [['-1','全部'],['0','分红型'],['1','万能险'],['2','财产险'],['3','保障险']]
});
pay_typeStore =new Ext.data.SimpleStore({
fields : ['id', 'name'],
data : [['-1','全部'],['0','期交'],['1','趸交']]
});
bouns_adm_typeStore =new Ext.data.SimpleStore({
	fields : ['id', 'name'],
	data : [['0','全部'],['1','年度分红'],['2','终了分红'],['3','无']]
	});
sexStore =new Ext.data.SimpleStore({
	fields : ['id', 'name'],
	data : [['0','男'],['1','女']]
	});
bgn_balStore =new Ext.data.SimpleStore({
	fields : ['id', 'name'],
	data : [['0','1000'],['1','5000'],['2','10000']]
	});
expect_payStore =new Ext.data.SimpleStore({
	fields : ['id', 'name'],
	data : [['3','3年'],['5','5年'],['6','6年'],['10','10年'],['15','15年'],['20','20年']]
	});
insure_periodStore =new Ext.data.SimpleStore({
	fields : ['id', 'name'],
	data : [['5','5年'],['10','10年'],['15','15年'],['70','至70周岁'],['80','至80周岁'],['-1','终身']]
	});
bouns_admStore =new Ext.data.SimpleStore({
	fields : ['id', 'name'],
	data : [['-1','全部'],['0','年度分红'],['1','终了分红'],['2','其他'],['2','无']]
	});


illness_bal_flagStore =new Ext.data.SimpleStore({
	fields : ['id', 'name'],
	data : [['-1','全部'],['1','是'],['2','否']]
	});


backpro_flagStore=new Ext.data.SimpleStore({
	fields : ['id', 'name'],
	data : [['-1','全部'],['1','是'],['0','否']]
	});



stateStore =new Ext.data.SimpleStore({
fields : ['id', 'name'],
data : [['0','已发布'],['1','待复核'],['2','删除']]
});

	info_stateStore = new Ext.data.SimpleStore({
		fields : ['id', 'name'],
		data : [[160501, '专业技术人员'],[160502, '工勤人员'], [160503, '管理人员']]
	});
});

 