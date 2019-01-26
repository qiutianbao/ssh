// JavaScript Document
var _conIndex = 0;
var _forIndex, tomkey,_juIndex;
var deleteImgId = "";
var msg5 = "请输入相对应文字描述";//商品图文描述提示信息
$(function() {
	//商品图文描述获取焦点时，清空提示信息
	$(".elect_main").on("focus",".cleanMsg",function(){
		var _this = $(this);
		var value = _this.val();
		if(value == msg5){
			_this.val("") ;
		}
	});
	
	
	
//	$(".cleanMsg").blur(function(){
//		var _this = $(this);
//		var value = _this.val();
//		if(value == ""){
//			_this.val(msg5) ;
//		}
//	});
	
	
	var _lengthp = $('.adverb_ul li').length;
	_forIndex = _lengthp;
	//新增级别
	var index_jb = 0;
	var _modyHtml = $('.chn-main').html();
	$('#add_level').on('click', function() {
		$(".pricenum").val(price_num);
		//alert(_modyHtml)
		$(_modyHtml).appendTo($('.chn-main'));
		$('.mug_pk:gt(0)').hide();
		$('.muddy:gt(0)').css({
			"margin-left": "124px",
			"width": "612px"
		});
		//加载商品单位数据
		//downloadCommoditycompany();
		$.ajax({
			type:"post",
			url:"commoditycompany_findAlls.action",
			async:false,
			dataType:"json",
			success:function(data){
				var tempList = data.tempList;
				var select = $(".commoditycompany").last();
				$(".commoditycompany:last option").remove();
				var option = [];
				for(var i =0;i<tempList.length;i++){
					select.append("<option value='"+tempList[i].idNumber+"'>"+tempList[i].companyname+"</option>");
				}
			},
			error:function(){
				//alert("执行ajax失败");
			}
		});
		$('.default').dropkick();
		
		
		index_jb = 0;
		price_num = 1;
      
	});
	$('.chn-main').on('click', '.ddfg', function() {
		laydate();
	})
	$('.chn-main').on('click', '.museum', function() {
		var _this = $(this);
		var customvalue_num = $(".customvalue_num").eq(_this.parents('.muddy').index());
		var index_jb = parseInt(customvalue_num.val()) + 1;
		//	  index_jb +=1;
		customvalue_num.val(index_jb);
		//  	  var _modtr='<tr><td align="center"><div class="add_bxh"><input type="text" class="add_bxh_txt gety" name=\"commoditylevel.customproperty'+index_jb+'\"/></div></td><td><div class="emperor"><input type="text" class="emperor_txt" name=\"commoditylevel.customvalue'+index_jb+'\" /></div></td></tr>';
		var _modtr = '<tr><td align="center"><div class="add_bxh"><input type="text" class="add_bxh_txt gety notnull" name=\"customproperty\"/></div></td><td><div class="emperor"><input type="text" class="emperor_txt notnull" name=\"customvalue\" /></div></td></tr>';

		var _getk = _this.parents('.muddy').find('tr').last();
		$(_modtr).insertAfter(_getk);
		$('.gety').focus();
		if (index_jb >= 5) {
			_this.remove();
		}
	});
	/*var _ock=$('.encounter-xv').html();*/
	var j = 1;
	var index = 1;
	$('.add_con').on('click', function() {
		index += 1;
		var name = "commoditydescribe.describe" + index;
		//	 var _pget='<div class="element_main"><p class="p_show1 p_titlek">图文描述：</p><div class="envelope-kxm"><a href="javascript:;" class="p_show2" id="getImg'+j+'"><img src="images/esys/040.png" class="geyk3" width="233" height="162"><input type="file" class="newgetImg" accept="image/*" name="commoditydescribe_img" style="width: 232px;height:162px" onChange="checkImage2(this)"></a><p class="p_show3">(图片比例2:1，支持png，jpg，单张图片大小不超过500k，最多5张)</p><div class="clear"></div><div class="emit-fbx"><div class="eliminate-k"><textarea cols="46" rows="8" class="elsewhere">请输入相对应文字描述</textarea></div><div class="clear"></div></div></div></div>';
		var _pget = '<div class="element_main"><p class="p_show1 p_titlek">图文描述：</p><div class="envelope-kxm"><div  class="p_show2" id="getImg' + j + '"><img src="images/esys/040.png" class="geyk3" width="233" height="162"><input type="file" class="newgetImg" accept="image/*" name="commoditydescribe_img" style="width: 232px;height:162px" onChange="checkImage2(this)"></div><div class="clear"></div><div class="emit-fbx"><div class="eliminate-k"><textarea name="' + name + '" cols="46" rows="8" class="elsewhere cleanMsg">请输入相对应文字描述</textarea></div><div class="clear"></div></div></div></div>';
		//alert(_conIndex);
		//alert(_conIndex);
		var _dokIndex = $('.element_main').length;
		if (_dokIndex > 4) {
			//alert('已经超出上限');
			return false;
		} else {
			$(_pget).appendTo($('.encounter-xv'));
			$('.p_titlek:gt(0)').hide();
			$('.element_main:gt(0)').css('margin-left', '120px');
			_conIndex = j;
			j = j + 1;
		}

	});

	/*$('.encounter-xv').on('change','.getImg'+j+'',function(){
	  checkImage2(this);
	  
	  });*/
	$('.encounter-xv').on('click', '.newgetImg', function() {
		var _this = $(this);
		var _index = _this.parents('.element_main').index();
		_conIndex = _index;
		//alert(_conIndex);
	})
	var _absorb = $('.absorb-over');
	var price_num = 1;
	var _absStr = '<div class="ability-fox"><div class="murder_left"><input type="text" class="murder_txt ddfg" value="请选择日期" id="demo3" name="starttimes" ></div><span class="muscle">至</span><div class="murder_left"><input type="text" class="murder_txt ddfg" value="请选择日期" id="demo4" name="endtimes"></div><div class="murder_left"><input type="text" class="murder_txt emperor_txtT notnull" value="请输入售价" name="price" style="color:red" ></div></div>';
	$('.chn-main').on('click', '.absorb-over', function() {
		//隐藏日历添加按钮
		price_num += 1;
		var _this = $(this);
		$(".absorb-over").eq(_this.parents('.muddy').index()).hide();
		//alert(_this.parents('.muddy').index());
		$('.pricenum').eq(_this.parents('.muddy').index()).val(price_num);
		$(_absStr).insertAfter($('.muddy').eq(_this.parents('.muddy').index()).find('.ability-fox:last'));
		return false;
	});
	$('.editor_kon').on('click', function() {
		if ($(this).hasClass('alter')) {
			$(this).text('编辑');
			//在此提交表单
			editorForm('editor1');

			$('.editork').attr('disabled', 'disabled');
			$('.editork6').attr('readonly', 'readonly');
			$(this).removeClass('alter');
		} else {
			$(this).text('保存');
			$('.editork').removeAttr('disabled');
			$('.editork6').removeAttr('readonly');
			$(this).addClass('alter');
		}
		return false;
	});

	var id_carousel = 0;

	$('#getchan').on('click', function() {
		if ($(this).hasClass('alter')) {
			$(this).text('编辑');
			//提交表单
			editorForm('editor2');
			//异步上传展示图片
			var url = "commodity_updateshow.action";
			var commodityIdNumber = $("#id").val();
			var js = {
				id: commodityIdNumber
			};
			var id = new Array();
			id[0] = 'upKmg1';
			ajaxFileUpload2(id, url, js,commodityIdNumber);
			$('.emperor_txt').attr('disabled', 'disabled');
			$('.gdtm').attr('disabled', 'disabled');
			$('.murder_left').find('input').attr('disabled', 'disabled');
			$('.gonyb').css('visibility', 'hidden');
			$('.sement-del').hide();
			$(this).removeClass('alter');
			//更改编辑保存标识
			flag_save = 1;
		} else {
			$(this).text('保存');
			//初始化记录删除的图片id
			deleteImgId = "";
			//移除更改上传文件用的file
			$(".gkey").remove();
			$('.emperor_txt').removeAttr('disabled');
			$('.gdtm').removeAttr('disabled');
			$('.emperor_txt').first().focus();
			$('.murder_left').find('input').removeAttr('disabled');
			$(".adverb_ul").find('input').removeAttr('disabled');
			$('.gonyb').css('visibility', 'visible');
			$('.sement-del').show();
			$(this).addClass('alter');
			//更改编辑保存标识
			flag_save = 0;
			
		}
		return false;
	});


	$('.adverb_ul').on('click', '.sement-del', function() {
		var _this = $(this);
		deleteImgId += _this.parents('li').find("img").eq(0).attr("name") + " ";
		_this.parents('li').remove();
		//根据轮播图片的数量判断是否显示上传按钮
		var _length = _this.parents('li').length;
		if (_length >= 5) {
			$('.tkup').css('visibility', 'hidden');
		 }else{
			$('.tkup').css('visibility','visible');
		}
		//alert($('.sement-del').length)	
	/*	var _getIndex = $('.sement-del').length;
		if (_getIndex < 5) {
			$('.tkup').css('visibility', 'visible');
		} else {
			$('.tkup').css('visibility', 'hidden');
		}*/
		return false;
	});

	$('.editor5').on('click', function() {
		if ($(this).hasClass('alter2')) {
			$(this).text('编辑');
			//异步提交图文编辑
			var id = new Array();
			//数组存在bug,当删除图文描述时会发生id对应错误
			var id3 = parseInt($("input[name='id3']").eq(0).val());
			for (var i = 0; i < id3; i++) {
				id[i] = "imagename" + (i + 1);
			}
			var index_editor = $(".index_editor");
			var editorId = new Array();
			var j = 0;
			for (var i = 0; i < index_editor.length; i++) {
				var value = index_editor.eq(i).val();
				if (value == "" || value == undefined) {
					continue;
				}
				editorId[j] = value;
				++j;
			}
			var textarea = $("textarea[name='describe']");
			var desc = "";
			for (var i = 0; i < textarea.length; i++) {
				var val = textarea.eq(i).val();
				if (val == "") {
					desc += textarea.eq(i).text();

				} else {
					desc += val;
				}
				if (i < textarea.length - 1) {
					desc += ",";
				}
			}
			/*desc = encodeURI(desc);
			desc = encodeURI(desc);*/
			var url = "commodity_updatetuwen.action";
			var commodityIdNumber = $("#id").val();
			var js = {
				id: commodityIdNumber,
				describe: desc,
				editor: editorId
			};
			//更改编辑保存标识
			flag_save2 = 1;
			ajaxFileUpload(id, url, js);
			//清空记录用的编辑图片的文本框
			for (var i = 0; i < index_editor.length; i++) {
				index_editor.eq(i).val("");
			}

			$('.elsewhere').attr('disabled', 'disabled');
			$('.admire5').css('visibility', 'hidden');

			$(this).removeClass('alter2');
		} else {
			$(this).text('保存');

			$('.elsewhere').removeAttr('disabled');
			$('.admire5').css('visibility', 'visible');
			/* $('.editork').attr('disabled','disabled');*/
			$(this).addClass('alter2');
			//更改编辑保存标识
			flag_save2 = 0;
		}
		return false;
	});

	$('#ckImg2').on('click', '.empire', function() {
		var _this = $(this);
		//alert(_this.index());
		tomkey = _this.index();
	});


	//产地风采
	var _y = 1;
	var _kindex = 1;
	$('.fhouse').on('click', function() {
		var _mLength=$('.detimg').length;
		_y=_mLength;
		_kindex += 1;
		var _ystr = '<div class="gybox"><div class="pro_name"> <span class="pro_kl">产品名称：</span><div class="pro_div"><input type="text" name="productname"   class="pro_txt" value=""/> </div> </div><div class="clear"></div> <div class="detimg"> <span class="pro_kl">产品图片：</span><p class="canbv" id="putImg' + _y + '"><img src="images/esys/039.png" name="" class="geyk5" width="232" height="162"/><input type="file" name="product" accept="image/*" onChange="putImages(this)" class="can_box" style="width:100%; height:100%"/></p></div><div class="clear"></div></div>';
		_conIndex = _y;
		//_y = _y + 1;
		$(_ystr).appendTo($('.tpbox'));
	
	});
//2016-2-29产地风采获取新增索引	
$('.tpbox').on('click','.detimg',function(){
	var _this=$(this);
	var _mayuri=_this.parents('.gybox').index();
	//alert(_this.parents('.gybox').index());
	_juIndex=_mayuri;
	});		


//新增图文编辑保存
$(".tuwen").click(function(){
	$(this).text('正在提交...');
	//异步提交图文编辑

	var textarea = $("textarea[name='describe']");
	var desc = "";
	for (var i = 0; i < textarea.length; i++) {
		var val = textarea.eq(i).val();
		if (val == "") {
			desc += textarea.eq(i).text();

		} else {
			desc += val;
		}
		if (i < textarea.length - 1) {
			desc += ",";
		}
	}
	var url = "commodity_updatetuwen.action";
	var commodityIdNumber = $("#id").val();
	var js = {
		id: commodityIdNumber,
		describe: desc,
		editor: editorId
	};
	//更改编辑保存标识
	flag_save2 = 1;
	ajaxFileUpload(id, url, js);
	//清空记录用的编辑图片的文本框
	for (var i = 0; i < index_editor.length; i++) {
		index_editor.eq(i).val("");
	}

	$('.elsewhere').attr('disabled', 'disabled');
	$('.admire5').css('visibility', 'hidden');

	$(this).removeClass('alter2');

	return false;

});



});





