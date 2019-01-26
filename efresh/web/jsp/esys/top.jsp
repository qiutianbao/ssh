<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>头部</title>
<link href="../css/top.css" rel="stylesheet" type="text/css">
<link href="../css/reset.css" rel="stylesheet" type="text/css">
</head>

<body bgcolor="transparent" style='background:transparent'>
<div class="bleed">
  <div class="bleed-top"> <span class="blanket">亲爱的用户！欢迎光临“e鲜”商城！</span>
    <div class="blame">
      <p>超级管理员(admin)</p>
      <a href="javascript:;">退出</a>
      <div class="clear"></div>
    </div>
    <div class="clear"></div>
  </div>
</div>
</body>
</html>
