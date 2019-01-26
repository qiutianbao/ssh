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

import com.yinli.item.vo.Orderdetailed;
import com.yinli.item.service.OrderdetailedService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("orderdetailedAction")
@Scope("prototype")
public class OrderdetailedAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = orderdetailedService.findAll( start, limit, flag);
			orderdetailedList = (List<Orderdetailed>) map.get("infoList");
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
			tempList = new ArrayList<Orderdetailed>();
			tempList.add(orderdetailedService.findById(orderdetailed.getIdNumber()));
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
			orderdetailedService.addNewInfo(orderdetailed);
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
			orderdetailedService.update(orderdetailed);
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
			orderdetailedService.delete(delData);
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
			Map<String, Object> map = orderdetailedService.findInfoByConditions(orderdetailed, start, limit, starttime, endtime);
			orderdetailedList = (List<Orderdetailed>) map.get("orderdetailedList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public OrderdetailedService getOrderdetailedService() {
		return orderdetailedService;
	}
	public void setOrderdetailedService(OrderdetailedService orderdetailedService) {
		this.orderdetailedService = orderdetailedService;
	}
	public Orderdetailed getOrderdetailed() {
		return orderdetailed;
	}
	public void setOrderdetailed(Orderdetailed orderdetailed) {
		this.orderdetailed = orderdetailed;
	}
	public List<Orderdetailed> getOrderdetailedList() {
		return orderdetailedList;
	}
	public void setOrderdetailedList(List<Orderdetailed> orderdetailedList) {
		this.orderdetailedList = orderdetailedList;
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
	public List<Orderdetailed> getTempList() {
		return tempList;
	}
	public void setTempList(List<Orderdetailed> tempList) {
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
	private OrderdetailedService orderdetailedService;
	
	private Orderdetailed orderdetailed;
	private List<Orderdetailed> orderdetailedList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Orderdetailed> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
