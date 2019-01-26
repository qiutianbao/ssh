package com.yinli;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

public class JPath
{
  public String homePath()
  {
    String strClassName = super.getClass().getName();
    String strPackageName = " ";
    if (super.getClass().getPackage() != null)
      strPackageName = super.getClass().getPackage().getName();
    String strClassFileName = " ";
    if (!(" ".equals(strPackageName)))
      strClassFileName = strClassName.substring(strPackageName.length() + 1, strClassName.length());
    else
      strClassFileName = strClassName;
    URL url = super.getClass().getResource(strClassFileName + ".class");
    String absolutePath = url.getPath();
    String urlRoot = "";
    int pos = absolutePath.indexOf("WEB-INF");
    if (pos != -1)
      urlRoot = absolutePath.substring(0, pos);
    else
      urlRoot = absolutePath.substring(0, 3);
    urlRoot = urlRoot.replaceAll("%20", " ");
    if ((urlRoot.substring(urlRoot.length() - 1, urlRoot.length()).equals(System.getProperty("file.separator"))) || 
      (urlRoot.substring(urlRoot.length() - 1, urlRoot.length()).equals("/"))) {
      urlRoot = urlRoot.substring(0, urlRoot.length() - 1);
    }
    if ((urlRoot.substring(1, urlRoot.length()).equals(System.getProperty("file.separator"))) || 
      (urlRoot.substring(1, urlRoot.length()).equals("/"))) {
      urlRoot = urlRoot.substring(1, urlRoot.length());
    }
    if (urlRoot.indexOf("/") == 0)
      urlRoot = urlRoot.substring(1, urlRoot.length());
    return urlRoot;
  }
  
  public String japhPath()
  {

	return  "E:\\nonghangIpad\\20131230\\efresh\\WebContent";
  }
  
  public String getCurrentPath(){   
      //取得根目录路径   
/*      String rootPath=getClass().getResource("/").getFile().toString();   
      //<A class=baidu-highlight href="https://www.baidu.com/s?wd=%E5%BD%93%E5%89%8D%E7%9B%AE%E5%BD%95&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YYnWu9uHnkuHNBPWKhPHmY0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EnHRLn1T4rjTknjDYrHTsn1fvn0" target=_blank>当前目录</A>路径   
      String currentPath1=getClass().getResource(".").getFile().toString();   
      String currentPath2=getClass().getResource("").getFile().toString();   
      //<A class=baidu-highlight href="https://www.baidu.com/s?wd=%E5%BD%93%E5%89%8D%E7%9B%AE%E5%BD%95&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YYnWu9uHnkuHNBPWKhPHmY0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EnHRLn1T4rjTknjDYrHTsn1fvn0" target=_blank>当前目录</A>的上级目录路径   
      String parentPath=getClass().getResource("../").getFile().toString();   
       */   
	  //"E:\\Workspaces\\efresh\\WebContent";
      return "E:\\Workspaces\\efresh\\WebContent";          
   
  }  

  /*
   * 
   */
	public  String proFile(String cont)
	throws Exception {
		Properties props = new Properties();

		JPath jpath = new JPath();
		String homepath = homePath();
		Date date=new Date();
		SimpleDateFormat curr_sdf=new SimpleDateFormat("yyyyMMdd");
		String currDate=curr_sdf.format(date);
		//homepath = homepath.substring(1);//window版本
		String path1 = homepath + "/WEB-INF/proFiles/"
		+ currDate;
		System.out.println("gen------------->"+homepath);
		String properPath = "";
		File dirFile = new File(path1);
		if (!dirFile.exists()) {
			if (!dirFile.mkdirs()) {
				throw new Exception("目录不存在，创建失败！");
			}
		}
		SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMddHHmmss.sss");
		String str=sdf.format(date);
		Integer inte=(int)Math.random()*1000;
		String fileName = str +inte.toString()+".txt";
		File file=new File(path1+"/"+fileName);
		try {
			file.createNewFile();
		} catch (IOException e) {
			e.printStackTrace();
		}

		String finish=fileName;
		try {
			FileOutputStream fos= new FileOutputStream(file);
			String bgn = "上主机获取文件开始执行\r\n";
//			fos.write(bgn.getBytes());
			fos.write(cont.getBytes());
//			TalkClient.Upload(path1+"/"+fileName);
/*			String cmd1= "/bin/sh "+"/opt/IBM/gjjfinshDate.sh " +currDate +" "+homepath+"/WEB-INF/pages/appreport/reportData/bcpin/"+currDate;
			System.out.println("--------------->"+homepath+"/WEB-INF/pages/appreport/reportData/bcpin/"+currDate);
			//	 String cmd1="/bin/sh "+ homepath + "/WEB-INF/classes/gjjfinshDate.sh " +currDate +" "+homepath+"/WEB-INF/pages/appreport/reportData/bcpin/"+currDate;
			java.lang.Runtime.getRuntime().exec(cmd1);
			properPath = path1 + "/" + "finish_" + currDate + ".txt";
			InputStream input = new FileInputStream(properPath);
			props.load(input);
			// finish="1";
			finish = props.getProperty("flag").toString().trim();
			input.close();*/
		} catch (FileNotFoundException e) {

			e.printStackTrace();
		}
		return finish;
	}
}