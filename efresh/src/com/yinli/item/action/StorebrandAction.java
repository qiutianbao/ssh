package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.SessionAware;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Category;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Storebrand;
import com.yinli.item.service.EstoreService;
import com.yinli.item.service.StorebrandService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;


@Controller("storebrandAction")
@Scope("prototype")
public class StorebrandAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			list = new ArrayList<Map<String,Object>>();
			Map<String, Object> map = storebrandService.findAll( start, limit, flag);
			storebrandList = (List<Storebrand>) map.get("infoList");
			for(int i =0;i<storebrandList.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				Estore estore = estoreService.findById(storebrandList.get(i).getIdStore());
				if(estore == null){
					estore = new Estore();
				}
				m.put("storebrand", storebrandList.get(i));
				m.put("estore", estore);
				list.add(m);
				
			}
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	
	public String estore(){
		try {
			list = new ArrayList<Map<String,Object>>();
			List<Estore> estore = estoreService.findAlls();
			for(int i = 0;i<estore.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				m.put("estores", estore.get(i));
				list.add(m);
			}
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	

	/**
	 * 根据主键查询
	 * @return
	 */
	public String findById() {
		try {
			tempList = new ArrayList<Storebrand>();
			tempList.add(storebrandService.findById(storebrand.getIdNumber()));
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
			storebrand.setDr(0);
			storebrand.setTs(DateUtil.getTs());
			storebrandService.addNewInfo(storebrand);
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
			storebrand.setTs(DateUtil.getTs());
			storebrandService.update(storebrand);
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
			storebrandService.delete(delData);
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
			list = new ArrayList<Map<String,Object>>();
			Map<String, Object> map = storebrandService.findInfoByConditions(storebrand, start, limit, starttime, endtime);
			storebrandList = (List<Storebrand>) map.get("storebrandList");
			for(int i =0;i<storebrandList.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				Estore estore = estoreService.findById(storebrandList.get(i).getIdStore());
				if(estore == null){
					estore = new Estore();
				}
				m.put("storebrand", storebrandList.get(i));
				m.put("estore", estore);
				list.add(m);
				
			}
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	//商店品牌
	public String findbrand(){
		Map<String, Object> sessionMap = ServletActionContext.getContext().getSession();
		Estore estore = (Estore)sessionMap.get("estore");
		if(estore != null){
			String estoreId = estore.getIdNumber().toString();
			tempList = storebrandService.findStorebrandByEstoreId(estoreId);
		}
		return SUCCESS;
	}
	
	
	public StorebrandService getStorebrandService() {
		return storebrandService;
	}
	public void setStorebrandService(StorebrandService storebrandService) {
		this.storebrandService = storebrandService;
	}
	public Storebrand getStorebrand() {
		return storebrand;
	}
	public void setStorebrand(Storebrand storebrand) {
		this.storebrand = storebrand;
	}
	public List<Storebrand> getStorebrandList() {
		return storebrandList;
	}
	public void setStorebrandList(List<Storebrand> storebrandList) {
		this.storebrandList = storebrandList;
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
	public List<Storebrand> getTempList() {
		return tempList;
	}
	public void setTempList(List<Storebrand> tempList) {
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
	

	public List<Map<String, Object>> getList() {
		return list;
	}


	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}


	@Resource
	private StorebrandService storebrandService;
	@Resource
	private EstoreService estoreService;
	
	private Storebrand storebrand;
	private List<Storebrand> storebrandList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Storebrand> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private List<Map<String, Object>> list;

}
