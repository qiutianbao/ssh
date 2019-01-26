package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-28
 */

public class Secondlevelorder implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //二级订单编号
   private String secondlevelorderNo;

  //店铺主键
   private Integer idStore;
  

  //下单人主键
   private Integer idUser;
  

  //下单时间
   private Date creationordertime;
   //下单截止时间
   private Date creationordertime2;

  //订单状态
   private Integer orderstatus;

  //到货时间
   private Date arrivaltime;
   //到货截止时间
   private Date arrivaltime2;

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

  //取消订单时间
   private Date canceltime;

  //支付时间
   private Date paytime;

  //发货时间
   private Date deliverytime;

  //签收时间
   private Date signtime;

  //订单总价
   private Double orderprice;

  //签收人名称
   private String signname;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public String getSecondlevelorderNo() {
    return this.secondlevelorderNo;
   }

   public void setSecondlevelorderNo(String secondlevelorderNo) {
    this.secondlevelorderNo = secondlevelorderNo;
   }

   public Integer getIdStore() {
    return this.idStore;
   }

   public void setIdStore(Integer idStore) {
    this.idStore = idStore;
   }

   public Integer getIdUser() {
    return this.idUser;
   }

   public void setIdUser(Integer idUser) {
    this.idUser = idUser;
   }

   public Date getCreationordertime() {
    return this.creationordertime;
   }

   public void setCreationordertime(Date creationordertime) {
    this.creationordertime = creationordertime;
   }

   public Integer getOrderstatus() {
    return this.orderstatus;
   }

   public void setOrderstatus(Integer orderstatus) {
    this.orderstatus = orderstatus;
   }

   public Date getArrivaltime() {
    return this.arrivaltime;
   }

   public void setArrivaltime(Date arrivaltime) {
    this.arrivaltime = arrivaltime;
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

   public Date getCanceltime() {
    return this.canceltime;
   }

   public void setCanceltime(Date canceltime) {
    this.canceltime = canceltime;
   }

   public Date getPaytime() {
    return this.paytime;
   }

   public void setPaytime(Date paytime) {
    this.paytime = paytime;
   }

   public Date getDeliverytime() {
    return this.deliverytime;
   }

   public void setDeliverytime(Date deliverytime) {
    this.deliverytime = deliverytime;
   }

   public Date getSigntime() {
    return this.signtime;
   }

   public void setSigntime(Date signtime) {
    this.signtime = signtime;
   }

   public Double getOrderprice() {
    return this.orderprice;
   }

   public void setOrderprice(Double orderprice) {
    this.orderprice = orderprice;
   }

   public String getSignname() {
    return this.signname;
   }

   public void setSignname(String signname) {
    this.signname = signname;
   }

public Date getCreationordertime2() {
	return creationordertime2;
}

public void setCreationordertime2(Date creationordertime2) {
	this.creationordertime2 = creationordertime2;
}

public Date getArrivaltime2() {
	return arrivaltime2;
}

public void setArrivaltime2(Date arrivaltime2) {
	this.arrivaltime2 = arrivaltime2;
}

public Secondlevelorder() {
   }
}