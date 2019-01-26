<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="com.jspsmart.upload.*"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
SmartUpload su = new SmartUpload();
su.initialize(pageContext);     
su.setMaxFileSize(2000000);     
su.setTotalMaxFileSize(20000000);    
su.setAllowedFilesList("doc");    
su.upload();
for (int i=0;i<su.getFiles().getCount();i++)    {        
	com.jspsmart.upload.File file = su.getFiles().getFile(i);        
	if (file.isMissing()) continue;        
	java.util.Date d =new java.util.Date();        
	Long l = d.getTime(); 
	System.out.println("path----eew-----"+file.getFileExt()+"/upload");
	System.out.print("url=="+request.getContextPath()+"/userimg/" +l.toString()+ "."+file.getFileExt());        
	System.out.println("path-fdsfdsafdsa-"+basePath+"/upload");
	file.saveAs("E:/workSoft/tomcat6/Tomcat 6.0/webapps/efresh/dsoFramerupload/123.doc");
	
}
System.out.println("path---------"+basePath+"/upload");

%>