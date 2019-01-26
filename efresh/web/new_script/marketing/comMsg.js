
var queryt_comp_infoStore;			
var queryt_comp_infoGrid;
var addt_comp_info;
var addt_comp_infoForm;
var addt_comp_infoWin;
var updatet_comp_info;
var updatet_comp_infoWin;
var updatet_comp_infoForm;
var updatet_comp_infoReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	
	// CSS保持一致
	document.styleSheets.extjsStyle2.href = window.parent.document
		.getElementById("extjsStyle2").href;
	
	var idNumber =document.getElementById('com_idnumber').value;
	var url='t_comp_info_findById.action?t_comp_info.idNumber='+idNumber;


	updatet_comp_infoReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 't_comp_info.idNumber',
mapping : 'idNumber'
}
,{
name : 't_comp_info.comp_abbr_name',
mapping : 'comp_abbr_name'
}
,{
name : 't_comp_info.partner_info',
mapping : 'partner_info'
}
,{
name : 't_comp_info.comp_name',
mapping : 'comp_name'
}
,{
name : 't_comp_info.found_date',
mapping : 'found_date'
}
,{
name : 't_comp_info.reg_bal',
mapping : 'reg_bal'
}
,{
name : 't_comp_info.hq_city',
mapping : 'hq_city'
}
,{
name : 't_comp_info.hq_Address',
mapping : 'hq_Address'
}
,{
name : 't_comp_info.comp_url',
mapping : 'comp_url'
}
,{
name : 't_comp_info.serv_phone',
mapping : 'serv_phone'
}
,{
name : 't_comp_info.loc_address',
mapping : 'loc_address'
}
,{
name : 't_comp_info.con_name',
mapping : 'con_name'
}
,{
name : 't_comp_info.con_phone',
mapping : 'con_phone'
}
,{
name : 't_comp_info.comp_abbr',
mapping : 'comp_abbr'
}
,{
name : 't_comp_info.glory_info',
mapping : 'glory_info'
}
]
	);
	

		updatet_comp_infoForm = new Ext.form.FormPanel({
			frame : true,
			//	waitMsgTarget : true,
				layout : 'column',
		        labelWidth : 140, 
				reader : updatet_comp_infoReader,
				items : [{
		columnWidth: .55,
		layout : 'form',
		items : [
		{
			fieldLabel : '保险公司编号',
			id : 'uppdate_idNumber',
			xtype : 'textfield',
			readOnly : true,
			style:'color:#C0C0C0;',
			maxLength:10,
			autoCreate: {tag: 'input', type: 'text', size: '10', autocomplete: 'off', maxlength: '10'},
			name : 't_comp_info.idNumber',
			width : '150'
		},{
			fieldLabel : '保险公司简称',
			id : 'uppdate_comp_abbr_name',
			xtype : 'textfield',
			readOnly : true,
			name : 't_comp_info.comp_abbr_name',
			width : '70%'
			},{
			fieldLabel : '保险公司全称',
			id : 'uppdate_comp_name',
			xtype : 'textarea',
			readOnly : true,
			height : 50,
			name : 't_comp_info.comp_name',
			width : '70%'
		},{
			fieldLabel : '公司成立时间',
			id : 'uppdate_found_date',
			xtype : 'textfield',
			readOnly : true,
			name : 't_comp_info.found_date',
		//	format: 'Y-m-d',
			width : '70%'
			},{
			fieldLabel : '注册资本',
			id : 'uppdate_reg_bal',
			readOnly : true,
			xtype : 'textfield',
			name : 't_comp_info.reg_bal',
			width : '70%'
		}
		,{
		fieldLabel : '总部所在城市',
		id : 'uppdate_hq_city',
		xtype : 'textfield',
		readOnly : true,
		name : 't_comp_info.hq_city',
		width : '70%'
		},{

			readOnly : true,									
			fieldLabel : '总部地址',
			id : 'uppdate_hq_Address',
			xtype : 'textarea',
			height : 50,
			name : 't_comp_info.hq_Address',
			width : '70%'
		}
		,{
		fieldLabel : '公司网址',
		id : 'uppdate_comp_url',
		xtype : 'textfield',
		readOnly : true,
		name : 't_comp_info.comp_url',
		width : '70%'
		},{
			fieldLabel : '全国客服电话',
			id : 'uppdate_serv_phone',
			xtype : 'textfield',
			readOnly : true,
			name : 't_comp_info.serv_phone',
			width : '70%'
		}
		,{
		fieldLabel : '本部地址',
		id : 'uppdate_loc_address',
		xtype : 'textarea',
		height : 50,
		readOnly : true,
		name : 't_comp_info.loc_address',
		width : '70%'
		},{
			fieldLabel : '联系人姓名',
			id : 'uppdate_con_name',
			xtype : 'textarea',
			height : 50,
			readOnly : true,
			name : 't_comp_info.con_name',
			width : '70%'
		}
		,{
		fieldLabel : '联系人电话',
		id : 'uppdate_con_phone',
		xtype : 'textarea',
		height : 50,
		readOnly : true,
		name : 't_comp_info.con_phone',
		width : '70%'
		}
		]},{
		columnWidth: .45,
		layout : 'form',
		items : [{
			fieldLabel : '股东构成及比例',
			id : 'uppdate_partner_info',
			xtype : 'textarea',
			height :160,
			readOnly : true,
			name : 't_comp_info.partner_info',
//			anchor : '95%',
			width : '95%'
			}
		,{
		fieldLabel : '公司简介',
		id : 'uppdate_comp_abbr',
		xtype : 'textarea',
		height : 160,
		readOnly : true,
		name : 't_comp_info.comp_abbr',
		width : '95%'
		},{
			fieldLabel : '获奖荣誉',
			id : 'uppdate_glory_info',
			xtype : 'textarea',
			height : 160,
			readOnly : true,
			name : 't_comp_info.glory_info',
			width : '95%'
		}
		]}]
			});;
		updatet_comp_infoWin = new Ext.Window({
			layout : 'column',
			height : document.body.offsetHeight,
			width : document.body.offsetWidth,
			plain : true,
			closable : false,
			items : updatet_comp_infoForm
		});
	    

	updatet_comp_infoWin.show();

	    updatet_comp_infoForm.getForm().load({
			url : url,
			waitMsg : '正在载入数据...',
			failure : function() {
				Ext.Msg.alert('友情提示', '载入失败');
			},
			success : function() {
			}
		});


	    

/*	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'compsgGrid',
		items : [{
			title:"12321",
			html:"fsdafsda"
			
		}]
	});*/




 });
