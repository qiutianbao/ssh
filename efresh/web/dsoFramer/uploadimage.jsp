<%@ page contentType="text/html;charset=gb2312" language="java" import="java.io.*,java.awt.Image,java.awt.image.*,com.sun.image.codec.jpeg.*,java.sql.*,com.jspsmart.upload.*,java.util.*"%>

<%

SmartUpload mySmartUpload =new SmartUpload();

long file_size_max=4000000;

String fileName2="",ext="",testvar="";

String url="upload/"; //Ӧ��֤�ڸ�Ŀ¼���д�Ŀ¼�Ĵ��ڣ�Ҳ����˵��Ҫ�Լ�������Ӧ���ļ��У�

//��ʼ��

mySmartUpload.initialize(pageContext);

//ֻ�������ش����ļ�

try {

mySmartUpload.setAllowedFilesList("jpg,gif");//�˴����ļ���ʽ���Ը�����Ҫ�Լ��޸�

//�����ļ�

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

//String myFileName=myFile.getFileName(); //ȡ�����ص��ļ����ļ���

ext= myFile.getFileExt(); //ȡ�ú�׺��

int file_size=myFile.getSize(); //ȡ���ļ��Ĵ�С

String saveurl="";

if(file_size<file_size_max){

//�����ļ�����ȡ�õ�ǰ�ϴ�ʱ��ĺ�����ֵ

Calendar calendar = Calendar.getInstance();

String filename = String.valueOf(calendar.getTimeInMillis());

saveurl=application.getRealPath("/")+url;

saveurl+=filename+"."+ext; //����·��

myFile.saveAs(saveurl,SmartUpload.SAVE_PHYSICAL);

out.print(saveurl);

String ret = "parent.HtmlEdit.focus();";

ret += "var range = parent.HtmlEdit.document.selection.createRange();" ;

ret += "range.pasteHTML('');" ;

ret += "alert('�ϴ��ɹ���');";

ret += "window.location='upload.htm';";

out.print("");

}

}

}catch (Exception e){

out.print(e.toString());

}

%>