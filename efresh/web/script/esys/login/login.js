// JavaScript Document
/*开关按钮切换*/
$(document).ready(function(e) {
	var _switch = $('.switch-km');
	_switch.on('click', function() {
		var _this = $(this);
		if (_this.hasClass('key')) {
			_this.css('background', 'url(images/esys/skx2.png) no-repeat');
			_this.parents('.switch').find('input').removeAttr('checked');
			// alert('已经取消');
			_this.removeClass('key');
			//设置记住我状态
			$("#isremember").val("N");
		} else {
			_this.css('background', 'url(images/esys/skx.png) no-repeat');
			_this.parents('.switch').find('input').attr('checked', 'checked');
			// alert('已经选中');
			_this.addClass('key');
			//设置记住我状态
			$("#isremember").val("Y");
		}
	});

});