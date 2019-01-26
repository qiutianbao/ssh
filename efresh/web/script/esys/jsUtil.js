//ajax提交表单
//form : 表单对象
//action : url；
//fn : ajax 执行成功后执行的函数
function ajaxForm(form,action,fn) {
	$.ajax({
		type: "post",
		async: false,
		url: action,
		data: form.serialize(), // 要提交的form
		error: function(request) {
			alert("Connection error");
		},
		success: function(data) {
			fn.call(window, data);
		}
	});
}

//上传文件的文件类型，大小限制
function fileCheck(file,size){
	
	//判断上传的文件类型
	var filepath=file.files[0].name;
    var extStart=filepath.lastIndexOf(".");
    var ext=filepath.substring(extStart,filepath.length).toUpperCase();
    if(ext!=".BMP"&&ext!=".PNG"&&ext!=".GIF"&&ext!=".JPG"&&ext!=".JPEG"){
     alert("上传图片限于bmp,png,gif,jpeg,jpg格式");
     clearInputFile(file);
     return false;
    }
	//判断上传的图片大小
    var s = file.files[0].size;
    if(s>size){      
      alert("上传图片应不大于规定。");
      clearInputFile(file);
      return false;
   }
    return true;
	
}

//重置input file
function clearInputFile(f){  
    if(f.value){  
        try{  
            f.value = ''; //for IE11, latest Chrome/Firefox/Opera...  
        }catch(err){  
        }  
        if(f.value){ //for IE5 ~ IE10  
            var form = document.createElement('form'), ref = f.nextSibling, p = f.parentNode;  
            form.appendChild(f);  
            form.reset();  
            p.insertBefore(f,ref);  
        }  
    }  
}


