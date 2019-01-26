<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>订单详情</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">


<link rel="stylesheet" href="css/esys/iframe_style.css" />
<link rel="stylesheet" href="css/esys/login.css" />
<link rel="stylesheet" href="css/esys/bootstrap.min.css" />
<script type="text/javascript" src="js/jquery1.10.2.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
</head>

<body bgcolor="transparent" style='background:transparent'>

	<div class="iframe_main2">

		<div class="iframe_wrap">

			<strong class="cktitle">订单详情</strong>
			<div class="Atlantic">
				<div class="attain">
					<p class="showhade">订单编号：</p>
					<div class="gtmo">
						<input type="text" class="attract" value="${secondlevelorder.secondlevelorderNo}"
							disabled="disabled" />
					</div>
				</div>
				<div class="attain">
					<p class="showhade attribute">下单时间：</p>
					<div class="gtmo">
						<input type="text" class="attract" value="${secondlevelorder.creationordertime }"
							disabled="disabled" />
					</div>
				</div>
				<div class="attain">
					<p class="showhade attribute">订单状态：</p>
					<div class="gtmo">
						<c:if test="${ secondlevelorder.orderstatus == 0}">
							<input type="text" class="attract August" value="待支付"
							disabled="disabled" />
						</c:if>
						<c:if test="${ secondlevelorder.orderstatus == 1}">
							<input type="text" class="attract August" value="待处理"
							disabled="disabled" />
						</c:if>
						<c:if test="${ secondlevelorder.orderstatus == 2}">
							<input type="text" class="attract August" value="已发货"
							disabled="disabled" />
						</c:if>
						<c:if test="${ secondlevelorder.orderstatus == 3}">
							<input type="text" class="attract August" value="已签收"
							disabled="disabled" />
						</c:if>
						<c:if test="${ secondlevelorder.orderstatus == 4}">
							<input type="text" class="attract August" value="已取消"
							disabled="disabled" />
						</c:if>
						<c:if test="${ secondlevelorder.orderstatus == 5}">
							<input type="text" class="attract August" value="已接单"
							disabled="disabled" />
						</c:if>
						<c:if test="${ secondlevelorder.orderstatus == 6}">
							<input type="text" class="attract August" value="已评分"
							disabled="disabled" />
						</c:if>
						<c:if test="${ secondlevelorder.orderstatus == 7}">
							<input type="text" class="attract August" value="已归集"
							disabled="disabled" />
						</c:if>
						<c:if test="${ secondlevelorder.orderstatus == 8}">
							<input type="text" class="attract August" value="已拒单"
							disabled="disabled" />
						</c:if>
					</div>
				</div>
				<div class="attain">
					<p class="showhade attribute">联系人：</p>
					<div class="gtmo">
						<input type="text" class="attract August" value="${estore. contactname}"
							disabled="disabled" />
					</div>
				</div>
			</div>
			<div style="clear: both;"></div>
			<div class="aural"></div>
			<div class="Atlantic">
				<div class="attain">
					<p class="showhade">联系方式：</p>
					<div class="gtmo">
						<input type="text" class="attract automobile" value="${estore.contactphoneNo }"
							disabled="disabled" />
					</div>
				</div>
				<div class="attain">
					<p class="showhade attribute">到货时间：</p>
					<div class="gtmo">
						<input type="text" class="attract avoid "
							value="${secondlevelorder.arrivaltime }" disabled="disabled" />
					</div>
				</div>
				<div class="attain">
					<p class="showhade attribute">产地名称：</p>
					<div class="gtmo">
						<input type="text" class="attract axis" value="${estore. corpname}"
							disabled="disabled" />
					</div>
				</div>
			</div>
			<div style="clear: both;"></div>
			<div class="aural"></div>
			<div class="Atlantic">
				<div class="attain">
					<p class="showhade">送货地址：</p>
					<div class="gtmo">
						<input type="text" class="attract beggar"
							value="${estore.province }${estore.city}${estore.area}${estore.address}" disabled="disabled" />
					</div>
				</div>
			</div>

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
					<c:forEach items="${list }" var="map">
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
					<!-- <tr>
						<td>叶菜类</td>
						<td class="kfgb">YCL12589</td>
						<td>大白菜</td>
						<td>3</td>
						<td>箱</td>
						<td>50</td>
						<td>kg</td>
						<td>A</td>
						<td>300</td>
					</tr> -->
				</tbody>

			</table>

		</div>
		<div class="clear"></div>
	</div>

</body>

<script type="text/javascript">
	$(function() {
		var _clasp = $('.clasp');
		_clasp.on('click', function() {
			$('.bronze').show();
		})
		$('.bronze span').on('click', function() {
			var _this = $(this);
			//alert(_this.text());
			$('.gtf_txt').text(_this.text());
			$('.bronze').hide();
			return false;
		})
		$('.claspx').on('click', function() {
			$('.bronzex').show();

		})
		$('.bronzex span').on('click', function() {
			var _this = $(this);
			//alert(_this.text());
			$('.gtf_txt2').text(_this.text());
			$('.bronzex').hide();
			return false;
		})
	})
</script>

</html>