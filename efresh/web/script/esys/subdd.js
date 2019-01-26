var flag = 0;//下单标识(完成 = 1，未下单=0)
$(function(){
	//立即下单
	$("#brakebtn").click(function(){
		//判断是否已经下单
		if(flag==1){
			return false;
		}
		var form = $("#form1");
		$("#brakebtn").text("正在下单...");
		$.ajax({
			type: "post",
			async: false,
			url: "fristlevelorder_updateFirstStatus.action",
			data: form.serialize(), // 要提交的form
			error: function(request) {
				alert("Connection error");
			},
			success: function(data) {
				var result = data.result;
				//设置下单按钮状态
				$("#brakebtn").text("已下单");
				$("#brakebtn").css("cursor", "default");
				//设置下单标识
				flag = 1;
			}
		});	
	});
	
	//确认订单
	$(".sendOrder").click(function (){
		var _this = $(this);
		var value = _this.text();
		//禁止重复提交
		if(value != "确认订单"){
			return false;
		}
		//一级订单id
		var idNumber = $("input[name='fristlevelorder.idNumber']").eq(0).val();
		$.ajax({
			type: "post",
			async: false,
			url: "fristlevelorder_sendOrder.action?fristlevelorder.idNumber="+idNumber,
			//data: form.serialize(), // 要提交的form
			error: function(request) {
				alert("Connection error");
			},
			success: function(data) {
				var flag = data.flag;
				if(flag = "success"){
					//更改接受订单为已接受
					_this.text("已接受");
					$(".status").val("已接受");
					$(".cancelOrder").remove();
				}
			}
		});	
		
	});
	
	//拒绝订单
	$(".cancelOrder").click(function(){
		var _this = $(this);
		var value = $(this).text();
		//禁止重复取消
		if(value != "拒绝订单"){
			return false;
		}
		//一级订单id
		var idNumber = $("input[name='fristlevelorder.idNumber']").eq(0).val();
		$.ajax({
			type: "post",
			async: false,
			url: "fristlevelorder_updateFirstStatus2.action?fristlevelorder.orderstatus=3&fristlevelorder.idNumber="+idNumber,
			error: function(request) {
				alert("Connection error");
			},
			success: function(data) {
				var flag = data.flag;
				if(flag = "success"){
					//更改接受订单为已接受
					_this.text("已拒单");
					$(".sendOrder").remove();
					$(".status").val("已拒单");
				}
			}
		});	
		
	});
	
	
	
});