$(function(){
 	$('#id_button_detail').click(function(){
 		    $('#id_div_my').toggle();
 		});
	$('#id_button_detail2').click(function(){
 		    $('#id_div_my2').toggle();
 		});
	});
 
 
 function changeImg_01(){
	var button=document.getElementById("id_button_detail");
	 
	if(button.style.background=="url(../../images/button_ck_02.gif) no-repeat 0 0;" ){
		button.style.background="url(../../images/button_ck_01.gif) no-repeat 0 0;" ;
	}else{
		button.style.background="url(../../images/button_ck_01.gif) no-repeat 0 0;" ;
	}
}
	var  highlightcolor='#c9e5f7';
//此处clickcolor只能用win系统颜色代码才能成功,如果用#xxxxxx的代码就不行,还没搞清楚为什么:(
var  clickcolor='#c9e5f7';
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
}// JavaScript Document