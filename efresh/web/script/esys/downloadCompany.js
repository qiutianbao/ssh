$(function(){
	

	//加载商品单位(2016/4/8添加)
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
});