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

import com.yinli.item.dao.EvaluateDAO;
import com.yinli.item.vo.Advisory;
import com.yinli.item.vo.Evaluate;
import com.yinli.item.vo.T_tlr_mgmt;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("evaluateService")
public class EvaluateService {
	
	public Map<String, Object> findInfoByConditions(Evaluate selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return evaluateDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String starttime, String endtime,String orderNo ){
		String hql="from T_tlr_mgmt t, Evaluate e where t.idNumber=e.idEvaluate and (e.dr is null or e.dr=0)";
		if(starttime!=null  && !starttime.equals("")  && endtime!=null && !endtime.equals("")) {
		   hql+=" and e.evaluatetime between '"+starttime+"' and  '"+endtime+"'";	
		}
		if(orderNo!=null && !orderNo.equals("")) {
			   hql+=" and e.orderNo like '%"+orderNo+"%'";	
		}
		List list = evaluateDAO.findAll(start, limit, hql);
		Map<String, Object> datamap = null;
		Map<String, Object> map = new HashMap<String, Object>();
		List groups=new ArrayList();  
		for(int i=0;i<list.size();i++){  
			datamap = new HashMap<String, Object>();
		    Object[] item=(Object[])list.get(i);  
		    T_tlr_mgmt tlr_mgmt = (T_tlr_mgmt) item[0];
		    Evaluate   evaluate = (Evaluate)item[1];
		    datamap.put("orderNo", evaluate.getOrderNo());
		    datamap.put("evaluatecontent", evaluate.getEvaluatecontent());
		    datamap.put("evaluatetime", evaluate.getEvaluatetime());
		    datamap.put("idNumber", evaluate.getIdNumber());
		    datamap.put("tlr_name", tlr_mgmt.getTlr_name());
		    datamap.put("phonenumber", tlr_mgmt.getPhone());
		    groups.add(datamap);
		}  
		int listcount = list.size();
		map.put("infoList", groups);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Evaluate newinfo) throws Exception{
		evaluateDAO.save(newinfo);
	}
	
	public Evaluate findById( Integer id){
		Evaluate newinfo = evaluateDAO.findById(id);
		return newinfo;
	}
	
	public void update(Evaluate modifyinfo){
		evaluateDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		evaluateDAO.delete(delData);
	}
	
	
	@Resource EvaluateDAO evaluateDAO;

}
