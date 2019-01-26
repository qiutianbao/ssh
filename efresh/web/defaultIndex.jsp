<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title></title>
    <script type="text/javascript">
		var userRole = 'personmanager';
	</script>
	<style>
		.tishi { 
			BORDER-BOTTOM: black 1px solid; BORDER-LEFT: black 1px solid; BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; FILTER: revealTrans(transition=23,duration=0.5) blendTrans(duration=0.5); POSITION: absolute; VISIBILITY: hidden;
			background-color:#FFCC00;
			padding-top: 30px; padding-right: 80px; padding-bottom: 3px; padding-left: 3px}
	</style>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<jsp:include page="/public/commons.jsp"></jsp:include>
	<script type="text/javascript" src="<%=basePath%>new_script/index/new_Manager.js"></script>
	<script type="text/javascript" src="<%=basePath%>new_script/index/newProductAndTradeMsgShow1.js"></script>
 </head>
  
  <body onkeydown="keyConvert()">
   <div id="t_info_mgmtGrid" style="width: 100%; height: 40%"></div>
   <div id="allInfoTabPanel" style="width: 100%; height: 60%"></div>
  </body>
 
</html>
