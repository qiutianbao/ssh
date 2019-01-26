<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'success.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link href="web/css/common.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" id="skin" type="text/css"
	href="web/js/skin/qq/ymPrompt.css" />
    <link href="web/css/purview_manager_add.html" rel="stylesheet"
	type="text/css" />
    <link rel="stylesheet" type="text/css" href="web/css/table_input.css" />

  </head>
  
  <body>
    授权成功!!
  </body>
</html>
