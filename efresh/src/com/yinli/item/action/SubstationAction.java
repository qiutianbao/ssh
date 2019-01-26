package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */

import com.yinli.util.common.DataType;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Substation;
import com.yinli.item.service.SubstationService;
import com.yinli.util.common.DataType;
import com.opensymphony.xwork2.ActionSupport;


@Controller("substationAction")
@Scope("prototype")
public class SubstationAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = substationService.findAll( start, limit, flag);
			substationList = (List<Substation>) map.get("infoList");
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
			tempList = new ArrayList<Substation>();
			tempList.add(substationService.findById(substation.getIdNumber()));
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
			substationService.addNewInfo(substation);
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
			substationService.update(substation);
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
			substationService.delete(delData);
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
			Map<String, Object> map = substationService.findInfoByConditions(substation, start, limit, starttime, endtime);
			substationList = (List<Substation>) map.get("substationList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public SubstationService getSubstationService() {
		return substationService;
	}
	public void setSubstationService(SubstationService substationService) {
		this.substationService = substationService;
	}
	public Substation getSubstation() {
		return substation;
	}
	public void setSubstation(Substation substation) {
		this.substation = substation;
	}
	public List<Substation> getSubstationList() {
		return substationList;
	}
	public void setSubstationList(List<Substation> substationList) {
		this.substationList = substationList;
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
	public List<Substation> getTempList() {
		return tempList;
	}
	public void setTempList(List<Substation> tempList) {
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
	private SubstationService substationService;
	
	private Substation substation;
	private List<Substation> substationList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Substation> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
