package com.yinli.item.vo;

import java.util.Date;

/**
 * 创建日期:2016-01-25
 */

public class Commodity implements java.io.Serializable {
	// ID
	private Integer idNumber;
	// 商品名称
	private String commodityname;

	// 商品编号
	private String commoditycode;

	// 店铺主键
	private Integer idStore;

	// 商品展示图片名称
	private String imagename;

	// 商品状态，0=上架，1=下架
	private Integer status;

	// 商品品牌表主键
	private Integer idBrand;

	// 时间戳
	private String ts;

	private Integer idCategory;
	// 删除标识
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

	public String getCommodityname() {
		return this.commodityname;
	}

	public void setCommodityname(String commodityname) {
		this.commodityname = commodityname;
	}

	public String getCommoditycode() {
		return this.commoditycode;
	}

	public void setCommoditycode(String commoditycode) {
		this.commoditycode = commoditycode;
	}

	public Integer getIdStore() {
		return this.idStore;
	}

	public void setIdStore(Integer idStore) {
		this.idStore = idStore;
	}

	public String getImagename() {
		return this.imagename;
	}

	public void setImagename(String imagename) {
		this.imagename = imagename;
	}

	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getIdBrand() {
		return this.idBrand;
	}

	public void setIdBrand(Integer idBrand) {
		this.idBrand = idBrand;
	}

	public String getTs() {
		return this.ts;
	}

	public void setTs(String ts) {
		this.ts = ts;
	}


	public Integer getIdCategory() {
		return idCategory;
	}

	public void setIdCategory(Integer idCategory) {
		this.idCategory = idCategory;
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

	public Commodity() {
	}
}