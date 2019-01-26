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

import com.yinli.item.dao.TradingrecordsDAO;
import com.yinli.item.vo.Tradingrecords;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("tradingrecordsService")
public class TradingrecordsService {
	
	public Map<String, Object> findInfoByConditions(Tradingrecords selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return tradingrecordsDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Tradingrecords model ";
		
		List<Tradingrecords> infoList = tradingrecordsDAO.findAll(start, limit, queryString);
		int listcount = tradingrecordsDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Tradingrecords newinfo) throws Exception{
		tradingrecordsDAO.save(newinfo);
	}
	
	public Tradingrecords findById( Integer id){
		Tradingrecords newinfo = tradingrecordsDAO.findById(id);
		return newinfo;
	}
	
	public void update(Tradingrecords modifyinfo){
		tradingrecordsDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		tradingrecordsDAO.delete(delData);
	}
	
	
	@Resource TradingrecordsDAO tradingrecordsDAO;

}
