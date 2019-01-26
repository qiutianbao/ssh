package com.yinli.item.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.repackage.cglib.core.Transformer;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Rechargerules;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-27
 */

@Repository
public class RechargerulesDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Rechargerules selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Rechargerules> infoList = new ArrayList<Rechargerules>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Rechargerules.class);
			Criteria countCriteria = getSession().createCriteria(Rechargerules.class);
			
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
			infoList = (List<Rechargerules>) criteriaList(listCriteria, start, limit);
			
			map.put("rechargerulesList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Rechargerules transientInstance) {
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
				Rechargerules newinfo = findById(Integer.parseInt(id[i]));
				newinfo.setDr(1);
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Rechargerules findById(java.lang.Integer id) {
		try {
			Rechargerules instance = (Rechargerules) getSession().get("com.yinli.item.vo.Rechargerules", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Rechargerules modifyinfo){
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
	public List findAllBySql( int start, int limit, String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);
			List<Rechargerules> list=queryObject.list();
			List<Map<String, Object>> retList=new ArrayList<Map<String, Object>>();
			for(Rechargerules re:list){
				Map<String, Object> map=new HashMap<String, Object>();
				map.put("idNumberForSup", re.getIdNumber());
				map.put("contentForSup", re.getContent());
				map.put("ruleTypeForSup", re.getRuleType());
				map.put("titleForSup", re.getTitle());
				map.put("summaryForSup", re.getSummary());
				retList.add(map);
			}
			return retList;
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
