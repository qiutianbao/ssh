<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'findAll.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
    <table border="1">
      <tr>
        <td width="100">ID</td>
        <td width="100">用户名</td>
        <td width="100">密码</td>
        <td width="100">操作</td>
      </tr>
      <c:forEach var="flag" items="${pager.pageList}">
       <tr>
        <td width="100">${flag.id}</td>
        <td width="100">${flag.uname}</td>
        <td width="100">${flag.upwd}</td>
        <td width="100"><a href="user/user_deleteUser.action?id=${flag.id}">删除</a></td>
      </tr>
      </c:forEach>
        <tr>
	       <td width="400" height="30" align="center" valign="middle" colspan="4">
	       <pg:pager items="${pager.totalNum}" maxIndexPages="5" maxPageItems="3" url="user/user_findByPage.action" export="currentPageNo = pageNumber">
	         <pg:first>
	             <a href="${pageUrl}">首页</a> 
	         </pg:first>
	         <pg:prev>
                 <a href="${pageUrl}">上一页</a>
             </pg:prev>
             <pg:pages>
               <c:choose>
                <c:when test="${currentPageNo eq pageNumber}">
                  <font color="red">${pageNumber}</font>
                </c:when>
                <c:otherwise>
                  <a href="${pageUrl}">${pageNumber}</a>
                </c:otherwise>
               </c:choose>
             </pg:pages>
             <pg:next>
               <a href="${pageUrl}">下一页</a>
             </pg:next>
             <pg:last>
               <a href="${pageUrl}">尾页</a>
             </pg:last>
	       </pg:pager>
	       </td>
       </tr>
    </table>
   
  </body>
</html>
