package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Sysmessage implements java.io.Serializable {
	// ID
	private Integer idNumber;
	// 标题
	private String msgtitle;

	// 发布时间
	private Date releasetime;
	//endtime
	private Date releasetime2;
	
	private String releasetimes;
	private String releasetimes2;
	
	// 公告类型
	private String msgtype;

	// 时间戳
	private String ts;

	// 删除标识
	private Integer dr;

	// 预留字段1
	private String msgimgname;

	// 预留字段2
	private String back2;

	// 预留字段3
	private Double back3;

	public Integer getIdNumber() {
		return this.idNumber;
	}

	public void setIdNumber(Integer idNumber) {
		this.idNumber = idNumber;
	}

	public String getMsgtitle() {
		return this.msgtitle;
	}

	public void setMsgtitle(String msgtitle) {
		this.msgtitle = msgtitle;
	}
	
	public String getReleasetimes() {
		return releasetimes;
	}

	public void setReleasetimes(String releasetimes) {
		this.releasetimes = releasetimes;
	}

	public String getReleasetimes2() {
		return releasetimes2;
	}

	public void setReleasetimes2(String releasetimes2) {
		this.releasetimes2 = releasetimes2;
	}

	public Date getReleasetime() {
		return this.releasetime;
	}

	public void setReleasetime(Date releasetime) {
		this.releasetime = releasetime;
	}


	public String getMsgtype() {
		return this.msgtype;
	}

	public void setMsgtype(String msgtype) {
		this.msgtype = msgtype;
	}

	public String getTs() {
		return this.ts;
	}

	public void setTs(String ts) {
		this.ts = ts;
	}

	public Integer getDr() {
		return this.dr;
	}

	public void setDr(Integer dr) {
		this.dr = dr;
	}
	public String getMsgimgname() {
		return msgimgname;
	}

	public void setMsgimgname(String msgimgname) {
		this.msgimgname = msgimgname;
	}

	public String getBack2() {
		return this.back2;
	}

	public void setBack2(String back2) {
		this.back2 = back2;
	}

	public Double getBack3() {
		return this.back3;
	}

	public void setBack3(Double back3) {
		this.back3 = back3;
	}
	public Date getReleasetime2() {
		return releasetime2;
	}

	public void setReleasetime2(Date releasetime2) {
		this.releasetime2 = releasetime2;
	}
	public Sysmessage() {
		
	}
}