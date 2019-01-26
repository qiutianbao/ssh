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

import com.yinli.item.vo.Commodityprice;
import com.yinli.item.service.CommoditypriceService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("commoditypriceAction")
@Scope("prototype")
public class CommoditypriceAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = commoditypriceService.findAll( start, limit, flag);
			commoditypriceList = (List<Commodityprice>) map.get("infoList");
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
			tempList = new ArrayList<Commodityprice>();
			tempList.add(commoditypriceService.findById(commodityprice.getIdNumber()));
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
			commoditypriceService.addNewInfo(commodityprice);
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
			commoditypriceService.update(commodityprice);
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
			commoditypriceService.delete(delData);
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
			Map<String, Object> map = commoditypriceService.findInfoByConditions(commodityprice, start, limit, starttime, endtime);
			commoditypriceList = (List<Commodityprice>) map.get("commoditypriceList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public CommoditypriceService getCommoditypriceService() {
		return commoditypriceService;
	}
	public void setCommoditypriceService(CommoditypriceService commoditypriceService) {
		this.commoditypriceService = commoditypriceService;
	}
	public Commodityprice getCommodityprice() {
		return commodityprice;
	}
	public void setCommodityprice(Commodityprice commodityprice) {
		this.commodityprice = commodityprice;
	}
	public List<Commodityprice> getCommoditypriceList() {
		return commoditypriceList;
	}
	public void setCommoditypriceList(List<Commodityprice> commoditypriceList) {
		this.commoditypriceList = commoditypriceList;
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
	public List<Commodityprice> getTempList() {
		return tempList;
	}
	public void setTempList(List<Commodityprice> tempList) {
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
	private CommoditypriceService commoditypriceService;
	
	private Commodityprice commodityprice;
	private List<Commodityprice> commoditypriceList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Commodityprice> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
