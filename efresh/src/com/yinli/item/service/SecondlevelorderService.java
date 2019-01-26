package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-28
 */
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.drools.lang.dsl.DSLMapParser.mapping_file_return;
import org.springframework.stereotype.Service;

import com.yinli.item.dao.SecondlevelorderDAO;
import com.yinli.item.vo.Secondlevelorder;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("secondlevelorderService")
public class SecondlevelorderService {
	
	public Map<String, Object> findInfoByConditions(Secondlevelorder selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return secondlevelorderDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findInfoByConditions2(Secondlevelorder selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return secondlevelorderDAO.findInfoByConditions2(selectinfo, start, limit);
	}
	
	public Map<String, Object> findInfoByConditions3(Secondlevelorder selectinfo, int start, int limit,Date starttime,Date endtime) throws Exception{
		return secondlevelorderDAO.findInfoByConditions3(selectinfo, start, limit,starttime, endtime);
	}
	
	public Map<String, Object> findAll( int start, int limit, String flag){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = "";
		if(flag.equals("baseInfo")){
			queryString = "select s.secondlevelorderNo,t.tlr_name,t.deliveryaddress,t.phone,e.address,s.creationordertime,s.orderstatus   "
				+ "from Secondlevelorder as s ,  Estore as e  , T_tlr_mgmt as t where e.idNumber = s.idStore and t.idNumber = s.idUser"
				+ " order by s.creationordertime desc ";
		}else{
			queryString = "from Secondlevelorder model where (model.dr!=1 or model.dr is null) "
					+  " order by model.creationordertime desc ";
		}
		
		
		List<Secondlevelorder> infoList = secondlevelorderDAO.findAll(start, limit, queryString);
		int listcount = secondlevelorderDAO.count(queryString);
		
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Secondlevelorder newinfo) throws Exception{
		secondlevelorderDAO.save(newinfo);
	}
	
	public Secondlevelorder findById( Integer id){
		Secondlevelorder newinfo = secondlevelorderDAO.findById(id);
		return newinfo;
	}
	
	public void update(Secondlevelorder modifyinfo){
		secondlevelorderDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		secondlevelorderDAO.delete(delData);
	}
	
	public Map<String, Object> findInfoByDate(Secondlevelorder selectinfo, int start, int limit) throws Exception {
		return secondlevelorderDAO.findInfoByDate(selectinfo, start, limit);
	}
	
	public Map<String, Object> findByHql(int start, int limit,String hql){
		Map<String, Object> map = new HashMap<String, Object>();
		String queryString = hql;	
		List<Secondlevelorder> infoList = secondlevelorderDAO.findAll(start, limit, queryString);
		int listcount = secondlevelorderDAO.count(queryString);
		map.put("infoList", infoList);
		map.put("listCount", listcount);
		return map;
	}
	
	public List<Object[]> findBySql(int start, int limit,String sql){
		return secondlevelorderDAO.findBySql(start,limit,sql);
	}
	
	@Resource SecondlevelorderDAO secondlevelorderDAO;

}
