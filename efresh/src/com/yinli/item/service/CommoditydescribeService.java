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

import com.yinli.item.dao.CommoditydescribeDAO;
import com.yinli.item.vo.Commoditydescribe;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("commoditydescribeService")
public class CommoditydescribeService {
	
	public Map<String, Object> findInfoByConditions(Commoditydescribe selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return commoditydescribeDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Commoditydescribe model ";
		
		List<Commoditydescribe> infoList = commoditydescribeDAO.findAll(start, limit, queryString);
		int listcount = commoditydescribeDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Commoditydescribe newinfo) throws Exception{
		commoditydescribeDAO.save(newinfo);
	}
	
	public Commoditydescribe findById( Integer id){
		Commoditydescribe newinfo = commoditydescribeDAO.findById(id);
		return newinfo;
	}
	
	public void update(Commoditydescribe modifyinfo){
		commoditydescribeDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		commoditydescribeDAO.delete(delData);
	}
	public Map<String, Object> findInfoByIdCommodity(Commoditydescribe selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return commoditydescribeDAO.findInfoByIdCommodity(selectinfo, start, limit);
	}
	
	
	@Resource CommoditydescribeDAO commoditydescribeDAO;

}
