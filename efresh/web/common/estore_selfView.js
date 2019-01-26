
var queryestoreStore;			
var queryestoreGrid;
var addestore;
var addestoreForm;
var addestoreWin;
var updateestore;
var updateestoreWin;
var updateestoreForm;
var updateestoreReader;
var showQueryPanel;

var selectUnitForm;

 Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('common/estoreView.jsp');
	 queryestoreStore = new Ext.data.JsonStore({
		url : 'estore_findAll.action?selftsales=Y',
		root : 'estoreList',
		totalProperty : 'listCount',
		baseParams : {
			start : 0,
			limit : 10,
			flag : 'baseInfo'
		},
		fields : [{
name : 'idNumber',
mapping : 'idNumber'
}
,{
name : 'corplogo',
mapping : 'corplogo'
}
,{
name : 'corpname',
mapping : 'corpname'
}
,{
name : 'creationNo',
mapping : 'creationNo'
}
,{
name : 'organization',
mapping : 'organization'
}
,{
name : 'address',
mapping : 'address'
}
,{
name : 'legalname',
mapping : 'legalname'
}
,{
name : 'id',
mapping : 'id'
}
,{
name : 'validtime',
mapping : 'validtime'
}
,{
name : 'legalphoneNo',
mapping : 'legalphoneNo'
}
,{
name : 'legalqq',
mapping : 'legalqq'
}
,{
name : 'legalwechat',
mapping : 'legalwechat'
}
,{
name : 'businesslic',
mapping : 'businesslic'
}
,{
name : 'idpositive',
mapping : 'idpositive'
}
,{
name : 'idopposite',
mapping : 'idopposite'
}
,{
name : 'accountname',
mapping : 'accountname'
}
,{
name : 'accountbank',
mapping : 'accountbank'
}
,{
name : 'bankaddress',
mapping : 'bankaddress'
}
,{
name : 'bankaccount',
mapping : 'bankaccount'
}
,{
name : 'validordertime',
mapping : 'validordertime'
}
,{
name : 'handleordertime',
mapping : 'handleordertime'
}
,{
name : 'deliverytime',
mapping : 'deliverytime'
}
,{
name : 'password',
mapping : 'password'
}
,{
name : 'contactname',
mapping : 'contactname'
}
,{
name : 'contactphoneNo',
mapping : 'contactphoneNo'
}
,{
name : 'contactqq',
mapping : 'contactqq'
}
,{
name : 'contactwechat',
mapping : 'contactwechat'
}
,{
name : 'creationtime',
mapping : 'creationtime'
},{
name : 'userid',
mapping : 'userid'
}
,{
name : 'isStop',
mapping : 'isStop'
}
,{
name : 'selftsales',
mapping : 'selftsales'
}
],
		autoLoad : false
		
	});

	//省jsonstore
		var province_store = new Ext.data.Store( {  
	        autoLoad : true,  
	        reader : new Ext.data.JsonReader( {
	            root : 'provinceList'  
	        }, Ext.data.Record.create([ {
	            name : 'id'  
	        }, {  
	            name : 'name'  
	        }])),  
	        proxy : new Ext.data.HttpProxy( {  
	            url : 'area_getprovince.action?areaid=0'  
	        })  
	   }); 
	 
//市jsonstore
		   var city_store = new Ext.data.Store({  
		        //autoLoad : false, 
		        reader : new Ext.data.JsonReader( { 
		            root : 'cityList'  
		        }, Ext.data.Record.create([ {  
		            name : 'id'  
		        }, {  
		            name : 'name'  
		        }])),  
		        proxy : new Ext.data.HttpProxy( {  
		            url : 'area_getcity.action'  
		        })  
		    }); 		
	 
