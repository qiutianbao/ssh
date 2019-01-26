package com.yinli.item.action;
/*
 *
 * 创建日期: 2013-11-07
 */


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.T_available_no;
import com.yinli.item.dao.T_available_noDAO;
import com.yinli.item.service.T_available_noService;
import com.opensymphony.xwork2.ActionSupport;


@Controller("t_available_noAction")
@Scope("prototype")
public class T_available_noAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = t_available_noService.findAll( start, limit, flag);
			t_available_noList = (List<T_available_no>) map.get("infoList");
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
			tempList = new ArrayList<T_available_no>();
			tempList.add(t_available_noService.findById(t_available_no.getIdNumber()));
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
			t_available_noService.addNewInfo(t_available_no);
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
			t_available_noService.update(t_available_no);
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
			t_available_noService.delete(delData);
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
			Map<String, Object> map = t_available_noService.findInfoByConditions(t_available_no, start, limit, starttime, endtime);
			t_available_noList = (List<T_available_no>) map.get("t_available_noList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	//获取ID
	public String getNumber(String mark, int length){
		T_available_no no = t_available_noService.findById(mark);
		String number = "";
		if(no != null){
			if(!no.getCrt_no().equals("")){
				number = jointStr(no.getCrt_no().toString(),length);
			}
			
			//修改可用编号
			int new_crt_no = no.getCrt_no() + no.getInv();
			no.setCrt_no(new_crt_no);
			t_available_noService.update(no);
		}
		return number;
	}
	
	public  String jointStr(String crt_no, int length){
		String temp="";
		for(int i=0; i<length-crt_no.length() ; i++){
			temp += "0";
		}
		return temp + crt_no;
	}
	
	public T_available_noService getT_available_noService() {
		return t_available_noService;
	}
	public void setT_available_noService(T_available_noService t_available_noService) {
		this.t_available_noService = t_available_noService;
	}
	public T_available_no getT_available_no() {
		return t_available_no;
	}
	public void setT_available_no(T_available_no t_available_no) {
		this.t_available_no = t_available_no;
	}
	public List<T_available_no> getT_available_noList() {
		return t_available_noList;
	}
	public void setT_available_noList(List<T_available_no> t_available_noList) {
		this.t_available_noList = t_available_noList;
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
	public List<T_available_no> getTempList() {
		return tempList;
	}
	public void setTempList(List<T_available_no> tempList) {
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
	private T_available_noService t_available_noService;
	
	private T_available_no t_available_no;
	private List<T_available_no> t_available_noList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<T_available_no> tempList;
	private String starttime;
	private String endtime;
	private String flag;
}
