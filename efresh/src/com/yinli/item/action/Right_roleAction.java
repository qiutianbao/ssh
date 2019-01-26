package com.yinli.item.action;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.service.Right_roleService;
import com.yinli.item.vo.Category;
import com.yinli.item.vo.Right_role;

@Controller("right_roleAction")
@Scope("prototype")
public class Right_roleAction extends ActionSupport {

	
	public String findAll(){
		try {
			right_roleList = right_roleService.findAll();
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	
	
	public List<Right_role> getRight_roleList() {
		return right_roleList;
	}
	public void setRight_roleList(List<Right_role> right_roleList) {
		this.right_roleList = right_roleList;
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
	public List<Right_role> getTempList() {
		return tempList;
	}
	public void setTempList(List<Right_role> tempList) {
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
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public Right_role getRight_role() {
		return right_role;
	}
	public void setRight_role(Right_role right_role) {
		this.right_role = right_role;
	}



	@Resource
	private Right_roleService right_roleService;
	
	private List<Right_role> right_roleList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Right_role> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private String result;
	private Right_role right_role;
}
