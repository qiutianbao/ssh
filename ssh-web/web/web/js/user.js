/*  User JavaScript framework
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *  User is freely distributable under the terms of an MIT-style license.
 *  For details, see the User web site: http://prototype.conio.net/
/*--------------------------------------------------------------------------*/

//note: modified & stripped down version of user, to be used with moo.fx by mad4milk (http://moofx.mad4milk.net).

/**检查添加用户和修改用户时候的信息填写是否完整。*/
function checkUser(optiondata){
	var userName = document.getElementById('userName');
	var userPwd = document.getElementById('userPwd');
	var userPwd2 = document.getElementById('userPwd2');
	var userRemark = document.getElementById('userRemark');
	
	var form1=document.getElementById('form1');

	if(optiondata!=0){
		if(userName.value!=''&&userPwd.value!= ''&&userPwd2.value != ''&&userRemark.value != ''){
			if(optiondata==1){
				//form1.action="userAction!addUser";
				form1.action="user_manager.html";	
				form1.submit();
				alert('添加成功！');
			}else{
				//form1.action="userAction!updateUser";
				form1.action="user_manager.html";
				alert('修改成功！');
				form1.submit();
			}			
		}else{
			alert('请输入完整的信息！');	
		}
	}else{
	  	userName.value="";
		userPwd.value="";
		userPwd2.value="";
		userRemark.value="";
	}	
}

/*全选*/
function checkBoxAll(){	
	var checkbox=document.getElementsByName('checkbox');
	var counts=0;
	for(var i=0;i<checkbox.length;i++){	
		if(checkbox[i].checked==true){		
			counts++;
		}
	}
	
	if(checkbox.length==counts){
		for(var i=0;i<checkbox.length;i++){			
			checkbox[i].checked=false;	
		}
	}else{
		for(var i=0;i<checkbox.length;i++){			
			checkbox[i].checked=true;	
		}
	}
}
	
/*确认删除*/
function confirmDelete(deleteData){	
	if(deleteData==0){
		var checkbox=document.getElementsByName('checkbox');
		var counts=0;
		for(var i=0;i<checkbox.length;i++){	
			if(checkbox[i].checked==true){	
				counts++;
			}		
		}	
		if(counts!=0){
			if(confirm("你确定要删除选择的用户吗？")){
				//联系删除业务
			}	
		}else{
			alert('请选择要删除的用户！');
		}
	}else{
		if(confirm("你确定要删除此用户吗？")){
			//联系删除业务
		}
	}
}
	
	
	
	
	
	
	
	
	
	
	