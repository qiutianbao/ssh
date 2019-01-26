package com.yinli.item.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.T_available_no;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2013-11-07
 */

@Repository
public class T_available_noDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(T_available_no selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<T_available_no> infoList = new ArrayList<T_available_no>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(T_available_no.class);
			Criteria countCriteria = getSession().createCriteria(T_available_no.class);
			
			Field[] fields = selectinfo.getClass().getDeclaredFields();
			String name;
			Method m;
			for(Field field : fields){
				name = field.getName(); // 获取属性的名字
	            m= selectinfo.getClass().getMethod("get" + name.substring(0, 1).toUpperCase() + name.substring(1));
	            String value = (String) m.invoke(selectinfo); 
	            if(value != null && !"".equals(value.trim())){
	            	addEQConditions(listCriteria, countCriteria, name, value.trim());
	            }
			}
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<T_available_no>) criteriaList(listCriteria, start, limit);
			
			map.put("t_available_noList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(T_available_no transientInstance) {
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
				T_available_no newinfo = findById(id[i]);
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public T_available_no findById(java.lang.String id) {
		try {
			T_available_no instance = (T_available_no) getSession().get("com.yinli.item.vo.T_available_no", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(T_available_no modifyinfo){
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
