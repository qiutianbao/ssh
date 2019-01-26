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

import com.yinli.item.dao.OrderdetailedDAO;
import com.yinli.item.vo.Orderdetailed;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("orderdetailedService")
public class OrderdetailedService {
	
	public Map<String, Object> findInfoByConditions(Orderdetailed selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return orderdetailedDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Orderdetailed model ";
		
		List<Orderdetailed> infoList = orderdetailedDAO.findAll(start, limit, queryString);
		int listcount = orderdetailedDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Orderdetailed newinfo) throws Exception{
		orderdetailedDAO.save(newinfo);
	}
	
	public Orderdetailed findById( Integer id){
		Orderdetailed newinfo = orderdetailedDAO.findById(id);
		return newinfo;
	}
	
	public void update(Orderdetailed modifyinfo){
		orderdetailedDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		orderdetailedDAO.delete(delData);
	}
	
	public Map<String, Object> findByOrderNo(Integer id,int start, int limit){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Orderdetailed model where idOrderNo = "+id;
		List<Orderdetailed> infoList = orderdetailedDAO.findAll(start, limit, queryString);
		int listcount = orderdetailedDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}

	public List<Map<String, Object>> findMapDataBySql(final String sql, final Object... values) throws Exception{
		return orderdetailedDAO.findMapDataBySql(sql, values);
	}
	
	@Resource OrderdetailedDAO orderdetailedDAO;

}
