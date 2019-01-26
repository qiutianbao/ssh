package com.yinli.item.vo;

/**
 * 创建日期:2013-11-07
 */

public class T_inst_mgmt implements java.io.Serializable {
   //ID
   private String idNumber;
  //机构状态
   private String inst_busn_stat;

  //联系人
   private String contact_psn;

   
   private T_inst_mgmt t_inst_mgmt;
  public T_inst_mgmt getT_inst_mgmt() {
	return t_inst_mgmt;
}

public void setT_inst_mgmt(T_inst_mgmt tInstMgmt) {
	t_inst_mgmt = tInstMgmt;
}

//电话
   private String phone;

  //地址
   private String address;

  //所属上级机构
   private String up_inst_no;

  //机构名称
   private String inst_name;

   
   //不使用
   private String brno;
   
   public T_inst_mgmt(String idNumber){
	   this.idNumber=idNumber;
   }
   
  public T_inst_mgmt(String idNumber, String instBusnStat, String contactPsn,
		T_inst_mgmt tInstMgmt, String phone, String address, String upInstNo,
		String instName, String brno, String instType) {
	super();
	this.idNumber = idNumber;
	inst_busn_stat = instBusnStat;
	contact_psn = contactPsn;
	t_inst_mgmt = tInstMgmt;
	this.phone = phone;
	this.address = address;
	up_inst_no = upInstNo;
	inst_name = instName;
	this.brno = brno;
	inst_type = instType;
}

public String getBrno() {
	return brno;
}

public void setBrno(String brno) {
	this.brno = brno;
}

//机构种类
   private String inst_type;

   public String getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(String idNumber){
    this.idNumber = idNumber;
   }

   public String getInst_busn_stat() {
    return this.inst_busn_stat;
   }

   public void setInst_busn_stat(String inst_busn_stat) {
    this.inst_busn_stat = inst_busn_stat;
   }

   public String getContact_psn() {
    return this.contact_psn;
   }

   public void setContact_psn(String contact_psn) {
    this.contact_psn = contact_psn;
   }

   public String getPhone() {
    return this.phone;
   }

   public void setPhone(String phone) {
    this.phone = phone;
   }

   public String getAddress() {
    return this.address;
   }

   public void setAddress(String address) {
    this.address = address;
   }

   public String getUp_inst_no() {
    return this.up_inst_no;
   }

   public void setUp_inst_no(String up_inst_no) {
    this.up_inst_no = up_inst_no;
   }

   public String getInst_name() {
    return this.inst_name;
   }

   public void setInst_name(String inst_name) {
    this.inst_name = inst_name;
   }

   public String getInst_type() {
    return this.inst_type;
   }

   public void setInst_type(String inst_type) {
    this.inst_type = inst_type;
   }

   public T_inst_mgmt() {
   }
}