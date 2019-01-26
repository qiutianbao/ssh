package com.yinli.util.common;
/*
 *
 * 创建日期: 2016-01-19
 */


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.yinli.item.service.User_defined_strutsService;


@Controller("get_tableselect_strutsAction")
@Scope("prototype")
public class Get_tableselectAction extends ActionSupport {
	/**
	 * 获取数据库所有表
	 * @return
	 */
	public String getDBTables(){
		try {
			tablelist  = user_defined_strutsService.getDBTables(dbname);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 根据表名获取表的字段
	 * @return
	 */
	public String getTBColumns(){
		try {
			columnlist  = user_defined_strutsService.getTBColumns(dbname,tbname);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	public User_defined_strutsService getUser_defined_strutsService() {
		return user_defined_strutsService;
	}
	public void setUser_defined_strutsService(User_defined_strutsService user_defined_strutsService) {
		this.user_defined_strutsService = user_defined_strutsService;
	}
	

	@Resource
	private User_defined_strutsService user_defined_strutsService;
	private boolean success;
	private String tbname;
	private String dbname;
	private List<Map<String, String>> tablelist;
	private List<Map<String, String>> columnlist;
	public List<Map<String, String>> getTablelist() {
		return tablelist;
	}
	public void setTablelist(List<Map<String, String>> tablelist) {
		this.tablelist = tablelist;
	}


	public List<Map<String, String>> getColumnlist() {
		return columnlist;
	}


	public void setColumnlist(List<Map<String, String>> columnlist) {
		this.columnlist = columnlist;
	}

	public String getTbname() {
		return tbname;
	}

	public void setTbname(String tbname) {
		this.tbname = tbname;
	}

	public String getDbname() {
		return dbname;
	}

	public void setDbname(String dbname) {
		this.dbname = dbname;
	}
	
}
