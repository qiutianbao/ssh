package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-28
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.SecondorderdetailsDAO;
import com.yinli.item.vo.Secondlevelorder;
import com.yinli.item.vo.Secondorderdetails;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("secondorderdetailsService")
public class SecondorderdetailsService {
	
	public Map<String, Object> findInfoByConditions(Secondorderdetails selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return secondorderdetailsDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Secondorderdetails model ";
		
		List<Secondorderdetails> infoList = secondorderdetailsDAO.findAll(start, limit, queryString);
		int listcount = secondorderdetailsDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Secondorderdetails newinfo) throws Exception{
		secondorderdetailsDAO.save(newinfo);
	}
	
	public Secondorderdetails findById( Integer id){
		Secondorderdetails newinfo = secondorderdetailsDAO.findById(id);
		return newinfo;
	}
	
	public void update(Secondorderdetails modifyinfo){
		secondorderdetailsDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		secondorderdetailsDAO.delete(delData);
	}
	
	public Map<String, Object> findByHql(int start, int limit,String hql){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = hql;	
		List<Secondlevelorder> infoList = secondorderdetailsDAO.findAll(start, limit, queryString);
		int listcount = secondorderdetailsDAO.count(queryString);
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	@Resource SecondorderdetailsDAO secondorderdetailsDAO;

}
