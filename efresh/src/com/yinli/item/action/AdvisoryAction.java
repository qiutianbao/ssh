package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Advisory;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.item.service.AdvisoryService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;


@Controller("advisoryAction")
@Scope("prototype")
public class AdvisoryAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = advisoryService.findAll( start, limit,starttime, endtime);
			advisoryList = (List<Advisory>) map.get("infoList");
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
			tempList = new ArrayList<Advisory>();
			tempList.add(advisoryService.findById(advisory.getIdNumber()));
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
			advisory.setTs(DateUtil.getTs());
			advisoryService.addNewInfo(advisory);
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
			Map session = ActionContext.getContext().getSession();
			T_tlr_mgmt mgmt = (T_tlr_mgmt) session.get("t_tlr_mgmt");
			advisory.setIdReply(Integer.valueOf(mgmt.getIdNumber()));
			advisory.setReplytime(new Date());
			advisory.setTs(DateUtil.getTs());
			advisoryService.update(advisory);
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
			advisoryService.delete(delData);
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
			Map<String, Object> map = advisoryService.findInfoByConditions(advisory, start, limit, starttime, endtime);
			advisoryList = (List<Advisory>) map.get("advisoryList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public AdvisoryService getAdvisoryService() {
		return advisoryService;
	}
	public void setAdvisoryService(AdvisoryService advisoryService) {
		this.advisoryService = advisoryService;
	}
	public Advisory getAdvisory() {
		return advisory;
	}
	public void setAdvisory(Advisory advisory) {
		this.advisory = advisory;
	}
	public List<Advisory> getAdvisoryList() {
		return advisoryList;
	}
	public void setAdvisoryList(List<Advisory> advisoryList) {
		this.advisoryList = advisoryList;
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
	public List<Advisory> getTempList() {
		return tempList;
	}
	public void setTempList(List<Advisory> tempList) {
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
	private AdvisoryService advisoryService;
	
	private Advisory advisory;
	private List<Advisory> advisoryList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Advisory> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
