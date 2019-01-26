package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Integralexchange;
import com.yinli.item.service.IntegralexchangeService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("integralexchangeAction")
@Scope("prototype")
public class IntegralexchangeAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = integralexchangeService.findAll( start, limit, flag);
			integralexchangeList = (List<Integralexchange>) map.get("infoList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	

	/**
	 * 根据主键查询
	 * @return
	 */
	public String findById() {
		try {
			tempList = new ArrayList<Integralexchange>();
			tempList.add(integralexchangeService.findById(integralexchange.getIdNumber()));
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 添加
	 * @return
	 */
	public String addNewInfo( ){
		try {
			integralexchangeService.addNewInfo(integralexchange);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}

	/**
	 * 更新
	 * @return
	 */
	public String update() {
		try {
			integralexchangeService.update(integralexchange);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 删除
	 * @return
	 */
	public String delete(){
		try {
			integralexchangeService.delete(delData);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 多条件查询
	 * @return
	 */
	public String findInfoByConditions() {
		try {
			Map<String, Object> map = integralexchangeService.findInfoByConditions(integralexchange, start, limit, starttime, endtime);
			integralexchangeList = (List<Integralexchange>) map.get("integralexchangeList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public IntegralexchangeService getIntegralexchangeService() {
		return integralexchangeService;
	}
	public void setIntegralexchangeService(IntegralexchangeService integralexchangeService) {
		this.integralexchangeService = integralexchangeService;
	}
	public Integralexchange getIntegralexchange() {
		return integralexchange;
	}
	public void setIntegralexchange(Integralexchange integralexchange) {
		this.integralexchange = integralexchange;
	}
	public List<Integralexchange> getIntegralexchangeList() {
		return integralexchangeList;
	}
	public void setIntegralexchangeList(List<Integralexchange> integralexchangeList) {
		this.integralexchangeList = integralexchangeList;
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
	public List<Integralexchange> getTempList() {
		return tempList;
	}
	public void setTempList(List<Integralexchange> tempList) {
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
	private IntegralexchangeService integralexchangeService;
	
	private Integralexchange integralexchange;
	private List<Integralexchange> integralexchangeList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Integralexchange> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
