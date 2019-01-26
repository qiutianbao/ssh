package com.yinli.item.vo;

import java.io.Serializable;

public class SysLog implements Serializable {
	private static final long serialVersionUID = 1L;
	private String idNumber;
	private String userid;
	private String brno;
	private String business;
	private String realDay;
	private String realTime;
	private String subjectMatter;
	private String flag;
	public String getIdNumber() {
		return idNumber;
	}
	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getBrno() {
		return brno;
	}
	public void setBrno(String brno) {
		this.brno = brno;
	}
	public String getBusiness() {
		return business;
	}
	public void setBusiness(String business) {
		this.business = business;
	}
	public String getRealDay() {
		return realDay;
	}
	public void setRealDay(String realDay) {
		this.realDay = realDay;
	}
	public String getRealTime() {
		return realTime;
	}
	public void setRealTime(String realTime) {
		this.realTime = realTime;
	}
	public String getSubjectMatter() {
		return subjectMatter;
	}
	public void setSubjectMatter(String subjectMatter) {
		this.subjectMatter = subjectMatter;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}

}
