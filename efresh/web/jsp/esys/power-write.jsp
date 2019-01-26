<%@ page language="java" import="java.util.*"  pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    	<title>用户管理-权限编写</title>
  

<link rel="stylesheet" href="css/esys/reset.css" />
<link rel="stylesheet" href="css/esys/add_pro.css" />
<link rel="stylesheet" type="text/css" href="css/esys/dropkick.css"/>
<link rel="stylesheet" type="text/css"  href="css/esys/Iconfont/iconfont.css"/>
<script type="text/javascript" src="script/esys/jquery1.10.2.min.js"></script>
<script type="text/javascript" src="script/esys/powerset.js"></script>
</head>
<body>
<div class="modify">
  <div class="modify_main">
    <form name="SaveMenu" action="rightMenu2_update.action" method="post">
    	<input type="hidden" value="${rightRole.id }" name="rightRole.id">
      <div class="ogre"> <span class="ogre-span">角色名称：</span>
        <div class="ogre-div">
          <input type="text" class="ogre-txt" value="${rightRole.name }" name="rightRole.name"/>
        </div>
      </div>
      <div class="clear"></div>
      <div class="ver-box"> <span class="ogre-span">角色描述：</span>
        <div class="ver-area">
          <textarea rows="10" cols="40" class="oldox" name="rightRole.descn">${rightRole.descn }</textarea>
        </div>
      </div>
      <div class="clear"></div>
      <div class="platforms float_l"> <span class="ogre-span">权限选择：</span>
      <div class="platforms-tab">
      	<c:forEach items="${map['treeAllNodeList'] }"  var="allNode">
	      		<div class="getbix"> <span class="bybox">1、${allNode.text }：</span> <span class="default-all"></span> <span class="bybox">全选</span>
	            	<input type="checkbox" class="ch-box" name="all-check" value="全选"/>
	          	</div>
	          	<div class="getbix-white">
	          		<c:forEach items="${allNode.children }" var ="node">
	          			<c:set var="cla" value="" scope="page"></c:set>
	          			<c:set var="check" value="" > </c:set>
	          			<c:forEach items="${map['treeNodeList'] }" var = "node2">
	          				<c:forEach items="${node2.children }" var="children">
	          				<c:if test="${node.id==children.id }">
	          					<c:set var="cla"  value="github" > </c:set>
	          					<c:set var="check"  value="checked=checked" > </c:set>
	          				</c:if>
	          				</c:forEach>
	          			</c:forEach>
		          			<%--  <div class="beg"> <span class="default-ch ${class}" ></span> <span class="bybox">${node.text }</span> --%>
				              <div class="beg"> <span class='default-ch ${cla }' ></span> <span class="bybox">${node.text }</span>
				              <input type="checkbox" class="ch-box"  ${check }  name="check1" value="${node.id }"/>
				            </div>
	          		</c:forEach>
          		</div>
      	</c:forEach>
      	</div>
      	<div class="clear"></div>
      	<input type="submit" value="保存"   class="save-btn">
      </div>
      <div class="clear"></div>
      
      <!---->
    </form>
    <div class="clear"></div>
  </div>
  <div class="clear"></div>
</div>
</body>
</html>
