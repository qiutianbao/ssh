
var showLeaveApplyForm;		//显示申请信息；
var showLeaveAuditForm;		//显示一级审核信息；
var auditLeaveApplyForm;	//审核请假申请信息；
var cancelApplyForm;		//销假

Ext.onReady(function(){

	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	showLeaveApplyForm = new Ext.form.FormPanel({
		title : '请假申请单',
		frame : true,
		waitMsgTarget : true,
		reader : auditApplyInfoReader,
		labelAlign : 'right',
		width : '100%',
		height : 150, 
		items : [{
			layout : 'column',
			items : [{
				columnWidth　: .5,
				layout : 'form',
				items : [{
					fieldLabel : '申请编号',
					xtype : 'hidden',
					id : 'leaveApplyId',
					name : 'applicationInfo.applicasn'
				},{
					fieldLabel : '申请人',
					xtype : 'field',
					name : 'applicationInfo.applymanname'
				},{
					fieldLabel : '开始时间',
					xtype : 'field',
					name : 'applicationInfo.starttime'
				}]
			},{
				columnWidth　: .5,
				layout : 'form',
				items : [{
					fieldLabel : '请假类型',
					xtype : 'field',
					name : 'applicationInfo.applicareason.name'
				},{
					fieldLabel : '结束时间',
					xtype : 'field',
					name : 'applicationInfo.endtime'
				},{
					fieldLabel : '信息状态',
					xtype : 'hidden',
					id : 'leaveApplyDelstate',
					name : 'applicationInfo.delstate'
				}]
			}]
		},{
			fieldLabel : '请假原因',
			xtype : 'textarea',
			width : '100%',
			height : 60,
			name : 'applicationInfo.content'
		}]
	});
	
	showLeaveAuditForm = new Ext.form.FormPanel({
		title : '科长审核结果',
		frame : true,
		waitMsgTarget : true,
		reader : auditApplyAuditReader,
		labelAlign : 'right',
		width : '100%',
		height : 110, 
		items : [{
			layout : 'column',
			items : [{
				columnWidth　: .5,
				layout : 'form',
				items : [{
					fieldLabel : '审核人',
					xtype : 'field',
					name : 'applicationAudit.auditman'
				}]
			}, {
				columnWidth　: .5,
				layout : 'form',
				items : [{
					fieldLabel : '审核结果',
					xtype : 'field',
					name : 'applicationAudit.auditresult'
				}]
			}]
		}, {
			fieldLabel : '审核意见',
			xtype : 'textarea',
			height : 45,
			width : '100%',
			name : 'applicationAudit.remark'
		}]
	});
	
	leaveApplyId = Ext.getCmp('leaveApplyId').getValue();
	
	auditLeaveApplyForm = new Ext.form.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : '100%',
		height : 100, 
		items : [{
			fieldLabel : '申请编号',
			xtype : 'hidden',
			id : 'leaveapplyid',
			name : 'applicationAudit.applicationinfo.applicasn'
		}, {
			fieldLabel : '审核意见',
			xtype : 'textarea',
			name : 'applicationAudit.remark',
			height : 50,
			width : '100%'
		}],
		buttons : [{
			text : '批准',
			disabled : false,
			iconCls : 'icon-auditok',
			handler : function() {
				var infostate = Ext.getCmp('leaveApplyDelstate').getValue();
				Ext.getCmp('leaveapplyid').setValue(Ext.getCmp('leaveApplyId').getValue());
				check(auditLeaveApplyForm, "applicationAudit_auditLeaveApply.action?selectFlag=160405&infoState="+infostate+"&userRole="+userRole, queryUnauditApplyStore, "批准该申请")
				auditTaskWin.hide();
			}
		}, {
			text : '不批准',
			disabled : false,
			iconCls : 'icon-auditno',
			handler : function() {
//				alert(Ext.getCmp('leaveApplyId').getValue()+"========"+userRole);
				var infostate = Ext.getCmp('leaveApplyDelstate').getValue();
				Ext.getCmp('leaveapplyid').setValue(Ext.getCmp('leaveApplyId').getValue());
				check(auditLeaveApplyForm, "applicationAudit_auditLeaveApply.action?selectFlag=160406&infoState="+infostate+"&userRole="+userRole, queryUnauditApplyStore, "不批准该申请")
				auditTaskWin.hide();
			}
		}, {
			text : '驳回',
			disabled : false,
			iconCls : 'icon-auditback',
			handler : function() {
				var infostate = Ext.getCmp('leaveApplyDelstate').getValue();
				Ext.getCmp('leaveapplyid').setValue(Ext.getCmp('leaveApplyId').getValue());
				check(auditLeaveApplyForm, "applicationAudit_auditLeaveApply.action?selectFlag=160407&infoState="+infostate+"&userRole="+userRole, queryUnauditApplyStore, "驳回该申请")
				auditTaskWin.hide();
			}
		},{
			text : '取消',
			disabled : false,
			iconCls : 'li-cancel',
			handler : function(){
				auditTaskWin.hide();
				auditLeaveApplyForm.form.reset();
			}
		}]
	});
	
	cancelApplyForm = new Ext.form.FormPanel({
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : '100%',
		height : 50, 
		items : [{
			fieldLabel : '请假申请编号',
			xtype : 'hidden',
			id : 'cancelApplyid',
			name : 'applicationAudit.applicationinfo.applicasn'
		}],
		buttons : [{
			text : '确认销假',
			disabled : false,
			iconCls : 'icon-returnback',
			handler : function() {
//				alert("querenxiaojia");
//				alert(userRole+"=======cancel");
				Ext.getCmp('cancelApplyid').setValue(Ext.getCmp('leaveApplyId').getValue());
				check(auditLeaveApplyForm, "applicationAudit_auditLeaveApply.action?selectFlag=160408&userRole="+userRole, queryUnauditApplyStore,  "销假")
				cancelLeaveApplyWin.hide();
			}
		},{
			text : '取消',
			disabled : false,
			iconCls : 'li-cancel',
			handler : function(){
				cancelLeaveApplyWin.hide();
				auditLeaveApplyForm.form.reset();
			}
		}]
	});
});