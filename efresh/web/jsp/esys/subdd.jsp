<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html>
  <head>
    <base href="<%=basePath%>">
    <meta charset="UTF-8">
    <title>二级订单</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" href="css/esys/iframe_style.css" />
    <link rel="stylesheet" href="css/esys/login.css" />
	<link rel="stylesheet" href="css/esys/bootstrap.min.css" />
	<script type="text/javascript"
	src="script/esys/jquery1.10.2.min.js"></script>
	<script type="text/javascript" src="script/esys/subdd.js"></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
 	<body bgcolor="transparent" style='background:transparent'>

		<div class="iframe_main2">

			<div class="iframe_wrap">
				<form action="" method="post" id="form1">
				<strong class="cktitle">二级订单</strong>
				<div class="Atlantic">
					<div class="attain">
						<p class="showhade">一级订单编号：</p>
						<input type="text" class="attract" value="${fristlevelorder.firstlevelorderNo }" readonly />
						<input type ="hidden" name="fristlevelorder.idNumber" value="${fristlevelorder.idNumber }" />
					</div>
					<div class="attain">
						<p class="showhade attribute">联系人：</p>
						<input type="text" class="attract August" name="fristlevelorder.arrivalpeople"  />
					</div>
					<div class="attain">
						<p class="showhade attribute">联系方式：</p>
						<input type="text" class="attract" name="fristlevelorder.arrivalpeopletel" />
					</div>
					<div class="attain">
						<p class="showhade attribute">订单状态：</p>
						<input type="text" class="attract August" value="已归集" readonly/>
					</div>
					
				</div>
				<div style="clear: both;"></div>
				<div class="aural"></div>
				<div class="Atlantic">
					<div class="attain">
						<p class="showhade">时间区间：</p>
						<input type="text" class="attract bite" value="${fn:substring(fristlevelorder.collectionstarttime,10,16) }" readonly/>
					</div>
				
						<p class="blast"><img src="images/esys/shx.png"></p>
						
						<input type="text" class="attract bite blossom" value="${fn:substring(fristlevelorder.collectionendtime,10,16)}" readonly />
					<div class="attain">
						<p class="showhade attribute">产地名称：</p>
						<input type="text" class="attract bother" value="${estore.corpname}" readonly/>
					</div>
					<div class="attain">
						<p class="showhade attribute">到货时间：</p>
						<input type="text" class="attract bother" name="fristlevelorder.arrivaltime"  />
					</div>
					
				</div>
				<div style="clear: both;"></div>
				<div class="aural"></div>
				<div style="clear: both;"></div>
				<div class="h10"></div>
				<h3 class="beneath">订单商品清单</h3>
				<table class="table table-bordered" id="cargo3">
					<thead>
						<tr>
							<th>商品分类</th>
							<th>商品编号</th>
							<th>商品名称</th>
							<th>数量</th>
							<th>规格</th>
							<th>重量</th>
							<th>单位</th>
							<th>级别</th>
							<th>价格/元</th>
						</tr>
					</thead>
					<tbody>
						<c:set var="total" value="0"></c:set>
						<c:forEach items="${list }" var="map">
						<c:set var="total" value="${ total+map.buynumber*map.buyprice }"></c:set>
						<tr>
						<td>${map. categoryname}</td>
						<td class="kfgb">${ map.commoditycode}</td>
						<td>${ map.commodityname}</td>
						<td>${ map.buynumber}</td>
						<td>${map.outerpacking }</td>
						<td>${map.grossweight }</td>
						<td>kg</td>
						<td>${map.levelname }</td>
						<td>${map.buynumber*map.buyprice }</td>
					</tr>
					</c:forEach>
						<tr>
							<td colspan="9">
                             <div class="economic">
                             	<span class="amount">总计：</span>
                             	<span class="all_amount">￥${total }</span>
                             	<input type="hidden" name="fristlevelorder.orderprice" value="${total }">
                             	<div style="clear: both;"></div>
                             </div>							
							</td>
						</tr>
					</tbody>

				</table>
				<h3 class="beneath">二级订单列表</h3>
				<table class="table table-bordered" id="cargo3">
					<thead>
						<tr>
							<th>二级订单编号</th>
							<th>联系人</th>
							<th>联系方式</th>
							<th>送货地址</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${info }" var="info">
							<tr>
								<td>${info.secondlevelorder.secondlevelorderNo}</td>
								<td>${info.estore.contactname }</td>
								<td>${info.estore.contactphoneNo }</td>
								<td>${info.estore.province }${info.estore.city }${info.estore.area }${info.estore.address }</td>
								<td><a href="secondlevelorder_details.action?secondlevelorder.idNumber=${info.secondlevelorder.idNumber }" class="ckbtn" >查看</a></td>
							</tr>
						</c:forEach>

					</tbody>
				</table>				
			<a href="javscript:;" class="btn btn-lg btn-warning" id="brakebtn">立即下单</a>
			</form>
			</div>
			<div class="clear"></div>
		</div>

	</body>
</html>
