package com.yinli.item.service;
/*
 *
 * 创建日期: 2013-11-07
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.T_available_noDAO;
import com.yinli.item.vo.T_available_no;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("t_available_noService")
public class T_available_noService {
	
	public Map<String, Object> findInfoByConditions(T_available_no selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return t_available_noDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from T_available_no model ";
		
		List<T_available_no> infoList = t_available_noDAO.findAll(start, limit, queryString);
		int listcount = t_available_noDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( T_available_no newinfo) throws Exception{
		t_available_noDAO.save(newinfo);
	}
	
	public T_available_no findById( String id){
		T_available_no newinfo = t_available_noDAO.findById(id);
		return newinfo;
	}
	
	public void update(T_available_no modifyinfo){
		t_available_noDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		t_available_noDAO.delete(delData);
	}
	
	
	@Resource T_available_noDAO t_available_noDAO;

}
