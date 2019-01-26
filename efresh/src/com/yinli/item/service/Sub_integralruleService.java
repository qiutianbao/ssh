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

import com.yinli.item.dao.Sub_integralruleDAO;
import com.yinli.item.vo.Sub_integralrule;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("sub_integralruleService")
public class Sub_integralruleService {
	
	public Map<String, Object> findInfoByConditions(Sub_integralrule selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return sub_integralruleDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Sub_integralrule model ";
		
		List<Sub_integralrule> infoList = sub_integralruleDAO.findAll(start, limit, queryString);
		int listcount = sub_integralruleDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Sub_integralrule newinfo) throws Exception{
		sub_integralruleDAO.save(newinfo);
	}
	
	public Sub_integralrule findById( Integer id){
		Sub_integralrule newinfo = sub_integralruleDAO.findById(id);
		return newinfo;
	}
	
	public void update(Sub_integralrule modifyinfo){
		sub_integralruleDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		sub_integralruleDAO.delete(delData);
	}
	
	
	@Resource Sub_integralruleDAO sub_integralruleDAO;

}
