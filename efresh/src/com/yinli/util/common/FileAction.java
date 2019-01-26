package com.yinli.util.common;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.action.CarouselAction;
import com.yinli.item.service.CarouselService;
import com.yinli.item.vo.Carousel;
  
/** 
 * FileAction.java Create on 2008-12-18 上午09:16:22 
 *  
 * 说明:文件处理 
 *  
 * Copyright (c) 2008 by 唐明. 
 *  
 * @author 唐明
 * @version 1.0
 * @SuppressWarnings("serial")   
 */  

@Controller("uploadFilesAction")
@Scope("prototype")
public class FileAction extends BaseAction {  
    private Map<String, Object> infos = new HashMap<String, Object>();  
  
    public static final String ROOT = "images\\";  
  
    private File myUpload;  
  
    private String myUploadContentType;  
  
    private String myUploadFileName;  
  
    private String path; 
    
    private String fileNo;
  


	private boolean success;  
  
    /** 
     * 上传文件 
     *  
     * @return 
     */  
    public String uploadFiles() {  
        String rootPath = getSession().getServletContext().getRealPath("/");  
        rootPath += "../"+ROOT; 
   // 	String rootPath = getRequest().getServletContext().getRealPath("/").subSequence(0,(getRequest().getServletContext().getRealPath("/").length()-7))+"../images";
    	System.out.println("filepath===="+fileNo+"----rootPath---"+rootPath);
        String sp = rootPath + getPath();  
        MyUtils.mkDirectory(sp);  
        try {  
           String newFileName= MyUtils.upload(getMyUploadFileName(), sp, getMyUpload());  
            //插入数据库
            Carousel carousel =new Carousel();
            carousel.setTs(DateUtil.getTs());
			carousel.setDr(0);
			System.out.println("myUploadFileName---"+myUploadFileName);
			
			if(fileNo.contains(myUploadFileName)){
				String str=fileNo.substring(fileNo.indexOf(myUploadFileName));
				if(str.contains(":")){
					String fileAndNo[]=str.split(":");
					try{
						String sseq=fileAndNo[1];
						sseq=sseq.substring(0,sseq.indexOf(","));
						Integer seq=Integer.parseInt(sseq);
						carousel.setSerialnumber(seq);
					}catch(Exception e){
						carousel.setSerialnumber(1);
					}
				}
			}else{
				carousel.setSerialnumber(1);
			}
			carousel.setImagename(newFileName);
            carouselService.addNewInfo(carousel);
            this.success = true;  
        } catch (RuntimeException e) {  
            e.printStackTrace();  
        } catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}  
        return SUCCESS;  
    }  
  
    public File getMyUpload() {  
        return myUpload;  
    }  
  
    public void setMyUpload(File myUpload) {  
        this.myUpload = myUpload;  
    }  
  
    public String getMyUploadContentType() {  
        return myUploadContentType;  
    }  
  
    public void setMyUploadContentType(String myUploadContentType) {  
        this.myUploadContentType = myUploadContentType;  
    }  
  
    public String getMyUploadFileName() {  
        return myUploadFileName;  
    }  
  
    public void setMyUploadFileName(String myUploadFileName) {  
        this.myUploadFileName = myUploadFileName;  
    }  
  
    public boolean isSuccess() {  
        return success;  
    }  
  
    public void setSuccess(boolean success) {  
        this.success = success;  
    }  
  
    public String getPath() {  
        return path;  
    }  
  
    public void setPath(String path) throws UnsupportedEncodingException {  
        this.path = URLDecoder.decode(path, "UTF-8");  
    }  
  
    public Map<String, Object> getInfos() {  
        return infos;  
    }  
  
    public void setInfos(Map<String, Object> infos) {  
        this.infos = infos;  
    }  
    public String getFileNo() {
    	return fileNo;
    }

    public void setFileNo(String fileNo) throws UnsupportedEncodingException{
//    	this.fileNo = fileNo;
    	this.fileNo = URLDecoder.decode(fileNo, "UTF-8");
    }
    
    @Resource
	private CarouselService carouselService;
}  
