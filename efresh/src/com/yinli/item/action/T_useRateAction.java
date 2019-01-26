package com.yinli.item.action;
/*
 *
 * 创建日期: 2014-03-21
 */


import groovy.swing.factory.TableFactory;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import plantix.web.core.action.ext.DynamicGridActionSupport;

import com.donglusoft.zzz.util.Column;
import com.donglusoft.zzz.util.ExcelGeneratorImpl;
import com.opensymphony.xwork2.ActionContext;
import com.yinli.JPath;
import com.yinli.item.service.T_useRateService;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.item.vo.T_useRate;


@Controller("t_useRateAction")
@Scope("prototype")
public class T_useRateAction extends DynamicGridActionSupport {

	private String retUrl;
	public String getRetUrl() {
		return retUrl;
	}

	public void setRetUrl(String retUrl) {
		this.retUrl = retUrl;
	}



	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		
		try {
			T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt)this.getRequest().getSession().getAttribute("t_tlr_mgmt");//柜员信息
			if(!"B00001".equals(t_tlr_mgmt.getInst_no())&&!"B00002".equals(t_tlr_mgmt.getInst_no())){
				t_useRate.setIdNumber(t_tlr_mgmt.getInst_no());
			}else {
				if("-1".equals(t_useRate.getIdNumber())){
					t_useRate.setIdNumber("");
				}
			}
			Map<String, Object> map = t_useRateService.findAll(t_useRate,start, limit);
			t_useRateList = (List<T_useRate>) map.get("infoList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	


	


	
	/**
	 * 查询支行名称
	 * @return
	 */
	public String findInstByUser(){
		T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt)this.getRequest().getSession().getAttribute("t_tlr_mgmt");//柜员信息
		Map map1=t_useRateService.findInstByUser(t_tlr_mgmt.getInst_no());

		T_useRate ts=new T_useRate();
		ts.setIdNumber("-1");
		ts.setInst_name("全部");
		
		 t_useRateList = (List<T_useRate>) map1.get("infoList");
		 t_useRateList.add(0, ts);
		listCount = Integer.parseInt(map1.get("listCount").toString());
		success = true;
		return SUCCESS;
	}
	
	public void ExportExcel(){
		try {
			T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt)this.getRequest().getSession().getAttribute("t_tlr_mgmt");//柜员信息
			if(!"B00001".equals(t_tlr_mgmt.getInst_no())&&!"B00002".equals(t_tlr_mgmt.getInst_no())){
				t_useRate.setIdNumber(t_tlr_mgmt.getInst_no());
			}else {
				if("-1".equals(t_useRate.getIdNumber())){
					t_useRate.setIdNumber("");
				}
			}
			limit=999999;
			if(null!=t_useRate.getRealDay()){
				if(t_useRate.getRealDay().contains("-")){
					t_useRate.setRealDay(t_useRate.getRealDay().replaceAll("-", ""));
				}
			}
			
			Map<String, Object> map = t_useRateService.findAll(t_useRate,start, limit);
			t_useRateList = (List<T_useRate>) map.get("infoList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		
		Column column1=new Column();
		column1.setHeader("序号");
		column1.setName("xh");
		column1.setType("string");
		column1.setNeedSum(true);
		
		Column column2=new Column();
		column2.setHeader("网点编码");
		column2.setName("brno");
		column2.setType("string");
		column2.setNeedSum(true);
		
		Column column3=new Column();
		column3.setHeader("网点名称");
		column3.setName("brno_name");
		column3.setType("string");
		column3.setNeedSum(true);
		
		Column column4=new Column();
		column4.setHeader("点击次数");
		column4.setName("cn");
		column4.setType("string");
		column4.setNeedSum(true);
		
		Column column5=new Column();
		column5.setHeader("日期");
		column5.setName("realDay");
		column5.setType("string");
		column5.setNeedSum(true);
		
		Column column6=new Column();
		column6.setHeader("开始时间");
		column6.setName("startTime");
		column6.setType("string");
		column6.setNeedSum(true);
		
		Column column7=new Column();
		column7.setHeader("结束时间");
		column7.setName("endTime");
		column7.setType("string");
		column7.setNeedSum(true);
		
	
		
		Column[] columns={column1,column2,column3,column4,column5,column6,column7};
		ExcelGeneratorImpl ei=new ExcelGeneratorImpl();
		
		SimpleDateFormat simp = new SimpleDateFormat("yyyyMMdd");
		
		String sys_date =simp.format(new Date());
		long rance=System.currentTimeMillis();
		//压缩包
		String name=rance+".xls";
		JPath jpath=new JPath();
		String homePath=jpath.homePath();
		File file=new File(homePath+"/fileLoad/excel/");
		if (file.exists()) {
			file.mkdirs();
		}
		String lwhctDirectory=""+rance;
		String path=ei.generateExcel(t_useRateList,columns,lwhctDirectory);
		
		HttpServletResponse response =ServletActionContext.getResponse();
		retUrl="download.action?filelx=wdkk&zipFileName="+rance+".xls&fileName="+rance+".xls";

		try {
			response.sendRedirect(retUrl);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	

	
	/**
	 * 多条件查询
	 * @return
	 */
	public String findInfoByConditions() {
		try {
			T_tlr_mgmt t_tlr_mgmt = (T_tlr_mgmt)this.getRequest().getSession().getAttribute("t_tlr_mgmt");//柜员信息
			if(!"B00001".equals(t_tlr_mgmt.getInst_no())&&!"B00002".equals(t_tlr_mgmt.getInst_no())){
				t_useRate.setIdNumber(t_tlr_mgmt.getInst_no());
			}else {
				if("-1".equals(t_useRate.getIdNumber())){
					t_useRate.setIdNumber("");
				}
			}
			
			Map<String, Object> map = t_useRateService.findAll(t_useRate, start, limit);
			t_useRateList = (List<T_useRate>) map.get("infoList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public T_useRateService getT_useRateService() {
		return t_useRateService;
	}
	public void setT_useRateService(T_useRateService t_useRateService) {
		this.t_useRateService = t_useRateService;
	}
	public T_useRate getT_useRate() {
		return t_useRate;
	}
	public void setT_useRate(T_useRate t_useRate) {
		this.t_useRate = t_useRate;
	}
	public List<T_useRate> getT_useRateList() {
		return t_useRateList;
	}
	public void setT_useRateList(List<T_useRate> t_useRateList) {
		this.t_useRateList = t_useRateList;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public int getListCount() {
		return listCount;
	}
	public void setListCount(int listCount) {
		this.listCount = listCount;
	}
	public String getDelData() {
		return delData;
	}
	public void setDelData(String delData) {
		this.delData = delData;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public List<T_useRate> getTempList() {
		return tempList;
	}
	public void setTempList(List<T_useRate> tempList) {
		this.tempList = tempList;
	}
	
	public String getStarttime() {
		return starttime;
	}

	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public String getEndtime() {
		return endtime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	@Resource
	private T_useRateService t_useRateService;
	
	private T_useRate t_useRate;
	private List<T_useRate> t_useRateList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<T_useRate> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
