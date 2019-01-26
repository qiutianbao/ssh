package com.yinli.item.dao;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import com.donglusoft.zzz.util.BaseHibernateDAO;
import com.yinli.item.vo.T_serviceCondition;

/**
 *
 *创建日期: 2014-03-21
 */

@Repository
public class T_useRateDAO extends BaseHibernateDAO {
	

	public List exectSql(String queryString,int start ,int limit) {
		try {
			SQLQuery sq=(SQLQuery) getSession().createSQLQuery(queryString).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
			sq.setFirstResult(start);
			sq.setMaxResults(limit);
			return sq.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	
	
	
	
	public int count(String queryString){
		try {
			SQLQuery sq=(SQLQuery) getSession().createSQLQuery(queryString);
			return sq.list().size();
		} catch (Exception re) {
			re.printStackTrace();
			return 0;
		}
	}
}
