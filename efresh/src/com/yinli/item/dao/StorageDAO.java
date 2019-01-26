package com.yinli.item.dao;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Storage;
import com.yinli.item.vo.Storebrand;
import com.yinli.util.common.DateUtil;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-23
 */

@Repository
public class StorageDAO extends BaseHibernateDAO {
	
	public Map<String,Object> findInfoByConditions(Storage selectinfo, int start, int limit) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		List<Storebrand> infoList = new ArrayList<Storebrand>();

		int infoListCount = 0;
		try {
			String hql = "FROM Storage where 1=1";
			SimpleDateFormat formater = new SimpleDateFormat();
			formater.applyPattern("yyyy-MM-dd");
			String time1 = formater.format(selectinfo.getStoragetime());
			String time2 = formater.format(selectinfo.getStoragetime2());
			if (time1 != null || time2 != null) {
				// Txn_Date BETWEEN 'Jan-06-1999' AND 'Jan-10-1999';
				hql = hql + " and storagetime between '" + time1 + "' and '"
						+ time2 + "'";

				Query query = getSession().createQuery(hql);

				infoList = query.list();
				infoListCount = query.list().size();
				map.put("storageList", infoList);
				map.put("listCount", infoListCount);
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}
	
	public Map<String, Object> findInfoByCondition(Storage selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Storage> infoList = new ArrayList<Storage>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Storage.class);
			Criteria countCriteria = getSession().createCriteria(Storage.class);
			
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
			infoList = (List<Storage>) criteriaList(listCriteria, start, limit);
			
			map.put("storageList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Storage transientInstance) {
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
				Storage newinfo = findById(Integer.parseInt(id[i]));
				newinfo.setDr(1);
				newinfo.setTs(DateUtil.getTs());
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public List<Storage> findByIds(java.lang.Integer id) {
		String hql = "FROM Storage s left join fetch s.commodity c where s.dr=0";
		if(id != null){
			hql = hql+" and s.idStoragebills = "+id;
		}
		Query query = getSession().createQuery(hql);
		return query.list();
	}

	public Storage findById(java.lang.Integer id) {
		try {
			Storage instance = (Storage) getSession().get("com.yinli.item.vo.Storage", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Storage modifyinfo){
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
