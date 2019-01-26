package com.donglusoft.person.DAO;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.donglusoft.zzz.util.BaseHibernateDAO;
import com.donglusoft.zzz.util.PropertiesReader;

@Repository
public class MessageManageDao extends BaseHibernateDAO{

	public List findAllNewMessageOrderByDate( int start, int limit) {
		try {
			String queryString = "from MessageManage";
			System.out.println("----------------------------------------------------");
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setFirstResult(start);
			queryObject.setMaxResults(limit);
			System.out.println("----------------------------------------------------");
			List d = new ArrayList();
			d =  queryObject.list();
			System.out.println("----------------------------------------------------");
			return d;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public int count(){
		String queryString = "from MessageManage ";
		try{
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list().size();
		}catch(RuntimeException e){
			throw e;
		}
	}
}
