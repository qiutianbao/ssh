


$(function(){
	
	//加载二级分类
	$.ajax({
		type:"post",
		url:"category_findSecond.action",
		async:false,
		dataType:"json",
		success:function(data){
			var tempList = data.tempList;
			var select = $("#secondType");
			$("#secondType option").remove();
			var option = [];
			for(var i =0;i<tempList.length;i++){
				select.append("<option value='"+tempList[i][0]+"'>"+tempList[i][1]+"</option>");
			}
		},
		error:function(){
			//alert("执行ajax失败");
		}
	});
	

	
	//加载品牌
	$.ajax({
		type:"post",
		url:"storebrand_findbrand.action",
		async:false,
		dataType:"json",
		success:function(data){
			var tempList = data.tempList;
			var select = $("#brand");
			$("#brand option").remove();
			var option = [];
			for(var i =0;i<tempList.length;i++){
				select.append("<option value='"+tempList[i].idNumber+"'>"+tempList[i].brandname+"</option>");
			}
		},
		error:function(){
			//alert("执行ajax失败");
		}
	});
	
	//获取焦点，清空内容
	$(".chn-main").on('click','.emperor_txt',function(){
		var _this = $(this);
		cleaninput(_this);
	});
	//获取焦点，清空内容
	$(".notnull").click(function (){
		var _this = $(this);
		cleaninput(_this);
	});
		
		
	//验证输入是否为数字或者小数
	$(".chn-main").on('blur','.emperor_txtT',function(){
		var reg = /^\d+(\.\d+)?$/;
		 if(!reg.test(this.value)){  
        	this.value ="请输入非负数字";
        	$('.emperor_txtT').css('color','red');
    	 }
		 else{
			$('.emperor_txtT').css('color','#545454'); 
			 }  
	});	
	
	//验证价格日历的输入，显示价格日历添加按钮
	$(".chn-main").on('blur','.murder_txt',function(){
		//alert($(this).parents(".muddy").index());
		var _this = $(this);
		var flag = true;
		for(var i = 0;i<_this.length;i++){		
			if(_this.eq(i).val() == "" || _this.eq(i).val() =="请输入" || _this.eq(i).val() =="请选择日期" || _this.eq(i).val() == "请输入售价" || _this.eq(i).val() == "请输入非负数字"){
				flag = false;
				break;		
			}
		
		}
		
		if(!flag){
			
			$(".absorb-over").eq($(this).parents(".muddy").index()).hide();
		}else{
			//alert($(this).parents(".muddy").index());
			$(".absorb-over").eq($(this).parents(".muddy").index()).show();
		}
		
	});
	
	//验证属性输入，显示属性新增按钮
	/*$(".mug").on("blur",".add",function(){
		var property = 
		
	})*/
	
	
	$(".murder").on('click','.notnull',function(){
		var _this = $(this);
		cleaninput(_this);
	});
	
	$('.chn-main').on('click','.notnull',function(){
		var _this = $(this);
		cleaninput(_this);
		
	});
	
	
	//隐藏日历添加按钮
	//$(".absorb-over").hide();
	

	
	
	
	

});

	//验证非空输入
	function check_null(){
		var v = $(".notnull");
		var flag = true;
		for(var i =0;i<v.length;i++){
			var one = v.eq(i);
			if(one.val() == "" || one.val() == "请输入"){
				one.val("请输入");
				one.css('color','red');
				v.parents('.mosquito').eq(i).css({"color":"#323232","border":"1px #999999 solid"});
				flag = false;
				break;
			}else if(one.val() == "请输入非负数字"){
				one.val("请输入非负数字");
				flag = false;
				break;
			}else if(one.val() == "请选择日期"){
				one.val("请选择日期");
				flag = false;
				break;
			}else if(one.val() == "请输入售价"){
				one.val("请输入售价");
				flag = false;
				break;
			}
			
			
		}
		return flag;
	}
	
	//条件表单
	function takeform(){
		if(check_null()){
			$('.full_window,.setbox').show();
			$("#form1").submit();
		}
		
	}
	
	//文本框获取焦点清空
	function cleaninput(_this){
		if("请输入非负数字" == _this.val() || "请输入售价" == _this.val() || "请输入" == _this.val()){
			_this.val("");
		}
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
				var select = $("#commoditycompany");
				$("#commoditycompany option").remove();
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

