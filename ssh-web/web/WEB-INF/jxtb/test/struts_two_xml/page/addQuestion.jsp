<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 16-11-19
  Time: 上午11:32
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
    <script type="text/javascript" src="<%=basePath%>js/jquery-1.8.3.js"></script>
    <script type="text/javascript">
        function check(){
            var title = $("#title").val();
            if (title == "") {
                alert("标题不能为空！");
                return false;
            }
            return true;

        }
    </script>
</head>

<body>
<center>
    <form action="addQuestion" method="post" onsubmit="return check();">
        <table>
            <tr>
                <td>问题：</td>
                <td><input type="text" id="title" name="questions.title">
                </td>
            </tr>
            <tr>
                <td>问题描述：</td>
                <td><input type="text" name="questions.detaildesc">
                </td>
            </tr>
            <tr>
                <td>回答次数：</td>
                <td><input type="text" name="questions.answercount"></td>
            </tr>
            <tr>
                <td>最后修改：</td>
                <td><input type="text" name="questions.lastmodified">
                </td>
            </tr>
            <tr>
                <td><input type="submit" value="提交答案">
                </td>
            </tr>
        </table>
    </form>
</center>
</body>
</html>
