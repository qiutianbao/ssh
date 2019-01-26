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

import com.yinli.item.vo.Tradingrecords;
import com.yinli.item.service.TradingrecordsService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("tradingrecordsAction")
@Scope("prototype")
public class TradingrecordsAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = tradingrecordsService.findAll( start, limit, flag);
			tradingrecordsList = (List<Tradingrecords>) map.get("infoList");
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
			tempList = new ArrayList<Tradingrecords>();
			tempList.add(tradingrecordsService.findById(tradingrecords.getIdNumber()));
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
			tradingrecordsService.addNewInfo(tradingrecords);
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
			tradingrecordsService.update(tradingrecords);
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
			tradingrecordsService.delete(delData);
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
			Map<String, Object> map = tradingrecordsService.findInfoByConditions(tradingrecords, start, limit, starttime, endtime);
			tradingrecordsList = (List<Tradingrecords>) map.get("tradingrecordsList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public TradingrecordsService getTradingrecordsService() {
		return tradingrecordsService;
	}
	public void setTradingrecordsService(TradingrecordsService tradingrecordsService) {
		this.tradingrecordsService = tradingrecordsService;
	}
	public Tradingrecords getTradingrecords() {
		return tradingrecords;
	}
	public void setTradingrecords(Tradingrecords tradingrecords) {
		this.tradingrecords = tradingrecords;
	}
	public List<Tradingrecords> getTradingrecordsList() {
		return tradingrecordsList;
	}
	public void setTradingrecordsList(List<Tradingrecords> tradingrecordsList) {
		this.tradingrecordsList = tradingrecordsList;
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
	public List<Tradingrecords> getTempList() {
		return tempList;
	}
	public void setTempList(List<Tradingrecords> tempList) {
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
	private TradingrecordsService tradingrecordsService;
	
	private Tradingrecords tradingrecords;
	private List<Tradingrecords> tradingrecordsList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Tradingrecords> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
