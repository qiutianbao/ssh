<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.yinli.util.common.PropertiesUtils" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!doctype html>
<html>
<head>
<base href="<%=basePath%>">
<meta charset="UTF-8">
<title>首页轮播详情</title>
<link rel="stylesheet" href="css/esys/reset.css" />
<link rel="stylesheet" href="css/esys/add_pro.css" />
<script type="text/javascript" src="script/esys/jquery1.10.2.min.js"></script>
<script type="text/javascript" src="script/esys/add_pro.js"></script>

</head>
<body>
<div class="modify">
  <div class="modify_main">
  <div class="sort_all" style="width:806px;">
  <form name="sortUploadForm" action="carousel_editor.action" method="post" enctype="multipart/form-data">
 	<input type="hidden" value="${carousel.idNumber }" name="carousel.idNumber">
  <table width="728" border="0" cellpadding="0" cellspacing="0">
  <tbody>
    <tr>
      <td width="102" height="68" align="right"><p style="font-size:16px; color:#999999">排序：</p></td>
      <td width="620"><div class="sort_div"><input type="text" class="sort_txt"  value="${carousel.serialnumber }" name="carousel.serialnumber"/></div></td>
    </tr>
    <tr>
      <td align="right" valign="top"><p style="font-size:16px;">上传图片：</p></td>
      <td>
      
      <div class="sort_upload" id="priew4" >
      <c:set var="style_img" value=""></c:set>
     <c:if test="${carousel.imagename != '' || carousel.imagename !=null}">
     	<c:set var="style_img" value="style='display: none;'"></c:set>
     </c:if>
   <img  src="images/esys/sortImg.png" id="priew5" ${style_img }/>
   <input type="file" id="upKmg2" name="carouselFile" class="click_file" accept="image/*"  onChange="sortUpload(this)" />
     <img src="<%=PropertiesUtils.getProperties("img_carousel") %>/${carousel.imagename}" id="sortImg" width="600" height="270">
      </div>
   
      </td>
    </tr>
  </tbody>
</table>
<input type="submit" value="发布"  class="sort_save_btn">
</form>
  </div>
    <div class="clear"></div>
  </div>
  <div class="clear"></div>
</div>
<script type="text/javascript">
//2016-3-4  首页轮播详情
  function sortUpload(file) {
	var MAXWIDTH = 600;
	var MAXHEIGHT = 270;
	var div = document.getElementById('priew4');
	if (file.files && file.files[0]) {
		//$('<img id=imghead>').appendTo($(div));
		var img = document.getElementById('sortImg');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = 600;
			img.height = 270;	
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
		$('.fluent').css('border', 'none');
		$('#priew5').hide();
	} else //兼容IE
	{
	
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		var path = document.getElementById("upKmg2");
		path.select();
		//path.blur();
		 window.parent.document.body.focus();
		var realpath = document.selection.createRange().text;
         //alert(realpath);
		// $('<img id=imghead>').appendTo($(div));
		 var img = document.getElementById('sortImg');
	img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
    img.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = realpath;//设置img的src为base64编码的透明图片，要不会显示红x
	img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
	//$('#imghead').attr('src',sFilter+realpath);
	//$('#imghead').css({"width":232,"height":162});
	img.style.width="600px";
	img.style.height="270px";
	}
	$('#priew5').hide();
	//解决在IE下onchange事件在第一次点击的时候是执行的，但是第二次第三次事件失效bug
   /* $('#upKmg2').remove();
  	$('<input type="file" id="upKmg2" class="click_file" accept="image/*" name="carouselFile"  onChange="sortUpload(this)" />').insertAfter('#priew5'); */
}
</script>
</body>
</html>
