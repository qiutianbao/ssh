package com.donglusoft.rightmanagement.DAO;

import java.util.List;

import javax.persistence.Entity;

import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.criterion.Example;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.donglusoft.rightmanagement.domain.RightMenuRole;
import com.donglusoft.rightmanagement.domain.RightRoleUser;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 * A data access object (DAO) providing persistence and search support for
 * RightMenuRole entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see com.donglusoft.rightmanagement.domain.RightMenuRole
 * @author MyEclipse Persistence Tools
 */
@Repository("rightMenuRoleDAO")
public class RightMenuRoleDAO extends BaseHibernateDAO {
	private static final Logger log = LoggerFactory
			.getLogger("rightmanagementbusiness");
	// property constants
	public static final String MENU_ID = "menuId";
	public static final String ROLE_ID = "roleId";

	public void save(RightMenuRole transientInstance) {
		log.debug("saving RightMenuRole instance");
		try {
			getSession().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(RightMenuRole persistentInstance) {
		log.debug("deleting RightMenuRole instance");
		try {
			getSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public RightMenuRole findById(java.lang.String id) {
		log.debug("getting RightMenuRole instance with id: " + id);
		try {
			RightMenuRole instance = (RightMenuRole) getSession().get(
					"com.donglusoft.rightmanagement.domain.RightMenuRole", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(RightMenuRole instance) {
		log.debug("finding RightMenuRole instance by example");
		try {
			List results = getSession().createCriteria(
					"com.donglusoft.rightmanagement.domain.RightMenuRole").add(
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
		log.debug("finding RightMenuRole instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from RightMenuRole as model where model."
					+ propertyName + "= :value";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter("value", value);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByMenuId(Object menuId) {
		return findByProperty(MENU_ID, menuId);
	}

	public List findByRoleId(Object roleId) {
		return findByProperty(ROLE_ID, roleId);
	}

	public List findAll() {
		log.debug("finding all RightMenuRole instances");
		try {
			String queryString = "from RightMenuRole";
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public RightMenuRole merge(RightMenuRole detachedInstance) {
		log.debug("merging RightMenuRole instance");
		try {
			RightMenuRole result = (RightMenuRole) getSession().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(RightMenuRole instance) {
		log.debug("attaching dirty RightMenuRole instance");
		try {
			getSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(RightMenuRole instance) {
		log.debug("attaching clean RightMenuRole instance");
		try {
			getSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}
	
	public RightMenuRole findByRoleIdAndMenuId(String roleId,String menuId) {
		log.debug("+++++++++11");
		String queryString = "from RightMenuRole rightMenuRole where rightMenuRole.roleId = '"+roleId+"' and rightMenuRole.menuId ='"+menuId+"'";
		log.debug(queryString);
		List<RightMenuRole> rightMenuRoleList = getSession().createQuery(queryString).list();
		log.debug("rightMenuRoleList.size()"+rightMenuRoleList.size());
		RightMenuRole rightMenuRole = rightMenuRoleList.get(0);
		log.debug("删除rightMenuRole->:"+rightMenuRole.getId());
		return rightMenuRole;
	}
	public void del(String roleId,String delData){
		log.debug("delData"+delData);
		String[] menuId = delData.split(",");
		for(int i = 0 ;i <menuId.length;i++){
			log.debug("+++++++++++++++1");
			RightMenuRole rightMenuRole = findByRoleIdAndMenuId(roleId, menuId[i]);
			log.debug("+++++++++++++++2");
			delete(rightMenuRole);
			log.debug("+++++++++++++++3");
		}
		log.debug("删除完毕");
	}
	public void add(String roleId,String addData){
			log.debug(roleId+"        "+addData);
			String [] menuId = addData.split(",");
			for(int i = 0; i < menuId.length;i++){
				if(!menuId[i].equals("null")){
					RightMenuRole rightMenuRole = new RightMenuRole();
					rightMenuRole.setMenuId(menuId[i]);
					rightMenuRole.setRoleId(roleId);
					save(rightMenuRole);
					log.debug("DAO保存成功++++++++++++++++++++++");
				}else{
					log.debug("null不保存");
				}
			}
	}
	
	public void add2(RightMenuRole rightMenuRole){
		this.getSession().save(rightMenuRole);
	}
	
	//更新权限菜单
	public void update(RightMenuRole rightMenuRole){
		this.getSession().update(rightMenuRole);
	}
	
	
	
}