package com.yinli.item.dao;

import org.springframework.stereotype.Repository;

import com.donglusoft.zzz.util.BaseHibernateDAO;
import com.yinli.item.vo.SysLog;

@Repository
public class SysLogDao extends BaseHibernateDAO {

	public void save(SysLog instance) {
		getSession().save(instance);
		getSession().flush();
	}

}
