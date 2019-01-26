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

import com.yinli.item.dao.PaywayDAO;
import com.yinli.item.vo.Payway;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("paywayService")
public class PaywayService {
	
	public Map<String, Object> findInfoByConditions(Payway selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return paywayDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Payway model where model.dr!=1 or model.dr is null";
		
		List<Payway> infoList = paywayDAO.findAll(start, limit, queryString);
		int listcount = paywayDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Payway newinfo) throws Exception{
		paywayDAO.save(newinfo);
	}
	
	public Payway findById( Integer id){
		Payway newinfo = paywayDAO.findById(id);
		return newinfo;
	}
	
	public void update(Payway modifyinfo){
		paywayDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		paywayDAO.delete(delData);
	}
	
	
	@Resource PaywayDAO paywayDAO;

}
