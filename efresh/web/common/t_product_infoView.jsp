
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html >
<head >
    <meta http-equiv="X-UA-Compatible"content="IE=EmulateIE8"/>
    <link href="css/resources/css/ext-all.css"rel="stylesheet"type="text/css"/>
    
    <title>产品更新</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	    <style type="text/css">
        .x-fieldset
        {
            border:0pxsolid#05B8C8;
            display:block;
        }
        
    </style>

	<jsp:include page="/public/commons.jsp"></jsp:include>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>public/CSS/FormLayout.css">
	<script type="text/javascript" src="<%=basePath%>common/commonMethod.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/exportExcel.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/t_product_infostoreLoad.js"></script>

	<script type="text/javascript" src="<%=basePath%>common/t_product_infoView.js"></script>
    <style>
      .x-form-unit {  
       height: 22px;  
       line-height: 22px;  
       padding-left: 2px;  
       display: inline-block;  
       display: inline;  
   		} 
	</style>
   
  </head>
  
  <body onkeydown="keyConvert()" class="x-border-layout-ct">
  	
    <div id="t_product_infoGrid" style="width:100%;height:100%"></div>
    
  </body>
</html>