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

import com.yinli.item.dao.Tj_paramitemDAO;
import com.yinli.item.vo.Tj_paramitem;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("tj_paramitemService")
public class Tj_paramitemService {
	
	public Map<String, Object> findInfoByConditions(Tj_paramitem selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return tj_paramitemDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Tj_paramitem model ";
		
		List<Tj_paramitem> infoList = tj_paramitemDAO.findAll(start, limit, queryString);
		int listcount = tj_paramitemDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Tj_paramitem newinfo) throws Exception{
		tj_paramitemDAO.save(newinfo);
	}
	
	public Tj_paramitem findById( Integer id){
		Tj_paramitem newinfo = tj_paramitemDAO.findById(id);
		return newinfo;
	}
	
	public void update(Tj_paramitem modifyinfo){
		tj_paramitemDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		tj_paramitemDAO.delete(delData);
	}
	
	
	@Resource Tj_paramitemDAO tj_paramitemDAO;

}
