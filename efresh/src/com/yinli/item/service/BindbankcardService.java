package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-23
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.BindbankcardDAO;
import com.yinli.item.vo.Bindbankcard;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("bindbankcardService")
public class BindbankcardService {
	
	public Map<String, Object> findInfoByConditions(Bindbankcard selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return bindbankcardDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Bindbankcard model ";
		
		List<Bindbankcard> infoList = bindbankcardDAO.findAll(start, limit, queryString);
		int listcount = bindbankcardDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Bindbankcard newinfo) throws Exception{
		bindbankcardDAO.save(newinfo);
	}
	
	public Bindbankcard findById( Integer id){
		Bindbankcard newinfo = bindbankcardDAO.findById(id);
		return newinfo;
	}
	
	public void update(Bindbankcard modifyinfo){
		bindbankcardDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		bindbankcardDAO.delete(delData);
	}
	
	
	@Resource BindbankcardDAO bindbankcardDAO;

}
