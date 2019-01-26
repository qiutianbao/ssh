var msg1 = "请输入";
var msg2 = "您的输入不符合规范";
var msg3 = "输入长度超过限制";
var msg4 = "该号码已经被注册";
var msg5 = "请输入相对应文字描述";
var smsTime="";//短信发送时间
var t=60; //倒计时
var code = "";//验证码
$(function(){
	
	//清空提示信息
	$(".cleanMsg").focus(function(){
		var _this = $(this);
		var value = _this.val();
		if(value == msg1 || value == msg2 || value == msg3 || value == msg5){
			_this.val("") ;
		}
	});
	
	//验证输入为正整数
	$(".checkNum").blur(function(){
		var reg = /^[1-9]\d*$/; 
		checkInput(this,reg);
	});
	//验证输入为小数
	$(".point").blur(function(){
		var reg = /^\d+(\.\d+)?$/;
		checkInput(this,reg);
	});
	//验证输入为非文字
	$(".numOra").keyup(function(){
	//	var reg = /^[A-Za-z0-9]+$/;
	//	var reg = /^[a-zA-Z\d]{8}\-[a-zA-Z\d]$/;
	//	var reg = /^x00-xff/;
	//	var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
	//	var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
	//	var reg = /[^\u4e00-\u9fa5]+/;
//		checkInput(this,reg);
		var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
		var _this = $(this);
		var span = _this.parents("td").find("span");
		var flag = checkNull(_this,span);
		if(flag){
			var value = _this.val().trim();
			if(reg.test(value)){
				span.text(msg2);
				span.addClass("error_input");
				return false;
			}else{
				span.text("");
				span.removeClass("error_input");
				return true;
			}
		}
	});
	$(".numOra").blur(function(){
	//	var reg = /^[A-Za-z0-9]+$/;
	//	var reg = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]/;
	//	var reg = /^x00-xff/;
	//	var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
		//	var reg = /[^\u4e00-\u9fa5]+/;
		//checkInput(this,reg);
		var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
		var _this = $(this);
		var span = _this.parents("td").find("span");
		var flag = checkNull(_this,span);
		if(flag){
			var value = _this.val().trim();
			if(reg.test(value)){
				span.text(msg2);
				span.addClass("error_input");
				return false;
			}else{
				span.text("");
				span.removeClass("error_input");
				return true;
			}
		}
		return flag;
		
	});
	//验证身份证号
	$(".checkId").blur(function(){
		var reg = /^(\d{6})(18|19|20)?(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X)?$/;
		checkInput(this,reg);
	});
	//验证手机号
	$(".phoneNum").blur(function(){
		var reg = /^1[34578]\d{9}$/;
		checkInput(this,reg);
	});
	//验证手机号是否存在
	$(".exists").blur(function(){
//		var reg = /^1[34578]\d{9}$/;
//		var flag = checkInput(this,reg);
//		if(flag){
//			checkResult(this);
//		}
	});
	
	
	//验证姓名密码
	$(".user").blur(function (){
		var _this = $(this);
		var span = _this.parents("td").find("span");
		checkNull(_this,span);
	});
	//验证下拉框选择
	$("select").change(function(){
		var _this = $(this);
		var span = _this.parents("td").find("span");
		checkNull(_this,span);
		$('.error_input').text(" ");	
	});
	
	//验证QQ号
	$(".checkQQ").blur(function(){
		var _this = $(this);
		var span = _this.parents("td").find("span");
		var reg = /^[1-9]\d*$/; 
		if(_this.val().trim() != ""){
			checkReg(_this,reg,span);
		}else{
			span.text("");
			span.removeClass("error_input");
		}
	});
	//验证品牌
	$("#voc").on('keyup',"input[name='brandName']",function(){
	     checkBrand(this);
	});
	
	//提交表单
	$(".tjbtn").click(function (){
		var flag;
		flag = checkForm();
		//校验法人手机号码
		var reg1 = /^1[34578]\d{9}$/;
		var flag2 = checkInput($(".phoneNum").get(0),reg1);
		if(!flag2){
			return false;
		}
		//校验验证码
		var _this = $("#inputcode");
		var span = _this.parents("td").find("span");
		if(_this.val() == ""){
			span.text("请输入");
			span.addClass("error_input");
			return false;
		}else if(code != _this.val()){
			span.text("验证码输入错误");
			span.addClass("error_input");
			return false;
		}else{
			span.text("");
			span.removeClass("error_input");
		}
		if(flag){
			//提交表单
			$("form[name = 'setMassage']").submit();
			$('.full_window,.setbox').show();
		}
	});
	
	//获取验证码
	$(".hqyzm").click(function(){
		//1.验证手机号是否已经存在
		var phoneinput =  $(".exists").get(0);
		var reg = /^1[34578]\d{9}$/;
		//1.1验证手机号输入格式
		var flag = checkInput(phoneinput,reg);
		if(flag){
			//1.2验证手机号是否存在
			flag = checkResult(phoneinput);
		}
		//1.3手机号码已经被注册则结束
		if(!flag){
			return false;
		}
		var phone = phoneinput.value.trim();
		//请求发送验证码
		$.ajax({
			type:"post",
			url:"sendSms_sendCode.action?phone="+phone,
			async:false,
			dataType:"json",
			success:function(data){
				var map = data.map;
				code = map.code;
				smsTime = map.smsTime;
				//按钮禁用60秒
				//$(".hqyzm").css("background","#E7DCD2");
			},
			error:function(){
				//alert("执行ajax失败");
			}
		});
		time(this);
		
	});
	
	
	//判断验证码输入是否正确
	$("#inputcode").keyup(function(){
		var _this = $(this);
		var span = _this.parents("td").find("span");
		checkCode(_this,span);
	});
	
	
	
});

