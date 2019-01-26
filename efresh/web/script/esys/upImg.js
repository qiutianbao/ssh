/*添加按钮*/
var tomkey;
$(function(){
 $('.add_txt').on('click',function(){
  var _rote='<div class="meadow"><input type="text" class="meadow_txt" name="brandName"/></div>';
   $(this).before(_rote);
   //添加一个以后，隐藏添加按钮
   $(this).css("display","none");
   return false;
});
 
 	 
	 $('#ckImg2').on('click','.empire',function(){
	 	var _this=$(this);
	 	//alert(_this.index());
	 	tomkey=_this.index();
	 	});	
});




//图片上传预览    IE是用了滤镜。
function checkImage(file) {
	var MAXWIDTH = 160;
	var MAXHEIGHT = 160;
	var div = document.getElementById('preview');
	if (file.files && file.files[0]) {
		//div.innerHTML = '<img id=imghead>';
		$( '<img id=imghead>').appendTo($(div));
		var img = document.getElementById('imghead');
		img.onload = function() {
			var rect = clacImgZoomParam3(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
			//                 img.style.marginLeft = rect.left+'px';
			img.style.marginTop = 0 + 'px';
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
		$('.fluent').css('border', 'none');
	} else //兼容IE
	{
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		var src = document.selection.createRange().text;
		div.innerHTML = '<img id=imghead>';
		var img = document.getElementById('imghead');
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
		var rect = clacImgZoomParam3(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
		status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
		div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + 0 + "px;" + sFilter + src + "\"'></div>";
	}
	$("#geyk1").remove();
}

//添加正文图片
//  IE是用了滤镜。
var _stg = 0;
var _i=0;
/*function previewImage(file) {
		if(_i>2){
		return false;
		}
		if(_i==2){
			$('.entry').hide();
			}
	_stg = _stg + 1;
	var MAXWIDTH = 282;
	var MAXHEIGHT = 212;
	var div = document.getElementById('ckImg');
	if (file.files && file.files[0]) {
		var context = div.innerHTML;
		div.innerHTML = context + '<img id="imghead' + _stg + '">';
		var img = document.getElementById('imghead' + _stg);
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
			//                 img.style.marginLeft = rect.left+'px';
			img.style.marginTop = 0 + 'px';
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);

	} else //兼容IE
	{
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		var src = document.selection.createRange().text;
		div.innerHTML = '<img id=imghead>';
		var img = document.getElementById('imghead');
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
		status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
		div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + 0 + "px;" + sFilter + src + "\"'></div>";
	}	
	$('.entry').css({"margin-left":0});
	_i=_i+1;
}*/

var _index = 1;
function previewImage(file) {
	/*if(_i>2){
		return false;
	}
	if(_i==2){
		$('.entry').hide();
		}*/
_stg = _stg + 1;
var MAXWIDTH = 282;
var MAXHEIGHT = 212;
if (file.files && file.files[0]) {
	
	var _costr;
	//添加添加图标
	if(_index<=2){
		_costr = '<a id=\"turnimg'+(_index+1)+'\" class="p_show2 empire getbg" style="margin-left:0" href="javascript:;"><img src="images/esys/039.png" class="geyk2" width="232" height="162"><input type="file" class="ahp" accept="image/*" name="photo" style="width: 232px;height:162px" onchange="previewImage(this)"></a>';
		$(_costr).appendTo($("#ckImg2"));
		++_index;
	}
	//上传图片预览
	$('.geyk2').eq(tomkey).hide();
	$("<img id=\"turn"+(tomkey+1)+"\">").appendTo($('#turnimg'+(tomkey+1)));
	var img = document.getElementById('turn' + (tomkey+1));
	img.onload = function() {
		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
		img.width = rect.width;
		img.height = rect.height;
		//                 img.style.marginLeft = rect.left+'px';
		img.style.marginTop = 0 + 'px';
	}
	var reader = new FileReader();
	reader.onload = function(evt) {
		img.src = evt.target.result;
	}
	reader.readAsDataURL(file.files[0]);

} else //兼容IE
{
	var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
	file.select();
	var src = document.selection.createRange().text;
	div.innerHTML = '<img id=imghead>';
	var img = document.getElementById('imghead');
	img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
	var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
	status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
	div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + 0 + "px;" + sFilter + src + "\"'></div>";
}	
$('.entry').css({"margin-left":0});
_i=_i+1;
}



function clacImgZoomParam(maxWidth, maxHeight, width, height) {
	var param = {
		top: 0,
		left: 0,
		width: width,
		height: height
	};
	if (width > maxWidth || height > maxHeight) {
		rateWidth =maxWidth;
		rateHeight =maxHeight;

		if (rateWidth > rateHeight) {
			param.width = maxWidth;
			param.height = 212;
		} else {
			param.width =282;
			param.height = maxHeight;
		}
	}
	param.left = Math.round((maxWidth - param.width) / 2);
	param.top = Math.round((maxHeight - param.height) / 2);
	return param;
}


function clacImgZoomParam3(maxWidth, maxHeight, width, height) {
	var param = {
		top: 0,
		left: 0,
		width: width,
		height: height
	};
	if (width > maxWidth || height > maxHeight) {
		rateWidth =maxWidth;
		rateHeight =maxHeight;

		if (rateWidth > rateHeight) {
			param.width = maxWidth;
			param.height = 160;
		} else {
			param.width =160;
			param.height = maxHeight;
		}
	}
	param.left = Math.round((maxWidth - param.width) / 2);
	param.top = Math.round((maxHeight - param.height) / 2);
	return param;
}




//元素自适应高宽左右
/*function ElementAuto(context) {
    var _oldWidth = $("[oldWidth]", context);
    if (_oldWidth.length > 0) {
        _oldWidth.each(function () {
            var _this = $(this);
            var _thisOldWidth = _this.attr("oldWidth");
            var _newWidth = parseFloat(_thisOldWidth) * G_HeightRate;
            _this.css("width", _newWidth);
            _this.attr('newWidth', _newWidth);
            //var _thisOldHeight = _this.attr("otherHeight");
            //if(_thisOldHeight)
            //{
            //    alert($("#img1").height())
            //    _this.css("height", $("#" + _thisOldHeight).height() - parseFloat(_this.css("paddingTop")));
            //}
        });
    }
    var _oldLeft = $("[oldleft]", context);
    if (_oldLeft.length > 0) {
        _oldLeft.each(function () {
            var _this = $(this);
            var _thisOldWidth = _this.attr("oldleft");
           // var _newLeft = parseFloat(_thisOldWidth) * G_WidthRate;
			var _newLeft = (parseFloat(_thisOldWidth) * G_WidthRate)/2;
            _this.css("left", _newLeft);
            _this.attr('newLeft', _newLeft);

        });
    }

    var _oldRight = $("[oldright]", context);
    if (_oldRight.length > 0) {
        _oldRight.each(function () {
            var _this = $(this);
            var _thisOldWidth = _this.attr("oldright");
            var _newRight = parseFloat(_thisOldWidth) * G_WidthRate;
            _this.css("right", _newRight);
            _this.attr('newRight', _newRight);

        });
    }

    var _oldTop = $("[oldTop]", context);
    if (_oldTop.length > 0) {
        _oldTop.each(function (){
            var _this = $(this);
            var _thisOldWidth = _this.attr("oldTop");
            var _newTop = parseFloat(_thisOldWidth) * G_HeightRate;
            _this.css("top", _newTop);
            _this.attr('newTop', _newTop);
        });
    }
    var _oldHeight = $("[oldHeight]", context);
    if (_oldHeight.length > 0) {
        _oldHeight.each(function () {
            var _this = $(this);
            var _thisOldHeight = _this.attr("oldHeight");
            var _newHeight = parseFloat(_thisOldHeight) * G_HeightRate;
            _this.css("height", _newHeight);
            _this.attr('newHeight', _newHeight);

        });
    }

    //oldright
       var _oldMarginTop = $("[oldMarginTop]", context);
    if (_oldMarginTop.length > 0) {
        _oldMarginTop.each(function () {
            var _this = $(this);
            var _thisOldMarginTop = _this.attr("oldMarginTop");
            var _newMarginTop = parseFloat(_thisOldMarginTop) * G_HeightRate;
            _this.css("margin-top", _newMarginTop);
            _this.attr('newMarginTop', _newMarginTop);
        });
    }	
}*/