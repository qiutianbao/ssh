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

import com.yinli.item.dao.CommoditylevelDAO;
import com.yinli.item.vo.Commodity;
import com.yinli.item.vo.Commoditylevel;

@Service("commoditylevelService")
public class CommoditylevelService {
	
	public Map<String, Object> findInfoByConditions(Commodity commodity,Commoditylevel selectinfo, int start, int limit, String starttime, String endtime,Integer idCategory) throws Exception {
		return commoditylevelDAO.findInfoByConditions(commodity,selectinfo, start, limit,idCategory);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "from Commoditylevel";
		
		List<Commoditylevel> infoList = commoditylevelDAO.findAll(start, limit, queryString);
		int listcount = commoditylevelDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Commoditylevel newinfo) throws Exception{
		commoditylevelDAO.save(newinfo);
	}
	
	public Commoditylevel findById( Integer id){
		Commoditylevel newinfo = commoditylevelDAO.findById(id);
		return newinfo;
	}
	
	public List<Commoditylevel> findByIds( Integer id){
		List<Commoditylevel> newinfo = commoditylevelDAO.findByIds(id);
		return newinfo;
	}
	
	public void update(Commoditylevel modifyinfo){
		commoditylevelDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		commoditylevelDAO.delete(delData);
	}
	
	public Map<String, Object> findInfoByIdCommodity(Commoditylevel commoditylevel,int start,int limit){
		return commoditylevelDAO.findInfoByIdCommodity(commoditylevel,start,limit);
	}
	
	@Resource CommoditylevelDAO commoditylevelDAO;

}
