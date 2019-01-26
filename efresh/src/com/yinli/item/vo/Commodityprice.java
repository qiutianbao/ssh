package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Commodityprice implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //开始时间
   private Date starttime;

  //结束时间
   private Date endtime;

  //单价
   private Double price;

  //商品表主键
   private Integer idCommodity;

  //商品级别表主键
   private Integer idLevel;

  //时间戳
   private String ts;

  //删除标志
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

   public Date getStarttime() {
    return this.starttime;
   }

   public void setStarttime(Date starttime) {
    this.starttime = starttime;
   }

   public Date getEndtime() {
    return this.endtime;
   }

   public void setEndtime(Date endtime) {
    this.endtime = endtime;
   }

   public Double getPrice() {
    return this.price;
   }

   public void setPrice(Double price) {
    this.price = price;
   }

   public Integer getIdCommodity() {
    return this.idCommodity;
   }

   public void setIdCommodity(Integer idCommodity) {
    this.idCommodity = idCommodity;
   }

   public Integer getIdLevel() {
    return this.idLevel;
   }

   public void setIdLevel(Integer idLevel) {
    this.idLevel = idLevel;
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

   public Commodityprice() {
   }
}