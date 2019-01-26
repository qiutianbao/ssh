package com.yinli.item.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.StoragebillsDAO;
import com.yinli.item.vo.Storagebills;

@Service("storagebillsService")
public class StoragebillsService {
	
	public Map<String, Object> findAll(){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "FROM Storagebills model";
		
		List<Storagebills> infoList = storagebillsDAO.findAll(queryString);
		int listCount = infoList.size();
		map.put("infoList", infoList);
		map.put("listCount",listCount);
		return map;
	}
	
	
	public void addNewInfo( Storagebills newinfo) throws Exception{
		storagebillsDAO.save(newinfo);
	}
	
	public Storagebills findById(Integer id){
		Storagebills newinfo = storagebillsDAO.findById(id);
		return newinfo;
	}
	public List<Storagebills> findByIds(Integer id){
		List<Storagebills> newinfo = storagebillsDAO.findByIds(id);
		return newinfo;
	}
	public void update(Storagebills modifyinfo){
		storagebillsDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		storagebillsDAO.delete(delData);
	}
	
	public Map<String, Object> findInfoByConditions(Storagebills storagebills,Integer address,Date storagetime) {
		return storagebillsDAO.findInfoByConditions(storagebills, address,storagetime);
	}
	
	@Resource StoragebillsDAO storagebillsDAO;

	public void save(Storagebills storagebills) {
		storagebillsDAO.save(storagebills);
	}
}
