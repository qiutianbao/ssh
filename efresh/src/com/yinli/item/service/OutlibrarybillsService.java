package com.yinli.item.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.OutlibrarybillsDAO;
import com.yinli.item.vo.Outlibrary;
import com.yinli.item.vo.Outlibrarybills;
import com.yinli.item.vo.Storagebills;
@Service("outlibrarybillsService")
public class OutlibrarybillsService {
	public Map<String, Object> findAll(){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		queryString = "FROM Outlibrarybills model where dr=0";
		
		List<Outlibrarybills> infoList = outlibrarybillsDAO.findAll(queryString);
		int listCount = infoList.size();
		map.put("infoList", infoList);
		map.put("listCount",listCount);
		return map;
	}
	
	
	public void addNewInfo( Outlibrarybills newinfo) throws Exception{
		outlibrarybillsDAO.save(newinfo);
	}
	
	public Outlibrarybills findById(Integer id){
		Outlibrarybills newinfo = outlibrarybillsDAO.findById(id);
		return newinfo;
	}
	
	public void update(Outlibrarybills modifyinfo){
		outlibrarybillsDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		outlibrarybillsDAO.delete(delData);
	}
	
	public Map<String, Object> findInfoByConditions(Outlibrarybills outlibrarybills,Integer address,Date storagetime) {
		return outlibrarybillsDAO.findInfoByConditions(outlibrarybills, address,storagetime);
	}
	
	@Resource OutlibrarybillsDAO outlibrarybillsDAO;

	public void save(Outlibrarybills outlibrarybills) {
		outlibrarybillsDAO.save(outlibrarybills);
	}


	public List<Outlibrarybills> findByIds(Integer idOutlibrary) {
		 List<Outlibrarybills> newinfo = outlibrarybillsDAO.findByIds(idOutlibrary);
		return newinfo;
	}
}
