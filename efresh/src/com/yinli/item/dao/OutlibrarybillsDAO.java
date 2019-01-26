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
import com.yinli.item.vo.Outlibrarybills;
import com.yinli.item.vo.Storagebills;
import com.yinli.util.common.DateUtil;

@Repository
public class OutlibrarybillsDAO extends BaseHibernateDAO{
	public Map<String, Object> findInfoByConditions(Outlibrarybills outlibrarybills,Integer address,Date storagetime) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Outlibrarybills> infoList = new ArrayList<Outlibrarybills>();
		int infoListCount = 0;
		try {
			String hql = "FROM Outlibrarybills s where (dr=0) ";
			SimpleDateFormat formater = new SimpleDateFormat();
			formater.applyPattern("yyyy-MM-dd");
			String time1 = formater.format(storagetime);
			String time2 = formater.format(outlibrarybills.getOutlibrarytime2());
			if (time1 != null || time2 != null) {
				hql = hql + " and(s.outlibrarytime between '"+time1+"' and '"+time2+"')";
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
	public List<Outlibrarybills> findByIds(java.lang.Integer id) {
		try {
			String hql = "FROM Outlibrarybills where dr = 0";
			if(id != null){
				hql = hql + " and idNumber="+id;
			}
			List<Outlibrarybills> outlibrarybills = getSession().createQuery(hql).list();
			return outlibrarybills;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	public void save(Outlibrarybills transientInstance) {
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
				Outlibrarybills newinfo = findById(Integer.parseInt(id[i]));
				newinfo.setDr(1);
				newinfo.setTs(DateUtil.getTs());
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Outlibrarybills findById(java.lang.Integer id) {
		try {
			Outlibrarybills outlibrarybills = (Outlibrarybills) getSession().get("com.yinli.item.vo.Outlibrarybills", id);
			return outlibrarybills;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Outlibrarybills outlibrarybills){
		try {
			getSession().update(outlibrarybills);
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
