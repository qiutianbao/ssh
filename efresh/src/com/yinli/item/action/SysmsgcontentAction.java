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

import com.yinli.item.vo.Sysmsgcontent;
import com.yinli.item.service.SysmsgcontentService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("sysmsgcontentAction")
@Scope("prototype")
public class SysmsgcontentAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = sysmsgcontentService.findAll( start, limit, flag);
			sysmsgcontentList = (List<Sysmsgcontent>) map.get("infoList");
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
			tempList = new ArrayList<Sysmsgcontent>();
			tempList.add(sysmsgcontentService.findById(sysmsgcontent.getIdNumber()));
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
			sysmsgcontentService.addNewInfo(sysmsgcontent);
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
			sysmsgcontentService.update(sysmsgcontent);
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
			sysmsgcontentService.delete(delData);
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
			Map<String, Object> map = sysmsgcontentService.findInfoByConditions(sysmsgcontent, start, limit, starttime, endtime);
			sysmsgcontentList = (List<Sysmsgcontent>) map.get("sysmsgcontentList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public SysmsgcontentService getSysmsgcontentService() {
		return sysmsgcontentService;
	}
	public void setSysmsgcontentService(SysmsgcontentService sysmsgcontentService) {
		this.sysmsgcontentService = sysmsgcontentService;
	}
	public Sysmsgcontent getSysmsgcontent() {
		return sysmsgcontent;
	}
	public void setSysmsgcontent(Sysmsgcontent sysmsgcontent) {
		this.sysmsgcontent = sysmsgcontent;
	}
	public List<Sysmsgcontent> getSysmsgcontentList() {
		return sysmsgcontentList;
	}
	public void setSysmsgcontentList(List<Sysmsgcontent> sysmsgcontentList) {
		this.sysmsgcontentList = sysmsgcontentList;
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
	public List<Sysmsgcontent> getTempList() {
		return tempList;
	}
	public void setTempList(List<Sysmsgcontent> tempList) {
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
	private SysmsgcontentService sysmsgcontentService;
	
	private Sysmsgcontent sysmsgcontent;
	private List<Sysmsgcontent> sysmsgcontentList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Sysmsgcontent> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
