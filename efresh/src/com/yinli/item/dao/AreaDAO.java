package com.yinli.item.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.springframework.stereotype.Repository;

import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-23
 */

@Repository
public class AreaDAO extends BaseHibernateDAO {
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
	
	public List getdatabysql(String querysql) {
		try {
			SQLQuery queryObject = getSession().createSQLQuery(querysql);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
}
