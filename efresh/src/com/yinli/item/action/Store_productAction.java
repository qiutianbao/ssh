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

import com.yinli.item.vo.Store_product;
import com.yinli.item.service.Store_productService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("store_productAction")
@Scope("prototype")
public class Store_productAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = store_productService.findAll( start, limit, flag);
			store_productList = (List<Store_product>) map.get("infoList");
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
			tempList = new ArrayList<Store_product>();
			tempList.add(store_productService.findById(store_product.getIdNumber()));
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
			store_productService.addNewInfo(store_product);
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
			store_productService.update(store_product);
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
			store_productService.delete(delData);
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
			Map<String, Object> map = store_productService.findInfoByConditions(store_product, start, limit, starttime, endtime);
			store_productList = (List<Store_product>) map.get("store_productList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public Store_productService getStore_productService() {
		return store_productService;
	}
	public void setStore_productService(Store_productService store_productService) {
		this.store_productService = store_productService;
	}
	public Store_product getStore_product() {
		return store_product;
	}
	public void setStore_product(Store_product store_product) {
		this.store_product = store_product;
	}
	public List<Store_product> getStore_productList() {
		return store_productList;
	}
	public void setStore_productList(List<Store_product> store_productList) {
		this.store_productList = store_productList;
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
	public List<Store_product> getTempList() {
		return tempList;
	}
	public void setTempList(List<Store_product> tempList) {
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
	private Store_productService store_productService;
	
	private Store_product store_product;
	private List<Store_product> store_productList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Store_product> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
