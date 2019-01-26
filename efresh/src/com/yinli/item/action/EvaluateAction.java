package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Evaluate;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.item.service.EvaluateService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;


@Controller("evaluateAction")
@Scope("prototype")
public class EvaluateAction extends ActionSupport {

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = evaluateService.findAll( start, limit,starttime, endtime,orderNo);
			evaluateList = (List<Evaluate>) map.get("infoList");
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
			tempList = new ArrayList<Evaluate>();
			tempList.add(evaluateService.findById(evaluate.getIdNumber()));
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
			evaluate.setTs(DateUtil.getTs());
			evaluateService.addNewInfo(evaluate);
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
			Map session = ActionContext.getContext().getSession();
			T_tlr_mgmt mgmt = (T_tlr_mgmt) session.get("t_tlr_mgmt");
			evaluate.setIdReply(Integer.valueOf(mgmt.getIdNumber()));
			evaluate.setReplytime(new Date());
			evaluate.setTs(DateUtil.getTs());
			evaluateService.update(evaluate);
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
			evaluateService.delete(delData);
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
			Map<String, Object> map = evaluateService.findInfoByConditions(evaluate, start, limit, starttime, endtime);
			evaluateList = (List<Evaluate>) map.get("evaluateList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public EvaluateService getEvaluateService() {
		return evaluateService;
	}
	public void setEvaluateService(EvaluateService evaluateService) {
		this.evaluateService = evaluateService;
	}
	public Evaluate getEvaluate() {
		return evaluate;
	}
	public void setEvaluate(Evaluate evaluate) {
		this.evaluate = evaluate;
	}
	public List<Evaluate> getEvaluateList() {
		return evaluateList;
	}
	public void setEvaluateList(List<Evaluate> evaluateList) {
		this.evaluateList = evaluateList;
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
	public List<Evaluate> getTempList() {
		return tempList;
	}
	public void setTempList(List<Evaluate> tempList) {
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

	public String getOrderNo() {
		return orderNo;
	}


	public void setOrderNo(String orderNo) {
		this.orderNo = orderNo;
	}

	@Resource
	private EvaluateService evaluateService;
	
	private Evaluate evaluate;
	private List<Evaluate> evaluateList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Evaluate> tempList;
	private String starttime;
	private String endtime;
	private String orderNo;
	private String flag;
}
