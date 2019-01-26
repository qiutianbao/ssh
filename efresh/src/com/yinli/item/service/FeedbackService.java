package com.yinli.item.service;
/*
 *
 * 创建日期: 2016-01-23
 */
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.FeedbackDAO;
import com.yinli.item.vo.Feedback;
import com.yinli.item.vo.FeedbackForm;
import com.yinli.item.vo.T_tlr_mgmt;

@Service("feedbackService")
public class FeedbackService {
	
	public Map<String, Object> findInfoByConditions(Feedback selectinfo, int start, int limit, String starttime, String endtime) throws Exception {
		return feedbackDAO.findInfoByConditions(selectinfo, start, limit);
	}
	
	public Map<String, Object> findAll( int start, int limit, String starttime, String endtime ){
		
		String hql="from T_tlr_mgmt t, Feedback f where t.idNumber=f.idFeedback and (f.dr is null or f.dr=0)";
		if(starttime!=null  && !starttime.equals("")  && endtime!=null && !endtime.equals("")) {
		   hql+=" and f.feedbacktime between '"+starttime+"' and  '"+endtime+"'";	
		}
		//String hql="select t.tlr_name,f.feedbacktime,f.feedcontent from T_tlr_mgmt t,Feedback f where t.idNumber=f.idFeedback";
		List list = feedbackDAO.findAll(start, limit, hql);
		Map<String, Object> datamap = null;
		Map<String, Object> map = new HashMap<String, Object>();
		List groups=new ArrayList();  
		for(int i=0;i<list.size();i++){  
			datamap = new HashMap<String, Object>();
		    Object[] item=(Object[])list.get(i);  
		    T_tlr_mgmt tlr_mgmt = (T_tlr_mgmt) item[0];
		    Feedback   feedback = (Feedback)item[1];
		    datamap.put("feedbacktime", feedback.getFeedbacktime());
		    datamap.put("feedcontent", feedback.getFeedcontent());
		    datamap.put("idNumber", feedback.getIdNumber());
		    datamap.put("tlr_name", tlr_mgmt.getTlr_name());
		    groups.add(datamap);
		}  
		int listcount = list.size();
		map.put("infoList", groups);
		map.put("listCount", listcount);
		return map;
	}
	
	public FeedbackForm findById(Integer id){
		String hql="from T_tlr_mgmt t, Feedback f where t.idNumber=f.idFeedback and (f.dr is null or f.dr=0)";
		if(id != null){
			hql=hql+" and f.idNumber="+id;
		}
		List list  = feedbackDAO.findByIds(hql);
		Map<String, Object> datamap = null;
		Map<String, Object> map = new HashMap<String, Object>();
		FeedbackForm ff = new FeedbackForm();
		for(int i=0;i<list.size();i++){  
			datamap = new HashMap<String, Object>();
		    Object[] item=(Object[])list.get(i);  
		    T_tlr_mgmt tlr_mgmt = (T_tlr_mgmt) item[0];
		    Feedback   feedback = (Feedback)item[1];
		    
		    ff.setFeedbacktime(feedback.getFeedbacktime());
		    ff.setFeedcontent(feedback.getFeedcontent());
		    ff.setTlr_name( tlr_mgmt.getTlr_name());
		}  
		return ff;
	}
	
	public void addNewInfo( Feedback newinfo) throws Exception{
		feedbackDAO.save(newinfo);
	}
	

	
	public void update(Feedback modifyinfo){
		feedbackDAO.update(modifyinfo);
	} 
	
	public void delete( String delData ){
		feedbackDAO.delete(delData);
	}
	
	
	@Resource FeedbackDAO feedbackDAO;

}
