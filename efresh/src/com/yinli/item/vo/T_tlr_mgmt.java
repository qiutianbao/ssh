package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-28
 */

public class T_tlr_mgmt implements java.io.Serializable {
   //ID
   private Integer idNumber;
  //手机号
   private String phone;

  //用户名称
   private String tlr_name;

  //机构编号
   private String inst_no;

  //用户类型、0=买家、1=卖家、2=系统用户
   private String tlr_type;
   private String tlr_pwd;
 //是否锁定
   private String islock;

  //用户状态
   private String tlr_stat;

   //省
    private String province;

    //市
     private String city;

     //区
      private String area;
      
      private String provinceup;
      private String cityup;
      private String areaup;
      private String phoneup;
      private String nameup;
      public String getProvinceup() {
		return provinceup;
	}

	public void setProvinceup(String provinceup) {
		this.provinceup = provinceup;
	}

	public String getCityup() {
		return cityup;
	}

	public void setCityup(String cityup) {
		this.cityup = cityup;
	}

	public String getAreaup() {
		return areaup;
	}

	public void setAreaup(String areaup) {
		this.areaup = areaup;
	}

	public String getPhoneup() {
		return phoneup;
	}

	public void setPhoneup(String phoneup) {
		this.phoneup = phoneup;
	}

	public String getNameup() {
		return nameup;
	}

	public void setNameup(String nameup) {
		this.nameup = nameup;
	}

	public String getStallsnameup() {
		return stallsnameup;
	}

	public void setStallsnameup(String stallsnameup) {
		this.stallsnameup = stallsnameup;
	}

	public String getUpdate_status() {
		return update_status;
	}

	public void setUpdate_status(String update_status) {
		this.update_status = update_status;
	}

	private String stallsnameup;
      private String update_status;
  //密码
   
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

private String tlr_new_pwd;
  public String getTlr_new_pwd() {
	return tlr_new_pwd;
}

public void setTlr_new_pwd(String tlrNewPwd) {
	tlr_new_pwd = tlrNewPwd;
}



  //收货地址
   private String deliveryaddress;

  //档口名称
   private String stallsname;

  //注册时间
   private Date creationtime;

  //用户logo
   private String userlogo;

  //审核是否通过
   private String examine;

  //最近密码修改时间
   private String lst_pwd_date;

  //最近修改人
   private String lst_modify_tlr;

  //最近修改时间
   private String lst_modify_date;

  //申请收货地址
   private String deliveryaddress2;

  //地址修改审核状态 0审核中 1审核通过 2审核未通过
   private String address_status;

  //地址修改时间
   private String addresss_upts;

  //删除标识 1删除 0h或者null没删除
   private Integer dr;

  //备用1
   private String back1;

  //备用2
   private String back2;

  //备用3
   private Double back3;

   public Integer getIdNumber(){
    return this.idNumber;
   }

   public void setIdNumber(Integer idNumber){
    this.idNumber = idNumber;
   }

   public String getPhone() {
    return this.phone;
   }

   public void setPhone(String phone) {
    this.phone = phone;
   }

   public String getTlr_name() {
    return this.tlr_name;
   }

   public void setTlr_name(String tlr_name) {
    this.tlr_name = tlr_name;
   }

   public String getInst_no() {
    return this.inst_no;
   }

   public void setInst_no(String inst_no) {
    this.inst_no = inst_no;
   }

   public String getTlr_type() {
    return this.tlr_type;
   }

   public void setTlr_type(String tlr_type) {
    this.tlr_type = tlr_type;
   }

   public String getTlr_stat() {
    return this.tlr_stat;
   }

   public void setTlr_stat(String tlr_stat) {
    this.tlr_stat = tlr_stat;
   }

   public String getTlr_pwd() {
    return this.tlr_pwd;
   }

   public void setTlr_pwd(String tlr_pwd) {
    this.tlr_pwd = tlr_pwd;
   }

   public String getIslock() {
    return this.islock;
   }

   public void setIslock(String islock) {
    this.islock = islock;
   }

   public String getDeliveryaddress() {
    return this.deliveryaddress;
   }

   public void setDeliveryaddress(String deliveryaddress) {
    this.deliveryaddress = deliveryaddress;
   }

   public String getStallsname() {
    return this.stallsname;
   }

   public void setStallsname(String stallsname) {
    this.stallsname = stallsname;
   }

   public Date getCreationtime() {
    return this.creationtime;
   }

   public void setCreationtime(Date creationtime) {
    this.creationtime = creationtime;
   }

   public String getUserlogo() {
    return this.userlogo;
   }

   public void setUserlogo(String userlogo) {
    this.userlogo = userlogo;
   }

   public String getExamine() {
    return this.examine;
   }

   public void setExamine(String examine) {
    this.examine = examine;
   }

   public String getLst_pwd_date() {
    return this.lst_pwd_date;
   }

   public void setLst_pwd_date(String lst_pwd_date) {
    this.lst_pwd_date = lst_pwd_date;
   }

   public String getLst_modify_tlr() {
    return this.lst_modify_tlr;
   }

   public void setLst_modify_tlr(String lst_modify_tlr) {
    this.lst_modify_tlr = lst_modify_tlr;
   }

   public String getLst_modify_date() {
    return this.lst_modify_date;
   }

   public void setLst_modify_date(String lst_modify_date) {
    this.lst_modify_date = lst_modify_date;
   }

   public String getDeliveryaddress2() {
    return this.deliveryaddress2;
   }

   public void setDeliveryaddress2(String deliveryaddress2) {
    this.deliveryaddress2 = deliveryaddress2;
   }

   public String getAddress_status() {
    return this.address_status;
   }

   public void setAddress_status(String address_status) {
    this.address_status = address_status;
   }

   public String getAddresss_upts() {
    return this.addresss_upts;
   }

   public void setAddresss_upts(String addresss_upts) {
    this.addresss_upts = addresss_upts;
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

   public T_tlr_mgmt() {
   }
}