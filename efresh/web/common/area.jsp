<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>区域查询</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<jsp:include page="/public/commons.jsp"></jsp:include>
	<script type="text/javascript" src="<%=basePath%>common/area.js"></script>
		<script type="text/javascript" >
		Ext.onReady(function(){
			var areaForm = new Util.AreaForm({
                renderlocal:'commInfo'
            });
			var win = new Ext.Window({  
                title:'省市区',  
                width:500,  
                height:300,  
                items:[  
					areaForm  
                ]  
            });  
            // win.show(Ext.getBody()); 
            
		}); 
		</script>
  </head>
  
  <body >
  	<div id="commInfo" style="width:500px; height:50;background-color: green;" align="right" ></div>
  </body>
</html>