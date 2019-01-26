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
		
		<script type="text/javascript">
		/*用法说明：
		  1，创建 word对象
		  2，设置文件上传url
		  3，在页面加载时，打开word文档，根据是否传人docUrl参数，决定是本地新建，还是从服务器端获取
		  4，在页面关闭时，执行上传操作。
		*/
            var word = new word();
		     word.setUploadUrl("http://127.0.0.1:8080/efresh/upload.jsp");
		    
		     function load(){
		         //方法：openDoc(docName, docUrl)
		         
		         //OpenLocalFile("开口话术.doc", "http://127.0.0.1:8080/efresh/weboffice/");
		         // docName:必填，本地保存的文件名, 也为上传到服务器上时的文件名
		         // docUrl: 填时，为从服务器端获取doc文档的路径, 不填时，表示本地新建doc文档 
		         //word.openDoc('zhwm.doc');
		         var docUrl="http://127.0.0.1:8080/efresh/dsoFramer/tuibao.doc";
		 		if (typeof(docUrl) == 'undefined' || docUrl == '' || docUrl == null) {
					document.getElementById('oframe').CreateNew("Word.Document");
				}else{
					document.getElementById('oframe').Open(docUrl,false);
					document.getElementById('oframe').SetTrackRevisions(0);
				//	oframe.SetTrackRevisions(1);
				}


		         
		      //   word.openDoc('开口话术.doc','http://127.0.0.1:8080/efresh/weboffice/开口话术.doc');
		     }
		     function unload(){
		         word.saveDoc();
		         word.close();
		     }
		</script>			
	</head>

	<body onload="load();">
       <object classid="clsid:00460182-9E5E-11d5-B7C8-B8269041DD57" codebase ="dsoframer.ocx" id="oframe" width="100%" height="100%">
         <param name="BorderStyle" value="1">
         <param name="TitlebarColor" value="52479">
         <param name="TitlebarTextColor" value="0">  
       </object>
	</body>	
</html>
