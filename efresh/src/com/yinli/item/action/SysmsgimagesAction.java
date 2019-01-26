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

import com.yinli.item.vo.Sysmsgimages;
import com.yinli.item.service.SysmsgimagesService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("sysmsgimagesAction")
@Scope("prototype")
public class SysmsgimagesAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = sysmsgimagesService.findAll( start, limit, flag);
			sysmsgimagesList = (List<Sysmsgimages>) map.get("infoList");
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
			tempList = new ArrayList<Sysmsgimages>();
			tempList.add(sysmsgimagesService.findById(sysmsgimages.getIdNumber()));
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
			sysmsgimagesService.addNewInfo(sysmsgimages);
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
			sysmsgimagesService.update(sysmsgimages);
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
			sysmsgimagesService.delete(delData);
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
			Map<String, Object> map = sysmsgimagesService.findInfoByConditions(sysmsgimages, start, limit, starttime, endtime);
			sysmsgimagesList = (List<Sysmsgimages>) map.get("sysmsgimagesList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public SysmsgimagesService getSysmsgimagesService() {
		return sysmsgimagesService;
	}
	public void setSysmsgimagesService(SysmsgimagesService sysmsgimagesService) {
		this.sysmsgimagesService = sysmsgimagesService;
	}
	public Sysmsgimages getSysmsgimages() {
		return sysmsgimages;
	}
	public void setSysmsgimages(Sysmsgimages sysmsgimages) {
		this.sysmsgimages = sysmsgimages;
	}
	public List<Sysmsgimages> getSysmsgimagesList() {
		return sysmsgimagesList;
	}
	public void setSysmsgimagesList(List<Sysmsgimages> sysmsgimagesList) {
		this.sysmsgimagesList = sysmsgimagesList;
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
	public List<Sysmsgimages> getTempList() {
		return tempList;
	}
	public void setTempList(List<Sysmsgimages> tempList) {
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
	private SysmsgimagesService sysmsgimagesService;
	
	private Sysmsgimages sysmsgimages;
	private List<Sysmsgimages> sysmsgimagesList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Sysmsgimages> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
