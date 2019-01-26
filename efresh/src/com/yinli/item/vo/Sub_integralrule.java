package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Sub_integralrule implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //积分规则主表主键
   private Integer idIntegralrule;

  //标题
   private String title;

  //描述
   private String note;

  //序号
   private Integer serial;

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

   public Integer getIdIntegralrule() {
    return this.idIntegralrule;
   }

   public void setIdIntegralrule(Integer idIntegralrule) {
    this.idIntegralrule = idIntegralrule;
   }

   public String getTitle() {
    return this.title;
   }

   public void setTitle(String title) {
    this.title = title;
   }

   public String getNote() {
    return this.note;
   }

   public void setNote(String note) {
    this.note = note;
   }

   public Integer getSerial() {
    return this.serial;
   }

   public void setSerial(Integer serial) {
    this.serial = serial;
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

   public Sub_integralrule() {
   }
}