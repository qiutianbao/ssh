package com.donglusoft.rightmanagement.domain;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import org.springframework.context.annotation.Scope;

/**
 * RightMenu entity. @author MyEclipse Persistence Tools
 */
@Scope("prototype")
public class RightMenu implements java.io.Serializable {

	// Fields

	private String id;
	private RightMenu rightMenu;
	private RightResource rightResource;
	private Long theSort;
	private String qtip;
	private String descn;
	private String name;
	private String image;
	private Long deletestate;

	// Constructors

	/** default constructor */
	public RightMenu() {
	}

	/** minimal constructor */
	public RightMenu(String id) {
		this.id = id;
	}

	/** full constructor */
	public RightMenu(String id, RightMenu rightMenu,
			RightResource rightResource, Long theSort, String qtip,
			String descn, String name, String image,Long deletestate) {
		this.id = id;
		this.rightMenu = rightMenu;
		this.rightResource = rightResource;
		this.theSort = theSort;
		this.qtip = qtip;
		this.descn = descn;
		this.name = name;
		this.image = image;
		this.deletestate = deletestate;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public RightMenu getRightMenu() {
		return this.rightMenu;
	}

	public void setRightMenu(RightMenu rightMenu) {
		this.rightMenu = rightMenu;
	}

	public RightResource getRightResource() {
		return this.rightResource;
	}

	public void setRightResource(RightResource rightResource) {
		this.rightResource = rightResource;
	}

	public Long getTheSort() {
		return this.theSort;
	}

	public void setTheSort(Long theSort) {
		this.theSort = theSort;
	}

	public String getQtip() {
		return this.qtip;
	}

	public void setQtip(String qtip) {
		this.qtip = qtip;
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

	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Long getDeletestate() {
		return deletestate;
	}

	public void setDeletestate(Long deletestate) {
		this.deletestate = deletestate;
	}
	

}