//  IE是用了滤镜。
var _stg = 0;
var _i = 0;
var _index = 0;

function previewImage(file) {

	_stg = _stg + 1;
	var MAXWIDTH = 232;
	var MAXHEIGHT = 162;
	var div = document.getElementById('ckImg2');

	if (file.files && file.files[0]) {
		//判断上传的文件文件类型，大小是否符合规定
		var flag = fileCheck(file,500*1024);
		if(!flag){
			return false;
		}
		
		var _costr;
		//添加添加图标
		if (_index <= 3) {
			_costr = '<div id=\"turnimg' + (_index + 1) + '\" class="p_show2 empire getbg" style="margin-left:0" ><img src="images/esys/039.png" class="geyk2" width="232" height="162"><input type="file" class="ahp" accept="image/*" name="carousel" style="width: 232px;height:162px" onchange="previewImage(this)"></div>';
			$(_costr).appendTo($("#ckImg2"));
			++_index;
		}
		//上传图片预览
		
		$("<img id=\"kedyb" + tomkey + "\">").appendTo($('#turnimg' + tomkey));
		var img = document.getElementById('kedyb' + tomkey);
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = 232;
			img.height = 162;
			//  img.style.marginLeft = rect.left+'px';
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);

     $('.geyk2').eq(_i).hide();
	} else //兼容IE
	{
		//新代码开始
		var _costr;
		//添加添加图标
		if (_index <= 3) {
			_costr = '<div id=\"turnimg' + (_index + 1) + '\" class="p_show2 empire getbg" style="margin-left:0" ><img src="images/esys/039.png" class="geyk2" width="232" height="162"><input type="file" class="ahp" accept="image/*" name="carousel" style="width: 232px;height:162px" onchange="previewImage(this)"></div>';
			$(_costr).appendTo($("#ckImg2"));
			++_index;
		}
		//文件显示区域
		$("<img id=\"kedyb" + tomkey + "\">").appendTo($('#turnimg' + tomkey));
		//整理图片路径
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		window.parent.document.body.focus();
		var realpath2 = document.selection.createRange().text;
//		alert(realpath2);
		var img = document.getElementById('kedyb'+tomkey);
		img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
	    img.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = realpath2;//设置img的src为base64编码的透明图片，要不会显示红x
		img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		img.style.width="232px"
		img.style.height="162px";	
		//隐藏添加图标
		$('.geyk2').eq(_i).hide();
		//新代码结束

	}
		++_i;
	//解决在IE下onchange事件在第一次点击的时候是执行的，但是第二次第三次事件失效bug


}
//图片上传预览    IE是用了滤镜。
function checkImage(file) {
	var MAXWIDTH = 232;
	var MAXHEIGHT = 162;
	var div = document.getElementById('preview');
	if (file.files && file.files[0]) {
		//验证文件上传的大小，类型
		var flag = fileCheck(file,500*1024);
         if(!flag){
        	 return false;
         }

		//$('<img id=imghead>').appendTo($(div));
		var img = document.getElementById('imghead');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = 232;
			img.height = 162;	
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
		var path = document.getElementById("upKmg1");
		path.select();
		//path.blur();
		 window.parent.document.body.focus();
		var realpath = document.selection.createRange().text;
        // alert(realpath);
		// $('<img id=imghead>').appendTo($(div));
		 var img = document.getElementById('imghead');
	img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
    img.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = realpath;//设置img的src为base64编码的透明图片，要不会显示红x
	img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
	//$('#imghead').attr('src',sFilter+realpath);
	//$('#imghead').css({"width":232,"height":162});
	img.style.width="232px";
	img.style.height="162px";
	}
	$('#geyk1').hide();
	//解决在IE下onchange事件在第一次点击的时候是执行的，但是第二次第三次事件失效bug
   /* $('#upKmg1').remove();
  $('<input type="file" id="upKmg1" name="file" class="ahp"  accept="image/*"  onchange="checkImage(this)"/>').insertAfter('#geyk1');*/
}

