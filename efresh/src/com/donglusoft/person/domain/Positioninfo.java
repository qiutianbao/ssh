package com.donglusoft.person.domain;

/**
 * Positioninfo entity. @author MyEclipse Persistence Tools
 */

public class Positioninfo implements java.io.Serializable {

	// Fields

	private String positionsn;
	private Personelinfo personelinfo;
	private Positionnameinfo positionnameinfo;
	private String starttime;
	private String endtime;
	private String remark;
	private String delstate;
	private String createtime;
	private String appointmentdate;

	// Constructors

	/** default constructor */
	public Positioninfo() {
	}

	/** minimal constructor */
	public Positioninfo(Personelinfo personelinfo) {
		this.personelinfo = personelinfo;
	}

	/** full constructor */
	public Positioninfo(Personelinfo personelinfo, Positionnameinfo positionnameinfo, String starttime, String endtime, String remark, String delstate, String createtime, String appointmentdate) {
		this.personelinfo = personelinfo;
		this.positionnameinfo = positionnameinfo;
		this.starttime = starttime;
		this.endtime = endtime;
		this.remark = remark;
		this.delstate = delstate;
		this.createtime = createtime;
		this.appointmentdate = appointmentdate;
	}

	// Property accessors

	public String getPositionsn() {
		return this.positionsn;
	}

	public String getDelstate() {
		return delstate;
	}

	public void setDelstate(String delstate) {
		this.delstate = delstate;
	}

	public String getCreatetime() {
		return createtime;
	}

	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}

	public void setPositionsn(String positionsn) {
		this.positionsn = positionsn;
	}

	public Personelinfo getPersonelinfo() {
		return this.personelinfo;
	}

	public void setPersonelinfo(Personelinfo personelinfo) {
		this.personelinfo = personelinfo;
	}

	public Positionnameinfo getPositionnameinfo() {
		return this.positionnameinfo;
	}

	public void setPositionnameinfo(Positionnameinfo positionnameinfo) {
		this.positionnameinfo = positionnameinfo;
	}

	public String getStarttime() {
		return this.starttime;
	}

	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public String getEndtime() {
		return this.endtime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

	public String getRemark() {
		return this.remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getAppointmentdate() {
		return appointmentdate;
	}

	public void setAppointmentdate(String appointmentdate) {
		this.appointmentdate = appointmentdate;
	}

}