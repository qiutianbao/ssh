<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="javax.servlet.http.Cookie"%>
<%@page import="com.yinli.util.common.CookieUtil"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
//系统时间
SimpleDateFormat simp = new SimpleDateFormat("yyyy年MM月dd日");
String sys_date = simp.format(new Date());
//读取cookie
Cookie cookie = CookieUtil.getCookieByName(request, "phone");
String Userphone = "";
String style = "";
String remember="";
String key = "";
if(cookie != null){
	Userphone = cookie.getValue();
	style = "background:url(images/esys/skx.png) no-repeat;";
	remember="N";
	key = "class='float_l switch-km key'";
	
}else{
	key = "key";
	style = "background:url(images/esys/skx2.png) no-repeat;";
	key = "class='float_l switch-km key'";
}
request.setAttribute("style", style);
request.setAttribute("key", key);

%>

<%
	String prjpath = request.getContextPath();//项目根路径
	request.setAttribute("prjpath", prjpath);
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">    
    <title>登录</title>
    <META http-equiv="X-UA-Compatible" content="IE=9" > </META>
		<link href="css/esys/reset.css" rel="stylesheet" type="text/css" />
		<link href="css/esys/login.css" rel="stylesheet" type="text/css" />
		<link href="css/esys/animate.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript" src="script/esys/jquery.min.js"></script>
		<script type="text/javascript" src="script/esys/login/login.js"></script>
		<script  type="text/javascript">
			
			function login(){
				var basePath = '<%=basePath%>';
				var username = $.trim($("#idNumber").val());
				var password = $.trim($("#tlr_pwd").val());
				var code = $.trim($('.abnormal-txt').val());
				var isremember = $.trim($("#isremember").val());
				if(username == "" && password == ""){
					$("#msg").html("用户名和密码必须输入！");
					$("#idNumber").focus();
				
					return;
				}
				if(username == ""){
					$("#msg").html("用户名必须输入！");
					$("#idNumber").focus();
					return;
				}
				if(password == ""){
					$("#msg").html("密码必须输入");
					$("#tlr_pwd").focus();
					return;
				}
			
				if(code ==""){
					$("#msg").html("验证码必须输入");
					$('.abnormal-txt').focus();
					return;
				}else{
					var mycode = get();
					code = code.toLowerCase( );
					if(code != mycode){
						$("#msg").html("验证码错误");
						$('.abnormal-txt').focus();
						return;
					}else{
						$("#msg").html("正在登陆,请稍后");	
						function warn(){
							$("#msg").html("网络有点慢哦,努力登陆中...")	
						}
						setTimeout(warn,2000);
					}	
				}

				$.ajax({
					type:    "POST",
					url:     "login.action",
					data:    "t_tlr_mgmt.phone=" + username + "&t_tlr_mgmt.tlr_pwd=" + password+"&code="+code + "&isremember="+isremember,
					timeout: 60000,
					async:   true,
					dataType : "json",
					error: function(msg) {
						$("#msg").html("用户名或密码输入错误！"+msg);
		        	},
					success: function(jsonStr) {
					
						if($.trim(jsonStr.idNumber) == "0"){
							$("#msg").html("用户名或密码输入错误！");
						}else{
							$("#msg").html('<%=sys_date%>');
							var result = window.open(basePath+'index.jsp','_self','fullscreen=yes');
						}
					}
				});
			}
			//重置
			function reset(){
				$("#idNumber").val("");
				$("#tlr_pwd").val("");
				$('.abnormal-txt').val("");
				$("#msg").html("");
				
			}


			function usre_check(obj){
				var user = obj.value;
				if($.trim(user) == ""){
				
				}else{
					
					$("#msg").html("");
				}
			}

			function paw_check(obj){
				var psw = obj.value;
				if($.trim(psw) == ""){
					
				}else{
					
					$("#msg").html("");	
				}
			}
			
			function code_check(obj){
				var code = obj.value;
				if($.trim(code) == ""){
					
				}else{
					 $("#msg").html("");	
				}
			}
			$(document).keydown(function(event){
				if(event.keyCode==13){
					login();
				}
			});
			
			
			//更换验证码
			function changeValidateCode(obj){ 
				//获取当前的时间作为参数，无具体意义    
				var timenow = new Date().getTime(); 
				//每次请求需要一个不同的参数，否则可能会返回同样的验证码    
				//这和浏览器的缓存机制有关系，也可以把页面设置为不缓存，这样就不用这个参数了。    
				obj.src="Random_doRandCode.action?d="+timenow;    
			}  
			
			
			//获取验证码
			 function get(){
			 	var code = "";
				  $.ajax({
						async:   false,
						type:    "POST",
						url:     "Random_code_check.action",
						data:    "code=" + code,
						dataType : "json",
						error: function(msg) {
							$("#msg").html("网络异常，请检查网络！");
			        	},
						success: function(data) {
							var d = eval("("+data+")");
							code = d.code;
						}
					});
				return code;
	 		 }
			 
			$(function(){
				var timenow = new Date().getTime(); 
				//每次请求需要一个不同的参数，否则可能会返回同样的验证码    
				$(".abnormal-right").attr("src","Random_doRandCode.action?d="+timenow);  
			});
			
		</script>	
  </head>
