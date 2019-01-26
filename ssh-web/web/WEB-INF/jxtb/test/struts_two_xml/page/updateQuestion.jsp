<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 16-11-19
  Time: 上午11:36
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
    <base href="<%=basePath%>">
    <title></title>
</head>
<body>
<center>
    <form action="updateQuestion" method="post">
        <table>
            <tr>
                <td>问题：</td>
                <td>
                    <input type="text" name="questions.title" value="${questions.title }">
                </td>
            </tr>
            <tr>
                <td>问题描述：</td>
                <td>
                    <input type="text" name="questions.detaildesc" value=" ${questions.detaildesc }">
                </td>
            </tr>
            <tr>
                <td>回答次数：</td>
                <td>
                    <input type="text" name="questions.answercount" value="${questions.answercount }">
                </td>
            </tr>
            <tr>
                <td>最后修改：</td>
                <td>
                    <input type="text" name="questions.lastmodified" value="${questions.lastmodified }">
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" value="提交答案">
                </td>
            </tr>
        </table>
    </form>
</center>
</body>
</html>
