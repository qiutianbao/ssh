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

import com.yinli.item.vo.Commoditydescribe;
import com.yinli.item.service.CommoditydescribeService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("commoditydescribeAction")
@Scope("prototype")
public class CommoditydescribeAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = commoditydescribeService.findAll( start, limit, flag);
			commoditydescribeList = (List<Commoditydescribe>) map.get("infoList");
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
			tempList = new ArrayList<Commoditydescribe>();
			tempList.add(commoditydescribeService.findById(commoditydescribe.getIdNumber()));
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
			commoditydescribeService.addNewInfo(commoditydescribe);
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
			commoditydescribeService.update(commoditydescribe);
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
			commoditydescribeService.delete(delData);
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
			Map<String, Object> map = commoditydescribeService.findInfoByConditions(commoditydescribe, start, limit, starttime, endtime);
			commoditydescribeList = (List<Commoditydescribe>) map.get("commoditydescribeList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public CommoditydescribeService getCommoditydescribeService() {
		return commoditydescribeService;
	}
	public void setCommoditydescribeService(CommoditydescribeService commoditydescribeService) {
		this.commoditydescribeService = commoditydescribeService;
	}
	public Commoditydescribe getCommoditydescribe() {
		return commoditydescribe;
	}
	public void setCommoditydescribe(Commoditydescribe commoditydescribe) {
		this.commoditydescribe = commoditydescribe;
	}
	public List<Commoditydescribe> getCommoditydescribeList() {
		return commoditydescribeList;
	}
	public void setCommoditydescribeList(List<Commoditydescribe> commoditydescribeList) {
		this.commoditydescribeList = commoditydescribeList;
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
	public List<Commoditydescribe> getTempList() {
		return tempList;
	}
	public void setTempList(List<Commoditydescribe> tempList) {
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
	private CommoditydescribeService commoditydescribeService;
	
	private Commoditydescribe commoditydescribe;
	private List<Commoditydescribe> commoditydescribeList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Commoditydescribe> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
