package com.donglusoft.person.domain;


/**
 * Personelinfo entity. @author MyEclipse Persistence Tools
 */

public class Personelinfo implements java.io.Serializable {

	// Fields

	private String idnumber;
	private String name;
	private String gender;
	private String workstarttime;
	private String post;
	private String academic;
	private String remark;
	private String politicpost;
	private String zhmm;
	private String telno;
	private String address;
	private String createtime;
	private String state;
	private String showstate;
	private String age;
	private String persontype;
	private String hometown;

	// Constructors

	/** default constructor */
	public Personelinfo() {
	}

	/** minimal constructor */
	public Personelinfo(String gender) {
		this.gender = gender;
	}



	// Property accessors
	public String getShowstate() {
		return showstate;
	}

	public void setShowstate(String showstate) {
		this.showstate = showstate;
	}

	public String getIdnumber() {
		return this.idnumber;
	}

	public String getCreatetime() {
		return createtime;
	}

	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}

	public void setIdnumber(String idnumber) {
		this.idnumber = idnumber;
	}



	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getWorkstarttime() {
		return this.workstarttime;
	}

	public void setWorkstarttime(String workstarttime) {
		this.workstarttime = workstarttime;
	}

	public String getPost() {
		return this.post;
	}

	public void setPost(String post) {
		this.post = post;
	}

	public String getAcademic() {
		return this.academic;
	}

	public void setAcademic(String academic) {
		this.academic = academic;
	}

	public String getRemark() {
		return this.remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getPoliticpost() {
		return this.politicpost;
	}

	public void setPoliticpost(String politicpost) {
		this.politicpost = politicpost;
	}

	public String getZhmm() {
		return this.zhmm;
	}

	public void setZhmm(String zhmm) {
		this.zhmm = zhmm;
	}

	public String getTelno() {
		return this.telno;
	}

	public void setTelno(String telno) {
		this.telno = telno;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getPersontype() {
		return persontype;
	}

	public void setPersontype(String persontype) {
		this.persontype = persontype;
	}

	public String getHometown() {
		return hometown;
	}

	public void setHometown(String hometown) {
		this.hometown = hometown;
	}

}