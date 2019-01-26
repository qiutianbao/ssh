package com.yinli.item.dao;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Fristlevelorder;
import com.yinli.item.vo.Secondlevelorder;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class FristlevelorderDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Fristlevelorder selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Fristlevelorder> infoList = new ArrayList<Fristlevelorder>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Fristlevelorder.class);
			Criteria countCriteria = getSession().createCriteria(Fristlevelorder.class);
			
			Field[] fields = selectinfo.getClass().getDeclaredFields();
			String name;
			Method m;
			for(Field field : fields){
				name = field.getName(); // 获取属性的名字
	            m= selectinfo.getClass().getMethod("get" + name.substring(0, 1).toUpperCase() + name.substring(1));
	            Object value =  m.invoke(selectinfo); 
	            if(value != null && !"".equals(value.toString().trim())){
	            	addEQConditions(listCriteria, countCriteria, name, value);
	            }
			}
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<Fristlevelorder>) criteriaList(listCriteria, start, limit);
			
			map.put("fristlevelorderList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public  Map<String, Object> findByConditions(Fristlevelorder selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Secondlevelorder> infoList = new ArrayList<Secondlevelorder>();
		int infoListCount = 0;
		SimpleDateFormat formater = new SimpleDateFormat();
		formater.applyPattern("yyyy-MM-dd HH:mm:ss");
		String hql = "from Fristlevelorder where (dr = 0 or dr = null) and 1=1 ";
		if(selectinfo != null){
			
			if(selectinfo.getOrderstatus()!=null && !"".equals(selectinfo.getOrderstatus())){
				hql += " and orderstatus = " + selectinfo.getOrderstatus();
			}
			if(selectinfo.getCreationordertime()!=null && !"".equals(selectinfo.getCreationordertime())){
				String time = formater.format(selectinfo.getCreationordertime());
				hql += " and creationordertime >= '" + time+"'";
			}
			if(selectinfo.getCreationordertime2()!=null && !"".equals(selectinfo.getCreationordertime2())){
				String time = formater.format(selectinfo.getCreationordertime2());
				hql += " and creationordertime <= '" + time+"'";
			}
			if(selectinfo.getArrivaltime()!=null && !"".equals(selectinfo.getArrivaltime())){
				String time = formater.format(selectinfo.getArrivaltime());
				hql += " and arrivaltime >= '" + time+"'";
			}
			if(selectinfo.getArrivaltime2()!=null && !"".equals(selectinfo.getArrivaltime2())){
				String time = formater.format(selectinfo.getArrivaltime2());
				hql += " and arrivaltime <= '" + time+"'";
			}
		}
		Query query = getSession().createQuery(hql);
		infoListCount = query.list().size();
		query.setFirstResult(start);
		query.setMaxResults(limit);
		infoList = (List<Secondlevelorder>) query.list();
		map.put("fristlevelorderList", infoList);
		map.put("listCount", infoListCount);
		return map;
	}
	
	public void save(Fristlevelorder transientInstance) {
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
				Fristlevelorder newinfo = findById(Integer.parseInt(id[i]));
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Fristlevelorder findById(java.lang.Integer id) {
		try {
			Fristlevelorder instance = (Fristlevelorder) getSession().get("com.yinli.item.vo.Fristlevelorder", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Fristlevelorder modifyinfo){
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
}
