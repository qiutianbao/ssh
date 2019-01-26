package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-28
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.IntegraltotalDAO;
import com.yinli.item.vo.Integraltotal;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("integraltotalService")
public class IntegraltotalService {
	
	public Map<String, Object> findInfoByConditions(Integraltotal selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return integraltotalDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Integraltotal model where model.dr!=1 or model.dr is null";
		
		List<Integraltotal> infoList = integraltotalDAO.findAll(start, limit, queryString);
		int listcount = integraltotalDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Integraltotal newinfo) throws Exception{
		integraltotalDAO.save(newinfo);
	}
	
	public Integraltotal findById( Integer id){
		Integraltotal newinfo = integraltotalDAO.findById(id);
		return newinfo;
	}
	
	public void update(Integraltotal modifyinfo){
		integraltotalDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		integraltotalDAO.delete(delData);
	}
	
	
	@Resource IntegraltotalDAO integraltotalDAO;

}
