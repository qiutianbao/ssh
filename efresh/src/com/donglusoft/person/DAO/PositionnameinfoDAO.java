package com.donglusoft.person.DAO;

import java.util.List;
import java.util.Properties;

import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.criterion.Example;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.donglusoft.person.domain.Positionnameinfo;
import com.donglusoft.zzz.util.BaseHibernateDAO;
import com.donglusoft.zzz.util.PropertiesReader;

/**
 * A data access object (DAO) providing persistence and search support for
 * Positionnameinfo entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see com.donglusoft.person.domain.Positionnameinfo
 * @author MyEclipse Persistence Tools
 */

@Repository
public class PositionnameinfoDAO extends BaseHibernateDAO {

	public void save(Positionnameinfo transientInstance) {
		try {
			getSession().save(transientInstance);
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update( Positionnameinfo modifyinfo){
		try {
			getSession().update(modifyinfo);
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void delete(String delData){
		String[] id = delData.split("#");
		Properties properties = PropertiesReader.getPropertiesReader().getProperties();
		
		try {
			for( int i=0; i<id.length; i++){
				Positionnameinfo newinfo = findById(id[i]);
				newinfo.setDelstate(properties.getProperty("PERSON_INFO_DELETE"));
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}


	public Positionnameinfo findById(java.lang.String id) {
		try {
			Positionnameinfo instance = (Positionnameinfo) getSession().get("com.donglusoft.person.domain.Positionnameinfo", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public List findAll( int start, int limit) {
		Properties properties = PropertiesReader.getPropertiesReader().getProperties();
		try {
			String queryString = "from Positionnameinfo where delstate  = "+properties.getProperty("PERSON_INFO_VALID");
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setFirstResult(start);
			queryObject.setMaxResults(limit);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public int count(){
		Properties properties = PropertiesReader.getPropertiesReader().getProperties();
		try {
			String queryString = "from Positionnameinfo where delstate  = "+properties.getProperty("PERSON_INFO_VALID");
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list().size();
		} catch (RuntimeException re) {
			throw re;
		}
	}

}