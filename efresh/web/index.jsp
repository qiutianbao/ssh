<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.yinli.item.vo.T_tlr_mgmt"%>
<%@page import="java.text.SimpleDateFormat"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
//系统时间
SimpleDateFormat simp = new SimpleDateFormat("yyyy年MM月dd日");
String sys_date = simp.format(new Date());
%>

<!DOCTYPE html>
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>"e"鲜商城后台管理系统</title>
<!-- <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8"/> -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	
        <link rel="stylesheet" type="text/css" href="css/CssStyle.css"/>
        -->
   
	<jsp:include page="/public/commons.jsp"></jsp:include>
	<script type="text/javascript" >
		var basePath = '<%=basePath%>';
      </script>
	 <script type="text/javascript" src="<%=basePath%>javascript/general.js">
        </script>
        <!-- ENDLIBS -->
        <script type="text/javascript">
        <%  T_tlr_mgmt t_tlr_mgmt = ((T_tlr_mgmt)session.getAttribute("t_tlr_mgmt"));
        		if(t_tlr_mgmt == null){
       %>
        	window.parent.open('<%=basePath%>login.jsp', '_self');
        <%}else {%>
    	  var userTrueName = '<%=t_tlr_mgmt.getTlr_name() %>'
    	  var inst_no = '<%=t_tlr_mgmt.getInst_no() %>'
          <%
          	if(t_tlr_mgmt.getTlr_type().trim().equals("0")){
          		t_tlr_mgmt.setTlr_type("买家");
          	}else if( t_tlr_mgmt.getTlr_type().trim().equals("1") ){
          		t_tlr_mgmt.setTlr_type("商家");
          	}else if( t_tlr_mgmt.getTlr_type().trim().equals("2")){
          		t_tlr_mgmt.setTlr_type("系统管理员");
          	}
          %>
    	  var inst_no = '<%=t_tlr_mgmt.getInst_no() %>'
    	  var tlr_type = '<%=t_tlr_mgmt.getTlr_type() %>'
          var sysDate = '<%=sys_date%>'

        	  <%}%>
        </script>
        <script type="text/javascript" src="<%=basePath%>javascript/index.js">
        </script>
  </head>
  <body>
  </body>
</html>
