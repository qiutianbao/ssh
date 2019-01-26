<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 16-11-19
  Time: 上午11:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html>
<head>
    <title></title>
</head>
<body>
<script type="text/javascript">
    alert("删除失败！");
    window.location='findAll.action';
</script
</body>
</html>