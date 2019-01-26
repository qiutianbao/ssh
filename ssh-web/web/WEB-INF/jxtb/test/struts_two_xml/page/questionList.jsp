<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 16-11-19
  Time: 上午11:34
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

    <title>查询所有问题</title>
    <script type="text/javascript" src="<%=basePath%>js/jquery-1.8.3.js"></script>
    <script type="text/javascript">
        $(function(){// dom元素加载完毕
            $("tr:even").css("background-color","#068");
            //  $('#tb tbody tr:even').css("backgroundColor","#068");
            //获取id为tb的元素,然后寻找他下面的tbody标签，再寻找tbody下索引值是偶数的tr元素,改变它的背景色.
            //tr:odd为奇数行，索引从0开始，0算偶数。
        });
        function doAdd()
        {
            window.location.href='page/addQuestion.jsp';
        }
        function doGo(){
            var changePage=$("#changePage").val();
            window.location.href="findAll?pageTool.currPage="+changePage;
        }
    </script>
</head>

<body>
<center>
    <h1>在线问答</h1>
    <a href="page/askQuestion.jsp">我要提问</a>
    <table>
        <tr>
            <td align="center">序号</td>
            <td align="center">问题</td>
            <td align="center">描述</td>
            <td align="center">回答次数</td>
            <td align="center">最后修改</td>
        </tr>
        <c:forEach var="q" items="${questList }">
            <tr>
                <td>${q.id }</td>
                <td><a href="questionById?id=${q.id }">${q.title }</a></td>
                <td>${q.detaildesc }</td>
                <td>${q.answercount }</td>
                <td>${q.lastmodified }</td>
                <td><a href="questionById?id=${q.id }">修改</a>
                    <a href="deleteQuestion?id=${q.id }"onclick="return confirm('确定将此记录删除?')">删除</a>
                </td>
            </tr>
        </c:forEach>
        <tr>
            <td colspan="9">
                <input type="button" value="新增问题" onclick="javascript:doAdd();">
                共${pageTool.totalCount }条记录
                每页${pageTool.pageSize }条
                第${pageTool.currPage }页/共${pageTool.totalPage }页
                <a href="findAll?pageTool.currPage=1">首页</a>
                <a href="findAll?pageTool.currPage=${pageTool.currPage-1 }">上一页</a>
                <a href="findAll?pageTool.currPage=${pageTool.currPage+1 }">下一页</a>
                <a href="findAll?pageTool.currPage=${pageTool.totalPage }">最后一页</a>
                转到第<input type="text" id="changePage" value="${pageTool.currPage }">页
                <input type="button" onclick="javascript:doGo();" value="go"/>
            </td>
        </tr>
    </table>
</center>
</body>
</html>
