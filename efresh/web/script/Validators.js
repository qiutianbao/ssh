
	/*
	 * 附加校验方法
	 * 最大长度除去空格
	 */
	jQuery.validator.addMethod("maxlengths", function(value, element, param) {
		if(value.replace(/\s+/g,"").length > param){
			return false;
		}
		return true;
	}, " ");
	
	
	/*
	 * 附加校验方法
	 * 校验字母
	 */
	jQuery.validator.addMethod("chars", function(value, element) {
		if(value != ""){
			return (/^[A-Z]+$/.test(value.replace(/\s+/g,"")));
		}else{
			return true;
		}
	}, "请输入大写字母拼音名字/英文名  ");
	
	
	/*
	 * 附加校验方法
	 * 校验字母
	 */
	jQuery.validator.addMethod("post", function(value, element) {
		if(value != ""){
			return (/^[1-9]{1}[0-9]{5}$/.test(value));
		}else{
			return true;
		}
	}, "请输入正确的邮编  ");
	
	/*
	 * 附加校验方法
	 * 校验手机号码
	 */
	jQuery.validator.addMethod("mobile", function(value, element) {
		if(value != ""){
			return (/^1[358]\d{9}$/.test(value));
		}else{
			return true;
		}
	}, "请输入正确的手机号码  ");
	
	/*
	 * 附加校验方法
	 * 校验电话号码
	 */
	jQuery.validator.addMethod("phoneCode", function(value, element) {
		if(value != ""){
			return (/^\d{3}$/.test(value));
		}else{
			return true;
		}
	}, "请输入正确的电话区号  ");
	/*
	 * 附加校验方法
	 * 校验电话号码
	 */
	jQuery.validator.addMethod("phone", function(value, element) {
		if(value != ""){
			return (/^\d{7,9}$/.test(value));
		}else{
			return true;
		}
	}, "请输入正确的电话号码  ");
	/*
	 * 附加校验方法
	 * 格式化金额
	 */
	jQuery.validator.addMethod("amt", function(value, element) {
		element.value = parseFloat(value);
		return true;
	}, "  ");
	/*
	 * 附加校验方法
	 * 校验两个值是否相同
	 */
	jQuery.validator.addMethod("equals", function(value, element, params) {
		if(value != ""){
			if(params[1]){
				if($("#"+params[0]).val().replace(/\s+/g,"") != value.replace(/\s+/g,"")){
					return false;
				}
			}else{
				if($("#"+params[0]).val().replace(/\s+/g,"") == value.replace(/\s+/g,"")){
					return false;
				}
			}
		}
		return true;
	}, "  ");
	
	
	
	/*
	 * 附加校验方法
	 * 日期格式检查
	 */
	jQuery.validator.addMethod("chkDate", function(value, element) {
		if (value.replace(/\s+/g,"") == "")
			return true;
		if(/^\d{4}[\/-]?\d{1,2}[\/-]?\d{1,2}$/.test(value)) {
			value = value.replace("-","");
			value = value.replace("/","");
			if (value.length == 8) {
				return isValidDate( value.substr(6, 2), value.substr(4, 2), value.substr(0, 4) );
			}
		}
		return false;
	}, "请输入正确的日期  ");
	
	/*
	 * bjf
	 * 扩展身份证日期格式检查
	 */
	jQuery.validator.addMethod("idDate", function(value, element) {
		if(value=="长期有效") return true;
		if (value.replace(/\s+/g,"") == "")
			return true;
		if(/^\d{4}[\/-]?\d{1,2}[\/-]?\d{1,2}$/.test(value)) {
			value = value.replace("-","");
			value = value.replace("/","");
			if (value.length == 8) {
				return isValidDate( value.substr(6, 2), value.substr(4, 2), value.substr(0, 4) );
			}
		}
		return false;
	}, "请输入正确的日期  ");

	
	//日期合法校验
	function isValidDate(day, month, year) {
	    if (month < 1 || month > 12) {
	        return false;
	    }
	    if (day < 1 || day > 31) {
	        return false;
	    }
	    if ((month == 4 || month == 6 || month == 9 || month == 11) && (day == 31)) {
	        return false;
	    }
	    if (parseInt(year) < 1900 || parseInt(year) > 2100)
	    	return false;
	    if (month == 2) {
	        var leap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
	        if (day>29 || (day == 29 && !leap)) {
	            return false;
	        }
	    }
	    return true;
	}
	
	/*
	 * 附加校验方法
	 * checkBox是否勾选检查
	 * value 为checkbox的id
	 */
	jQuery.validator.addMethod("checkedCheckBox", function(value, element) {
		return $('table:first').czCheckbox('instance').findObjIsCheck($('#' + value));
	}, "");
