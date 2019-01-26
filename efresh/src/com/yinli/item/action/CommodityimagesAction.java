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

import com.yinli.item.vo.Commodityimages;
import com.yinli.item.service.CommodityimagesService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("commodityimagesAction")
@Scope("prototype")
public class CommodityimagesAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = commodityimagesService.findAll( start, limit, flag);
			commodityimagesList = (List<Commodityimages>) map.get("infoList");
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
			tempList = new ArrayList<Commodityimages>();
			tempList.add(commodityimagesService.findById(commodityimages.getIdNumber()));
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
			commodityimagesService.addNewInfo(commodityimages);
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
			commodityimagesService.update(commodityimages);
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
			commodityimagesService.delete(delData);
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
			Map<String, Object> map = commodityimagesService.findInfoByConditions(commodityimages, start, limit, starttime, endtime);
			commodityimagesList = (List<Commodityimages>) map.get("commodityimagesList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public CommodityimagesService getCommodityimagesService() {
		return commodityimagesService;
	}
	public void setCommodityimagesService(CommodityimagesService commodityimagesService) {
		this.commodityimagesService = commodityimagesService;
	}
	public Commodityimages getCommodityimages() {
		return commodityimages;
	}
	public void setCommodityimages(Commodityimages commodityimages) {
		this.commodityimages = commodityimages;
	}
	public List<Commodityimages> getCommodityimagesList() {
		return commodityimagesList;
	}
	public void setCommodityimagesList(List<Commodityimages> commodityimagesList) {
		this.commodityimagesList = commodityimagesList;
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
	public List<Commodityimages> getTempList() {
		return tempList;
	}
	public void setTempList(List<Commodityimages> tempList) {
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
	private CommodityimagesService commodityimagesService;
	
	private Commodityimages commodityimages;
	private List<Commodityimages> commodityimagesList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Commodityimages> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
