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

import com.yinli.item.vo.Integral;
import com.yinli.item.service.IntegralService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("integralAction")
@Scope("prototype")
public class IntegralAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return,
	 */
	public String findAll(){
		try {
			Map<String, Object> map = integralService.findAll( start,limit,starttime,endtime,integralstart,integralend);
			integralList = (List<Integral>) map.get("infoList");
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
			tempList = new ArrayList<Integral>();
			tempList.add(integralService.findById(integral.getIdNumber()));
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
			integralService.addNewInfo(integral);
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
			integralService.update(integral);
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
			integralService.delete(delData);
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
			Map<String, Object> map = integralService.findInfoByConditions(integral, start, limit, starttime, endtime);
			integralList = (List<Integral>) map.get("integralList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	
	public IntegralService getIntegralService() {
		return integralService;
	}
	public void setIntegralService(IntegralService integralService) {
		this.integralService = integralService;
	}
	public Integral getIntegral() {
		return integral;
	}
	public void setIntegral(Integral integral) {
		this.integral = integral;
	}
	public List<Integral> getIntegralList() {
		return integralList;
	}
	public void setIntegralList(List<Integral> integralList) {
		this.integralList = integralList;
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
	public List<Integral> getTempList() {
		return tempList;
	}
	public void setTempList(List<Integral> tempList) {
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

	public Integer getIntegralstart() {
		return integralstart;
	}


	public void setIntegralstart(Integer integralstart) {
		this.integralstart = integralstart;
	}


	public Integer getIntegralend() {
		return integralend;
	}


	public void setIntegralend(Integer integralend) {
		this.integralend = integralend;
	}

	@Resource
	private IntegralService integralService;
	
	private Integral integral;
	private List<Integral> integralList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Integral> tempList;
	private String starttime;
	private String endtime;
	private Integer integralstart;
	private Integer integralend;
	private String flag;
}
