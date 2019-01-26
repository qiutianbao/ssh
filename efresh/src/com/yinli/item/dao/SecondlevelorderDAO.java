package com.yinli.item.dao;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.math.BigInteger;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.jsoup.helper.DataUtil;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Secondlevelorder;
import com.yinli.util.common.DateUtil;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-28
 */

@Repository
public class SecondlevelorderDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Secondlevelorder selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Secondlevelorder> infoList = new ArrayList<Secondlevelorder>();
		int infoListCount = 0;
		try {
			String hql = "from Secondlevelorder where (dr = 0 or dr = null) and 1=1 ";
			String creationordertime = null;//下单开始时间
			String creationordertime2 = null;//下单结束时间
			String arrivaltime = null;//到货开始时间
			String arrivaltime2 = null;//到货结束时间
			SimpleDateFormat formater = new SimpleDateFormat();
			formater.applyPattern("yyyy-MM-dd HH:mm:ss");
			SimpleDateFormat formater2 = new SimpleDateFormat();
			formater2.applyPattern("yyyy-MM-dd ");
			if(selectinfo != null){
				if(selectinfo.getArrivaltime() != null){
					arrivaltime = formater.format(selectinfo.getArrivaltime());
					hql += " and arrivaltime >= '"+arrivaltime+"' ";
					
				}
				if(selectinfo.getArrivaltime2() != null){
					arrivaltime2 = formater.format(selectinfo.getArrivaltime2());
					hql += " and arrivaltime <= '"+arrivaltime2+"' ";
					
				}
				if(selectinfo.getCreationordertime() != null){
					creationordertime = formater2.format(selectinfo.getCreationordertime());
					hql += " and creationordertime >= '"+creationordertime+"' ";
				}
				if(selectinfo.getCreationordertime2() != null){
					creationordertime2 = formater2.format(selectinfo.getCreationordertime2());
					hql += " and creationordertime <= '"+creationordertime2+" 23:59:59' ";
				}
				if(selectinfo.getOrderstatus() != null){
					hql += "and orderstatus = "+selectinfo.getOrderstatus();
				}
			}
			hql += " order by creationordertime desc";
			Query query = getSession().createQuery(hql);
			infoListCount = query.list().size();
			query.setFirstResult(start);
			query.setMaxResults(limit);
			infoList = (List<Secondlevelorder>) query.list();
			map.put("secondlevelorderList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public Map<String, Object> findInfoByConditions2(Secondlevelorder selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Secondlevelorder> infoList = new ArrayList<Secondlevelorder>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Secondlevelorder.class);
			Criteria countCriteria = getSession().createCriteria(Secondlevelorder.class);
			
			Field[] fields = selectinfo.getClass().getDeclaredFields();
			String name;
			Method m;
			for(Field field : fields){
				name = field.getName(); // 获取属性的名字
	            m= selectinfo.getClass().getMethod("get" + name.substring(0, 1).toUpperCase() + name.substring(1));
	            Object value = m.invoke(selectinfo); 
	        	
	            if(value != null && !"".equals(value)){
	            	addEQConditions(listCriteria, countCriteria, name, value);
	            }
			}
		
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<Secondlevelorder>) criteriaList(listCriteria, start, limit);
			
			map.put("secondlevelorderList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}
	
	
	public void save(Secondlevelorder transientInstance) {
		try {
			getSession().save(transientInstance);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void delete(String delData){
		String[] id = delData.split("#");
		try {
			for( int i=0; i<id.length; i++){
				Secondlevelorder newinfo = findById(Integer.parseInt(id[i]));
				newinfo.setDr(1);
				newinfo.setTs(DateUtil.getTs());
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Secondlevelorder findById(java.lang.Integer id) {
		try {
			Secondlevelorder instance = (Secondlevelorder) getSession().get("com.yinli.item.vo.Secondlevelorder", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Secondlevelorder modifyinfo){
		try {
			getSession().update(modifyinfo);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public List findAll( int start, int limit, String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setFirstResult(start);
			queryObject.setMaxResults(limit);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public int count(String queryString){
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list().size();
		} catch (Exception re) {
			re.printStackTrace();
			return 0;
		}
	}
	
	public Map<String, Object>  findSecondleveloder(String queryString){
		try {
			Query queryObject = getSession().createQuery(queryString);
			List<Object[]> objects = queryObject.list();
			return null;
		} catch (Exception re) {
			re.printStackTrace();
			return null;
		}
	}
	
	public Map<String, Object> findInfoByDate(Secondlevelorder selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Secondlevelorder> infoList = new ArrayList<Secondlevelorder>();
		int infoListCount = 0;
		try {
			SimpleDateFormat simp2 = new SimpleDateFormat("yyyy-MM-dd");
			SimpleDateFormat simp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String starttime = simp2.format(selectinfo.getCreationordertime()) + " 00:00:00" ;
			String endtime = 	simp2.format(selectinfo.getCreationordertime()) + " 23:59:59" ;
			Criteria listCriteria = getSession().createCriteria(Secondlevelorder.class);
			listCriteria.add(Restrictions.or(Restrictions.isNull("dr"), Restrictions.eq("dr", 0)))
						//	 .add(Restrictions.eq("idStore", selectinfo.getIdStore()))
							 .add(Restrictions.eq("orderstatus", selectinfo.getOrderstatus()))
							 .add(Restrictions.between("creationordertime", simp.parse(starttime),  simp.parse(endtime)));
			infoList = listCriteria.list();
			String sql2 = "select count(*) from secondlevelorder where IFNULL(dr,0)=0 and creationordertime like  '"+simp2.format(selectinfo.getCreationordertime()) +"%' ";
			infoListCount = ((BigInteger) getSession().createSQLQuery(sql2).uniqueResult()).intValue();		
			map.put("secondlevelorderList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}
	
	
	public Map<String, Object> findInfoByConditions3(Secondlevelorder selectinfo, int start, int limit,Date starttime,Date endtime) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Secondlevelorder> infoList = new ArrayList<Secondlevelorder>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Secondlevelorder.class);
			Criteria countCriteria = getSession().createCriteria(Secondlevelorder.class);
			
			Field[] fields = selectinfo.getClass().getDeclaredFields();
			String name;
			Method m;
			for(Field field : fields){
				name = field.getName(); // 获取属性的名字
	            m= selectinfo.getClass().getMethod("get" + name.substring(0, 1).toUpperCase() + name.substring(1));
	            Object value = m.invoke(selectinfo); 
	            if("creationordertime".equals(name)){
            		listCriteria.add(Restrictions.between("creationordertime", starttime, endtime));
            		countCriteria.add(Restrictions.between("creationordertime", starttime, endtime));
            		continue;
            	}
	            if(value != null && !"".equals(value)){
	            	addEQConditions(listCriteria, countCriteria, name, value);
	            }
			}
		
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<Secondlevelorder>) criteriaList(listCriteria, start, limit);
			
			map.put("secondlevelorderList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}
	
	public List<Object[]> findBySql(int start,int limit,String sql){
		SQLQuery sqlQuery = getSession().createSQLQuery(sql);
		sqlQuery.setFirstResult(start);
		sqlQuery.setMaxResults(limit);
		return sqlQuery.list();
	}
	
}
