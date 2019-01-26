<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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

<title>报表管理</title>

	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link  rel="stylesheet" type="text/css" href="web/css/common.css"/>
	<link rel="stylesheet" type="text/css" href="web/js/skin/qq/ymPrompt.css" />
	<link rel="stylesheet" type="text/css" href="web/css/showCorporation.css" />
	<link rel="stylesheet" type="text/css" href="web/css/table_input.css" />
	<link rel="stylesheet" type="text/css" href="web/css/scroll.css" />
	<script type="text/javascript" src="web/js/ymPrompt.js"></script>

	<script type="text/javascript" src="web/js/jquery-1.4.4.min.js"></script>
	<script type="text/javascript" src="web/js/common.js"></script>
	<script type="text/javascript" src="web/js/user.js" charset="gbk"></script>
	<script type="text/javascript" src="web/js/report.js"></script>

<style>
* {
	font-size: 12px;
}

.showTask {
	width: 80px;
}
</style>

</head>

<body>
		<table width="100%" border="0" align="left" cellpadding="0" cellspacing="0">
			<tr>
				<td><table width="100%" border="0" align="left" cellpadding="0"
						cellspacing="0">
				  <tr>
				    <td width="10" height="29" valign="top"
								background="web/images/mail_leftbg.gif"><img src="web/images/left-top-right.gif" width="10"
									height="29" /></td>
				    <td valign="top" id="content_bg"><table width="100%" height="31" border="0" cellpadding="0"
									cellspacing="0" class="left_topbg" id="table2">
				      <tr>
				        <td height="31" align="left"><div class="titlebt"> 报表管理 </div></td>
			          </tr>
				      </table></td>
				    <td width="13" valign="top"
								background="web/images/mail_rightbg.gif"><img src="web/images/nav-right-bg.gif" width="8" height="29" align="left" /></td>
			      </tr>
				  <tr>
				    <td width="10" height="71" valign="middle"
								background="web/images/mail_leftbg.gif">&nbsp;</td>
				    <td valign="top" bgcolor="#F7F8F9"><table width="100%" border="0" cellspacing="0" cellpadding="0">
				      <tr>
				        <td height="30" background="web/images/tab_05.gif"
											bgcolor="#c9e5f7"><table width="100%" border="0" cellspacing="0"
												cellpadding="0">
				          <tr>
				            <td width="12" height="30"><img src="web/images/table/tab_03.gif" width="12"
															height="30" /></td>
				            <td background="web/images/tab_05.gif"><table width="100%" border="0" cellspacing="0"
															cellpadding="0">
				              <tr>
				                <td width="64%" valign="middle"><table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
				                  <tr>
				                    <td width="5%"><div align="center"> <img src="web/images/table/tb.gif" width="16"
																						height="16" /></div></td>
				                    <td width=""><span>你当前的位置</span>：报表管理--&gt;报表查询 </td>
									<td width="20%" align="right"><span style="cursor:help; color:#FF0000" id="help" onclick = "showLayer();"></span></td>
			                      </tr>
				                  </table></td>
				                
				              </tr>
				              </table></td>
				            <td width="16"><img src="web/images/table/tab_07.gif" width="16"
															height="30" /></td>
			              </tr>
				          </table></td>
			          </tr>
				      <tr>
				        <td><table  width="100%" border="0" cellspacing="0"
												cellpadding="0" >
				          <tr>
				            <td width="8" background="web/images/table/tab_12.gif"
														bgcolor="#c9e5f7">&nbsp;</td>
				            <td>
				         <form id="form1" name="form1" method="post" action="report/report_report.action">
				           <table id="tab" border="0" width="100%" cellspacing="0" cellpadding="0">
                                <tr align="left">
                                  <td width="22" valign="bottom"><img src="web/images/table/a1.gif" height="12" /></td>
                                  <td width="93"  valign="middle" class="form_td">企业名称：</td>
								  <td width="152">
                                    <label>
                                     <select name="id" style="width:135px;">
                                      <c:forEach var="flag" items="${enterprises}">
                                        <option value="${flag.id}">${flag.name}</option>
                                      </c:forEach>
                                     </select>
                                    </label>
                                  </td>
                                </tr>
                           </table>
                             <table align="" width="100%">
                              	 <tr align="right" style="padding-bottom:8px; padding-top:5px;">
                                  <td  colspan="10" align="right" valign="top">
                                  <input title="点击将会按照输入条件进行查询，满足条件的已匹配检验报告，并显示在如下报告列表中" name="button22"  type="submit" class="btn" style="background: url(web/images/btn.png) no-repeat 0 0;" value="查询产品"/> 
                                </tr>
                             </table>
		                   </form>
		                   </td>
		                   </tr>
		                   </table>
	</body>
</html>
