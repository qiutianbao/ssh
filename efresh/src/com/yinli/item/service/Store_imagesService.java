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

import com.yinli.item.dao.Store_imagesDAO;
import com.yinli.item.vo.Estore;
import com.yinli.item.vo.Store_images;
import com.yinli.item.vo.Store_style;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("store_imagesService")
public class Store_imagesService {
	
	public Map<String, Object> findInfoByConditions(Store_images selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return store_imagesDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public List<Store_images> findInfoBystore_styleId(Integer id){
		String queryString = "from Store_images where idStoreStyle = "+id+"and (dr = 0 or dr = null)";
		return store_imagesDAO.findInfoBystore_styleId(queryString);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Store_images model ";
		
		List<Store_images> infoList = store_imagesDAO.findAll(start, limit, queryString);
		int listcount = store_imagesDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Store_images newinfo) throws Exception{
		store_imagesDAO.save(newinfo);
	}
	
	public Store_images findById( Integer id){
		Store_images newinfo = store_imagesDAO.findById(id);
		return newinfo;
	}
	
	public void update(Store_images modifyinfo){
		store_imagesDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		store_imagesDAO.delete(delData);
	}
	

	
	
	@Resource Store_imagesDAO store_imagesDAO;

}
