package com.donglusoft.person.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.donglusoft.person.DAO.PositionnameinfoDAO;
import com.donglusoft.person.domain.Positionnameinfo;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("positionNameInfoService")
public class PositionNameInfoService {
	
	public List<Positionnameinfo> findAll( int start, int limit){
		return positionNameInfoDAO.findAll(start, limit);
	}
	
	public int count(){
		return positionNameInfoDAO.count();
	}
	
	public void addNewInfo( Positionnameinfo newinfo) throws Exception{
		Properties properties = PropertiesReader.getPropertiesReader().getProperties();
		
		newinfo.setDelstate(properties.getProperty("PERSON_INFO_VALID"));
		positionNameInfoDAO.save(newinfo);
	}
	
	public Positionnameinfo findById( String id){
		return positionNameInfoDAO.findById(id);
	}
	
	public void update(Positionnameinfo modifyinfo){
		positionNameInfoDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		positionNameInfoDAO.delete(delData);
	}
	
	
	@Resource PositionnameinfoDAO positionNameInfoDAO;
}
