
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>公司信息管理</title>
    
	<meta http-equiv="cache-control" content="no-cache">
	
	<jsp:include page="/public/commons.jsp"></jsp:include>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>public/CSS/FormLayout.css">
	<script type="text/javascript" src="<%=basePath%>common/commonMethod.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/exportExcel.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/t_comp_infostoreLoad.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/commonView.js"></script>
	<style type="text/css">
	a:visited{
		color:blue;
	}
	</style>
  </head>
  
  <body onkeydown="keyConvert()" class="x-border-layout-ct">
  	
    <div id="t_comp_infoGrid" style="width:100%;height:430px"><a id='downid' href='' target='_blank'></a></div>
    
  </body>
</html>