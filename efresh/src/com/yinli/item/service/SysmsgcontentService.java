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

import com.yinli.item.dao.SysmsgcontentDAO;
import com.yinli.item.vo.Sysmsgcontent;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("sysmsgcontentService")
public class SysmsgcontentService {
	
	public Map<String, Object> findInfoByConditions(Sysmsgcontent selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return sysmsgcontentDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Sysmsgcontent model ";
		
		List<Sysmsgcontent> infoList = sysmsgcontentDAO.findAll(start, limit, queryString);
		int listcount = sysmsgcontentDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public Integer addNewInfo( Sysmsgcontent newinfo) throws Exception{
		return sysmsgcontentDAO.save(newinfo);
	}
	
	public Sysmsgcontent findById( Integer id){
		Sysmsgcontent newinfo = sysmsgcontentDAO.findById(id);
		return newinfo;
	}
	
	public Sysmsgcontent findByIds( Integer id){
		Sysmsgcontent newinfo = sysmsgcontentDAO.findByIds(id);
		return newinfo;
	}
	
	public void update(Sysmsgcontent modifyinfo){
		sysmsgcontentDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		sysmsgcontentDAO.delete(delData);
	}
	
	
	@Resource SysmsgcontentDAO sysmsgcontentDAO;

}
