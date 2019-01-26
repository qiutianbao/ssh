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

import com.yinli.item.vo.Tj_paramitem;
import com.yinli.item.service.Tj_paramitemService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("tj_paramitemAction")
@Scope("prototype")
public class Tj_paramitemAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = tj_paramitemService.findAll( start, limit, flag);
			tj_paramitemList = (List<Tj_paramitem>) map.get("infoList");
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
			tempList = new ArrayList<Tj_paramitem>();
			tempList.add(tj_paramitemService.findById(tj_paramitem.getIdNumber()));
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
			tj_paramitemService.addNewInfo(tj_paramitem);
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
			tj_paramitemService.update(tj_paramitem);
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
			tj_paramitemService.delete(delData);
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
			Map<String, Object> map = tj_paramitemService.findInfoByConditions(tj_paramitem, start, limit, starttime, endtime);
			tj_paramitemList = (List<Tj_paramitem>) map.get("tj_paramitemList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public Tj_paramitemService getTj_paramitemService() {
		return tj_paramitemService;
	}
	public void setTj_paramitemService(Tj_paramitemService tj_paramitemService) {
		this.tj_paramitemService = tj_paramitemService;
	}
	public Tj_paramitem getTj_paramitem() {
		return tj_paramitem;
	}
	public void setTj_paramitem(Tj_paramitem tj_paramitem) {
		this.tj_paramitem = tj_paramitem;
	}
	public List<Tj_paramitem> getTj_paramitemList() {
		return tj_paramitemList;
	}
	public void setTj_paramitemList(List<Tj_paramitem> tj_paramitemList) {
		this.tj_paramitemList = tj_paramitemList;
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
	public List<Tj_paramitem> getTempList() {
		return tempList;
	}
	public void setTempList(List<Tj_paramitem> tempList) {
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
	private Tj_paramitemService tj_paramitemService;
	
	private Tj_paramitem tj_paramitem;
	private List<Tj_paramitem> tj_paramitemList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Tj_paramitem> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
