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

import com.yinli.item.dao.AccountrevenueDAO;
import com.yinli.item.vo.Accountrevenue;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("accountrevenueService")
public class AccountrevenueService {
	
	public Map<String, Object> findInfoByConditions(Accountrevenue selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return accountrevenueDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Accountrevenue model ";
		
		List<Accountrevenue> infoList = accountrevenueDAO.findAll(start, limit, queryString);
		int listcount = accountrevenueDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Accountrevenue newinfo) throws Exception{
		accountrevenueDAO.save(newinfo);
	}
	
	public Accountrevenue findById( Integer id){
		Accountrevenue newinfo = accountrevenueDAO.findById(id);
		return newinfo;
	}
	
	public void update(Accountrevenue modifyinfo){
		accountrevenueDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		accountrevenueDAO.delete(delData);
	}
	
	
	@Resource AccountrevenueDAO accountrevenueDAO;

}