//验证长度
function checkLength(obj,length){
	var _this = $(obj);
	var value = _this.val();
	if(value.length < length){
		$("#errorMsg").text("输入长度超过限制");
		$("#errorMsg").addClass("error_input");
	}
}



//非空验证
function checkNull(_this,span){
	var value = _this.val();
	if(value == "" || value == null){
		span.text(msg1);
		span.addClass("error_input");
		return false;
	}else {
		span.text("");
		span.removeClass("error_input");
		return true;
	}
}

//正则验证
function checkReg(_this,reg,span){
	var value = _this.val().trim();
	if(!reg.test(value)){
		span.text(msg2);
		span.addClass("error_input");
		return false;
	}else{
		span.text("");
		span.removeClass("error_input");
		return true;
	}
	
}

//输入规范验证
function Verify(span){
	var value = span.val();
	if(value == msg1 || value == msg2 || value == msg3 || value == msg4){
		return false;
	}else {
		span.text("");
		span.removeClass("error_input");
		return true;
	}
}

//非空正则验证,通过验证返回 true
function checkInput(obj,reg){
	var _this = $(obj);
	var span = _this.parents("td").find("span");
	var flag = checkNull(_this,span);
	if(flag){
		return checkReg(_this,reg,span);
	}
	return flag;
}

//表单所有输入框,下拉框非空正则验证
function checkForm(){
	var falseNum = 0;
	var input = $(".checkNull");
	for(var i = 0;i<input.length;i++){
		var _this = $(input[i]);
		var span = _this.parents("td").find("span");
		//验证输入是否为空
		var flag = checkNull(_this,span);
		if(flag){
			//验证输入是否符合要求
			flag = Verify(span);
			if(!flag){
				falseNum += 1;
			}
		}else{
			falseNum += 1;
		}
	}

	if(!checkSelect()){
		falseNum += 1;
	}
	//验证手机号码是否存在
	var exists = $(".exists");
	for(var i = 0 ;i < exists.length;i++){
		//验证手机号码输入是否正确
		var reg = /^1[34578]\d{9}$/;
		var bool = checkInput(exists.eq(i),reg);
		if(!bool){
			falseNum += 1;
			continue;
		}
		//验证号码是否存在
		if( !checkResult(exists.eq(i))){
			falseNum += 1;
		}
	}
	
	//统计以上验证是否通过
	if(falseNum >0 ){
		return false;
	}else{
		return true;
	}
	
}

//下拉框非空验证
function checkSelect(){
	var select = $("select[class='selectcheck']");
	var falseNum = 0;
	for(var i = 0;i<select.length;i++){
		var _this = $(select[i]);
	//	var value = _this.val();
		var span = _this.parents("td").find("span");
		if(!checkNull(_this,span)){
			falseNum += 1; 
		}
	}
	if(falseNum > 0){
		return false;
	}else{
		return true;
	}
}
//验证品牌是否为空
function checkBrand(obj){
	var _this = $(obj);
	if(_this.val().trim() == ""){
		$(".add_txt").css("display","none");
	}else{
		$(".add_txt").css("display","block");
	}
}

//验证在数据库中是否存在
function checkExists(URL,Data){
	var result = "";
	$.ajax({
		type:"post",
		async:false,
		url:URL,
		dataType:"json",
		data:Data,
		success:function(data){
			result = data;
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
/*					alert(XMLHttpRequest.status);
					alert(XMLHttpRequest.readyState);
					alert(textStatus);*/		
		}
	});
	return result;
}

function checkResult(obj){
	var value = $(obj).val();
	var url = "mgmt_checkExists.action";
	var data = {phone : value};
	var d = checkExists(url,data);
	var result = d.listCount;
	var span = $(obj).parents("td").find("span");
	if(result > 0){
		span.text(msg4);
		span.addClass("error_input");
		return false;
	}else{
		span.text("");
		span.removeClass("error_input");
		return true;
	}
	
}

//验证验证码
function checkCode(_this,span){
	//获取当前时间
	var date_now = new Date();
	if(_this.val().length >= 6){
		if(code != _this.val()){
			span.text("验证码输入错误");
			span.addClass("error_input");
			return false;
		}else{
			span.text("");
			span.removeClass("error_input");
			return true;
		}
	}
}
//验证码定时器
function time(obj){
	  if(t==0){
		  obj.removeAttribute("disabled");
		   obj.value="获取验证码";
		  t=60;
		   $('.hqyzm').css("cursor","pointer");
		   $('.hqyzm').css("background","#ffe48c");
		  }
		  else{
			 obj.setAttribute("disabled",true);
			  obj.value="重新发送("+t+")";
			  $('.hqyzm').css("cursor","default");
			  $('.hqyzm').css({"background":"#ccc","color":"#FFFFFF"});
			  t--;
			  setTimeout(function(){
				 time(obj); 
				  },1000);
			  }
	  }


