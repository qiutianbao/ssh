
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ page import="com.yinli.item.vo.T_tlr_mgmt" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>批发商店铺</title>
    
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
	<link rel="stylesheet" type="text/css" href="<%=basePath%>css/esys/jquery.mCustomScrollbar.css">
	<script type="text/javascript" src="<%=basePath%>ExtJs/resources/extjs/ux/DateTimeField.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/commonMethod.js"></script>
	<script type="text/javascript" src="<%=basePath%>comm
	on/estorestoreLoad.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/estoreView2.js"></script>
    <script type="text/javascript" src="<%=basePath%>script/esys/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>script/esys/jquery-ui-1.10.4.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>script/esys/jquery.mousewheel.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>script/esys/jquery.mCustomScrollbar.min.js"></script>
    
    
    
  </head>
  
  <body onkeydown="keyConvert()">
  	
    <div id="estoreGrid" class="kxmj" style="width:100%;height:798px;overflow: auto"></div>
    
  </body>
  <script type="text/javascript">
  (function($){
      $(window).load(function(){
          $(".content").mCustomScrollbar();
      });
  })(jQuery);
  </script>
</html>