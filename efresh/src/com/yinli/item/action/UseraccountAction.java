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

import com.yinli.item.vo.Useraccount;
import com.yinli.item.service.UseraccountService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("useraccountAction")
@Scope("prototype")
public class UseraccountAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = useraccountService.findAll( start, limit, flag);
			useraccountList = (List<Useraccount>) map.get("infoList");
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
			tempList = new ArrayList<Useraccount>();
			tempList.add(useraccountService.findById(useraccount.getIdNumber()));
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
			useraccountService.addNewInfo(useraccount);
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
			useraccountService.update(useraccount);
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
			useraccountService.delete(delData);
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
			Map<String, Object> map = useraccountService.findInfoByConditions(useraccount, start, limit, starttime, endtime);
			useraccountList = (List<Useraccount>) map.get("useraccountList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public UseraccountService getUseraccountService() {
		return useraccountService;
	}
	public void setUseraccountService(UseraccountService useraccountService) {
		this.useraccountService = useraccountService;
	}
	public Useraccount getUseraccount() {
		return useraccount;
	}
	public void setUseraccount(Useraccount useraccount) {
		this.useraccount = useraccount;
	}
	public List<Useraccount> getUseraccountList() {
		return useraccountList;
	}
	public void setUseraccountList(List<Useraccount> useraccountList) {
		this.useraccountList = useraccountList;
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
	public List<Useraccount> getTempList() {
		return tempList;
	}
	public void setTempList(List<Useraccount> tempList) {
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
	private UseraccountService useraccountService;
	
	private Useraccount useraccount;
	private List<Useraccount> useraccountList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Useraccount> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
