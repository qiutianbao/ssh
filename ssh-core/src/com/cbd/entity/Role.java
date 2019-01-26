package com.cbd.entity;

import java.util.Set;

/**
 * 
 * 角色类
 */
public class Role extends BaseEntity {
	private Integer id;
	private String name; // 角色名称
	private String value;// 角色标识
	private int flag;  // 是否显示 0 标识不显示 1 标识显示
	private Set<Admin> admins;
	private Set<Resource> resourceSet;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	public Set<Admin> getAdmins() {
		return admins;
	}

	public void setAdmins(Set<Admin> admins) {
		this.admins = admins;
	}

	public Set<Resource> getResourceSet() {
		return resourceSet;
	}

	public void setResourceSet(Set<Resource> resourceSet) {
		this.resourceSet = resourceSet;
	}
	
	
	

}
