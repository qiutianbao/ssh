package com.donglusoft.person.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;


import com.donglusoft.person.domain.MessageManage;
import com.donglusoft.person.service.MessageManageService;
import com.donglusoft.person.util.PersonUtils;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 
 * @author wanglw 20131016
 *
 */
@Controller("messageManageAction")
@Scope("prototype")
public class MessageManageAction extends ActionSupport{
	@Resource
	private MessageManageService messageManageService;
	@Resource
	private PersonUtils personUtils;
	
	private MessageManage messageManage;
	private List<MessageManage> messageManageList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<MessageManage> tempList;
	
	/**
	 * 查询所有最新通知，并根据时间排序
	 * @return
	 */
	public String findAllNewMessageOrderByDate(){
		long stime = personUtils.formatLoginfoBefore("MessageManageAction.findAllNewMessageOrderByDate()", "start="+start+", limit="+limit);
		try{
			messageManageList = messageManageService.findAllNewMessageOrderByDate(start, limit);
			listCount = messageManageService.count();
			success = true;
		}catch(Exception e){
			e.printStackTrace();
			success = false;
		}
		personUtils.formatLoginfoAfter(stime, "MessageManageAction.findAllNewMessageOrderByDate()", "listsize="+messageManageList.size()+", listCount="+listCount+", success="+success);
		return SUCCESS;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public MessageManageService getMessageManageService() {
		return messageManageService;
	}
	public void setMessageManageService(MessageManageService messageManageService) {
		this.messageManageService = messageManageService;
	}
	public PersonUtils getPersonUtils() {
		return personUtils;
	}
	public void setPersonUtils(PersonUtils personUtils) {
		this.personUtils = personUtils;
	}
	public MessageManage getMessageManage() {
		return messageManage;
	}
	public void setMessageManage(MessageManage messageManage) {
		this.messageManage = messageManage;
	}
	public List<MessageManage> getMessageManageList() {
		return messageManageList;
	}
	public void setMessageManageList(List<MessageManage> messageManageList) {
		this.messageManageList = messageManageList;
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
	public List<MessageManage> getTempList() {
		return tempList;
	}
	public void setTempList(List<MessageManage> tempList) {
		this.tempList = tempList;
	}
	
	
}
