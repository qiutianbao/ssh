package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-27
 */


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Rechargerules;
import com.yinli.item.service.RechargerulesService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionSupport;


@Controller("rechargerulesAction")
@Scope("prototype")
public class RechargerulesAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = rechargerulesService.findAll( start, limit, flag);
			if(flag.equals("sup")){
				rechargerulesListForSup=(List<Map>) map.get("infoList");
				listCountForSup=Integer.parseInt(map.get("listCount").toString());
			}else{
				rechargerulesListForPre = (List<Rechargerules>) map.get("infoList");
				listCountForPre = Integer.parseInt(map.get("listCount").toString());
			}
			
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
			tempList = new ArrayList<Rechargerules>();
			tempList.add(rechargerulesService.findById(rechargerules.getIdNumber()));
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
			rechargerules.setDr(0);
			rechargerules.setTs(DateUtil.getTs());
			rechargerulesService.addNewInfo(rechargerules);
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
			rechargerules.setTs(DateUtil.getTs());
			rechargerulesService.update(rechargerules);
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
			rechargerulesService.delete(delData);
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
			Map<String, Object> map = rechargerulesService.findInfoByConditions(rechargerules, start, limit, starttime, endtime);
			rechargerulesList = (List<Rechargerules>) map.get("rechargerulesList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public RechargerulesService getRechargerulesService() {
		return rechargerulesService;
	}
	public void setRechargerulesService(RechargerulesService rechargerulesService) {
		this.rechargerulesService = rechargerulesService;
	}
	public Rechargerules getRechargerules() {
		return rechargerules;
	}
	public void setRechargerules(Rechargerules rechargerules) {
		this.rechargerules = rechargerules;
	}
	public List<Rechargerules> getRechargerulesList() {
		return rechargerulesList;
	}
	public void setRechargerulesList(List<Rechargerules> rechargerulesList) {
		this.rechargerulesList = rechargerulesList;
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
	public List<Rechargerules> getTempList() {
		return tempList;
	}
	public void setTempList(List<Rechargerules> tempList) {
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
	private RechargerulesService rechargerulesService;
	
	private Rechargerules rechargerules;
	private List<Rechargerules> rechargerulesList;
	private List<Rechargerules> rechargerulesListForPre;
	private List<Map> rechargerulesListForSup;
	private int start;
	private int limit;
	private int listCount;
	private int listCountForPre;
	private int listCountForSup;
	public List<Rechargerules> getRechargerulesListForPre() {
		return rechargerulesListForPre;
	}


	public void setRechargerulesListForPre(
			List<Rechargerules> rechargerulesListForPre) {
		this.rechargerulesListForPre = rechargerulesListForPre;
	}


	public List<Map> getRechargerulesListForSup() {
		return rechargerulesListForSup;
	}


	public void setRechargerulesListForSup(
			List<Map> rechargerulesListForSup) {
		this.rechargerulesListForSup = rechargerulesListForSup;
	}


	public int getListCountForPre() {
		return listCountForPre;
	}


	public void setListCountForPre(int listCountForPre) {
		this.listCountForPre = listCountForPre;
	}


	public int getListCountForSup() {
		return listCountForSup;
	}


	public void setListCountForSup(int listCountForSup) {
		this.listCountForSup = listCountForSup;
	}

	private String delData;
	private boolean success;
	private List<Rechargerules> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
