package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Integralexchange implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //兑换人主键
   private Integer idUser;

  //兑换积分
   private Integer spendintegral;

  //兑换时间
   private Date exchangetime;

  //兑换物品主键
   private Integer idCommodity;

  //时间戳
   private String ts;

  //删除标识
   private Integer dr;

  //预留字段1
   private String back1;

  //预留字段2
   private String back2;

  //预留字段3
   private String back3;

  //预留字段4
   private String back4;

  //预留字段5
   private Double back5;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public Integer getIdUser() {
    return this.idUser;
   }

   public void setIdUser(Integer idUser) {
    this.idUser = idUser;
   }

   public Integer getSpendintegral() {
    return this.spendintegral;
   }

   public void setSpendintegral(Integer spendintegral) {
    this.spendintegral = spendintegral;
   }

   public Date getExchangetime() {
    return this.exchangetime;
   }

   public void setExchangetime(Date exchangetime) {
    this.exchangetime = exchangetime;
   }

   public Integer getIdCommodity() {
    return this.idCommodity;
   }

   public void setIdCommodity(Integer idCommodity) {
    this.idCommodity = idCommodity;
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

   public String getBack2() {
    return this.back2;
   }

   public void setBack2(String back2) {
    this.back2 = back2;
   }

   public String getBack3() {
    return this.back3;
   }

   public void setBack3(String back3) {
    this.back3 = back3;
   }

   public String getBack4() {
    return this.back4;
   }

   public void setBack4(String back4) {
    this.back4 = back4;
   }

   public Double getBack5() {
    return this.back5;
   }

   public void setBack5(Double back5) {
    this.back5 = back5;
   }

   public Integralexchange() {
   }
}