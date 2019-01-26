<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>" target="main">
    
    <title>My JSP 'left.jsp' starting web</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my web">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

<link href="web/css/left.css" type="text/css" rel="stylesheet" />

<style type="text/css">
	.hspan
	{
		display: block;
		width: 182px;
		color: #000;
		height: 30px;
		text-decoration: none;
		moz-outline-style: none;
		background-image: url(/BFinspect/web/images/menu_bgs.gif);
		background-repeat: no-repeat;
		line-height: 30px;
		text-align: center;
		margin: 0px;
		padding: 0px;
	}
</style>

</head>
<body>
<table width="180" border="0" cellspacing="0" cellpadding="0"  style="background:black;">
  <tr>
    <td width="2"></td>
    <td width="185" rowspan="2" bgcolor="#FFFFFF"><table width="100%" height="280" border="0" align="left" cellpadding="0" cellspacing="0" bgcolor="#EEF2FB">
      <tr>
        <td width="182" valign="top" bgcolor="#FFFFFF"><div id="container">
          <h1 class="MM"><a href="javascript:void(0)">企业档案管理</a></h1>
          <div class="content">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td><img src="web/images/menu_topline.gif" width="182" height="5" /></td>
              </tr>
            </table>
            <ul class="MM">
              <li><a href="enterprise/enterprise_index.action" target="main">基本信息</a></li>
              <li><a href="attestationInfo/attestationInfo_index.action" target="main">产品认证</a></li>
              <li><a href="cqValidateInfo/cqValidateInfo_index.action" target="main">产品验证</a></li>
              <li><a href="reddereIusInfo/reddereIusInfo_index.action" target="main">产品执法</a></li>
            </ul>
          </div>
          
          <h1 class="type"><a href="javascript:void(0)">统计查询管理</a></h1>
          <div class="content">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td><img src="web/images/menu_topline.gif" width="182" height="5" /></td>
              </tr>
            </table>
            <ul class="MM">
              <li><a href="report/report_index.action" target="main">报表查询</a></li>
            </ul>
          </div>
          <h1 class="type"><a href="javascript:void(0)">系统管理</a></h1>
          <div class="content">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td><img src="web/images/menu_topline.gif" width="182" height="5" /></td>
              </tr>
            </table>
            <ul class="MM">
              <li><a href="adm/adm_showAdmin.action" target="main">用户管理</a></li>
              <li><a href="res/res_index.action" target="main">资源管理</a></li>
              <li><a href="role/role_index.action" target="main">角色管理</a></li>
            </ul>
          </div>
        </div>
         </td>
        <td width="10" valign="top" bgcolor="#FFFFFF">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
</table>
</body>
</html>
