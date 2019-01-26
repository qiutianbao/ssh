package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-25
 */
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.IntegralDAO;
import com.yinli.item.vo.Integral;

@Service("integralService")
public class IntegralService {
	
	public Map<String, Object> findInfoByConditions(Integral selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return integralDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String starttime,String endtime,Integer integralstart,Integer integralend){
		String hql="select t.phone,t.tlr_name,g.gettime,it.integralSum,SUM(g.integral) AS integraltotal,t.idNumber "
				+ "from T_tlr_mgmt t,Integral g ,Integraltotal it where t.idNumber=g.idUser "
				+ "and t.idNumber=it.idUser and (g.dr is null or g.dr=0)";
		if(starttime!=null  && !starttime.equals("")  && endtime!=null && !endtime.equals("")) {
		   hql+=" and g.gettime between '"+starttime+"' and  '"+endtime+"'";	
		}
		if(integralstart!=null) {
			hql+=" and it.integralSum>="+integralstart;
		}if(integralend!=null) {
			hql+=" and it.integralSum<="+integralend;
		}if(integralstart!=null && integralend!=null) {
			hql+=" and it.integralSum>"+integralstart +" and it.integralSum<="+integralend;
		}
		hql+=" group by t.phone,g.gettime";
		List list = integralDAO.findAll(start, limit, hql);
		Map<String, Object> datamap = null;
		Map<String, Object> map = new HashMap<String, Object>();
		List groups=new ArrayList();  
		for(int i=0;i<list.size();i++){  
			datamap = new HashMap<String, Object>();
		    Object[] item=(Object[])list.get(i);  
		    datamap.put("phonenumber", item[0]);
		    datamap.put("tlr_name", item[1]);
		    datamap.put("gettime", item[2]);
		    datamap.put("integraltotal", item[3]);
		    datamap.put("integral", item[4]);
		    groups.add(datamap);
		}  
		int listcount = list.size();
		map.put("infoList", groups);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Integral newinfo) throws Exception{
		integralDAO.save(newinfo);
	}
	
	public Integral findById( Integer id){
		Integral newinfo = integralDAO.findById(id);
		return newinfo;
	}
	
	public void update(Integral modifyinfo){
		integralDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		integralDAO.delete(delData);
	}
	
	
	@Resource IntegralDAO integralDAO;

}
