package com.donglusoft.rightmanagement.domain;

import java.math.BigDecimal;

/**
 * RightMenuRoleId entity. @author MyEclipse Persistence Tools
 */

public class RightMenuRoleId implements java.io.Serializable {

	// Fields

	private Long menuId;
	private Long roleId;

	// Constructors

	/** default constructor */
	public RightMenuRoleId() {
	}

	/** full constructor */
	public RightMenuRoleId(Long menuId, Long roleId) {
		this.menuId = menuId;
		this.roleId = roleId;
	}

	// Property accessors

	public Long getMenuId() {
		return this.menuId;
	}

	public void setMenuId(Long menuId) {
		this.menuId = menuId;
	}

	public Long getRoleId() {
		return this.roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof RightMenuRoleId))
			return false;
		RightMenuRoleId castOther = (RightMenuRoleId) other;

		return ((this.getMenuId() == castOther.getMenuId()) || (this
				.getMenuId() != null
				&& castOther.getMenuId() != null && this.getMenuId().equals(
				castOther.getMenuId())))
				&& ((this.getRoleId() == castOther.getRoleId()) || (this
						.getRoleId() != null
						&& castOther.getRoleId() != null && this.getRoleId()
						.equals(castOther.getRoleId())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getMenuId() == null ? 0 : this.getMenuId().hashCode());
		result = 37 * result
				+ (getRoleId() == null ? 0 : this.getRoleId().hashCode());
		return result;
	}

}