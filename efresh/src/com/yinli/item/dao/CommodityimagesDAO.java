package com.yinli.item.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Commodityimages;
import com.yinli.item.vo.Commodityprice;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class CommodityimagesDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Commodityimages selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Commodityimages> infoList = new ArrayList<Commodityimages>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Commodityimages.class);
			Criteria countCriteria = getSession().createCriteria(Commodityimages.class);
			
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
			infoList = (List<Commodityimages>) criteriaList(listCriteria, start, limit);
			
			map.put("commodityimagesList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Commodityimages transientInstance) {
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
				Commodityimages newinfo = findById(Integer.parseInt(id[i]));
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Commodityimages findById(java.lang.Integer id) {
		try {
			Commodityimages instance = (Commodityimages) getSession().get("com.yinli.item.vo.Commodityimages", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Commodityimages modifyinfo){
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
	
	public Map<String, Object> findInfoByIdCommodity(Commodityimages selectinfo, int start, int limit) throws Exception {
		int infoListCount = 0;
		List<Commodityimages> infoList = new ArrayList<Commodityimages>();
		Criteria listCriteria = getSession().createCriteria(Commodityimages.class);
		Criteria countCriteria = getSession().createCriteria(Commodityimages.class);
		addEQConditions(listCriteria,countCriteria,"idCommodity",selectinfo.getIdCommodity());
		Disjunction dis=Restrictions.disjunction();
		dis.add(Restrictions.isNull("dr"));
		dis.add(Restrictions.ne("dr", 1));
		listCriteria.add(dis);
		countCriteria.add(dis);
		infoListCount = criteriaCount(countCriteria);
		infoList = (List<Commodityimages>) criteriaList(listCriteria, start, limit);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("commodityimagesList", infoList);
		map.put("listCount", infoListCount);
		return map;
	}

	
}
