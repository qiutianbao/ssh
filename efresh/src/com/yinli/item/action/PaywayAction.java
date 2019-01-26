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

import com.yinli.item.vo.Payway;
import com.yinli.item.service.PaywayService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionSupport;


@Controller("paywayAction")
@Scope("prototype")
public class PaywayAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = paywayService.findAll( start, limit, flag);
			paywayList = (List<Payway>) map.get("infoList");
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
			tempList = new ArrayList<Payway>();
			tempList.add(paywayService.findById(payway.getIdNumber()));
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
			payway.setDr(0);
			payway.setTs(DateUtil.getTs());
			payway.setStatus(0);
			paywayService.addNewInfo(payway);
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
			payway.setDr(0);
			payway.setTs(DateUtil.getTs());
			paywayService.update(payway);
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
			paywayService.delete(delData);
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
			Map<String, Object> map = paywayService.findInfoByConditions(payway, start, limit, starttime, endtime);
			paywayList = (List<Payway>) map.get("paywayList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public PaywayService getPaywayService() {
		return paywayService;
	}
	public void setPaywayService(PaywayService paywayService) {
		this.paywayService = paywayService;
	}
	public Payway getPayway() {
		return payway;
	}
	public void setPayway(Payway payway) {
		this.payway = payway;
	}
	public List<Payway> getPaywayList() {
		return paywayList;
	}
	public void setPaywayList(List<Payway> paywayList) {
		this.paywayList = paywayList;
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
	public List<Payway> getTempList() {
		return tempList;
	}
	public void setTempList(List<Payway> tempList) {
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
	private PaywayService paywayService;
	
	private Payway payway;
	private List<Payway> paywayList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Payway> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
