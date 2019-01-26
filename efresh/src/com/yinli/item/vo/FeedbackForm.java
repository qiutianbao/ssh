package com.yinli.item.vo;

import java.util.Date;

public class FeedbackForm {
	private Date feedbacktime;
	private String feedcontent;
	private String tlr_name;
	public Date getFeedbacktime() {
		return feedbacktime;
	}
	public void setFeedbacktime(Date feedbacktime) {
		this.feedbacktime = feedbacktime;
	}
	public String getFeedcontent() {
		return feedcontent;
	}
	public void setFeedcontent(String feedcontent) {
		this.feedcontent = feedcontent;
	}
	public String getTlr_name() {
		return tlr_name;
	}
	public void setTlr_name(String tlr_name) {
		this.tlr_name = tlr_name;
	}
	@Override
	public String toString() {
		return "FeedbackForm [feedbacktime=" + feedbacktime + ", feedcontent="
				+ feedcontent + ", tlr_name=" + tlr_name + "]";
	}
	
}
