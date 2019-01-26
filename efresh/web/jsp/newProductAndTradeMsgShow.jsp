<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String width=request.getParameter("width");
String height=request.getParameter("height");
System.out.println("width---"+width);
System.out.println("height---"+height);
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>新产品公告</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<jsp:include page="/public/commons.jsp"></jsp:include>
	<script type="text/javascript" src="<%=basePath%>new_script/index/newProductNotice.js"></script>
	<script type="text/javascript">
		var width = '<%=width%>'; // 应用程序的根路径 */
		var height = '<%=height%>';
	</script>
  </head>
  
  <body onkeydown="keyConvert()">
    <div id="positionInfoGrid" style="width: 100%; height: 100%"></div>
  </body>
</html>
