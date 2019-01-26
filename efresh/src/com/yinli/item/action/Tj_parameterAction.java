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

import com.yinli.item.vo.Tj_parameter;
import com.yinli.item.service.Tj_parameterService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("tj_parameterAction")
@Scope("prototype")
public class Tj_parameterAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = tj_parameterService.findAll( start, limit, flag);
			tj_parameterList = (List<Tj_parameter>) map.get("infoList");
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
			tempList = new ArrayList<Tj_parameter>();
			tempList.add(tj_parameterService.findById(tj_parameter.getIdNumber()));
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
			tj_parameterService.addNewInfo(tj_parameter);
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
			tj_parameterService.update(tj_parameter);
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
			tj_parameterService.delete(delData);
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
			Map<String, Object> map = tj_parameterService.findInfoByConditions(tj_parameter, start, limit, starttime, endtime);
			tj_parameterList = (List<Tj_parameter>) map.get("tj_parameterList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public Tj_parameterService getTj_parameterService() {
		return tj_parameterService;
	}
	public void setTj_parameterService(Tj_parameterService tj_parameterService) {
		this.tj_parameterService = tj_parameterService;
	}
	public Tj_parameter getTj_parameter() {
		return tj_parameter;
	}
	public void setTj_parameter(Tj_parameter tj_parameter) {
		this.tj_parameter = tj_parameter;
	}
	public List<Tj_parameter> getTj_parameterList() {
		return tj_parameterList;
	}
	public void setTj_parameterList(List<Tj_parameter> tj_parameterList) {
		this.tj_parameterList = tj_parameterList;
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
	public List<Tj_parameter> getTempList() {
		return tempList;
	}
	public void setTempList(List<Tj_parameter> tempList) {
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
	private Tj_parameterService tj_parameterService;
	
	private Tj_parameter tj_parameter;
	private List<Tj_parameter> tj_parameterList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Tj_parameter> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
