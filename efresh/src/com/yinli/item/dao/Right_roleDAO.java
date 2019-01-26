package com.yinli.item.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.donglusoft.zzz.util.BaseHibernateDAO;
import com.yinli.item.vo.Right_role;

@Repository
public class Right_roleDAO extends BaseHibernateDAO {

	public List<Right_role> findAll(String hql){
		try {
			Query query = getSession().createQuery(hql);
			return query.list();
		} catch (HibernateException e) {
			e.printStackTrace();
		}
		return null;
	}
}
