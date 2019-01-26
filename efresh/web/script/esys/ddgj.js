
//一级订单归集序号
var index = 1;
$(function(){
	//点击订单归集
	$(".mushroom").click(function(){
		//更改归集按钮的显示
		$(".mushroom").val("正在归集...");
		//清除归集提示信息
		$("#msg").text("");
		//定义ajax 成功执行后执行的函数
		var fn = function(data){
			var fristlevelorderList = data.fristlevelorderList;
			var estores = data.estores;
			var context = "";
			for(var i = 0;i < fristlevelorderList.length;i++){
				var begin = fristlevelorderList[i].collectionstarttime;
				begin = begin.substr(begin.indexOf(":")-2);
				var end = fristlevelorderList[i].collectionendtime.substr(11);
				end = end.substr(end.indexOf(":")-2);
				context += "<tr>"
					+ "<td>"+index+"</td>"
					+ "<td>"+fristlevelorderList[i].firstlevelorderNo+"</td>"
					+ "<td>"+estores[i].corpname+"</td>"
					+ "<td>"+begin+"-"+end+"</td>"
			//		+ "<td>"+fristlevelorderList[i].orderstatus+"</td>"
					+ "<td>"+"<button class='btn btn-sm thxred' onclick='detail(\""+fristlevelorderList[i].idNumber+"\")'>查看</button>"+"</td>";
				index++;
			}	
			$(context).appendTo($("tbody"));
			//显示归集的提示信息
			if(fristlevelorderList.length==0){
				$("#msg").text("暂时没有符合要求的订单");
			}else{
				$("#msg").text("");
			}
			//更改归集按钮的显示
			$(".mushroom").val("确认归集");
		};
		var form  = $("form[name='ddgj']");
		var action = "fristlevelorder_guiJi.action";
		//订单归集(调用工具js：jsUtils 里的方法)
		ajaxForm(form,action,fn);	
	});
	
	
});

	//一级订单详情
	function detail(id){
		window.location.href = "fristlevelorder_detail.action?fristlevelorder.idNumber="+ id;
	}

