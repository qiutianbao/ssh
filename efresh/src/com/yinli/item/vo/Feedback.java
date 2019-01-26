package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-23
 */

public class Feedback implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //反馈人主键，就是用户主键
   private Integer idFeedback;

  //反馈时间
   private Date feedbacktime;

  //反馈内容
   private String feedcontent;

  //回复内容
   private String replycontent;

  //回复人主键，就是用户主键
   private Integer idReply;

  //回复时间
   private Date replytime;

  //时间戳
   private String ts;

  //删除标志
   private Integer dr;

  //预留字段1
   private String back1;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public Integer getIdFeedback() {
    return this.idFeedback;
   }

   public void setIdFeedback(Integer idFeedback) {
    this.idFeedback = idFeedback;
   }

   public Date getFeedbacktime() {
    return this.feedbacktime;
   }

   public void setFeedbacktime(Date feedbacktime) {
    this.feedbacktime = feedbacktime;
   }

   public String getFeedcontent() {
    return this.feedcontent;
   }

   public void setFeedcontent(String feedcontent) {
    this.feedcontent = feedcontent;
   }

   public String getReplycontent() {
    return this.replycontent;
   }

   public void setReplycontent(String replycontent) {
    this.replycontent = replycontent;
   }

   public Integer getIdReply() {
    return this.idReply;
   }

   public void setIdReply(Integer idReply) {
    this.idReply = idReply;
   }

   public Date getReplytime() {
    return this.replytime;
   }

   public void setReplytime(Date replytime) {
    this.replytime = replytime;
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

   public String getBack1() {
    return this.back1;
   }

   public void setBack1(String back1) {
    this.back1 = back1;
   }

   public Feedback() {
   }
}