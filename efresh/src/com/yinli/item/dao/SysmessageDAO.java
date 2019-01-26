package com.yinli.item.dao;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.donglusoft.zzz.util.BaseHibernateDAO;
import com.yinli.item.vo.Storebrand;
import com.yinli.item.vo.Sysmessage;

/**
 * 
 * 创建日期: 2016-01-25
 */

@Repository
public class SysmessageDAO extends BaseHibernateDAO {

	public Map<String, Object> findInfoByConditions(Sysmessage selectinfo,
			int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Storebrand> infoList = new ArrayList<Storebrand>();

		int infoListCount = 0;
		try {
			String hql = "FROM Sysmessage where 1=1";
			//SimpleDateFormat formater = new SimpleDateFormat();
			//formater.applyPattern("yyyy-MM-dd");
			//String time1 = formater.format(selectinfo.getReleasetime());
			//String time2 = formater.format(selectinfo.getReleasetime2());
			if (!selectinfo.getReleasetimes().equals("NaN-NaN-NaN NaN:NaN:NaN") || !selectinfo.getReleasetimes2().equals("NaN-NaN-NaN NaN:NaN:NaN")) {
				// Txn_Date BETWEEN 'Jan-06-1999' AND 'Jan-10-1999';
				hql = hql + " and releasetime between '" + selectinfo.getReleasetimes() + "' and '"
						+ selectinfo.getReleasetimes2() + "'";
			}
			Query query = getSession().createQuery(hql);
			infoList = query.list();
			infoListCount = query.list().size();
			map.put("sysmessageList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public Map<String, Object> findInfoByCondition(Sysmessage selectinfo,
			int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Sysmessage> infoList = new ArrayList<Sysmessage>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(
					Sysmessage.class);
			Criteria countCriteria = getSession().createCriteria(
					Sysmessage.class);

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
			infoList = (List<Sysmessage>) criteriaList(listCriteria, start,
					limit);

			map.put("sysmessageList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public int save(Sysmessage transientInstance) {
		try {
			Integer s = (Integer) getSession().save(transientInstance);
			getSession().flush();
			return s;
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public void delete(String delData) {
		String[] id = delData.split("#");
		try {
			for (int i = 0; i < id.length; i++) {
				Sysmessage newinfo = findById(Integer.parseInt(id[i]));
				getSession().delete(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	/**
	 * 批量删除
	 * 
	 * @Description: TODO
	 * @param @param ids
	 * @return void
	 * @throws
	 * @author houhy
	 * @date 2016-3-17
	 */
	public void deleteByIds(Serializable... ids) {
		if (ids != null && ids.length > 0) {
			for (Serializable id : ids) {
				Object entity = getSession().get(Sysmessage.class, id);
				if (entity == null) {
					throw new RuntimeException("您要查找的[" + id + "]不存在");
				}
				getSession().delete(entity);
			}
		}
	}

	public Sysmessage findById(java.lang.Integer id) {
		try {
			Sysmessage instance = (Sysmessage) getSession().get(
					"com.yinli.item.vo.Sysmessage", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public void update(Sysmessage modifyinfo) {
		try {
			getSession().update(modifyinfo);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
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
}
