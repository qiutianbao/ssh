package com.donglusoft.person.domain;

import java.io.Serializable;

/**
 * 信息管理
 * @author wanglw 2013-10-14
 *
 */
public class MessageManage implements Serializable{
	//信息ID
	private String info_id;
	//信息类型
	private String info_type;
	//信息标题
	private String info_head;
	//信息内容
	private String info_body;
	//附件存储路径
	private String info_path;
	//附件名称
	private String Info_name;
	//发布日期
	private String reas_date;
	//发布网点号
	private String inst_no;
	//发布柜员
	private String tlr_no;
	//最后修改日期
	private String lst_upd_date;
	//修改柜员号
	private String lst_upd_tlr;
	//信息状态
	private String info_state;
	//备注
	private String content;
	public MessageManage(String infoId, String infoType, String infoHead,
			String infoBody, String infoPath, String infoName, String reasDate,
			String instNo, String tlrNo, String lstUpdDate, String lstUpdTlr,
			String infoState, String content) {
		super();
		info_id = infoId;
		info_type = infoType;
		info_head = infoHead;
		info_body = infoBody;
		info_path = infoPath;
		Info_name = infoName;
		reas_date = reasDate;
		inst_no = instNo;
		tlr_no = tlrNo;
		lst_upd_date = lstUpdDate;
		lst_upd_tlr = lstUpdTlr;
		info_state = infoState;
		this.content = content;
	}
	
	public MessageManage() {
		
	}

	public String getInfo_id() {
		return info_id;
	}

	public void setInfo_id(String infoId) {
		info_id = infoId;
	}

	public String getInfo_type() {
		return info_type;
	}

	public void setInfo_type(String infoType) {
		info_type = infoType;
	}

	public String getInfo_head() {
		return info_head;
	}

	public void setInfo_head(String infoHead) {
		info_head = infoHead;
	}

	public String getInfo_body() {
		return info_body;
	}

	public void setInfo_body(String infoBody) {
		info_body = infoBody;
	}

	public String getInfo_path() {
		return info_path;
	}

	public void setInfo_path(String infoPath) {
		info_path = infoPath;
	}

	public String getInfo_name() {
		return Info_name;
	}

	public void setInfo_name(String infoName) {
		Info_name = infoName;
	}

	public String getReas_date() {
		return reas_date;
	}

	public void setReas_date(String reasDate) {
		reas_date = reasDate;
	}

	public String getInst_no() {
		return inst_no;
	}

	public void setInst_no(String instNo) {
		inst_no = instNo;
	}

	public String getTlr_no() {
		return tlr_no;
	}

	public void setTlr_no(String tlrNo) {
		tlr_no = tlrNo;
	}

	public String getLst_upd_date() {
		return lst_upd_date;
	}

	public void setLst_upd_date(String lstUpdDate) {
		lst_upd_date = lstUpdDate;
	}

	public String getLst_upd_tlr() {
		return lst_upd_tlr;
	}

	public void setLst_upd_tlr(String lstUpdTlr) {
		lst_upd_tlr = lstUpdTlr;
	}

	public String getInfo_state() {
		return info_state;
	}

	public void setInfo_state(String infoState) {
		info_state = infoState;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	
	
}
