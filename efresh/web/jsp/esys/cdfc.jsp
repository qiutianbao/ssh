<%@ page language="java" import="java.util.*,com.yinli.util.common.PropertiesUtils" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"	prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>添加产地风采</title>

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
<!-- <script type="text/javascript" src="script/esys/getEstore.js"></script> -->
<script type="text/javascript" src="script/esys/cdfc.js"></script>
</head>
<body>
	<div class="modify">
		<div class="modify_main">
			<form method="post" name="getEstore">
				
			</form>
			<form id="form1" action="store_style_add.action" method="post" enctype="multipart/form-data">
			<div style="width:900px">
			<div class="gethm">
				<span class="gethm-font">产地名称：</span>
				<div class="mosquito getborder" style="width: 278px;">
					<input type="text" class="mosquito_txt"  name="corpname"
						disabled="disabled" value="${ estore.corpname}">
						<input type="hidden" name="estore.idNumber" value="${estore.idNumber}">
						<input type="hidden" name="store_style.idNumber" value="${store_style.idNumber }">
						<input type="hidden" name="deleteId"  value="">
						<input type="hidden" name="editor_productImg" value="">
						<c:choose>
							<c:when test="${fn:length(store_productList)==0 || store_productList==null }">
								<input type="hidden" name="index_add" value="1">
							</c:when>
							<c:otherwise>
								<input type="hidden" name="index_add" value="0">
							</c:otherwise>
						</c:choose>
				</div>
			</div>
			<div class="clear"></div>
			<span class="gethm-font">轮播图片：</span>
			<div style="margin-top:18px; float:left">
				<div class="adverb-div">
					<ul class="adverb_ul" id="adverb_ul">
						<%-- <li>
		            		<a href="javascript:;">
		            			<img src="images/commodity/${img.imagename}" name="${img.idNumber }" width="100" height="49"/>
		            			<input type="file" name = "file"  class="getkadd" accept="image/*" style="width:100px; height:38px;display: none" >
		            		 </a>
		            		 <a href="javascript:;" class="sement-del" style="display: inline;"><img src="images/esys/049.png"/></a> 
	            		 </li> --%>
	            		 <c:forEach items="${store_imagesList }" var="store_images">
							<li><img src="<%=PropertiesUtils.getProperties("img_store_product") %>/${ store_images.imagename}" name="${store_images.idNumber }" width="100" height="49"> <a
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
					<textarea class="hyato-txt" cols="80" rows="20" name="store_style.frofile">${ store_style.frofile}</textarea>
				</div>
			</div>
			<div class="clear"></div>
			
			<div class="tpbox">
				<c:if test="${fn:length(store_productList)==0 || store_productList==null }">
					<div class="gybox">
				<div class="pro_name">
					<span class="pro_kl">产品名称：</span>
					<div class="pro_div">
						<input type="text" class="pro_txt" value="${store_product.productname}"  name="productname"/>
					</div>
					<span class="fhouse"><img src="images/esys/204.png" /></span>
					
				</div>
				<div class="clear"></div>
				<div class="detimg">
					<span class="pro_kl">产品图片：</span>
					<p class="canbv" id="putImg0">
						<img src="images/esys/039.png" name="" class="geyk5" width="232" height="162"/> <input
							type="file" accept="image/*" onChange="putImages(this)"
							class="can_box" style="width:100%; height:100%" name="product" />
					</p>
				</div>
				<div class="clear"></div>
			</div>
				</c:if>
				<c:set value="0" var="index" ></c:set>
				<c:forEach items="${store_productList }" var="store_product">
			<div class="gybox">
				<div class="pro_name">
					<span class="pro_kl">产品名称：</span>
					<div class="pro_div">
						<input type="text" class="pro_txt" value="${store_product.productname}"  name="productname"/>
					</div>
					<c:if test="${index==0 }">
						<span class="fhouse"><img src="images/esys/204.png" /></span>
					</c:if>
				
					
				</div>
				<div class="clear"></div>
				<div class="detimg">
					<span class="pro_kl">产品图片：</span>
					<p class="canbv" id="putImg${index }">
						<img src="<%=PropertiesUtils.getProperties("img_store_product") %>/${store_product.imgname }" name="${store_product.idNumber }" class="geyk5" width="232" height="162"/> <input
							type="file" accept="image/*" onChange="putImages(this)"
							class="can_box" style="width:100%; height:100%" name="product" />
					</p>
				</div>
				<div class="clear"></div>
			</div>
				<c:set value="${index+1 }" var="index" ></c:set>
			</c:forEach>
			</div>

			<!---->
				<input type="button" value="保存" id="sub" class="saveBtn">
				
			</div>	
			</form>
		</div>
		<div class="clear"></div>
	</div>
</body>
</html>
