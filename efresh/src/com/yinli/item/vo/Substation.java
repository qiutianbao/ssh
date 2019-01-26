package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Substation implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //ip地址
   private String ipaddress;

  //数据库名称
   private String dbname;

  //端口号
   private String portNo;

  //用户名
   private String username;

  //密码
   private String password;

  //时间戳
   private String ts;

  //删除标志
   private Integer dr;

  //预留字段1
   private String back1;

  //预留字段2
   private String back2;

  //预留字段3
   private Double back3;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public String getIpaddress() {
    return this.ipaddress;
   }

   public void setIpaddress(String ipaddress) {
    this.ipaddress = ipaddress;
   }

   public String getDbname() {
    return this.dbname;
   }

   public void setDbname(String dbname) {
    this.dbname = dbname;
   }

   public String getPortNo() {
    return this.portNo;
   }

   public void setPortNo(String portNo) {
    this.portNo = portNo;
   }

   public String getUsername() {
    return this.username;
   }

   public void setUsername(String username) {
    this.username = username;
   }

   public String getPassword() {
    return this.password;
   }

   public void setPassword(String password) {
    this.password = password;
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

   public Double getBack3() {
    return this.back3;
   }

   public void setBack3(Double back3) {
    this.back3 = back3;
   }

   public Substation() {
   }
}