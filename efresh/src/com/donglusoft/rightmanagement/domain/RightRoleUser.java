package com.donglusoft.rightmanagement.domain;

import org.springframework.context.annotation.Scope;

/**
 * RightRoleUser entity. @author MyEclipse Persistence Tools
 */
@Scope("prototype")
public class RightRoleUser implements java.io.Serializable {

	// Fields

	private String id;
	private String roleId;
	private String userId;

	// Constructors

	/** default constructor */
	public RightRoleUser() {
	}

	/** full constructor */
	public RightRoleUser(String roleId, String userId) {
		this.roleId = roleId;
		this.userId = userId;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRoleId() {
		return this.roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public String getUserId() {
		return this.userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}