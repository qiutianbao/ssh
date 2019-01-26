<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!doctype html>
<html>
<head>
<base href="<%=basePath%>">
<meta charset="utf-8">
<title>公告详情</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" href="css/esys/iframe_style.css" />
<link rel="stylesheet" href="css/esys/login.css" />
<script type="text/javascript" src="script/esys/jquery.min.js"></script>
<style type="text/css">
.gohubox{display: block;}
</style>
</head>

<body bgcolor="transparent" style='background:transparent'>
<div class="iframe_main2">
  <div class="iframe_wrap">
    <form action="sysmessages_addNewInfo.action" method = "post" enctype="multipart/form-data">
      <div class="notice">
        <table width="728" border="0" cellpadding="0" cellspacing="0">
          <tbody>
             <tr>
              <td width="112" align="right">发布时间：</td>
              <td width="610"><div class="ktxt1">
                  <input type="text" class="ktxt1-gb" value="${sys.releasetime }" readonly/>
                </div></td>
            </tr>
            <tr>
              <td align="right"><span class="msgtitle">标题：</span></td>
              <td><div class="ktxt2">
                  <input type="text" class="ktxt2-gb" value="${sys.msgtitle }" name="msgtitle" />
                </div></td>
            </tr>
            <tr class="gohubox2">
              <td align="right">子标题：</td>
              <td><div class="ktxt3 float_l">
                  <input type="text" class="ktxt3-gb" value="${sysmsgcontent.subTitle }"  name="subTitle"/>
                </div>
              </td>
            </tr>
            <tr class="gohubox2">
              <td align="right">上传图片：</td>
              <td><div class="seth_img">

                  <p class="call_img" id="gstImg1"><img src="${sysmsgimages.msgimgname }" class="gsvImg" style="width:232px;height:162px;">
                  <input type="file" class="bdox" onChange="gstFor(this)" name="file"  />
                  </p>
                  <span class="callspan">(图片比例2:1，支持png，jpg，单张图片大
                  小不超过500k)</span> </div></td>
            </tr>
            <tr class="ggact">
              <td align="right" valign="top"><span class="gg_title">公告内容：</span></td>
              <td><textarea cols="50" rows="8" class="ktxt2-area"  name="msgcontent">${sysmsgcontent.msgcontent }</textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
  <div class="clear"></div>
</div>
</body>
<script type="text/javascript">
$(function(){
	$('.notice').on('click','#sethbtn',function(){
		if($(this).hasClass('rsket')){
			$(this).next('span').text('切换为发布图文消息');
			$('.gohubox').hide();
			$('.bigtitle').text('标题：');
			$('.gg_title').text('公告内容：');
			$('.ggact').hide();
			$('.ggact').eq(0).show();
			$(this).removeClass('rsket');	
			}
			else{	
			$(this).next('span').text('切换为发布文字消息');
			$('.gohubox').show();
			$('.bigtitle').text('大标题：');
			$('.gg_title').text('对应内容：');
			$(this).addClass('rsket');
				}
		return false;
		});
	var s=1;
   $('#add_set').on('click',function(){
	var _toStr='<tr class="gohubox2"><td align="right">子标题：</td><td><div class="ktxt3 float_l"><input type="text" class="ktxt3-gb" value="" name="subtitle"/></div></td></tr><tr class="gohubox2"><td align="right">上传图片：</td><td><div class="seth_img"><p class="call_img" id="gstImg'+(s+1)+'"><img src="images/esys/hsfg.png" class="gsvImg"><input type="file" class="bdox" onChange="gstFor(this)" name="upsImg"/></p><span class="callspan">(图片比例2:1，支持png，jpg，单张图片大小不超过500k)</span> </div></td></tr><tr class="ggact"><td align="right" valign="top"><span class="gg_title">公告内容：</span></td><td><textarea cols="50" rows="8" class="ktxt2-area" name="areacontent"></textarea></td></tr>';
	if($('.seth_img').length>4){
		alert('你已经超过长度');
		return false;
		}
	else{
		$(_toStr).appendTo($("tbody"));
	    $('.gohubox').show();
		_conIndex=s;
		s=s+1;
		}
	return false;
	});		
})
$('.notice').on('click','.call_img',function(){
	//alert($(this).parents('.gohubox').index());
	var _index=$(this).parents('.gohubox2').index()/3;
	_conIndex=_index;
	//alert(_conIndex);
	});


//图片上传
var _conIndex=1;
function gstFor(file) {
	var MAXWIDTH = 232;
	var MAXHEIGHT = 162;
	// _conIndex=$('.element_main').index();
	// alert(_conIndex);
	var div = document.getElementById('gstImg' + _conIndex);
	if (file.files && file.files[0]) {
		/*div.innerHTML = con;*/
		$("<img id=\"formImg" + _conIndex + "\">").appendTo($(div));
		alert(_conIndex);
		//alert(_conIndex);
		var img = document.getElementById('formImg' + _conIndex);
		img.onload = function() {
			//var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = 232;
			img.height = 162;
			// img.style.marginLeft = rect.left+'px';
			img.style.marginTop = 0 + 'px';
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
		$('.fluent').css('border', 'none');
		$('.geyk3').eq(_conIndex).hide();
	} else //兼容IE
	{
		//新增图片标签用于显示上传图片的预览图
		$("<img id=\"formImg" + _conIndex + "\">").appendTo($('#gstImg' + _conIndex));
		//设置图片滤镜
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		window.parent.document.body.focus();
		var realpath2 = document.selection.createRange().text;
		var img1 = document.getElementById('formImg'+_conIndex);
		img1.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
	    img1.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = realpath2;//设置img的src为base64编码的透明图片，要不会显示红x
		img1.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		//设置滤镜大小
		img1.style.width="232px";
		img1.style.height="162px";
      	  	
	}
	//隐藏原来的添加图标
	$('.gsvImg').eq(_conIndex-1).hide();
	//添加数量自增
	++_conIndex;
}

function CurentTime()
    { 
        var now = new Date();
       
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
       
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
       
        var clock = year + "-";
       
        if(month < 10)
            clock += "0";
       
        clock += month + "-";
       
        if(day < 10)
            clock += "0";
           
        clock += day + " ";
       
        if(hh < 10)
            clock += "0";
           
        clock += hh + ":";
        if (mm < 10) clock += '0'; 
        clock += mm; 
        return(clock); 
    } 
</script>
</html>
