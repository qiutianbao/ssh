<%@ page language="java" import="java.util.*,com.yinli.item.vo.*,com.yinli.item.service.*,plantix.core.spring.suport.factory.BeanFactoryUtils" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'rightDept.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<jsp:include page="/public/commons.jsp"></jsp:include>
	<script type="text/javascript" src="<%=basePath%>common/commonMethod.js"></script>
	<script type="text/javascript" src="<%=basePath%>rightmanagement/script/rightDept.js"></script>
	<script type="text/javascript">
	var delRight = false;
	<%
	T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt)session.getAttribute("t_tlr_mgmt");
	T_inst_mgmtService t_inst_mgmtService = (T_inst_mgmtService)BeanFactoryUtils.getBean("t_inst_mgmtService");
	T_inst_mgmt inst_mgmt = t_inst_mgmtService.findById(t_tlr_mgmt.getInst_no());
	if(t_tlr_mgmt != null && (t_tlr_mgmt.getTlr_type().equals("0") || t_tlr_mgmt.getTlr_type().equals("系统管理员")) && inst_mgmt.getInst_type().equals("190003")){
		out.println("delRight = true;");
	}
	%>
	</script>
  </head>
  
  <body onkeydown="keyConvert();">
  <div id = "deptTreeDiv"></div>
  </body>
</html>
