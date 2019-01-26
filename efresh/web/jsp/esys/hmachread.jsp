<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags"  prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
   <title>人机交互查看</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta charset="utf-8">
<link rel="stylesheet" href="css/esys/iframe_style.css" />
<link rel="stylesheet" href="css/esys/login.css" />
<script type="text/javascript" src="script/esys/jquery1.10.2.min.js"></script>
  </head>
  
 <body bgcolor="transparent" style='background:transparent'>
<div class="iframe_main2">
  <div class="iframe_wrap">
      <div class="notice">
        <table width="728" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td width="146" align="right">用户名：</td>
              <td width="610"><div class="ktxt1 w216">
                  <input width="200" type="text" class="ktxt1-gb"  value="${ff.tlr_name }" readonly/>
                </div></td>
            </tr>
            <tr>
              <td align="right">反馈时间：</td>
              <td width="610"><div class="ktxt2 w216">
                  <input type="text" class="ktxt2-gb" value="${ff.feedbacktime }" readonly/>
                </div></td>
            </tr>
            <tr>
              <td align="right" valign="top">反馈内容：</td>
              <td><textarea cols="50" rows="8" class="ktxt2-area" readonly>${ff.feedcontent }</textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
  <div class="clear"></div>
</div>
<script type="text/javascript">
//console.log($('.ktxt1-gb').val());
 var ss=$('.ktxt2-gb').val();
 var s_time=ss.substr(0, 19);
 $('.ktxt2-gb').prop('value',s_time);
</script>
</body>
</html>
