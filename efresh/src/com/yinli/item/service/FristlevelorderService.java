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

import com.yinli.item.dao.FristlevelorderDAO;
import com.yinli.item.vo.Fristlevelorder;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("fristlevelorderService")
public class FristlevelorderService {
	
	public Map<String, Object> findInfoByConditions(Fristlevelorder selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return fristlevelorderDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findByConditions(Fristlevelorder selectinfo, int start, int limit, String starttime, String endtime) throws Exception{
		return fristlevelorderDAO.findByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Fristlevelorder model ";
		
		List<Fristlevelorder> infoList = fristlevelorderDAO.findAll(start, limit, queryString);
		int listcount = fristlevelorderDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Fristlevelorder newinfo) throws Exception{
		fristlevelorderDAO.save(newinfo);
	}
	
	public Fristlevelorder findById( Integer id){
		Fristlevelorder newinfo = fristlevelorderDAO.findById(id);
		return newinfo;
	}
	
	public void update(Fristlevelorder modifyinfo){
		fristlevelorderDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		fristlevelorderDAO.delete(delData);
	}
	
	
	@Resource FristlevelorderDAO fristlevelorderDAO;

}
