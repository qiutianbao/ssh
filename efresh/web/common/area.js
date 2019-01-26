Ext.ns("Util");  
Util.AreaForm = Ext.extend(Ext.FormPanel,{  
    constructor:function(conf){  
    	var renderlocal = conf.renderlocal;
    	//省级
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
		//市级
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
		//区级
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
    	  
        Util.AreaForm.superclass.constructor.apply(this,
        		[{id : 'city_combo',  
	             renderTo : renderlocal,
	             frame : true,  
	             layout : 'column',
	             labelAlign: 'right',
	             labelWidth : 55,
                 items:[{
		                columnWidth : .3,
		                layout : 'form',
		                items : [{
		                	xtype :'combo',
		                	width : 150,  
			                id:'provinceid',  
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
		                    emptyText:'请选择省',  
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
		                  }]
		            },{
		                columnWidth : .3,
		                layout : 'form',
		                items : [{
		                	xtype :'combo',
		                	id:'cityid',  
		                    width : 150,  
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
		                   	emptyText:'请选择市',
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
		                  }]
		            },{
		                columnWidth : .3,
		                layout : 'form',
		                items : [{
		                	xtype :'combo',
		                	id:'areaid',  
		                    width : 150,  
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
		                   	emptyText:'请选择区'
		                  }]
		            }]  
            }]  
        );  
        Ext.getCmp("provinceid").store.on("load", function(store, records){
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
	    })
	    Ext.getCmp("cityid").store.on("load", function(store, records){
	            var citycombo = Ext.getCmp("cityid");
	            var selected = citycombo.getValue();  
	            if (selected) {  
	                   var obj = store.findRecord(citycombo.valueField, selected);  
	                   citycombo.select(obj);    
	            } else {  
	            	citycombo.setValue(records[0].get('id'));  
	            } 
	    })
	    Ext.getCmp("areaid").store.on("load", function(store, records){
	    	    var areacombo = Ext.getCmp("areaid");
	            var selected = areacombo.getValue();  
	            if (selected) {  
	                   var obj = store.findRecord(areacombo.valueField, selected);  
	                   areacombo.select(obj);    
	            } else {  
	            	areacombo.setValue(records[0].get('id'));  
	            } 
	    })
        
    }
    
});  
Ext.reg('areaform', Util.AreaForm); 