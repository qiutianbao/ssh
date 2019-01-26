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

import com.yinli.item.vo.Integralrule;
import com.yinli.item.service.IntegralruleService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("integralruleAction")
@Scope("prototype")
public class IntegralruleAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = integralruleService.findAll( start, limit, flag);
			integralruleList = (List<Integralrule>) map.get("infoList");
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
			tempList = new ArrayList<Integralrule>();
			tempList.add(integralruleService.findById(integralrule.getIdNumber()));
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
			integralruleService.addNewInfo(integralrule);
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
			integralruleService.update(integralrule);
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
			integralruleService.delete(delData);
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
			Map<String, Object> map = integralruleService.findInfoByConditions(integralrule, start, limit, starttime, endtime);
			integralruleList = (List<Integralrule>) map.get("integralruleList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public IntegralruleService getIntegralruleService() {
		return integralruleService;
	}
	public void setIntegralruleService(IntegralruleService integralruleService) {
		this.integralruleService = integralruleService;
	}
	public Integralrule getIntegralrule() {
		return integralrule;
	}
	public void setIntegralrule(Integralrule integralrule) {
		this.integralrule = integralrule;
	}
	public List<Integralrule> getIntegralruleList() {
		return integralruleList;
	}
	public void setIntegralruleList(List<Integralrule> integralruleList) {
		this.integralruleList = integralruleList;
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
	public List<Integralrule> getTempList() {
		return tempList;
	}
	public void setTempList(List<Integralrule> tempList) {
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
	private IntegralruleService integralruleService;
	
	private Integralrule integralrule;
	private List<Integralrule> integralruleList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Integralrule> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
