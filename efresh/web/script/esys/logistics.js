$(function() {

   //getHeight();
   //$('.login_bg').height($(document).height());

    //$('.login_bg').find('img').width($(window).width());
    //$('.login_bg').find('img').height($(document).height());
     $(window).resize(function(){
     	//alert(0)
     	$('.login_bg').find('img').height($(document).height());
     	$('.bottom_iframe').css('bottom','0px');
     })


   var _aHeight=$(document).height();
    $('.login_bg').height(_aHeight);
   $('.login_bg').find('img').height(_aHeight);
    $('.iframe').height(850);


});

/*function getHeight() {
	var h = $(document).height()
	var ih = h;
	$(".iframe").css("height", ih);
}*/
/*  function getSub(obj){
  	alert(0)
  	   var _this=$(this);
   _this.addClass('adjust').parents('li').siblings().find('a').removeClass('adjust');
     if(_this.parent('li').find('.beggar').length>0){    //判读是否存在子菜单
     	_this.parent('li').addClass('attempt').siblings().removeClass('attempt');
     	_this.parent('li').find('.beggar').show().parents('li').siblings().find('.beggar').hide();
     	_subHeight=_this.parent('li').find('.beggar').find('a').eq(0).height();
     	_subLength=_this.parent('li').find('.beggar').find('a').length;
     	_asubHeight=_subHeight*_subLength;
      alert(_subLength);
  
     }else{
     	$('.beggar').hide();
     	$('li').removeClass('attempt');
     	return  false;
     	
     }
   	//alert(_pHeight)
      $('.iframe_left').height(_pHeight);
  	
  }*/
 

// document.domain = "caibaojian.com";

