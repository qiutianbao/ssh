<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'showAdd.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link href="web/css/common.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" href="web/js/skin/qq/ymPrompt.css" />
	<link rel="stylesheet" type="text/css" href="web/css/showCorporation.css" />
	<link rel="stylesheet" type="text/css" href="web/css/table_input.css" />
    <script type="text/javascript" src="web/js/ymPrompt.js"></script>   
    <script type="text/javascript" src="web/js/jquery-1.4.4.min.js"></script>
    <script type="text/javascript" src="web/js/common.js"></script>
		<script type="text/javascript" src="web/js/user.js" charset="gbk">
</script>
<script type="text/javascript">
		function clickLayer(){
			 id_div_help.style.display="none";
		}
		function showLayer(){
			id_div_help.style.display="block";
		}
</script>



<style type="text/css">

		#id_div_help{
			width:730px;
			height:280px;
			position:absolute;
			top:30px;
			left:10px;
			border:3px solid red;
			color:blue;
			font-weight:bold;
			font-size:13px;
			display:none;
			
		}
		#id_div_help1{
			width:150px;
			height:100px;
			position:absolute;
			top:140px;
			left:170px;
			border:3px solid red;
		}
		#id_div_help2{
			width:80px;
			height:100px;
			position:absolute;
			top:140px;
			left:320px;
			border-left:0px;
			border-right:0px;
			border:3px solid red;
		}
		#id_div_help3{
			width:150px;
			height:100px;
			position:absolute;
			top:140px;
			left:400px;
			border:3px solid red;
		}
		* {
	font-size: 12px;
}

.showTask {
	width: 80px;
}
</style>

  </head>
  
  <body>
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td><table width="99%" border="0" align="left" cellpadding="0"
						cellspacing="0">
				  <tr>
				    <td width="10" height="29" valign="top"
								background="web/images/mail_leftbg.gif"><img src="web/images/left-top-right.gif" width="10"
									height="29" /></td>
				    <td width="731" height="29" valign="top" id="content_bg"><table width="100%" height="31" border="0" cellpadding="0"
									cellspacing="0" class="left_topbg" id="table2">
				      <tr>
				        <td height="31"><div class="titlebt"> 系统管理 </div></td>
			          </tr>
				      </table></td>
				    <td width="13" valign="top"
								background="web/images/mail_rightbg.gif"><img src="web/images/nav-right-bg.gif" width="8" height="29" /></td>
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
				                <td valign="middle"><table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
				                  <tr>
				                    <td width="5%"><div align="center"> <img src="web/images/table/tb.gif" width="16"
																						height="16" /> </div></td>
				                    <td width="95%"><span>你当前的位置</span>：系统管理--&gt;角色管理--&gt;编辑角色 </td>
                      </tr>
                    </table></td>
                    <td width="13%"><span style="cursor:help; color:#FF0000" id="help" onclick = "showLayer();"></span></td>
                  </tr>
                </table></td>
                <td width="16"><img src="web/images/table/tab_07.gif" width="16" height="30" /></td>
              </tr>
            </table></td>
          </tr>
          <tr>
            <td>
            <table width="100%" border="0" cellspacing="0" cellpadding="0" >
			  <tr>
                <td width="8" background="web/images/table/tab_12.gif" bgcolor="#c9e5f7">&nbsp;</td>
                <td>
                <form action="role/role_update.action" method="post">
                  <input type="hidden" name="role.id" value="${role.id}">
                  <table id="tab" width="100%" border="0" cellpadding="0" cellspacing="0"  >
                    <tr>
                      <td width="10%" height="20" class="form_td"  ><div align="center"><span>角色名:</span></div></td>
                      <td width="23%" height="20" class="cls_table_fill" > 
                        <input name="role.name" type="text" class="cls_input_long" value="${role.name}"/>
                       </td>
                      <td width="13%" class="cls_table_fill"><div align="left"><font color="#FF0000">*</font></div></td>
                        <td width="9%" height="20" class="form_td"><div align="center"><span>角色标识:</span></div></td>
                      <td width="25%" height="20" class="cls_table_fill"> 
                        <input name="role.value" type="text" class="cls_input_long" value="${role.value}"/>
                      </td>
                      <td width="20%" class="cls_table_fill"><div align="center"><font color="#FF0000"></font></div></td>
                    </tr>
                    
                    <tr>
                      <td height="20" colspan="6" align="right" class="cls_table_fill"> 
                           <input name="button2"  type="submit" class="cls_button_short" style="background: url(web/images/btn.png) no-repeat 0 0;" value="保存" title="点击添加按钮保存"/> 
                            <input name="button" style="background: url(web/images/btn.png) no-repeat 0 0;"  type="reset" class="cls_button_short" value="重置" title="点击重置按钮清空所有文本框"/> 
							       <input name="goBack"  type="button" style="background: url(web/images/btn.png) no-repeat 0 0;" class="cls_button_short" title="点击返回按钮跳转到资源管理页面" value="返回" onclick="goManagerPage()"/> 
                        </td>
                    </tr>
                  </table>
                 </form>
                </td>
                <td width="8" background="web/images/table/tab_15.gif">&nbsp;</td>
              </tr>
            </table></td>
          </tr>
          <tr>
            <td height="35" background="web/images/tab_19.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="12" height="35"><img src="web/images/table/tab_18.gif" width="12" height="35" /></td>
                <td>&nbsp;</td>
                <td width="16"><img src="web/images/table/tab_20.gif" width="16" height="35" /></td>
              </tr>
            </table></td>
          </tr>
        </table></td>
        <td width="13" background="web/images/mail_rightbg.gif">&nbsp;</td>
      </tr>
      <tr>
        <td valign="middle" background="web/images/mail_leftbg.gif"><img src="web/images/buttom_left2.gif" width="10" height="17" /></td>
        <td height="17" valign="top" background="web/images/buttom_bgs.gif"><img src="web/images/buttom_bgs.gif" width="17" height="17" /></td>
        <td width="13" background="web/images/mail_rightbg.gif"><img src="web/images/buttom_right2.gif" width="8" height="17" /></td>
      </tr>
    </table></td>
  </tr>
</table>

</body>
</html>
