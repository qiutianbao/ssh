package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Useraccount implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //账号，按一定规则给一个唯一账号，建议与用户主键做组合索引
   private String account;

  //用户主键
   private Integer idUser;

  //账户余额，账户总余额=账户余额+收益金额
   private Double balance;

  //可用款余额，可用款交易类型为充值，交易状态为支付成功的才是可用款，收益全部都是可用款，可用款总额=审核通过后的账户可用款+收益金额
   private Double availablemoney;

  //不可用款，就是交易状态为：待审核的，交易类型为充值的都是不可用款
   private Double notavailablemoney;

  //是否设置交易密码
   private String isSetpassword;

  //交易密码
   private String paypassword;

  //创建账户时间
   private Date creationtime;

  //设置交易密码时间
   private Date setpaypwdtime;

  //修改交易密码时间
   private Date modifypaypwdtime;

  //上次修改交易密码时间
   private Date upmodifypaypwdtime;

  //是否冻结
   private String isfrozen;

  //时间戳
   private String ts;

  //删除标识
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

   public String getAccount() {
    return this.account;
   }

   public void setAccount(String account) {
    this.account = account;
   }

   public Integer getIdUser() {
    return this.idUser;
   }

   public void setIdUser(Integer idUser) {
    this.idUser = idUser;
   }

   public Double getBalance() {
    return this.balance;
   }

   public void setBalance(Double balance) {
    this.balance = balance;
   }

   public Double getAvailablemoney() {
    return this.availablemoney;
   }

   public void setAvailablemoney(Double availablemoney) {
    this.availablemoney = availablemoney;
   }

   public Double getNotavailablemoney() {
    return this.notavailablemoney;
   }

   public void setNotavailablemoney(Double notavailablemoney) {
    this.notavailablemoney = notavailablemoney;
   }

   public String getIsSetpassword() {
    return this.isSetpassword;
   }

   public void setIsSetpassword(String isSetpassword) {
    this.isSetpassword = isSetpassword;
   }

   public String getPaypassword() {
    return this.paypassword;
   }

   public void setPaypassword(String paypassword) {
    this.paypassword = paypassword;
   }

   public Date getCreationtime() {
    return this.creationtime;
   }

   public void setCreationtime(Date creationtime) {
    this.creationtime = creationtime;
   }

   public Date getSetpaypwdtime() {
    return this.setpaypwdtime;
   }

   public void setSetpaypwdtime(Date setpaypwdtime) {
    this.setpaypwdtime = setpaypwdtime;
   }

   public Date getModifypaypwdtime() {
    return this.modifypaypwdtime;
   }

   public void setModifypaypwdtime(Date modifypaypwdtime) {
    this.modifypaypwdtime = modifypaypwdtime;
   }

   public Date getUpmodifypaypwdtime() {
    return this.upmodifypaypwdtime;
   }

   public void setUpmodifypaypwdtime(Date upmodifypaypwdtime) {
    this.upmodifypaypwdtime = upmodifypaypwdtime;
   }

   public String getIsfrozen() {
    return this.isfrozen;
   }

   public void setIsfrozen(String isfrozen) {
    this.isfrozen = isfrozen;
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

   public Useraccount() {
   }
}