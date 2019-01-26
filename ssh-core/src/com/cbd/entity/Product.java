package com.cbd.entity;

/**
 * 
 * 产品类
 */
public class Product extends BaseEntity {
	private Integer id;
	private String name;
	private int attestation;// 认证 (0表示没有认证1表示已经认证)
	private int validate;// 验证 (0表示没有验证1表示已经验证)
	private int reddereIus;// 执法(0表示没有执法1表示已经执法)
	private int flag;     // 是否显示 0 标识不显示 1 标识显示
	private Enterprise enterprise; //多对一 关系


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAttestation() {
		return attestation;
	}

	public void setAttestation(int attestation) {
		this.attestation = attestation;
	}

	public int getValidate() {
		return validate;
	}

	public void setValidate(int validate) {
		this.validate = validate;
	}

	public int getReddereIus() {
		return reddereIus;
	}

	public void setReddereIus(int reddereIus) {
		this.reddereIus = reddereIus;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	public Enterprise getEnterprise() {
		return enterprise;
	}

	public void setEnterprise(Enterprise enterprise) {
		this.enterprise = enterprise;
	}
    
	
}
