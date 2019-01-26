<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 16-11-18
  Time: 下午9:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>添加图书信息页面</title>
    <script type="text/javascript" src="../js/jquery-1.8.3.js"></script>
    <script type="text/javascript">
        function returnPage(){
            window.location='addBook.jsp';
        }
        //验证函数
        function checkBook() {
            //检测书名是否为空
            var bookName = $("#bookName").val();
            if(bookName==""){
                alert("书名不能为空");
                return false;
            }
            //检测作者是否为空
            var bookAuthor=$("#bookAuthor").val();
            if(bookAuthor==""){
                alert("作者不能为空！");
                return false;
            }
            //检测出版社是否为空
            var bookPublish=$("#bookPublish").val();
            if(bookPublish==""){
                alert("出版社不能为空！");
                return false;
            }
            //检测出版日期是否为空
            var bookPublishDate=$("#bookPublishDate").val();
            if(bookPublishDate==""){
                alert("出版日期不能为空！");
                return false;
            }
            //检测出页数是否为空
            var bookPage=$("#bookPage").val();
            if(bookPage==""){
                alert("页数不能为空！");
                return false;
            }
            //检测价格是否为空
            var bookPrice=$("#bookPrice").val();
            if(bookPrice==""){
                alert("价格不能为空！");
                return false;
            }
            //内容摘要是否为空
            var bookContent=$("#bookContent").val();
            if(bookContent==""){
                alert("内容摘要不能为空！");
                return false;
            }
            return true;
        }
    </script>

</head>

<body>
<center>
    <form action="addBook.action" method="post" onsubmit="return checkBook();">
        <table border="1">
            <tr>
                <td colspan="2"><h1 align="center">新增图书信息</h1></td>
            </tr>
            <tr>
                <td>书名(*)</td>
                <td><input name="book.name" id="bookName" value="${book.name }"/></td>
            </tr>
            <tr>
                <td>作者(*)</td>
                <td><input name="book.author" id="bookAuthor" value="${book.author }"/></td>
            </tr>
            <tr>
                <td>出版社(*)</td>
                <td><input name="book.publish" id="bookPublish" value="${book.publish }"/></td>
            </tr>
            <tr>
                <td>出版日期(*)</td>
                <td><input name="book.publishdate" id="bookPublishDate" value="${book.publishdate }"/>(yyyy-MM-dd)</td>
            </tr>
            <tr>
                <td>页数(*)</td>
                <td><input name="book.page" id="bookPage" value="${book.page }"/></td>
            </tr>
            <tr>
                <td>价格(*)</td>
                <td><input name="book.price" id="bookPrice" value="${book.price }"/></td>
            </tr>
            <tr>
                <td>内容摘要(*)</td>
                <td>
                    <input name="book.content" id="bookContent" value="${book.content }"/>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <input type="submit" value="提交">&nbsp;&nbsp;
                    <input type="button" value="返回" onclick="javascript:returnPage();">
                </td>
            </tr>
        </table>
    </form>
</center>
</body>
</html>
