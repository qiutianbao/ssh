package com.yinli.item.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Storebrand;
import com.yinli.util.common.DateUtil;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 * 
 * 创建日期: 2016-01-25
 */

@Repository
public class StorebrandDAO extends BaseHibernateDAO {
	
	/**
	 * 多条件查询商品品牌
	 * @Description: TODO
	 * @param @param selectinfo
	 * @param @param start
	 * @param @param limit
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author houhy
	 * @date 2016-3-17
	 */
	public Map<String, Object> findInfoByConditions(Storebrand selectinfo,
			int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Storebrand> infoList = new ArrayList<Storebrand>();
		int infoListCount = 0;
		try {
		    String hql = "FROM Storebrand where (dr=0 or dr is null)";
		    //设置参数
		    if(selectinfo.getIdStore() != null){
		    	hql = hql + " and idStore = "+selectinfo.getIdStore();
		    }
		    if(!selectinfo.getBrandname().equals("")){
		    	hql = hql + " and brandname = '"+selectinfo.getBrandname()+"'";
		    }
		    Query query = getSession().createQuery(hql);
		    infoListCount=query.list().size();
		    //设置煤业显示多少个，设置多大结果
		    query.setMaxResults(limit);
		    //设置起点
		    query.setFirstResult(start);
		    
		    infoList = query.list();

			map.put("storebrandList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	/*public Map<String, Object> findInfoByCondition(Storebrand selectinfo,
			int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Storebrand> infoList = new ArrayList<Storebrand>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(
					Storebrand.class);
			Criteria countCriteria = getSession().createCriteria(
					Storebrand.class);

			Field[] fields = selectinfo.getClass().getDeclaredFields();
			String name;
			Method m;
			for (Field field : fields) {
				name = field.getName(); // 获取属性的名字
				m = selectinfo.getClass().getMethod(
						"get" + name.substring(0, 1).toUpperCase()
								+ name.substring(1));
				String value = (String) m.invoke(selectinfo);
				if (value != null && !"".equals(value.trim())) {
					addEQConditions(listCriteria, countCriteria, name,
							value.trim());
				}
			}
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<Storebrand>) criteriaList(listCriteria, start,
					limit);

			map.put("storebrandList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}*/

	public void save(Storebrand transientInstance) {
		try {
			getSession().save(transientInstance);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public void delete(String delData) {
		String[] id = delData.split("#");
		try {
			for (int i = 0; i < id.length; i++) {
				Storebrand newinfo = findById(Integer.parseInt(id[i]));
				newinfo.setDr(1);
				newinfo.setTs(DateUtil.getTs());
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Storebrand findById(java.lang.Integer id) {
		try {
			Storebrand instance = (Storebrand) getSession().get(
					"com.yinli.item.vo.Storebrand", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public void update(Storebrand modifyinfo) {
		try {
			getSession().update(modifyinfo);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public List<Storebrand> findAll(String hql){
		Query query = getSession().createQuery(hql);
		return query.list();
	}
	
	public List findAll(int start, int limit, String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setFirstResult(start);
			queryObject.setMaxResults(limit);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public int count(String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list().size();
		} catch (Exception re) {
			re.printStackTrace();
			return 0;
		}
	}

	public List<Storebrand> findStorebrandByEstoreId(String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (Exception re) {
			re.printStackTrace();
			return new ArrayList<Storebrand>();
		}

	}

}
