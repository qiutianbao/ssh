package com.cbd.entity;

/**
 * 
 * 执法信息类
 */
public class ReddereIusInfo extends BaseEntity {
	private Integer id;
	private String caseNo;// 案件编号
	private String caseName;// 案件名称
	private Product product;
	private int flag;   // 是否显示 0 标识不显示 1 标识显示

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCaseNo() {
		return caseNo;
	}

	public void setCaseNo(String caseNo) {
		this.caseNo = caseNo;
	}

	public String getCaseName() {
		return caseName;
	}

	public void setCaseName(String caseName) {
		this.caseName = caseName;
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
