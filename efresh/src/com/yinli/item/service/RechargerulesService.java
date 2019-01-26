package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-27
 */
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.RechargerulesDAO;
import com.yinli.item.vo.Rechargerules;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("rechargerulesService")
public class RechargerulesService {
	
	public Map<String, Object> findInfoByConditions(Rechargerules selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return rechargerulesDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		List<Rechargerules> infoList =new ArrayList<Rechargerules>();
		if(flag.equals("sup")){
			queryString = "from Rechargerules model where model.ruleType='1' and ( model.dr!=1 or model.dr is null)";
			infoList = rechargerulesDAO.findAllBySql(start, limit, queryString);
		}else{
			queryString = "from Rechargerules model where model.ruleType='2' and (model.dr!=1 or model.dr is null)";
			infoList = rechargerulesDAO.findAll(start, limit, queryString);
		}
		int listcount = rechargerulesDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Rechargerules newinfo) throws Exception{
		rechargerulesDAO.save(newinfo);
	}
	
	public Rechargerules findById( Integer id){
		Rechargerules newinfo = rechargerulesDAO.findById(id);
		return newinfo;
	}
	
	public void update(Rechargerules modifyinfo){
		rechargerulesDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		rechargerulesDAO.delete(delData);
	}
	
	
	@Resource RechargerulesDAO rechargerulesDAO;

}