function checkImage2(file) {
	var MAXWIDTH = 232;
	var MAXHEIGHT = 162;
	// _conIndex=$('.element_main').index();
	// alert(_conIndex);
	var div = document.getElementById('getImg' + _conIndex);
	if (file.files && file.files[0]) {
		//判断上传文件大小，类型
		var flag = fileCheck(file,500*1024);
		if( !flag){
			return false;
		}
		
		/*div.innerHTML = con;*/
		$("<img id=\"formImg" + _conIndex + "\">").appendTo($(div));
		/*alert(_conIndex);*/
		var img = document.getElementById('formImg' + _conIndex);
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = 232;
			img.height = 162;
			//                 img.style.marginLeft = rect.left+'px';
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
		$("<img id=\"formImg" + _conIndex + "\">").appendTo($('#getImg' + _conIndex));
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
	$('.geyk3').eq(_conIndex).hide();
	//添加数量自增
	++_conIndex;
}

function upKimage(file) {
	var MAXWIDTH = 232;
	var MAXHEIGHT = 162;
	var div = document.getElementById('priew1');
	if (file.files && file.files[0]) {
		$('#priew1').html('<img id=img22>');
		var img = document.getElementById('img22');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = 232;
			img.height =162;
			//                 img.style.marginLeft = rect.left+'px';
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
		$('.fluent').css('border', 'none');
	} else //兼容IE
	{
		$('#priew1').html('<img id=img22>');
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		var path = document.getElementById("upKmg3");
		path.select();
		//path.blur();
		 window.parent.document.body.focus();
		var realpath3 = document.selection.createRange().text;
        // alert(realpath);
		 var img3 = document.getElementById('img22');
	img3.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
    img3.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = realpath3;//设置img的src为base64编码的透明图片，要不会显示红x
	img3.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
	//$('#imghead').attr('src',sFilter+realpath);
	//$('#imghead').css({"width":232,"height":162});
	img3.style.width="232px";
	img3.style.height="162px";
		
		
	}
	$('#origa').hide();
	
}


var _stg = 0;
var _i = 0;

function DrawImage(file) {
	if (_i > 4) {
		return false;
	}
	if (_i == 4) {
		$('.empire,.numtxrt').fadeOut("fast");
	}
	_stg = _stg + 1;
	var MAXWIDTH = 232;
	var MAXHEIGHT = 162;
	var div = document.getElementById('ckImg2');
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
	_i = _i + 1;
}
//添加小图预览
var _aLpha = 0;
var _i = 0;
//function tkImage(file) {
//var _length=$('.adverb_ul').find('li').length;
//   _i=_length;
//	_index = _index + 1;
//	var MAXWIDTH = 100;
//	var MAXHEIGHT = 49;
//	var div = document.getElementById('adverb_ul');
//	if (file.files && file.files[0]) {
//	/*	var context = div.innerHTML;
//		div.innerHTML = context +'<li><img id="imghead' + _index + '"> <a href="javascript:;" class="sement-del"><img src="../../images/esys/049.png"></a> </li>';*/
//		$('<li><img id="imghead' + _index + '"> <a href="javascript:;" class="sement-del"><img src="../../images/esys/049.png"></a> </li>').appendTo($('#adverb_ul'));
//		$('.sement-del').show();
//		var img = document.getElementById('imghead' + _index);
//		img.onload = function() {
//			var rect = clacImgZoomParam2(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
//			img.width = rect.width;
//			img.height = rect.height;
//			//                 img.style.marginLeft = rect.left+'px';
//			img.style.marginTop = 0 + 'px';
//		}
//		var reader = new FileReader();
//		reader.onload = function(evt) {
//			img.src = evt.target.result;
//		}
//		reader.readAsDataURL(file.files[0]);
//
//	} else //兼容IE
//	{
//		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
//		file.select();
//		var src = document.selection.createRange().text;
//		/* alert(src);*/
//	/*	var context = div.innerHTML;
//	div.innerHTML = context +'<li><img id="imghead' + _index + '"> <a href="javascript:;" class="sement-del"><img src="../../images/esys/049.png"></a> </li>';*/
//			$('<li><img id="imghead' + _index + '"></li>').appendTo($('#adverb_ul'));
//			
//		var img = document.getElementById('imghead' + _index);
// $(div).find('li').last().html("<div id='divhead'"+_index+" style='width:" + 100 + "px;height:" + 49 + "px;margin-top:" + 0 + "px;" + sFilter + src + "\"'></div>");
// $('<a href="javascript:;" class="sement-del"><img src="../../images/esys/049.png"></a>').appendTo($('#adverb_ul').find('li').last());
// 
//	}
//		if(_i==4){
//			$('.tkup').css('visibility','hidden');
//			return false;
//			}
//		if(_i<4){
//			/*$('.tkup').css('visibility','visible');*/
//			
//			}
//	
//	  _i=_i+1;
//}

//用户编辑保存标识
var flag_save = 0;
//选择上传文件以后，让图片显示在指定位置
function tkImage(file) {
	if(flag_save > 0){
		return false;
	}
	var _length = $('.adverb_ul').find('li').length;
	var MAXWIDTH = 100;
	var MAXHEIGHT = 49;
	//alert(_aLpha);
	if (file.files && file.files[0]) {
		var img = document.getElementById('sett' +(_aLpha-1));
		img.onload = function() {
			var rect = clacImgZoomParam2(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = 100;
			img.height = 49;
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);

	} else //兼容IE
	{
		var path = document.getElementById("id_carousel"+_aLpha);
		path.select();
		//path.blur();
		 window.parent.document.body.focus();
		var realpath4 = document.selection.createRange().text;
        alert(realpath4);
		 var img4 = document.getElementById('sett'+_aLpha);
	img4.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
    img4.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = realpath4;//设置img的src为base64编码的透明图片，要不会显示红x
	img4.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
	//$('#imghead').attr('src',sFilter+realpath);
	//$('#imghead').css({"width":232,"height":162});
	img4.style.width="100px";
	img4.style.height="49px";

   $('#id_carousel'+_aLpha).css('display','none');

	}
	//根据轮播图片的数量判断是否显示上传按钮
	if (_length >= 5) {
		$('.tkup').css('visibility', 'hidden');
	 }else{
		$('.tkup').css('visibility','visible');
	}

}




var id_carousel = 0;

function editorImg() {
	//	if($("#adverb_ul").find("li").length>=5){
	//		return false;
	//	}
	//	var src = $('.gkey:last').attr("src");
	//	if(src == ""){
	//		return false;
	//	}
		
	if ($("#adverb_ul").find("li").length >= 5) {
		return false;
	} else if ($('.gkey:last').length > 0 && $('.gkey:last').val() == "") {
		$('.gkey:last').trigger('click');
		return false;
	} else {
		$('<li><a href="javascript:;"><img name=\'\' id="sett' +_aLpha + '"><input type="file"  id="id_carousel' +id_carousel + '" name="carousel" class="getkadd gkey" accept="image/*" style="width:100px; height:38px;" onchange="tkImage(this)"></a> <a href="javascript:;" class="sement-del"><img src="images/esys/049.png"></a> </li>').appendTo($('#adverb_ul'));
		$('.sement-del').show();
		$('.gkey:last').trigger('click');
		id_carousel=id_carousel+1;
		_aLpha=_aLpha+1;
	}
	//alert("1_aLpha:"+_aLpha);
	//alert($('.gkey:last').val());
}

function clacImgZoomParam2(maxWidth, maxHeight, width, height) {
	var param = {
		top: 0,
		left: 0,
		width: width,
		height: height
	};
	if (width > maxWidth || height > maxHeight) {
		rateWidth = maxWidth;
		rateHeight = maxHeight;

		if (rateWidth > rateHeight) {
			param.width = maxWidth;
			param.height = 49;
		} else {
			param.width = 100;
			param.height = maxHeight;
		}
	}
	param.left = Math.round((maxWidth - param.width) / 2);
	param.top = Math.round((maxHeight - param.height) / 2);
	return param;
}
//编辑区
//用户编辑保存标识
var flag_save2 = 0;
function drawImage(file) {
	if(flag_save2>0){
		return;
	}
	var MAXWIDTH = 232;
	var MAXHEIGHT = 162;
	//	var div = document.getElementById('getImg0');
	var _this = $(file);
	var index = _this.parents(".encounter-xv").index();
	index = _this.parents(".encounter-xv").index() / 2;
	var index_editor = _this.parents(".encounter-xv").find(".index_editor").eq(0);
	index_editor.val(index);
	var div = $("#getImg" + index);
	//var img = _this.parents(".encounter-xv").find("img").eq(0);
	//	var name = img.attr("name");
	//alert(name)
	//alert(div.html());
	if (file.files && file.files[0]) {
		var imgid = "imgheadk" + (index + 1);
		var context = "<img id='" + imgid + "' width=232 height=162/>";
		div.html(context);
		var img = document.getElementById(imgid);
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
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
		div.innerHTML = '<img id=imgheadk>';
		var img = document.getElementById('imgheadk');
		/*	img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);*/
		$(div).html("<div id=divhead style='width:" + 232 + "px;height:" + 162 + "px;margin-top:" + 0 + "px;" + sFilter + src + "\"'></div>");
	}
}
//自营店铺
var _ogre = 0;

function putImages(file) {
	var MAXWIDTH = 232;
	var MAXHEIGHT = 162;
	// _conIndex=$('.element_main').index();
	// alert(_conIndex);
	var div = document.getElementById('putImg' + _juIndex);
	if (file.files && file.files[0]) {
		/*div.innerHTML = con;*/
		$("<img id=\"rImg" + _juIndex + "\">").appendTo($('#putImg' + _juIndex));
		/*alert(_conIndex);*/
		var img = document.getElementById('rImg' + _juIndex);
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width =232;
			img.height =162;
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
		div.innerHTML = con;
		var img = document.getElementById('rImg' + _conIndex);
		/*		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
				var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
				status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);*/

		$(div).appendTo("<div id=divhead style='width:" + 232 + "px;height:" + 162 + "px;margin-top:" + 0 + "px;" + sFilter + src + "\"'></div>");
	}
	$('.tpbox').find('.detimg').eq(_juIndex).find('.geyk5').hide();
	//$('.geyk5').hide();
	_ogre = _ogre + 1;
}

function clacImgZoomParam(maxWidth, maxHeight, width, height) {
	var param = {
		top: 0,
		left: 0,
		width: width,
		height: height
	};
	if (width > maxWidth || height > maxHeight) {
		rateWidth = maxWidth;
		rateHeight = maxHeight;

		if (rateWidth > rateHeight) {
			param.width = maxWidth;
			param.height = 162;
		} else {
			param.width = 232;
			param.height = maxHeight;
		}
	}
	param.left = Math.round((maxWidth - param.width) / 2);
	param.top = Math.round((maxHeight - param.height) / 2);
	return param;
}



//表单提交
function editorForm(name) {
	var formName = "form[name='" + name + "']";
	var action = "commodity_" + name + ".action";
	$.ajax({
		type: "post",
		async: false,
		url: action,
		data: $(formName).serialize(), // 你的formid
		error: function(request) {
			alert("Connection error");
		},
		success: function(data) {
		
		}
	});


}

//加载商品单位
function downloadCommoditycompany(){
	$.ajax({
		type:"post",
		url:"commoditycompany_findAlls.action",
		async:false,
		dataType:"json",
		success:function(data){
			var tempList = data.tempList;
			var select = $(".commoditycompany").last();
			$(".commoditycompany:last option").remove();
			var option = [];
			for(var i =0;i<tempList.length;i++){
				select.append("<option value='"+tempList[i].idNumber+"'>"+tempList[i].companyname+"</option>");
			}
		},
		error:function(){
			//alert("执行ajax失败");
		}
	});
}








