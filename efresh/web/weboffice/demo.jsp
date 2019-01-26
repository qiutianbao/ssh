<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>人员基础信息</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<jsp:include page="/public/commons.jsp"></jsp:include>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	
	
	<link rel="stylesheet" type="text/css" href="<%=basePath%>public/CSS/FormLayout.css">
	<script type="text/javascript" src="<%=basePath%>common/commonMethod.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/grid2excel.js"></script>


  </head>     
    <body>      
        <script type="text/javascript">      
            Ext.onReady(function(){      
                  
                var myData = [['3m Co', 71.72, 0.02, 0.03, '9/1 12:00am'], ['Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am'], ['Altria Group Inc', 83.81, 0.28, 0.34, '9/1 12:00am'], ['American Express Company', 52.55, 0.01, 0.02, '9/1 12:00am']];      
                      
                var store = new Ext.data.SimpleStore({      
                    fields: [{      
                        name: 'company'     
                    }, {      
                        name: 'price',      
                        type: 'float'     
                    }, {      
                        name: 'change',      
                        type: 'float'     
                    }, {      
                        name: 'pctChange',      
                        type: 'float'     
                    }, {      
                        name: 'lastChange',      
                        type: 'date',      
                        dateFormat: 'n/j h:ia'     
                    }]      
                });      
                store.loadData(myData);      
                      
                // create the Grid      
                var grid = new Ext.grid.GridPanel({      
                    id: 'static-grid',      
                    store: store,      
                    renderTo: 'grid-example',      
                    columns: [{      
                        id: 'company',      
                        header: "Company",      
                        width: 160,      
                        sortable: true,      
                        dataIndex: 'company'     
                    }, {      
                        header: "Price",      
                        width: 75,      
                        sortable: true,      
                        //renderer: 'usMoney',      
                        dataIndex: 'price'     
                    }, {      
                        header: "Change",      
                        width: 75,      
                        sortable: true,      
                        dataIndex: 'change'     
                    }, {      
                        header: "% Change",      
                        width: 75,      
                        sortable: true,      
                        dataIndex: 'pctChange'     
                    }, {      
                        header: "Last Updated",      
                        width: 85,      
                        sortable: true,      
                        renderer: Ext.util.Format.dateRenderer('m/d/Y'),      
                        dataIndex: 'lastChange'     
                    }],      
                    //stripeRows: true,      
                    //autoExpandColumn: 'company',      
                    height: 350,      
                    width: 600,      
                    title: 'Array Grid',      
                    bbar: new Ext.Toolbar({      
                        buttons: [{      
                            text: '|¨¬?3?Excel',      
                            tooltip: '|¨¬?3?Excel',      
                            handler: onItemClick     
                        }]      
                    })      
                });      
                      
                function onItemClick(item){      
                      
                    Ext.ux.Grid2Excel.Save2Excel(grid);      
                }      
                      
                //grid.render('grid-example');      
                //grid.getSelectionModel().selectFirstRow();      
            });      
        </script>      
        <div id="grid-example">      
        </div>      
    </body>      
</html>