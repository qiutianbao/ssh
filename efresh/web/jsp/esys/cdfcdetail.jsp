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

<title>产地风采详情</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" href="css/esys/reset.css" />
<link rel="stylesheet" href="css/esys/add_pro.css" />
<link rel="stylesheet" type="text/css"
	href="css/esys/dropkick.css" />
<link rel="stylesheet" type="text/css"
	href="css/esys/Iconfont/iconfont.css" />
<script type="text/javascript"
	src="script/esys/jquery1.10.2.min.js"></script>
<script type="text/javascript"
	src="script/esys/jquery.dropkick-min.js"></script>
<script type="text/javascript" src="script/esys/add_pro.js"></script>
</head>
<body>
	<div class="modify">
		<div class="modify_main">
			<div class="gethm">
				<span class="gethm-font">产地名称：</span>
				<div class="mosquito getborder" style="width: 278px;">
					<input type="text" class="mosquito_txt" value="${estore.corpname }"
						disabled="disabled">
				</div>
			</div>
			<div class="clear"></div>
			<span class="gethm-font">轮播图片：</span>
			<div style="margin-top:18px; float:left">
				<div class="adverb-div">
					<ul class="adverb_ul" id="adverb_ul">
						<c:forEach items="${store_imagesList }" var="store_images">
							<li><img src="../images/other/${ store_images.imagename}" width="100" height="49"> <a
							href="javascript:;" class="sement-del" style="display:block"><img
								src="images/esys/049.png"></a></li>
						</c:forEach>
					</ul>
				</div>
				<div class="admit_div">
					<a href="javascript:;" class="admire gonyb tkup" style="margin-top: 20px; visibility: visible;"> <i class="iconfont geticon"></i> 
						<span class="admire-up" onclick="editorImg(this)">上传</span>
	            	</a>
					<p class="p_show3" style="margin-top:46px">(图片比例2:1，支持png，jpg，单张图片大
						小不超过500k，最多5张)</p>
				</div>
			</div>
			<div class="clear"></div>
			<div class="cdjs">
				<span class="gethm-font">产地介绍：</span>
				<div class="hyato">
					<textarea class="hyato-txt" cols="80" name="store_style.frofile" rows="20" >${ store_style.frofile}</textarea>
				</div>
			</div>
			<div class="clear"></div>
			<div class="tpbox">
				<c:forEach items="${store_productList }" var="store_product">
					<div class="gybox">
						<div class="pro_name">
							<span class="pro_kl">产品名称：</span>
							<div class="pro_div">
								<input type="text" class="pro_txt" value="${store_product.productname}" />
							</div>
							<span class="fhouse"><img src="images/esys/204.png" /></span>
						</div>
						<div class="clear"></div>
						<div class="detimg">
							<span class="pro_kl">产品图片：</span>
							<p class="canbv" id="putImg0">
								<img src="../images/other/${store_product.imgname }" class="geyk5" width="232" height="162"/> <input
									type="file" accept="image/*" onChange="putImages(this)"
									class="can_box" style="width:100%; height:100%" />
							</p>
						</div>
						<div class="clear"></div>
					</div>
			</c:forEach>
			</div>

			<!---->
		</div>
		<div class="clear"></div>
	</div>
</body>
</html>
