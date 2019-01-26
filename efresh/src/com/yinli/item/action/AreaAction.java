package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-23
 */


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.service.AreaService;


@Controller("areaAction")
@Scope("prototype")
public class AreaAction extends ActionSupport {
	/**
	 * 省级数据
	 * @return
	 */
	public String getprovince(){
		try {
			provinceList  = areaService.getAreaData(areaid);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	/**
	 * 市级数据
	 * @return
	 */
	public String getcity(){
		try {
			cityList  = areaService.getAreaData(areaid);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	/**
	 * 区级数据
	 * @return
	 */
	public String getarea(){
		try {
			areaList  = areaService.getAreaData(areaid);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	

	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	

	public AreaService getAreaService() {
		return areaService;
	}


	public void setAreaService(AreaService areaService) {
		this.areaService = areaService;
	}


	public List<Map<String, Object>> getAreaList() {
		return areaList;
	}


	public void setAreaList(List<Map<String, Object>> areaList) {
		this.areaList = areaList;
	}


	public List<Map<String, Object>> getCityList() {
		return cityList;
	}
	public void setCityList(List<Map<String, Object>> cityList) {
		this.cityList = cityList;
	}
	public Integer getAreaid() {
		return areaid;
	}
	public void setAreaid(Integer areaid) {
		this.areaid = areaid;
	}


	public List<Map<String, Object>> getProvinceList() {
		return provinceList;
	}
	public void setProvinceList(List<Map<String, Object>> provinceList) {
		this.provinceList = provinceList;
	}


	@Resource
	private AreaService areaService;
	private List<Map<String, Object>> provinceList;
	private List<Map<String, Object>> cityList;
	private List<Map<String, Object>> areaList;
	private Integer areaid;
	private boolean success;
}
