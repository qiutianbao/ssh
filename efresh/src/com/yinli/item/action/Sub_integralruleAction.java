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

import com.yinli.item.vo.Sub_integralrule;
import com.yinli.item.service.Sub_integralruleService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionSupport;


@Controller("sub_integralruleAction")
@Scope("prototype")
public class Sub_integralruleAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = sub_integralruleService.findAll( start, limit, flag);
			sub_integralruleList = (List<Sub_integralrule>) map.get("infoList");
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
			tempList = new ArrayList<Sub_integralrule>();
			tempList.add(sub_integralruleService.findById(sub_integralrule.getIdNumber()));
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
			sub_integralrule.setTs(DateUtil.getTs());
			sub_integralruleService.addNewInfo(sub_integralrule);
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
			sub_integralrule.setTs(DateUtil.getTs());
			sub_integralruleService.update(sub_integralrule);
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
			sub_integralruleService.delete(delData);
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
			Map<String, Object> map = sub_integralruleService.findInfoByConditions(sub_integralrule, start, limit, starttime, endtime);
			sub_integralruleList = (List<Sub_integralrule>) map.get("sub_integralruleList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public Sub_integralruleService getSub_integralruleService() {
		return sub_integralruleService;
	}
	public void setSub_integralruleService(Sub_integralruleService sub_integralruleService) {
		this.sub_integralruleService = sub_integralruleService;
	}
	public Sub_integralrule getSub_integralrule() {
		return sub_integralrule;
	}
	public void setSub_integralrule(Sub_integralrule sub_integralrule) {
		this.sub_integralrule = sub_integralrule;
	}
	public List<Sub_integralrule> getSub_integralruleList() {
		return sub_integralruleList;
	}
	public void setSub_integralruleList(List<Sub_integralrule> sub_integralruleList) {
		this.sub_integralruleList = sub_integralruleList;
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
	public List<Sub_integralrule> getTempList() {
		return tempList;
	}
	public void setTempList(List<Sub_integralrule> tempList) {
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
	private Sub_integralruleService sub_integralruleService;
	
	private Sub_integralrule sub_integralrule;
	private List<Sub_integralrule> sub_integralruleList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Sub_integralrule> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
