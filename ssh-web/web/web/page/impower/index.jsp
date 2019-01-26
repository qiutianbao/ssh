<%@page import="com.cbd.entity.Role"%>
<%@page import="com.cbd.entity.Resource"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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

<title>My JSP 'purview_manager_add.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link href="web/css/common.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" id="skin" type="text/css"
	href="web/js/skin/qq/ymPrompt.css" />
<link href="web/css/purview_manager_add.html" rel="stylesheet"
	type="text/css" />
<link rel="stylesheet" type="text/css" href="web/css/table_input.css" />
<script type="text/javascript" src="web/js/ymPrompt.js"></script>
<script type="text/javascript" src="web/js/jquery-1.4.4.min.js"></script>

<STYLE type="text/css">
* {
	font-size: 12px;
}
</STYLE>
<script type="text/javascript">
  function getImpower() {
    <%
      List<Resource> res = (List<Resource>)request.getAttribute("resources");
      Role role = (Role)request.getAttribute("role");
      Set<Resource> roleRes = role.getResourceSet();
      //循环次数由Resource确定
      for(Resource re : res) {
        for(Resource roleRe : roleRes) {
         if(roleRe.getId().equals(re.getId())) {
           %>
             document.getElementById("<%=roleRe.getId()%>").checked=true;
           <%
         }
        }
      }
    %>
  }
</script>
</head>

<body onload="getImpower()">
	<table width="757" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td>
				<table width="99%" border="0" align="left" cellpadding="0"
					cellspacing="0">
					<tr>
						<td width="10" height="29" valign="top"
							background="web/images/mail_leftbg.gif"><img
							src="web/images/left-top-right.gif" width="10" height="29" /></td>
						<td width="832" height="29" valign="top" id="content_bg">
							<table width="100%" height="31" border="0" cellpadding="0"
								cellspacing="0" class="left_topbg" id="table2">
								<tr>
									<td height="31">
										<div class="titlebt">系统管理</div></td>
								</tr>
							</table></td>
						<td width="17" valign="top"
							background="web/images/mail_rightbg.gif"><img
							src="web/images/nav-right-bg.gif" width="8" height="29" /></td>
					</tr>
					<tr>
						<td width="10" height="71" valign="middle"
							background="web/images/mail_leftbg.gif">&nbsp;</td>
						<td valign="top" bgcolor="#F7F8F9">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td height="30" background="page/web/images/tab_05.gif"
										bgcolor="#c9e5f7">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td width="12" height="30"><img
													src="web/images/table/tab_03.gif" width="12" height="30" />
												</td>
												<td background="web/images/tab_05.gif">
													<table width="100%" border="0" cellspacing="0"
														cellpadding="0">
														<tr>
															<td width="46%" valign="middle">
																<table width="600" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td width="5%">
																			<div align="center">
																				<img src="web/images/table/tb.gif" width="16"
																					height="16" />
																			</div></td>
																		<td width="95%"><span style="font-size: 12px;"><span>你当前的位置</span>：系统管理--&gt;添加权限</span>
																		</td>
																	</tr>
																</table></td>
															<td width="54%">&nbsp;</td>
														</tr>
													</table></td>
												<td width="16"><img src="web/images/table/tab_07.gif"
													width="16" height="30" /></td>
											</tr>
										</table></td>
								</tr>
								<tr>
									<td>
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td width="8" background="web/images/table/tab_12.gif">
													&nbsp;</td>
												<td>
													<form action="role/role_impower.action" method="post">
													    <input type="hidden" name="id" value="${role.id}">
														<table width="100%" height="100%" id="tab">
															<tr>
																<td valign="top" class="form_td"><span
																	style="font-size: 12px;">角色权限:</span></td>
																<td colspan="3"><c:forEach var="menu"
																		items="${resources}">
																		<c:if test="${menu.parent==null}">
																			<div id="qy">
																				<fieldSet>
																					<legend>
																						<span style="font-size: 12px;">
																							${menu.name} </span>
																					</legend>
																					<table width="100%" id="tab">
																						<tr>
																							<td><input type="checkbox" id="${menu.id}"
																								value="${menu.id}" name="resourcesId"/> <span
																								style="font-size: 12px;"> ${menu.name} </span></td>
																						</tr>

																						<c:forEach var="menu1" items="${resources}">

																							<c:if test="${menu1.parent.id==menu.id}">
																								<tr>
																									<td>

																										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input
																										type="checkbox" id="${menu1.id}" value="${menu1.id}" name="resourcesId"/>
																										<span style="font-size: 12px;">
																											${menu1.name} </span>
																										<div>
																											<%
																												int i = 0;
																											%>
																											<c:forEach var="menu2" items="${resources}">

																												<c:if test="${menu2.parent.id==menu1.id}">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input
																														type="checkbox" id="${menu2.id}"
																														value="${menu2.id}" name="resourcesId"/>
																													<span style="font-size: 12px;">
																														${menu2.name} </span>
																													<%
																														i++;
																													%>
																													<%
																														if (i % 3 == 0) {
																													%>
																													<br />
																													<%
																														}
																													%>
																												</c:if>
																											</c:forEach>
																										</div></td>
																								</tr>
																							</c:if>
																						</c:forEach>
																					</table>
																				</fieldSet>
																				<br>
																			</div>





																		</c:if>

																	</c:forEach></td>
															</tr>
															<tr>

																<td colspan="4" align="right"><input type="submit"
																	value="添加"  class="cls_button_short"
																	title="点击添加按钮保存新建的角色"
																	style="background: url(web/images/btn.png) no-repeat 0 0;" />
																	<input type="button" value="返回"
																	style="background: url(web/images/btn.png) no-repeat 0 0;"
																	onclick="history.back();" class="cls_button_short"
																	title="点击返回跳转到角色管理页面" /> &nbsp;&nbsp;</td>
															</tr>
														</table>

													</form></td>
												<td width="8" background="web/images/table/tab_15.gif">
													&nbsp;</td>
											</tr>
										</table></td>
								</tr>
								<tr>
									<td height="35" background="web/images/tab_19.gif">
										<table width="100%" border="0" cellspacing="0" cellpadding="0"
											height="99%">
											<tr>
												<td width="12" height="35"><img
													src="web/images/table/tab_18.gif" width="12" height="35" />
												</td>
												<td>&nbsp;</td>
												<td width="16"><img src="web/images/table/tab_20.gif"
													width="16" height="35" /></td>
											</tr>
										</table></td>
								</tr>
							</table></td>
						<td width="17" background="web/images/mail_rightbg.gif">
							&nbsp;</td>
					</tr>
					<tr>
						<td valign="middle" background="web/images/mail_leftbg.gif">
							<img src="web/images/buttom_left2.gif" width="10" height="17" />
						</td>
						<td height="17" valign="top"
							background="web/images/buttom_bgs.gif"><img
							src="web/images/buttom_bgs.gif" width="17" height="17" /></td>
						<td background="web/images/mail_rightbg.gif"><img
							src="web/images/buttom_right2.gif" width="8" height="17" /></td>
					</tr>
				</table></td>
		</tr>
	</table>
</body>

</html>
