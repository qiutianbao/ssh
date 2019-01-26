 
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
    	  

   