	$(function(){
 	$('#id_button_detail').click(function(){
 		    $('#id_div_my').toggle();
 		});
 		
 	$("#id_a_del").click(function(){
	   if($(":checked").size()==0){
	      ymPrompt.alert({message:'请选择要删除的内容！',title:'系统提示'});
	      return false;	
	   }else{
	      if(!ymPrompt.confirmInfo({message:'确定要删除这些信息吗？',title:'系统提示'})){
	          ymPrompt.succeedInfo({message:'删除成功!',title:'系统提示'});
	      }else{
	      		alert('123');
	      	}
	   }
	 });
	 
	 $("#id_a_edit").click(function(){
      if($(":checked").size()==0){
	      ymPrompt.alert({message:'请选择要编辑的内容！',title:'系统提示'});
	      return false;	
	   }else if($(":checked").size()>1){
	      ymPrompt.alert({message:'只能选择一个要编辑的内容！',title:'系统提示'});
	      return false;		
	   }
   });
})

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



/*
光棒效果
*/
$(function() {
            // 选择
            $("#TABLE1 tr:gt(#TABLE1 tr:first)").hover(function() {
                $(this).addClass("STYLE6");},
				function(){
				$(this).removeClass("STYLE6");	
				
            });
            
        });

$(function() {
            // 选择
            $("#TABLE2 tr:gt(#TABLE2 tr:first)").hover(function() {
                $(this).addClass("STYLE6");},
				function(){
				$(this).removeClass("STYLE6");	
				
            });
            
        });

function f_selectAll() {
	var checkbox_all = document.getElementById("checkbox_all");
	var checkboxIDs = document.getElementsByName("checkbox_list");
		for ( var i = 0; i < checkboxIDs.length; i++) {
			checkboxIDs[i].checked = checkbox_all.checked;
		}
}

function f_selectAll2() {
	var checkbox_all = document.getElementById("checkbox_all2");
	var checkboxIDs = document.getElementsByName("checkbox_list2");
		for ( var i = 0; i < checkboxIDs.length; i++) {
			checkboxIDs[i].checked = checkbox_all2.checked;
		}
}

/*
var  highlightcolor='#c1ebff';
//此处clickcolor只能用win系统颜色代码才能成功,如果用#xxxxxx的代码就不行,还没搞清楚为什么:(
var  clickcolor='#51b2f6';
function  changeto(){
source=event.srcElement;
if  (source.tagName=="TR"||source.tagName=="TABLE")
return;
while(source.tagName!="TD")
source=source.parentElement;
source=source.parentElement;
cs  =  source.children;

//alert(cs.length);
if  (cs[1].style.backgroundColor!=highlightcolor&&source.id!="nc"&&cs[1].style.backgroundColor!=clickcolor)
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor=highlightcolor;
}
}

function  changeback(){
if  (event.fromElement.contains(event.toElement)||source.contains(event.toElement)||source.id=="nc")
return
if  (event.toElement!=source&&cs[1].style.backgroundColor!=clickcolor)
//source.style.backgroundColor=originalcolor
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor="";
}
}

function  clickto(){
source=event.srcElement;
if  (source.tagName=="TR"||source.tagName=="TABLE")
return;
while(source.tagName!="TD")
source=source.parentElement;
source=source.parentElement;
cs  =  source.children;
//alert(cs.length);
if  (cs[1].style.backgroundColor!=clickcolor&&source.id!="nc")
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor=clickcolor;
}
else
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor="";
}
}
*/
function f_changeImg(){
	var button=document.getElementById("id_button_detail");
	if(button.style.background=="url(../images/button_gj_2.gif) no-repeat 0px 0px"){
		button.style.background="url(../images/button_gj_1.gif) no-repeat 0px 0px";
	}else{
		button.style.background="url(../images/button_gj_2.gif) no-repeat 0px 0px";
	}
}

function shenqing(){
		window.location = "archives_product_attestation.html";
		alert("申请换区成功！");
	}
	
function pipei(){
		window.location = "archives_product_attestation.html";
		alert("匹配信息成功！");
	}
	
function xinjian(){
		window.location = "addInput.html";
	}

function showGaoji(){
	var gaojiDiv = document.getElementById("id_div_my");
	var gaojiButton = document.getElementById("gaojiButton");
	if(gaojiDiv.style.display == "none"){
		gaojiDiv.style.display = "";
		gaojiButton.value="隐藏高级";
	}else{
		gaojiDiv.style.display = "none";
		gaojiButton.value="显示高级";
	}
}