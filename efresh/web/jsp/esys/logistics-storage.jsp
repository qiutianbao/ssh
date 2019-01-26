<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>仓储物流-出库管理</title>
		<link href="css/esys/reset.css" rel="stylesheet" type="text/css" />
		<link href="css/esys/animate.css" rel="stylesheet" type="text/css" />
		<link href="css/esys/main.css" rel="stylesheet" type="text/css" />
		<link rel="stylesheet" type="text/css" href="../css/logistics/logistics.css" />
		<script type="text/javascript" src="../js/jquery.min.js"></script>
		<script type="text/javascript" src="../js/login/login.js"></script>
		<script type="text/javascript" src="../js/logistics.js"></script>
		<script type="text/javascript" src="../js/bottom.js"></script>

	</head>

	<body>
		<div class="container">
			<div class="login_bg">
				<img src="../images/login_bg.png" width="100%" height="100%" id="imgId" />
				<jsp:include page="top.jsp"></jsp:include>
				<div class="mainfast">
					<!--左边-->

					<iframe src="left.html" style="filter:Chroma(Color=white);" allowTransparency="true" frameborder="no" width="210px" class="iframe_left" scrolling="no" marginheight="0" marginwidth="0"></iframe>
					<!--左边-->

					<!--右边-->
					<div class="bison-right">
						<iframe src="main.html" style="filter:Chroma(Color=white);" allowTransparency="true" height="100%" name="main_iframe" id="external-frame" class="iframe" frameborder="no" width="100%" scrolling="no"></iframe>
					</div>
					<!--右边-->
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
				<!--底部-->
				<iframe src="bottom.html" allowtransparency="true" frameborder="no" width="100%" height="60px" class="bottom_iframe"></iframe>
				<!--底部-->
			</div>
		</div>
		<!--遮罩层和弹出框-->
		<div class="full_window"></div>
		<div class="magnet">
			<p class="mankind">您确定切换分站吗？点击确定要重新登录系统的哦</p>
			<div class="mainland">
				<button class="major-left">取消</button>
				<button class="major-right">确定</button>
				<div style="clear: both;"></div>
			</div>
		</div>
		<!--遮罩层和弹出框-->
	</body>
	<script type="text/javascript">
	$('.major-left').on('click',function(){
	$('.full_window').hide();
	$('.magnet').hide();	
	})
	</script>

</html>