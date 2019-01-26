package com.yinli.item.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.io.Serializable;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Substation;
import com.yinli.item.vo.Sysmessage;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class SubstationDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Substation selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Substation> infoList = new ArrayList<Substation>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Substation.class);
			Criteria countCriteria = getSession().createCriteria(Substation.class);
			
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
			infoList = (List<Substation>) criteriaList(listCriteria, start, limit);
			
			map.put("substationList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Substation transientInstance) {
		try {
			getSession().save(transientInstance);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void deleteByIds(Serializable... ids) {
		if(ids!=null&&ids.length>0){
			for(Serializable id:ids){
				Object entity=getSession().get(Sysmessage.class, id);
				if(entity==null){
					throw new RuntimeException("您要查找的["+id+"]不存在"); 
				}
				getSession().delete(entity);
			}
		}
	}
	public void delete(String delData){
		String[] id = delData.split("#");
		try {
			for( int i=0; i<id.length; i++){
				Substation newinfo = findById(Integer.parseInt(id[i]));
				getSession().delete(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Substation findById(java.lang.Integer id) {
		try {
			Substation instance = (Substation) getSession().get("com.yinli.item.vo.Substation", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Substation modifyinfo){
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
