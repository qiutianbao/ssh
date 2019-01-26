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

import com.yinli.item.dao.CommoditypriceDAO;
import com.yinli.item.vo.Commoditylevel;
import com.yinli.item.vo.Commodityprice;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("commoditypriceService")
public class CommoditypriceService {
	
	public Map<String, Object> findInfoByConditions(Commodityprice selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return commoditypriceDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Commodityprice model ";
		
		List<Commodityprice> infoList = commoditypriceDAO.findAll(start, limit, queryString);
		int listcount = commoditypriceDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Commodityprice newinfo) throws Exception{
		commoditypriceDAO.save(newinfo);
	}
	
	public Commodityprice findById( Integer id){
		Commodityprice newinfo = commoditypriceDAO.findById(id);
		return newinfo;
	}
	
	public void update(Commodityprice modifyinfo){
		commoditypriceDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		commoditypriceDAO.delete(delData);
	}
	
	public Map<String, Object> findInfoByIdLevel(Commoditylevel commoditylevel,int start,int limit){
		return commoditypriceDAO.findInfoByIdLevel(commoditylevel,start,limit);
	}
	
	@Resource CommoditypriceDAO commoditypriceDAO;

}
