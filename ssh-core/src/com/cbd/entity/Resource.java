package com.cbd.entity;

import java.util.Set;

/**
 * 
 * 资源实体
 */
public class Resource extends BaseEntity {
	private Integer id; // 主键
	private String name; // 资源名称
	private String value; // 资源标识
	private Resource parent; // 父节点
	private Set<Resource> children;// 子节点
	private int flag; // 是否显示 0 标识不显示 1 标识显示
	private String url; //地址Url
	
	private Set<Role> roleSet; //多个角色

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

	public Resource getParent() {
		return parent;
	}

	public void setParent(Resource parent) {
		this.parent = parent;
	}

	public Set<Resource> getChildren() {
		return children;
	}

	public void setChildren(Set<Resource> children) {
		this.children = children;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Set<Role> getRoleSet() {
		return roleSet;
	}

	public void setRoleSet(Set<Role> roleSet) {
		this.roleSet = roleSet;
	}
	
	

}
