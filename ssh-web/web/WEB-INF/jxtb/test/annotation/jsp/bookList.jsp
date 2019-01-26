<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 16-11-18
  Time: 下午9:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>图书详细详细</title>
    <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
    <SCRIPT type="text/javascript">
        function doAdd()
        {
            location.href='jsp/addBook.jsp';
        }
        function doGo(){
            var changePage=$("#changePage").val();
            window.location.href="findAll?tool.currPage="+changePage;
        }
    </SCRIPT>

</head>

<body>
<center>
    <h3>${users.nickname }欢迎您</h3>
    <table border="1">
        <tr>
            <td colspan="8"><h1 align="center">图书详细信息列表</h1></td>
        </tr>
        <tr>
            <td>书名</td>
            <td>作者</td>
            <td>出版社</td>
            <td>出版日期</td>
            <td>页数</td>
            <td>价格</td>
            <td>内容摘要</td>
            <td colspan="8">操作</td>
        </tr>
        <c:forEach items="${bookList}" var="b">
            <tr>
                <td>${ b.name}</td>
                <td>${ b.author}</td>
                <td>${ b.publish}</td>
                <td>${ b.publishdate}</td>
                <td>${ b.page}</td>
                <td>${ b.price}</td>
                <td>${ b.content}</td>
                <td><a href="findBookById.action?id=${b.id}">修改</a></td>
                <td><a href="deleteBook.action?id=${b.id}">删除</a></td>
            </tr>
        </c:forEach>
        <tr>
            <td colspan="8">
                <input type="button" value="新增图书" onclick="javascript:doAdd();">
                共条<s:property value="tool.totalCount"/>条记录&nbsp;
                每页<input type="text"  value="${tool.pageSize}">

                条&nbsp;
                第<s:property value="tool.currPage"/>页/
                共<s:property value="tool.totalPage"/>页
                <a href="findAll?tool.currPage=1">首页</a>
                <a href="findAll?tool.currPage=<s:property value="tool.currPage-1 />">上一页</a>
                <a href="findAll?tool.currPage=<s:property value="tool.currPage+1" />">下一页</a>
                <a href="findAll?tool.currPage=<s:property value="tool.totalPage" />">末页</a>
                转到第<input type="text" id="changePage" value="${tool.currPage }">页
                <input type="button" onclick="javascript:doGo();" value="go"/>
            </td>
        </tr>
    </table>
</center>
</body>
</html>
