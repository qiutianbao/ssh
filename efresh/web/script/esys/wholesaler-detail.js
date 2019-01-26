$(function(){
	
	//更改店铺运营状态
	$("#stop").click(function(){
		var form = $("#statusform");
		var action = "estore_updateStatus.action";
		fn = function(data){
			var flag = data.flag;
			if(flag == "N"){
				$("#stop").text("停运");
				$("input[name='estore.isStop']").eq(0).val("Y");
			}else if(flag == "Y"){
				$("#stop").text("开通运营");
				$("input[name='estore.isStop']").eq(0).val("N");
			}
		};
		$("#stop").text("正在执行操作...");
		ajaxForm(form,action,fn);
	});
	
	
});