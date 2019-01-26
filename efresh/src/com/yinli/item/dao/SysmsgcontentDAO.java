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

import com.yinli.item.vo.Sysmsgcontent;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class SysmsgcontentDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Sysmsgcontent selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Sysmsgcontent> infoList = new ArrayList<Sysmsgcontent>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Sysmsgcontent.class);
			Criteria countCriteria = getSession().createCriteria(Sysmsgcontent.class);
			
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
			infoList = (List<Sysmsgcontent>) criteriaList(listCriteria, start, limit);
			
			map.put("sysmsgcontentList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public Integer save(Sysmsgcontent transientInstance) {
		try {
			Integer id = (Integer) getSession().save(transientInstance);
			getSession().flush();
			return id;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void delete(String delData){
		String[] id = delData.split("#");
		try {
			for( int i=0; i<id.length; i++){
				Sysmsgcontent newinfo = findById(Integer.parseInt(id[i]));
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Sysmsgcontent findById(java.lang.Integer id) {
		try {
			Sysmsgcontent instance = (Sysmsgcontent) getSession().get("com.yinli.item.vo.Sysmsgcontent", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	
	public Sysmsgcontent findByIds(java.lang.Integer id) {
		try {
			String hql = "FROM Sysmsgcontent where (dr = 0 or dr is null) and idSysmessge="+id;
			return (Sysmsgcontent) getSession().createQuery(hql).uniqueResult();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Sysmsgcontent modifyinfo){
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
