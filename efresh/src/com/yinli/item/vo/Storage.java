package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-23
 */

public class Storage implements java.io.Serializable {
	// ID
	private Integer idNumber;
	// 入库时间
	private Date storagetime;

	private Date storagetime2;
	private Integer sum;

	// 商品主键
	
	private Commodity commodity;
	
	//入库单主键
	private Integer idStoragebills;

	// 入库人主键
	private Integer idUser;

	// 入库数量
	private Integer storagenum;

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

	public Date getStoragetime() {
		return this.storagetime;
	}

	public Integer getIdStoragebills() {
		return idStoragebills;
	}

	public void setIdStoragebills(Integer idStoragebills) {
		this.idStoragebills = idStoragebills;
	}

	
	public Integer getSum() {
		return sum;
	}

	public void setSum(Integer sum) {
		this.sum = sum;
	}

	public void setStoragetime(Date storagetime) {
		this.storagetime = storagetime;
	}

	public Commodity getCommodity() {
		return commodity;
	}

	public void setCommodity(Commodity commodity) {
		this.commodity = commodity;
	}

	public Integer getIdUser() {
		return this.idUser;
	}


	public void setIdUser(Integer idUser) {
		this.idUser = idUser;
	}

	public Integer getStoragenum() {
		return this.storagenum;
	}

	public void setStoragenum(Integer storagenum) {
		this.storagenum = storagenum;
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

	public Date getStoragetime2() {
		return storagetime2;
	}

	public void setStoragetime2(Date storagetime2) {
		this.storagetime2 = storagetime2;
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

	public Storage() {
	}
}