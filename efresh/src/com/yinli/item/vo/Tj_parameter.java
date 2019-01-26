package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Tj_parameter implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //参数标识
   private String PARAMETERID;

  //参数说明
   private String PARAMETERMEMO;

  //参数类型
   private String PARAMETYPE;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public String getPARAMETERID() {
    return this.PARAMETERID;
   }

   public void setPARAMETERID(String PARAMETERID) {
    this.PARAMETERID = PARAMETERID;
   }

   public String getPARAMETERMEMO() {
    return this.PARAMETERMEMO;
   }

   public void setPARAMETERMEMO(String PARAMETERMEMO) {
    this.PARAMETERMEMO = PARAMETERMEMO;
   }

   public String getPARAMETYPE() {
    return this.PARAMETYPE;
   }

   public void setPARAMETYPE(String PARAMETYPE) {
    this.PARAMETYPE = PARAMETYPE;
   }

   public Tj_parameter() {
   }
}