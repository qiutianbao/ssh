
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>人员基础信息</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	
	<jsp:include page="/public/commons.jsp"></jsp:include>
	
	<link rel="stylesheet" type="text/css" href="<%=basePath%>public/CSS/FormLayout.css">
	
	<script type="text/javascript" src="<%=basePath%>common/commonMethod.js"></script>
	<script type="text/javascript" src="<%=basePath%>ExtJs/resources/extjs/ux/DateTimeField.js">
	<script type="text/javascript" src="<%=basePath%>common/sysmessagestoreLoad.js"></script>
	<script type="text/javascript" src="<%=basePath%>common/sysmessageView.js"></script>
	<script type="text/javascript" language="javascript">
        if ((typeof Range !== "undefined") && !Range.prototype.createContextualFragment) { 
            Range.prototype.createContextualFragment = function(html) { 
                var frag = document.createDocumentFragment(),div = document.createElement("div"); 
                frag.appendChild(div); 
                div.outerHTML = html; 
                return frag; 
            }; 
        } 
</script>
<style type="text/css">
.float{ float: left}
</style>

  </head>
  
  <body onkeydown="keyConvert()">
  	
    <div id="sysmessageGrid" style="width:100%;height:100%"></div>
    
  </body>
</html>