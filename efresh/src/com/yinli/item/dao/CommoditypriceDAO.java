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

import com.yinli.item.vo.Commoditylevel;
import com.yinli.item.vo.Commodityprice;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class CommoditypriceDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Commodityprice selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Commodityprice> infoList = new ArrayList<Commodityprice>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Commodityprice.class);
			Criteria countCriteria = getSession().createCriteria(Commodityprice.class);
			
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
			infoList = (List<Commodityprice>) criteriaList(listCriteria, start, limit);
			
			map.put("commoditypriceList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Commodityprice transientInstance) {
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
				Commodityprice newinfo = findById(Integer.parseInt(id[i]));
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Commodityprice findById(java.lang.Integer id) {
		try {
			Commodityprice instance = (Commodityprice) getSession().get("com.yinli.item.vo.Commodityprice", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Commodityprice modifyinfo){
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
	
	public Map<String, Object> findInfoByIdLevel(Commoditylevel commoditylevel,int start,int limit){
		int infoListCount = 0;
		List<Commodityprice> infoList = new ArrayList<Commodityprice>();
		Criteria listCriteria = getSession().createCriteria(Commodityprice.class);
		Criteria countCriteria = getSession().createCriteria(Commodityprice.class);
		addEQConditions(listCriteria,countCriteria,"idLevel",commoditylevel.getIdNumber());
		infoListCount = criteriaCount(countCriteria);
		infoList = (List<Commodityprice>) criteriaList(listCriteria, start, limit);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("commoditypriceList", infoList);
		map.put("listCount", infoListCount);
		return map;
	}
	
}
