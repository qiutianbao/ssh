package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Store_images implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //风采表主键
   private Integer idStoreStyle;

  //图片名称
   private String imagename;

  //时间戳
   private String ts;

  //删除标识
   private Integer dr;

  //预留字段1
   private String back1;

  //预留字段2
   private String back2;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public Integer getIdStoreStyle() {
    return this.idStoreStyle;
   }

   public void setIdStoreStyle(Integer idStoreStyle) {
    this.idStoreStyle = idStoreStyle;
   }

   public String getImagename() {
    return this.imagename;
   }

   public void setImagename(String imagename) {
    this.imagename = imagename;
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

   public Store_images() {
   }
}