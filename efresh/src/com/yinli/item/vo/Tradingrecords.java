package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Tradingrecords implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //用户主键
   private Integer idUser;

  //账户主键
   private Integer idUseraccount;

  //订单主键，充值也是订单，购买商品也是订单，
   private Integer idOrder;

  //支付方式表主键
   private Integer idPayway;

  //交易金额
   private Double tradingamount;

  //交易类型，0=充值，1=支出，2=退款，3=转出
   private Integer tradingtype;

  //交易时间
   private Date tradingtime;

  //交易单号
   private String tradingNo;

  //备注
   private String note;

  //交易状态，0=待审核，1=支付成功，2=支付失败
   private Integer tradingstatus;

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

   public Integer getIdUser() {
    return this.idUser;
   }

   public void setIdUser(Integer idUser) {
    this.idUser = idUser;
   }

   public Integer getIdUseraccount() {
    return this.idUseraccount;
   }

   public void setIdUseraccount(Integer idUseraccount) {
    this.idUseraccount = idUseraccount;
   }

   public Integer getIdOrder() {
    return this.idOrder;
   }

   public void setIdOrder(Integer idOrder) {
    this.idOrder = idOrder;
   }

   public Integer getIdPayway() {
    return this.idPayway;
   }

   public void setIdPayway(Integer idPayway) {
    this.idPayway = idPayway;
   }

   public Double getTradingamount() {
    return this.tradingamount;
   }

   public void setTradingamount(Double tradingamount) {
    this.tradingamount = tradingamount;
   }

   public Integer getTradingtype() {
    return this.tradingtype;
   }

   public void setTradingtype(Integer tradingtype) {
    this.tradingtype = tradingtype;
   }

   public Date getTradingtime() {
    return this.tradingtime;
   }

   public void setTradingtime(Date tradingtime) {
    this.tradingtime = tradingtime;
   }

   public String getTradingNo() {
    return this.tradingNo;
   }

   public void setTradingNo(String tradingNo) {
    this.tradingNo = tradingNo;
   }

   public String getNote() {
    return this.note;
   }

   public void setNote(String note) {
    this.note = note;
   }

   public Integer getTradingstatus() {
    return this.tradingstatus;
   }

   public void setTradingstatus(Integer tradingstatus) {
    this.tradingstatus = tradingstatus;
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

   public Tradingrecords() {
   }
}