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

import com.yinli.item.vo.T_excel_info;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2013-11-20
 */

@Repository
public class T_excel_infoDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(T_excel_info selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<T_excel_info> infoList = new ArrayList<T_excel_info>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(T_excel_info.class);
			Criteria countCriteria = getSession().createCriteria(T_excel_info.class);
			
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
			infoList = (List<T_excel_info>) criteriaList(listCriteria, start, limit);
			
			map.put("t_excel_infoList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(T_excel_info transientInstance) {
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
				T_excel_info newinfo = findById(id[i]);
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public T_excel_info findById(java.lang.String id) {
		try {
			T_excel_info instance = (T_excel_info) getSession().get("com.yinli.item.vo.T_excel_info", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(T_excel_info modifyinfo){
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
	
	
	public List findExcelByProNo(String proId){
		try {
			String queryString = " from T_excel_info t_excel_info where t_excel_info.product_no = '"+proId+"'";
			Query queryObject = getSession().createQuery(queryString);
			List list=queryObject.list();
			return list;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	
}