//区jsonstore
		   var area_store = new Ext.data.Store( {  
		        autoLoad : false,  
		        reader : new Ext.data.JsonReader( { 
		            root : 'areaList'  
		        }, Ext.data.Record.create([ {  
		            name : 'id'  
		        }, {  
		            name : 'name'  
		        }])),  
		        proxy : new Ext.data.HttpProxy( {  
		            url : 'area_getarea.action'  
		        })  
		    });  
	 	 
	 
	
	
	selectUnitForm = new Ext.form.FormPanel({
		title : '按条件查询',
		labelAlign : 'right',
		frame : true,
		labelWidth : 70,
		padding : 5,
		layout : 'column',
		items : [{
layout : 'form',
items : [{
    fieldLabel: '省',
    xtype: 'combo',
    id:'provinceid', 
    hiddenName : 'id',
    store:province_store,
    emptyText: '请选择省',
    mode: 'local',
    width:150,
    triggerAction: 'all',
    valueField: 'id',
    displayField: 'name',
    listeners : {  
        select: function() {  
            try{  
            	var citycombo=Ext.getCmp("cityid");  
            	var areacombo = Ext.getCmp('areaid');  
                areacombo.clearValue();  
            	citycombo.clearValue();  
                citycombo.store.load({  
                   params:{  
                  	 areaid:this.getValue()  
                   }  
                });
            }catch(ex){  
                alert("加载市级数据失败！");  
            }
        }  
    } 
},{
    fieldLabel: '市',
    xtype: 'combo',
	id:'cityid',  
	hiddenName : 'id',
    store: city_store,
    emptyText: '请选择市',
    mode: 'local',
    width:150,
    triggerAction: 'all',
    valueField: 'id',
    displayField: 'name',
 	listeners:{  
        select:function(combo,record,index){
            try{  
                var areacombo = Ext.getCmp('areaid');  
                areacombo.clearValue();  
                areacombo.store.load({  
                   params:{  
                  	 areaid:this.getValue()  
                   }  
                 });  
            }catch(ex){  
                alert("加载区级数据失败！");  
            }  
              
        }
    }  
},
{
    fieldLabel: '区',
    xtype: 'combo',
	id:'areaid',
	hiddenName : 'id',  
    store: area_store,
    emptyText: '请选择区',
    mode: 'local',
    width:150,
    triggerAction: 'all',
    valueField: 'id',
    displayField: 'name',
}
]},{

layout : 'form',
items : [
{
layout : 'column',
items : [{

items : [{
xtype : 'button',
text : '重置',
width : 100,
style:'margin:0 5px',
iconCls : 'icon-reset',
handler : function() {
selectUnitForm.form.reset();
}}]
},{
items : [{
xtype : 'button',
text : '查询',
width : 100,
iconCls : 'icon-select',
handler : function() {
var provinceid=Ext.get('provinceid').dom.value;
var cityid=Ext.get('cityid').dom.value;
var areaid=Ext.get('areaid').dom.value;
if(provinceid=="请选择省"){
	provinceid = "";
}
if(cityid=="请选择市"){
	cityid = "";
}
if(areaid=="请选择区"){
	areaid = "";
}
queryestoreStore.proxy = new Ext.data.HttpProxy({
url : 'estore_findInfoByConditions.action?'
//+'estore.corpname='
//+ Ext.getCmp('select_corpname').getValue()
//+'&estore.organization='
//+ Ext.getCmp('select_organization').getValue()
//+'&estore.legalname='
//+ Ext.getCmp('select_legalname').getValue()
//+'&estore.id='
//+ Ext.getCmp('select_id').getValue()
//+'&estore.legalphoneNo='
//+ Ext.getCmp('select_legalphoneNo').getValue()
});
	queryestoreStore.load({
params : {
start : 0,
limit : Ext.getCmp('pageBar').pageSize,
"estore.province" : provinceid,
"estore.city" : cityid,
"estore.area" : areaid,
"estore.selftsales":"Y"
}});
}}]}
]}]}]

		         
	});;
	
	

	queryestoreStore.load();
	
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	var queryestoreGrid = new Ext.grid.GridPanel({
		store : queryestoreStore,
		sm : sm,
		columns : [ sm, rowNum
,{
header : '产地名称',
dataIndex : 'corpname',
width : 160 
}
,{
header : '基地地址',
dataIndex : 'address',
width : 280 
}
,{
header : '产地介绍',
dataIndex : 'back1',
width : 240 
}
,{
header : '主营产品',
dataIndex : 'back5',
width : 260 
}
,{
header : '操作',
dataIndex : 'idNumber',
width : 180,
renderer : function(value, meta, record) {
//	var tempString = '<a href="https://www.baidu.com/" class="mayubtn">查看更多</a>';
	var tempString = '<a href="store_style_detail.action?estore.idNumber='+value+'" class="mayubtn" style="float: none;margin: 0 auto">查看更多</a>';
	return tempString;
	}
}
],
		width : 500,
		height : 100,
		tbar : [{
			text : ' 新增 ',
			iconCls:'icon-add',
			handler : function() {
				//addestore();
				window.location.href = "jsp/esys/selftsales.jsp";
			}
		}
//		,'-',{text:"导出Excel", 
//		    icon : "../images/icon/upload.png", 
//		    handler : ExcelExport
//		}
		,'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				del (queryestoreGrid, queryestoreStore, "estore_delete.action", "idNumber", "删除信息");
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryestoreStore,
			emptyMsg : "没有记录"
		}]
	});
	
	showQueryPanel = new Ext.Panel({
		width : '100%',
		id : 'fitpanel',
		renderTo : 'estoreGrid',
		items : [selectUnitForm, queryestoreGrid]
	});
	var divHeight = document.getElementById('estoreGrid').offsetHeight;
	var divWidth = document.getElementById('estoreGrid').offsetWidth;
	
	showQueryPanel.setHeight(divHeight);
	showQueryPanel.setWidth(divWidth);
	queryestoreGrid.setWidth(showQueryPanel.getWidth());
	queryestoreGrid.setHeight(showQueryPanel.getHeight()-selectUnitForm.getHeight());
	
	addestoreForm = new Ext.FormPanel({
		title :  '添加信息',
		frame : true,
		waitMsgTarget : true,
		labelAlign : 'right',
		width : 650,
		height : 320, 
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '主键',
id : 'add_idNumber',
xtype : 'numberfield',
name : 'estore.idNumber',
width : '80%'
}
,{
fieldLabel : '企业名字',
id : 'add_corpname',
xtype : 'textfield',
name : 'estore.corpname',
width : '80%'
}
,{
fieldLabel : '组织机构代码证',
id : 'add_organization',
xtype : 'textfield',
name : 'estore.organization',
width : '80%'
}
,{
fieldLabel : '法人名字',
id : 'add_legalname',
xtype : 'textfield',
name : 'estore.legalname',
width : '80%'
}
,{
fieldLabel : '证件截止有效期',
id : 'add_validtime',
xtype : 'textfield',
name : 'estore.validtime',
width : '80%'
}
,{
fieldLabel : '法人QQ号',
id : 'add_legalqq',
xtype : 'textfield',
name : 'estore.legalqq',
width : '80%'
}
,{
fieldLabel : '企业营业执照副本图',
id : 'add_businesslic',
xtype : 'textfield',
name : 'estore.businesslic',
width : '80%'
}
,{
fieldLabel : '法人身份证反面图',
id : 'add_idopposite',
xtype : 'textfield',
name : 'estore.idopposite',
width : '80%'
}
,{
fieldLabel : '开户银行',
id : 'add_accountbank',
xtype : 'textfield',
name : 'estore.accountbank',
width : '80%'
}
,{
fieldLabel : '银行账户',
id : 'add_bankaccount',
xtype : 'textfield',
name : 'estore.bankaccount',
width : '80%'
}
,{
fieldLabel : '处理订单时间',
id : 'add_handleordertime',
xtype : 'datetimefield',
name : 'estore.handleordertime',
anchor : '95%'
}
,{
fieldLabel : '登录密码',
id : 'add_password',
xtype : 'textfield',
name : 'estore.password',
width : '80%'
}
,{
fieldLabel : '联系人电话',
id : 'add_contactphoneNo',
xtype : 'textfield',
name : 'estore.contactphoneNo',
width : '80%'
}
,{
fieldLabel : '联系人微信',
id : 'add_contactwechat',
xtype : 'textfield',
name : 'estore.contactwechat',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'add_ts',
xtype : 'textfield',
name : 'estore.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'add_back1',
xtype : 'textfield',
name : 'estore.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'add_back3',
xtype : 'textfield',
name : 'estore.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'add_back5',
xtype : 'numberfield',
name : 'estore.back5',
width : '80%'
}
,{
fieldLabel : '是否停运',
id : 'add_isStop',
xtype : 'textfield',
name : 'estore.isStop',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '企业logo图片名称',
id : 'add_corplogo',
xtype : 'textfield',
name : 'estore.corplogo',
width : '80%'
}
,{
fieldLabel : '注册号',
id : 'add_creationNo',
xtype : 'textfield',
name : 'estore.creationNo',
width : '80%'
}
,{
fieldLabel : '产地详细地址',
id : 'add_address',
xtype : 'textfield',
name : 'estore.address',
width : '80%'
}
,{
fieldLabel : '法人身份证号码',
id : 'add_id',
xtype : 'textfield',
name : 'estore.id',
width : '80%'
}
,{
fieldLabel : '法人手机号',
id : 'add_legalphoneNo',
xtype : 'textfield',
name : 'estore.legalphoneNo',
width : '80%'
}
,{
fieldLabel : '法人微信号',
id : 'add_legalwechat',
xtype : 'textfield',
name : 'estore.legalwechat',
width : '80%'
}
,{
fieldLabel : '法人身份证正面图',
id : 'add_idpositive',
xtype : 'textfield',
name : 'estore.idpositive',
width : '80%'
}
,{
fieldLabel : '银行开户名',
id : 'add_accountname',
xtype : 'textfield',
name : 'estore.accountname',
width : '80%'
}
,{
fieldLabel : '银行所在地',
id : 'add_bankaddress',
xtype : 'textfield',
name : 'estore.bankaddress',
width : '80%'
}
,{
fieldLabel : '最迟确认订单时间',
id : 'add_validordertime',
xtype : 'datetimefield',
name : 'estore.validordertime',
anchor : '95%'
}
,{
fieldLabel : '最快到货时间',
id : 'add_deliverytime',
xtype : 'datetimefield',
name : 'estore.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '联系人名字',
id : 'add_contactname',
xtype : 'textfield',
name : 'estore.contactname',
width : '80%'
}
,{
fieldLabel : '联系人QQ',
id : 'add_contactqq',
xtype : 'textfield',
name : 'estore.contactqq',
width : '80%'
}
,{
fieldLabel : '注册时间',
id : 'add_creationtime',
xtype : 'datetimefield',
name : 'estore.creationtime',
anchor : '95%'
}
,{
fieldLabel : '删除标识',
id : 'add_dr',
xtype : 'numberfield',
name : 'estore.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'add_back2',
xtype : 'textfield',
name : 'estore.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'add_back4',
xtype : 'textfield',
name : 'estore.back4',
width : '80%'
}
,{
fieldLabel : '用户表主键',
id : 'add_userid',
xtype : 'numberfield',
name : 'estore.userid',
width : '80%'
}
,{
fieldLabel : '是否自营店铺',
id : 'add_selftsales',
xtype : 'textfield',
name : 'estore.selftsales',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '保存',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(addestoreForm, "estore_addNewInfo.action", queryestoreStore, "添加信息")
				addestoreWin.hide();	
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				addestoreWin.hide();
				addestoreForm.form.reset();
			}
		}]

	});

	addestoreWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : addestoreForm
	});

	addestore = function() {
		addestoreWin.show();
		
//		Ext.getCmp("idNumber").focus(false, 1000);
	
	};
	
	updateestoreReader = new Ext.data.JsonReader({
		root : 'tempList',
		successProperty : '@success'
	}, [,{
name : 'estore.idNumber',
mapping : 'idNumber'
}
,{
name : 'estore.corplogo',
mapping : 'corplogo'
}
,{
name : 'estore.corpname',
mapping : 'corpname'
}
,{
name : 'estore.creationNo',
mapping : 'creationNo'
}
,{
name : 'estore.organization',
mapping : 'organization'
}
,{
name : 'estore.address',
mapping : 'address'
}
,{
name : 'estore.legalname',
mapping : 'legalname'
}
,{
name : 'estore.id',
mapping : 'id'
}
,{
name : 'estore.validtime',
mapping : 'validtime'
}
,{
name : 'estore.legalphoneNo',
mapping : 'legalphoneNo'
}
,{
name : 'estore.legalqq',
mapping : 'legalqq'
}
,{
name : 'estore.legalwechat',
mapping : 'legalwechat'
}
,{
name : 'estore.businesslic',
mapping : 'businesslic'
}
,{
name : 'estore.idpositive',
mapping : 'idpositive'
}
,{
name : 'estore.idopposite',
mapping : 'idopposite'
}
,{
name : 'estore.accountname',
mapping : 'accountname'
}
,{
name : 'estore.accountbank',
mapping : 'accountbank'
}
,{
name : 'estore.bankaddress',
mapping : 'bankaddress'
}
,{
name : 'estore.bankaccount',
mapping : 'bankaccount'
}
,{
name : 'estore.validordertime',
mapping : 'validordertime'
}
,{
name : 'estore.handleordertime',
mapping : 'handleordertime'
}
,{
name : 'estore.deliverytime',
mapping : 'deliverytime'
}
,{
name : 'estore.password',
mapping : 'password'
}
,{
name : 'estore.contactname',
mapping : 'contactname'
}
,{
name : 'estore.contactphoneNo',
mapping : 'contactphoneNo'
}
,{
name : 'estore.contactqq',
mapping : 'contactqq'
}
,{
name : 'estore.contactwechat',
mapping : 'contactwechat'
}
,{
name : 'estore.creationtime',
mapping : 'creationtime'
}
,{
name : 'estore.ts',
mapping : 'ts'
}
,{
name : 'estore.dr',
mapping : 'dr'
}
,{
name : 'estore.back1',
mapping : 'back1'
}
,{
name : 'estore.back2',
mapping : 'back2'
}
,{
name : 'estore.back3',
mapping : 'back3'
}
,{
name : 'estore.back4',
mapping : 'back4'
}
,{
name : 'estore.back5',
mapping : 'back5'
}
,{
name : 'estore.userid',
mapping : 'userid'
}
,{
name : 'estore.isStop',
mapping : 'isStop'
}
,{
name : 'estore.selftsales',
mapping : 'selftsales'
}
]
	);
		
	updateestoreForm = new Ext.FormPanel({
		title : '请输入您要修改的信息',
		frame : true,
		waitMsgTarget : true,
		reader : updateestoreReader,
		items : [{
layout : 'column',
items : [
{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '主键',
id : 'uppdate_idNumber',
xtype : 'numberfield',
name : 'estore.idNumber',
width : '80%'
}
,{
fieldLabel : '企业名字',
id : 'uppdate_corpname',
xtype : 'textfield',
name : 'estore.corpname',
width : '80%'
}
,{
fieldLabel : '组织机构代码证',
id : 'uppdate_organization',
xtype : 'textfield',
name : 'estore.organization',
width : '80%'
}
,{
fieldLabel : '法人名字',
id : 'uppdate_legalname',
xtype : 'textfield',
name : 'estore.legalname',
width : '80%'
}
,{
fieldLabel : '证件截止有效期',
id : 'uppdate_validtime',
xtype : 'textfield',
name : 'estore.validtime',
width : '80%'
}
,{
fieldLabel : '法人QQ号',
id : 'uppdate_legalqq',
xtype : 'textfield',
name : 'estore.legalqq',
width : '80%'
}
,{
fieldLabel : '企业营业执照副本图',
id : 'uppdate_businesslic',
xtype : 'textfield',
name : 'estore.businesslic',
width : '80%'
}
,{
fieldLabel : '法人身份证反面图',
id : 'uppdate_idopposite',
xtype : 'textfield',
name : 'estore.idopposite',
width : '80%'
}
,{
fieldLabel : '开户银行',
id : 'uppdate_accountbank',
xtype : 'textfield',
name : 'estore.accountbank',
width : '80%'
}
,{
fieldLabel : '银行账户',
id : 'uppdate_bankaccount',
xtype : 'textfield',
name : 'estore.bankaccount',
width : '80%'
}
,{
fieldLabel : '处理订单时间',
id : 'uppdate_handleordertime',
xtype : 'datetimefield',
name : 'estore.handleordertime',
anchor : '95%'
}
,{
fieldLabel : '登录密码',
id : 'uppdate_password',
xtype : 'textfield',
name : 'estore.password',
width : '80%'
}
,{
fieldLabel : '联系人电话',
id : 'uppdate_contactphoneNo',
xtype : 'textfield',
name : 'estore.contactphoneNo',
width : '80%'
}
,{
fieldLabel : '联系人微信',
id : 'uppdate_contactwechat',
xtype : 'textfield',
name : 'estore.contactwechat',
width : '80%'
}
,{
fieldLabel : '时间戳',
id : 'uppdate_ts',
xtype : 'textfield',
name : 'estore.ts',
width : '80%'
}
,{
fieldLabel : '预留字段1',
id : 'uppdate_back1',
xtype : 'textfield',
name : 'estore.back1',
width : '80%'
}
,{
fieldLabel : '预留字段3',
id : 'uppdate_back3',
xtype : 'textfield',
name : 'estore.back3',
width : '80%'
}
,{
fieldLabel : '预留字段5',
id : 'uppdate_back5',
xtype : 'numberfield',
name : 'estore.back5',
width : '80%'
}
,{
fieldLabel : '是否停运',
id : 'uppdate_isStop',
xtype : 'textfield',
name : 'estore.isStop',
width : '80%'
}
]
},{
columnWidth: .5,
layout : 'form',
items : [
{
fieldLabel : '企业logo图片名称',
id : 'uppdate_corplogo',
xtype : 'textfield',
name : 'estore.corplogo',
width : '80%'
}
,{
fieldLabel : '注册号',
id : 'uppdate_creationNo',
xtype : 'textfield',
name : 'estore.creationNo',
width : '80%'
}
,{
fieldLabel : '产地详细地址',
id : 'uppdate_address',
xtype : 'textfield',
name : 'estore.address',
width : '80%'
}
,{
fieldLabel : '法人身份证号码',
id : 'uppdate_id',
xtype : 'textfield',
name : 'estore.id',
width : '80%'
}
,{
fieldLabel : '法人手机号',
id : 'uppdate_legalphoneNo',
xtype : 'textfield',
name : 'estore.legalphoneNo',
width : '80%'
}
,{
fieldLabel : '法人微信号',
id : 'uppdate_legalwechat',
xtype : 'textfield',
name : 'estore.legalwechat',
width : '80%'
}
,{
fieldLabel : '法人身份证正面图',
id : 'uppdate_idpositive',
xtype : 'textfield',
name : 'estore.idpositive',
width : '80%'
}
,{
fieldLabel : '银行开户名',
id : 'uppdate_accountname',
xtype : 'textfield',
name : 'estore.accountname',
width : '80%'
}
,{
fieldLabel : '银行所在地',
id : 'uppdate_bankaddress',
xtype : 'textfield',
name : 'estore.bankaddress',
width : '80%'
}
,{
fieldLabel : '最迟确认订单时间',
id : 'uppdate_validordertime',
xtype : 'datetimefield',
name : 'estore.validordertime',
anchor : '95%'
}
,{
fieldLabel : '最快到货时间',
id : 'uppdate_deliverytime',
xtype : 'datetimefield',
name : 'estore.deliverytime',
anchor : '95%'
}
,{
fieldLabel : '联系人名字',
id : 'uppdate_contactname',
xtype : 'textfield',
name : 'estore.contactname',
width : '80%'
}
,{
fieldLabel : '联系人QQ',
id : 'uppdate_contactqq',
xtype : 'textfield',
name : 'estore.contactqq',
width : '80%'
}
,{
fieldLabel : '注册时间',
id : 'uppdate_creationtime',
xtype : 'datetimefield',
name : 'estore.creationtime',
anchor : '95%'
}
,{
fieldLabel : '删除标识',
id : 'uppdate_dr',
xtype : 'numberfield',
name : 'estore.dr',
width : '80%'
}
,{
fieldLabel : '预留字段2',
id : 'uppdate_back2',
xtype : 'textfield',
name : 'estore.back2',
width : '80%'
}
,{
fieldLabel : '预留字段4',
id : 'uppdate_back4',
xtype : 'textfield',
name : 'estore.back4',
width : '80%'
}
,{
fieldLabel : '用户表主键',
id : 'uppdate_userid',
xtype : 'numberfield',
name : 'estore.userid',
width : '80%'
}
,{
fieldLabel : '是否自营店铺',
id : 'uppdate_selftsales',
xtype : 'textfield',
name : 'estore.selftsales',
width : '80%'
}
]
}
]}
],
		buttons : [{
			text : '修改',
			iconCls:'icon-save',
			disabled : false,
			handler : function() {
				check(updateestoreForm, "estore_update.action", queryestoreStore, "修改信息")
				updateestoreWin.hide();
			}
		}, {
			text : '取消',
			iconCls:'li-cancel',
			handler : function() {
				updateestoreWin.hide();
				updateestoreForm.form.reset();
			}
		}]
	});

	updateestoreWin = new Ext.Window({
		layout : 'form',
		width : 665,
		height : 330,
		plain : true,
		closable : false,
		items : updateestoreForm
	});

	update = function() {
		_record = queryestoreGrid.getSelectionModel().getSelected();
		flag = queryestoreGrid.getSelectionModel().getSelections();
		if (flag.length == 1) {
			updateestoreWin.show();
					
			updateestoreForm.getForm().load({
				url : 'estore_findById.action?estore.idNumber='+ _record.get('idNumber'),
				waitMsg : '正在载入数据...',
				failure : function() {
					Ext.Msg.alert('友情提示', '载入失败');
				},
				success : function() {
				}
			});
		} else
			Ext.Msg.alert('友情提示', '请选择一条需要修改的信息！');
	};






	
	// 加载页面后默认焦点
	Ext.getCmp("select_idNumber").focus(false, 1000);
 });
 
