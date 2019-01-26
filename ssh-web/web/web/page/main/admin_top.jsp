<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'admin_top.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link type="text/css" rel="stylesheet" href="web/css/main.css" />
<link href="web/css/common.css" type="text/css" rel="stylesheet" />
<script src="web/js/Scripts/swfobject_modified.js" type="text/javascript"></script>
<style type="text/css">

*{
font-size: 12px;}
</style>
<script type="text/javascript">
function calender()
{
 var time=new Date();
 var year=time.getUTCFullYear();
 var month=time.getMonth()+1;
 var day=time.getDate();
 var hour=time.getHours();
 var minute=time.getMinutes();
 var second=time.getSeconds();
 var weekday = new Array(7);
 weekday[0] = "星期日";
 weekday[1] = "星期一";
 weekday[2] = "星期二";
 weekday[3] = "星期三";
 weekday[4] = "星期四";
 weekday[5] = "星期五";
 weekday[6] = "星期六";
 if(minute<10)
 {
  minute="0"+minute;
 }
 if(second<10)
 {
  second="0"+second;
 }
 
var mydate = document.getElementById("date");
mydate.innerHTML=year+"年"+month+"月"+day+"日 "+hour+":"+minute+":"+second+" "+weekday[time.getDay()];
setTimeout("calender()",1000);
}
</script>
</head>

<body onload="calender()">
<div>
  <table width="930" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr height="95" >
      <td width="640" align="center" background="web/images/top/log.png">
      </td>
      <td align="left" background="web/images/top/log_2.png">&nbsp;</td>
      <td width="250" align="left" valign="top" background="web/images/top/log_2.png">
      	<table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td height="24" colspan="2" align="center" background="web/images/top/menu1.gif">当前用户: ${admin.account}<strong> |</strong><span style="cursor: pointer;"  onclick="var strHref=window.location.href;this.style.behavior='url(#default#homepage)';this.setHomePage('http://www.codefans.net');"  class="cls_letter_style" >设为首页</span> <strong>|</strong><a href="exitUser.action" target="_parent"> 退出</a></td>
          </tr>
          <tr>
            <td height="22">&nbsp;</td>
            <td width="10">&nbsp;</td>
          </tr>
          <tr>
            <td align="right"><div id="date"> </div></td>
            <td>&nbsp;</td>
          </tr>
      </table></td>
    </tr>
  </table>
</div>
<div>
  <table width="200" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
      <td><table width="930" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td background="web/images/top/1.jpg" width="840" height="215"><object id="FlashID" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="930" height="215">
              <param name="movie" value="" />
              <param name="quality" value="high" />
              <param name="wmode" value="transparent" />
              <param name="swfversion" value="6.0.65.0" />
              <!-- 此 param 标签提示使用 Flash Player 6.0 r65 和更高版本的用户下载最新版本的 Flash Player。如果您不想让用户看到该提示，请将其删除。 -->
              <param name="expressinstall" value="Scripts/expressInstall.swf" />
              <!-- 下一个对象标签用于非 IE 浏览器。所以使用 IECC 将其从 IE 隐藏。 -->
              <!--[if !IE]>-->
              <object type="application/x-shockwave-flash" data="" width="930" height="215">
                <!--<![endif]-->
                <param name="quality" value="high" />
                <param name="wmode" value="transparent" />
                <param name="swfversion" value="6.0.65.0" />
                <param name="expressinstall" value="" />
                <!-- 浏览器将以下替代内容显示给使用 Flash Player 6.0 和更低版本的用户。 -->
                <div>
                 
                
                </div>
                <!--[if !IE]>-->
              </object>
              <!--<![endif]-->
            </object></td>
          </tr>
      </table></td>
    </tr>
  </table>
</div>
<script type="text/javascript">
<!--
swfobject.registerObject("FlashID");
swfobject.registerObject("FlashID2");
//-->
</script>
</body>
</html>
