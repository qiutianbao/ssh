<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'rightRole.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<jsp:include page="/public/commons.jsp"></jsp:include>
	<script type="text/javascript" src="<%=basePath%>rightmanagement/script/rightRole.js"></script>
	<style type="text/css">
.mayubtn3{ width: 80px; height: 30px; display: block; background:url(images/esys/read_01.png) no-repeat; font-size: 16px; font-family:Microsoft YaHei;color: #e8a12e;line-height: 30px;  }
	</style>
  </head>
  
  <body onkeydown="keyConvert()">
    <div id = "rightRoleGridDiv" style="height: 100%;"></div>
  </body>
</html>
