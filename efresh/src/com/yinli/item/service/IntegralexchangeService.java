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

import com.yinli.item.dao.IntegralexchangeDAO;
import com.yinli.item.vo.Integralexchange;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("integralexchangeService")
public class IntegralexchangeService {
	
	public Map<String, Object> findInfoByConditions(Integralexchange selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return integralexchangeDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Integralexchange model ";
		
		List<Integralexchange> infoList = integralexchangeDAO.findAll(start, limit, queryString);
		int listcount = integralexchangeDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Integralexchange newinfo) throws Exception{
		integralexchangeDAO.save(newinfo);
	}
	
	public Integralexchange findById( Integer id){
		Integralexchange newinfo = integralexchangeDAO.findById(id);
		return newinfo;
	}
	
	public void update(Integralexchange modifyinfo){
		integralexchangeDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		integralexchangeDAO.delete(delData);
	}
	
	
	@Resource IntegralexchangeDAO integralexchangeDAO;

}
