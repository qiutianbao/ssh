package com.jxtb.curd.entity;

public class User {

	/*hibernate要求实体类有一个属性唯一的*/
//	private int uid;
	
	private String uid;
	private String username;
	private String password;
	private String address;
//	public int getUid() {
//		return uid;
//	}
//	public void setUid(int uid) {
//		this.uid = uid;
//	}
	
	public String getUsername() {
		return username;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
}
