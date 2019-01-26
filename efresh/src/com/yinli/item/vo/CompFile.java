package com.yinli.item.vo;

import java.io.Serializable;

public class CompFile implements Serializable{

	private static final long serialVersionUID = 1L;

	private String idNumber;
	private String compId;
	private String fileType;
	private String fileUrl;
	private String flag;
	private String compversion;

	private int sort;
	private String back1;
	private String back2;
	private String back3;
	public String getIdNumber() {
		return idNumber;
	}
	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
	}
	
	public String getCompId() {
		return compId;
	}
	public void setCompId(String compId) {
		this.compId = compId;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public String getFileUrl() {
		return fileUrl;
	}
	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public int getSort() {
		return sort;
	}
	public String getCompversion() {
		return compversion;
	}
	public void setCompversion(String compversion) {
		this.compversion = compversion;
	}
	public void setSort(int sort) {
		this.sort = sort;
	}
	
	
	public String getBack1() {
		return back1;
	}
	public void setBack1(String back1) {
		this.back1 = back1;
	}
	public String getBack2() {
		return back2;
	}
	public void setBack2(String back2) {
		this.back2 = back2;
	}
	public String getBack3() {
		return back3;
	}
	public void setBack3(String back3) {
		this.back3 = back3;
	}

}
