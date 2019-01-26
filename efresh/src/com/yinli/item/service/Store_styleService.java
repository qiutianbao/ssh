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

import com.yinli.item.dao.Store_styleDAO;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Store_images;
import com.yinli.item.vo.Store_style;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("store_styleService")
public class Store_styleService {
	
	public Map<String, Object> findInfoByConditions(Store_style selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return store_styleDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Store_style model ";
		
		List<Store_style> infoList = store_styleDAO.findAll(start, limit, queryString);
		int listcount = store_styleDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Store_style newinfo) throws Exception{
		store_styleDAO.save(newinfo);
	}
	
	public Store_style findById( Integer id){
		Store_style newinfo = store_styleDAO.findById(id);
		return newinfo;
	}
	
	public void update(Store_style modifyinfo){
		store_styleDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		store_styleDAO.delete(delData);
	}
	
	public List<Store_style> findInfoByEstoreId(Integer id){
		String queryString = "from Store_style where idStore = "+id;
		return store_styleDAO.findInfoByEstoreId(queryString);
	}
	
	@Resource Store_styleDAO store_styleDAO;

}
