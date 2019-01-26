package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-27
 */

public class Estore implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //企业logo图片名称
   private String corplogo;

  //企业名字
   private String corpname;

  //注册号
   private String creationNo;

  //组织机构代码证
   private String organization;
   
   //省
   private String province;
   
   //市
   private String city;
   
   //区
   private String area;

  //产地详细地址
   private String address;

  //法人名字
   private String legalname;

  //法人身份证号码
   private String id;

  //证件截止有效期
   private String validtime;

  //法人手机号
   private String legalphoneNo;

  //法人QQ号
   private String legalqq;

  //法人微信号
   private String legalwechat;

  //企业营业执照副本图
   private String businesslic;

  //法人身份证正面图
   private String idpositive;

  //法人身份证反面图
   private String idopposite;

  //银行开户名
   private String accountname;

  //开户银行
   private String accountbank;

  //银行所在地
   private String bankaddress;

  //银行账户
   private String bankaccount;

  //最迟确认订单时间
   private String validordertime;

  //处理订单时间
   private String handleordertime;

  //最快到货时间
   private String deliverytime;

  //登录密码
   private String password;

  //联系人名字
   private String contactname;

  //联系人电话
   private String contactphoneNo;

  //联系人QQ
   private String contactqq;

  //联系人微信
   private String contactwechat;

  //注册时间
   private String creationtime;
   
   //商家审核状态
   private String status;

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

  //用户表主键
   private Integer userid;

  //是否停运
   private String isStop;

  //是否自营店铺
   private String selftsales;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public String getCorplogo() {
    return this.corplogo;
   }

   public void setCorplogo(String corplogo) {
    this.corplogo = corplogo;
   }

   public String getCorpname() {
    return this.corpname;
   }

   public void setCorpname(String corpname) {
    this.corpname = corpname;
   }

   public String getCreationNo() {
    return this.creationNo;
   }

   public void setCreationNo(String creationNo) {
    this.creationNo = creationNo;
   }

   public String getOrganization() {
    return this.organization;
   }

   public void setOrganization(String organization) {
    this.organization = organization;
   }

   public String getAddress() {
    return this.address;
   }

   public void setAddress(String address) {
    this.address = address;
   }

   public String getLegalname() {
    return this.legalname;
   }

   public void setLegalname(String legalname) {
    this.legalname = legalname;
   }

   public String getId() {
    return this.id;
   }

   public void setId(String id) {
    this.id = id;
   }

   public String getValidtime() {
    return this.validtime;
   }

   public void setValidtime(String validtime) {
    this.validtime = validtime;
   }

   public String getLegalphoneNo() {
    return this.legalphoneNo;
   }

   public void setLegalphoneNo(String legalphoneNo) {
    this.legalphoneNo = legalphoneNo;
   }

   public String getLegalqq() {
    return this.legalqq;
   }

   public void setLegalqq(String legalqq) {
    this.legalqq = legalqq;
   }

   public String getLegalwechat() {
    return this.legalwechat;
   }

   public void setLegalwechat(String legalwechat) {
    this.legalwechat = legalwechat;
   }

   public String getBusinesslic() {
    return this.businesslic;
   }

   public void setBusinesslic(String businesslic) {
    this.businesslic = businesslic;
   }

   public String getIdpositive() {
    return this.idpositive;
   }

   public void setIdpositive(String idpositive) {
    this.idpositive = idpositive;
   }

   public String getIdopposite() {
    return this.idopposite;
   }

   public void setIdopposite(String idopposite) {
    this.idopposite = idopposite;
   }

   public String getAccountname() {
    return this.accountname;
   }

   public void setAccountname(String accountname) {
    this.accountname = accountname;
   }

   public String getAccountbank() {
    return this.accountbank;
   }

   public void setAccountbank(String accountbank) {
    this.accountbank = accountbank;
   }

   public String getBankaddress() {
    return this.bankaddress;
   }

   public void setBankaddress(String bankaddress) {
    this.bankaddress = bankaddress;
   }

   public String getBankaccount() {
    return this.bankaccount;
   }

   public void setBankaccount(String bankaccount) {
    this.bankaccount = bankaccount;
   }

   public String getPassword() {
    return this.password;
   }

   public void setPassword(String password) {
    this.password = password;
   }

   public String getContactname() {
    return this.contactname;
   }

   public void setContactname(String contactname) {
    this.contactname = contactname;
   }

   public String getContactphoneNo() {
    return this.contactphoneNo;
   }

   public void setContactphoneNo(String contactphoneNo) {
    this.contactphoneNo = contactphoneNo;
   }

   public String getContactqq() {
    return this.contactqq;
   }

   public void setContactqq(String contactqq) {
    this.contactqq = contactqq;
   }

   public String getContactwechat() {
    return this.contactwechat;
   }

   public void setContactwechat(String contactwechat) {
    this.contactwechat = contactwechat;
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

   public Integer getUserid() {
    return this.userid;
   }

   public void setUserid(Integer userid) {
    this.userid = userid;
   }

   public String getIsStop() {
    return this.isStop;
   }

   public void setIsStop(String isStop) {
    this.isStop = isStop;
   }

   public String getSelftsales() {
    return this.selftsales;
   }

   public void setSelftsales(String selftsales) {
    this.selftsales = selftsales;
   }

   
   
   public String getValidordertime() {
	return validordertime;
}

public void setValidordertime(String validordertime) {
	this.validordertime = validordertime;
}

public String getHandleordertime() {
	return handleordertime;
}

public void setHandleordertime(String handleordertime) {
	this.handleordertime = handleordertime;
}

public String getDeliverytime() {
	return deliverytime;
}

public void setDeliverytime(String deliverytime) {
	this.deliverytime = deliverytime;
}

public String getCreationtime() {
	return creationtime;
}

public void setCreationtime(String creationtime) {
	this.creationtime = creationtime;
}


public String getProvince() {
	return province;
}

public void setProvince(String province) {
	this.province = province;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}

public String getArea() {
	return area;
}

public void setArea(String area) {
	this.area = area;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public Estore() {
   }
   
   public Estore(Integer idNumber,String corpname,String address,String businesslic,String idpositive) {
	   this.idNumber = idNumber;
	   this.corpname = corpname;
	   this.address = address;
	   this.businesslic = businesslic;
	   this.idpositive = idpositive;
   }
}