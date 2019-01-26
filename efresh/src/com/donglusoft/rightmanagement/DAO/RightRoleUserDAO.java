package com.donglusoft.rightmanagement.DAO;

import java.util.List;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.criterion.Example;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.donglusoft.rightmanagement.domain.RightRole;
import com.donglusoft.rightmanagement.domain.RightRoleUser;

import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 * A data access object (DAO) providing persistence and search support for
 * RightRoleUser entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see com.donglusoft.rightmanagement.domain.RightRoleUser
 * @author MyEclipse Persistence Tools
 */
@Repository("rightRoleUserDAO")
public class RightRoleUserDAO extends BaseHibernateDAO {
	private static final Logger log = LoggerFactory
			.getLogger("rightmanagementbusiness");
	// property constants
	public static final String ROLE_ID = "roleId";
	public static final String USER_ID = "userId";

	public void save(RightRoleUser transientInstance) {
		log.debug("saving RightRoleUser instance");
		try {
			getSession().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			re.printStackTrace();
			throw re;
		}
	}

	public void delete(RightRoleUser persistentInstance) {
		log.debug("deleting RightRoleUser instance");
		try {
			getSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			re.printStackTrace();
			throw re;
		}
	}

	public RightRoleUser findById(java.lang.String id) {
		log.debug("getting RightRoleUser instance with id: " + id);
		try {
			RightRoleUser instance = (RightRoleUser) getSession().get(
					"com.donglusoft.rightmanagement.domain.RightRoleUser", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			re.printStackTrace();
			throw re;
		}
	}

	public List findByExample(RightRoleUser instance) {
		log.debug("finding RightRoleUser instance by example");
		try {
			List results = getSession().createCriteria(
					"com.donglusoft.rightmanagement.domain.RightRoleUser").add(
					Example.create(instance)).list();
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			re.printStackTrace();
			throw re;
		}
	}

	public List findByProperty(String propertyName, Object value) {
		log.debug("finding RightRoleUser instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from RightRoleUser as model where model."
					+ propertyName + "= :value";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter("value", value.toString());
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			re.printStackTrace();
			throw re;
		}
	}

	public List findByRoleId(Object roleId) {
		return findByProperty(ROLE_ID, roleId);
	}

	public List findByUserId(Object userId) {
		return findByProperty(USER_ID, userId);
	}
//	public List<RightRoleUser> findByRoleId(String roleId) {
//		log.debug("finding all RightUser instances");
//		try {
//			String queryString = "from RightRoleUser rightRoleUser where rightRoleUser.rightRole.id = '"+roleId+"'";
//			Query queryObject = getSession().createQuery(queryString);
//			return queryObject.list();
//		} catch (RuntimeException re) {
//			log.error("find all failed", re);
//			throw re;
//		}
//	}
//	
//	public List<RightRoleUser> findByUserId(String userId) {
//		log.debug("finding all RightUser instances");
//		try {
//			String queryString = "from RightRoleUser rightRoleUser where rightRoleUser.rightUser.id = '"+userId+"'";
//			Query queryObject = getSession().createQuery(queryString);
//			return queryObject.list();
//		} catch (RuntimeException re) {
//			log.error("find all failed", re);
//			throw re;
//		}
//	}

	public List findAll() {
		log.debug("finding all RightRoleUser instances");
		try {
			String queryString = "from RightRoleUser";
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			re.printStackTrace();
			throw re;
		}
	}

	public RightRoleUser merge(RightRoleUser detachedInstance) {
		log.debug("merging RightRoleUser instance");
		try {
			RightRoleUser result = (RightRoleUser) getSession().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			re.printStackTrace();
			throw re;
		}
	}

	public void attachDirty(RightRoleUser instance) {
		log.debug("attaching dirty RightRoleUser instance");
		try {
			getSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			re.printStackTrace();
			throw re;
		}
	}

	public void attachClean(RightRoleUser instance) {
		log.debug("attaching clean RightRoleUser instance");
		try {
			getSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			re.printStackTrace();
			throw re;
		}
	}
	
	public void add(String userId,String delData){
		log.debug(userId+"        "+delData);
		try {
			String [] roleId = delData.split(",");
			for(int i = 0; i < roleId.length;i++){
				if(!roleId[i].equals("null")){
					RightRoleUser rightRoleUser = new RightRoleUser();
					rightRoleUser.setRoleId(roleId[i]);
					rightRoleUser.setUserId(userId);
					save(rightRoleUser);
					log.debug("DAO保存成功++++++++++++++++++++++");
				}else{
					log.debug("null不保存");
				}
			}
		} catch (RuntimeException e) {
			// TODO: handle exception
			log.error("add failed",e);
			e.printStackTrace();
			throw e;
		}
		
	}
	public RightRoleUser findByUserIdAndRoleId(String userId,String roleId) {
		log.debug("+++++++++11");
		try {
			String queryString = "from RightRoleUser rightRoleUser where rightRoleUser.userId = '"+userId+"' and rightRoleUser.roleId ='"+roleId+"'";
			log.debug(queryString);
			List<RightRoleUser> rightRoleUserList = getSession().createQuery(queryString).list();
			log.debug("rightRoleUserList.size()"+rightRoleUserList.size());
			RightRoleUser rightRoleUser = rightRoleUserList.get(0);
			log.debug("删除rightroleuserId->:"+rightRoleUser.getId());
			return rightRoleUser;
		} catch (RuntimeException e) {
			// TODO: handle exception
			log.error("findByUserIdAndRoleId() failed",e);
			e.printStackTrace();
			throw e;
		}
		
	}
	public void del(String userId,String delData){
		try {
			log.debug("delData"+delData);
			String[] roleId = delData.split(",");
			for(int i = 0 ;i <roleId.length;i++){
				log.debug("+++++++++++++++1");
				RightRoleUser rightRoleUser = findByUserIdAndRoleId(userId, roleId[i]);
				log.debug("+++++++++++++++2");
				delete(rightRoleUser);
				log.debug("+++++++++++++++3");
			}
			log.debug("删除完毕");
		} catch (RuntimeException e) {
			// TODO: handle exception
			log.error("del failed",e);
			e.printStackTrace();
			throw e;
		}
		
	}
//	public void del(String delData){
//		String[] id = delData.split(",");
//		for(int i = 0;i < id.length;i++){
//			RightRoleUser rightRoleUser = findById(id[i]);
//			delete(rightRoleUser);
//		}
//	}
}