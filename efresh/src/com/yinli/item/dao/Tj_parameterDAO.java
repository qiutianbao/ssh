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

import com.yinli.item.vo.Tj_parameter;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class Tj_parameterDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Tj_parameter selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Tj_parameter> infoList = new ArrayList<Tj_parameter>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Tj_parameter.class);
			Criteria countCriteria = getSession().createCriteria(Tj_parameter.class);
			
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
			infoList = (List<Tj_parameter>) criteriaList(listCriteria, start, limit);
			
			map.put("tj_parameterList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Tj_parameter transientInstance) {
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
				Tj_parameter newinfo = findById(Integer.parseInt(id[i]));
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Tj_parameter findById(java.lang.Integer id) {
		try {
			Tj_parameter instance = (Tj_parameter) getSession().get("com.yinli.item.vo.Tj_parameter", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Tj_parameter modifyinfo){
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
