package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Storebrand implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //品牌名称
   private String brandname;

  //店铺表主键
   private Integer idStore;

  //时间戳
   private String ts;

  //删除标识
   private Integer dr;

  //预留字段1
   private String back1;

  //预留字段2
   private String back2;

  //预留字段3
   private Double back3;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public String getBrandname() {
    return this.brandname;
   }

   public void setBrandname(String brandname) {
    this.brandname = brandname;
   }

   public Integer getIdStore() {
    return this.idStore;
   }

   public void setIdStore(Integer idStore) {
    this.idStore = idStore;
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

   public Double getBack3() {
    return this.back3;
   }

   public void setBack3(Double back3) {
    this.back3 = back3;
   }

   public Storebrand() {
   }
   
   public Storebrand(Integer idName,String brandname) {
	   this.idNumber = idName;
	   this.brandname = brandname;
   }
   
}