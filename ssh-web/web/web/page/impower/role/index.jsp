<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://jsptags.com/tags/navigation/pager" prefix="pg"%>
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

<title>资源管理</title>

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
	<script type="text/javascript">
	  function showAdd() {
	    window.location = "role/role_showAdd.action";
	  }
	  function t_delete() {
	    var cks = document.getElementsByName("cks");
	    for(var i=0;i<cks.length;i++) {
	       if(cks[i].checked) {
	        window.location = "role/role_delete.action?ids="+cks[i].value;
	       } 
	    }
	  }
    </script>

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
				        <td height="31" align="left"><div class="titlebt"> 系统管理 </div></td>
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
				                    <td width=""><span>你当前的位置</span>：系统管理--&gt;角色管理 </td>
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
				         <form id="form1" name="form1" method="post" action="role/role_findByKeys.action">
				           <table id="tab" border="0" width="100%" cellspacing="0" cellpadding="0">
                                <tr align="left">
                                  <td width="22" valign="bottom"><img src="web/images/table/a1.gif" height="12" /></td>
                                  <td width="93"  valign="middle" class="form_td">角色名称：</td>
								  <td width="152">
                                    <label><input name="key" type="text" size="12" class="cls_input_middle" value="${key}"/></label>
                                  </td>
                                </tr>
                           </table>
                             <table align="" width="100%">
                              	 <tr align="right" style="padding-bottom:8px; padding-top:5px;">
                                  <td  colspan="10" align="right" valign="top">
                                  <input title="点击将会按照输入条件进行查询，满足条件的已匹配检验报告，并显示在如下报告列表中" name="button22"  type="submit" class="btn" style="background: url(web/images/btn.png) no-repeat 0 0;" value="查询"/> 
                                  <input name="add" type="button" class="btn" value="新增" style="background: url(web/images/btn.png) no-repeat 0 0;" onclick="showAdd()" title="点击新增按钮跳转到添加角色页面"/>
                                  <input name="detele" type="button" class="btn" value="删除" style="background: url(web/images/btn.png) no-repeat 0 0;" id="id_a_confirm1" title="点击删除按钮可以批量删除" onclick="t_delete()"/>&nbsp;
                                </tr>
                             </table>
		                   </form>
							<div id="id_div_task" style="display:none;">
					  </div>
					  <div class="cls_scroll" style="width:710px;">
				              <table id="tab" width="100%" border="0" cellpadding="0"
															cellspacing="0"   onmouseover="changeto()"  onmouseout="changeback()">
				                <tr style="color:#2E5D7D;">
				                  <td width="4%" height="22" background="web/images/table/bg.gif"><div align="center">
				                  <input type="checkbox" name="cx" value="checkbox" /></div></td>
				                  <td width="9%" height="22" background="web/images/table/bg.gif"><div align="center"> 
				                  <span class="STYLE1" background="web/images/table/bg.gif">角色名</span></div></td>
				                  <td width="9%" height="22" background="web/images/table/bg.gif">
				                  <div align="center" background="web/images/table/bg.gif">角色标识</div></td>
			                      <td width="17%" height="22" background="web/images/table/bg.gif"><div align="center"> <span class="STYLE1">基本操作</span></div></td>
				                </tr>
				                <c:forEach var="flag" items="${pager.pageList}">
								<tr>
				                  <td height="20" class="cls_table_fill"><div align="center">
				                  <input type="checkbox" name="cks" value="${flag.id}"/></div>
				                  </td>
				                  <td height="20" class="cls_table_fill"><div align="center">${flag.name}</div></td>
				                  <td height="20" class="cls_table_fill"><div align="center">${flag.value}</div></td>
			                      <td height="10" class="cls_table_fill" align="center">
			                      <div>
			                      <span class="cls_span_topOP"><img src="web/images/037.gif" alt="编辑" /><span> [</span><a href="role/role_showUpdate.action?id=${flag.id}"  title="点击编辑连接跳转到修改用户信息页面">编辑</a><span>]</span></span>
			                      <span class="cls_span_topOP">&nbsp;&nbsp;&nbsp;&nbsp;<img src="web/images/11.gif" alt="删除" /><span> [</span> <a href="role/role_delete.action?ids=${flag.id}"  id="" title="点击删除链接删除">删除</a><span>]</span></span>
			                      <span class="cls_span_topOP">&nbsp;&nbsp;&nbsp;&nbsp;<img src="web/images/037.gif" alt="授权" /><span> [</span><a href="role/role_showImpower.action?id=${flag.id}"  title="点击编辑连接跳转到修改用户信息页面">授权</a><span>]</span></span>
			                      </div></td>
				                </tr>
				              </c:forEach>
			                  </table></td>
				            <td width="8" background="web/images/table/tab_15.gif">&nbsp;</td>
			              </tr>
				          </table>
				          </div>
				          </td>
			          </tr>
				      <tr>
				        <td height="35" background="web/images/tab_19.gif">
				        	<table width="100%" border="1" cellspacing="0"
												cellpadding="0">
				          <tr>
				            <td width="12" height="35"><img src="web/images/table/tab_18.gif" width="12"
															height="35" /></td>
				            <td><table width="100%" border="0" cellspacing="0"
															cellpadding="0">
				              <tr>
				                <td class="STYLE4">&nbsp;&nbsp;共有 ${pager.totalNum}条记录 </td>
				              <td><table border="0" align="right" cellpadding="0" cellspacing="0">
				                  <tr>
				                   <pg:pager items="${pager.totalNum}" maxIndexPages="5" maxPageItems="3" url="role/role_findByKeys.action" export="currentPageNo = pageNumber">
				                    <c:if test="${key!=null}">
				                    <pg:param name="key" value="${key}"/>
				                    </c:if>
				                    <td width="40">
				                    <pg:first>
	                                    <a href="${pageUrl}">首页</a> 
	                                </pg:first>
	                                </td>
				                    <td width="45">
				                    <pg:prev>
				                       <a href="${pageUrl}">上一页</a>
				                    </pg:prev>
				                    </td>
				                    <td width="25" align="center">
				                    <pg:pages>
						               <c:choose>
						                <c:when test="${currentPageNo eq pageNumber}">
						                  <font color="red">${pageNumber}</font>
						                </c:when>
						                <c:otherwise>
						                  <a href="${pageUrl}">${pageNumber}</a>
						                </c:otherwise>
						               </c:choose>
						             </pg:pages>
						             </td>
				                    <td width="45">
				                    <pg:next>
				                    <a href="${pageUrl}">下一页</a>
				                    </pg:next>
				                    </td>
				                    <td width="40">
				                     <pg:last>
				                    <a href="${pageUrl}">尾页</a>
				                    </pg:last>
				                    </td>
				                   </pg:pager>
			                      </tr>
				                  </table></td>
			                  </tr>
				              </table></td>
				            <td width="16"><img src="web/images/table/tab_20.gif" width="16"
															height="35" /></td>
			              </tr>
				          </table></td>
			          </tr>
				      </table></td>
				  <td width="13" background="web/images/mail_rightbg.gif">&nbsp;</td>
			      </tr>
				  <tr>
				    <td valign="middle" background="web/images/mail_leftbg.gif"><img src="web/images/buttom_left2.gif" width="10" height="17" /></td>
				    <td height="17" valign="top"
								background="web/images/buttom_bgs.gif"><img src="web/images/buttom_bgs.gif" width="17" height="17" /></td>
				    <td background="web/images/mail_rightbg.gif"><img src="web/images/buttom_right2.gif" width="8" height="17" align="left" /></td>
			      </tr>
			    </table></td>
			</tr>
		</table>
	
	</body>
</html>
