package com.yinli.item.vo;

/**
 * 创建日期:2014-03-21
 */

public class T_serviceCondition implements java.io.Serializable {
   //ID
   private String idNumber;
  //支行名称
   private String inst_name;

   
   private String  xh;


//网点编码
   private String brno;

  //网点名称
   private String brno_name;

  //点击次数
   private String cn;

  //开始日期
   private String startDay;

  //结束日期
   private String endDay;

   public String getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(String idNumber){
    this.idNumber = idNumber;
   }

   public String getInst_name() {
    return this.inst_name;
   }

   public void setInst_name(String inst_name) {
    this.inst_name = inst_name;
   }

   public String getBrno() {
    return this.brno;
   }

   public void setBrno(String brno) {
    this.brno = brno;
   }

   public String getBrno_name() {
    return this.brno_name;
   }

   public void setBrno_name(String brno_name) {
    this.brno_name = brno_name;
   }

   public String getCn() {
    return this.cn;
   }

   public void setCn(String cn) {
    this.cn = cn;
   }

   public String getStartDay() {
    return this.startDay;
   }

   public void setStartDay(String startDay) {
    this.startDay = startDay;
   }

   public String getEndDay() {
    return this.endDay;
   }

   public void setEndDay(String endDay) {
    this.endDay = endDay;
   }
   public String getXh() {
		return xh;
	}

	public void setXh(String xh) {
		this.xh = xh;
	}
   public T_serviceCondition() {
   }
}