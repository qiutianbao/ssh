<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.net.URLEncoder" %>
<%@page import="com.yinli.item.vo.T_tlr_mgmt"%>
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
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	
	<jsp:include page="/public/commons.jsp"></jsp:include>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>public/CSS/FormLayout.css">
	<script type="text/javascript" src="<%=basePath%>common/commonMethod.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/exportExcel.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/t_info_mgmtstoreLoad.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/t_info_mgmtView.js"></script>
	<script type="text/javascript">
        <%  T_tlr_mgmt t_tlr_mgmt = ((T_tlr_mgmt)session.getAttribute("t_tlr_mgmt"));
        		if(t_tlr_mgmt != null){
        %>
        var inst_no = '<%=t_tlr_mgmt.getInst_no() %>';			
        <%		}
       %>
    </script>
  </head>
  
  <body onkeydown="keyConvert()">
  	
    <div id="t_info_mgmtGrid" style="width:100%;height:100%"></div>
    
  </body>
</html>