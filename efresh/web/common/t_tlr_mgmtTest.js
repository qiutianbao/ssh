var queryt_tlr_mgmt_pullerStore;			
var queryt_tlr_mgmt_mangerStore;
var tabpanel;
var queryt_tlr_mgmtStore;
var selectSaleForm;
var selectPullerForm;
var selectMangerForm;
var queryt_tlr_mgmt_mangerGrid;

var queryt_tlr_mgmt_pullerGrid;
var queryt_tlr_mgmtGrid;
Ext.onReady( function(){
 	Ext.BLANK_IMAGE_URL = 'ExtJs/resources/images/default/s.gif';
	Ext.QuickTips.init();
	haveRight('common/t_tlr_mgmtView.jsp');
	 stateStore = new Ext.data.SimpleStore({
			fields : ['id', 'name'],
			data : [['0', '待审批'], ['1', '审批通过'], ['2', '审批不通过']]
		});
	//查询买家信息
	 queryt_tlr_mgmtStore = new Ext.data.JsonStore({
		 //默认查询广东省广州市
			url : 'mgmt_waitingOperateList.action',
			root : 't_tlr_mgmtList',
			totalProperty : 'listCount',
			baseParams : {
				start : 0,
				limit : 10,
				flag : 'baseInfo',
				tlr_type:'0'
			},
			fields : [{
				name : 'idNumber',
				mapping : 'idNumber' 
				},{
	name : 'phone',
	mapping : 'phone' 
	}
	,{
	name : 'tlr_name',
	mapping : 'tlr_name'
	}
	,{
	name : 'deliveryaddress',
	mapping : 'deliveryaddress'
	}
	,{
	name : 'stallsname',
	mapping : 'stallsname'
	}
	,{
	name : 'creationtime',
	mapping : 'creationtime'
	},{
		name : 'address_status',
		mapping : 'address_status'
	},{
		name : 'examine',
		mapping : 'examine'
	},{
		name:'nameup',
		mapping : 'nameup'
	},{
		name : 'phoneup',
		mapping : 'phoneup'
	},{
		name: 'deliveryaddress2',
		mapping : 'deliveryaddress2'
	},{
		name : 'stallsnameup',
		mapping : 'stallsnameup'
	}
	],
			autoLoad : false
			
		});
	 //买家信息
	 selectSaleForm = new Ext.form.FormPanel({
			labelAlign : 'right',
			frame : true,
			labelWidth : 70,
			padding : 5,
			layout : 'form',
			items : [{
			columnWidth: .3,
			layout : 'form',
			items : [{
				fieldLabel : '注册时间',
				id : 'sale_select_feedbacktime',
				xtype : 'datetimefield',
				width :160
				},{
					fieldLabel : '至',
					id : 'sale_select_feedbacktime2',
					xtype : 'datetimefield',
					//value:new Date(),
					name : '',
					width :160
				},{
	            	xtype :'combo',
	            	id:'sale_stateId',  
	                width : 160,  
	                hiddenName : 'id',  
	                name : 'name',  
	                allowBlank : false,  
	                triggerAction : 'all',  
	                editable : false,
	                displayField : 'name',
	                valueField : 'id',  
	                mode : 'local',
	                selectOnFocus:true,
	                store : stateStore,  
	                fieldLabel : '状态',
	               	emptyText:'请选择状态'
	              }
				]},
				{

			layout : 'form',
			items : [{
	         	xtype :'combo',
	         	width : 160,  
	             id:'sale_provinceid',  
	             hiddenName : 'id',
	             name : 'name',  
	             triggerAction : 'all',  
	             allowBlank : false,  
	             editable : false,
	             displayField : 'name',
	             valueField : 'id',  
	             mode : 'local',  
	             store : province_store,
	             selectOnFocus:true,
	             fieldLabel : '省',  
	             emptyText:'请选择',  
	             listeners : {  
	                 select: function() {  
	                     try{  
	                     	var citycombo=Ext.getCmp("sale_cityid");  
	                     	var areacombo = Ext.getCmp('sale_areaid');  
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
	           },
	           {
         	xtype :'combo',
         	id:'sale_cityid',  
             width : 160,  
             hiddenName : 'id',  
             name : 'name',  
             allowBlank : false,  
             triggerAction : 'all',  
             editable : false,
             displayField : 'name',
             valueField : 'id',  
             mode : 'local', 
             store : city_store,  
             selectOnFocus:true,
             fieldLabel : '市',
            	emptyText:'请选择',
            	listeners:{  
                 select:function(combo,record,index){
                     try{  
                         var areacombo = Ext.getCmp('sale_areaid');  
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
            	xtype :'combo',
             	id:'sale_areaid',  
                 width : 160,  
                 hiddenName : 'id',  
                 name : 'name',  
                 allowBlank : false,  
                 triggerAction : 'all',  
                 editable : false,
                 displayField : 'name',
                 valueField : 'id',  
                 mode : 'local',
                 selectOnFocus:true,
                 store : area_store,  
                 fieldLabel : '区',
                	emptyText:'请选择'
               },{
       			xtype : 'button',
    			text : '重置',
    			width : 100,
    			style:'float:left;margin:0 5px',
    			iconCls : 'icon-reset',
    			handler : function() {
    				selectSaleForm.form.reset();
    			}},
               {
       			xtype : 'button',
    			text : '查询',
    			width : 100,
    			iconCls : 'icon-select',
    			handler : function() {
    				var feedstarttime = Ext.getCmp('sale_select_feedbacktime').getValue();
    				var feedendtime=Ext.getCmp('sale_select_feedbacktime2').getValue();
    				var provinceid=Ext.get('sale_provinceid').dom.value;
    				var cityid=Ext.get('sale_cityid').dom.value;
    				var areaid=Ext.get('sale_areaid').dom.value;
    				var state=Ext.getCmp('sale_stateId').getValue();
    				if(areaid=='请选择区'){
    					areaid="";
    				}
    				queryt_tlr_mgmtStore.reload({params:{start:0,limit:Ext.getCmp('pageBar1').pageSize,starttime:dataformat(feedstarttime),endtime:dataformat(feedendtime),
    					province:provinceid,city:cityid,area:areaid,state:state
    				}});
    			}}]
			},{
			columnWidth: .3,
			layout : 'form',
			items : [{
			layout : 'column',
			items : [{
			columnWidth : 0.5,
			items : []
			},{
			columnWidth : 0.5,
			items : []}
			]}]}]
	});
	 //查询卖家信息
	 queryt_tlr_mgmt_pullerStore = new Ext.data.JsonStore({
		 //默认查询广东省广州市
			url : 'mgmt_waitingOperateLists.action',
			root : 'list',
			totalProperty : 'listCount',
			baseParams : {
				start : 0,
				limit : 10,
				flag : 'baseInfo',
			//	province:'广东省',
			//	city:'广州市',
				tlr_type:'1',
				state:'0'
			},
			fields : [{
				name : 'idNumber',
				mapping : 't_tlr_mgmt.idNumber' 
				},{
	name : 'phone',
	mapping : 't_tlr_mgmt.phone' 
	}
	,{
	name : 'tlr_name',
	mapping : 't_tlr_mgmt.tlr_name'
	}
	,{
	name : 'address',
	mapping : 'estore.address'
	}
	,{
	name : 'addressup',
	mapping : 'estore.addressup'
	}
	,{
	name : 'corpname',
	mapping : 'estore.corpname'
	},{
		name : 'creationtime',
		mapping : 'estore.creationtime'
	},{
		name : 'examine',
		mapping : 't_tlr_mgmt.examine'
	}
	],
			autoLoad : false
			
		});
	 //卖家信息
	 selectPullerForm = new Ext.form.FormPanel({
			labelAlign : 'right',
			frame : true,
			labelWidth : 70,
			padding : 5,
			layout : 'form',
			items : [{
			columnWidth: .3,
			layout : 'form',
			items : [{
				fieldLabel : '注册时间',
				id : 'puller_select_feedbacktime',
				xtype : 'datetimefield',
				style:'float:left',
				width : 160
				},{
					fieldLabel : '至',
					id : 'puller_select_feedbacktime2',
					xtype : 'datetimefield',
					style:'float:left',
					//value:new Date(),
					name : '',
					width : 160
				},{
	            	xtype :'combo',
	            	id:'stateId',  
	                width : 160,  
	                style:'float:left',
	                hiddenName : 'id',  
	                name : 'name',  
	                allowBlank : false,  
	                triggerAction : 'all',  
	                editable : false,
	                displayField : 'name',
	                valueField : 'id',  
	                mode : 'local',
	                selectOnFocus:true,
	                store : stateStore,  
	                fieldLabel : '状态',
	               	emptyText:'请选择状态'
	              }
				]},
				
				
				{
			layout : 'form',
			items : [{
	         	xtype :'combo',
	         	width : 160,  
	         	style:'float:left',
	             id:'puller_provinceid',  
	             hiddenName : 'id',
	             name : 'name',  
	             triggerAction : 'all',  
	             allowBlank : false,  
	             editable : false,
	             displayField : 'name',
	             valueField : 'id',  
	             mode : 'local',  
	             store : province_store,
	             selectOnFocus:true,
	             fieldLabel :'省',  
	             emptyText:'请选择',  
	             listeners : {  
	                 select: function() {  
	                     try{  
	                     	var citycombo=Ext.getCmp("puller_cityid");  
	                     	var areacombo = Ext.getCmp('puller_areaid');  
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
	           },
	           {
         	xtype :'combo',
         	id:'puller_cityid',  
             width : 160,  
             style:'float:left',
             hiddenName : 'id',  
             name : 'name',  
             allowBlank : false,  
             triggerAction : 'all',  
             editable : false,
             displayField : 'name',
             valueField : 'id',  
             mode : 'local', 
             store : city_store,  
             selectOnFocus:true,
             fieldLabel : '市',
            	emptyText:'请选择',
            	listeners:{  
                 select:function(combo,record,index){
                     try{  
                         var areacombo = Ext.getCmp('puller_areaid');  
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
           },{
            	xtype :'combo',
             	id:'puller_areaid',  
                 width : 160,  
                 style:'float:left',
                 hiddenName : 'puller_stateId',  
                 name : 'name',  
                 allowBlank : false,  
                 triggerAction : 'all',  
                 editable : false,
                 displayField : 'name',
                 valueField : 'id',  
                 mode : 'local',
                 selectOnFocus:true,
                 store : area_store,  
                 fieldLabel : '区',
                emptyText:'请选择'
               },{
       			xtype : 'button',
    			text : '重置',
    			width : 100,
       			style:'float:left;margin:0 5px;',
    			iconCls : 'icon-reset',
    			handler : function() {
    				selectPullerForm.form.reset();
    			}},
               {
       			xtype : 'button',
       			text : '查询',
       			width : 100,
       			iconCls : 'icon-select',
       			handler : function() {
       				var feedstarttime = Ext.getCmp('puller_select_feedbacktime').getValue();
       				var feedendtime=Ext.getCmp('puller_select_feedbacktime2').getValue();
       				var provinceid=Ext.get('puller_provinceid').dom.value;
       				var cityid=Ext.get('puller_cityid').dom.value;
       				var areaid=Ext.get('puller_areaid').dom.value;
       				var state=Ext.get('puller_stateId').dom.value;
       				if(areaid=='请选择区'){
       					areaid="";
       				}
       					queryt_tlr_mgmt_pullerStore.reload({params:{start:0,limit:Ext.getCmp('pageBar2').pageSize,starttime:dataformat(feedstarttime),endtime:dataformat(feedendtime),
       					province:provinceid,city:cityid,area:areaid,state:state
       				}});
       			}}]
			},{
			columnWidth: .3,
			layout : 'form',
			items : [{
			layout : 'column',
			items : [{
			columnWidth : 0.5,
			items : []
			},{
			columnWidth : 0.5,
			items : []}
			]}]}]
	});
	 //查询管理员信息
	 queryt_tlr_mgmt_mangerStore = new Ext.data.JsonStore({
		 //默认查询广东省广州市
			url : 'mgmt_waitingOperate.action',
			root : 't_tlr_mgmtList',
			totalProperty : 'listCount',
			baseParams : {
				start : 0,
				limit : 10,
				flag : 'baseInfo',
			//	province:'广东省',
			//	city:'广州市',
				tlr_type:'2',//管理员
				state:'0'
			},
			fields : [{
				name : 'idNumber',
				mapping : 'idNumber' 
				},{
	name : 'phone',
	mapping : 'phone' 
	}
	,{
	name : 'tlr_name',
	mapping : 'tlr_name'
	}
	,{
	name : 'deliveryaddress',
	mapping : 'deliveryaddress'
	}
	,{
	name : 'stallsname',
	mapping : 'stallsname'
	}
	,{
	name : 'creationtime',
	mapping : 'creationtime'
	},{
		name : 'address_status',
		mapping : 'address_status'
	},{
		name : 'examine',
		mapping : 'examine'
	},{
		name :'phoneup',
		mapping : 'phoneup'
	}
	],
			autoLoad : false
			
		});

	
	 //管理员信息
	 selectMangerForm = new Ext.form.FormPanel({
			labelAlign : 'right',
			frame : true,
			labelWidth : 70,
			padding : 5,
			layout : 'form',
			items : [{
			columnWidth: .3,
			layout : 'form',
			items : [{
			fieldLabel : '手机号码',
			id : 'select_phone',
			xtype : 'textfield',
			width : 150
			},{
				fieldLabel : '姓名',
				id : 'select_tlr_name',
				xtype : 'textfield',
				//value:new Date(),
				name : '',
				width :150
			},{
				xtype : 'button',
				text : '重置',
				width : 100,
				style:'float:left;margin:0 5px',
				iconCls : 'icon-reset',
				handler : function() {
					selectMangerForm.form.reset();
				}},{
					xtype : 'button',
					text : '查询',
					width : 100,
					iconCls : 'icon-select',
					handler : function() {
						var phone = Ext.getCmp('select_phone').getValue();
						alert(phone);
						var tlr_name=Ext.getCmp('select_tlr_name').getValue();
						queryt_tlr_mgmt_mangerStore.reload({cparams:{start:0,limit:Ext.getCmp('pageBar3').pageSize,
							phone:phone,tlr_name:tlr_name,tlr_type:2
						}});
					}}]},{
			columnWidth: .3,
			layout : 'form',
			items : []
			},{
			columnWidth: .3,
			layout : 'form',
			items : [{
			layout : 'column',
			items : [{
			columnWidth : 0.5,
			items : []
			},{
			columnWidth : 0.5,
			items : []}
			]}]}]
	});
	 //Ext.getCmp("stateId").setValue('0');
	// Ext.getCmp("sale_stateId").setValue('0');
//	 Ext.getCmp("puller_stateId").setValue('0');
   /*  Ext.getCmp("provinceid").store.on("load", function(store, records){
 	    var procombo = Ext.getCmp("provinceid");
         var citycombo=Ext.getCmp("cityid");  
         var selected = procombo.getValue();
         if (selected) {  
                var obj = store.findRecord(procombo.valueField, selected);  
                procombo.select(obj);    
         } else {  
         	procombo.setValue(440000);  
         } 
     	citycombo.clearValue();  
         citycombo.store.load({
            params:{  
           	 areaid:procombo.getValue()  
            }  
         });
	    });*/
/*	    Ext.getCmp("cityid").store.on("load", function(store, records){
	            var citycombo = Ext.getCmp("cityid");
	            var selected = citycombo.getValue();  
	            if (selected) {  
	                   var obj = store.findRecord(citycombo.valueField, selected);  
	                   citycombo.select(obj);    
	            } else {  
	            	citycombo.setValue(records[0].get('id'));  
	            } 
	    });*/
/*	    Ext.getCmp("areaid").store.on("load", function(store, records){
	    	    var areacombo = Ext.getCmp("areaid");
	            var selected = areacombo.getValue();  
	            if (selected) {  
	                   var obj = store.findRecord(areacombo.valueField, selected);  
	                   areacombo.select(obj);    
	            } else {  
	            	areacombo.setValue(records[0].get('id'));  
	            } 
	    });*/
     
	    /*
	     Ext.getCmp("sale_provinceid").store.on("load", function(store, records){
	  	    var procombo = Ext.getCmp("sale_provinceid");
	          var citycombo=Ext.getCmp("sale_cityid");  
	          var selected = procombo.getValue();
	          if (selected) {  
	                 var obj = store.findRecord(procombo.valueField, selected);  
	                 procombo.select(obj);    
	          } else {  
	          	procombo.setValue(440000);  
	          } 
	      	citycombo.clearValue();  
	          citycombo.store.load({
	             params:{  
	            	 areaid:procombo.getValue()  
	             }  
	          });
	 	    });*/
	 	   /* Ext.getCmp("sale_cityid").store.on("load", function(store, records){
	 	            var citycombo = Ext.getCmp("sale_cityid");
	 	            var selected = citycombo.getValue();  
	 	            if (selected) {  
	 	                   var obj = store.findRecord(citycombo.valueField, selected);  
	 	                   citycombo.select(obj);    
	 	            } else {  
	 	            	citycombo.setValue(records[0].get('id'));  
	 	            } 
	 	    });*/
	 	/*    Ext.getCmp("sale_areaid").store.on("load", function(store, records){
	 	    	    var areacombo = Ext.getCmp("sale_areaid");
	 	            var selected = areacombo.getValue();  
	 	            if (selected) {  
	 	                   var obj = store.findRecord(areacombo.valueField, selected);  
	 	                   areacombo.select(obj);    
	 	            } else {  
	 	            	areacombo.setValue(records[0].get('id'));  
	 	            } 
	 	    });*/
	 	    
	 	 /*   
	 	     Ext.getCmp("puller_provinceid").store.on("load", function(store, records){
	 	 	    var procombo = Ext.getCmp("puller_provinceid");
	 	         var citycombo=Ext.getCmp("puller_cityid");  
	 	         var selected = procombo.getValue();
	 	         if (selected) {  
	 	                var obj = store.findRecord(procombo.valueField, selected);  
	 	                procombo.select(obj);    
	 	         } else {  
	 	         	procombo.setValue(440000);  
	 	         } 
	 	     	citycombo.clearValue();  
	 	         citycombo.store.load({
	 	            params:{  
	 	           	 areaid:procombo.getValue()  
	 	            }  
	 	         });
	 		    });*/
	 		/*    Ext.getCmp("puller_cityid").store.on("load", function(store, records){
	 		            var citycombo = Ext.getCmp("puller_cityid");
	 		            var selected = citycombo.getValue();  
	 		            if (selected) {  
	 		                   var obj = store.findRecord(citycombo.valueField, selected);  
	 		                   citycombo.select(obj);    
	 		            } else {  
	 		            	citycombo.setValue(records[0].get('id'));  
	 		            } 
	 		    });*/
	 		/*    Ext.getCmp("puller_areaid").store.on("load", function(store, records){
	 		    	    var areacombo = Ext.getCmp("puller_areaid");
	 		            var selected = areacombo.getValue();  
	 		            if (selected) {  
	 		                   var obj = store.findRecord(areacombo.valueField, selected);  
	 		                   areacombo.select(obj);    
	 		            } else {  
	 		            	areacombo.setValue(records[0].get('id'));  
	 		            } 
	 		    });*/
	    
	queryt_tlr_mgmtStore.load();
	queryt_tlr_mgmt_pullerStore.load();
	queryt_tlr_mgmt_mangerStore.load();
	var sm = new Ext.grid.CheckboxSelectionModel();
	//买家
	queryt_tlr_mgmtGrid = new Ext.grid.GridPanel({
		id:'t_tlr_mgmtGrid',
		store : queryt_tlr_mgmtStore,
		sm : sm,
		columns : [ sm, rowNum
		,{
		header : '姓名',
		dataIndex : 'tlr_name',
		width : 120 
		},
		{
			header : '修改姓名',
			dataIndex : 'nameup',
			width : 120 
		}
		,{
		header : '手机号码',
		dataIndex : 'phone',
		width : 120 
		},
		{
			header : '修改手机号码',
			dataIndex : 'phoneup',
			width : 120 
			}
		,{
			header : '收货地址',
			dataIndex : 'deliveryaddress',
			width : 180
		
		},{
			header : '修改收货地址',
			dataIndex : 'deliveryaddress2',
			width : 180
			
		}
		,{
			header : '档口名称',
			dataIndex : 'stallsname',
			width : 160
		
		},{
			header : '修改档口名称',
			dataIndex : 'stallsnameup',
			width : 160
		}
		,{
			header : '注册时间',
			dataIndex : 'creationtime',
			width : 180,
			//renderer:Ext.util.Format.dateRenderer('Y-m-d H:i:s')
			renderer:function(value){
				return new Date(value).format(Date.patterns.ISO8601Long)
			}
		},
		{
			header : '状态',
			dataIndex : 'examine',
			width : 180,
			renderer:function(value){
				if(value == 0){
					return "待审核"
				}
				if(value == 1){
					return "审批通过"
				}
				if(value == 2){
					return "审核不通过"
				}
			}
		},{
			header : '操作',
			dataIndex : 'phone',
			width : 180 ,
			renderer : function(value, meta, record) {
				var address_status=record.get('address_status');
				var examine=record.get('examine');
				var id = record.get("idNumber");
				var tempString = '<div><a href="javascript:void(0)" onclick="pass('+id+','+value+','+address_status+','+examine+')"  class="tcode">同意</a><a href="javascript:void(0)" onclick="unpass('+value+','+address_status+','+examine+')"  class="tdelete">不同意</a></div>';
				return tempString;
				}
			}],
		width : '100%',
		height : 375,
		tbar : [{
			text : '通过',
			iconCls:'icon-add',
			handler : function() {
				mulitPass();
			}
		},'-',{
			text : '不通过',
			iconCls:'icon-del',
			handler : function() {
				mulitPass();
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar1',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_tlr_mgmtStore,
			emptyMsg : "没有记录"
		}]
	 });
	queryt_tlr_mgmt_pullerGrid = new Ext.grid.GridPanel({
		id:'t_tlr_mgmtGrid',
		store : queryt_tlr_mgmt_pullerStore,
		sm : sm,
		columns : [ sm, rowNum
		,{
		header : '姓名',
		dataIndex : 'tlr_name',
		width : 120 
		}
		,{
		header : '手机号码',
		dataIndex : 'phone',
		width : 120 
		},{
			header : '公司注册地址',
			dataIndex : 'address',
			width : 180
			//renderer:Ext.util.Format.dateRenderer('Y-m-d H:i:s')
		},{
			header : '修改公司注册地址',
			dataIndex : 'addressup',
			width : 180
			//renderer:Ext.util.Format.dateRenderer('Y-m-d H:i:s')
		}
		,{
			header : '公司名称',
			dataIndex : 'corpname',
			width : 180
			//renderer:Ext.util.Format.dateRenderer('Y-m-d H:i:s')
		},{
			header : '注册时间',
			dataIndex : 'creationtime',
			width : 180,
			//renderer:Ext.util.Format.dateRenderer('Y-m-d H:i:s')
			renderer:function(value){
				return new Date(value).format(Date.patterns.ISO8601Long)
			}
		},{
			header : '状态',
			dataIndex : 'examine',
			width : 180,
			//renderer:Ext.util.Format.dateRenderer('Y-m-d H:i:s')
			renderer:function(value){
				if(value ==0){
					return "待审批";
				}
				if(value == 1){
					return "审批通过"
				}
				if(value == 2){
					return "审批不通过"
				}
			}
		},{
			header : '操作',
			dataIndex : 'phone',
			width : 180 ,
			renderer : function(value, meta, record) {
				var address_status=record.get('address_status');
				var examine=record.get('examine');
				var tempString = '<div><a href="javascript:void(0)" onclick="pass('+value+','+address_status+','+examine+')"  class="tcode">同意</a><a href="javascript:void(0)" onclick="unpass('+value+','+address_status+','+examine+')"  class="tdelete">不同意</a></div>';
				return tempString;
				}
			}],
		width : '100%',
		height : 375,
		tbar : [{
			text : '通过',
			iconCls:'icon-add',
			handler : function() {
				mulitPass();
			}
		},'-',{
			text : '不通过',
			iconCls:'icon-del',
			handler : function() {
				mulitUnPass();
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar2',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_tlr_mgmt_pullerStore,
			emptyMsg : "没有记录"
		}]
	 });
	queryt_tlr_mgmt_mangerGrid = new Ext.grid.GridPanel({
		id:'t_tlr_mgmtGrid',
		store : queryt_tlr_mgmt_mangerStore,
		sm : sm,
		columns : [ sm, rowNum
		,{
		header : '姓名',
		dataIndex : 'tlr_name',
		width : 120 
		}
		,{
		header : '手机号码',
		dataIndex : 'phone',
		width : 120 
		},{
			header : '申请修改手机号',
			dataIndex : 'phoneup',
			width : 180
			//renderer:Ext.util.Format.dateRenderer('Y-m-d H:i:s')
		},{
			header : '注册时间',
			dataIndex : 'creationtime',
			width : 180,
			//renderer:Ext.util.Format.dateRenderer('Y-m-d H:i:s')
			renderer:function(value){
				return new Date(value).format(Date.patterns.ISO8601Long)
				
			}
		},{
			header : '操作',
			dataIndex : 'phone',
			width : 180 ,
			renderer : function(value, meta, record) {
				var address_status=record.get('address_status');
				var examine=record.get('examine');
				var tempString = '<div><a href="javascript:void(0)" onclick="pass('+value+','+address_status+','+examine+')"  class="tcode" style="float:none;margin:0 auto">修改</a></div>';
				return tempString;
				}
			}],
		width : '100%',
		height : 375,
		tbar : [{
			text : '新增',
			iconCls:'icon-add',
			handler : function() {
				
				addsystem();
			}
		},'-',{
			text : '删除',
			iconCls:'icon-del',
			handler : function() {
				//mulitUnPass();
			}
		}],
		bbar : [{
			xtype : 'paging',
			id : 'pageBar3',
			plugins : [new Ext.ux.plugins.PageComboResizer()],
			pageSize : 10,
			store : queryt_tlr_mgmt_mangerStore,
			emptyMsg : "没有记录"
		}]
	 });
	//生成TAB页
	tabpanel = new Ext.TabPanel({  
	    id: "t_tlr_mainTab",  
	    renderTo: "t_tlr_mgmtGrid",  
	    width: '100%',  
	    activeTab: 0,  
	    defaults: {  
	        autoScroll: true,  
	        autoHeight:true,  
	    },  
	    items:[ {
            id: "tab1",
            title: '买家',
            items:[selectSaleForm, queryt_tlr_mgmtGrid]
         },{
             id: "tab2",
             title: '卖家',
             style:'display:block;text-align: center',
             items:[selectPullerForm, queryt_tlr_mgmt_pullerGrid]
          },{
              id: "tab3",
              title: '管理员',
           //   items:[selectMangerForm, queryt_tlr_mgmt_mangerGrid]
              items:[selectMangerForm,queryt_tlr_mgmt_mangerGrid]
           }],
	    enableTabScroll: true  
	});  
	var divHeight = document.getElementById('t_tlr_mgmtGrid').offsetHeight;
	var divWidth = document.getElementById('t_tlr_mgmtGrid').offsetWidth;
	tabpanel.setHeight(divHeight);
	tabpanel.setWidth(divWidth);
//	queryt_tlr_mgmtGrid.setWidth(tabpanel.getWidth());
//	queryt_tlr_mgmtGrid.setHeight(tabpanel.getHeight()-selectFeedBackForm.getHeight());
	
	pass = function(id,phone,address_status,examine) {
		oneOperate("t_tlr_mgmt_operate.action?t_tlr_mgmt.idNumber="+id+"&t_tlr_mgmt.phone="+phone+"&t_tlr_mgmt.examine=1"+"&t_tlr_mgmt.address_status="+address_status,queryt_tlr_mgmtStore,"审批通过手机号为"+phone);
	};

	unpass = function(phone,address_status,examine) {
		oneOperate("t_tlr_mgmt_operate.action?t_tlr_mgmt.phone="+phone+"&t_tlr_mgmt.examine=2"+"&t_tlr_mgmt.address_status="+address_status,queryt_tlr_mgmtStore,"审批通过手机号为"+phone);
	};
	mulitPass=function() {
		var url="t_tlr_mgmt_mulitOperate.action";
		_record = queryt_tlr_mgmtGrid.getSelectionModel().getSelections();
		//alert(_record);
		if (_record=="") {
			Ext.MessageBox.alert('提示信息','请选择一行');
		}else{
			Ext.MessageBox.confirm('确认信息', '是否批量通过用户审批？',
					function(btn) {
						if (btn == "yes") {
							var jsonData = '';var prefix='';
							for (var i = 0; i < _record.length; i++) {
								ss = _record[i].get('idNumber');
								jsonData += prefix + ss;
								prefix = '#';
							}
							// 向Action中传输需要删除的记录的pkId的拼接字符串
							Ext.Ajax.request({
								url : url,
								params : {
									delData : jsonData,
									state:'1'
								},
								success : function(response) {	
									var res = response.responseText;
									var responseJson = Ext.util.JSON.decode(res);
									var flag = responseJson.success;
									if (flag == true) {
										var remark = '';
										if(responseJson.successRemark){
											remark = responseJson.successRemark;
										}
										var prefix = '';
										if(remark !=''&&remark!=null){
											remark = '['+remark+']';
											prefix = '部分';
										}
											
										Ext.Msg.alert('提示', prefix +'审批通过成功!' + remark);
									} else {
										Ext.Msg.alert('提示', tag+'失败!您要删除的信息中有某些信息无法删除，请重新确定要删除的信息!');
									}
									queryt_tlr_mgmtStore.load(param);
								},
								failure : function(result, request) {
									queryt_tlr_mgmtStore.load(param);
									Ext.Msg.alert('提示', tag+'失败!您要删除的信息中有某些信息无法删除，请重新确定要删除的信息!');
								}
							});
							queryt_tlr_mgmtStore.load();
						}
			});	
			
		}
	};
	mulitUnPass=function() {
		var url="t_tlr_mgmt_mulitOperate.action";
		_record = queryt_tlr_mgmtGrid.getSelectionModel().getSelections();
		if (_record) {
			Ext.MessageBox.confirm('确认信息', '是否批量不通过用户审批？',
					function(btn) {
						if (btn == "yes") {
							var jsonData = '';var prefix='';
							for (var i = 0; i < _record.length; i++) {
								ss = _record[i].get('idNumber');
								jsonData += prefix + ss;
								prefix = '#';
							}
							// 向Action中传输需要删除的记录的pkId的拼接字符串
							Ext.Ajax.request({
								url : url,
								params : {
									delData : jsonData,
									state:'2'
								},
								success : function(response) {	
									var res = response.responseText;
									var responseJson = Ext.util.JSON.decode(res);
									var flag = responseJson.success;
									if (flag == true) {
										var remark = '';
										if(responseJson.successRemark){
											remark = responseJson.successRemark;
										}
										var prefix = '';
										if(remark !=''&&remark!=null){
											remark = '['+remark+']';
											prefix = '部分';
										}
											
										Ext.Msg.alert('提示', prefix +'审批通过成功!' + remark);
									} else {
										Ext.Msg.alert('提示', '失败!您要删除的信息中有某些信息无法删除，请重新确定要删除的信息!');
									}
									queryt_tlr_mgmtStore.load(param);
								},
								failure : function(result, request) {
									store.load(param);
									Ext.Msg.alert('提示', '失败!您要删除的信息中有某些信息无法删除，请重新确定要删除的信息!');
								}
							});
							queryt_tlr_mgmtStore.load();
						}
			});
			
		} else
			Ext.Msg.alert('友情提示', '请选择需要审批通过的数据');
	};
	//单笔操作
	oneOperate = function( url, store, tag) {
		Ext.MessageBox.confirm("友情提示", "您确定要"+tag+"吗？",
			function(button) {
				if (button == "yes") {
					Ext.Ajax.request({
						url : url,
						params : {
							delData : jsonData
						},
						success : function(response) {	
							var res = response.responseText;
							var responseJson = Ext.util.JSON.decode(res);
							var flag = responseJson.success;
							if (flag == true) {
								var remark = '';
								if(responseJson.successRemark){
									remark = responseJson.successRemark;
								}
								var prefix = '';
								if(remark !=''&&remark!=null){
									remark = '['+remark+']';
									prefix = '部分';
								}
									
								Ext.Msg.alert('提示', prefix + tag+'成功!' + remark);
							} else {
								Ext.Msg.alert('提示', tag+'失败!您要删除的信息中有某些信息无法删除，请重新确定要删除的信息!');
							}
							store.load();
						},
						failure : function(result, request) {
							store.load(param);
							Ext.Msg.alert('提示', tag+'失败!您要删除的信息中有某些信息无法删除，请重新确定要删除的信息!');
						}
					});
				}
			}
		);
	};
	
 });


addsystemForm = new Ext.FormPanel({
	title :  '添加信息',
	frame : true,
	waitMsgTarget : true,
	labelAlign : 'right',
	width : 400,
	height : 320, 
	items : [{
layout : 'column',
items : [{
width :274,
layout : 'form',
items : [
{
fieldLabel : '用户名',
id : 'add_brandnames',
xtype : 'textfield',
name : 't_tlr_mgmt.phone',
width : 150,
/*listeners:{
	
	blur:function(){
	var Txtval=	Ext.getCmp('add_brandname').getValue();
	if(Txtval==""){
		alert('用户名不能为空');
	}else{
		Ext.Ajax.request({
	    	 url:'t_tlr_mgmt_check.action?phone='+Ext.getCmp('add_brandname').getValue(),
	         method: 'GET',
	         success: function (response, options) {
	            //alert(Ext.util.JSON.decode(response.responseText).result);
	        	 //(Ext.util.JSON.decode(response.responseText).result>=1) ? alert('用户已存在') : alert('用户不存在');
	        if(Ext.util.JSON.decode(response.responseText).result>=1){
	        	alert('用户已存在')	
	        	}  
	         },
	         failure: function (response, options) {
	            alert('失败', '请求超时或网络故障,错误编号：' + response.status);
	         }  
	     })		
		
	}
	}		
}*/
},
{
	fieldLabel : '密码',
	id : 'add_passwords',
	xtype : 'textfield',
	name : 't_tlr_mgmt.tlr_pwd',
	inputType:'password',
	width : 150,
	listeners:{	
	/*blur:function(){	
	if(Ext.getCmp('add_password').getValue()==""){
		alert('密码不能为空');
	}
	}*/		
	}
},
{
	fieldLabel : '角色名称',
	id : 'add_tlr_name',
	xtype : 'textfield',
	name : 't_tlr_mgmt.tlr_name',
	width : 150,
	listeners:{	
  /* blur:function(){
	   if(Ext.getCmp('add_tlr_name').getValue()==""){
		    alert('角色名称不能为空');	
	}	   
   }*/
}
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
			 if(Ext.getCmp('add_brandname').getValue()==""){
				 alert("用户名不能为空");
				 return;
			 }
			 if(Ext.getCmp('add_password').getValue()==""){
				 alert("密码不能为空");
				 return;
			 }
			 if(Ext.getCmp('add_tlr_name').getValue()==""){
				 alert("角色名称不能为空");
				 return;
			 }
			check(addsystemForm, "t_tlr_mgmt_addNewInfos.action", queryt_tlr_mgmt_mangerStore, "添加信息")
			addsystemForm.hide();	
		}
	}, {
		text : '取消',
		iconCls:'li-cancel',
		handler : function() {
			addsystemWin.hide();
			addsystemForm.form.reset();
		}
	}]
});

addsystemWin = new Ext.Window({
	layout : 'form',
	width : 420,
	height : 330,
	plain : true,
	closable : false,
	items : addsystemForm
});
addsystem = function() {
	addsystemForm.form.reset();
	addsystemWin.show();
//	Ext.getCmp("idNumber").focus(false, 1000);
};
Date.patterns = {
		 ISO8601Long:"Y-m-d H:i:s",
		 ISO8601Short:"Y-m-d",
		 ShortDate: "n/j/Y",
		 LongDate: "l, F d, Y",
		 FullDateTime: "l, F d, Y g:i:s A",
		 MonthDay: "F d",
		 ShortTime: "g:i A",
		 LongTime: "g:i:s A",
		 SortableDateTime: "Y-m-d\\TH:i:s",
		 UniversalSortableDateTime: "Y-m-d H:i:sO",
		 YearMonth: "F, Y"
}
