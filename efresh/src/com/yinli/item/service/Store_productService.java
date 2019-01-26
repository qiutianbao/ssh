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

import com.yinli.item.dao.Store_productDAO;
import com.yinli.item.vo.Store_images;
import com.yinli.item.vo.Store_product;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("store_productService")
public class Store_productService {
	
	public Map<String, Object> findInfoByConditions(Store_product selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return store_productDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Store_product model ";
		
		List<Store_product> infoList = store_productDAO.findAll(start, limit, queryString);
		int listcount = store_productDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Store_product newinfo) throws Exception{
		store_productDAO.save(newinfo);
	}
	
	public Store_product findById( Integer id){
		Store_product newinfo = store_productDAO.findById(id);
		return newinfo;
	}
	
	public void update(Store_product modifyinfo){
		store_productDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		store_productDAO.delete(delData);
	}
	
	public List<Store_product> findInfoBystore_styleId(Integer id){
		String queryString = "from Store_product where idStoreStyle = "+id +"and (dr = 0 or dr = null) order by ts desc";
		return store_productDAO.findInfoBystore_styleId(queryString);
	}
	
	
	@Resource Store_productDAO store_productDAO;

}
