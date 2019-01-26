<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!doctype html>
<html>
  <head>
    <base href="<%=basePath%>">
    
      <title>订单归集</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->


		<link rel="stylesheet" href="css/esys/iframe_style.css" />
		<link rel="stylesheet" href="css/esys/login.css" />
		<link rel="stylesheet" href="css/esys/bootstrap.min.css" />
        <link rel="stylesheet" href="css/esys/lq.datetimepick.css" />
		<script type="text/javascript" src="script/esys/jquery1.10.2.min.js"></script>
        <script type="text/javascript" src="script/esys/selectUi.js"></script>
        <script type="text/javascript" src="script/esys/lq.datetimepick.js"></script>
        <script type="text/javascript" src="script/esys/jsUtil.js"></script>
        <script type="text/javascript" src="script/esys/ddgj.js"></script>
	</head>

	<body bgcolor="transparent" style='background:transparent'>

		<div class="iframe_main2">

			<div class="iframe_wrap">
				<div class="avenue">  
				<form action="" method="post" name="ddgj">
	                <div class="latgbox">
	                    <div class="timebox float_l">
						<p class="cktitle float_l armistice">时间区间：</p>
					    <div class="casual">
							<input type="text" class="carpet gemay ddb" id="xdstart" name="begin" readonly>
							<span class="chamber"><img src="images/esys/013.png"></span>
						</div>
						<p class="jsx"><img src="images/esys/shx.png"></p>
	
						<div class="casual">
							<input type="text" class="carpet gemay ddb" id="xdend" name="end" readonly>
							<span class="chamber"><img src="images/esys/013.png"></span>
						</div>
	                     </div>
	                    </div>
						
						<input type="reset" value="重置"  class="btn showdown"> 
						<input type="button" class="btn committee" value="新增一个">
						<input type="button" value="确认归集"  class="btn mushroom">
						<span id="msg"></span> 
						<div class="clear"></div>
					</form>
				</div>
				<div class="clear"></div>
				<div style="height: 10px;"></div>

				<div class="clear"></div>

				<div style="height: 30px;"></div>

				<div class="forces">
					<table class="table table-bordered" id="cargolist">
						<thead>
							<tr>
								<th>序号</th>
								<th>一级订单编号</th>
								<th>基地</th>
								<th>时间区间</th>
								<!-- <th>状态</th> -->
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
					<!-- <div class="measures">
						<span class="fomnr">共40条记录，每页显示20条</span>
						<ul class="pager agenda">
							<li><a href="#">上一页</a></li>
							<li><a href="#">下一页</a></li>
						</ul>
					</div> -->
				</div>

			</div>
			<div class="clear"></div>
		</div>

	</body>
<!--<script type="text/javascript" src="script/esys/laydate.js"></script> -->
<script type="text/javascript">
/*!function(){
	laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
}();*/
var _index=0;
$(function(){
	$('.committee').on('click',function(){
			_index+=1;
		var _latgbox=$('.latgbox');
		var _hasyHtml='<div class="timebox float_l"><p class="cktitle float_l armistice">时间区间：</p><div class="casual"><input type="text" class="carpet gemay ddb" id="xdstart" name="begin" readonly><span class="chamber"><img src="images/esys/013.png"></span></div><p class="jsx"><img src="images/esys/shx.png"></p><div class="casual"><input type="text" class="carpet gemay ddb" id="xdend" name="end" readonly><span class="chamber"><img src="images/esys/013.png"></span></div></div>';
		$(_hasyHtml).appendTo(_latgbox);
	    $('.latgbox').width(500);	
		});						
  $('.latgbox').on('click','.ddb',function(e){
	     e.stopPropagation();
            $(this).lqdatetimepicker({
                css : 'datetime-hour'
            });
	})	
	
	
})
</script>
</html>