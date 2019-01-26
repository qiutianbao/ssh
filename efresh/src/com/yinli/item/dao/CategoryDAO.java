package com.yinli.item.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Category;
import com.yinli.util.common.DateUtil;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class CategoryDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Category selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Category> infoList = new ArrayList<Category>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Category.class);
			Criteria countCriteria = getSession().createCriteria(Category.class);
			
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
			infoList = (List<Category>) criteriaList(listCriteria, start, limit);
			
			map.put("categoryList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Category transientInstance) {
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
				Category newinfo = findById(Integer.parseInt(id[i]));
				newinfo.setDr(1);
				newinfo.setTs(DateUtil.getTs());
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Category findById(java.lang.Integer id) {
		try {
			Category instance = (Category) getSession().get("com.yinli.item.vo.Category", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Category modifyinfo){
		try {
			getSession().update(modifyinfo);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public List<Category> findAll(String hql){
		try {
			Query query = getSession().createQuery(hql);
			return query.list();
		} catch (HibernateException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public List<Category> findAlls(String qql){
		try {
			Query query = getSession().createSQLQuery(qql);
			return query.list();
		} catch (HibernateException e) {
			e.printStackTrace();
		}
		return null;
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
	
	public List<Category> findSecond(String queryString){
		Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
	}
	
}
