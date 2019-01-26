package com.cbd.entity;

/**
 * 
 * 产品认证类
 */
public class AttestationInfo extends BaseEntity {
	private Integer id;
	private int attestationNo;// 证书编号
	private Product product;
	private int flag;  // 是否显示 0 标识不显示 1 标识显示

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getAttestationNo() {
		return attestationNo;
	}

	public void setAttestationNo(int attestationNo) {
		this.attestationNo = attestationNo;
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
