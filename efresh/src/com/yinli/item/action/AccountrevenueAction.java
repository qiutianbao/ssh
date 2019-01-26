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

import com.yinli.item.vo.Accountrevenue;
import com.yinli.item.service.AccountrevenueService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("accountrevenueAction")
@Scope("prototype")
public class AccountrevenueAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = accountrevenueService.findAll( start, limit, flag);
			accountrevenueList = (List<Accountrevenue>) map.get("infoList");
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
			tempList = new ArrayList<Accountrevenue>();
			tempList.add(accountrevenueService.findById(accountrevenue.getIdNumber()));
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
			accountrevenueService.addNewInfo(accountrevenue);
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
			accountrevenueService.update(accountrevenue);
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
			accountrevenueService.delete(delData);
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
			Map<String, Object> map = accountrevenueService.findInfoByConditions(accountrevenue, start, limit, starttime, endtime);
			accountrevenueList = (List<Accountrevenue>) map.get("accountrevenueList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public AccountrevenueService getAccountrevenueService() {
		return accountrevenueService;
	}
	public void setAccountrevenueService(AccountrevenueService accountrevenueService) {
		this.accountrevenueService = accountrevenueService;
	}
	public Accountrevenue getAccountrevenue() {
		return accountrevenue;
	}
	public void setAccountrevenue(Accountrevenue accountrevenue) {
		this.accountrevenue = accountrevenue;
	}
	public List<Accountrevenue> getAccountrevenueList() {
		return accountrevenueList;
	}
	public void setAccountrevenueList(List<Accountrevenue> accountrevenueList) {
		this.accountrevenueList = accountrevenueList;
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
	public List<Accountrevenue> getTempList() {
		return tempList;
	}
	public void setTempList(List<Accountrevenue> tempList) {
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
	private AccountrevenueService accountrevenueService;
	
	private Accountrevenue accountrevenue;
	private List<Accountrevenue> accountrevenueList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Accountrevenue> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
