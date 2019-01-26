package com.donglusoft.person.action;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.donglusoft.person.domain.Positionnameinfo;
import com.donglusoft.person.service.PositionNameInfoService;
import com.donglusoft.person.util.PersonUtils;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 
 * @author xdsh
 * @version 1.10 2010年11月7日21:34:01
 * @ 功能 ： 职称名称管理，提供职称名称的创建、删除、修改、查询等功能
 */
@Controller("positionNameInfoAction")
@Scope("prototype")
public class PositionNameInfoAction extends ActionSupport {
	
	/**
	 * 查询所有职称名称信息
	 * @return
	 */
	public String findAll(){
		long stime = personUtils.formatLoginfoBefore("PositionNameInfoAction.findAll()", "start="+start+", limit="+limit);
		try {
			positionNameInfoList = positionNameInfoService.findAll( start, limit);
			listCount = positionNameInfoService.count();
			success = true;
		} catch (Exception e) {
			// TODO: handle exception
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "PositionNameInfoAction.findAll()", "listsize="+positionNameInfoList.size()+", listCount="+listCount+", success="+success);
		return SUCCESS;
	}
	
	/**
	 * 添加新的职称名称
	 * @return
	 */
	public String addNewInfo( ){
		long stime = personUtils.formatLoginfoBefore("PositionNameInfoAction.addNewInfo()", "");
		try {
			positionNameInfoService.addNewInfo(positionNameInfo);
			success = true;
		} catch (Exception e) {
			// TODO: handle exception
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "PositionNameInfoAction.addNewInfo()", "nameid="+positionNameInfo.getNameid()+", success="+success);
		
		return SUCCESS;
	}
	
	/**
	 * 根据信息编号查询职称名称信息
	 * @return
	 */
	public String findById() {
		long stime = personUtils.formatLoginfoBefore("PositionNameInfoAction.findById()", "nameid="+positionNameInfo.getNameid());
		try {
			tempList = new ArrayList<Positionnameinfo>();
			tempList.add(positionNameInfoService.findById(positionNameInfo.getNameid()));
			success = true;
		} catch (Exception e) {
			// TODO: handle exception
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "PositionNameInfoAction.findById()", "success="+success);
		return SUCCESS;
	}

	/**
	 * 更新职称名称信息
	 * @return
	 */
	public String update() {
		long stime = personUtils.formatLoginfoBefore("PositionNameInfoAction.update()", "nameid="+positionNameInfo.getNameid());
		try {
			positionNameInfoService.update(positionNameInfo);
			success = true;
		} catch (Exception e) {
			// TODO: handle exception
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "PositionNameInfoAction.update()", "nameid="+positionNameInfo.getNameid()+", success="+success);
		return SUCCESS;
	}
	
	/**
	 * 删除职称名称
	 * @return
	 */
	public String delete(){
		long stime = personUtils.formatLoginfoBefore("PositionNameInfoAction.delete()", "delData="+delData);
		try {
			positionNameInfoService.delete(delData);
			success = true;
		} catch (Exception e) {
			// TODO: handle exception
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "PositionNameInfoAction.delete()", "success="+success);
		return SUCCESS;
	}
	

	public PositionNameInfoService getPositionNameInfoService() {
		return positionNameInfoService;
	}
	public void setPositionNameInfoService(PositionNameInfoService positionNameInfoService) {
		this.positionNameInfoService = positionNameInfoService;
	}
	public Positionnameinfo getPositionNameInfo() {
		return positionNameInfo;
	}
	public void setPositionNameInfo(Positionnameinfo positionNameInfo) {
		this.positionNameInfo = positionNameInfo;
	}
	public List<Positionnameinfo> getPositionNameInfoList() {
		return positionNameInfoList;
	}
	public void setPositionNameInfoList(List<Positionnameinfo> positionNameInfoList) {
		this.positionNameInfoList = positionNameInfoList;
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
	public List<Positionnameinfo> getTempList() {
		return tempList;
	}
	public void setTempList(List<Positionnameinfo> tempList) {
		this.tempList = tempList;
	}
	@Resource
	private PositionNameInfoService positionNameInfoService;
	@Resource
	private PersonUtils personUtils;
	
	private Positionnameinfo positionNameInfo;
	private List<Positionnameinfo> positionNameInfoList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Positionnameinfo> tempList;
}
