
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>首页w轮播</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	
	<script type="text/javascript" src="<%=basePath%>javascript/ext-base.js"></script>
		<script type="text/javascript" src="<%=basePath%>javascript/ext-all.js"></script>
	-->	
		
	<jsp:include page="/public/commons.jsp"></jsp:include>
	<script type="text/javascript" src="<%=basePath%>javascript/swfupload.js"></script>
		<script type="text/javascript" src="<%=basePath%>javascript/UploadPanel.js"></script>
	<script type="text/javascript" src="<%=basePath%>javascript/main.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>public/CSS/FormLayout.css">
	<script type="text/javascript" src="<%=basePath%>common/commonMethod.js"></script>
	<script type="text/javascript" src="<%=basePath%>ExtJs/resources/extjs/ux/FileUploadField.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/carouselstoreLoad.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/carouselView.js"></script>
		<link rel="stylesheet" type="text/css" href="css/UploadPanel.css">
		
  </head>
  
  <body onkeydown="keyConvert()">
  	
    <div id="carouselGrid" style="width:100%;height:100%"></div>
    
  </body>
</html>