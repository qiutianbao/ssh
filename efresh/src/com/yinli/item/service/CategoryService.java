package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-25
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.CategoryDAO;
import com.yinli.item.vo.Category;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("categoryService")
public class CategoryService {
	
	public Map<String, Object> findInfoByConditions(Category selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return categoryDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public List<Category> findAll(){
		String hql = "FROM Category model where (model.dr!=1 or model.dr is null) and model.superiorcode = 0";
		return categoryDAO.findAll(hql);
	}
	
	public List<Category> findAlls(){
		String hql = "FROM Category model where model.dr = 1";
		return categoryDAO.findAll(hql);
	}
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Category model where model.dr!=1 or model.dr is null";
		
		List<Category> infoList = categoryDAO.findAll(start, limit, queryString);
		int listcount = categoryDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Category newinfo) throws Exception{
		categoryDAO.save(newinfo);
	}
	
	public Category findById( Integer id){
		Category newinfo = categoryDAO.findById(id);
		return newinfo;
	}
	
	public void update(Category modifyinfo){
		categoryDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		categoryDAO.delete(delData);
	}
	
	public List<Category> findSecond(String superiorcode){
		String queryString = "select idNumber, categoryname from Category where superiorcode = "+superiorcode
				+"and (dr = 0 or dr is null)";
		return categoryDAO. findSecond(queryString);
	}
	
	
	@Resource CategoryDAO categoryDAO;

}
