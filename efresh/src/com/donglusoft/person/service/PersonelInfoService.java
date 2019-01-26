package com.donglusoft.person.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.donglusoft.person.DAO.PersonelinfoDAO;
import com.donglusoft.person.domain.Personelinfo;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("personelInfoService")
public class PersonelInfoService {
	
	public Map<String, Object> findInfoByConditions(Personelinfo selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		//汉字转码，解决乱码问题
		selectinfo.setName(personUtils.changeCode(selectinfo.getName()));
		return personelInfoDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		
		Properties properties = PropertiesReader.getPropertiesReader().getProperties();
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		if(flag.equals("baseInfo")){
			queryString = "from Personelinfo model order by model.createtime desc";
		}else if(flag.equals("selectInfo")){
			queryString = "from Personelinfo model where model.state = "+properties.getProperty("PERSON_BASE_JOB")+" order by model.createtime desc";
		}
		
		List<Personelinfo> infoList = personelInfoDAO.findAll(start, limit, queryString);
		for(int i=0; i<infoList.size(); i++){
			infoList.get(i).setShowstate(properties.getProperty(infoList.get(i).getState()));
		}
		int listcount = personelInfoDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Personelinfo newinfo) throws Exception{
		Properties properties = PropertiesReader.getPropertiesReader().getProperties();
		//获取系统时间
//		//System.out.println(newinfo.getGender()+"=======");
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss"); 
		newinfo.setState(properties.getProperty("PERSON_BASE_JOB"));
		newinfo.setCreatetime(dateFormat.format(new Date()));
		newinfo.setWorkstarttime(personUtils.getNumberDate(newinfo.getWorkstarttime()));
		newinfo.setGender(personUtils.changeGender(newinfo.getGender()));
		personelInfoDAO.save(newinfo);
	}
	
	public Personelinfo findById( String id){
		Personelinfo newinfo = personelInfoDAO.findById(id);
		newinfo.setWorkstarttime(personUtils.getStringDate(newinfo.getWorkstarttime()));
		return newinfo;
	}
	
	public void update(Personelinfo modifyinfo){
		modifyinfo.setWorkstarttime(personUtils.getNumberDate(modifyinfo.getWorkstarttime()));
		personelInfoDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		personelInfoDAO.delete(delData);
	}
	
	
	
	@Resource PersonelinfoDAO personelInfoDAO;
	@Resource
	private PersonUtils personUtils;

}
