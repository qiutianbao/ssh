package com.yinli.item.vo;

/**
 * 创建日期:2013-11-07
 */

public class T_available_no implements java.io.Serializable {
   //ID
   private String idNumber;
  //机构码
   private String inst_no;

  //名称
   private String name;

  //当前可用编号
   private Integer crt_no;

  //起始编号
   private Integer bgn_no;

  //间隔
   private Integer inv;

  //最大编号
   private Integer max_no;

  //预警比例
   private Double warn_rate;

   public String getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(String idNumber){
    this.idNumber = idNumber;
   }

   public String getInst_no() {
    return this.inst_no;
   }

   public void setInst_no(String inst_no) {
    this.inst_no = inst_no;
   }

   public String getName() {
    return this.name;
   }

   public void setName(String name) {
    this.name = name;
   }

   public Integer getCrt_no() {
	return crt_no;
}

public void setCrt_no(Integer crtNo) {
	crt_no = crtNo;
}

public Integer getBgn_no() {
	return bgn_no;
}

public void setBgn_no(Integer bgnNo) {
	bgn_no = bgnNo;
}

public Integer getInv() {
	return inv;
}

public void setInv(Integer inv) {
	this.inv = inv;
}

public Integer getMax_no() {
	return max_no;
}

public void setMax_no(Integer maxNo) {
	max_no = maxNo;
}

public Double getWarn_rate() {
	return warn_rate;
}

public void setWarn_rate(Double warnRate) {
	warn_rate = warnRate;
}

public T_available_no() {
   }
}