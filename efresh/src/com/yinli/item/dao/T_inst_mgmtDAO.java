package com.yinli.item.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.T_inst_mgmt;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2013-11-07
 */

@Repository
public class T_inst_mgmtDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(T_inst_mgmt selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<T_inst_mgmt> infoList = new ArrayList<T_inst_mgmt>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(T_inst_mgmt.class);
			Criteria countCriteria = getSession().createCriteria(T_inst_mgmt.class);
			
			Field[] fields = selectinfo.getClass().getDeclaredFields();
			String name;
			Method m;
			for(Field field : fields){
				name = field.getName(); // 获取属性的名字
	            m= selectinfo.getClass().getMethod("get" + name.substring(0, 1).toUpperCase() + name.substring(1));
	            String value = (String) m.invoke(selectinfo); 
	            if(value != null && !"".equals(value.trim())){
	            	addEQConditions(listCriteria, countCriteria, name, value.trim());
	            }
			}
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<T_inst_mgmt>) criteriaList(listCriteria, start, limit);
			
			List<T_inst_mgmt> list = new ArrayList<T_inst_mgmt>();
			if(infoList != null){
				for(int i=0; i<infoList.size(); i++){
					T_inst_mgmt inst = infoList.get(i);
					//机构种类转码
					if(inst.getInst_type().equals("1")){
						inst.setInst_type("营业部");
					}else if(inst.getInst_type().equals("2")){
						inst.setInst_type("一级支行");
					}else if(inst.getInst_type().equals("3")){
						inst.setInst_type("网点");
					}
					//机构状态
					if(inst.getInst_busn_stat().equals("1")){
						inst.setInst_busn_stat("正常");
					}else if(inst.getInst_busn_stat().equals("2")){
						inst.setInst_busn_stat("禁用");
					}
					list.add(inst);
				}
			}
			
			
			map.put("t_inst_mgmtList", list);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}
	
	
	@SuppressWarnings("unchecked")
	public List findComp(String hql,Object[] v)  {
		Query query = getSession().createQuery(hql);
		query.setString("idNumber", (String)v[0]);
		return query.list();
	}

	/*
	 * 查找上级支行编号
	 */
	public List findUpBrno(String hql)  {
		Query query = getSession().createQuery(hql);
		List list =query.list();
	
		return query.list();
	}
	
	public void save(T_inst_mgmt transientInstance) {
		try {
			getSession().save(transientInstance);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void delete(String delData){
		String[] id = delData.split("#");
		for( int i=0; i<id.length; i++){
			T_inst_mgmt inst = new T_inst_mgmt();
			inst.setIdNumber(id[i]);
			getSession().delete(inst);
		}
	}

	public T_inst_mgmt findById(java.lang.String id) {
		//获取网点权限
		if(id.length()!=6){
			id="44"+id;
		}
		
		
		try {
			T_inst_mgmt instance = (T_inst_mgmt) getSession().get("com.yinli.item.vo.T_inst_mgmt", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(T_inst_mgmt modifyinfo){
		try {
			getSession().update(modifyinfo);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}

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
	
	
	public List findAll1( String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);

			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public int count(String queryString){
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list().size();
		} catch (Exception re) {
			re.printStackTrace();
			return 0;
		}
	}

	public List<T_inst_mgmt> findAllSupInst(String queryString) {
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
}
