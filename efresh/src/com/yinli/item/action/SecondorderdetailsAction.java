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

import com.yinli.item.vo.Secondorderdetails;
import com.yinli.item.service.SecondorderdetailsService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("secondorderdetailsAction")
@Scope("prototype")
public class SecondorderdetailsAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = secondorderdetailsService.findAll( start, limit, flag);
			secondorderdetailsList = (List<Secondorderdetails>) map.get("infoList");
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
			tempList = new ArrayList<Secondorderdetails>();
			tempList.add(secondorderdetailsService.findById(secondorderdetails.getIdNumber()));
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
			secondorderdetailsService.addNewInfo(secondorderdetails);
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
			secondorderdetailsService.update(secondorderdetails);
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
			secondorderdetailsService.delete(delData);
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
			Map<String, Object> map = secondorderdetailsService.findInfoByConditions(secondorderdetails, start, limit, starttime, endtime);
			secondorderdetailsList = (List<Secondorderdetails>) map.get("secondorderdetailsList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public SecondorderdetailsService getSecondorderdetailsService() {
		return secondorderdetailsService;
	}
	public void setSecondorderdetailsService(SecondorderdetailsService secondorderdetailsService) {
		this.secondorderdetailsService = secondorderdetailsService;
	}
	public Secondorderdetails getSecondorderdetails() {
		return secondorderdetails;
	}
	public void setSecondorderdetails(Secondorderdetails secondorderdetails) {
		this.secondorderdetails = secondorderdetails;
	}
	public List<Secondorderdetails> getSecondorderdetailsList() {
		return secondorderdetailsList;
	}
	public void setSecondorderdetailsList(List<Secondorderdetails> secondorderdetailsList) {
		this.secondorderdetailsList = secondorderdetailsList;
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
	public List<Secondorderdetails> getTempList() {
		return tempList;
	}
	public void setTempList(List<Secondorderdetails> tempList) {
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
	private SecondorderdetailsService secondorderdetailsService;
	
	private Secondorderdetails secondorderdetails;
	private List<Secondorderdetails> secondorderdetailsList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Secondorderdetails> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
