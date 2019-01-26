package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Outlibrary implements java.io.Serializable {
	// ID
	private Integer idNumber;
	// 出库时间
	private Date outlibtime;
	private Date outlibtime2;

	private Integer idOutlibrarybills;
	private Commodity commodity;

	// 店铺主键
	private Integer idStore;

	// 出库人主键
	private Integer idUser;

	// 出库数量
	private Integer outlibnumber;

	// 规格
	private String specifications;

	// 单价
	private Double price;

	// 重量
	private Integer weight;

	// 单位
	private String company;

	// 时间戳
	private String ts;

	// 删除标志
	private Integer dr;

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

	public Date getOutlibtime() {
		return this.outlibtime;
	}

	public void setOutlibtime(Date outlibtime) {
		this.outlibtime = outlibtime;
	}

	public Commodity getCommodity() {
		return commodity;
	}

	public void setCommodity(Commodity commodity) {
		this.commodity = commodity;
	}

	public Integer getIdStore() {
		return this.idStore;
	}

	public void setIdStore(Integer idStore) {
		this.idStore = idStore;
	}

	public Integer getIdOutlibrarybills() {
		return idOutlibrarybills;
	}

	public void setIdOutlibrarybills(Integer idOutlibrarybills) {
		this.idOutlibrarybills = idOutlibrarybills;
	}

	public Integer getIdUser() {
		return this.idUser;
	}

	public void setIdUser(Integer idUser) {
		this.idUser = idUser;
	}

	public Integer getOutlibnumber() {
		return this.outlibnumber;
	}

	public void setOutlibnumber(Integer outlibnumber) {
		this.outlibnumber = outlibnumber;
	}

	public String getSpecifications() {
		return this.specifications;
	}

	public void setSpecifications(String specifications) {
		this.specifications = specifications;
	}

	public Double getPrice() {
		return this.price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getWeight() {
		return this.weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public String getCompany() {
		return this.company;
	}

	public void setCompany(String company) {
		this.company = company;
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

	public Date getOutlibtime2() {
		return outlibtime2;
	}

	public void setOutlibtime2(Date outlibtime2) {
		this.outlibtime2 = outlibtime2;
	}

	public Outlibrary() {
	}
}