package com.donglusoft.person.DAO;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.hibernate.Criteria;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.criterion.Example;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.donglusoft.person.domain.Personelinfo;
import com.donglusoft.zzz.util.BaseHibernateDAO;
import com.donglusoft.zzz.util.PropertiesReader;

/**
 * A data access object (DAO) providing persistence and search support for
 * Personelinfo entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see com.donglusoft.person.domain.Personelinfo
 * @author MyEclipse Persistence Tools
 */

@Repository
public class PersonelinfoDAO extends BaseHibernateDAO {
	
	public Map<String, Object> findInfoByConditions(Personelinfo selectinfo, int start, int limit) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Personelinfo> infoList = new ArrayList<Personelinfo>();
		int infoListCount = 0;
		try {
			Criteria listCriteria = getSession().createCriteria(Personelinfo.class);
			Criteria countCriteria = getSession().createCriteria(Personelinfo.class);
			if(!"".equals(selectinfo.getIdnumber().trim()))
				addLIKEConditions(listCriteria, countCriteria, "idnumber", "%"+selectinfo.getIdnumber().trim()+"%");
			if(!"".equals(selectinfo.getName().trim()))
				addLIKEConditions(listCriteria, countCriteria, "name", "%"+selectinfo.getName().trim()+"%");
			if(!"".equals(selectinfo.getGender().trim()))
				addEQConditions(listCriteria, countCriteria, "gender", selectinfo.getGender().trim());
			if(!"".equals(selectinfo.getState().trim()))
				addEQConditions(listCriteria, countCriteria, "state", selectinfo.getState().trim());
			if(!"".equals(selectinfo.getZhmm().trim()))
				addEQConditions(listCriteria, countCriteria, "zhmm", selectinfo.getZhmm().trim());
			infoListCount = criteriaCount(countCriteria);
			infoList = (List<Personelinfo>) criteriaList(listCriteria, start, limit);
			Properties properties = PropertiesReader.getPropertiesReader().getProperties();
			
			for(int i=0; i<infoList.size(); i++){
				infoList.get(i).setShowstate(properties.getProperty(infoList.get(i).getState()));
			}
			map.put("personelInfoList", infoList);
			map.put("listCount", infoListCount);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return map;
	}

	public void save(Personelinfo transientInstance) {
		try {
			getSession().save(transientInstance);
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void delete(String delData){
		String[] id = delData.split("#");
		Properties properties = PropertiesReader.getPropertiesReader().getProperties();
		try {
			for( int i=0; i<id.length; i++){
				Personelinfo newinfo = findById(id[i]);
				newinfo.setState(properties.getProperty("PERSON_BASE_LEFT"));
				update(newinfo);
			}
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public Personelinfo findById(java.lang.String id) {
		try {
			Personelinfo instance = (Personelinfo) getSession().get("com.donglusoft.person.domain.Personelinfo", id);
			return instance;
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void update(Personelinfo modifyinfo){
		try {
			getSession().update(modifyinfo);
		} catch (RuntimeException re) {
			throw re;
		}
	}

	public List findAll( int start, int limit, String queryString) {
		try {
//			String queryString = "from Personelinfo model order by model.createtime desc";
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
//			String queryString = "from Personelinfo ";
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list().size();
		} catch (Exception re) {
			re.printStackTrace();
			return 0;
		}
	}
	



}