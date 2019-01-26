package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-23
 */


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Bindbankcard;
import com.yinli.item.service.BindbankcardService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("bindbankcardAction")
@Scope("prototype")
public class BindbankcardAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = bindbankcardService.findAll( start, limit, flag);
			bindbankcardList = (List<Bindbankcard>) map.get("infoList");
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
			tempList = new ArrayList<Bindbankcard>();
			tempList.add(bindbankcardService.findById(bindbankcard.getIdNumber()));
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
			bindbankcardService.addNewInfo(bindbankcard);
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
			bindbankcardService.update(bindbankcard);
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
			bindbankcardService.delete(delData);
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
			Map<String, Object> map = bindbankcardService.findInfoByConditions(bindbankcard, start, limit, starttime, endtime);
			bindbankcardList = (List<Bindbankcard>) map.get("bindbankcardList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public BindbankcardService getBindbankcardService() {
		return bindbankcardService;
	}
	public void setBindbankcardService(BindbankcardService bindbankcardService) {
		this.bindbankcardService = bindbankcardService;
	}
	public Bindbankcard getBindbankcard() {
		return bindbankcard;
	}
	public void setBindbankcard(Bindbankcard bindbankcard) {
		this.bindbankcard = bindbankcard;
	}
	public List<Bindbankcard> getBindbankcardList() {
		return bindbankcardList;
	}
	public void setBindbankcardList(List<Bindbankcard> bindbankcardList) {
		this.bindbankcardList = bindbankcardList;
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
	public List<Bindbankcard> getTempList() {
		return tempList;
	}
	public void setTempList(List<Bindbankcard> tempList) {
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
	private BindbankcardService bindbankcardService;
	
	private Bindbankcard bindbankcard;
	private List<Bindbankcard> bindbankcardList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Bindbankcard> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
