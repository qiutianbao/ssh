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

import com.yinli.item.dao.CommodityimagesDAO;
import com.yinli.item.vo.Commodityimages;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("commodityimagesService")
public class CommodityimagesService {
	
	public Map<String, Object> findInfoByConditions(Commodityimages selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return commodityimagesDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Commodityimages model ";
		
		List<Commodityimages> infoList = commodityimagesDAO.findAll(start, limit, queryString);
		int listcount = commodityimagesDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Commodityimages newinfo) throws Exception{
		commodityimagesDAO.save(newinfo);
	}
	
	public Commodityimages findById( Integer id){
		Commodityimages newinfo = commodityimagesDAO.findById(id);
		return newinfo;
	}
	
	public void update(Commodityimages modifyinfo){
		commodityimagesDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		commodityimagesDAO.delete(delData);
	}
	
	public Map<String, Object> findInfoByIdCommodity(Commodityimages selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return commodityimagesDAO.findInfoByIdCommodity(selectinfo, start, limit);
	}
	
	@Resource CommodityimagesDAO commodityimagesDAO;

}
