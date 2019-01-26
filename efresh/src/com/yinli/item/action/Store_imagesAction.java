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

import com.yinli.item.vo.Store_images;
import com.yinli.item.service.Store_imagesService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("store_imagesAction")
@Scope("prototype")
public class Store_imagesAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = store_imagesService.findAll( start, limit, flag);
			store_imagesList = (List<Store_images>) map.get("infoList");
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
			tempList = new ArrayList<Store_images>();
			tempList.add(store_imagesService.findById(store_images.getIdNumber()));
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
			store_imagesService.addNewInfo(store_images);
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
			store_imagesService.update(store_images);
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
			store_imagesService.delete(delData);
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
			Map<String, Object> map = store_imagesService.findInfoByConditions(store_images, start, limit, starttime, endtime);
			store_imagesList = (List<Store_images>) map.get("store_imagesList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public Store_imagesService getStore_imagesService() {
		return store_imagesService;
	}
	public void setStore_imagesService(Store_imagesService store_imagesService) {
		this.store_imagesService = store_imagesService;
	}
	public Store_images getStore_images() {
		return store_images;
	}
	public void setStore_images(Store_images store_images) {
		this.store_images = store_images;
	}
	public List<Store_images> getStore_imagesList() {
		return store_imagesList;
	}
	public void setStore_imagesList(List<Store_images> store_imagesList) {
		this.store_imagesList = store_imagesList;
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
	public List<Store_images> getTempList() {
		return tempList;
	}
	public void setTempList(List<Store_images> tempList) {
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
	private Store_imagesService store_imagesService;
	
	private Store_images store_images;
	private List<Store_images> store_imagesList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Store_images> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
