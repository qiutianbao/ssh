/*  User JavaScript framework
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *  User is freely distributable under the terms of an MIT-style license.
 *  For details, see the User web site: http://prototype.conio.net/
/*--------------------------------------------------------------------------*/

//note: modified & stripped down version of user, to be used with moo.fx by mad4milk (http://moofx.mad4milk.net).

/**�������û����޸��û�ʱ�����Ϣ��д�Ƿ�������*/
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
				alert('��ӳɹ���');
			}else{
				//form1.action="userAction!updateUser";
				form1.action="user_manager.html";
				alert('�޸ĳɹ���');
				form1.submit();
			}			
		}else{
			alert('��������������Ϣ��');	
		}
	}else{
	  	userName.value="";
		userPwd.value="";
		userPwd2.value="";
		userRemark.value="";
	}	
}

/*ȫѡ*/
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
	
/*ȷ��ɾ��*/
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
			if(confirm("��ȷ��Ҫɾ��ѡ����û���")){
				//��ϵɾ��ҵ��
			}	
		}else{
			alert('��ѡ��Ҫɾ�����û���');
		}
	}else{
		if(confirm("��ȷ��Ҫɾ�����û���")){
			//��ϵɾ��ҵ��
		}
	}
}
	
	
	
	
	
	
	
	
	
	
	