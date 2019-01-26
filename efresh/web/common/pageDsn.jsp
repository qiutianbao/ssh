<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>页面定制</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<jsp:include page="/public/commons.jsp"></jsp:include>
		<script type="text/javascript" >
		var tbname="category";
		var dbname="eshoping";
		Ext.onReady(function(){
			var tableStore = new Ext.data.Store({
				reader: new Ext.data.JsonReader(
                  { root: "tablelist" },
                  ["tabname"]
                ),
				proxy:new Ext.data.HttpProxy({
				  url:'get_tableselect_struts_getDBTables.action?dbname='+dbname 
				})
			});
		    var form = new Ext.form.FormPanel({
		        defaultType: 'textfield',
		        labelAlign: 'right',
		        title: '配置信息',
		        labelWidth:'100%',
		        frame:true,
		        width: '100%',

		        items: [{
		            fieldLabel: '表名',
		            id:'tableName',
		            name: 'tableName',
		            xtype: 'combo',
		            store:tableStore,
		            emptyText: '请选择',
		            mode: 'remote',
		            triggerAction: 'all',
		            valueField: 'tabname',
		            displayField: 'tabname'
		        },{
		            fieldLabel: '布局选择',
		            name: 'pannalText',
		            id:'layoutchoose',
		            hiddenName: 'pannal',
		            xtype: 'combo',
		            store: new Ext.data.SimpleStore({
		                fields: ['value','text'],
		                data: [['1','左右布局'],['2','上下布局'],['3','多界面布局']]
		            }),
		            emptyText: '请选择',
		            mode: 'local',
		            triggerAction: 'all',
		            valueField: 'value',
		            displayField: 'text',
		            value:1
		          
		        },{
		            fieldLabel: '功能选择',
		            name: 'political',
		            xtype: 'fieldset',
		    //        checkboxToggle:true,
		            title:'根据选择功能生产相应代码',
		            autoHeight:true,
		            defaultType:'checkbox',
		            
		            items: [{
			            fieldLabel: '查询',
			            name:'select',
			            value:'0',
			            checked:'true',
			            width:'auto'
			        },{
			            fieldLabel: '新增',
			            name:'insert',
			            value:'1',
			            checked:'true',
			            width:'auto'
			        },{
			            fieldLabel: '修改',
			            name:'update',
			            value:'2',
			            checked:'true',
	                    width:'auto'
			        },{
			            fieldLabel: '删除',
			            name:'delete',
			            value:'3',
			            checked:'true',
			            width:'auto'
			        },{
			            fieldLabel: '查看',
			            name:'view',
			            value:'4',
			            checked:'true',
			            width:'auto'
			        }],
		            emptyText: '请选择',
		            mode: 'local',
		            triggerAction: 'all',
		            valueField: 'text',
		            displayField: 'text'
		            
		        }]
		        
		    });
		    form.render("commInfo");
		    var inputTypeData = [
		     			['0','文本框'],
		              	['1','数字'],
		     			['2','下拉选择'],
		              	['3','日期'],
		     			['4','时间'],
		              	['5','多选框'],
		     			['6','单选框'],		     			
		              	['7','多行文本框'],
		              	['8','左右通栏文本框'],
		              	['9','编辑器'],
		              	['10','文件上传'] 
		              ];
		    var sfData = [
		 		     	['0','否'],
		 		        ['1','是']
		 		       ];
		    var ifinputData = [
			 		     	['0','否'],
			 		        ['1','是']
			 		       ];
			    var cm = new Ext.grid.ColumnModel([
			         new Ext.grid.RowNumberer(), 
			        {header:'主键',dataIndex:'idNumber',sortable:true,editor:new Ext.grid.GridEditor(new Ext.form.TextField({
			            allowBlank: false
			        }))},
			        {header:'中文',dataIndex:'chinese',editor:new Ext.grid.GridEditor(new Ext.form.TextField({
			            allowBlank: false
			        }))},

			        {header:'表字段',dataIndex:'field',editor:new Ext.grid.GridEditor(new Ext.form.TextField({
			            allowBlank: false
			        }))},
			        {header:'字段类型',dataIndex:'fieldType',editor:new Ext.grid.GridEditor(new Ext.form.TextField({
			            allowBlank: false
			        }))},


			        {header:'java类属性',dataIndex:'property',editor:new Ext.grid.GridEditor(new Ext.form.TextField({
			            allowBlank: false
			        }))},
			        {header:'属性类型',dataIndex:'proType',editor:new Ext.grid.GridEditor(new Ext.form.TextField({
			            allowBlank: false
			        }))},

			        {header:'是否条件查询',dataIndex:'isQuery',editor:new Ext.grid.GridEditor(new Ext.form.ComboBox({
			            store: new Ext.data.SimpleStore({
			                fields:['value','text'],
			                data: sfData
			            }),
			            emptyText: '请选择',
			            mode: 'local',
			            triggerAction: 'all',
			            valueField: 'value',
			            displayField: 'text'
			        })),
			        renderer: function(value){
			            return sfData[value][1];
			        }
			    },
			        {header:'输入类型',dataIndex:'inputType',editor:new Ext.grid.GridEditor(new Ext.form.ComboBox({
			            store: new Ext.data.SimpleStore({
			                fields:['value','text'],
			                data: inputTypeData
			            }),
			            emptyText: '请选择',
			            mode: 'local',
			            triggerAction: 'all',
			            valueField: 'value',
			            displayField: 'text'
			        })),
			        renderer: function(value){
			            return inputTypeData[value][1];
			        }
			    }, {header:'输入类型数据来源',dataIndex:'inpValue',editor:new Ext.grid.GridEditor(new Ext.form.TextField({
			            allowBlank: false
			        }))},{header:'是否必输入',dataIndex:'ifinput',editor:new Ext.grid.GridEditor(new Ext.form.ComboBox({
			            store: new Ext.data.SimpleStore({
			                fields:['value','text'],
			                data: ifinputData
			            }),
			            emptyText: '请选择',
			            mode: 'local',
			            triggerAction: 'all',
			            valueField: 'value',
			            displayField: 'text'
			        })),
			        renderer: function(value){
			            return ifinputData[value][1];
			        }
			    }
			    ]);
                
			    /* var data = [
			        ['1','name1','descn1','varchar','descn1','String','1','0','descn1'],
			        ['2','name2','descn2','varchar','descn2','String','1','0','descn2'],
			        ['3','name3','descn3','varchar','descn3','String','1','0','descn3'],
			        ['4','name4','descn4','varchar','descn4','String','1','0','descn4'],
			        ['5','name5','descn5','varchar','descn5','String','1','0','descn5']
			    ]; */
			    

			    var Record = Ext.data.Record.create([
			           {name: 'idNumber', type: 'string' },        
			           {name: 'chinese', type: 'string' },   
			           {name: 'field', type: 'string' },     
			           {name: 'fieldType', type: 'string' }, 
			           {name: 'property', type: 'string' },  
			           {name: 'proType', type: 'string' },   
			           {name: 'isQuery', type: 'string' },   
			           {name: 'inputType', type: 'string' }, 
			           {name: 'inpValue', type: 'string' },   
			           {name: 'ifinput', type: 'string' }

			    ]);
               	//定义数据源				
                   var store=new Ext.data.Store({
               		proxy:new Ext.data.HttpProxy({url:'get_tableselect_struts_getTBColumns.action'}),
               		reader:new Ext.data.JsonReader({
               		//totalProperty:'count',
               		root:'columnlist'		
               		},Record),
               		remoteSort:true
               	});
                /* var store = new Ext.data.JsonStore({ 
   			        autoDestroy: true, 
   			        autoLoad:true, 
   			        url: 'get_tableselect_struts_getTBColumns.action?tbname='+tbname+'&dbname='+dbname, 
   			        //totalProperty: 'results', 
   			        root:'columnlist', 
   			        fields:["idNumber","chinese","field","fieldType","property","proType","isQuery","inputType","inpValue","ifinput"] 
   			    });  */
               	store.load({params:{tbname:tbname,dbname:dbname}});
			    var grid = new Ext.grid.EditorGridPanel({
			    	id : 'column_grid',
			        autoHeight: true,
			        renderTo: 'gridDsn',
			        stripeRows:true,
			        store: store,
			        cm: cm,
			        viewConfig:{
						forceFit:true
			    	},
			        tbar: new Ext.Toolbar(['-', {
			            text: '添加一行',
			            handler: function(){

			                var initValue = {idNumber:'2',chinese:'',field:'idNumber',fieldType:'varchar',property:'idNumber',proType:'String',isQuery:'1',inputType:'0',inpValue:'',ifinput:'1'};

			                var p = new Record(initValue);

			                grid.stopEditing();
			                store.insert(0, p);
			                grid.view.refresh();
			                grid.startEditing(0, 0);

			                p.dirty = true;
			                p.modified = initValue;
			                if(store.modified.indexOf(p) == -1){
			                    store.modified.push(p);
			                }
			            }
			        }, '-', {
			            text: '删除一行',
			            handler: function(){
			                Ext.Msg.confirm('信息', '确定要删除？', function(btn){
			                    if (btn == 'yes') {
			                        var sm = grid.getSelectionModel();
			                        var cell = sm.getSelectedCell();

			                        var record = store.getAt(cell[0]);
			                        store.remove(record);
					                grid.view.refresh();
			                    }
			                });
			            }
			        }, '-',{
			            text: '保存',
			            handler: function(){
		                var jsonArray = [];
		                   var tableName= 	Ext.get('tableName').getValue();
		                   var pannal= 	Ext.get('pannal').getValue();
		          //         var pannalText= 	Ext.get('pannalText').getValue();
		          //         var political= 	Ext.get('political').getValue();
							var select= Ext.get('select').getValue();
		                   var insert= 	Ext.get('insert').getValue();
		                   var update= 	Ext.get('update').getValue();
		                   var deletev= Ext.get('delete').getValue();
		                   var view= Ext.get('view').getValue();
		                   var comInfo="{";
		                   comInfo=comInfo+"'tableName':'"+tableName;
		                   comInfo=comInfo+"','pannal':'"+pannal;
		                   comInfo=comInfo+"','select':'"+select;
		                   comInfo=comInfo+"','insert':'"+insert;
		            	   comInfo=comInfo+"','update':'"+update;
		           		   comInfo=comInfo+"','deletev':'"+deletev;
		           		   comInfo=comInfo+"','view':'"+view+"'";
		            //       comInfo=comInfo+"',political:'"+political;
		                   comInfo=comInfo+"}";                   
		                   jsonArray.push(comInfo);
			            
			             //   var m = store.modified.slice(0);
			                var gridpanel = Ext.getCmp("column_grid");
					    	var n = gridpanel.getStore();
							var count = n.getCount();
							for (var i = 0; i < count; i++) {
							     var record = store.getAt(i);
							     jsonArray.push(record.data);
							}
			         //       Ext.each(m, function(item) {
			                	//alert(item.data);
			                    //jsonArray.push(item.data);
			           //     });
	                 //   	var test = form.getForm().findField("tableName").getValue();

			                Ext.lib.Ajax.request(
			                    'POST',
			                    '/efresh/common/10_03_01.jsp',
			                    {success: function(response){
			                        Ext.Msg.alert('信息', response.responseText, function(){
			                            store.reload();
			                        });
			                    },failure: function(response){
			                        Ext.Msg.alert("错误", response.responseText+"与后台联系的时候出现了问题");
			                    }},
			                    'data=' + encodeURIComponent(Ext.encode(jsonArray))
			                );
			            }
			        }, '-'])
			    });
			    Ext.getCmp("tableName").on("select", function(){
			    	tbname=Ext.getCmp('tableName').getValue();
			    	var gridpanel = Ext.getCmp("column_grid");
			    	gridpanel.getStore().reload({params:{tbname:tbname,dbname:dbname}});
                })
			});
		
		</script>
  </head>
  
  <body >
  	<div id="commInfo" style="width:  100%; height: 20%"></div>
    <div id="gridDsn" style="width:  100%; height: 80%"></div>
    
  </body>
</html>