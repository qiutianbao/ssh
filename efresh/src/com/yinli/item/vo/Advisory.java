package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Advisory implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //咨询人主键
   private Integer idAdvisory;

  //咨询时间
   private Date advtime;

  //咨询内容
   private String advcontent;

  //回复人主键
   private Integer idReply;

  //回复内容
   private String replycontent;

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

   public Integer getIdAdvisory() {
    return this.idAdvisory;
   }

   public void setIdAdvisory(Integer idAdvisory) {
    this.idAdvisory = idAdvisory;
   }

   public Date getAdvtime() {
    return this.advtime;
   }

   public void setAdvtime(Date advtime) {
    this.advtime = advtime;
   }

   public String getAdvcontent() {
    return this.advcontent;
   }

   public void setAdvcontent(String advcontent) {
    this.advcontent = advcontent;
   }

   public Integer getIdReply() {
    return this.idReply;
   }

   public void setIdReply(Integer idReply) {
    this.idReply = idReply;
   }

   public String getReplycontent() {
    return this.replycontent;
   }

   public void setReplycontent(String replycontent) {
    this.replycontent = replycontent;
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

   public Advisory() {
   }
}