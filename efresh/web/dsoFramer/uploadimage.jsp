<%@ page contentType="text/html;charset=gb2312" language="java" import="java.io.*,java.awt.Image,java.awt.image.*,com.sun.image.codec.jpeg.*,java.sql.*,com.jspsmart.upload.*,java.util.*"%>

<%

SmartUpload mySmartUpload =new SmartUpload();

long file_size_max=4000000;

String fileName2="",ext="",testvar="";

String url="upload/"; //应保证在根目录中有此目录的存在（也就是说需要自己建立相应的文件夹）

//初始化

mySmartUpload.initialize(pageContext);

//只允许上载此类文件

try {

mySmartUpload.setAllowedFilesList("jpg,gif");//此处的文件格式可以根据需要自己修改

//上载文件

mySmartUpload.upload();

} catch (Exception e){

%>



<%

}

try{

com.jspsmart.upload.File myFile = mySmartUpload.getFiles().getFile(0);

if (myFile.isMissing()){%>



<%}

else{

//String myFileName=myFile.getFileName(); //取得上载的文件的文件名

ext= myFile.getFileExt(); //取得后缀名

int file_size=myFile.getSize(); //取得文件的大小

String saveurl="";

if(file_size<file_size_max){

//更改文件名，取得当前上传时间的毫秒数值

Calendar calendar = Calendar.getInstance();

String filename = String.valueOf(calendar.getTimeInMillis());

saveurl=application.getRealPath("/")+url;

saveurl+=filename+"."+ext; //保存路径

myFile.saveAs(saveurl,SmartUpload.SAVE_PHYSICAL);

out.print(saveurl);

String ret = "parent.HtmlEdit.focus();";

ret += "var range = parent.HtmlEdit.document.selection.createRange();" ;

ret += "range.pasteHTML('');" ;

ret += "alert('上传成功！');";

ret += "window.location='upload.htm';";

out.print("");

}

}

}catch (Exception e){

out.print(e.toString());

}

%>