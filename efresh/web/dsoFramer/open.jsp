<%@ page language="java" pageEncoding="UTF-8"%>
<html>
	<head>
		<title>My JSP 'doc.jsp' starting page</title>
		<script type="text/javascript" src="dso.js"></script>
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
		
		<script type="text/javascript"><!--
		/*用法说明：
		  1，创建 word对象
		  2，设置文件上传url
		  3，在页面加载时，打开word文档，根据是否传人docUrl参数，决定是本地新建，还是从服务器端获取
		  4，在页面关闭时，执行上传操作。
		*/
            var word = new word();
		     word.setUploadUrl("http://127.0.0.1:8888/efresh/upload.jsp");
		    
		     function load(){
		         //方法：openDoc(docName, docUrl)
		         
		         //OpenLocalFile("开口话术.doc", "http://127.0.0.1:8080/efresh/weboffice/");
		         // docName:必填，本地保存的文件名, 也为上传到服务器上时的文件名
		         // docUrl: 填时，为从服务器端获取doc文档的路径, 不填时，表示本地新建doc文档 
		         //word.openDoc('zhwm.doc');
		         var docUrl="E:/workSoft/tomcat6/Tomcat 6.0/webapps/efresh/dsoFramer/open.wps";
		 		if (typeof(docUrl) == 'undefined' || docUrl == '' || docUrl == null) {
					document.getElementById('oframe').CreateNew("Word.Document");
				}else{
					document.getElementById('oframe').Open(docUrl,true);
					document.getElementById('oframe').SetTrackRevisions(1);

				//	oframe.SetTrackRevisions(1);
				}

		         
		      //   word.openDoc('WPS.Document',docUrl);
		     }
		     function unload(){
		    	 var returnValue; 
			     document.getElementById('oframe').HttpInit();
			     java.util.Date d =new java.util.Date();  
			     Long l = d.getTime();
			  //   document.getElementById('oframe').Delete("E:/workSoft/tomcat6/Tomcat 6.0/webapps/efresh/dsoFramer/open.wps");
			     			     
		    	 document.getElementById('oframe').Save("E:/workSoft/tomcat6/Tomcat 6.0/webapps/efresh/dsoFramer/"+l.toString()+"_open.wps");
		    	 document.getElementById('oframe').close();

		     }
		</script>			
	</head>

	<body onload="load();">
	<input  type="button" value="保存文件到服务器" onclick="unload()" >
       <object classid="clsid:00460182-9E5E-11d5-B7C8-B8269041DD57" codebase ="dsoframer.ocx" id="oframe" width="100%" height="100%">
         <param name="BorderStyle" value="1">
         <param name="TitlebarColor" value="52479">
         <param name="TitlebarTextColor" value="0">  
         <param name="Caption" value="欢迎使用！">
       </object>
	</body>	
</html>
