package com.yinli.util.common;

import java.io.File;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;


/**
 * 文件上传工具类
 * 创建日期: 2016-01-22
 *
 */
public class FileUploadUtil {
	
	
	/**
	 * 多文件上传
	 * @param File[] image    上传的文件
	 * @param String[] imageFileName  文件名称
	 * @param path 	图片存放地址
	 * @throws Exception
	 */
	 public static void fileUpload(File[] image,String[] imageFileName,String path) throws Exception {
	     
		 HttpServletRequest request = ServletActionContext.getRequest();
		 request.setCharacterEncoding("UTF-8");
		//获取服务器路径
//		 String path1 = request.getServletContext().getRealPath("/").subSequence(0,(request.getServletContext().getRealPath("/").length()-7))+"";
//	     System.out.println(path1);  
	     //重新编组文件保存路径
	     path = "../" + path;
		 String realpath = ServletActionContext.getServletContext().getRealPath(path);
	        if (image != null) {
	            File savedir=new File(realpath);
	            if(!savedir.getParentFile().exists()){
	                savedir.getParentFile().mkdirs();
	            }
	            for(int i=0;i<image.length;i++){
	            	String type = imageFileName[i].substring(imageFileName[i].lastIndexOf("."));
	            	imageFileName[i] =  java.util.UUID.randomUUID().toString() + type;
	                File savefile = new File(savedir, imageFileName[i]);
	                FileUtils.copyFile(image[i], savefile);
	                System.out.println("图片存放路径："+path);
	            }
	        }  
	    }
	 
	 /**
	  * 文件删除
	  * @param path 文件路径
	  */
	 public static void deletePhoto(String path){
		 File file = new File(path);
		 if(! file.isDirectory() ){
			 file.delete();
		 }
	 }
	 
}
