package com.yinli.item.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.TypeVariable;

import net.sf.json.JSONArray;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.yinli.item.vo.Commodity;
import com.yinli.item.vo.Commoditylevel;
import com.yinli.item.vo.Storebrand;
import com.donglusoft.zzz.util.BaseHibernateDAO;

/**
 *
 *创建日期: 2016-01-25
 */

@Repository
public class CommoditylevelDAO extends BaseHibernateDAO {
	
	public Map<String,Object> findInfoByConditions(Commodity commodity,Commoditylevel selectinfo,int start,int limit,Integer idCategory) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
	
		
		int infoListCount = 0;
		try {
			String hql = "FROM Commoditylevel c , Commodity cc where (c.idCommodity=cc.idNumber) and (c.dr != 1 or c.dr is null)";
			//设置参数
			if(commodity.getIdCategory() != null){
				hql = hql+" and cc.idCategory="+commodity.getIdCategory();
			}
			if(selectinfo.getLevelname() != null && !(selectinfo.getLevelname().equals(""))){
				hql = hql+" and c.levelname='"+selectinfo.getLevelname()+"'";
			}
			if(selectinfo.getIdCompany()!= null && !(selectinfo.getIdCompany().equals(""))){
				hql = hql+" and c.idCompany="+selectinfo.getIdCompany();
			}
			if(commodity.getStatus() != null && !(commodity.getStatus().equals("")) && commodity.getStatus() != -1){
				hql = hql+" and cc.status="+commodity.getStatus();
			}
			Query query = getSession().createQuery(hql);
			infoListCount = query.list().size();
		    //设置煤业显示多少个，设置多大结果
		    query.setMaxResults(limit);
		    //设置起点
		    query.setFirstResult(start);
		    List<Object[]>  infoList = query.list();
		    map.put("commoditylevelList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
	
	public Map<String, Object> findInfoByCondition(Commoditylevel selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Commoditylevel> infoList = new ArrayList<Commoditylevel>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Commoditylevel.class);
			Criteria countCriteria = getSession().createCriteria(Commoditylevel.class);
			
			Field[] fields = selectinfo.getClass().getDeclaredFields();
			String name;
			Method m;
			for(Field field : fields){
				name = field.getName(); // 获取属性的名字
	            m= selectinfo.getClass().getMethod("get" + name.substring(0, 1).toUpperCase() + name.substring(1));
	            String value = (String)m.invoke(selectinfo);
	            if(value != null && !"".equals(value.trim())){
	            	addEQConditions(listCriteria, countCriteria, name, value.trim());
	            }
			}
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<Commoditylevel>) criteriaList(listCriteria, start, limit);
			
			map.put("commoditylevelList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Commoditylevel transientInstance) {
		try {
			getSession().save(transientInstance);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void delete(String delData){
		String[] id = delData.split("#");
		try {
			for( int i=0; i<id.length; i++){
				Commoditylevel newinfo = findById(Integer.parseInt(id[i]));
				getSession().delete(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Commoditylevel findById(java.lang.Integer id) {
		try {
			Commoditylevel instance = (Commoditylevel) getSession().get("com.yinli.item.vo.Commoditylevel", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public List<Commoditylevel> findByIds(Integer id) {
		try {
			String queryString = "FROM Commoditylevel model where model.idCommodity="+id;
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Commoditylevel modifyinfo){
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
	
	public int count(String queryString){
		try {
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list().size();
		} catch (Exception re) {
			re.printStackTrace();
			return 0;
		}
	}
	
	public Map<String, Object> findInfoByIdCommodity(Commoditylevel commoditylevel,int start,int limit){
		int infoListCount = 0;
		List<Commoditylevel> infoList = new ArrayList<Commoditylevel>();
		Criteria listCriteria = getSession().createCriteria(Commoditylevel.class);
		Criteria countCriteria = getSession().createCriteria(Commoditylevel.class);
		addEQConditions(listCriteria,countCriteria,"idCommodity",commoditylevel.getIdCommodity());
	//	listCriteria.add(Restrictions.eq("commodity.idNumber", commoditylevel.getIdCommodity()));
	//	countCriteria.add(Restrictions.eq("commodity.idNumber", commoditylevel.getIdCommodity()));
		infoListCount = criteriaCount(countCriteria);
		infoList = (List<Commoditylevel>) criteriaList(listCriteria, start, limit);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("listCount", infoListCount);
		map.put("commoditylevelList", infoList);
		return map;
	}
	
	
}
