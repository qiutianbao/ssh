package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-13
 */


import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.User_defined_struts;
import com.yinli.item.service.User_defined_strutsService;
import com.opensymphony.xwork2.ActionSupport;

@Controller("user_defined_strutsAction")
@Scope("prototype")
public class User_defined_strutsAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = user_defined_strutsService.findAll( start, limit, flag);
			user_defined_strutsList = (List<User_defined_struts>) map.get("infoList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	public  String test(){
		String column=user_defined_struts.getColumn();
		String table=user_defined_struts.getData_source();
		CreateCommoditycode(table,column);
		return null;
	}
	public  String CreateCommoditycode(String table,String column){
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		int count = user_defined_strutsService.CreateCount(table,column,date)+1;
		date = date.replaceAll("-", "");
		DecimalFormat df = new DecimalFormat("00000");
		return date+df.format(count);
	}

	/**
	 * 根据主键查询
	 * @return
	 */
	public String findById() {
		try {
			tempList = new ArrayList<User_defined_struts>();
			tempList.add(user_defined_strutsService.findById(user_defined_struts.getIdNumber()));
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
			user_defined_strutsService.addNewInfo(user_defined_struts);
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
			user_defined_strutsService.update(user_defined_struts);
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
			user_defined_strutsService.delete(delData);
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
			Map<String, Object> map = user_defined_strutsService.findInfoByConditions(user_defined_struts, start, limit, starttime, endtime);
			user_defined_strutsList = (List<User_defined_struts>) map.get("user_defined_strutsList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public User_defined_strutsService getUser_defined_strutsService() {
		return user_defined_strutsService;
	}
	public void setUser_defined_strutsService(User_defined_strutsService user_defined_strutsService) {
		this.user_defined_strutsService = user_defined_strutsService;
	}
	public User_defined_struts getUser_defined_struts() {
		return user_defined_struts;
	}
	public void setUser_defined_struts(User_defined_struts user_defined_struts) {
		this.user_defined_struts = user_defined_struts;
	}
	public List<User_defined_struts> getUser_defined_strutsList() {
		return user_defined_strutsList;
	}
	public void setUser_defined_strutsList(List<User_defined_struts> user_defined_strutsList) {
		this.user_defined_strutsList = user_defined_strutsList;
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
	public List<User_defined_struts> getTempList() {
		return tempList;
	}
	public void setTempList(List<User_defined_struts> tempList) {
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
	private User_defined_strutsService user_defined_strutsService;
	
	private User_defined_struts user_defined_struts;
	private List<User_defined_struts> user_defined_strutsList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<User_defined_struts> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
