package com.donglusoft.person.domain;


/**
 * Positionnameinfo entity. @author MyEclipse Persistence Tools
 */

public class Positionnameinfo implements java.io.Serializable {

	// Fields

	private String nameid;
	private String name;
	private String delstate;

	// Constructors

	/** default constructor */
	public Positionnameinfo() {
	}

	/** full constructor */
	public Positionnameinfo(String name, String delstate) {
		this.name = name;
		this.delstate = delstate;
	}

	// Property accessors

	public String getNameid() {
		return this.nameid;
	}

	public void setNameid(String nameid) {
		this.nameid = nameid;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDelstate() {
		return delstate;
	}

	public void setDelstate(String delstate) {
		this.delstate = delstate;
	}
}