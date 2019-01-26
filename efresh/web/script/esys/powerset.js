// JavaScript Document
$(document).ready(function (e) {
    var _checkCh = $('.default-ch');
    var _checkAll = $('.default-all');
    _checkCh.on('click', function () {
        var _this = $(this);
        if (_this.hasClass('github')) {
            //_this.css('background-position', '0 0');
            _this.removeClass('github');
			_this.next().next('input').removeProp('checked');
        } else {
            //_this.css('background-position', '0 -20px');
            var _gValue = _this.next().next('.ch-box').val();
            _this.addClass('github');
			//必须使用prop,如果使用attr将会无效
			_this.next().next('input').prop('checked',true);
        }
    });
    _checkAll.on('click', function () {
        var _this = $(this);
        var _result = '';
        if (_this.hasClass('basis')) {
            //_this.css('background-position', '0 0');
            //_this.parents('.getbix').next('.getbix-white').find('.default-ch').css('background-position', '0 0');
            _this.parents('.getbix').next('.getbix-white').find('.default-ch').removeClass('github');
			_this.parents('.getbix').next('.getbix-white').find('.default-ch').next().next('input').removeAttr('checked');
            _this.removeClass('basis');
			_this.removeClass('github');
			_this.next().next('input').removeProp('checked');
        } else {
            _this.addClass('github');
			_this.next().next('input').prop('checked','checked');
            _this.parents('.getbix').next('.getbix-white').find('.ch-box').each(function (index, element) {
                var _this = $(this);
				if(_this.hasClass('github')){
					_this.removeClass('github');
					_this.next().next('input').removeProp('checked');
					}
					else{
					_this.addClass('github');	
					_this.next().next('input').prop('checked','checked');
						}
                _result = _result + _this.val();
            });
            _this.parents('.getbix').next('.getbix-white').find('.default-ch').addClass('github');
			_this.parents('.getbix').next('.getbix-white').find('.default-ch').next().next('input').prop('checked','checked');
			_this.addClass('github');
            //_this.parents('.getbix').next('.getbix-white').find('.default-ch').css('background-position', '0 -20px');
            _this.addClass('basis');
        }
 
    });
 
 
});