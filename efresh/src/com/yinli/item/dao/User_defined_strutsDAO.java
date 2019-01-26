package com.yinli.item.dao;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.springframework.stereotype.Repository;

import com.donglusoft.zzz.util.BaseHibernateDAO;
import com.yinli.item.vo.User_defined_struts;



/**
 *
 *创建日期: 2016-01-13
 */

@Repository
public class User_defined_strutsDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(User_defined_struts selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<User_defined_struts> infoList = new ArrayList<User_defined_struts>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(User_defined_struts.class);
			Criteria countCriteria = getSession().createCriteria(User_defined_struts.class);
			
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
			infoList = (List<User_defined_struts>) criteriaList(listCriteria, start, limit);
			
			map.put("user_defined_strutsList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(User_defined_struts transientInstance) {
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
				User_defined_struts newinfo = findById(id[i]);
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public User_defined_struts findById(java.lang.String id) {
		try {
			User_defined_struts instance = (User_defined_struts) getSession().get("com.yinli.item.vo.User_defined_struts", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(User_defined_struts modifyinfo){
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
	
	public List getDBTables(String querysql) {
		try {
			SQLQuery queryObject = getSession().createSQLQuery(querysql);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public List getTBColumns(String querysql) {
		try {
			SQLQuery queryObject = getSession().createSQLQuery(querysql);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
}
