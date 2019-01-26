package com.donglusoft.person.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.donglusoft.person.domain.Personelinfo;
import com.donglusoft.person.service.PersonelInfoService;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.rightmanagement.service.RightUtilService;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 
 * @author xdsh
 * @version 1.10 2010年11月7日23:14:24
 * @ 功能： 人员基础信息管理，提供了对人员基础信息的查询（包含多条件查询）、添加、修改、删除（即人员离职）、
 * 		获取部门信息列表等操作方法
 */
@Controller("personelInfoAction")
@Scope("prototype")
public class PersonelInfoAction extends ActionSupport {

	/**
	 * 根据标识位（flag）,查询人员基础信息
	 * @return
	 */
	public String findAll(){
		long stime = personUtils.formatLoginfoBefore("PersonelInfoAction.findAll()", "start="+start+", limit="+limit+", flag="+flag);
		try {
			Map<String, Object> map = personelInfoService.findAll( start, limit, flag);
			personelInfoList = (List<Personelinfo>) map.get("infoList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "PersonelInfoAction.findAll()", "listsize="+personelInfoList.size()+", listCount="+listCount+", success="+success);
		return SUCCESS;
	}
	
	/**
	 * 添加新的人员基础信息
	 * @return
	 */
	public String addNewInfo( ){
		long stime = personUtils.formatLoginfoBefore("PersonelInfoAction.addNewInfo()", "idnumber="+personelInfo.getIdnumber());
		try {
			personelInfoService.addNewInfo(personelInfo);
			success = true;
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "PersonelInfoAction.addNewInfo()", "idnumber="+personelInfo.getIdnumber()+", success="+success);
		return SUCCESS;
	}
	
	/**
	 * 根据身份证编号（idnumber）查询人员基础信息
	 * @return
	 */
	public String findById() {
		long stime = personUtils.formatLoginfoBefore("PersonelInfoAction.findById()", "idnumber="+personelInfo.getIdnumber());
		try {
			tempList = new ArrayList<Personelinfo>();
			tempList.add(personelInfoService.findById(personelInfo.getIdnumber()));
			success = true;
		} catch (Exception e) {
			// TODO: handle exception
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "PersonelInfoAction.findById()", "idnumber="+personelInfo.getIdnumber()+", success="+success);
		return SUCCESS;
	}

	/**
	 * 更新人员基础信息
	 * @return
	 */
	public String update() {
		long stime = personUtils.formatLoginfoBefore("PersonelInfoAction.update()", "idnumber="+personelInfo.getIdnumber());
		try {
			personelInfoService.update(personelInfo);
			success = true;
		} catch (Exception e) {
			// TODO: handle exception
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "PersonelInfoAction.update()", "idnumber="+personelInfo.getIdnumber()+", success="+success);
		return SUCCESS;
	}
	
	/**
	 * 人员离职
	 * @return
	 */
	public String delete(){
		long stime = personUtils.formatLoginfoBefore("PersonelInfoAction.delete()", "delData="+delData);
		try {
			personelInfoService.delete(delData);
			success = true;
		} catch (Exception e) {
			// TODO: handle exception
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "PersonelInfoAction.delete()", "success="+success);
		return SUCCESS;
	}
	
	/**
	 * 多条件查询人员信息
	 * @return
	 */
	public String findInfoByConditions() {
		long stime = personUtils.formatLoginfoBefore("PersonelInfoAction.findInfoByConditions()", "start="+start+", limit="+limit+", starttime="+starttime+", endtime="+endtime);
		try {
			Map<String, Object> map = personelInfoService.findInfoByConditions(personelInfo, start, limit, starttime, endtime);
			personelInfoList = (List<Personelinfo>) map.get("personelInfoList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		personUtils.formatLoginfoAfter(stime, "PersonelInfoAction.findInfoByConditions()", "listsize="+personelInfoList.size()+", allsize="+listCount+", success="+success);
		return SUCCESS;
	}
	

	 
	
	public PersonelInfoService getPersonelInfoService() {
		return personelInfoService;
	}
	public void setPersonelInfoService(PersonelInfoService personelInfoService) {
		this.personelInfoService = personelInfoService;
	}
	public Personelinfo getPersonelInfo() {
		return personelInfo;
	}
	public void setPersonelInfo(Personelinfo personelInfo) {
		this.personelInfo = personelInfo;
	}
	public List<Personelinfo> getPersonelInfoList() {
		return personelInfoList;
	}
	public void setPersonelInfoList(List<Personelinfo> personelInfoList) {
		this.personelInfoList = personelInfoList;
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
	public List<Personelinfo> getTempList() {
		return tempList;
	}
	public void setTempList(List<Personelinfo> tempList) {
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
	private PersonelInfoService personelInfoService;
	@Resource
	private RightUtilService rightUtilService;
	@Resource
	private PersonUtils personUtils;
	
	private Personelinfo personelInfo;
	private List<Personelinfo> personelInfoList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Personelinfo> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
