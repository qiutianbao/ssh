package com.donglusoft.rightmanagement.domain;

/**
 * RightRoleUserId entity. @author MyEclipse Persistence Tools
 */

public class RightRoleUserId implements java.io.Serializable {

	// Fields

	private Long roleId;
	private Long userId;

	// Constructors

	/** default constructor */
	public RightRoleUserId() {
	}

	/** full constructor */
	public RightRoleUserId(Long roleId, Long userId) {
		this.roleId = roleId;
		this.userId = userId;
	}

	// Property accessors

	public Long getRoleId() {
		return this.roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public Long getUserId() {
		return this.userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof RightRoleUserId))
			return false;
		RightRoleUserId castOther = (RightRoleUserId) other;

		return ((this.getRoleId() == castOther.getRoleId()) || (this
				.getRoleId() != null
				&& castOther.getRoleId() != null && this.getRoleId().equals(
				castOther.getRoleId())))
				&& ((this.getUserId() == castOther.getUserId()) || (this
						.getUserId() != null
						&& castOther.getUserId() != null && this.getUserId()
						.equals(castOther.getUserId())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getRoleId() == null ? 0 : this.getRoleId().hashCode());
		result = 37 * result
				+ (getUserId() == null ? 0 : this.getUserId().hashCode());
		return result;
	}

}