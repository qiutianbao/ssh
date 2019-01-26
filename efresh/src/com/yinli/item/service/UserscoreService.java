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

import com.yinli.item.dao.UserscoreDAO;
import com.yinli.item.vo.Feedback;
import com.yinli.item.vo.T_tlr_mgmt;
import com.yinli.item.vo.Userscore;
import com.donglusoft.person.util.PersonUtils;
import com.donglusoft.zzz.util.PropertiesReader;

@Service("userscoreService")
public class UserscoreService {
	
	public Map<String, Object> findInfoByConditions(Userscore selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return userscoreDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String orderNo,Integer score){
		String hql="from T_tlr_mgmt t, Userscore us where t.idNumber=us.idScore and (us.dr is null or us.dr=0)";
		if(orderNo!=null && !orderNo.equals("")) {
		   hql+=" and us.orderNo like '%"+orderNo+"%'";	
		}
		if(score!=null && score>0) {
			hql+=" and us.score="+score;
		}
		//String hql="select t.tlr_name,f.feedbacktime,f.feedcontent from T_tlr_mgmt t,Feedback f where t.idNumber=f.idFeedback";
		List list = userscoreDAO.findAll(start, limit, hql);
		Map<String, Object> datamap = null;
		Map<String, Object> map = new HashMap<String, Object>();
		List groups=new ArrayList();  
		for(int i=0;i<list.size();i++){  
			datamap = new HashMap<String, Object>();
		    Object[] item=(Object[])list.get(i);  
		    T_tlr_mgmt tlr_mgmt = (T_tlr_mgmt) item[0];
		    Userscore   userscore = (Userscore)item[1];
		    datamap.put("orderNo", userscore.getOrderNo());
		    datamap.put("commodity", userscore.getCommodity());
		    datamap.put("originaddress", userscore.getOriginaddress());
		    datamap.put("score", userscore.getScore());
		    datamap.put("idNumber", userscore.getIdNumber());
		    datamap.put("tlr_name", tlr_mgmt.getTlr_name());
		    datamap.put("phonenumber", tlr_mgmt.getPhone());
		    groups.add(datamap);
		} 
		int listcount = list.size();
		map.put("infoList", groups);
		map.put("listCount", listcount);
		return map;
	}
	
	
	public void addNewInfo( Userscore newinfo) throws Exception{
		userscoreDAO.save(newinfo);
	}
	
	public Userscore findById( Integer id){
		Userscore newinfo = userscoreDAO.findById(id);
		return newinfo;
	}
	
	public void update(Userscore modifyinfo){
		userscoreDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		userscoreDAO.delete(delData);
	}
	
	
	@Resource UserscoreDAO userscoreDAO;

}
