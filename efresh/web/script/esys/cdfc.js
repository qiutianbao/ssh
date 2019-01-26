
//产品图片修改的id
var index_product = "";
//添加的商品数量
var index_add = 0;
$(function(){
	//点击保存的时候提交表单
	$("#sub").click(function(){
		var store_styleId = $("input[name='store_style.idNumber']").eq(0).val();
		//根据 store_styleId 的值判断是新增还是修改
		if(store_styleId == ""){
			add();
		}else{
			editor();
		}
		
	});
	
	//点击图片的时候记录图片的id
	$(".tpbox").on("change","input[name='product']",function(){
		var index = $(this).parents(".canbv").find("img").attr("name");
		var flag = index_product.indexOf(index);
		if(flag<0){
			index_product = index +" " + index_product;
		}
	});
	
	//点击添加新商品
	$('.fhouse').on('click', function(){
		//添加的商品数量+1
		index_add += 1;
	});
});

//新增产地风采
function add(){
	$("#form1").submit();
}


//编辑产地风采
function editor(){
	//记录更改过的产地图片id ,deleteImgId 是在 add.js中定义的全局变量
	$("input[name='deleteId']").eq(0).val(deleteImgId);
	//记录更改过的产品图片id
	$("input[name='editor_productImg']").eq(0).val(index_product);
	var add = $("input[name='index_add']").eq(0).val();
	add = parseInt(add);
	$("input[name='index_add']").eq(0).val((index_add+add));
	$("#form1").submit();
}






