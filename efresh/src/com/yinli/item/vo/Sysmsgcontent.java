package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Sysmsgcontent implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //系统消息主键
   private Integer idSysmessge;

  //消息内容
   private String msgcontent;

  //时间戳
   private String ts;

  //删除标志
   private Integer dr;

  //预留字段1
   private String back1;

  //子标题
   private String subTitle;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public Integer getIdSysmessge() {
    return this.idSysmessge;
   }

   public void setIdSysmessge(Integer idSysmessge) {
    this.idSysmessge = idSysmessge;
   }

   public String getMsgcontent() {
    return this.msgcontent;
   }

   public void setMsgcontent(String msgcontent) {
    this.msgcontent = msgcontent;
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

   public String getSubTitle() {
    return this.subTitle;
   }

   public void setSubTitle(String subTitle) {
    this.subTitle = subTitle;
   }

   public Sysmsgcontent() {
   }
}