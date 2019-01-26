package com.yinli.item.vo;

/**
 * 创建日期:2016-01-25
 */

public class Commoditylevel implements java.io.Serializable {
	// ID
	private Integer idNumber;
	// 级别名称
	private String levelname;
	// 商品主键
	private Integer idCommodity;

	// 毛重
	private Double grossweight;

	// 净重
	private Double cleanweight;

	// 包装规格
	private String outerpacking;

	// 库存量
	private Integer stock;

	// 自定义属性名1
	private String customproperty1;

	// 自定义属性值1
	private String customvalue1;

	// 自定义属性名2
	private String customproperty2;

	// 自定义属性值2
	private String customvalue2;

	// 自定义属性名3
	private String customproperty3;

	// 自定义属性值3
	private String customvalue3;

	// 自定义属性名4
	private String customproperty4;

	// 自定义属性值4
	private String customvalue4;

	// 自定义属性名5
	private String customproperty5;

	// 自定义属性值5
	private String customvalue5;

	// 重量单位主键
	private Integer idCompany;

	// 时间戳
	private String ts;

	// 删除标识
	private Integer dr;
	
	//private Integer status;

	// 预留字段1
	private String back1;

	// 预留字段2
	private String back2;

	// 预留字段3
	private String back3;

	// 预留字段4
	private String back4;

	// 预留字段5
	private Double back5;

	public Integer getIdNumber() {
		return this.idNumber;
	}

	public void setIdNumber(Integer idNumber) {
		this.idNumber = idNumber;
	}

	public String getLevelname() {
		return this.levelname;
	}

	public void setLevelname(String levelname) {
		this.levelname = levelname;
	}

	public Double getGrossweight() {
		return this.grossweight;
	}

	public void setGrossweight(Double grossweight) {
		this.grossweight = grossweight;
	}

	public Double getCleanweight() {
		return this.cleanweight;
	}

	public void setCleanweight(Double cleanweight) {
		this.cleanweight = cleanweight;
	}

	public String getOuterpacking() {
		return this.outerpacking;
	}

	public void setOuterpacking(String outerpacking) {
		this.outerpacking = outerpacking;
	}

	public Integer getStock() {
		return this.stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}
	
	

	public String getCustomproperty1() {
		return this.customproperty1;
	}

	public void setCustomproperty1(String customproperty1) {
		this.customproperty1 = customproperty1;
	}

	public String getCustomvalue1() {
		return this.customvalue1;
	}

	public void setCustomvalue1(String customvalue1) {
		this.customvalue1 = customvalue1;
	}

	public String getCustomproperty2() {
		return this.customproperty2;
	}

	public void setCustomproperty2(String customproperty2) {
		this.customproperty2 = customproperty2;
	}

	public String getCustomvalue2() {
		return this.customvalue2;
	}

	public void setCustomvalue2(String customvalue2) {
		this.customvalue2 = customvalue2;
	}

	public String getCustomproperty3() {
		return this.customproperty3;
	}

	public void setCustomproperty3(String customproperty3) {
		this.customproperty3 = customproperty3;
	}

	public String getCustomvalue3() {
		return this.customvalue3;
	}

	public void setCustomvalue3(String customvalue3) {
		this.customvalue3 = customvalue3;
	}

	public String getCustomproperty4() {
		return this.customproperty4;
	}

	public void setCustomproperty4(String customproperty4) {
		this.customproperty4 = customproperty4;
	}

	public String getCustomvalue4() {
		return this.customvalue4;
	}

	public void setCustomvalue4(String customvalue4) {
		this.customvalue4 = customvalue4;
	}

	public String getCustomproperty5() {
		return this.customproperty5;
	}

	public void setCustomproperty5(String customproperty5) {
		this.customproperty5 = customproperty5;
	}

	public String getCustomvalue5() {
		return this.customvalue5;
	}

	public void setCustomvalue5(String customvalue5) {
		this.customvalue5 = customvalue5;
	}

	public Integer getIdCompany() {
		return idCompany;
	}

	public void setIdCompany(Integer idCompany) {
		this.idCompany = idCompany;
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

	public Integer getIdCommodity() {
		return idCommodity;
	}

	public void setIdCommodity(Integer idCommodity) {
		this.idCommodity = idCommodity;
	}
	

	//public Integer getStatus() {
	//	return status;
//	}

	//public void setStatus(Integer status) {
	//	this.status = status;
	//}

	public Commoditylevel() {
	}
}