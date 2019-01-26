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

import com.yinli.item.dao.StorebrandDAO;
import com.yinli.item.vo.Storebrand;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("storebrandService")
public class StorebrandService {
	
	public Map<String, Object> findInfoByConditions(Storebrand selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return storebrandDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public List<Storebrand> findAll(){
		String hql = "FROM Storebrand";
		return storebrandDAO.findAll(hql);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Storebrand model where model.dr!=1 or model.dr is null";
		
		List<Storebrand> infoList = storebrandDAO.findAll(start, limit, queryString);
		int listcount = storebrandDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Storebrand newinfo) throws Exception{
		storebrandDAO.save(newinfo);
	}
	
	public Storebrand findById( Integer id){
		Storebrand newinfo = storebrandDAO.findById(id);
		return newinfo;
	}
	
	public void update(Storebrand modifyinfo){
		storebrandDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		storebrandDAO.delete(delData);
	}
	
	public List<Storebrand> findStorebrandByEstoreId(String estoreId){
		String queryString = "select new com.yinli.item.vo.Storebrand(s.idNumber,s.brandname) from Storebrand s where idStore = "+estoreId;
		return storebrandDAO.findStorebrandByEstoreId(queryString);
	}
	
	@Resource StorebrandDAO storebrandDAO;

}
