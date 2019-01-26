package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-28
 */


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Integraltotal;
import com.yinli.item.service.IntegraltotalService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionSupport;


@Controller("integraltotalAction")
@Scope("prototype")
public class IntegraltotalAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = integraltotalService.findAll( start, limit, flag);
			integraltotalList = (List<Integraltotal>) map.get("infoList");
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
			tempList = new ArrayList<Integraltotal>();
			tempList.add(integraltotalService.findById(integraltotal.getIdNumber()));
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
			integraltotal.setDr(0);
			integraltotal.setTs(DateUtil.getTs());
			integraltotalService.addNewInfo(integraltotal);
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
			integraltotal.setTs(DateUtil.getTs());
			integraltotalService.update(integraltotal);
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
			integraltotalService.delete(delData);
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
			Map<String, Object> map = integraltotalService.findInfoByConditions(integraltotal, start, limit, starttime, endtime);
			integraltotalList = (List<Integraltotal>) map.get("integraltotalList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public IntegraltotalService getIntegraltotalService() {
		return integraltotalService;
	}
	public void setIntegraltotalService(IntegraltotalService integraltotalService) {
		this.integraltotalService = integraltotalService;
	}
	public Integraltotal getIntegraltotal() {
		return integraltotal;
	}
	public void setIntegraltotal(Integraltotal integraltotal) {
		this.integraltotal = integraltotal;
	}
	public List<Integraltotal> getIntegraltotalList() {
		return integraltotalList;
	}
	public void setIntegraltotalList(List<Integraltotal> integraltotalList) {
		this.integraltotalList = integraltotalList;
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
	public List<Integraltotal> getTempList() {
		return tempList;
	}
	public void setTempList(List<Integraltotal> tempList) {
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
	private IntegraltotalService integraltotalService;
	
	private Integraltotal integraltotal;
	private List<Integraltotal> integraltotalList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Integraltotal> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
