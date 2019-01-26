package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-25
 */
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.AdvisoryDAO;
import com.yinli.item.vo.Advisory;
import com.yinli.item.vo.Feedback;
import com.yinli.item.vo.T_tlr_mgmt;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("advisoryService")
public class AdvisoryService {
	
	public Map<String, Object> findInfoByConditions(Advisory selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return advisoryDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String starttime, String endtime){
		String hql="from T_tlr_mgmt t, Advisory a where t.idNumber=a.idAdvisory and (a.dr is null or a.dr=0)";
		if(starttime!=null  && !starttime.equals("") && endtime!=null && !endtime.equals("")) {
		   hql+=" and a.advtime between '"+starttime+"' and  '"+endtime+"'";	
		}
		List list = advisoryDAO.findAll(start, limit, hql);
		Map<String, Object> datamap = null;
		Map<String, Object> map = new HashMap<String, Object>();
		List groups=new ArrayList();  
		for(int i=0;i<list.size();i++){  
			datamap = new HashMap<String, Object>();
		    Object[] item=(Object[])list.get(i);  
		    T_tlr_mgmt tlr_mgmt = (T_tlr_mgmt) item[0];
		    Advisory   advisory = (Advisory)item[1];
		    datamap.put("advtime", advisory.getAdvtime());
		    datamap.put("advcontent", advisory.getAdvcontent());
		    datamap.put("idNumber", advisory.getIdNumber());
		    datamap.put("tlr_name", tlr_mgmt.getTlr_name());
		    groups.add(datamap);
		}  
		int listcount = list.size();
		map.put("infoList", groups);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Advisory newinfo) throws Exception{
		advisoryDAO.save(newinfo);
	}
	
	public Advisory findById( Integer id){
		Advisory newinfo = advisoryDAO.findById(id);
		return newinfo;
	}
	
	public void update(Advisory modifyinfo){
		advisoryDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		advisoryDAO.delete(delData);
	}
	
	
	@Resource AdvisoryDAO advisoryDAO;

}
