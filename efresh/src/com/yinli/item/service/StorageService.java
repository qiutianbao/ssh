package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-23
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.StorageDAO;
import com.yinli.item.vo.Storage;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("storageService")
public class StorageService {
	
	public Map<String, Object> findInfoByConditions(Storage selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return storageDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Storage model where model.dr!=1 or model.dr is null";
		
		List<Storage> infoList = storageDAO.findAll(start, limit, queryString);
		int listcount = storageDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Storage newinfo) throws Exception{
		storageDAO.save(newinfo);
	}
	public List<Storage> findByIds(java.lang.Integer id) {
		return storageDAO.findByIds(id);
	}
	public Storage findById( Integer id){
		Storage newinfo = storageDAO.findById(id);
		return newinfo;
	}
	
	public void update(Storage modifyinfo){
		storageDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		storageDAO.delete(delData);
	}
	
	
	@Resource StorageDAO storageDAO;

}
