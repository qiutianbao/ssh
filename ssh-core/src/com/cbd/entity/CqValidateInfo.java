package com.cbd.entity;

/**
 * 
 * 验证类
 */
public class CqValidateInfo extends BaseEntity {
	private Integer id;
	private int validateNo;// 验证报告编号
	private String validateUserName;// 验证人姓名
	private Product product;
	private int flag;  // 是否显示 0 标识不显示 1 标识显示

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getValidateNo() {
		return validateNo;
	}

	public void setValidateNo(int validateNo) {
		this.validateNo = validateNo;
	}

	public String getValidateUserName() {
		return validateUserName;
	}

	public void setValidateUserName(String validateUserName) {
		this.validateUserName = validateUserName;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}
	
	

}
