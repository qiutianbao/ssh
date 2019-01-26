package com.donglusoft.rightmanagement.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * RightResource entity. @author MyEclipse Persistence Tools
 */

public class RightResource implements java.io.Serializable {

	// Fields

	private String id;
	private String descn;
	private String resType;
	private String tesString;
	private String name;

	// Constructors

	/** default constructor */
	public RightResource() {
	}

	/** minimal constructor */
	public RightResource(String id) {
		this.id = id;
	}

	/** full constructor */
	public RightResource(String id, String descn, String resType,
			String tesString, String name) {
		this.id = id;
		this.descn = descn;
		this.resType = resType;
		this.tesString = tesString;
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

	public String getResType() {
		return this.resType;
	}

	public void setResType(String resType) {
		this.resType = resType;
	}

	public String getTesString() {
		return this.tesString;
	}

	public void setTesString(String tesString) {
		this.tesString = tesString;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}


}