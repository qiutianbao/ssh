<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="org.springframework.security.web.WebAttributes" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'login.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<LINK href="web/css/public.css" type=text/css rel=stylesheet>
    <LINK href="web/css/login.css" type=text/css rel=stylesheet>
	<script type="text/javascript">
		function check_Login(){
			var f1 = document.getElementById("f1");
			f1.submit();
		}
	</script>
  </head>
  
  <body>
    <table width="332" align="center" height="454" border="0" id="table">
    <tr>
      <td background="web/images/login.gif"><table width="100%" border="0">
        <tr>
          <td height="34">&nbsp;</td>
        </tr>
        <tr>
          <td height="92">
          <form name="form1" method="post" action="j_spring_security_check" id="f1">
            <label></label>
            <table width="100%" border="0">
              <tr>
                <td width="39%" height="26">&nbsp;</td>
                <td width="18%"><div>用户名：</div></td>
                <td width="43%"><div>
                  <label>
                  <input type="text" name="username"  size="20" style="height:17px; width:110px; border:1px solid #3c5c74;">
                  </label>
                </div></td>
              </tr>
              <tr>
                <td height="28">&nbsp;</td>
                <td><div>密　码：</div></td>
                <td><div>
                  <input type="password" name="password"  size="20" style="height:17px; width:110px; border:1px solid #3c5c74;">
                </div></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><div>
				<a href="javascript:check_Login()" >
				<img src="web/images/button_login.gif" width="54" height="20" border="0" >
				</a><img src="web/images/button_clear2.gif" width="54" height="20" border="0"></div></td>
              </tr>
            </table>
          </form>          </td>
        </tr>
        <tr>
          <td>&nbsp; ${SPRING_SECURITY_LAST_EXCEPTION.message}</td>
        </tr>
      </table></td>
    </tr>
  </table>
  </body>
</html>
