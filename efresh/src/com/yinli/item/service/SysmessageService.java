package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-25
 */
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.SysmessageDAO;
import com.yinli.item.vo.Sysmessage;

@Service("sysmessageService")
public class SysmessageService {
	
	public Map<String, Object> findInfoByConditions(Sysmessage sysmessge, int start, int limit, String starttime, String endtime) throws Exception {
		return sysmessageDAO.findInfoByConditions(sysmessge, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Sysmessage model ";

		List<Sysmessage> infoList = sysmessageDAO.findAll(start, limit, queryString);
		int listcount = sysmessageDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public int addNewInfo( Sysmessage newinfo) throws Exception{
		return sysmessageDAO.save(newinfo);
	}
	
	public Sysmessage findById( Integer id){
		Sysmessage newinfo = sysmessageDAO.findById(id);
		return newinfo;
	}
	
	public void update(Sysmessage modifyinfo){
		sysmessageDAO.update(modifyinfo);
	} 
	
	public void delete(String id){
		sysmessageDAO.delete(id);
	}
	
	
	@Resource SysmessageDAO sysmessageDAO;

}