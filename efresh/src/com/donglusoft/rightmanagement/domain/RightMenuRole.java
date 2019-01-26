package com.donglusoft.rightmanagement.domain;

import org.springframework.context.annotation.Scope;

/**
 * RightMenuRole entity. @author MyEclipse Persistence Tools
 */
@Scope("prototype")
public class RightMenuRole implements java.io.Serializable {

	// Fields

	private String id;
	private String menuId;
	private String roleId;

	// Constructors

	/** default constructor */
	public RightMenuRole() {
	}

	/** full constructor */
	public RightMenuRole(String menuId, String roleId) {
		this.menuId = menuId;
		this.roleId = roleId;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMenuId() {
		return this.menuId;
	}

	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}

	public String getRoleId() {
		return this.roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

}