<style type="text/css">
html{overflow: hidden;}	
</style>
	<body>
		<div class="container">
			<div class="login_bg">
				<div class="login-top">
					<div class="w1200">
						<div class="login-main">
							<div class="tycoon">
							<p class="float_l f18 font1">亲爱的用户！欢迎光临“E鲜”商城！</p>
							<p class="float_r f18 font1"><span class="font0">我是企业，</span><a href="jsp/esys/setshop.jsp" class="font1">我要开店</a></p>
							</div>
							<div class="clear"></div>
					
						</div>
					</div>
				</div>
			<img src="images/esys/login_bg.png" width="100%" height="100%" />	
			</div>
			<!--login-box-->
			<div class="login-box animated bounceInDown">
				<div class="login_top">“E鲜”商城后台管理系统</div>
	
				<div class="caura">
					<div class="w416">
						<div class="h25"></div>
						<input type="hidden" id="isremember" value="${remember}">
						<div class="abandon"> <span class="f20 font1 float_l">登录名：</span>
							<div class="abandon-txt">
								<input type="text" class="ability" autocomplete='off'  name="t_tlr_mgmt.phone" id="idNumber" onblur="usre_check(this)"
                                       value="<%=Userphone%>">
							</div>
							<div class="clear"></div>
						</div>
						<div class="h25"></div>
						<div class="abandon"> <span class="f20 font1 float_l passkey">密&nbsp;&nbsp;码&nbsp;：</span>
							<div class="abandon-txt">
								<input type="password" class="ability" name="t_tlr_mgmt.tlr_pwd"  id="tlr_pwd" onblur="paw_check(this)" maxlength="20"  onkeydown="enterkey()">
							</div>
							<div class="clear"></div>
						</div>
						<div class="h25"></div>
						<div class="abandon"> <span class="f20 font1 float_l">验证码：</span>
							<div class="abnormal">
								<div class="abnormal-left">
									<input type="text" class="abnormal-txt" onblur="code_check(this)" />
								</div>
								<!-- <button class="abnormal-right" onclick="time(this)">获取验证码</button> -->
								<img class="abnormal-right" src="" onclick="changeValidateCode(this)">
								<div class="clear"></div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="h16"></div>
						<div class="absence">
							<div class="switch">
								<p ${key} style="${style}"></p>
								<span>记住我</span>
								<!--隐藏的checkbox-->
								<!-- <div style="display:inline-block;"> 
          <input  type="checkbox" />
          </div>-->
								<!--隐藏的checkbox-->
							</div>
							<a href="jsp/esys/setshop.jsp" class="float_l openLink">我要开店</a>
							<div class="clear"></div>
						</div>
						<div class="clear h38"></div>
						<div class="login-group">
							<button class="reset" onclick="reset()">重置</button>
							<button class="loginbtn btn-4" onclick="login()">登录</button>
							<div class="clear"></div>
							<div id="msg" class="font1"></div>
						</div>
					</div>
				</div>

				
				
				<div class="login_bottom"></div>

			</div>
			<!--login-box-->
			<!--底部-->
			<div class="foot">
				<div class="h10"></div>
				<p>e鲜商城后台管理系统</p>
				<div class="h8"></div>
				<p>京ICP备11011334号 京公网安备110105007294</p>
			</div>
			<!--底部-->
		</div>
	</body>
</html>