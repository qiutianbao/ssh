package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Userscore implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //评分人主键
   private Integer idScore;

  //订单编号
   private String orderNo;

  //商品名称
   private String commodity;

  //产地
   private String originaddress;

  //评分
   private Integer score;

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

   public Integer getIdScore() {
    return this.idScore;
   }

   public void setIdScore(Integer idScore) {
    this.idScore = idScore;
   }

   public String getOrderNo() {
    return this.orderNo;
   }

   public void setOrderNo(String orderNo) {
    this.orderNo = orderNo;
   }

   public String getCommodity() {
    return this.commodity;
   }

   public void setCommodity(String commodity) {
    this.commodity = commodity;
   }

   public String getOriginaddress() {
    return this.originaddress;
   }

   public void setOriginaddress(String originaddress) {
    this.originaddress = originaddress;
   }

   public Integer getScore() {
    return this.score;
   }

   public void setScore(Integer score) {
    this.score = score;
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

   public Userscore() {
   }
}