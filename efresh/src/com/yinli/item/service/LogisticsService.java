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

import com.yinli.item.dao.LogisticsDAO;
import com.yinli.item.vo.Logistics;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("logisticsService")
public class LogisticsService {
	
	public Map<String, Object> findInfoByConditions(Logistics selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return logisticsDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Logistics model where model.dr!=1 or model.dr is null";
		
		List<Logistics> infoList = logisticsDAO.findAll(start, limit, queryString);
		int listcount = logisticsDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Logistics newinfo) throws Exception{
		logisticsDAO.save(newinfo);
	}
	
	public Logistics findById( Integer id){
		Logistics newinfo = logisticsDAO.findById(id);
		return newinfo;
	}
	
	public void update(Logistics modifyinfo){
		logisticsDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		logisticsDAO.delete(delData);
	}
	
	
	@Resource LogisticsDAO logisticsDAO;

}
