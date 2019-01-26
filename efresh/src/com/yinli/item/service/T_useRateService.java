package com.yinli.item.service;
/*
 *
 * 创建日期: 2014-03-21
 */
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yinli.item.dao.T_useRateDAO;
import com.yinli.item.vo.T_serviceCondition;
import com.yinli.item.vo.T_useRate;

@Service("t_useRateService")
public class T_useRateService {
	

	
	public Map<String, Object> findAll(T_useRate selectinfo, int start, int limit){
		Map<String, Object> map = new HashMap<String, Object>();
		int second=5*60/2;//默认为5分钟
		if(null!=selectinfo.getMinutes()||!"".equals(selectinfo.getMinutes())){
			second=Integer.parseInt(selectinfo.getMinutes())*60/2;//转换为妙
		}
		String queryString ="";
		if(null!=selectinfo.getIdNumber()&&!"".equals(selectinfo.getIdNumber())){
			queryString= "select t1.idNumber,t1.brno ,t1.realTime,(select inst_name from t_inst_mgmt where idNumber='44'+t1.brno) inst_name , convert(varchar,(t1.TIMEINT-"+second+")/3600) +':'+convert(varchar,(t1.TIMEINT-"+second+")%3600/60) +':'+convert(varchar,(t1.TIMEINT-"+second+")%60) startTime,"
					+"	convert(varchar,(t1.TIMEINT+"+second+")/3600) +':'+convert(varchar,(t1.TIMEINT+"+second+")%3600/60) +':'+convert(varchar,(t1.TIMEINT+"+second+")%60) endTime,count(idNumber) cn from "
					+" (select idNumber,brno,realTime,realDay,convert(integer,substring(realTime,1,2)) * 3600 + convert(integer,substring(realTime,4,2))*60 + convert(integer,substring(realTime,7,2)) AS TIMEINT from syslog "
					+"	where realDay='"+selectinfo.getRealDay()+"' and business='IPADCOMPINFOCONDITIO') t1, (select realDay,convert(integer,substring(realTime,1,2)) * 3600 + "
					+"	convert(integer,substring(realTime,4,2))*60 + convert(integer,substring(realTime,7,2)) AS TIMEINT from syslog where realDay='"+selectinfo.getRealDay()+"' and business='IPADCOMPINFOCONDITIO' ) t2 "
					+"  where t1.TIMEINT > "
					+" (t2.TIMEINT -"+second+") and t1.TIMEINT <= t2.TIMEINT+"+second+" and t1.brno in (select substring(idNumber,3,4) from t_inst_mgmt where inst_type='190002' and up_inst_no='"+selectinfo.getIdNumber()+"' )  group by t1.idNumber    order by cn desc ";
			}else{

				queryString= "select t1.idNumber,t1.brno ,t1.realTime,(select inst_name from t_inst_mgmt where idNumber='44'+t1.brno) inst_name , convert(varchar,(t1.TIMEINT-"+second+")/3600) +':'+convert(varchar,(t1.TIMEINT-"+second+")%3600/60) +':'+convert(varchar,(t1.TIMEINT-"+second+")%60) startTime,"
					+"	convert(varchar,(t1.TIMEINT+"+second+")/3600) +':'+convert(varchar,(t1.TIMEINT+"+second+")%3600/60) +':'+convert(varchar,(t1.TIMEINT+"+second+")%60) endTime,count(idNumber) cn from "
					+"	(select idNumber,brno,realTime,realDay,convert(integer,substring(realTime,1,2)) * 3600 + convert(integer,substring(realTime,4,2))*60 + convert(integer,substring(realTime,7,2)) AS TIMEINT from syslog "
					+"	where realDay='"+selectinfo.getRealDay()+"' and business='IPADCOMPINFOCONDITIO') t1, (select realDay,convert(integer,substring(realTime,1,2)) * 3600 + "
					+"	convert(integer,substring(realTime,4,2))*60 + convert(integer,substring(realTime,7,2)) AS TIMEINT from syslog where realDay='"+selectinfo.getRealDay()+"' and business='IPADCOMPINFOCONDITIO' ) t2 "
					+"   where t1.TIMEINT > "
					+" (t2.TIMEINT -"+second+") and t1.TIMEINT <= t2.TIMEINT+"+second+" and t1.brno in (select substring(idNumber,3,4) from t_inst_mgmt where inst_type='190002' )  group by t1.idNumber    order by cn desc ";			
		}
		
		
		

		
		List mgmtList=t_useRateDAO.exectSql(queryString,start,limit);
		int listCount=t_useRateDAO.count(queryString);
		List<T_useRate> list=new ArrayList<T_useRate>();                                                                                                                                                                                                                                                         
		for(int i=0;i<mgmtList.size();i++){                                                                                                                                                                                                                                                                                        
			Map infomap=(Map) mgmtList.get(i);                                                                                                                                                                                                                                                                                       
			T_useRate tc=new T_useRate();                                                                                                                                                                                                                                                                          
			String s_brno=(String) infomap.get("brno");                                                                                                                                                                                                                                                                              
			tc.setBrno(s_brno);       
			tc.setStartTime((String) infomap.get("startTime"));
			tc.setEndTime((String) infomap.get("endTime"));
			Integer i_cn=(Integer)infomap.get("cn");
			tc.setCn(i_cn.toString());     
			tc.setRealDay(selectinfo.getRealDay());
			tc.setIdNumber((String) infomap.get("inst_no"));                                                                                                                                                                                                                                                                         
			tc.setInst_name((String) infomap.get("inst_name"));    
			tc.setBrno_name((String) infomap.get("inst_name"));
			Integer i_xh=i+1;
			tc.setXh(i_xh.toString());
			tc.setEndDay(selectinfo.getEndDay());                                                                                                                                                                                                                                                                                    
			tc.setStartDay(selectinfo.getStartDay());                                                                                                                                                                                                                                                                                
			list.add(tc);                                                                                                                                                                                                                                                                                                            
		}                                                                                                                                                                                                                                                                                                                          
		                                                                                                                                                                                                                                                                                                                           
		                                                                                                                                                                                                                                                                                                                           
		map.put("infoList", list);                                                                                                                                                                                                                                                                                                 
		map.put("listCount", listCount); 
		return map;
	}
	
	
	/*
	 * 获取支行名称
	 * 
	 */
	
