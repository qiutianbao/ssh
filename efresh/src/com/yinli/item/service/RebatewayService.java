package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-27
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.RebatewayDAO;
import com.yinli.item.vo.Rebateway;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("rebatewayService")
public class RebatewayService {
	
	public Map<String, Object> findInfoByConditions(Rebateway selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return rebatewayDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Rebateway model where model.dr!=1 or model.dr is null";
		
		List<Rebateway> infoList = rebatewayDAO.findAll(start, limit, queryString);
		int listcount = rebatewayDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Rebateway newinfo) throws Exception{
		rebatewayDAO.save(newinfo);
	}
	
	public Rebateway findById( Integer id){
		Rebateway newinfo = rebatewayDAO.findById(id);
		return newinfo;
	}
	
	public void update(Rebateway modifyinfo){
		rebatewayDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		rebatewayDAO.delete(delData);
	}
	
	
	@Resource RebatewayDAO rebatewayDAO;

}
