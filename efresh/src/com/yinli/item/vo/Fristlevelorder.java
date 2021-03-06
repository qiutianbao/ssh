package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-22
 */

public class Fristlevelorder implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //发货时间
   private Date deliverytime;

  //签收时间
   private Date signtime;

  //收货地址
   private String arrivaladdress;

  //收货人
   private String arrivalpeople;

  //收货人电话
   private String arrivalpeopletel;

  //归集开始时间
   private Date collectionstarttime;

  //归集结束时间
   private Date collectionendtime;

  //订单总价
   private Double orderprice;

  //时间戳
   private String ts;

  //删除标识
   private Integer dr;

  //一级订单编号
   private String firstlevelorderNo;

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

  //订单状态
   private Integer orderstatus;

  //店铺主键
   private Integer idStore;

  //下单人主键
   private Integer idUser;

  //下单时间
   private Date creationordertime;
   
   //下单时间（用做查询条件，没有映射数据库）
   private Date creationordertime2;

  //到货时间
   private Date arrivaltime;
   
   //到货时间（用做查询条件，没有映射数据库）
   private Date arrivaltime2;

  //支付时间
   private Date paytime;

  //取消订单时间
   private Date canceltime;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
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

   public String getArrivaladdress() {
    return this.arrivaladdress;
   }

   public void setArrivaladdress(String arrivaladdress) {
    this.arrivaladdress = arrivaladdress;
   }

   public String getArrivalpeople() {
    return this.arrivalpeople;
   }

   public void setArrivalpeople(String arrivalpeople) {
    this.arrivalpeople = arrivalpeople;
   }

   public String getArrivalpeopletel() {
    return this.arrivalpeopletel;
   }

   public void setArrivalpeopletel(String arrivalpeopletel) {
    this.arrivalpeopletel = arrivalpeopletel;
   }

   public Date getCollectionstarttime() {
    return this.collectionstarttime;
   }

   public void setCollectionstarttime(Date collectionstarttime) {
    this.collectionstarttime = collectionstarttime;
   }

   public Date getCollectionendtime() {
    return this.collectionendtime;
   }

   public void setCollectionendtime(Date collectionendtime) {
    this.collectionendtime = collectionendtime;
   }

   public Double getOrderprice() {
    return this.orderprice;
   }

   public void setOrderprice(Double orderprice) {
    this.orderprice = orderprice;
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

   public String getFirstlevelorderNo() {
    return this.firstlevelorderNo;
   }

   public void setFirstlevelorderNo(String firstlevelorderNo) {
    this.firstlevelorderNo = firstlevelorderNo;
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

   public Integer getOrderstatus() {
    return this.orderstatus;
   }

   public void setOrderstatus(Integer orderstatus) {
    this.orderstatus = orderstatus;
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

   public Date getArrivaltime() {
    return this.arrivaltime;
   }

   public void setArrivaltime(Date arrivaltime) {
    this.arrivaltime = arrivaltime;
   }

   public Date getPaytime() {
    return this.paytime;
   }

   public void setPaytime(Date paytime) {
    this.paytime = paytime;
   }

   public Date getCanceltime() {
    return this.canceltime;
   }

   public void setCanceltime(Date canceltime) {
    this.canceltime = canceltime;
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

public Fristlevelorder() {
   }
}