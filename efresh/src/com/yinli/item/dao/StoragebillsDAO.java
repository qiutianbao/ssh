package com.yinli.item.dao;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.donglusoft.zzz.util.BaseHibernateDAO;
import com.yinli.item.vo.Storagebills;
import com.yinli.util.common.DateUtil;

@Repository
public class StoragebillsDAO extends BaseHibernateDAO{

	public Map<String, Object> findInfoByConditions(Storagebills storagebills,Integer address,Date storagetime) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Storagebills> infoList = new ArrayList<Storagebills>();
		int infoListCount = 0;
		try {
			String hql = "FROM Storagebills s where (1=1) ";
			SimpleDateFormat formater = new SimpleDateFormat();
			formater.applyPattern("yyyy-MM-dd");
			String time1 = formater.format(storagetime);
			String time2 = formater.format(storagebills.getStoragetime2());
			if (time1 != null || time2 != null) {
				hql = hql + " and(s.storagetime between '"+time1+"' and '"+time2+"')";
			}
			if(address != null){
				hql = hql + " and (s.idStore = '"+address+"')";
			}
			
			Query query = getSession().createQuery(hql);
			infoList = query.list();
			infoListCount = query.list().size();
			map.put("infoList", infoList);
			map.put("infoListCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
	
	public void save(Storagebills transientInstance) {
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
				Storagebills newinfo = findById(Integer.parseInt(id[i]));
				newinfo.setDr(1);
				newinfo.setTs(DateUtil.getTs());
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Storagebills findById(java.lang.Integer id) {
		try {
			Storagebills storagebills = (Storagebills) getSession().get("com.yinli.item.vo.Storagebills", id);
			return storagebills;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public List<Storagebills> findByIds(java.lang.Integer id) {
		try {
			String hql = "FROM Storagebills where dr = 0";
			if(id != null){
				hql = hql + " and idNumber="+id;
			}
			List<Storagebills> storagebills = getSession().createQuery(hql).list();
			return storagebills;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Storagebills storagebills){
		try {
			getSession().update(storagebills);
			getSession().flush();
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public List findAll(String queryString) {
		try {
			Query query = getSession().createQuery(queryString);
			return query.list();
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
}
