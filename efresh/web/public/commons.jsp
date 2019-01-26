<%@ page language="java" pageEncoding="utf-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<%--@ 
taglib uri="http://www.opensymphony.com/oscache"  prefix="oscache"--%>
<%
	response.setDateHeader("Expires", 0);
	response.setHeader("Cache-Control", "no-cache");
	response.setHeader("Pragma", "no-cache");
%>
<%
	String prjpath = request.getContextPath();//项目根路径
	request.setAttribute("prjpath", prjpath);
%>

<script type="text/javascript">
var prjpath = "${prjpath}"; // 应用程序的根路径 */
var basePath = '<%=basePath%>';
</script>

<%-- 通用的js与css --%>
<script type="text/javascript" src="${prjpath }/script/jquery.js"></script>
<script type="text/javascript" src="${prjpath }/script/jquery-1.4.4.min.js"></script>

<link rel="stylesheet" type="text/css"
	href="<%=basePath%>ExtJs/resources/css/ext-all.css">
<%--中文字体大小css 	--%>
<link id="extjsStyle3" rel="stylesheet" type="text/css"
	href="<%=basePath%>ExtJs/icon.css">	
<link id="extjsStyle2" rel="stylesheet" type="text/css"
	href="<%=basePath%>ExtJs/resources/css/xtheme-blue.css">
	

	<link id="extjsStyle" rel="stylesheet" type="text/css"
	href="<%=basePath%>public/CSS/FormLayout.css">

<script type="text/javascript"
	src="<%=basePath%>ExtJs/adapter/ext/ext-base.js">
</script>
<script type="text/javascript" src="<%=basePath%>ExtJs/ext-all.js">
</script>
<script type="text/javascript" src="<%=basePath%>ExtJs/locale/ext-lang-zh_CN.js">
</script>
<jsp:include page="/public/right.jsp"></jsp:include>
		<%--表格动态分页--%>
 <script type="text/javascript" src="<%=basePath%>ExtJs/PageComboResizer/PageComboResizer.js">
 
 </script>
<script type="text/javascript" >
function keyConvert() {
	if (event.keyCode == 13 && event.srcElement.type != "button" && event.srcElement.type != "textarea") {
		event.keyCode = 9;
	}
};
function dataformat(datatimestr) {
	if(datatimestr!="" && datatimestr!=null)
	  return Ext.util.Format.date(datatimestr, 'Y-m-d H:i:s');
	else 
	  return datatimestr;
}
 </script>
 <link rel="shortcut icon" href="<%=basePath%>images/cn_05.png">
 