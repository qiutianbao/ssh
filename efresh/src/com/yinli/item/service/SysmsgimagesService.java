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

import com.yinli.item.dao.SysmsgimagesDAO;
import com.yinli.item.vo.Sysmsgimages;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("sysmsgimagesService")
public class SysmsgimagesService {
	
	public Map<String, Object> findInfoByConditions(Sysmsgimages selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return sysmsgimagesDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Sysmsgimages model ";
		
		List<Sysmsgimages> infoList = sysmsgimagesDAO.findAll(start, limit, queryString);
		int listcount = sysmsgimagesDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Sysmsgimages newinfo) throws Exception{
		sysmsgimagesDAO.save(newinfo);
	}
	
	public Sysmsgimages findById( Integer id){
		Sysmsgimages newinfo = sysmsgimagesDAO.findById(id);
		return newinfo;
	}
	
	public Sysmsgimages findByIds( Integer id){
		Sysmsgimages newinfo = sysmsgimagesDAO.findByIds(id);
		return newinfo;
	}
	
	public void update(Sysmsgimages modifyinfo){
		sysmsgimagesDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		sysmsgimagesDAO.delete(delData);
	}
	
	
	@Resource SysmsgimagesDAO sysmsgimagesDAO;

}
