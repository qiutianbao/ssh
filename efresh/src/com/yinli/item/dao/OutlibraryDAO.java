package com.yinli.item.dao;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Outlibrary;
import com.yinli.item.vo.Storebrand;
import com.yinli.util.common.DateUtil;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class OutlibraryDAO extends BaseHibernateDAO {
	
	public Map<String,Object> findInfoByConditions(Outlibrary selectinfo, int start, int limit) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		List<Storebrand> infoList = new ArrayList<Storebrand>();

		try {
			int infoListCount = 0;
				String hql = "FROM Outlibrary where 1=1";
				SimpleDateFormat formater = new SimpleDateFormat();
				formater.applyPattern("yyyy-MM-dd");
				String time1 = formater.format(selectinfo.getOutlibtime());
				String time2 = formater.format(selectinfo.getOutlibtime2());
				if (time1 != null || time2 != null) {
					// Txn_Date BETWEEN 'Jan-06-1999' AND 'Jan-10-1999';
					hql = hql + " and outlibtime between '" + time1 + "' and '"
							+ time2 + "'";

					Query query = getSession().createQuery(hql);

					infoList = query.list();
					infoListCount = query.list().size();
					map.put("outlibtimeList", infoList);
					map.put("listCount", infoListCount);
				}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
	
	public Map<String, Object> findInfoByCondition(Outlibrary selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Outlibrary> infoList = new ArrayList<Outlibrary>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Outlibrary.class);
			Criteria countCriteria = getSession().createCriteria(Outlibrary.class);
			
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
			infoList = (List<Outlibrary>) criteriaList(listCriteria, start, limit);
			
			map.put("outlibraryList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Outlibrary transientInstance) {
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
				Outlibrary newinfo = findById(Integer.parseInt(id[i]));
				newinfo.setTs(DateUtil.getTs());
				newinfo.setDr(1);
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Outlibrary findById(java.lang.Integer id) {
		try {
			Outlibrary instance = (Outlibrary) getSession().get("com.yinli.item.vo.Outlibrary", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public List<Outlibrary> findByIds(java.lang.Integer id) {
		String hql = "FROM Outlibrary o left join fetch o.commodity c where o.dr=0";
		if(id != null){
			hql = hql+" and o.idOutlibrarybills = "+id;
		}
		Query query = getSession().createQuery(hql);
		return query.list();
	}
	
	public void update(Outlibrary modifyinfo){
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
