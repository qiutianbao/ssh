package com.donglusoft.rightmanagement.domain;

import org.springframework.context.annotation.Scope;


/**
 * RightRole entity. @author MyEclipse Persistence Tools
 */
@Scope("prototype")
public class RightRole implements java.io.Serializable {

	// Fields

	private String id;
	private String descn;
	private String name;

	// Constructors

	/** default constructor */
	public RightRole() {
	}

	/** minimal constructor */
	public RightRole(String id) {
		this.id = id;
	}

	/** full constructor */
	public RightRole(String id, String descn, String name) {
		this.id = id;
		this.descn = descn;
		this.name = name;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDescn() {
		return this.descn;
	}

	public void setDescn(String descn) {
		this.descn = descn;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}