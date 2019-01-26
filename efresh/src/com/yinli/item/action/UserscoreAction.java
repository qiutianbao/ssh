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

import com.yinli.item.vo.Userscore;
import com.yinli.item.service.UserscoreService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionSupport;


@Controller("userscoreAction")
@Scope("prototype")
public class UserscoreAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = userscoreService.findAll( start, limit, orderNo,score);
			userscoreList = (List<Userscore>) map.get("infoList");
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
			tempList = new ArrayList<Userscore>();
			tempList.add(userscoreService.findById(userscore.getIdNumber()));
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
			userscore.setTs(DateUtil.getTs());
			userscoreService.addNewInfo(userscore);
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
			userscore.setTs(DateUtil.getTs());
			userscoreService.update(userscore);
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
			userscoreService.delete(delData);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/*
	public String findInfoByConditions() {
		try {
			Map<String, Object> map = userscoreService.findInfoByConditions(userscore, start, limit, starttime, endtime);
			userscoreList = (List<Userscore>) map.get("userscoreList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}*/
	
	public UserscoreService getUserscoreService() {
		return userscoreService;
	}
	public void setUserscoreService(UserscoreService userscoreService) {
		this.userscoreService = userscoreService;
	}
	public Userscore getUserscore() {
		return userscore;
	}
	public void setUserscore(Userscore userscore) {
		this.userscore = userscore;
	}
	public List<Userscore> getUserscoreList() {
		return userscoreList;
	}
	public void setUserscoreList(List<Userscore> userscoreList) {
		this.userscoreList = userscoreList;
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
	public List<Userscore> getTempList() {
		return tempList;
	}
	public void setTempList(List<Userscore> tempList) {
		this.tempList = tempList;
	}
	public String getOrderNo() {
		return orderNo;
	}


	public void setOrderNo(String orderNo) {
		this.orderNo = orderNo;
	}


	public Integer getScore() {
		return score;
	}


	public void setScore(Integer score) {
		this.score = score;
	}


	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	@Resource
	private UserscoreService userscoreService;
	
	private Userscore userscore;
	private List<Userscore> userscoreList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Userscore> tempList;
	private String orderNo;
	private Integer score;
	private String flag;
}
