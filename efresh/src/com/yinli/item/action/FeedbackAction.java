package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-23
 */


import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.service.FeedbackService;
import com.yinli.item.vo.Feedback;
import com.yinli.item.vo.FeedbackForm;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.util.common.DateUtil;


@Controller("feedbackAction")
@Scope("prototype")
public class FeedbackAction extends ActionSupport implements ServletRequestAware {
	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = feedbackService.findAll( start, limit,starttime, endtime);
			feedbackList = (List<Feedback>) map.get("infoList");
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
			FeedbackForm ff = feedbackService.findById(id);
			request.setAttribute("ff", ff);
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return "success";
	}
	
	/**
	 * 添加
	 * @return
	 */
	public String addNewInfo( ){
		try {
			feedback.setTs(DateUtil.getTs());
			feedbackService.addNewInfo(feedback);
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
			feedback.setIdReply(Integer.valueOf(mgmt.getIdNumber()));
			feedback.setReplytime(new Date());
			feedback.setTs(DateUtil.getTs());
			feedbackService.update(feedback);
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
			feedbackService.delete(delData);
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
			Map<String, Object> map = feedbackService.findInfoByConditions(feedback, start, limit, starttime, endtime);
			feedbackList = (List<Feedback>) map.get("feedbackList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public FeedbackService getFeedbackService() {
		return feedbackService;
	}
	public void setFeedbackService(FeedbackService feedbackService) {
		this.feedbackService = feedbackService;
	}
	public Feedback getFeedback() {
		return feedback;
	}
	public void setFeedback(Feedback feedback) {
		this.feedback = feedback;
	}
	public List<Feedback> getFeedbackList() {
		return feedbackList;
	}
	public void setFeedbackList(List<Feedback> feedbackList) {
		this.feedbackList = feedbackList;
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
	public List<Feedback> getTempList() {
		return tempList;
	}
	public void setTempList(List<Feedback> tempList) {
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
	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}

	@Resource
	private FeedbackService feedbackService;
	
	private Feedback feedback;
	private List<Feedback> feedbackList;
	private int start;
	private Integer id;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Feedback> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	
	private HttpServletRequest request;
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
	}
}
