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
    <title>修改图书信息页面</title>
    <script type="text/javascript">
        function returnPage(){
            window.location='findAll.action';
        }
    </script>
</head>

<body>
<center>
    <s:form action="updateBook" method="post">
        <table border="1">
            <tr>
                <td colspan="2"><h1 align="center">编辑图书信息</h1></td>
            </tr>
            <tr>
                <td>书名(*)</td>
                <td><input name="book.name" value="${book.name }"/></td>
            </tr>
            <tr>
                <td>作者(*)</td>
                <td><input name="book.author" value="${book.author }"/></td>
            </tr>
            <tr>
                <td>出版社(*)</td>
                <td><input name="book.publish" value="${book.publish }"/></td>
            </tr>
            <tr>
                <td>出版日期(*)</td>
                <td><input name="book.publishdate" value="${book.publishdate }"/>(yyyy-MM-dd)</td>
            </tr>
            <tr>
                <td>页数(*)</td>
                <td><input name="book.page" value="${book.page }"/></td>
            </tr>
            <tr>
                <td>价格(*)</td>
                <td><input name="book.price" value="${book.price }"/></td>
            </tr>
            <tr>
                <td>内容摘要(*)</td>
                <td>
                    <input name="book.content" value="${book.content }"/>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <input type="submit" value="提交">&nbsp;&nbsp;
                    <input type="button" value="返回" onclick="javascript:returnPage();">
                </td>
            </tr>
        </table>
    </s:form>
</center>
</body>
</html>
