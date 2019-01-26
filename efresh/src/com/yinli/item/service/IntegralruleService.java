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

import com.yinli.item.dao.IntegralruleDAO;
import com.yinli.item.vo.Integralrule;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("integralruleService")
public class IntegralruleService {
	
	public Map<String, Object> findInfoByConditions(Integralrule selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return integralruleDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Integralrule model ";
		
		List<Integralrule> infoList = integralruleDAO.findAll(start, limit, queryString);
		int listcount = integralruleDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Integralrule newinfo) throws Exception{
		integralruleDAO.save(newinfo);
	}
	
	public Integralrule findById( Integer id){
		Integralrule newinfo = integralruleDAO.findById(id);
		return newinfo;
	}
	
	public void update(Integralrule modifyinfo){
		integralruleDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		integralruleDAO.delete(delData);
	}
	
	
	@Resource IntegralruleDAO integralruleDAO;

}
