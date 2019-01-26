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

import com.yinli.item.vo.Logistics;
import com.yinli.item.service.LogisticsService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionSupport;


@Controller("logisticsAction")
@Scope("prototype")
public class LogisticsAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = logisticsService.findAll( start, limit, flag);
			logisticsList = (List<Logistics>) map.get("infoList");
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
			tempList = new ArrayList<Logistics>();
			tempList.add(logisticsService.findById(logistics.getIdNumber()));
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
			logistics.setDr(0);
			logistics.setTs(DateUtil.getTs());
			logisticsService.addNewInfo(logistics);
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
			logistics.setTs(DateUtil.getTs());
			logisticsService.update(logistics);
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
			logisticsService.delete(delData);
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
			Map<String, Object> map = logisticsService.findInfoByConditions(logistics, start, limit, starttime, endtime);
			logisticsList = (List<Logistics>) map.get("logisticsList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public LogisticsService getLogisticsService() {
		return logisticsService;
	}
	public void setLogisticsService(LogisticsService logisticsService) {
		this.logisticsService = logisticsService;
	}
	public Logistics getLogistics() {
		return logistics;
	}
	public void setLogistics(Logistics logistics) {
		this.logistics = logistics;
	}
	public List<Logistics> getLogisticsList() {
		return logisticsList;
	}
	public void setLogisticsList(List<Logistics> logisticsList) {
		this.logisticsList = logisticsList;
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
	public List<Logistics> getTempList() {
		return tempList;
	}
	public void setTempList(List<Logistics> tempList) {
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
	private LogisticsService logisticsService;
	
	private Logistics logistics;
	private List<Logistics> logisticsList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Logistics> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
