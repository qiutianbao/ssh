package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Store_product implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //产地风采表主键
   private Integer idStoreStyle;

  //主营产品名称
   private String productname;

  //图片名称
   private String imgname;

  //时间戳
   private String ts;

  //删除标志
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

   public String getProductname() {
    return this.productname;
   }

   public void setProductname(String productname) {
    this.productname = productname;
   }

   public String getImgname() {
    return this.imgname;
   }

   public void setImgname(String imgname) {
    this.imgname = imgname;
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

   public Store_product() {
   }
}