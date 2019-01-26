$(function() {
	//编写一个方法，可以从url 中获取参数
	$.getUrlParam = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null)
			return unescape(r[2]);
		return null;
	};
	//从url中获取参数id
	var id = $.getUrlParam("estore.idNumber");
	var parameter = {"estore.idNumber":id};
//	var parameter = {};
	var action = "estore_findById.action";
	//根据id查找店铺，获取店铺对象
	var d = findEstoreById(action,parameter);
	var estore = d.tempList[0];
	var name = estore.corpname;
	//获取店铺名称并显示
	$("input[name='corpname']").eq(0).val(name);
	//
	$("input[name='estore.idNumber']").eq(0).val(id);
});


function findEstoreById(action,parameter){
	var result = "";
		$.ajax({
		type: "post",
		url: action,
		data: parameter, // 你的formid
		async: false,
		error: function(request) {
			alert("Connection error");
		},
		success: function(data) {
			result = data;
		}
	});
	return result;
}