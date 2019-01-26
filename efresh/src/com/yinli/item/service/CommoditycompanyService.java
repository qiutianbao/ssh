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

import com.yinli.item.dao.CommoditycompanyDAO;
import com.yinli.item.vo.Commoditycompany;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("commoditycompanyService")
public class CommoditycompanyService {
	
	public Map<String, Object> findInfoByConditions(Commoditycompany selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return commoditycompanyDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Commoditycompany model where model.dr!=1 or model.dr is null";
		
		List<Commoditycompany> infoList = commoditycompanyDAO.findAll(start, limit, queryString);
		int listcount = commoditycompanyDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public Map<String, Object> findAll(){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Commoditycompany model where model.dr!=1 or model.dr is null";
		
		List<Commoditycompany> infoList = commoditycompanyDAO.findAlls(queryString);
		int listcount = commoditycompanyDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Commoditycompany newinfo) throws Exception{
		commoditycompanyDAO.save(newinfo);
	}
	
	public Commoditycompany findById( Integer id){
		Commoditycompany newinfo = commoditycompanyDAO.findById(id);
		return newinfo;
	}
	
	
	
	public void update(Commoditycompany modifyinfo){
		commoditycompanyDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		commoditycompanyDAO.delete(delData);
	}
	
	
	@Resource CommoditycompanyDAO commoditycompanyDAO;

}
