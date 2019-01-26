package com.yinli.item.action;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import plantix.core.spring.suport.factory.BeanFactoryUtils;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.component.Downloadable;
@Controller("excelDownloadAction")
@Scope("prototype")
public class ExcelDownloadAction extends ActionSupport{

	private static final long serialVersionUID = 1L;

	/** 资源类别名 */
	private String resourceName ;
	
	/** 资源ID */
	private String id ;
	
	/**
	 * 下载
	 */
	public void downResource(){
		
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setHeader("Content-Type","application/force-download");
		response.setHeader("Content-Type","application/vnd.ms-excel");
		response.setHeader("Content-Disposition","attachment;filename=export.xls");
		
		try {
			OutputStream os = response.getOutputStream();

			dataWrite(os);
			
			os.flush();
			
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InvalidFormatException e) {
			// Excel模板文件版本不对
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	/**
	 * 根据资源名构造输入流
	 * @return
	 * @throws IOException 
	 * @throws InvalidFormatException 
	 */
	private void dataWrite(OutputStream os) throws Exception{

		// 获取spring组件
		
		Object bean = BeanFactoryUtils.getBean(resourceName + "ExcelDownComponent");
		if(bean != null && bean instanceof Downloadable){
			
			((Downloadable) bean).download(os, id);
			
		}// ELSE 下载空文件
		
	}
	
	public String getResourceName() {
		return resourceName;
	}
	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
}
