package com.yinli.item.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Estore;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-27
 */

@Repository
public class EstoreDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Estore selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Estore> infoList = new ArrayList<Estore>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Estore.class);
			Criteria countCriteria = getSession().createCriteria(Estore.class);
			
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
			listCriteria.add(Restrictions.or(Restrictions.isNull("dr"), Restrictions.eq("dr", 0)));
			listCriteria.addOrder(Order.desc("creationtime"));
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<Estore>) criteriaList(listCriteria, start, limit);
			
			map.put("estoreList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Estore transientInstance) {
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
				Estore newinfo = findById(Integer.parseInt(id[i]));
				getSession().delete(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Estore findById(java.lang.Integer id) {
		try {
			Estore instance = (Estore) getSession().get("com.yinli.item.vo.Estore", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	public List<Estore> findEstoreByUserId(String queryString){
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (Exception re) {
			re.printStackTrace();
			return new ArrayList<Estore>();
		}
	}
	public void update(Estore modifyinfo){
		try {
			getSession().update(modifyinfo);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public List findAlls(String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
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
