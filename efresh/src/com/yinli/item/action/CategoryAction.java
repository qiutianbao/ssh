package com.yinli.item.action;
/*
 *
 * 创建日期: 2016-01-25
 */


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONObject;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yinli.item.vo.Category;
import com.yinli.item.service.CategoryService;
import com.yinli.util.common.DateUtil;
import com.opensymphony.xwork2.ActionSupport;


@Controller("categoryAction")
@Scope("prototype")
public class CategoryAction extends ActionSupport {
	private List<Map<String, Object>> list;
	
	public List<Map<String, Object>> getList() {
		return list;
	}

	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}

	/**
	 * 全表查询
	 * @return
	 */
	public String findAll(){
		try {
			Map<String, Object> map = categoryService.findAll(start, limit, flag);
			categoryList = (List<Category>) map.get("infoList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 获取下拉
	 * @Description: TODO
	 * @param @return   
	 * @return String  
	 * @throws
	 * @author houhy
	 * @date 2016-3-31
	 *  
	 */
	public String categoryname(){
		try {
			list = new ArrayList<Map<String,Object>>();
			List<Category> categorylist = categoryService.findAll();
			for(int i = 0;i<categorylist.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				m.put("categorylist",categorylist.get(i));
				list.add(m);
			}
			success=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}
	
	public String categorynames(){
		try {
			list = new ArrayList<Map<String,Object>>();
			List<Category> categorylist = categoryService.findAlls();
			for(int i = 0;i<categorylist.size();i++){
				Map<String,Object> m = new HashMap<String, Object>();
				m.put("categorylist",categorylist.get(i));
				list.add(m);
			}
			success=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}
	
	

	/**
	 * 根据主键查询
	 * @return
	 */
	public String findById() {
		try {
			tempList = new ArrayList<Category>();
			tempList.add(categoryService.findById(category.getIdNumber()));
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 添加
	 * @return
	 */
	public String addNewInfo( ){
		try {
			category.setDr(0);
			category.setTs(DateUtil.getTs());
			categoryService.addNewInfo(category);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}

	/**
	 * 更新
	 * @return
	 */
	public String update() {
		try {
			category.setTs(DateUtil.getTs());
			categoryService.update(category);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 删除
	 * @return
	 */
	public String delete(){
		try {
			categoryService.delete(delData);
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
			success = false;
		}
		return SUCCESS;
	}
	
	/**
	 * 多条件查询
	 * @return
	 */
	public String findInfoByConditions() {
		try {
			Map<String, Object> map = categoryService.findInfoByConditions(category, start, limit, starttime, endtime);
			categoryList = (List<Category>) map.get("categoryList");
			listCount = Integer.parseInt(map.get("listCount").toString());
			success = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	/***
	 * 查找二级分类
	 * @return
	 */
	public String findSecond(){
		String superiorcode = "0";
		tempList = categoryService.findSecond(superiorcode);
		return SUCCESS;
	}
	
	
	public CategoryService getCategoryService() {
		return categoryService;
	}
	public void setCategoryService(CategoryService categoryService) {
		this.categoryService = categoryService;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public List<Category> getCategoryList() {
		return categoryList;
	}
	public void setCategoryList(List<Category> categoryList) {
		this.categoryList = categoryList;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public int getListCount() {
		return listCount;
	}
	public void setListCount(int listCount) {
		this.listCount = listCount;
	}
	public String getDelData() {
		return delData;
	}
	public void setDelData(String delData) {
		this.delData = delData;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public List<Category> getTempList() {
		return tempList;
	}
	public void setTempList(List<Category> tempList) {
		this.tempList = tempList;
	}
	
	public String getStarttime() {
		return starttime;
	}

	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public String getEndtime() {
		return endtime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getResult() {
		return result;
	}


	public void setResult(String result) {
		this.result = result;
	}

	@Resource
	private CategoryService categoryService;
	
	private Category category;
	private List<Category> categoryList;
	private int start;
	private int limit;
	private int listCount;
	private String delData;
	private boolean success;
	private List<Category> tempList;
	private String starttime;
	private String endtime;
	private String flag;
	private String result;
}
