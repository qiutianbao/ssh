<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String id = "1";
%>
<html>
	<head>
		<title>调查报告</title>
		<script language="javascript" src="dsoframer.js"></script>
		<script type="text/javascript">
			/*用法说明：
			  1，创建 word对象
			  2，设置文件上传url
			  3，在页面加载时，打开word文档，根据是否传人docUrl参数，决定是本地新建，还是从服务器端获取
			  4，在页面关闭时，执行上传操作。
			*/
             var word = new word();
             //决定路径
		     word.setUploadUrl("http://127.0.0.1:8888/efresh/dsoFramer/upload_handle.jsp");
		     
		     var docurl = "http://127.0.0.1:8888/efresh/dsoFramer/upload/1.doc";
		     function load(){
		         //方法：openDoc(docName, docUrl)
		         // docName:必填，本地保存的文件名, 也为上传到服务器上时的文件名
		         // docUrl: 填时，为从服务器端获取doc文档的路径, 不填时，表示本地新建doc文档 
		         alert(1231);
		         word.openDoc('1.doc',"http://127.0.0.1:8888/efresh/dsoFramer/upload/1.doc");
		         

		         
		     }

	



		     
		     //
		     function unload(){
		         word.saveDoc();
		         word.close();
		     }
		     
		     function setFileVal(){
		     	document.getElementById('oframe').SetFieldValue("dm","2006-03-16 22:22:22","");
		     }
		      
		     //保存文件到服务器上
		     function uploadFile(){
			     alert(222);
		     	word.saveDocAndParm('1',docurl);
		     }
		</script>
	</head>
	<body onload="load();" onunload="unload();">  
	   <input  type="button" value="保存文件到服务器" onclick="uploadFile()" >
	   <hr/>
       <!-- 
       <object classid="clsid:00460182-9E5E-11d5-B7C8-B8269041DD57" codebase="dsoframer.ocx" id="oframe" width="100%" height="100%">
         <param name="BorderStyle" value="1">
         <param name="TitlebarColor" value="52479">
         <param name="TitlebarTextColor" value="0">  
       </object>
      -->
      <object classid="clsid:00460182-9E5E-11d5-B7C8-B8269041DD57" codebase="dsoframer.CAB#Version=2.0.0.0" id="oframe" width="100%" height="100%">
	         <param name="BorderStyle" value="1">
	         <param name="TitlebarColor" value="52479">
	         <param name="TitlebarTextColor" value="0">
       </object> 
	</body>
</html>