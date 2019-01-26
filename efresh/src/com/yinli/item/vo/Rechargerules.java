package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-27
 */

public class Rechargerules implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //概述
   private String summary;

  //小标题
   private String title;

  //内容
   private String content;

  //规则类型
   private String ruleType;

  //状态
   private String stats;

  //时间戳
   private String ts;

  //删除标志
   private Integer dr;

  //备用字段1
   private String back1;

  //备用字段2
   private String back2;

  //备用字段3
   private String back3;

  //备用字段4
   private String back4;

  //备用字段5
   private Double back5;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public String getSummary() {
    return this.summary;
   }

   public void setSummary(String summary) {
    this.summary = summary;
   }

   public String getTitle() {
    return this.title;
   }

   public void setTitle(String title) {
    this.title = title;
   }

   public String getContent() {
    return this.content;
   }

   public void setContent(String content) {
    this.content = content;
   }

   public String getRuleType() {
    return this.ruleType;
   }

   public void setRuleType(String ruleType) {
    this.ruleType = ruleType;
   }

   public String getStats() {
    return this.stats;
   }

   public void setStats(String stats) {
    this.stats = stats;
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

   public Rechargerules() {
   }
}