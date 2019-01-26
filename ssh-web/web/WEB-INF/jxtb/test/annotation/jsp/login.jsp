<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 16-11-18
  Time: 下午9:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>图书管理系统登录</title>

</head>

<body>
<center>

    <s:form  action="login.action" method="post">
        <table>
            <tr>
                <td colspan="2"><h1>登录图书管理系统</h1></td>
            </tr>
            <tr>
                <td style="background-color:red;">用户名：</td>
                <td><input type="text" name="bookUser.name"/></td>
            </tr>
            <tr>
                <td style="background-color:red;">密码：</td>
                <td><input type="text" name="bookUser.password"/></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><input type="submit" value="登录"/></td>
            </tr>
            <tr>
                <td align="center" style="background-color:#F06;">${message }</td>
            </tr>
        </table>
    </s:form>
</center>
</body>
</html>
