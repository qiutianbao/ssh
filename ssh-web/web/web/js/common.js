//显示隐藏层
function displayDiv(){
		if(document.getElementById("info").style.display == "none"){//显示层
		
			document.getElementById("info").style.display = "block";
		}else{//隐藏层
			document.getElementById("info").style.display = "none";
		}
}



/*全选效果*/
$(function(){
	 $(":checkbox:eq(0):not(.notCheck)").click(function(){
	 		  $(":checkbox:gt(0)").attr("checked",this.checked);
	 	});
});

/*光棒效果*/
$(function(){
	 $("tr:gt(0)").hover(function(){
	 	   $(this).toggleClass("lightBar");
	 	});
});
/*删除多条信息提示*/
$(function(){
	 $("#id_a_confirm").click(function(){
	   if($(":checked").size()==0){
	      ymPrompt.alert({message:'请选择要删除的内容！!',title:'系统提示'});
	      return false;	
	   }else{
	      if(ymPrompt.confirmInfo({message:'确定要删除这些信息吗？',title:'系统提示'})){
	          ymPrompt.alert({message:'删除成功!',title:'系统提示'});
	      }
	   }
	 });
});
/*处理确认框*/
function handler(tp){
			if(tp=='ok'){
				ymPrompt.alert({message:'删除成功!',title:'系统提示'});
			}
			if(tp=='cancel'){
				
			}
			if(tp=='close'){
				
			}
}
/*编辑*/
$(function(){
   $("#id_a_edit").click(function(){
      if($(":checked").size()==0){
	      ymPrompt.alert({message:'请选择要编辑的内容！',title:'系统提示'});
	      return false;	
	   }else if($(":checked").size()>1){
	      ymPrompt.alert({message:'只能选择一个要编辑的内容！',title:'系统提示'});
	      return false;		
	   }
   });
   /*返回前一网页*/
   $("#id_btn_back").click(function(){
			//window.location = "assetsTypeManage.html";
			window.history.go(-1);
		});
});

