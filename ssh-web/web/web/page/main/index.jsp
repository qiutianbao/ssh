<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">

		<title>重庆市质量技术监督局认证企业监管系统</title>

		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<script type="text/javascript">
function autoHeight(){
/*	var height = screen.availheight - 130;
	var leftIframeDIV = document.getElementById("leftIframeDIV");
	leftIframeDIV.style.height = height - 328;*/	
}

function reinitIframe() {

	var iframe = document.getElementById("main");

	try {

		var bHeight = iframe.contentWindow.document.body.scrollHeight;

		var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;

		var height = Math.max(bHeight, dHeight);

		iframe.height = height;

	} catch (ex) {
	}

}

window.setInterval("reinitIframe()", 200);
</script>
		<link href="web/css/main.css" rel="stylesheet" type="text/css" />
		<link rel="stylesheet" type="text/css"
			href="web/js/skin/qq/ymPrompt.css" />
		<link rel="stylesheet" type="text/css"
			href="web/css/showCorporation.css" />
			</head>


<body onload="autoHeight()">
<table width="998" border="0" align="center" cellpadding="0" cellspacing="0" >
  <tr>
    <td height="16" background="web/images/index/top1.gif">&nbsp;</td>
    <td background="web/images/index/top.gif">&nbsp;</td>
    <td background="web/images/index/top2.gif">&nbsp;</td>
  </tr>
  
  
  <tr>
    <td width="42"><img src="web/images/index/left.gif" alt="" width="42" height="309" /></td>
    <td width="930" align="center" bgcolor="#d4dde2">
	<div id="top">
   <iframe name="topFrame" src="web/page/main/admin_top.jsp" width="930" height="308" frameborder="0" scrolling="no"></iframe>
   </div>
</td>
    <td width="26" background="web/images/index/right1.gif"><img src="web/images/index/right.gif" alt="" width="26" height="308" /></td>
  </tr>
  
  
  
  <tr>
    <td  background="web/images/index/left1.gif">&nbsp;</td>
    <td>
		<div style="width:180px;height:400px;background:#ffff00; float:left;" id="leftIframeDIV" style="float:left">
			<iframe name="left"  src="web/page/main/left.jsp" width="180" height="100%" frameborder="0" scrolling="no">
			</iframe>
		</div>
		
		<div style="width:750px; background:#FF0000;" style="float:right">
			<iframe id="main" name="main" src="web/page/main/right.jsp" scrolling="no" frameborder="0" onload="" width="750px">
			  </iframe>
		</div>
		</td>
    <td background="web/images/index/right1.gif">&nbsp;</td>
  </tr>
  
  
</table>
</body>
</html>

 