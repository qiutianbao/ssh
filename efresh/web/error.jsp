<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%
String errMsg=(String)request.getAttribute("errMsg");
System.out.println("错误信息为 "+errMsg);
%>
<html>
  <head>
  <jsp:include page="/public/commons.jsp"></jsp:include>
    <title>错误提示</title>
  </head>
  
  <body><center>
    	<div>
    		<center>
    		<br>
    		<br>
    		<br>
    		<h4><%= errMsg%></h4>
    		</center>
    	</div>
    	</center>
  </body>
</html>
