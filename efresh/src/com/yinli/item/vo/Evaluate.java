package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Evaluate implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //评价人主键，就是用户主键
   private Integer idEvaluate;

  //订单编号
   private String orderNo;

  //评价内容
   private String evaluatecontent;

  //评价时间
   private Date evaluatetime;

  //回复人
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

   public Integer getIdEvaluate() {
    return this.idEvaluate;
   }

   public void setIdEvaluate(Integer idEvaluate) {
    this.idEvaluate = idEvaluate;
   }

   public String getOrderNo() {
    return this.orderNo;
   }

   public void setOrderNo(String orderNo) {
    this.orderNo = orderNo;
   }

   public String getEvaluatecontent() {
    return this.evaluatecontent;
   }

   public void setEvaluatecontent(String evaluatecontent) {
    this.evaluatecontent = evaluatecontent;
   }

   public Date getEvaluatetime() {
    return this.evaluatetime;
   }

   public void setEvaluatetime(Date evaluatetime) {
    this.evaluatetime = evaluatetime;
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

   public Evaluate() {
   }
}