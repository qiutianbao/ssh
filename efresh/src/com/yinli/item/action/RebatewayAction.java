package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-27
 */


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Rebateway;
import com.yinli.item.service.RebatewayService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionSupport;


@Controller("rebatewayAction")
@Scope("prototype")
public class RebatewayAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = rebatewayService.findAll( start, limit, flag);
			rebatewayList = (List<Rebateway>) map.get("infoList");
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
			tempList = new ArrayList<Rebateway>();
			tempList.add(rebatewayService.findById(rebateway.getIdNumber()));
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
			rebateway.setDr(0);
			rebateway.setTs(DateUtil.getTs());
			rebatewayService.addNewInfo(rebateway);
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
			rebateway.setTs(DateUtil.getTs());
			rebatewayService.update(rebateway);
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
			rebatewayService.delete(delData);
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
			Map<String, Object> map = rebatewayService.findInfoByConditions(rebateway, start, limit, starttime, endtime);
			rebatewayList = (List<Rebateway>) map.get("rebatewayList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public RebatewayService getRebatewayService() {
		return rebatewayService;
	}
	public void setRebatewayService(RebatewayService rebatewayService) {
		this.rebatewayService = rebatewayService;
	}
	public Rebateway getRebateway() {
		return rebateway;
	}
	public void setRebateway(Rebateway rebateway) {
		this.rebateway = rebateway;
	}
	public List<Rebateway> getRebatewayList() {
		return rebatewayList;
	}
	public void setRebatewayList(List<Rebateway> rebatewayList) {
		this.rebatewayList = rebatewayList;
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
	public List<Rebateway> getTempList() {
		return tempList;
	}
	public void setTempList(List<Rebateway> tempList) {
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
	private RebatewayService rebatewayService;
	
	private Rebateway rebateway;
	private List<Rebateway> rebatewayList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Rebateway> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
