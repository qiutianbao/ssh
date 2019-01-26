package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Category implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //上级分类编码
   private String superiorcode;

  //分类名称
   private String categoryname;

  //自身分类编码
   private String seflcode;

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

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public String getSuperiorcode() {
    return this.superiorcode;
   }

   public void setSuperiorcode(String superiorcode) {
    this.superiorcode = superiorcode;
   }

   public String getCategoryname() {
    return this.categoryname;
   }

   public void setCategoryname(String categoryname) {
    this.categoryname = categoryname;
   }

   public String getSeflcode() {
    return this.seflcode;
   }

   public void setSeflcode(String seflcode) {
    this.seflcode = seflcode;
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

   public Category() {
   }
}