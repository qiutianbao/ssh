var auditApplyInfoReader;
var auditApplyAuditReader;
var queryUnauditApplyStore;		//存储未审核的申请信息

Ext.onReady(function(){
	
	auditApplyInfoReader = new Ext.data.JsonReader({
		root : 'tempInfoList',
		successProperty : '@success'
	}, [{
		name : 'applicationInfo.applicasn',
		mapping : 'applicasn'
	},{
		name : 'applicationInfo.applymanname',
		mapping : 'applymanname'
	},{
		name : 'applicationInfo.applicareason.reasonid',
		mapping : 'applicareason.reasonid'
	},{
		name : 'applicationInfo.applicareason.name',
		mapping : 'applicareason.name'
	},{
		name : 'applicationInfo.applyman',
		mapping : 'applyman'
	},{
		name : 'applicationInfo.starttime',
		mapping : 'starttime'
	},{
		name : 'applicationInfo.endtime',
		mapping : 'endtime'
	},{
		name : 'applicationInfo.content',
		mapping : 'content'
	},{
		name : 'applicationInfo.applicacanceltime',
		mapping : 'applicacanceltime'
	},{
		name : 'applicationInfo.delstate',
		mapping : 'delstate'
	},{
		name : 'applicationInfo.showstate',
		mapping : 'showstate'
	}]
	);
	
	auditApplyAuditReader = new Ext.data.JsonReader({
		root : 'tempAuditList',
		successProperty : '@success'
	}, [{
		name : 'applicationAudit.auditsn',
		mapping : 'auditsn'
	},{
		name : 'applicationAudit.applicationinfo.applicasn',
		mapping : 'applicationinfo.applicasn'
	},{
		name : 'applicationAudit.auditman',
		mapping : 'auditman'
	},{
		name : 'applicationAudit.auditresult',
		mapping : 'auditresult'
	},{
		name : 'applicationAudit.remark',
		mapping : 'remark'
	},{
		name : 'applicationAudit.audittime',
		mapping : 'audittime'
	},{
		name : 'applicationAudit.delstate',
		mapping : 'delstate'
	}]
	);
	
	queryUnauditApplyStore = new Ext.data.JsonStore({
		url : 'applicationAudit_findUnauditTasks.action',
		root : 'applciationInfoList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 5,
			userRole : userRole
		},
		fields : [{
		name : 'applicasn',
			mapping : 'applicasn'
		},{
			name : 'applymanname',
			mapping : 'applymanname'
		},{
			name : 'applicareason',
			mapping : 'applicareason.name'
		},{
			name : 'applyman',
			mapping : 'applyman'
		},{
			name : 'starttime',
			mapping : 'starttime'
		},{
			name : 'endtime',
			mapping : 'endtime'
		},{
			name : 'content',
			mapping : 'content'
		},{
			name : 'applicacanceltime',
			mapping : 'applicacanceltime'
		},{
			name : 'delstate',
			mapping : 'showstate'
		}],
		autoLoad : false
	});
});