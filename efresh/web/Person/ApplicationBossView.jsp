<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>副站长审核</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript">
		var userRole = 'personboss';
	</script>
	<jsp:include page="/public/commons.jsp"></jsp:include>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>public/CSS/FormLayout.css">
	<script type="text/javascript" src="<%=basePath%>My97DatePicker/WdatePicker.js"></script>
 	<script type="text/javascript" src="<%=basePath%>Person/JS/commonMethod.js"></script>
	<script type="text/javascript" src="<%=basePath%>Person/JS/storeLoad.js"></script>
	<script type="text/javascript" src="<%=basePath%>Person/JS/auditApplyTaskReader.js"></script>
	<script type="text/javascript" src="<%=basePath%>Person/JS/leaveApplyAuditForm.js"></script>
	<script type="text/javascript" src="<%=basePath%>Person/JS/applyAuditBoss.js"></script>
	<script type="text/javascript" src="<%=basePath%>Person/JS/applyPersonalList.js"></script>
	
  </head>
  
  <body onkeydown="keyConvert()">
    <div id="unauditApplyTasksGrid" style="width: 100%; height: 40%"></div>
    <div id="applyListGrid" style="width: 100%; height: 60%"></div>
  </body>
</html>
