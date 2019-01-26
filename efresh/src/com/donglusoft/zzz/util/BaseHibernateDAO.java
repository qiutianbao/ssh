package com.donglusoft.zzz.util;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.util.Assert;

/**
 * 
 * @author ROC
 */
public class BaseHibernateDAO {

	@Resource
	private SessionFactory sessionFactory;

	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	/**
	 * 
	 * 多条件查询完全匹配的方法，两个Criteria分别用于查询记录，统计记录数目
	 * 
	 * @param criteria
	 *            第一个Criteria
	 * @param criteria2
	 *            第二个Criteria
	 * @param str
	 *            POJO内的字段名
	 * @param object
	 *            需要匹配的对象
	 * 
	 */
	public void addEQConditions(Criteria criteria, Criteria criteria2, String str, Object object) {
		criteria.add(Restrictions.eq(str, object));
		criteria2.add(Restrictions.eq(str, object));
	}

	/**
	 * 
	 * 多条件查询模糊查询的方法，两个Criteria分别用于查询记录，统计记录数目
	 * 
	 * @param criteria
	 *            第一个Criteria
	 * @param criteria2
	 *            第二个Criteria
	 * @param str
	 *            POJO内的字段名
	 * @param object
	 *            需要匹配的对象
	 * 
	 */
	public void addLIKEConditions(Criteria criteria, Criteria criteria2, String str, Object object) {
		criteria.add(Restrictions.like(str, object));
		criteria2.add(Restrictions.like(str, object));
	}

	/**
	 * 
	 * 统计数目的方法
	 * 
	 * @param criteria
	 * @return
	 * @throws Exception
	 */
	public int criteriaCount(Criteria criteria) {
		return Integer.parseInt(criteria.setProjection(Projections.rowCount()).list().get(0).toString());
	}

	/**
	 * 
	 * 查询记录的方法
	 * 
	 * @param criteria
	 * @param start
	 *            数据库查询开始值
	 * @param limit
	 *            数据库查询限量值
	 * @return
	 * @throws Exception
	 */
	public List<?> criteriaList(Criteria criteria, int start, int limit) {
		criteria.setFirstResult(start);
		criteria.setMaxResults(limit);
		return criteria.list();
	}

	/**
	 * 
	 * @param classTemp
	 *            需要查询的POJO类
	 * @param str
	 *            ID的字段名
	 * @param object
	 *            匹配的ID值
	 * @return
	 * @throws Exception
	 */
	public List<?> commonFindById(Class classTemp, String str, Object object) {
		Criteria criteria = getSession().createCriteria(classTemp);
		return criteria.add(Restrictions.eq(str, object)).list();
	}

	/**
	 * 
	 * 结果集降序排序
	 * 
	 * @param criteria
	 * @param criteria2
	 * @param str
	 */
	public void orderDesc(Criteria criteria, Criteria criteria2, String str) {
		criteria.add(Restrictions.isNotNull(str));
		criteria2.add(Restrictions.isNotNull(str));
		criteria.addOrder(Order.desc(str));
		criteria2.addOrder(Order.desc(str));
	}

	// ==============以下2014-02-25============= //

	/**
	 * 查全部数据
	 */
	public List<Serializable> query(String hql, Map<String,Object> parm) {
		List<Serializable> queryResult = new ArrayList<Serializable>();
		// 功能代理
		query(hql, parm, 0, Integer.MAX_VALUE, queryResult);
		return queryResult;
	}
	
	/**
	 * @param hql
	 *            查询语句
	 * @param parm
	 *            参数
	 * @param start
	 *            分页起始
	 * @param limit
	 *            分页记录数
	 * @param returnQueryResult
	 *            存储查询结果集（当前分页/全部）
	 * @return 查询语句的总记录数
	 */
	@SuppressWarnings("unchecked")
	public int query(String hql, Map<String,Object> parm, int start, int limit,
			List<? extends Serializable> returnQueryResult) {
		Session currSession = getSession();
		Query q = setParm(hql, parm, currSession);

		// 最大整数表示查全部数据
		if (limit != Integer.MAX_VALUE) {
			q.setFirstResult(start);
			q.setMaxResults(limit);
		}
		// 为null则不查记录数
		if (returnQueryResult != null) {
			returnQueryResult.clear();
			returnQueryResult.addAll(q.list());
		}
		if (limit != Integer.MAX_VALUE) {
			String countHql = countHql(hql);
			Query countQuery = setParm(countHql, parm, currSession);
			return ((Long) (countQuery.list().get(0))).intValue();
		}else{
			// 全部查询时直接返回记录数
			return returnQueryResult.size();
		}
	}

	public Query setParm(String hql, Map<String,Object> parm, Session session) {
		Query q = session.createQuery(hql);
		Set<String> keySet = parm.keySet();
		for (String key: keySet) {
			Object value = parm.get(key);
			if (value instanceof String) {
				q.setString( key, (String) value);
			} else if (value instanceof Integer) {
				q.setInteger( key, (Integer) value);
			} else if (value instanceof Date) {
				q.setTimestamp( key, (Date) value);
			} else {
				throw new RuntimeException("SQL:The parm type error.");
			}
		}
		return q;
	}
	
	/**
	 * 
	 * @param sql
	 * @return
	 */
	public String countHql(String sql) {

		Assert.hasLength(sql, "sql不能为空");
		StringBuilder buff = new StringBuilder(sql.trim());
		// 去掉逗号
		if (buff.charAt(buff.length() - 1) == ';') {
			buff.deleteCharAt(buff.length() - 1);
		}
		//
		if (buff.indexOf("from") == 0) {
			buff.insert(0, "select count(*) ");
		} else {
			buff.insert(0, "select count(0) from(");
			buff.insert(buff.length(), ") _t");
		}

		return buff.toString();
	}
}