	public Map<String, Object> findInstByUser( String brno){
		Map<String, Object> map = new HashMap<String, Object>();
		String sql="";
		//获取网点权限
		if("B00001".equals(brno)||"B00002".equals(brno)){
			 sql="select idNumber,inst_name from t_inst_mgmt where inst_type='190001'";
		}else{
			if(brno.contains("A")){
				sql="select idNumber,inst_name from t_inst_mgmt where inst_type='190001' and idNumber='"+brno+"'";
			}else{
				sql="select idNumber,inst_name from t_inst_mgmt where 1=2";
			}
		}
		
		List mgmtList=t_useRateDAO.exectSql(sql,0,100);
		
		List<T_useRate> t_inst_mgmtList=new ArrayList<T_useRate>();
		
		
		for(int k=0;k<mgmtList.size();k++){
			
			T_useRate ts=new T_useRate();
			
			Map instmap=(Map) mgmtList.get(k);
			ts.setInst_name((String) instmap.get("inst_name"));
			ts.setIdNumber((String) instmap.get("idNumber"));
			t_inst_mgmtList.add(ts);
		}
		

		 map.put("infoList", t_inst_mgmtList);
		 map.put("listCount", t_inst_mgmtList.size());
		 map.put("flag", "mgmt");

		return map;
	}
	
	
	@Resource T_useRateDAO t_useRateDAO;

}
