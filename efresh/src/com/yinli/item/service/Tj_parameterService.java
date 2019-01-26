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

import com.yinli.item.dao.Tj_parameterDAO;
import com.yinli.item.vo.Tj_parameter;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("tj_parameterService")
public class Tj_parameterService {
	
	public Map<String, Object> findInfoByConditions(Tj_parameter selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return tj_parameterDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Tj_parameter model ";
		
		List<Tj_parameter> infoList = tj_parameterDAO.findAll(start, limit, queryString);
		int listcount = tj_parameterDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Tj_parameter newinfo) throws Exception{
		tj_parameterDAO.save(newinfo);
	}
	
	public Tj_parameter findById( Integer id){
		Tj_parameter newinfo = tj_parameterDAO.findById(id);
		return newinfo;
	}
	
	public void update(Tj_parameter modifyinfo){
		tj_parameterDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		tj_parameterDAO.delete(delData);
	}
	
	
	@Resource Tj_parameterDAO tj_parameterDAO;

}
