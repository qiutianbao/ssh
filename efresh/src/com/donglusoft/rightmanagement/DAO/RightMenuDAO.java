package com.donglusoft.rightmanagement.DAO;

import java.util.List;

import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.criterion.Example;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.donglusoft.rightmanagement.domain.RightMenu;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 * A data access object (DAO) providing persistence and search support for
 * RightMenu entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see com.donglusoft.rightmanagement.domain.RightMenu
 * @author MyEclipse Persistence Tools
 */
@Repository("rightMenuDAO")
public class RightMenuDAO extends BaseHibernateDAO {
	private static final Logger log = LoggerFactory
			.getLogger("rightmanagementbusiness");
	// property constants
	public static final String QTIP = "qtip";
	public static final String DESCN = "descn";
	public static final String NAME = "name";
	public static final String IMAGE = "image";

	public void save(RightMenu transientInstance) {
		log.debug("saving RightMenu instance");
		try {
			getSession().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(RightMenu persistentInstance) {
		log.debug("deleting RightMenu instance");
		try {
			getSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public RightMenu findById(String id) {
		log.debug("getting RightMenu instance with id: " + id);
		try {
			RightMenu instance = (RightMenu) getSession().get(
					"com.donglusoft.rightmanagement.domain.RightMenu", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(RightMenu instance) {
		log.debug("finding RightMenu instance by example");
		try {
			List results = getSession().createCriteria(
					"com.donglusoft.rightmanagement.domain.RightMenu").add(
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
		log.debug("finding RightMenu instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from RightMenu as model where model."
					+ propertyName + "= :value";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter("value", value);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByQtip(Object qtip) {
		return findByProperty(QTIP, qtip);
	}

	public List findByDescn(Object descn) {
		return findByProperty(DESCN, descn);
	}

	public List findByName(Object name) {
		return findByProperty(NAME, name);
	}

	public List findByImage(Object image) {
		return findByProperty(IMAGE, image);
	}

	public List findAll() {
		log.debug("finding all RightMenu instances");
		try {
			String queryString = "from RightMenu rightMenu where rightMenu.deletestate = '0' and rightMenu.rightMenu is not null";
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			re.printStackTrace();
			log.error("find all failed", re);
			throw re;
		}
	}

	public RightMenu merge(RightMenu detachedInstance) {
		log.debug("merging RightMenu instance");
		try {
			RightMenu result = (RightMenu) getSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(RightMenu instance) {
		log.debug("attaching dirty RightMenu instance");
		try {
			getSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(RightMenu instance) {
		log.debug("attaching clean RightMenu instance");
		try {
			getSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}
}