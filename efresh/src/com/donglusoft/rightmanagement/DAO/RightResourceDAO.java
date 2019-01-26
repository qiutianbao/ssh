package com.donglusoft.rightmanagement.DAO;

import java.util.List;

import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.criterion.Example;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.donglusoft.rightmanagement.domain.RightResource;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 * A data access object (DAO) providing persistence and search support for
 * RightResource entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see com.donglusoft.rightmanagement.domain.RightResource
 * @author MyEclipse Persistence Tools
 */
@Repository("rightResourceDAO")
public class RightResourceDAO extends BaseHibernateDAO {
	private static final Logger log = LoggerFactory
			.getLogger("rightmanagementbusiness");
	// property constants
	public static final String DESCN = "descn";
	public static final String RES_TYPE = "resType";
	public static final String TES_STRING = "tesString";
	public static final String NAME = "name";

	public void save(RightResource transientInstance) {
		log.debug("saving RightResource instance");
		try {
			getSession().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(RightResource persistentInstance) {
		log.debug("deleting RightResource instance");
		try {
			getSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public RightResource findById(String id) {
		log.debug("getting RightResource instance with id: " + id);
		try {
			RightResource instance = (RightResource) getSession().get(
					"com.donglusoft.rightmanagement.domain.RightResource", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(RightResource instance) {
		log.debug("finding RightResource instance by example");
		try {
			List results = getSession().createCriteria(
					"com.donglusoft.rightmanagement.domain.RightResource").add(
					Example.create(instance)).list();
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	public List findByProperty(String propertyName, Object value) {
		log.debug("finding RightResource instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from RightResource as model where model."
					+ propertyName + "= :value";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter("value", value);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByDescn(Object descn) {
		return findByProperty(DESCN, descn);
	}

	public List findByResType(Object resType) {
		return findByProperty(RES_TYPE, resType);
	}

	public List findByTesString(Object tesString) {
		return findByProperty(TES_STRING, tesString);
	}

	public List findByName(Object name) {
		return findByProperty(NAME, name);
	}

	public List findAll() {
		log.debug("finding all RightResource instances");
		try {
			String queryString = "from RightResource";
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public RightResource merge(RightResource detachedInstance) {
		log.debug("merging RightResource instance");
		try {
			RightResource result = (RightResource) getSession().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(RightResource instance) {
		log.debug("attaching dirty RightResource instance");
		try {
			getSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(RightResource instance) {
		log.debug("attaching clean RightResource instance");
		try {
			getSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}
}