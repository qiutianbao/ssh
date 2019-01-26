<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'right.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link href="css/common.css"rel="stylesheet" type="text/css" />
	<script type="text/javascript">
		function load(size)
		{
			if(size > 0 )
			{
				document.getElementById("aa").innerHTML = "有新企业换入本区，点击查看>>";
			}
		}
	</script>
  </head>
  
  <body onload="load(${sessionScope.size })">
  <div style="position: absolute;z-index: 1;top: 50px;left:50px;"><a href="corporationBasic!getAllCor_huanquxinxi"><span id="aa"></span></a></div>
<table width="752" border="0" align="left" cellpadding="0" cellspacing="0">
  <tr>
    <td width="10" height="29" valign="top" background="web/images/mail_leftbg.gif"><img src= "web/images/left-top-right.gif" width="10" height="29" /></td>
    <td width="774" height="29" valign="top" background="web/images/content-bg.gif"><table width="100%" height="31" border="0" cellpadding="0" cellspacing="0" class="left_topbg" id="table2">
      <tr>
        <td height="31"><div class="titlebt">欢迎界面</div></td>
      </tr>
    </table></td>
    <td width="16" valign="top" background="web/images/mail_rightbg.gif"><img src="web/images/nav-right-bg.gif" width="8" height="29" /></td>
  </tr>
  <tr>
    <td width="10" height="71" valign="middle" background="web/images/mail_leftbg.gif">&nbsp;</td>
    <td valign="top" bgcolor="#F7F8F9"><table width="97%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td height="234">&nbsp;</td>
        <td align="center"><img src="web/images/welcome.jpg" width="470" height="124" /></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td height="37">&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </table></td>
    <td background="web/images/mail_rightbg.gif">&nbsp;</td>
  </tr>
  <tr>
    <td valign="middle" background="web/images/mail_leftbg.gif"><img src="web/images/buttom_left2.gif" width="10" height="17" /></td>
    <td height="17" valign="top" background="web/images/buttom_bgs.gif"><img src="web/images/buttom_bgs.gif" width="17" height="17" /></td>
    <td background="web/images/mail_rightbg.gif"><img src="web/images/buttom_right2.gif" width="8" height="17" /></td>
  </tr>
</table>
</body>
</html>
