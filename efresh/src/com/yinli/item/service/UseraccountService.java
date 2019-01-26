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

import com.yinli.item.dao.UseraccountDAO;
import com.yinli.item.vo.Useraccount;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("useraccountService")
public class UseraccountService {
	
	public Map<String, Object> findInfoByConditions(Useraccount selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return useraccountDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Useraccount model ";
		
		List<Useraccount> infoList = useraccountDAO.findAll(start, limit, queryString);
		int listcount = useraccountDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Useraccount newinfo) throws Exception{
		useraccountDAO.save(newinfo);
	}
	
	public Useraccount findById( Integer id){
		Useraccount newinfo = useraccountDAO.findById(id);
		return newinfo;
	}
	
	public void update(Useraccount modifyinfo){
		useraccountDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		useraccountDAO.delete(delData);
	}
	
	
	@Resource UseraccountDAO useraccountDAO;

}
