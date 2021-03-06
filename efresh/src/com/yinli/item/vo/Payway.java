package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Payway implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //支付方式编码，0=e币支付，1=支付宝支付，2=银联支付，3=微信支付
   private Integer waycode;

  //支付方式名称
   private String wayname;

  //支付方式状态，0=开通，1=关闭
   private Integer status;

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

   public Integer getWaycode() {
    return this.waycode;
   }

   public void setWaycode(Integer waycode) {
    this.waycode = waycode;
   }

   public String getWayname() {
    return this.wayname;
   }

   public void setWayname(String wayname) {
    this.wayname = wayname;
   }

   public Integer getStatus() {
    return this.status;
   }

   public void setStatus(Integer status) {
    this.status = status;
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

   public Payway() {
   }
}