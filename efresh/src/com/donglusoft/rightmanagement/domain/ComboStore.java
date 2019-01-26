package com.donglusoft.rightmanagement.domain;
/**
 * @author long E-mail: liguilonglove@126.com
 * @version 创建时间：2010-11-15 下午08:28:38
 * 类说明
 */
public class ComboStore {
	private int value;
	private String name;
	public ComboStore(){
		
	}
	public ComboStore(int value,String name){
		this.value= value;
		this.name=name;
	}
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
