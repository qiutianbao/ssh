package com.yinli.item.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import plantix.web.core.action.ext.DynamicGridActionSupport;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.JPath;


public class DownFileLoadAction extends ActionSupport{
	
	
//	private static String localPath = AppUtil.getPropertiesInfo(0, "sbfilepath","hysb.properties");
//	private final static String DOWNLOADFILEPATH=localPath+"hysb/lwhc/20130629/";
	private String zipFileName;
	private String flag;
	private String filelx;
	private String fileName;
	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFilelx() {
		return filelx;
	}

	public void setFilelx(String filelx) {
		this.filelx = filelx;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getZipFileName() {
		return zipFileName;
	}

	public void setZipFileName(String zipFileName) {
		this.zipFileName = zipFileName;
	}

	public InputStream getInputStream() throws FileNotFoundException {
/*		String path = fileName.substring(0,fileName.indexOf("_"));
		String sys_date = fileName.substring(fileName.indexOf("_")+1,fileName.lastIndexOf("."));
		System.out.println(sys_date);
		String new_filename = fileName.substring(fileName.indexOf("_")+1,fileName.length());
		*/
		HttpServletRequest request=ServletActionContext.getRequest();
		JPath jpath=new JPath();
		String homePath=jpath.homePath();
		String lwhctDirectory ="";
		SimpleDateFormat simp = new SimpleDateFormat("yyyyMMdd");
		String sysdate=(String) request.getAttribute("sys_date");
		String sys_date ="";
		if(null==sysdate||"".equals(sysdate)){
			sys_date=simp.format(new Date());
		}else{
			sys_date=sysdate;
		}
		 
		if("lwhc".equals(flag)){//生成联网核查文件
			lwhctDirectory=homePath+"/fileLoad/lwhc/"+sys_date+"/";
		}else if("kkhp".equals(flag)){//开卡回盘路劲
			lwhctDirectory = homePath+"/fileLoad/kkhp/"+sys_date+"/";// 获得路径
		}else if("wdkk".equals(flag)){//网点开卡信息查询存放路径          excel格式
			lwhctDirectory = homePath+"/fileLoad/excel/";// 获得路径
		}else if("ykk".equals(flag)){//剔除证件信息不符之后，生成预开卡文件
			lwhctDirectory = homePath+"/fileLoad/kkfile/"+sys_date+"/";// 获得路径
		}else if("zjxmhc".equals(flag)){//"deleteDate"剔除联网核查后生成证件信息、证件号码文件
			lwhctDirectory = homePath+"/fileLoad/zjxmhc/"+sys_date+"/";// 获得路径
		}
		 
		
		
		
		InputStream in= new FileInputStream(new File(lwhctDirectory+zipFileName));
		return in;
	}
	
	public String execute(){
		//HttpServletResponse response=ServletActionContext.getResponse();
		HttpServletRequest request=ServletActionContext.getRequest();
		String fileNm=(String) request.getAttribute("zipFileName");
//		String doFlag=(String) request.getAttribute("doFlag");
		String filelx=(String) request.getAttribute("filelx");
		zipFileName=fileNm;
		flag=filelx;
		return "fileWodn";
	}
}
