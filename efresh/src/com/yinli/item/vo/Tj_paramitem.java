package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Tj_paramitem implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //参数值
   private String PARA;

  //参数标识
   private String PARAMETERID;

  //参数名称
   private String PARAMETERNAME;

  //参数简称
   private String ABNAME;

  //参数级别
   private String PARAMLEVEL;

  //参数说明
   private String PARAMETERMEMO;

  //排序编号
   private Integer SORTNUM;

  //上级参数值
   private String SP_PARAMVALUE;

  //上级参数标识
   private String SP_PARAMID;

  //是否叶子节点
   private String IF_NODE;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public String getPARA() {
    return this.PARA;
   }

   public void setPARA(String PARA) {
    this.PARA = PARA;
   }

   public String getPARAMETERID() {
    return this.PARAMETERID;
   }

   public void setPARAMETERID(String PARAMETERID) {
    this.PARAMETERID = PARAMETERID;
   }

   public String getPARAMETERNAME() {
    return this.PARAMETERNAME;
   }

   public void setPARAMETERNAME(String PARAMETERNAME) {
    this.PARAMETERNAME = PARAMETERNAME;
   }

   public String getABNAME() {
    return this.ABNAME;
   }

   public void setABNAME(String ABNAME) {
    this.ABNAME = ABNAME;
   }

   public String getPARAMLEVEL() {
    return this.PARAMLEVEL;
   }

   public void setPARAMLEVEL(String PARAMLEVEL) {
    this.PARAMLEVEL = PARAMLEVEL;
   }

   public String getPARAMETERMEMO() {
    return this.PARAMETERMEMO;
   }

   public void setPARAMETERMEMO(String PARAMETERMEMO) {
    this.PARAMETERMEMO = PARAMETERMEMO;
   }

   public Integer getSORTNUM() {
    return this.SORTNUM;
   }

   public void setSORTNUM(Integer SORTNUM) {
    this.SORTNUM = SORTNUM;
   }

   public String getSP_PARAMVALUE() {
    return this.SP_PARAMVALUE;
   }

   public void setSP_PARAMVALUE(String SP_PARAMVALUE) {
    this.SP_PARAMVALUE = SP_PARAMVALUE;
   }

   public String getSP_PARAMID() {
    return this.SP_PARAMID;
   }

   public void setSP_PARAMID(String SP_PARAMID) {
    this.SP_PARAMID = SP_PARAMID;
   }

   public String getIF_NODE() {
    return this.IF_NODE;
   }

   public void setIF_NODE(String IF_NODE) {
    this.IF_NODE = IF_NODE;
   }

   public Tj_paramitem() {
   }
}