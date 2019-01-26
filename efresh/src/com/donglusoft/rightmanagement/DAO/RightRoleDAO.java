package com.donglusoft.rightmanagement.DAO;

import java.util.List;

import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.criterion.Example;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.donglusoft.rightmanagement.domain.RightRole;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 * A data access object (DAO) providing persistence and search support for
 * RightRole entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see com.donglusoft.rightmanagement.domain.RightRole
 * @author MyEclipse Persistence Tools
 */
@Repository("rightRoleDAO")
public class RightRoleDAO extends BaseHibernateDAO {
	private static final Logger log = LoggerFactory
			.getLogger("rightmanagementbusiness");
	// property constants
	public static final String DESCN = "descn";
	public static final String NAME = "name";

	public void save(RightRole transientInstance) {
		log.debug("saving RightRole instance");
		try {
			getSession().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(RightRole persistentInstance) {
		log.debug("deleting RightRole instance");
		try {
			getSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public RightRole findById(String id) {
		log.debug("getting RightRole instance with id: " + id);
		try {
			RightRole instance = (RightRole) getSession().get(
					"com.donglusoft.rightmanagement.domain.RightRole", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(RightRole instance) {
		log.debug("finding RightRole instance by example");
		try {
			List results = getSession().createCriteria(
					"com.donglusoft.rightmanagement.domain.RightRole").add(
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
		log.debug("finding RightRole instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from RightRole as model where model."
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

	public List findByName(Object name) {
		return findByProperty(NAME, name);
	}

	public List findAll() {
		log.debug("finding all RightRole instances");
		try {
			String queryString = "from RightRole";
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public RightRole merge(RightRole detachedInstance) {
		log.debug("merging RightRole instance");
		try {
			RightRole result = (RightRole) getSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(RightRole instance) {
		log.debug("attaching dirty RightRole instance");
		try {
			getSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(RightRole instance) {
		log.debug("attaching clean RightRole instance");
		try {
			getSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}
	
	public List <RightRole> findRightRoleByPage(int start,int limit){
		log.debug("finding all  instances");
		try {
			String queryString = "from RightRole rightRole order by rightRole.descn";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setFirstResult(start);
			queryObject.setMaxResults(limit);
			log.debug("strat:"+start+"   "+"limit:"+limit);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	public int findRightRoleNum(){
		try {
			String queryString = "select count(rightRole.id) from RightRole rightRole";
			Query queryObject = getSession().createQuery(queryString);
			return Integer.parseInt(queryObject.uniqueResult().toString());
		} catch (RuntimeException e) {
			// TODO: handle exception
			log.error("findRightRoleNum()",e);
			throw e;
		}
			
	}
	
	public void update(RightRole rightRole) {
		try {
			getSession().update(rightRole);
		} catch (RuntimeException e) {
			// TODO: handle exception
			log.error("update failed",e);
			throw e;
		}
		
	}
	
//	public void del(String delData){
////		log.debug("delDAO");
//		String id[] = delData.split(",");
//			for (int i = 0; i < id.length; i++) {
//				log.debug(id[i]);
//				RightRole rightRole = new RightRole(id[i]);
//				delete(rightRole);
//			}
////			log.debug("删除成功");
//	}
	public void del(String delId){
		try {
			RightRole rightRole = new RightRole(delId);
			delete(rightRole);
		} catch (RuntimeException e) {
			// TODO: handle exception
			log.error("del failed",e);
			throw e;
		}
		
	}
}