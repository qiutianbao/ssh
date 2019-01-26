
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
		<title>My JSP 'doc.jsp' starting page</title>
		<script type="text/javascript" src="<%=basePath%>dsoFramer/dso.js"></script>
		<script language="JScript" for="TANGER_OCX" event="OnSignSelect(issign,signinfo)">
	if(issign)
	{
		document.all("signmes").innerHTML = signinfo;		
		if(signinfo.indexOf("用户:XXX") == -1)
		{
			TANGER_OCX.SetReadOnly(true,"",0);
			TANGER_OCX.SetReadOnly(false,"",0);
		}
	}
	else
	{
		document.all("signmes").innerHTML = "不是签名印章";
	}
</script>
		
		<script type="text/javascript">
	///	var word;
		//web office
		var word = function() {
			var ss="11";
			
			alert(321312);
			var localDir="c:/temp/"; // 本地保存的临时目录
			var docName;// 本地保存的文件名, 也为上传到服务器上时的文件名
			var docUrl; // 远程文件 e.g. http://128.96.172.238:9080/aaa/upload/aaa.doc
			var uploadUrl; //上传到服务器的url
			var fso;
			{
				fso = new ActiveXObject("Scripting.FileSystemObject");
				if (!fso.FolderExists(localDir)) {
					fso.CreateFolder(localDir);
				}
			}
			this.openDoc = function(docName, docUrl) {
				this.docName = docName;
				alert(123);
				
				this.docUrl = docUrl;
				if (typeof(docUrl) == 'undefined' || docUrl == '' || docUrl == null) {
					document.getElementById('oframe').CreateNew("Word.Document");
				}else{
					alert(docUrl);
					document.getElementById('oframe').Open(docUrl,true);
					document.getElementById('oframe').SetTrackRevisions(1);
				}
				document.getElementById('oframe').Save(localDir+docName, true);
			};
			this.setUploadUrl = function(uploadUrl){
				this.uploadUrl = uploadUrl;
			};
			this.saveDoc = function(){
				alert(this.docName);
				document.getElementById('oframe').HttpInit();
				document.getElementById('oframe').HttpAddPostCurrFile("file1", this.docName); 
				document.getElementById('oframe').HttpPost(this.uploadUrl);
			};
			this.close = function(){
				document.getElementById('oframe').close();
				try{
					fso.DeleteFile(localDir + this.docName);
				}catch(err){}
			};
		};
		var docUrl="E:/workSoft/tomcat6/Tomcat 6.0/webapps/efresh/dsoFramer/11.doc";
		  //   word.setUploadUrl("http://127.0.0.1:8888/efresh/upload.jsp");
		    var localDir="c:/temp/";
		     function load(){
		 	//	var fso = new ActiveXObject("Scripting.FileSystemObject");
			//	if (!fso.FolderExists(localDir)) {
			//		fso.CreateFolder(localDir);
			//	}
		    	// alert(word.localDir);
		       ///  word.openDoc("open.wps", "http://127.0.0.1:8888/efresh/dsoFramer/");
		     
		         //OpenLocalFile("开口话术.doc", "http://127.0.0.1:8080/efresh/weboffice/");
		         // docName:必填，本地保存的文件名, 也为上传到服务器上时的文件名
		         // docUrl: 填时，为从服务器端获取doc文档的路径, 不填时，表示本地新建doc文档 
		         //word.openDoc('zhwm.doc');
		         var docUrl="E:/workSoft/tomcat6/Tomcat 6.0/webapps/efresh/dsoFramer/11.doc";
		 		if (typeof(docUrl) == 'undefined' || docUrl == '' || docUrl == null) {
					document.getElementById('oframe').CreateNew("Word.Document");
				}else{
				//	document.all.FramerControl1.HttpInit();
				document.getElementById('oframe').Open(docUrl,true);
					document.getElementById('oframe').SetTrackRevisions(1);
					document.getElementById('oframe').SetCurrTime("2006:02:07 11:11:11");
				//	document.all.FramerControl1.SetTrackRevisions(1);
			//		document.all.FramerControl1.SetTrackRevisions(4);
				//	oframe.SetTrackRevisions(1);
				}


		         
		    //     word.openDoc("开口话术.doc","http://127.0.0.1:8080/efresh/weboffice");
		     }
		     function unload(){
		         word.saveDoc();
		         word.close();
		     }
		     //保存文件到服务器上
		     function uploadFile(){
			     var docUrl="http://127.0.0.1:8888/efresh/12.doc";

			     var docUrl11="E:/workSoft/tomcat6/Tomcat 6.0/webapps/efresh/dsoFramer/22.doc";
											
				document.getElementById('oframe').Save(docUrl11);
				//	document.getElementById('oframe').close();
		     }
		</script>			
	</head>

	<body onload="load();">
	<input  type="button" value="保存文件到本地" onclick="unload()" >
		<input  type="button" value="保存文件到服务器" onclick="uploadFile()" >
       <object classid="clsid:00460182-9E5E-11d5-B7C8-B8269041DD57" codebase ="dsoframer.ocx" id="oframe" width="100%" height="100%">
         <param name="BorderStyle" value="1">
         <param name="TitlebarColor" value="52479">
         <param name="TitlebarTextColor" value="0">  
         <param name="SignCursorType" value="1">
         
         <param name="IsSaveDocExtention" value="true"> 
         
         <param name="Caption" value="欢迎使用！">
       </object>

	</body>	
</html>
